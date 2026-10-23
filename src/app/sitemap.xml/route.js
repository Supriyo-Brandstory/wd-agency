import { unstable_noStore as noStore } from "next/cache";
import { getOrInitSitemapContent } from "@/lib/sitemap-helper";

export async function GET() {
  noStore();
  try {
    const content = await getOrInitSitemapContent();

    if (!content) {
      return new Response("Sitemap not found", { status: 404 });
    }

    return new Response(content.trim(), {
      headers: {
        "Content-Type": "application/xml; charset=utf-8",
        "Cache-Control": "public, s-maxage=86400, stale-while-revalidate",
      },
    });
  } catch (error) {
    console.error("Error serving sitemap:", error);
    return new Response("Internal Server Error", { status: 500 });
  }
}
