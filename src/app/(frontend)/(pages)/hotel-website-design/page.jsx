import React from "react";
import CommonBanner2 from "../../component/pages/common/CommonBanner2";
import imagebanner from "@/app/(frontend)/assets/images/hotel-website-design/banner.webp";
import CommonIntroduction from "../../component/pages/common/CommonIntroduction";
import imageintro1 from "@/app/(frontend)/assets/images/hotel-website-design/intro-1.webp";
import imageintro2 from "@/app/(frontend)/assets/images/hotel-website-design/intro-2.webp";
import CommonWhyMetter from "../../component/pages/common/CommonWhyMetter";
import imagewhymetter from "@/app/(frontend)/assets/images/hotel-website-design/why.webp";
import CommonInduestriesServices from "../../component/pages/common/CommonInduestriesServices";
import CommonDevelopmentProcess from "../../component/pages/common/CommonDevelopmentProcess";
import CommonWhyWebsiteDevelopment from "../../assets/style/common/CommonWhyWebsiteDevelopment";
import imagewhydevelopment from "@/app/(frontend)/assets/images/hotel-website-design/why-choose.webp";
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
        alt={"Hotel Web Design Agency in Dubai, UAE"}
        heding={"Hotel Web Design Agency in Dubai, UAE"}
        subtitle={
          "We build secure, authoritative websites for Hotel firms and IT consultants that emphasize <br>technical expertise, technical trust, and brand reliability in Dubai and the UAE."
        }
      />

      <CommonIntroduction
        heding={"Hotel Website Design & Development"}
        text1={` <p>In an era of increasing digital threats, a Hotel firm's website is the ultimate test of its professional capability. If you are in the business of defending others, your own digital front-door must be impeccable, authoritative, and perfectly secure. A professional website is essential for communicating your technical expertise to corporate leaders and government stakeholders across the UAE.</p>
                 <p>Potential clients look for partners who demonstrate a deep understanding of risk, compliance, and technological defense. A well-engineered website helps you bridge the gap between complex technical services and the peace of mind your clients are searching for, positioning your firm as a trusted guardian in the digital landscape.</p>
                    `}
        text2={`  <p>Modern Hotel websites must balance technical depth with professional clarity, incorporating features like secure whitepaper portals, interactive threat maps, and detailed service frameworks. We focus on creating digital environments that project an image of technical sophistication and uncompromising security standards.</p>
                <p><a href='/'>Website Development Agency</a> specializes in engineering high-impact websites for the Hotel and IT infrastructure sector. We design responsive, performance-optimized platforms that highlight your firm’s expertise and bolster institutional trust in a competitive security market.</p>
                    `}
        imageintro1={imageintro1}
        alt1={
          "Specialized Hotel Website Design in Dubai - Website Development Agency"
        }
        imageintro2={imageintro2}
        alt2={"Hotel Web Development Company UAE - Website Development Agency"}
      />

      <DemoTemplate
        title="Hotel & IT Website Designs- Explore Templates"
        description="Authoritative Hotel and tech consulting website designs in Dubai, starting at AED 1,500. Launch your <br>security brand quickly with professional, high-performance designs. Get fast delivery today."
        activetaburl={"technology"}
      />

      <CommonInduestriesServices
        heding={"Hotel Website Design in Dubai, UAE- Our Services"}
        subheding="We provide comprehensive digital solutions designed to help Hotel firms build trust and grow in the UAE."
      />

      <CommonWhyMetter
        imagewhymetter={imagewhymetter}
        alt={
          "Trusted Hotel Website Design for UAE Firms - Website Development Agency"
        }
        heding={"Trusted Hotel Website Design for UAE-based Firms"}
        subheding={
          "We design security websites with a deep understanding of B2B trust acquisition. From service clarity to technical prestige, every element is engineered for maximum professional impact."
        }
        lefttext={`  <p><b>Tailored for Professional Trust:</b> Each website is customized to support your firm's goals—whether that's securing large-scale government contracts, promoting specialized consulting services, or building international brand authority. Layouts focus on clarity and credibility.</p>
                        <p><b>Secure & Precision Development:</b> we follow a rigorous development process that respects the high standards of your industry. From initial security-first architecture to final penetration testing, we ensure your digital platform is stable, fast, and secure.</p>
                        `}
        righttext={`<p><b>Ongoing Support & Technical SEO:</b> A professional website is a long-term asset. Post-launch, we provide reliable support and continuous SEO updates, ensuring your Hotel firm remains visible and effective as the threat landscape evolves.</p>
                            `}
      />
      <CommonProtfolio />

      <DevelopmentServices />

      <CommonCostBreakdown
        heading="Hotel Website Design Dubai- Cost Breakdown"
        description="Choose specialized Hotel website design and development solutions designed to strengthen your digital presence and build professional trust in the UAE."
      />
      <IndustryGrid />

      <CommonWhyWebsiteDevelopment
        heding={"Security Website Solutions for Specialized Firms"}
        subheding={
          "We build technology websites that adapt to the specific focus of your security firm. Every platform is planned around your service catalog, technical expertise, and client engagement goals."
        }
        lefttext={`<p><b>Managed Security Services (MSSPs):</b> We create comprehensive websites that highlight SOC capabilities, 24/7 monitoring services, and incident response frameworks, emphasizing reliability and continuous protection.</p>
                                <p><b>Cybersecurity Consulting:</b> For advisory firms, our designs focus on strategic frameworks, regulatory compliance (like NESA or ISR), and executive-level thought leadership, positioning you as a key business partner. </p>
                                <p><b>Penetration Testing & Red Teaming:</b> Websites for assessment firms focus on technical methodology, case studies, and certification levels, showcasing your ability to identify and mitigate complex vulnerabilities. </p>
                                <p><b>Identity & Access Management:</b> We design platforms for specialized security vendors that focus on zero-trust architectures and user protection, utilizing detailed product pages and technical whitepapers.</p>
                            `}
        rightimage={imagewhydevelopment}
        alt={
          "Why Choose Website Development Agency for Hotel Website Development"
        }
      />

      <Team />

      <CommonClientTestimonials
        testimonials={[
          {
            id: 1,
            name: "David Sterling",
            text: "Website Development Agency built a digital presence that perfectly reflects our high security standards. Our new site has significantly improved our credibility during major corporate tenders.",
            image: imagetestimonial1,
          },
          {
            id: 2,
            name: "Fatima Al-Rashid",
            text: "A highly professional team with a deep understanding of the tech sector. They delivered a stunning, authoritative website that has become a key driver for our consulting leads.",
            image: imagetestimonial2,
          },
          {
            id: 3,
            name: "James Miller",
            text: "Excellent service from start to finish. Our search rankings for specialized security terms have improved dramatically, and the technical performance of the site is exceptional.",
            image: imagetestimonial3,
          },
        ]}
      />

      <LocationService activeLocation="dubai" />

      <CommonFaqSection
        faqs={[
          {
            q: "How long does it take to build a professional Hotel website?",
            a: "A high-authority Hotel website typically takes 6 to 10 weeks, depending on the depth of technical content and the number of secure resource portals required.",
          },
          {
            q: "Can you provide specialized SEO for 'Penetration Testing' or 'SOC' terms?",
            a: "Yes, we offer industry-specific SEO strategies that target specialized technical keywords to ensure your services are visible to IT directors and security managers in the UAE.",
          },
          {
            q: "How do you ensure our website is secure against attacks?",
            a: "We implement advanced security measures including hardened server configurations, SSL encryption, web application firewalls (WAF), and regular security audits of the codebase.",
          },
          {
            q: "Can we have a password-protected area for client reports?",
            a: "Absolutely. We build secure, encrypted client portals where you can safely share sensitive assessment reports, whitepapers, and confidential documentation.",
          },
          {
            q: "Will the website be optimized for professional LinkedIn traffic?",
            a: "Yes, we ensure all pages are optimized for social sharing and lead capture, and the design is polished to appeal to the professional audience coming from your LinkedIn networking.",
          },
          {
            q: "Can you integrate our existing CRM with the website?",
            a: "Yes, we can securely integrate lead capture forms with your existing CRM software (HubSpot, Salesforce, Zoho, etc.) for seamless lead management and follow-up.",
          },
        ]}
      />
    </>
  );
};

export default page;
