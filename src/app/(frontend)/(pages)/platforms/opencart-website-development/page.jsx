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
        heding={"OpenCart Website <br>Development Company in UAE"}
        subtitle={
          "We build user-friendly, scalable, and feature-rich <br>OpenCart eCommerce stores that drive sales and business growth in Dubai, <br>Abu Dhabi, and across the UAE."
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
        heding={"OpenCart eCommerce Development"}
        text1={` <p>For businesses looking for a lightweight, powerful, and easy-to-use eCommerce solution, OpenCart is the answer. <a href="/">Website Development Agency</a> is a specialized OpenCart website development company in the UAE. We help businesses create functional, high-performing online stores that offer a great shopping experience for customers in Dubai and throughout the Middle East.</p>
                    <p>Our team of expert OpenCart developers provides a full suite of services, from custom theme design to extension development and local payment gateway integrations. We focus on building stores that are fast, secure, and optimized for success in the competitive UAE market.</p>
                    `}
        text2={`  <p>OpenCart provides an excellent balance of features and simplicity, making it ideal for startups and established businesses alike. We customize the platform to fit your brand identity while ensuring it remains easy for you to manage your products, orders, and customers from a single dashboard.</p>
                <p>At Website Development Agency, we prioritize site performance and conversion-driven design. Choose a UAE-based OpenCart expert who can help you build an online store that delivers results.</p>
                    `}
        imageintro1={imageintro1}
        imageintro2={imageintro2}
      />
      <CommonSetsUs
        text1={"The Lightweight Powerhouse for Online Sales"}
        text2={`OpenCart is an open-source eCommerce platform that offers a massive range of features with minimal technical overhead. It's the perfect solution for businesses that want a professional online store without the complexity of larger enterprise platforms. At Website Development Agency, we maximize OpenCart's potential for your business.
                    <br><br>
                    We focus on creating aesthetic designs, intuitive product navigation, and secure checkout processes. Our goal is to provide you with a scalable online store that you can easily manage as your business grows across the UAE.
                       `}
        bg={setusimagesabudhabi}
      />
      <CommonIndustries
        heding={"Comprehensive OpenCart Solutions for UAE Brands"}
        subheding="At Website Development Agency, we provide end-to-end OpenCart development services tailored to help your brand grow online. From custom store design to technical optimization, we cover it all."
        services={[
          {
            title: "Custom OpenCart Design",
            desc: "We create bespoke OpenCart themes that reflect your brand identity and provide a unique, user-friendly shopping experience.",
            img: imageService1,
            btnname: "Contact Us",
            link: "/contact-us",
          },
          {
            title: "Extension Development",
            desc: `Add custom features to your store with professionally developed OpenCart extensions tailored to your business needs.`,
            img: imageService2,
            btnname: "Contact Us",
            link: "/contact-us",
          },
          {
            title: "Product & Order Management",
            desc: "We help you set up and manage large product catalogs with ease using OpenCart's intuitive admin interface.",
            img: imageService3,
            btnname: "Contact Us",
            link: "/contact-us",
          },
          {
            title: "Local Gateway Integrations",
            desc: "We connect your store with essential local UAE payment gateways like PayTabs, Telr, and Stripe for secure transactions.",
            img: imageService4,
            btnname: "Contact Us",
            link: "/contact-us",
          },
          {
            title: "OpenCart SEO & Migration",
            desc: "Improve your site's search visibility or migrate your existing eCommerce store to OpenCart with minimal downtime.",
            img: imageService5,
            btnname: "Contact Us",
            link: "/contact-us",
          },
          {
            title: "Support & Maintenance",
            desc: "We provide technical support and regular maintenance to ensure your OpenCart store remains secure and up-to-date.",
            img: imageService8,
            btnname: "Contact Us",
            link: "/contact-us",
          },
        ]}
      />

      <CommonDevelopmentProcess
        heding={"Our OpenCart Development Workflow"}
        subheding={"Tailored Solutions for an Optimized Shopping Experience"}
        processData={[
          {
            id: "01",
            title: "Goals & Store Strategy",
            description: `We analyze your product range and target audience to plan the most effective OpenCart setup for your brand.`,
          },
          {
            id: "02",
            title: "Creative Theme Design",
            description: `Our designers create aesthetically pleasing and conversion-oriented layouts that prioritize user experience.`,
          },
          {
            id: "03",
            title: "Store Setup & Configuration",
            description: `We handle the technical setup of your OpenCart instance, ensuring core settings and taxes are correctly configured.`,
          },
          {
            id: "04",
            title: "Customization & Extensions",
            description: `We customize your store with specific features and extensions to meet your unique business requirements.`,
          },
          {
            id: "05",
            title: "Testing & Quality Assurance",
            description: `We conduct detailed testing for security, performance, and cross-device compatibility before going live.`,
          },
          {
            id: "06",
            title: "Launch & Post-Live Support",
            description: `We manage the launch process and provide ongoing support to help your OpenCart store grow and scale.`,
          },
        ]}
      />
      <CommonThreeCard
        text1={"Core Features of Our OpenCart Services"}
        text2={
          "We leverage OpenCart's best features to build professional and high-performing online stores for businesses in the UAE."
        }
        boxdata={[
          {
            id: 1,
            img: StrategicProblemSolvingimage,
            title: "Multi-Store Management",
            desc: "Easily manage multiple online stores from a single OpenCart administrative dashboard.",
          },
          {
            id: 2,
            img: FocusedApproachimage,
            title: "Lightweight & Fast",
            desc: "OpenCart is known for its speed and efficient performance, providing a smooth experience for users.",
          },
          {
            id: 3,
            img: PartnershipCommitmentimage,
            title: "Powerful Catalog Management",
            desc: "Manage an unlimited number of products and categories with built-in tools for variants and attributes.",
          },
          {
            id: 4,
            img: Transparencyimage,
            title: "Extensive Extensions",
            desc: "Access thousands of free and paid extensions to add any feature you need to your online store.",
          },
          {
            id: 5,
            img: TechnologyAdoptionimage,
            title: "Secure Payment Integration",
            desc: "Connect with local UAE payment gateways and international providers for secure transactions.",
          },
          {
            id: 6,
            img: ValueforMoneyServicesimage,
            title: "Multi-Currency & Language",
            desc: "Cater to a global audience with built-in support for multiple currencies and languages.",
          },
          {
            id: 7,
            img: ValueforMoneyServicesimage,
            title: "Order Management Tools",
            desc: "Streamline your operations with powerful tools for tracking orders, managing customers, and generating reports.",
          },
          {
            id: 8,
            img: ValueforMoneyServicesimage,
            title: "SEO-Friendly Structure",
            desc: "Includes essential SEO tools to help your store get discovered by customers in the UAE market.",
          },
        ]}
      />
      <CommonWhyWebsiteDevelopment
        heding={"Why Choose Web Development Agency for OpenCart"}
        subheding={
          "Build a performant online store with the experts. Here is why UAE businesses trust us for OpenCart:"
        }
        lefttext={`<ul>
                                <li><strong>Expert OpenCart Developers</strong> – Our team has deep experience in customizing and optimizing OpenCart for diverse businesses.</li>
                                
                                <li><strong>Focus on Speed & UX</strong> – We build stores that load quickly and are easy for your customers to navigate.</li>
                                
                                <li><strong>Local Middle East Market Focus</strong> – We build stores that resonate with UAE audiences and handle local payments flawlessly.</li>
                                
                                <li><strong>Cost-Effective Solutions</strong> – We provide professional eCommerce development that offers great value for your investment.</li>

                                <li><strong>Dedicated Support Team</strong> – We are here to support your growth with technical help and regular store updates.</li>
                                </ul>
                                <p>Partner with Website Development Agency to launch an OpenCart store that drives your eCommerce success in the UAE.</p>
                            `}
        rightimage={imagewhydevelopment}
      />
      <CommonIndustries />
      <CommonClientTestimonials />
      <CommonServiceLocations />

      <CommonFaqSection
        faqs={[
          {
            q: "Is OpenCart a good choice for my online store?",
            a: "Yes, OpenCart is an excellent choice for businesses that want a professional, feature-rich store with a simpler management system than platforms like Magento.",
          },
          {
            q: "How much does OpenCart development cost in UAE?",
            a: "OpenCart project costs typically start from AED 6,500 for a standard store, while more complex builds with custom extensions can range from AED 15,000 to AED 30,000.",
          },
          {
            q: "Is OpenCart secure for online payments?",
            a: "Yes, when correctly configured and updated, OpenCart is highly secure and supports PCI-compliant payment gateways.",
          },
          {
            q: "How long does it take to launch an OpenCart store?",
            a: "Depending on the complexity and scope, most OpenCart stores can be launched within 4 to 8 weeks.",
          },
          {
            q: "Can I manage multiple stores with OpenCart?",
            a: "Yes, OpenCart's multi-store feature allows you to manage different brands or regional stores from a single administrative interface.",
          },
        ]}
      />
    </>
  );
};

export default page;
