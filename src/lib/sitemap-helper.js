import fs from "fs";
import path from "path";
import db from "../../prisma/db.js";

export function getSiteBaseUrl() {
  const envUrl = process.env.NEXT_PUBLIC_SITE_URL || process.env.SITE_URL;
  if (envUrl) {
    return envUrl.trim().replace(/\/+$/, "");
  }
  return "https://websitedevelopmentagency.ae";
}

function escapeRegex(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function getUrlBlockRegex(slug) {
  const clean = escapeRegex(slug.replace(/^\/+|\/+$/g, ""));
  return new RegExp(
    `[ \\t]*<url>(?:(?!<\\/url>)[\\s\\S])*?<loc>[^<]*?\\/${clean}\\/?<\\/loc>(?:(?!<\\/url>)[\\s\\S])*?<\\/url>\\s*`,
    "i"
  );
}

const defaultSitemapXml = (baseUrl) => `<?xml version="1.0" encoding="UTF-8"?>
<urlset
      xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
            http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
  <url>
    <loc>${baseUrl}/</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <priority>1.00</priority>
  </url>
</urlset>`;

export async function getOrInitSitemapContent() {
  const existing = await db.sitemap.findFirst({
    orderBy: { updatedAt: "desc" },
  });

  if (existing && existing.content && existing.content.trim()) {
    return existing.content.trim();
  }

  // Fallback to public/sitemap.xml.bak or public/sitemap.xml
  const bakPath = path.join(process.cwd(), "public/sitemap.xml.bak");
  const livePath = path.join(process.cwd(), "public/sitemap.xml");
  let seedContent = "";

  if (fs.existsSync(bakPath)) {
    seedContent = fs.readFileSync(bakPath, "utf8").trim();
  } else if (fs.existsSync(livePath)) {
    seedContent = fs.readFileSync(livePath, "utf8").trim();
  } else {
    seedContent = defaultSitemapXml(getSiteBaseUrl());
  }

  // Persist seed content to database
  if (existing) {
    await db.sitemap.update({
      where: { id: existing.id },
      data: { content: seedContent },
    });
  } else {
    await db.sitemap.create({
      data: { content: seedContent },
    });
  }
  return seedContent;
}

export async function saveSitemapContent(xmlContent) {
  const cleanContent = xmlContent.trim();
  const existing = await db.sitemap.findFirst();

  if (existing) {
    await db.sitemap.update({
      where: { id: existing.id },
      data: { content: cleanContent },
    });
  } else {
    await db.sitemap.create({
      data: { content: cleanContent },
    });
  }

  try {
    const { revalidatePath } = await import("next/cache");
    revalidatePath("/sitemap.xml");
  } catch (err) {
    // ignore revalidate error if outside request context
  }

  return cleanContent;
}

export async function addOrUpdateUrlInSitemap(slug, oldSlug = null) {
  if (!slug) return false;
  const baseUrl = getSiteBaseUrl();
  const cleanSlug = slug.replace(/^\/+|\/+$/g, "");
  const targetUrl = `${baseUrl}/${cleanSlug}`;
  const now = new Date().toISOString();

  let xml = await getOrInitSitemapContent();

  // If oldSlug provided and differs from new slug, remove the old slug first
  if (oldSlug) {
    const cleanOld = oldSlug.replace(/^\/+|\/+$/g, "");
    if (cleanOld && cleanOld !== cleanSlug) {
      const oldBlock = getUrlBlockRegex(cleanOld);
      xml = xml.replace(oldBlock, "\n");
    }
  }

  // Check if current slug already exists in sitemap
  const currentBlock = getUrlBlockRegex(cleanSlug);
  const newEntry = `  <url>\n    <loc>${targetUrl}</loc>\n    <lastmod>${now}</lastmod>\n    <priority>0.80</priority>\n  </url>\n`;

  if (currentBlock.test(xml)) {
    // Replace existing entry
    xml = xml.replace(currentBlock, newEntry);
  } else {
    // Insert before closing </urlset>
    if (xml.includes("</urlset>")) {
      xml = xml.replace("</urlset>", `${newEntry}</urlset>`);
    } else {
      xml = `${xml}\n${newEntry}`;
    }
  }

  await saveSitemapContent(xml);
  return true;
}

export async function removeUrlFromSitemap(slug) {
  if (!slug) return false;
  const cleanSlug = slug.replace(/^\/+|\/+$/g, "");
  let xml = await getOrInitSitemapContent();
  const block = getUrlBlockRegex(cleanSlug);

  if (block.test(xml)) {
    xml = xml.replace(block, "\n");
    await saveSitemapContent(xml);
    return true;
  }
  return false;
}
