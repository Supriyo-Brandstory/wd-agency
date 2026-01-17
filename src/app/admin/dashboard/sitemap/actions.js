"use server";
import { PrismaClient } from '@prisma/client';
const db = new PrismaClient();
import { verifyAdmin } from "@/lib/auth";

export async function getSitemap() {
    try {
        const sitemap = await db.sitemap.findFirst({
            orderBy: { updatedAt: 'desc' }
        });
        return sitemap;
    } catch (error) {
        console.error('Error fetching Sitemap data:', error);
        throw new Error('Failed to fetch Sitemap data');
    }
}

export async function updateSitemap(content) {
    await verifyAdmin();
    try {
        // We only keep one sitemap record
        const existing = await db.sitemap.findFirst();
        if (existing) {
            return await db.sitemap.update({
                where: { id: existing.id },
                data: { content }
            });
        } else {
            return await db.sitemap.create({
                data: { content }
            });
        }
    } catch (error) {
        console.error('Error updating Sitemap data:', error);
        throw new Error('Failed to update Sitemap data');
    }
}
