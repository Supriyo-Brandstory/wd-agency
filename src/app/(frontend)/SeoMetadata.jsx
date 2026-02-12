import { headers } from "next/headers";
import { getSeoDataByPageUrl } from "../admin/dashboard/seo/actions";

export default async function SeoMetadata() {
  const headersList = await headers();
  const pathname = headersList.get("x-pathname") || "/";

  let seoData = null;
  try {
    seoData = await getSeoDataByPageUrl(pathname);
  } catch (error) {
    console.error("Failed to fetch SEO data:", error);
  }

  if (!seoData?.script) return null;

  const isJson = (str) => {
    try {
      JSON.parse(str);
      return true;
    } catch (e) {
      return false;
    }
  };

  if (isJson(seoData.script)) {
    return (
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: seoData.script }}
      />
    );
  } else {
    // If it contains tags, strip them and wrap in a script tag
    const cleanScript = seoData.script
      .replace(/<script[^>]*>/g, "")
      .replace(/<\/script>/g, "");
    return <script dangerouslySetInnerHTML={{ __html: cleanScript }} />;
  }
}
