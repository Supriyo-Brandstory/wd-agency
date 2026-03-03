import React from "react";
import CommonBanner2 from "../../../component/pages/common/CommonBanner2";
import imagebanner from "@/app/(frontend)/assets/images/wordpress-development/wordpress-banner.webp";
import CommonIntroduction from "../../../component/pages/common/CommonIntroduction";
import imageintro1 from "@/app/(frontend)/assets/images/wordpress-development/wordpress-web-1.webp";
import imageintro2 from "@/app/(frontend)/assets/images/wordpress-development/wordpress-web-2.webp";
import CommonSetsUs from "../../../component/pages/common/CommonSetsUs";
import setusimagesabudhabi from "@/app/(frontend)/assets/images/wordpress-development/wordpress-main.webp";
import StrategicProblemSolvingimage from "@/app/(frontend)/assets/images/website-development/Strategic-Problem-Solving.png";
import FocusedApproachimage from "@/app/(frontend)/assets/images/website-development/FocusedApproach.png";
import PartnershipCommitmentimage from "@/app/(frontend)/assets/images/website-development/Partnership-Commitment.png";
import Transparencyimage from "@/app/(frontend)/assets/images/website-development/Transparency.png";
import TechnologyAdoptionimage from "@/app/(frontend)/assets/images/website-development/Technology-Adoption.png";
import ValueforMoneyServicesimage from "@/app/(frontend)/assets/images/website-development/Value-for-Money-Services.png";
import CommonDevelopmentProcess from "../../../component/pages/common/CommonDevelopmentProcess";
import CommonIndustries from "../../../component/pages/common/CommonIndustries";
import imageService1 from "@/app/(frontend)/assets/images/wordpress-development/custom-wordpress.webp";
import imageService2 from "@/app/(frontend)/assets/images/wordpress-development/theme-design.webp";
import imageService3 from "@/app/(frontend)/assets/images/wordpress-development/plug-in.webp";
import imageService4 from "@/app/(frontend)/assets/images/wordpress-development/wordpress-e-com.webp";
import imageService5 from "@/app/(frontend)/assets/images/wordpress-development/wordpress-migration.webp";
import imageService8 from "@/app/(frontend)/assets/images/wordpress-development/maintenance.webp";
import CommonWhyWebsiteDevelopment from "../../../assets/style/common/CommonWhyWebsiteDevelopment";
import imagewhydevelopment from "@/app/(frontend)/assets/images/wordpress-development/why-wd-agency.webp";
import CommonFaqSection from "../../../component/pages/common/CommonFaqSection";
import CommonServiceLocations from "../../../component/pages/common/CommonServiceLocations";
import CommonClientTestimonials from "../../../component/pages/common/CommonClientTestimonials";
import CommonThreeCard from "@/app/(frontend)/component/pages/common/CommonThreeCard";
import SubNav from "@/app/(frontend)/component/pages/common/SubNav";

const page = () => {
  return (
    <>
      <CommonBanner2
        bg={imagebanner}
        heding={"Magento Website <br>Development Company in UAE"}
        subtitle={
          "We build high-performance, secure, and scalable <br>Magento eCommerce stores that drive sales and business growth in Dubai, <br>Abu Dhabi, and across the UAE."
        }
      />

      <SubNav
        title="Dev. Services"
        items={[
          { name: "UI/UX", link: "/services/ui-ux-design" },
          { name: "Frontend Dev.", link: "/services/frontend-development" },
          { name: "Full-stack Dev.", link: "/services/full-stack-development" },
          {
            name: "Static Web Dev.",
            link: "/services/static-website-development",
          },
          {
            name: "Dynamic Web Dev.",
            link: "/services/dynamic-website-development",
          },
          {
            name: "Website Migration",
            link: "/services/website-migration-service",
          },
        ]}
      />
      <CommonIntroduction
        heding={"Adobe Commerce (Magento) Development"}
        text1={` <p>In the highly competitive world of online retail, your eCommerce platform is your greatest asset. <a href="/">Website Development Agency</a> is a premier Magento (Adobe Commerce) development company in the UAE. We specialize in building robust, feature-rich, and scalable online stores that provide seamless shopping experiences for customers in Dubai and across the Middle East.</p>
                    <p>Our team of certified Magento developers has extensive experience in customizing this powerful platform to meet the unique needs of B2B and B2C businesses. We focus on performance, security, and conversion optimization to ensure your eCommerce store delivers a high return on investment.</p>
                    `}
        text2={`  <p>Magento offers unparalleled flexibility and a vast array of built-in features for managing complex product catalogs, multiple storefronts, and diverse customer groups. Whether you are launching a new store or upgrading an existing one, we provide end-to-end Magento solutions that drive results.</p>
                <p>At Website Development Agency, we ensure your Magento store is optimized for speed, mobile-responsive, and integrated with essential local services. Partner with a UAE-based Magento expert to dominate the eCommerce landscape.</p>
                    `}
        imageintro1={imageintro1}
        imageintro2={imageintro2}
      />
      <CommonSetsUs
        text1={"The Gold Standard for eCommerce"}
        text2={`Magento is the platform of choice for leading global brands that demand power and scalability. It provides an enterprise-grade solution capable of handling hundreds of thousands of products and massive traffic volumes. At Website Development Agency, we leverage the full potential of Adobe Commerce to build stores that excel.
                    <br><br>
                    We focus on creating intuitive user journeys, secure payment processes, and efficient backend operations. From custom theme development to complex inventory management, our Magento services are designed to help your business grow and scale effortlessly in the UAE market.
                       `}
        bg={setusimagesabudhabi}
      />
      <CommonIndustries
        heding={"Scalable Magento Solutions for UAE Enterprises"}
        subheding="At Website Development Agency, we offer a comprehensive range of Magento development services tailored to help your brand thrive in a digital-first world. From creative design to strategic optimization, we cover it all."
        services={[
          {
            title: "Custom Magento Development",
            desc: "We build bespoke Magento stores that reflect your brand identity and are perfectly aligned with your business goals.",
            img: imageService1,
            btnname: "Contact Us",
            link: "/contact-us",
          },
          {
            title: "Theme Design & Customization",
            desc: `Our designers create visually stunning and user-friendly Magento themes that are fully responsive and optimized for conversions.`,
            img: imageService2,
            btnname: "Contact Us",
            link: "/contact-us",
          },
          {
            title: "Magento Extension Development",
            desc: "Unlock new features and functionalities with custom-built Magento extensions or professional integration of third-party modules.",
            img: imageService3,
            btnname: "Contact Us",
            link: "/contact-us",
          },
          {
            title: "B2B & Multi-Store Platforms",
            desc: "We specialize in building complex B2B solutions and multi-store setups that allow you to manage multiple brands from a single dashboard.",
            img: imageService4,
            btnname: "Contact Us",
            link: "/contact-us",
          },
          {
            title: "Magento Migration (M1 to M2)",
            desc: "Smoothly migrate your existing site to Magento 2 with full data preservation, improved performance, and a modern frontend.",
            img: imageService5,
            btnname: "Contact Us",
            link: "/contact-us",
          },
          {
            title: "Security & Maintenance",
            desc: "We provide regular security updates, performance tuning, and 24/7 monitoring to ensure your store remains secure and high-performing.",
            img: imageService8,
            btnname: "Contact Us",
            link: "/contact-us",
          },
        ]}
      />

      <CommonDevelopmentProcess
        heding={"Our Magento Development Workflow"}
        subheding={"Engineered for Powerful Performance and Sales Growth"}
        processData={[
          {
            id: "01",
            title: "eCommerce Strategy & Audit",
            description: `We analyze your product catalog, target audience, and business goals to define the best Magento architecture.`,
          },
          {
            id: "02",
            title: "Creative Storefront Design",
            description: `Our designers create engaging user interfaces that prioritize product discoverability and smooth checkout flows.`,
          },
          {
            id: "03",
            title: "Architecture & Core Development",
            description: `We build a robust store using Magento 2 best practices, focusing on performance, scalability, and security.`,
          },
          {
            id: "04",
            title: "Integration & Optimization",
            description: `We integrate your store with local UAE payment gateways, shipping solutions, ERPs, and CRMs.`,
          },
          {
            id: "05",
            title: "Rigorous Testing & QA",
            description: `We perform comprehensive performance and security testing to ensure your store is bug-free and ready for high traffic.`,
          },
          {
            id: "06",
            title: "Launch & Post-Launch Support",
            description: `We handle a smooth go-live process and provide ongoing maintenance to keep your store at peak performance.`,
          },
        ]}
      />
      <CommonThreeCard
        text1={"Core Features of Our Magento Services"}
        text2={
          "We use the full potential of Magento to create enterprise-grade eCommerce websites for clients in the UAE."
        }
        boxdata={[
          {
            id: 1,
            img: StrategicProblemSolvingimage,
            title: "Powerful Catalog Management",
            desc: "Easily manage hundreds of thousands of SKUs with complex attributes and variations.",
          },
          {
            id: 2,
            img: FocusedApproachimage,
            title: "Advanced SEO Capabilities",
            desc: "Built-in SEO features to help your products rank higher in Google and other search engines.",
          },
          {
            id: 3,
            img: PartnershipCommitmentimage,
            title: "Secure Payment Gateways",
            desc: "Integration with major UAE payment providers like PayTabs and Telr for safe, local transactions.",
          },
          {
            id: 4,
            img: Transparencyimage,
            title: "Flexible Architecture",
            desc: "Customizable and extensible platform that can be tailored to meet any unique business requirement.",
          },
          {
            id: 5,
            img: TechnologyAdoptionimage,
            title: "Scalable for Large Traffic",
            desc: "Engineered to handle high concurrency and massive traffic surges without compromising on speed.",
          },
          {
            id: 6,
            img: ValueforMoneyServicesimage,
            title: "Rich Native Features",
            desc: "Comes with powerful out-of-the-box features like multi-currency, multi-language, and advanced promotions.",
          },
          {
            id: 7,
            img: ValueforMoneyServicesimage,
            title: "High Security Standards",
            desc: "Advanced security protocols and regular patches to protect your customers' data and transactions.",
          },
          {
            id: 8,
            img: ValueforMoneyServicesimage,
            title: "Third-Party Integration",
            desc: "Seamlessly connect with ERP, CRM, and PIM systems for automated business operations.",
          },
        ]}
      />
      <CommonWhyWebsiteDevelopment
        heding={"Why Choose Web Development Agency for Magento"}
        subheding={
          "Magento is a complex platform that requires expert handling. Here is why UAE businesses trust us for Magento development:"
        }
        lefttext={`<ul>
                                <li><strong>Expert Magento Developers</strong> – Our team consists of seasoned professionals with deep expertise in Magento 2 and Adobe Commerce.</li>
                                
                                <li><strong>B2B & B2C Specialization</strong> – We understand the distinct needs of both consumer and business-to-business eCommerce.</li>
                                
                                <li><strong>Local Middle East Market Focus</strong> – We build stores that resonate with UAE audiences and comply with local regulations.</li>
                                
                                <li><strong>Performance Optimization Experts</strong> – We ensure your Magento store is as fast as possible for better user experience and higher conversions.</li>

                                <li><strong>Long-Term Partnership</strong> – We are dedicated to supporting your growth with continuous updates and feature enhancements.</li>
                                </ul>
                                <p>Partner with Website Development Agency to build a Magento store that scales your business to new heights.</p>
                            `}
        rightimage={imagewhydevelopment}
      />
      <CommonIndustries />
      <CommonClientTestimonials />
      <CommonServiceLocations />

      <CommonFaqSection
        faqs={[
          {
            q: "Is Magento the right choice for small businesses?",
            a: "Magento is best suited for businesses with large product catalogs or those planning to scale rapidly. For very small stores, other platforms might be simpler, but Magento offers the best long-term growth potential.",
          },
          {
            q: "How much does Magento development cost in UAE?",
            a: "Magento projects are typically more complex and start from AED 15,000 for standard setups. Complex enterprise-level stores with custom integrations can range from AED 60,000 to AED 150,000+.",
          },
          {
            q: "Should I migrate from Magento 1 to Magento 2?",
            a: "Absolutely. Magento 1 is no longer officially supported, making it a security risk. Magento 2 is faster, more secure, and offers a much better admin experience.",
          },
          {
            q: "How long does it take to build a Magento store?",
            a: "Due to its complexity, Magento projects usually take between 8 to 16 weeks, depending on the number of products and depth of custom features.",
          },
          {
            q: "Can you handle Magento security patches?",
            a: "Yes, we provide ongoing maintenance packages that include the application of official Adobe Commerce security patches to keep your store safe.",
          },
        ]}
      />
    </>
  );
};

export default page;
