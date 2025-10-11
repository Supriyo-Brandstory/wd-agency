"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { getSeoDataByPageUrl } from "../admin/dashboard/seo/actions";
import Head from "next/head";

export default function SeoMetadata() {
  const pathname = usePathname();
  const [seoData, setSeoData] = useState(null);

  useEffect(() => {
    async function fetchSeoData() {
      try {
        const data = await getSeoDataByPageUrl(pathname);
        setSeoData(data);

        // Inject raw HTML/script directly below meta/title
        if (data?.script) {
          // Find <body> as parent
          const body = document.head;

          const container = document.createElement("div");
          container.innerHTML = data.script;

          // Append all children of container to body, after meta
          while (container.firstChild) {
            body.appendChild(container.firstChild);
          }
        }
      } catch (error) {
        console.error("Failed to fetch SEO data:", error);
      }
    }

    fetchSeoData();
  }, [pathname]);

  return (
    <>

        <title>{seoData?.title || "Premier Web Design & Development Agency in Dubai | WD Agency"}</title>
        <meta
          name="description"
          content={seoData?.description || "Transform your online presence with our top-rated web design and development services in Dubai. With 12+ years of experience, 50+ expert developers, and over 750 successful projects, we deliver scalable, responsive, and SEO-friendly websites that drive business growth. Get a custom quote today!"}
        />
    </>
  );
}
