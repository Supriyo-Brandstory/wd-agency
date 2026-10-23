"use server";

import db from "../../../../../prisma/db";
import { verifyAdmin } from "@/lib/auth";
import { getOrInitSitemapContent, saveSitemapContent } from "@/lib/sitemap-helper";

export async function getSitemap() {
  try {
    const content = await getOrInitSitemapContent();
    const sitemap = await db.sitemap.findFirst({
      orderBy: { updatedAt: "desc" },
    });
    return sitemap || { content };
  } catch (error) {
    console.error("Error fetching Sitemap data:", error);
    throw new Error("Failed to fetch Sitemap data");
  }
}

export async function updateSitemap(content) {
  await verifyAdmin();
  try {
    await saveSitemapContent(content);
    const updated = await db.sitemap.findFirst({
      orderBy: { updatedAt: "desc" },
    });
    return updated;
  } catch (error) {
    console.error("Error updating Sitemap data:", error);
    throw new Error("Failed to update Sitemap data");
  }
}
