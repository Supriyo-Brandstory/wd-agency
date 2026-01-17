import { PrismaClient } from '@prisma/client';
import { unstable_noStore as noStore } from 'next/cache';
const prisma = new PrismaClient();

export async function GET() {
    noStore();
    try {
        const sitemap = await prisma.sitemap.findFirst({
            orderBy: { updatedAt: 'desc' }
        });

        if (!sitemap || !sitemap.content) {
            return new Response('Sitemap not found', { status: 404 });
        }

        return new Response(sitemap.content.trim(), {
            headers: {
                'Content-Type': 'application/xml',
                'Cache-Control': 'public, s-maxage=86400, stale-while-revalidate',
            },
        });
    } catch (error) {
        console.error('Error serving sitemap:', error);
        return new Response('Internal Server Error', { status: 500 });
    }
}
