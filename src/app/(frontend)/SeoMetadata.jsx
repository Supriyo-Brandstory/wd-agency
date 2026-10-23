import { headers } from "next/headers";
import { getSeoDataByPageUrl } from "../admin/dashboard/seo/actions";

function parseAttributes(tagStr) {
  const attrs = {};
  const attrRegex = /([a-zA-Z0-9_-]+)(?:=(?:(["'])([\s\S]*?)\2|([^\s>]+)))?/g;
  let match;
  while ((match = attrRegex.exec(tagStr)) !== null) {
    const name = match[1].toLowerCase();
    if (name === "link" || name === "meta" || name === "script") continue;
    const val = match[3] !== undefined ? match[3] : (match[4] !== undefined ? match[4] : true);
    if (name === "crossorigin") {
      attrs["crossOrigin"] = val === true ? "" : val;
    } else {
      attrs[name] = val;
    }
  }
  return attrs;
}

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

  const raw = seoData.script.trim();

  // 1. If pure JSON schema
  if ((raw.startsWith("{") || raw.startsWith("[")) && (raw.endsWith("}") || raw.endsWith("]"))) {
    try {
      JSON.parse(raw);
      return (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: raw }}
        />
      );
    } catch {
      // not pure JSON, proceed
    }
  }

  // 2. If it contains HTML tags (<link, <script, <meta)
  const hasHtmlTags = /<(?:link|script|meta)\b/i.test(raw);
  if (hasHtmlTags) {
    const links = [...raw.matchAll(/<link\b([^>]*)>/gi)].map((m, idx) => {
      const attrs = parseAttributes(m[1]);
      return <link key={`seo-link-${idx}`} {...attrs} />;
    });

    const metas = [...raw.matchAll(/<meta\b([^>]*)>/gi)].map((m, idx) => {
      const attrs = parseAttributes(m[1]);
      return <meta key={`seo-meta-${idx}`} {...attrs} />;
    });

    const scripts = [...raw.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/gi)].map((m, idx) => {
      const attrs = parseAttributes(m[1]);
      const content = m[2];
      return (
        <script
          key={`seo-script-${idx}`}
          {...attrs}
          dangerouslySetInnerHTML={{ __html: content }}
        />
      );
    });

    return (
      <>
        {links}
        {metas}
        {scripts}
      </>
    );
  }

  // 3. Fallback: raw JS
  return <script dangerouslySetInnerHTML={{ __html: raw }} />;
}
