import React from "react";
import CommonBanner2 from "../../component/pages/common/CommonBanner2";
import imagebanner from "@/app/(frontend)/assets/images/cybersecurity-website-design/banner.webp";
import CommonIntroduction from "../../component/pages/common/CommonIntroduction";
import imageintro1 from "@/app/(frontend)/assets/images/cybersecurity-website-design/intro-1.webp";
import imageintro2 from "@/app/(frontend)/assets/images/cybersecurity-website-design/intro-2.webp";
import CommonWhyMetter from "../../component/pages/common/CommonWhyMetter";
import imagewhymetter from "@/app/(frontend)/assets/images/cybersecurity-website-design/why.webp";
import CommonIndustries from "../../component/pages/common/CommonIndustries";
import imageService1 from "@/app/(frontend)/assets/images/cybersecurity-website-design/service-1.webp";
import imageService2 from "@/app/(frontend)/assets/images/cybersecurity-website-design/service-2.webp";
import imageService3 from "@/app/(frontend)/assets/images/cybersecurity-website-design/service-3.webp";
import imageService4 from "@/app/(frontend)/assets/images/cybersecurity-website-design/service-4.webp";
import imageService5 from "@/app/(frontend)/assets/images/cybersecurity-website-design/service-5.webp";
import imageService6 from "@/app/(frontend)/assets/images/cybersecurity-website-design/service-6.webp";
import CommonDevelopmentProcess from "../../component/pages/common/CommonDevelopmentProcess";
import CommonWhyWebsiteDevelopment from "../../assets/style/common/CommonWhyWebsiteDevelopment";
import imagewhydevelopment from "@/app/(frontend)/assets/images/cybersecurity-website-design/why-choose.webp";
import CommonClientTestimonials from "../../component/pages/common/CommonClientTestimonials";
import imagetestimonial1 from "@/app/(frontend)/assets/images/testimonial/testimonial-1.webp";
import imagetestimonial2 from "@/app/(frontend)/assets/images/testimonial/testimonial-2.webp";
import imagetestimonial3 from "@/app/(frontend)/assets/images/testimonial/testimonial-3.webp";
import CommonFaqSection from "../../component/pages/common/CommonFaqSection";
import CommonServiceLocations from "../../component/pages/common/CommonServiceLocations";
import DevelopmentServices from "../../component/pages/home/DevelopmentServices";
import Team from "../../component/pages/about/Team";
import LocationService from "../../component/pages/common/LocationService";
import CommonCostBreakdown from "../../component/pages/common/CommonCostBreakdown";
import CommonProtfolio from "../../component/pages/common/CommonProtfolio";
import DemoTemplate from "../../component/pages/home/DemoTemplate";
import IndustryGrid from "../../component/pages/common/IndustryGrid";

const page = () => {
  return (
    <>
      <CommonBanner2
        bg={imagebanner}
        alt={"Manufacturing Website Design Agency in Dubai, UAE"}
        heding={"Manufacturing Website Design Agency in Dubai, UAE"}
        subtitle={
          "We build robust, high-performance websites for manufacturing and industrial firms that emphasize <br>industrial scale, technical precision, and operational excellence in Dubai and the UAE."
        }
      />

      <CommonIntroduction
        heding={"Manufacturing Website Design & Development"}
        text1={` <p>In the industrial and manufacturing sectors, your website is your digital factory floor. It’s the platform where global partners and local distributors evaluate your production capabilities, technical standards, and supply chain reliability. A professional manufacturing website is essential for communicating your industrial expertise and building the trust necessary for large-scale contracts across the UAE.</p>
                 <p>Potential clients look for partners who demonstrate a deep understanding of manufacturing processes, quality control, and industrial innovation. A well-engineered website helps you bridge the gap between complex production services and the reliable supply your clients are searching for, positioning your firm as a leader in regional manufacturing.</p>
                    `}
        text2={`  <p>Modern manufacturing websites must balance technical depth with professional clarity, incorporating features like product configuration tools, facility walkthroughs, and secure vendor portals. We focus on creating digital environments that project an image of industrial scale and uncompromising quality standards.</p>
                <p><a href='/'>Website Development Agency</a> specializes in engineering high-impact websites for the manufacturing and industrial sector. We design responsive, performance-optimized platforms that highlight your firm’s capabilities and bolster confidence in your production solutions.</p>
                    `}
        imageintro1={imageintro1}
        alt1={
          "Specialized Manufacturing Website Design in Dubai - Website Development Agency"
        }
        imageintro2={imageintro2}
        alt2={
          "Manufacturing Web Development Company UAE - Website Development Agency"
        }
      />

      <DemoTemplate
        title="Manufacturing & Industrial Website Designs- Explore Templates"
        description="Robust and professional manufacturing website designs in Dubai, starting at AED 1,500. Launch your <br>industrial brand quickly with high-performance, expert designs. Get fast delivery today."
        activetaburl={"manufacturing"}
      />

      <CommonIndustries
        heding={"Manufacturing Website Design in Dubai, UAE- Our Services"}
        subheding="We provide comprehensive digital solutions designed to help manufacturing firms build trust and scale in the UAE."
        services={[
          {
            title: "Industrial-Scale Professional Design",
            desc: "We create professional, high-trust website designs that emphasize your firm’s manufacturing expertise. From structured product catalogs to facility highlights, every element is designed to resonate with procurement managers in Dubai’s industrial sectors.",
            img: imageService1,
            alt: "Custom Manufacturing Website Design Dubai",
            btnname: "Contact Us",
            link: "/contact-us",
          },
          {
            title: "Secure Product & Catalog Hubs",
            desc: "Develop dedicated sections for technical specifications, product catalogs, and safety data sheets. We build portals where clients can access detailed product information, demonstrating your commitment to transparency and quality control.",
            img: imageService2,
            alt: "Industrial Product Catalog Portals",
            btnname: "Contact Us",
            link: "/contact-us",
          },
          {
            title: "Interactive Facility Visualizations",
            desc: "Engage visitors with dynamic infographics and interactive facility maps that visualize your manufacturing footprint and production lines. These tools help demonstrate the scale and sophistication of your industrial operations.",
            img: imageService3,
            alt: "Interactive Manufacturing Visualizations",
            btnname: "Contact Us",
            link: "/contact-us",
          },
          {
            title: "Industrial SEO for B2B Leads",
            desc: "Improve your firm's visibility for specialized manufacturing keywords. We optimize your site for competitive search terms like 'industrial equipment Dubai' or 'B2B manufacturing UAE,' ensuring your expertise is visible to those searching for production partners.",
            img: imageService4,
            alt: "SEO for Manufacturing Firms Dubai",
            btnname: "Contact Us",
            link: "/contact-us",
          },
          {
            title: "Responsive & High-Performance Architecture",
            desc: "Your website must reflect the performance of your industrial solutions. We build fast-loading, responsive platforms that deliver a flawless experience on all devices, ensuring your expert content is accessible whenever it's needed.",
            img: imageService5,
            alt: "Mobile Friendly Industrial Website",
            btnname: "Contact Us",
            link: "/contact-us",
          },
          {
            title: "Secure Vendor & Client Portals",
            desc: "We build secure, encrypted vendor and client portals where you can safely share production updates, orders, and confidential documentation, ensuring your own digital presence is as professional as your factory floor.",
            img: imageService6,
            alt: "Secure Industrial Portal Management",
            btnname: "Contact Us",
            link: "/contact-us",
          },
        ]}
      />

      <CommonWhyMetter
        imagewhymetter={imagewhymetter}
        alt={
          "Trusted Manufacturing Website Design for UAE Firms - Website Development Agency"
        }
        heding={"Trusted Manufacturing Website Design for UAE-based Firms"}
        subheding={
          "We design industrial websites with a deep understanding of B2B trust acquisition. From technical clarity to operational prestige, every element is engineered for maximum professional impact."
        }
        lefttext={`  <p><b>Tailored for Industrial Trust:</b> Each website is customized to support your firm's goals—whether that's securing large-scale government contracts, promoting specialized production services, or building international industrial brand authority.</p>
                        <p><b>Stable & Scalable Development:</b> we follow a rigorous development process that respects the high standards of the manufacturing industry. From initial backend architecture to final load testing, we ensure your digital platform is stable and fast.</p>
                        `}
        righttext={`<p><b>Ongoing Support & Technical SEO:</b> An industrial website is a long-term business asset. Post-launch, we provide reliable support and continuous SEO updates, ensuring your manufacturing firm remains visible and effective as the market evolves.</p>
                            `}
      />
      <CommonProtfolio />

      <DevelopmentServices />

      <CommonCostBreakdown
        heading="Manufacturing Website Design Dubai- Cost Breakdown"
        description="Choose specialized manufacturing website design and development solutions designed to strengthen your digital presence and build industrial trust in the UAE."
      />
      <IndustryGrid />

      <CommonWhyWebsiteDevelopment
        heding={"Industrial Website Solutions for Specialized Firms"}
        subheding={
          "We build manufacturing websites that adapt to the specific focus of your firm. Every platform is planned around your product catalog, technical expertise, and client engagement goals."
        }
        lefttext={`<p><b>Discrete Manufacturing:</b> We create comprehensive websites that highlight specialized product assembly, custom parts manufacturing, and technical precision, emphasizing quality and repeatability.</p>
                                <p><b>Process Manufacturing:</b> For firms focusing on chemicals, food, or materials, our designs focus on compliance, formulaic precision, and safety standards, positioning you as a reliable supply partner.</p>
                                <p><b>Industrial Equipment & Tech:</b> Websites for equipment vendors focus on technical specs, maintenance support, and case studies, showcasing your ability to design and deliver complex machinery.</p>
                                <p><b>FMCG Manufacturing:</b> We design platforms for high-volume manufacturers that focus on production speed, distribution networks, and brand integration, utilizing detailed product galleries and stories.</p>
                            `}
        rightimage={imagewhydevelopment}
        alt={
          "Why Choose Website Development Agency for Manufacturing Website Development"
        }
      />

      <Team />

      <CommonClientTestimonials
        testimonials={[
          {
            id: 1,
            name: "Marcus Thorne",
            text: "Website Development Agency built a digital presence that perfectly reflects our industrial scale. Our new site has significantly improved our credibility during major regional manufacturing tenders.",
            image: imagetestimonial1,
          },
          {
            id: 2,
            name: "Amina Al-Farsi",
            text: "A highly professional team with a deep understanding of the manufacturing sector. They delivered a robust, authoritative website that has become a key driver for our international supply leads.",
            image: imagetestimonial2,
          },
          {
            id: 3,
            name: "Samuel Grant",
            text: "Excellent service from start to finish. Our search rankings for specialized industrial terms have improved dramatically, and the site's performance is exceptional.",
            image: imagetestimonial3,
          },
        ]}
      />

      <LocationService activeLocation="dubai" />

      <CommonFaqSection
        faqs={[
          {
            q: "How long does it take to build a professional manufacturing website?",
            a: "A high-authority manufacturing website typically takes 6 to 10 weeks, depending on the depth of product catalogs and the complexity of vendor portal integrations.",
          },
          {
            q: "Can you provide specialized SEO for 'industrial equipment' or 'B2B manufacturing'?",
            a: "Yes, we offer industry-specific SEO strategies that target specialized technical keywords to ensure your services are visible to procurement managers in the UAE.",
          },
          {
            q: "How do you handle large product catalogs?",
            a: "We use scalable, performance-optimized database structures and search features that allow users to easily filter and find specific products within even the largest catalogs.",
          },
          {
            q: "Can we have a secure area for distributor pricing?",
            a: "Absolutely. We build secure, login-protected portals where you can safely share distributor-only pricing, technical manuals, and confidentiality agreements.",
          },
          {
            q: "Will the website be optimized for mobile facility visits?",
            a: "Yes, we ensure all pages are fully responsive, so your facility tours and product catalogs look great on tablets and smartphones during site visits.",
          },
          {
            q: "Can you integrate our ERP with the website?",
            a: "Yes, we can securely integrate your website with many ERP systems (like SAP, Oracle, or Microsoft Dynamics) for seamless order and inventory management.",
          },
        ]}
      />
    </>
  );
};

export default page;
