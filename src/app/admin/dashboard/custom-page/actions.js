"use server";

import { revalidatePath } from "next/cache";
import fs from "fs";
import path from "path";
import AdmZip from "adm-zip";
import db from "../../../../../prisma/db";
import { verifyAdmin } from "@/lib/auth";
import { addOrUpdateUrlInSitemap, removeUrlFromSitemap } from "@/lib/sitemap-helper";
import { parseHtmlTemplate, rewriteImagePaths, sanitizeSlug } from "@/lib/html-page-parser";

const cssDir = path.join(process.cwd(), "public/uploads/css");
const customPagesMediaDir = path.join(process.cwd(), "public/uploads/custom-pages/media");

// ✅ Ensure CSS directory exists
const ensureCssDir = () => {
  if (!fs.existsSync(cssDir)) {
    fs.mkdirSync(cssDir, { recursive: true });
  }
};

// ✅ Ensure Custom Pages Media directory exists
const ensureMediaDir = () => {
  if (!fs.existsSync(customPagesMediaDir)) {
    fs.mkdirSync(customPagesMediaDir, { recursive: true });
  }
};

// ✅ Ensure slug uniqueness
async function getUniqueSlug(baseSlug, excludeId = null) {
  let slug = baseSlug;
  let counter = 1;

  while (true) {
    const existing = await db.customPage.findFirst({
      where: {
        slug,
        ...(excludeId ? { NOT: { id: excludeId } } : {}),
      },
    });
    if (!existing) break;
    slug = `${baseSlug}-${counter++}`;
  }
  return slug;
}

// ✅ Create Custom Page
export async function createCustomPage(formData) {
  await verifyAdmin();
  try {
    const title = formData.get("title");
    let slug = formData.get("slug");
    const content = formData.get("content");
    const cssFile = formData.get("cssFile");

    // sanitize slug
    slug = sanitizeSlug(slug) || sanitizeSlug(title) || `page-${Date.now()}`;
    const uniqueSlug = await getUniqueSlug(slug);

    const customPage = await db.customPage.create({
      data: {
        title,
        slug: uniqueSlug,
        content,
        cssFile,
      },
    });

    // Sync to Sitemap
    try {
      await addOrUpdateUrlInSitemap(uniqueSlug);
    } catch (sitemapErr) {
      console.error("Failed to add URL to sitemap:", sitemapErr);
    }

    // Sync to SEO table
    try {
      const pageUrl = `/${uniqueSlug}`;
      const existingSeo = await db.seo.findFirst({ where: { pageurl: pageUrl } });
      if (existingSeo) {
        await db.seo.update({
          where: { id: existingSeo.id },
          data: { title },
        });
      } else {
        await db.seo.create({
          data: {
            pageurl: pageUrl,
            title,
            description: "",
            script: "",
          },
        });
      }
    } catch (seoErr) {
      console.error("Failed to sync SEO for new custom page:", seoErr);
    }

    revalidatePath("/admin/dashboard/custom-page");
    revalidatePath("/admin/dashboard/seo");
    revalidatePath("/sitemap.xml");
    return customPage;
  } catch (error) {
    console.error("Error creating custom page:", error);
    throw new Error("Failed to create custom page");
  }
}

// ✅ Update Custom Page
export async function updateCustomPage(formData) {
  await verifyAdmin();
  try {
    const id = parseInt(formData.get("id"));
    const title = formData.get("title");
    let slug = formData.get("slug");
    const content = formData.get("content");
    const cssFile = formData.get("cssFile");

    const existingPage = await db.customPage.findUnique({ where: { id } });
    if (!existingPage) throw new Error("Custom page not found");

    const oldSlug = existingPage.slug;

    // sanitize slug
    slug = sanitizeSlug(slug) || sanitizeSlug(title) || oldSlug;
    const uniqueSlug = await getUniqueSlug(slug, id);

    const customPage = await db.customPage.update({
      where: { id },
      data: {
        title,
        slug: uniqueSlug,
        content,
        cssFile,
      },
    });

    // Sync Sitemap (handles rename or touch)
    try {
      await addOrUpdateUrlInSitemap(uniqueSlug, oldSlug);
    } catch (sitemapErr) {
      console.error("Failed to update URL in sitemap:", sitemapErr);
    }

    // Sync SEO table
    try {
      const oldUrl = `/${oldSlug}`;
      const newUrl = `/${uniqueSlug}`;
      const existingSeo = await db.seo.findFirst({ where: { pageurl: oldUrl } });

      if (existingSeo) {
        await db.seo.update({
          where: { id: existingSeo.id },
          data: {
            pageurl: newUrl,
            title,
          },
        });
      } else {
        const targetSeo = await db.seo.findFirst({ where: { pageurl: newUrl } });
        if (targetSeo) {
          await db.seo.update({
            where: { id: targetSeo.id },
            data: { title },
          });
        } else {
          await db.seo.create({
            data: {
              pageurl: newUrl,
              title,
              description: "",
              script: "",
            },
          });
        }
      }
    } catch (seoErr) {
      console.error("Failed to sync SEO on custom page update:", seoErr);
    }

    revalidatePath("/admin/dashboard/custom-page");
    revalidatePath("/admin/dashboard/seo");
    revalidatePath("/sitemap.xml");
    return customPage;
  } catch (error) {
    console.error("Error updating custom page:", error);
    throw new Error("Failed to update custom page");
  }
}

// ✅ Delete Custom Page
export async function deleteCustomPage(id) {
  await verifyAdmin();
  try {
    const pageId = parseInt(id);
    const existing = await db.customPage.findUnique({ where: { id: pageId } });
    if (!existing) return true;

    const pageSlug = existing.slug;
    const pageCss = existing.cssFile;

    await db.customPage.delete({ where: { id: pageId } });

    // Remove from Sitemap
    try {
      await removeUrlFromSitemap(pageSlug);
    } catch (sitemapErr) {
      console.error("Failed to remove URL from sitemap:", sitemapErr);
    }

    // Remove from SEO table
    try {
      await db.seo.deleteMany({
        where: { pageurl: `/${pageSlug}` },
      });
    } catch (seoErr) {
      console.error("Failed to remove SEO entry for deleted page:", seoErr);
    }

    // Remove associated custom CSS file if it was created specifically for this slug
    if (pageCss && pageCss.endsWith(".css")) {
      const safeName = path.basename(pageCss);
      const filePath = path.join(cssDir, safeName);
      if (fs.existsSync(filePath) && (safeName === `${pageSlug}.css` || safeName.startsWith(`page-${pageId}`))) {
        try {
          fs.unlinkSync(filePath);
        } catch (e) {
          // ignore
        }
      }
    }

    revalidatePath("/admin/dashboard/custom-page");
    revalidatePath("/admin/dashboard/seo");
    revalidatePath("/sitemap.xml");
    return true;
  } catch (error) {
    console.error("Error deleting custom page:", error);
    throw new Error("Failed to delete custom page");
  }
}

// ✅ Bulk Upload Pages (ZIP or HTML files)
export async function bulkUploadPages(formData) {
  await verifyAdmin();
  ensureCssDir();
  ensureMediaDir();

  try {
    const files = formData.getAll("files");
    const singleFile = formData.get("file");
    const uploadFilesList = files && files.length > 0 ? files : singleFile ? [singleFile] : [];

    if (uploadFilesList.length === 0) {
      throw new Error("No files uploaded");
    }

    const processedPages = [];
    let totalImagesExtracted = 0;

    for (const file of uploadFilesList) {
      const filename = file.name || "upload.zip";
      const isZip = filename.toLowerCase().endsWith(".zip");
      const isHtml = filename.toLowerCase().endsWith(".html") || filename.toLowerCase().endsWith(".htm");

      if (isZip) {
        const buffer = Buffer.from(await file.arrayBuffer());
        const zip = new AdmZip(buffer);
        const entries = zip.getEntries();

        // 1. Identify entries, filtering out Mac / OS hidden files
        const validEntries = entries.filter(
          (e) => !e.isDirectory && !e.entryName.includes("__MACOSX") && !e.entryName.startsWith(".")
        );

        const htmlEntries = validEntries.filter(
          (e) => e.entryName.toLowerCase().endsWith(".html") || e.entryName.toLowerCase().endsWith(".htm")
        );

        const imageEntries = validEntries.filter((e) =>
          /\.(png|jpe?g|webp|gif|svg|ico|avif)$/i.test(e.entryName)
        );

        const cssEntries = validEntries.filter((e) =>
          e.entryName.toLowerCase().endsWith(".css")
        );

        if (htmlEntries.length === 0) {
          throw new Error(`No HTML files found inside ${filename}`);
        }

        // 2. Extract images to public/uploads/custom-pages/media/
        const extractedImagePaths = [];
        for (const imgEntry of imageEntries) {
          const entryName = imgEntry.entryName.replace(/^\/+/, "");
          const destPath = path.join(customPagesMediaDir, entryName);
          const destDir = path.dirname(destPath);

          if (!fs.existsSync(destDir)) {
            fs.mkdirSync(destDir, { recursive: true });
          }

          fs.writeFileSync(destPath, imgEntry.getData());
          extractedImagePaths.push(entryName);
          totalImagesExtracted++;
        }

        // 3. Process each HTML file in the ZIP
        for (const htmlEntry of htmlEntries) {
          const rawHtml = htmlEntry.getData().toString("utf8");
          const fallbackSlug = path.basename(htmlEntry.entryName, path.extname(htmlEntry.entryName));
          const parsed = parseHtmlTemplate(rawHtml, fallbackSlug);

          const pageSlug = parsed.slug;
          let cssFileName = null;

          // Save extracted <style> CSS or bundled CSS
          let finalCss = parsed.css || "";
          if (!finalCss && cssEntries.length > 0) {
            finalCss = cssEntries.map((c) => c.getData().toString("utf8")).join("\n\n");
          }

          if (finalCss) {
            // Rewrite any image paths inside CSS
            finalCss = rewriteImagePaths(finalCss, extractedImagePaths, "/uploads/custom-pages/media");
            cssFileName = `${pageSlug}.css`;
            fs.writeFileSync(path.join(cssDir, cssFileName), finalCss, "utf8");
          }

          // Rewrite image paths inside HTML body
          const finalBody = rewriteImagePaths(
            parsed.bodyContent,
            extractedImagePaths,
            "/uploads/custom-pages/media"
          );

          // Save / Upsert CustomPage
          const existingPage = await db.customPage.findUnique({
            where: { slug: pageSlug },
          });

          let pageRecord;
          if (existingPage) {
            pageRecord = await db.customPage.update({
              where: { id: existingPage.id },
              data: {
                title: parsed.title,
                content: finalBody,
                cssFile: cssFileName || existingPage.cssFile,
              },
            });
          } else {
            pageRecord = await db.customPage.create({
              data: {
                title: parsed.title,
                slug: pageSlug,
                content: finalBody,
                cssFile: cssFileName,
              },
            });
          }

          // Sync SEO table
          const pageUrl = `/${pageSlug}`;
          const existingSeo = await db.seo.findFirst({ where: { pageurl: pageUrl } });
          if (existingSeo) {
            await db.seo.update({
              where: { id: existingSeo.id },
              data: {
                title: parsed.title,
                description: parsed.description || existingSeo.description || "",
                script: parsed.script || existingSeo.script || "",
              },
            });
          } else {
            await db.seo.create({
              data: {
                pageurl: pageUrl,
                title: parsed.title,
                description: parsed.description || "",
                script: parsed.script || "",
              },
            });
          }

          // Sync XML Sitemap
          await addOrUpdateUrlInSitemap(pageSlug);

          processedPages.push({
            id: pageRecord.id,
            title: parsed.title,
            slug: pageSlug,
            url: `/${pageSlug}`,
            hasSeo: !!(parsed.title && parsed.description),
            hasScript: !!parsed.script,
            hasCss: !!cssFileName,
            status: existingPage ? "Updated" : "Created",
          });
        }
      } else if (isHtml) {
        // Direct single HTML file upload
        const rawHtml = await file.text();
        const fallbackSlug = path.basename(filename, path.extname(filename));
        const parsed = parseHtmlTemplate(rawHtml, fallbackSlug);

        const pageSlug = parsed.slug;
        let cssFileName = null;

        if (parsed.css) {
          cssFileName = `${pageSlug}.css`;
          fs.writeFileSync(path.join(cssDir, cssFileName), parsed.css, "utf8");
        }

        const existingPage = await db.customPage.findUnique({
          where: { slug: pageSlug },
        });

        let pageRecord;
        if (existingPage) {
          pageRecord = await db.customPage.update({
            where: { id: existingPage.id },
            data: {
              title: parsed.title,
              content: parsed.bodyContent,
              cssFile: cssFileName || existingPage.cssFile,
            },
          });
        } else {
          pageRecord = await db.customPage.create({
            data: {
              title: parsed.title,
              slug: pageSlug,
              content: parsed.bodyContent,
              cssFile: cssFileName,
            },
          });
        }

        // Sync SEO
        const pageUrl = `/${pageSlug}`;
        const existingSeo = await db.seo.findFirst({ where: { pageurl: pageUrl } });
        if (existingSeo) {
          await db.seo.update({
            where: { id: existingSeo.id },
            data: {
              title: parsed.title,
              description: parsed.description || existingSeo.description || "",
              script: parsed.script || existingSeo.script || "",
            },
          });
        } else {
          await db.seo.create({
            data: {
              pageurl: pageUrl,
              title: parsed.title,
              description: parsed.description || "",
              script: parsed.script || "",
            },
          });
        }

        // Sync Sitemap
        await addOrUpdateUrlInSitemap(pageSlug);

        processedPages.push({
          id: pageRecord.id,
          title: parsed.title,
          slug: pageSlug,
          url: `/${pageSlug}`,
          hasSeo: !!(parsed.title && parsed.description),
          hasScript: !!parsed.script,
          hasCss: !!cssFileName,
          status: existingPage ? "Updated" : "Created",
        });
      }
    }

    revalidatePath("/admin/dashboard/custom-page");
    revalidatePath("/admin/dashboard/seo");
    revalidatePath("/sitemap.xml");
    revalidatePath("/admin/dashboard/sitemap");

    return {
      success: true,
      totalPages: processedPages.length,
      pages: processedPages,
      imagesExtracted: totalImagesExtracted,
    };
  } catch (error) {
    console.error("Bulk page upload error:", error);
    throw new Error(error.message || "Failed to process bulk page upload");
  }
}

// ✅ Get all Custom Pages
export async function getCustomPages() {
  try {
    const pages = await db.customPage.findMany({
      orderBy: { id: "desc" },
    });
    return pages;
  } catch (error) {
    console.error("Error fetching custom pages:", error);
    throw new Error("Failed to fetch custom pages");
  }
}

export async function getCustomPageBySlug(slug) {
  try {
    const page = await db.customPage.findUnique({
      where: { slug },
    });
    return page;
  } catch (error) {
    console.error("Error fetching custom page by slug:", error);
    return null;
  }
}

// ✅ Get all CSS files
export async function getCssFiles() {
  await verifyAdmin();
  ensureCssDir();
  try {
    const files = fs.readdirSync(cssDir).filter((file) => file.endsWith(".css"));
    return files;
  } catch (error) {
    console.error("Error reading CSS directory:", error);
    return [];
  }
}

// ✅ Get CSS content
export async function getCssContent(filename) {
  await verifyAdmin();
  const filePath = path.join(cssDir, filename);
  if (fs.existsSync(filePath)) {
    return fs.readFileSync(filePath, "utf8");
  }
  return "";
}

// ✅ Save CSS file
export async function saveCssFile(filename, content) {
  await verifyAdmin();
  ensureCssDir();
  const safeName = path.basename(filename);
  if (!safeName.endsWith(".css")) {
    throw new Error("Only .css files are allowed");
  }
  const filePath = path.join(cssDir, safeName);
  fs.writeFileSync(filePath, content, "utf8");
  return true;
}

// ✅ Delete CSS file
export async function deleteCssFile(filename) {
  await verifyAdmin();
  const safeName = path.basename(filename);
  const filePath = path.join(cssDir, safeName);
  if (fs.existsSync(filePath)) {
    fs.unlinkSync(filePath);
    return true;
  }
  return false;
}
