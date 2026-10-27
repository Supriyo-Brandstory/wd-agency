/**
 * HTML Template Parser & Image Path Rewriter
 * Handles extraction of SEO metadata, canonical slugs, styles, scripts, and body markup.
 */

function decodeHtmlEntities(str) {
  if (!str) return "";
  return str
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&apos;/g, "'")
    .replace(/&nbsp;/g, " ")
    .replace(/&#(\d+);/g, (match, dec) => String.fromCharCode(dec));
}

function stripTags(html) {
  if (!html) return "";
  return html.replace(/<[^>]*>/g, "").trim();
}

export function sanitizeSlug(raw) {
  if (!raw) return "";
  return raw
    .toLowerCase()
    .trim()
    .replace(/^\/+|\/+$/g, "")
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "")
    .replace(/-+/g, "-");
}

export function parseHtmlTemplate(rawHtml, fallbackSlug = "") {
  if (!rawHtml || typeof rawHtml !== "string") {
    throw new Error("HTML content is empty or invalid");
  }

  // 1. Extract Head & Body sections
  const headMatch = rawHtml.match(/<head\b[^>]*>([\s\S]*?)<\/head>/i);
  const headContent = headMatch ? headMatch[1] : "";

  const bodyMatch = rawHtml.match(/<body\b[^>]*>([\s\S]*?)<\/body>/i);
  let bodyContent = "";
  if (bodyMatch) {
    bodyContent = bodyMatch[1].trim();
  } else {
    // If no explicit <body>, remove <head> and doc declarations
    bodyContent = rawHtml
      .replace(/<!DOCTYPE[^>]*>/gi, "")
      .replace(/<\/?html[^>]*>/gi, "")
      .replace(/<head\b[^>]*>[\s\S]*?<\/head>/gi, "")
      .replace(/<\/?body[^>]*>/gi, "")
      .trim();
  }

  // Prevent infinite loop when fallback image also 404s (e.g., onerror="this.src='...'")
  bodyContent = bodyContent.replace(
    /onerror=(["'])(?:this\.onerror\s*=\s*null;?\s*)?/gi,
    "onerror=$1this.onerror=null; "
  );

  // 2. Extract Title
  let title = "";
  const titleMatch = (headContent || rawHtml).match(/<title\b[^>]*>([\s\S]*?)<\/title>/i);
  if (titleMatch && titleMatch[1].trim()) {
    title = decodeHtmlEntities(stripTags(titleMatch[1]));
  } else {
    const h1Match = bodyContent.match(/<h1\b[^>]*>([\s\S]*?)<\/h1>/i);
    if (h1Match && h1Match[1].trim()) {
      title = decodeHtmlEntities(stripTags(h1Match[1]));
    } else if (fallbackSlug) {
      title = fallbackSlug
        .replace(/[-_]+/g, " ")
        .replace(/\b\w/g, (char) => char.toUpperCase());
    } else {
      title = "Custom Page";
    }
  }

  // 3. Extract Description
  let description = "";
  const descMatch =
    (headContent || rawHtml).match(
      /<meta\s+[^>]*name=["']description["'][^>]*content=(["'])([\s\S]*?)\1/i
    ) ||
    (headContent || rawHtml).match(
      /<meta\s+[^>]*content=(["'])([\s\S]*?)\1[^>]*name=["']description["']/i
    ) ||
    (headContent || rawHtml).match(
      /<meta\s+[^>]*property=["']og:description["'][^>]*content=(["'])([\s\S]*?)\1/i
    );

  if (descMatch && descMatch[2]) {
    description = decodeHtmlEntities(descMatch[2].trim());
  }

  // 4. Extract Canonical Link & Extract Slug
  let canonical = "";
  let extractedSlug = "";
  const canonicalMatch =
    (headContent || rawHtml).match(
      /<link\s+[^>]*rel=["']canonical["'][^>]*href=(["'])([\s\S]*?)\1/i
    ) ||
    (headContent || rawHtml).match(
      /<link\s+[^>]*href=(["'])([\s\S]*?)\1[^>]*rel=["']canonical["']/i
    );

  if (canonicalMatch && canonicalMatch[2]) {
    canonical = canonicalMatch[2].trim();
    try {
      const parsedUrl = new URL(canonical);
      const pathname = parsedUrl.pathname.replace(/^\/+|\/+$/g, "");
      if (pathname) {
        extractedSlug = sanitizeSlug(pathname.split("/").pop());
      }
    } catch {
      // In case canonical is a relative path
      const cleanPath = canonical.replace(/^https?:\/\/[^/]+/i, "").replace(/^\/+|\/+$/g, "");
      if (cleanPath) {
        extractedSlug = sanitizeSlug(cleanPath.split("/").pop());
      }
    }
  }

  const finalSlug = extractedSlug || sanitizeSlug(fallbackSlug) || `page-${Date.now()}`;

  // 5. Extract <style> contents from Head (to save as separate CSS file)
  const styleMatches = [
    ...(headContent.matchAll(/<style\b[^>]*>([\s\S]*?)<\/style>/gi) || []),
  ];
  const combinedCss = styleMatches.map((m) => m[1].trim()).join("\n\n");

  // 6. Build the raw Head Script / Metadata for Seo.script
  // Preserves full wrapped tags as present in the template:
  // - <link rel="canonical" ...>
  // - Google Fonts / preconnect / stylesheet <link> tags
  // - Any custom <meta> tags
  // - Fully wrapped <script type="application/ld+json">...</script>
  // - Custom scripts
  let headRemainder = headContent;

  // Remove title
  headRemainder = headRemainder.replace(/<title\b[^>]*>[\s\S]*?<\/title>/gi, "");
  // Remove meta description
  headRemainder = headRemainder.replace(/<meta\s+[^>]*name=["']description["'][^>]*\/?>/gi, "");
  headRemainder = headRemainder.replace(/<meta\s+[^>]*content=["'][^"']*["'][^>]*name=["']description["'][^>]*\/?>/gi, "");
  // Remove meta charset
  headRemainder = headRemainder.replace(/<meta\s+[^>]*charset=[^>]*\/?>/gi, "");
  // Remove meta viewport
  headRemainder = headRemainder.replace(/<meta\s+[^>]*name=["']viewport["'][^>]*\/?>/gi, "");
  // Remove style tags (stored in custom page CSS)
  headRemainder = headRemainder.replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, "");

  let script = headRemainder.trim();

  // If canonical link wasn't in head, add it
  if (!/<link\b[^>]*rel=["']canonical["']/i.test(script)) {
    const siteUrl = "https://websitedevelopmentagency.ae";
    const canonicalUrl = canonical || `${siteUrl}/${finalSlug}/`;
    script = `<link rel="canonical" href="${canonicalUrl}">\n\n${script}`.trim();
  }

  // If application/ld+json was outside <head>, ensure it is included
  if (!/<script\b[^>]*type=["']application\/ld\+json["']/i.test(script)) {
    const schemaMatches = [
      ...(rawHtml.matchAll(/<script\b[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi) || []),
    ];
    if (schemaMatches.length > 0) {
      const schemas = schemaMatches.map((m) => m[0].trim()).join("\n\n");
      script = script ? `${script}\n\n${schemas}` : schemas;
    }
  }

  // 7. Extract external font & CSS links from Head (e.g. Google Fonts)
  const linkMatches = [
    ...(headContent.matchAll(/<link\b[^>]*rel=["'](?:stylesheet|preconnect|preload)["'][^>]*>/gi) || []),
  ];
  const externalLinks = linkMatches
    .map((m) => m[0].trim())
    // Exclude canonical links from this list
    .filter((tag) => !/rel=["']canonical["']/i.test(tag))
    .join("\n");

  // If there are external fonts or preconnect tags, prepend them to bodyContent so fonts render
  if (externalLinks) {
    bodyContent = `${externalLinks}\n${bodyContent}`;
  }

  return {
    title,
    description,
    canonical,
    slug: finalSlug,
    script,
    css: combinedCss,
    bodyContent,
  };
}

/**
 * Rewrites relative image paths found in HTML or CSS to point to targetBaseUrl.
 * Handles paths like:
 * - images/foo.png
 * - ./images/foo.png
 * - ../images/foo.png
 * - ../../public/assets/images/foo.png
 * - assets/images/foo.png
 */
export function rewriteImagePaths(content, imageList, targetBaseUrl) {
  if (!content || !imageList || imageList.length === 0) return content;
  let updated = content;

  // Clean targetBaseUrl (remove trailing slash)
  const base = targetBaseUrl.replace(/\/+$/, "");

  // Sort image paths longest first to prevent partial replacements
  const sorted = [...imageList].sort((a, b) => b.length - a.length);

  for (const imgPath of sorted) {
    // Normalized relative path inside zip, e.g. "images/clients/logo-1.png"
    const normalized = imgPath.replace(/^\/+/, "");
    const newPublicUrl = `${base}/${normalized}`;

    const escaped = normalized.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

    // Replace occurrences with any relative traversal prefixes (../, ./, public/, assets/)
    const regexWithPrefix = new RegExp(
      `(["'(=]\\s*)(?:\\.\\.\\/|\\.\\/|public\\/|assets\\/)*${escaped}(["')\\s])`,
      "gi"
    );
    updated = updated.replace(regexWithPrefix, `$1${newPublicUrl}$2`);

    // If imgPath starts with 'images/', also match references without the 'images/' prefix
    if (normalized.startsWith("images/")) {
      const subPath = normalized.substring(7); // e.g. "clients/logo-1.png"
      const escapedSub = subPath.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      const regexSub = new RegExp(
        `(["'(=]\\s*)(?:\\.\\.\\/|\\.\\/|public\\/|assets\\/)*${escapedSub}(["')\\s])`,
        "gi"
      );
      updated = updated.replace(regexSub, `$1${newPublicUrl}$2`);
    }

    // Match exact filename if uniquely referenced (e.g. "logo-1.png")
    const fileName = normalized.split("/").pop();
    if (fileName && fileName.length > 4) {
      const escapedFileName = fileName.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      const regexFileName = new RegExp(
        `(["'(=]\\s*)(?:images|img|assets\\/images)\\/${escapedFileName}(["')\\s])`,
        "gi"
      );
      updated = updated.replace(regexFileName, `$1${newPublicUrl}$2`);
    }
  }

  return updated;
}
