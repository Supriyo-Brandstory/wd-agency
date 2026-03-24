"use server";

import { revalidatePath } from "next/cache";
import db from "../../../../../prisma/db";
import { verifyAdmin } from "@/lib/auth";

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
    slug = slug.toLowerCase().trim().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");
    if (!slug) slug = title.toLowerCase().trim().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");

    const uniqueSlug = await getUniqueSlug(slug);

    const customPage = await db.customPage.create({
      data: {
        title,
        slug: uniqueSlug,
        content,
        cssFile,
      },
    });

    revalidatePath("/admin/dashboard/custom-page");
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

    // sanitize slug
    slug = slug.toLowerCase().trim().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");
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

    revalidatePath("/admin/dashboard/custom-page");
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
    await db.customPage.delete({ where: { id: parseInt(id) } });
    revalidatePath("/admin/dashboard/custom-page");
    return true;
  } catch (error) {
    console.error("Error deleting custom page:", error);
    throw new Error("Failed to delete custom page");
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

import fs from "fs";
import path from "path";

const cssDir = path.join(process.cwd(), "public/uploads/css");

// ✅ Ensure CSS directory exists
const ensureCssDir = () => {
  if (!fs.existsSync(cssDir)) {
    fs.mkdirSync(cssDir, { recursive: true });
  }
};

// ✅ Get all CSS files
export async function getCssFiles() {
  await verifyAdmin();
  ensureCssDir();
  try {
    const files = fs.readdirSync(cssDir).filter(file => file.endsWith('.css'));
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
    return fs.readFileSync(filePath, 'utf8');
  }
  return "";
}

// ✅ Save CSS file
export async function saveCssFile(filename, content) {
  await verifyAdmin();
  ensureCssDir();
  // Basic security: only .css files, no directory traversal
  const safeName = path.basename(filename);
  if (!safeName.endsWith('.css')) {
    throw new Error("Only .css files are allowed");
  }
  const filePath = path.join(cssDir, safeName);
  fs.writeFileSync(filePath, content, 'utf8');
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
