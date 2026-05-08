import { headers } from "next/headers";
import { getSeoDataByPageUrl } from "../admin/dashboard/seo/actions";
import "./globals.scss";
import "./globals.css";
import Header from "./component/partials/Header";
import Footer from "./component/partials/Footer";
import Script from 'next/script'; // Import the Script component
import SeoMetadata from './SeoMetadata';

import { SEO_DEFAULTS } from "@/lib/seo-defaults";

export async function generateMetadata() {
  const headersList = await headers();
  const pathname = headersList.get("x-pathname") || "/";

  let seoData = null;
  try {
    seoData = await getSeoDataByPageUrl(pathname);
  } catch (error) {
    console.error("Failed to fetch SEO data:", error);
  }

  const title = (seoData?.title?.trim()) || SEO_DEFAULTS.title;
  const description = (seoData?.description?.trim()) || SEO_DEFAULTS.description;

  return {
    title,
    description,
    verification: {
      google: "Sqic4jq1KYYPLx4_l5xWdFBG3ormalt-u2eAb3BdSak",
    },
  };
}

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <head>
        <SeoMetadata />
      </head>
      <body className="antialiased" suppressHydrationWarning={true}>
        {/* Google Tag Manager noscript fallback */}
        <noscript
          dangerouslySetInnerHTML={{
            __html: `
              <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-M99JNB3H"
              height="0" width="0" style="display:none;visibility:hidden"></iframe>
            `,
          }}
        />

        <Header />
        <main style={{ flex: '1 0 auto' }} >{children}</main>
        <meta name="facebook-domain-verification" content="ku4vpemsgqg8nuv8k1igcm2jgqkgkt" />
        <Footer />

        {/* Google Tag Manager script using next/script */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-M99JNB3H');
            `,
          }}
        />
      </body>
    </html>
  );
}
