import React from "react";
import CommonBanner2 from "../../component/pages/common/CommonBanner2";
import imagebanner from "@/app/(frontend)/assets/images/bank-website-design/banner.webp";
import CommonIntroduction from "../../component/pages/common/CommonIntroduction";
import imageintro1 from "@/app/(frontend)/assets/images/bank-website-design/intro-1.webp";
import imageintro2 from "@/app/(frontend)/assets/images/bank-website-design/intro-2.webp";
import CommonWhyMetter from "../../component/pages/common/CommonWhyMetter";
import imagewhymetter from "@/app/(frontend)/assets/images/bank-website-design/why.webp";
import CommonIndustries from "../../component/pages/common/CommonIndustries";
import imageService1 from "@/app/(frontend)/assets/images/bank-website-design/service-1.webp";
import imageService2 from "@/app/(frontend)/assets/images/bank-website-design/service-2.webp";
import imageService3 from "@/app/(frontend)/assets/images/bank-website-design/service-3.webp";
import imageService4 from "@/app/(frontend)/assets/images/bank-website-design/service-4.webp";
import imageService5 from "@/app/(frontend)/assets/images/bank-website-design/service-5.webp";
import imageService6 from "@/app/(frontend)/assets/images/bank-website-design/service-6.webp";
import CommonWhyWebsiteDevelopment from "../../assets/style/common/CommonWhyWebsiteDevelopment";
import imagewhydevelopment from "@/app/(frontend)/assets/images/bank-website-design/why-choose.webp";
import CommonClientTestimonials from "../../component/pages/common/CommonClientTestimonials";
import imagetestimonial1 from "@/app/(frontend)/assets/images/testimonial/testimonial-1.webp";
import imagetestimonial2 from "@/app/(frontend)/assets/images/testimonial/testimonial-2.webp";
import imagetestimonial3 from "@/app/(frontend)/assets/images/testimonial/testimonial-3.webp";
import CommonFaqSection from "../../component/pages/common/CommonFaqSection";
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
        alt={"Bank Web Design Agency in Dubai, UAE"}
        heding={"Bank Web Design Agency in Dubai, UAE"}
        subtitle={
          "We build secure, scalable, and user-centric banking and financial websites that drive trust, <br>enhance digital engagement, and streamline financial services in the UAE."
        }
      />

      <CommonIntroduction
        heding={"Banking & Finance Website Design Services"}
        text1={` <p>In Dubai’s position as a global financial hub, banks and financial institutions require a digital presence that embodies security, innovation, and client trust. A professional, high-performance website is essential for delivering modern financial services and maintaining a competitive edge in the digital banking era.</p>
                 <p>Today’s customers demand seamless online experiences from instant account access to complex financial modeling tools. With the rise of fintech and digital transformation across the Middle East, having a robust, secure, and intuitive website is no longer optional; it’s a core operational requirement.</p>
                    `}
        text2={`  <p>A modern banking website goes beyond simple information delivery, incorporating advanced security protocols, real-time data integration, and user-friendly customer portals. We focus on creating digital environments that empower users while maintaining the highest levels of institutional credibility and regulatory compliance.</p>
                <p><a href='/'>Website Development Agency</a> specializes in engineering high-impact financial websites tailored for Dubai’s banking sector. We design secure, performance-optimized platforms that highlight your institution’s prestige and bolster customer loyalty in a competitive digital landscape.</p>
                    `}
        imageintro1={imageintro1}
        alt1={
          "Specialized Bank Website Design in Dubai - Website Development Agency"
        }
        imageintro2={imageintro2}
        alt2={
          "Banking Web Development Company UAE - Website Development Agency"
        }
      />

      <DemoTemplate
        title="Banking Website Designs- Explore Templates"
        description="Premium financial and corporate website designs in Dubai, starting at AED 1,500. Launch your <br>financial brand quickly with professional, secure designs. Get fast delivery today."
        activetaburl={"corporate"}
      />

      <CommonIndustries
        heding={"Banking & Finance Web Design- Our Services"}
        subheding="We offer a comprehensive suite of digital solutions designed to help financial institutions grow and succeed."
        services={[
          {
            title: "Secure Online Banking Portals",
            desc: "We develop highly secure, intuitive customer portals that allow users to manage accounts, perform transactions, and access financial statements with ease. Built with multi-layer encryption and biometric integration, these portals provide a safe and world-class digital banking experience.",
            img: imageService1,
            alt: "Secure Banking Portal Development Dubai",
            btnname: "Contact Us",
            link: "/contact-us",
          },
          {
            title: "Financial Planning & Calculator Tools",
            desc: "Engage your customers with interactive financial tools, including mortgage calculators, investment planners, and currency converters. These user-friendly features provide value-added services while helping clients visualize their financial goals directly on your platform.",
            img: imageService2,
            alt: "Financial Calculator Tools Architect",
            btnname: "Contact Us",
            link: "/contact-us",
          },
          {
            title: "Enterprise-Grade Security Architecture",
            desc: "Security is the foundation of banking. We implement advanced cybersecurity measures, including SSL certificates, firewall protection, and regular vulnerability assessments, ensuring your institution’s and customers' data is protected against evolving digital threats.",
            img: imageService3,
            alt: "Banking Security Infrastructure Dubai",
            btnname: "Contact Us",
            link: "/contact-us",
          },
          {
            title: "Real-Time Market Data Integration",
            desc: "We integrate live stock market feeds, exchange rate APIs, and financial news streams into your website. This gives your clients access to up-to-the-minute information, positioning your institution as a comprehensive source for financial intelligence in the UAE.",
            img: imageService4,
            alt: "Market Data Integration for Banks",
            btnname: "Contact Us",
            link: "/contact-us",
          },
          {
            title: "Corporate & Wealth Management Layouts",
            desc: "Tailored designs for different banking segments from retail and SME banking to private wealth management. We create distinct digital environments that speak to the unique needs and expectations of various client personas within the UAE's diverse market.",
            img: imageService5,
            alt: "Corporate Banking Web Design",
            btnname: "Contact Us",
            link: "/contact-us",
          },
          {
            title: "AI-Driven Customer Support Integration",
            desc: "Streamline customer queries with advanced AI chatbots and live chat solutions. These integrated tools provide instant assistance for common banking questions, improving customer satisfaction while reducing the load on your physical support centers.",
            img: imageService6,
            alt: "AI Banking Support Dubai",
            btnname: "Contact Us",
            link: "/contact-us",
          },
        ]}
      />

      <CommonWhyMetter
        imagewhymetter={imagewhymetter}
        alt={
          "Trusted Bank Website Design for UAE Institutions - Website Development Agency"
        }
        heding={"Trusted Banking Website Design for UAE-based Institutions"}
        subheding={
          "We design financial websites with a clear understanding of the regulatory landscape and institutional requirements in the UAE. From service clarity to global trust, every element is engineered for security and prestige."
        }
        lefttext={`  <p><b>Institutional Credibility:</b> Each website is customized to support your institution's goals whether that's increasing digital account openings, promoting investment products, or building long-term corporate trust. Layouts and content flow are designed to reflect financial authority.</p>
                        <p><b>Secure & Reliable Development:</b> We follow a rigorous development process that prioritizes data integrity and technical excellence. From architecture planning to final security testing, we ensure that your financial platform is stable and future-ready.</p>
                        `}
        righttext={`<p><b>Compliance & Ongoing Support:</b> We build websites with strong foundations that respect local and international financial regulations. Post-launch, our team provides reliable support, ensuring your banking platform remains secure, fast, and compliant as your business grows.</p>
                            `}
      />
      <CommonProtfolio />

      <DevelopmentServices />

      <CommonCostBreakdown
        heading="Bank Website Design Dubai- Cost Breakdown"
        description="Specialized banking website design and development solutions designed to strengthen your digital presence and provide secure financial services in the UAE."
      />
      <IndustryGrid />

      <CommonWhyWebsiteDevelopment
        heding={"Financial Website Solutions for Every Type of Institution"}
        subheding={
          "We design financial websites that adapt to the unique focus of each institution across the UAE. Every website is planned around user behavior, security requirements, and institutional objectives ensuring trust and digital performance."
        }
        lefttext={`<p><b>Retail Banks:</b> For consumer-focused banks, we create high-traffic platforms that emphasize ease of use, product discovery, and mobile accessibility. Clear navigation and fast loading times help personal banking customers manage their finances on the go.</p>
                                <p><b>Investment & Private Banking:</b> Websites for wealth management firms focus on prestige, expert insights, and exclusive service showcases. Refined aesthetics and secure portals provide the premium experience expected by high-net-worth clients. </p>
                                <p><b>Insurance Companies:</b> For the insurance sector, we build websites that simplify complex product comparisons, provide instant quote engines, and facilitate easy claim submissions, enhancing customer retention and trust.</p>
                                <p><b>Fintech Startups:</b> We help fintech companies launch quickly with innovative, responsive, and API-rich websites that showcase their unique technology while maintaining the credibility levels required for financial services.</p>
                            `}
        rightimage={imagewhydevelopment}
        alt={
          "Why Choose Website Development Agency for Bank Website Development"
        }
      />

      <Team />

      <CommonClientTestimonials
        testimonials={[
          {
            id: 1,
            name: "Ahmed Al-Farsi",
            text: "Website Development Agency delivered a secure and aesthetically pleasing platform for our boutique investment firm. Their understanding of financial requirements was impressive.",
            image: imagetestimonial1,
          },
          {
            id: 2,
            name: "Sarah Jenkins",
            text: "A highly professional team that understands the importance of data security. Our new customer portal has significantly improved user engagement metrics.",
            image: imagetestimonial2,
          },
          {
            id: 3,
            name: "Mohammed Rashid",
            text: "Excellent service and deep technical expertise. Our institution's search ranking has improved, and the feedback from our clients on the new mobile experience has been fantastic.",
            image: imagetestimonial3,
          },
        ]}
      />

      <LocationService activeLocation="dubai" />

      <CommonFaqSection
        faqs={[
          {
            q: "How do you ensure the security of a banking website?",
            a: "We implement multi-layered security protocols, including SSL/TLS encryption, secure API integrations, regular vulnerability scanning, and compliance with UAE-specific financial data regulations.",
          },
          {
            q: "Can you integrate our existing core banking systems?",
            a: "Yes, we specialize in API integrations that allow your website to securely communicate with your existing core banking and CRM software for seamless data flow.",
          },
          {
            q: "What features are essential for a modern finance website?",
            a: "Essential features include secure user portals, real-time data feeds, financial calculators, responsive design, AI-driven support, and a robust content management system (CMS).",
          },
          {
            q: "How long does it take to build a professional bank website?",
            a: "Typically, a comprehensive banking platform takes between 12 to 24 weeks, depending on the number of integrations, security requirements, and the complexity of the feature set.",
          },
          {
            q: "Do you offer multi-language support (Arabic/English)?",
            a: "Absolutely. We specialize in building high-quality bilingual (Arabic and English) websites that are culturally and technically optimized for the UAE market.",
          },
          {
            q: "Can you help with digital-only banking launches?",
            a: "Yes, we work with fintechs and established banks to design and develop 'Neobank' style digital-first platforms that focus on mobile-first experiences and innovative service delivery.",
          },
        ]}
      />
    </>
  );
};

export default page;
