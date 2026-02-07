import React from "react";
import CommonBanner2 from "../../component/pages/common/CommonBanner2";
import imagebanner from "@/app/(frontend)/assets/images/cybersecurity-website-design/banner.webp";
import CommonIntroduction from "../../component/pages/common/CommonIntroduction";
import imageintro1 from "@/app/(frontend)/assets/images/cybersecurity-website-design/intro-1.webp";
import imageintro2 from "@/app/(frontend)/assets/images/cybersecurity-website-design/intro-2.webp";
import CommonWhyMetter from "../../component/pages/common/CommonWhyMetter";
import imagewhymetter from "@/app/(frontend)/assets/images/cybersecurity-website-design/why.webp";
import CommonInduestriesServices from "../../component/pages/common/CommonInduestriesServices";
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
        alt={"Logistics & Supply Chain Website Design Agency in Dubai, UAE"}
        heding={"Logistics & Supply Chain Website Design Agency in Dubai, UAE"}
        subtitle={
          "We build powerful, efficient websites for logistics, freight forwarding, and supply chain companies <br>that emphasize operational scale, global connectivity, and reliability in Dubai and the UAE."
        }
      />

      <CommonIntroduction
        heding={"Logistics Website Design & Development"}
        text1={` <p>In the fast-paced world of global trade, a logistics company's website is its digital operations center. For businesses navigating the complex lanes of Dubai's shipping and transport hubs, a professional digital presence is essential for communicating efficiency, reliability, and global reach. Your website is the gateway for partners and clients to access your network.</p>
                 <p>Potential clients look for logistics partners who demonstrate technological sophistication and transparent operations. A well-engineered website helps you bridge the gap between complex supply chain management and the seamless delivery your clients expect, positioning your firm as a leader in regional and global movement.</p>
                    `}
        text2={`  <p>Modern logistics websites must go beyond static information, incorporating features like real-time tracking portals, instant quote calculators, and integrated warehouse management systems. We focus on creating digital environments that project an image of operational excellence and technological leadership.</p>
                <p><a href='/'>Website Development Agency</a> specializes in engineering high-impact websites for the logistics and transportation sector. We design responsive, performance-optimized platforms that highlight your firm’s capabilities and bolster confidence in your supply chain solutions.</p>
                    `}
        imageintro1={imageintro1}
        alt1={
          "Specialized Logistics Website Design in Dubai - Website Development Agency"
        }
        imageintro2={imageintro2}
        alt2={
          "Logistics Web Development Company UAE - Website Development Agency"
        }
      />

      <DemoTemplate
        title="Logistics & Transport Website Designs- Explore Templates"
        description="Powerful and efficient logistics website designs in Dubai, starting at AED 1,500. Launch your <br>transport brand quickly with professional, high-performance designs. Get fast delivery today."
        activetaburl={"logistics"}
      />

      <CommonInduestriesServices
        heding={"Logistics Website Design in Dubai, UAE- Our Services"}
        subheding="We provide comprehensive digital solutions designed to help logistics firms streamline operations and build trust in the UAE."
      />

      <CommonWhyMetter
        imagewhymetter={imagewhymetter}
        alt={
          "Trusted Logistics Website Design for UAE Firms - Website Development Agency"
        }
        heding={"Trusted Logistics Website Design for UAE-based Firms"}
        subheding={
          "We design logistics websites with a deep understanding of operational trust acquisition. From service clarity to global prestige, every element is engineered for maximum operational impact."
        }
        lefttext={`  <p><b>Tailored for Global Movement:</b> Each website is customized to support your firm's goals—whether that's securing large-scale government contracts, promoting specialized freight services, or building international trade authority. Layouts focus on efficiency.</p>
                        <p><b>Robust & Reliable Development:</b> we follow a rigorous development process that respects the high standards of the logistics industry. From initial backend architecture to final performance testing, we ensure your digital platform is stable and fast.</p>
                        `}
        righttext={`<p><b>Ongoing Support & Technical SEO:</b> A logistics website is a critical business tool. Post-launch, we provide reliable support and continuous performance updates, ensuring your firm remains effective as global trade routes evolve.</p>
                            `}
      />
      <CommonProtfolio />

      <DevelopmentServices />

      <CommonCostBreakdown
        heading="Logistics Website Design Dubai- Cost Breakdown"
        description="Choose specialized logistics website design and development solutions designed to strengthen your digital presence and build operational trust in the UAE."
      />
      <IndustryGrid />

      <CommonWhyWebsiteDevelopment
        heding={"Supply Chain Website Solutions for Specialized Firms"}
        subheding={
          "We build logistics websites that adapt to the specific focus of your transport firm. Every platform is planned around your service catalog, operational footprint, and client engagement goals."
        }
        lefttext={`<p><b>Freight Forwarders (Sea, Air, Land):</b> We create comprehensive websites that highlight global carrier networks, customs clearance expertise, and end-to-end transport frameworks, emphasizing speed and reliability.</p>
                                <p><b>3PL & Warehousing:</b> For storage specialists, our designs focus on inventory management, fulfillment speed, and distribution network scale, positioning you as a key supply chain partner.</p>
                                <p><b>Specialized Cargo (Cold Chain, Project Cargo):</b> Websites for niche transporters focus on technical methodology, specialized equipment, and safety certifications, showcasing your ability to handle complex requirements.</p>
                                <p><b>Last-Mile & E-commerce Logistics:</b> We design platforms for delivery specialists that focus on technology integration, route optimization, and client transparency, utilizing detailed tracking and driver portals.</p>
                            `}
        rightimage={imagewhydevelopment}
        alt={
          "Why Choose Website Development Agency for Logistics Website Development"
        }
      />

      <Team />

      <CommonClientTestimonials
        testimonials={[
          {
            id: 1,
            name: "Mark Thompson",
            text: "Website Development Agency built a digital presence that perfectly reflects our operational scale. Our new site has significantly improved our credibility during international supply chain tenders.",
            image: imagetestimonial1,
          },
          {
            id: 2,
            name: "Zaid Al-Harbi",
            text: "A highly professional team with a deep understanding of the transport sector. They delivered a robust, authoritative website that has become a key driver for our freight forwarding leads.",
            image: imagetestimonial2,
          },
          {
            id: 3,
            name: "Samantha Lee",
            text: "Excellent service from start to finish. Our search rankings for specialized logistics terms have improved dramatically, and the site's performance is exceptional.",
            image: imagetestimonial3,
          },
        ]}
      />

      <LocationService activeLocation="dubai" />

      <CommonFaqSection
        faqs={[
          {
            q: "How long does it take to build a professional logistics website?",
            a: "A high-authority logistics website typically takes 6 to 10 weeks, depending on the number of systems integrations and the depth of service content required.",
          },
          {
            q: "Can you integrate our existing shipment tracking system?",
            a: "Yes, we specialize in API integrations and can securely connect your website to your existing tracking and ERP software for seamless client updates.",
          },
          {
            q: "How do you ensure the website can handle high data traffic?",
            a: "We build on scalable infrastructure with performance-optimized code, ensuring your site remains fast and reliable even during peak logistics periods.",
          },
          {
            q: "Can we have a private area for partners and agents?",
            a: "Absolutely. We build secure, encrypted partner portals where you can safely share agent rates, documents, and confidential trade information.",
          },
          {
            q: "Will the website be optimized for mobile tracking?",
            a: "Yes, we ensure all tracking features are fully responsive and optimized for mobile devices, allowing your clients to check shipments on the go.",
          },
          {
            q: "Do you offer SEO for international freight forwarding?",
            a: "Yes, we provide specialized SEO strategies that target international trade and freight terms to ensure your expertise is visible to global shippers.",
          },
        ]}
      />
    </>
  );
};

export default page;
