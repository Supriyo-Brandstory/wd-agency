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
        alt={"Recruitment Agency Website Design Agency in Dubai, UAE"}
        heding={"Recruitment Agency Website Design Agency in Dubai, UAE"}
        subtitle={
          "We build professional, talent-focused websites for recruitment and executive search firms that <br>emphasize human capital expertise, candidate trust, and brand authority in Dubai and the UAE."
        }
      />

      <CommonIntroduction
        heding={"Recruitment Website Design & Development"}
        text1={` <p>In the talent-driven economy of the 21st century, a recruitment agency's website is its primary engine for growth. For agencies navigating Dubai's ultra-competitive labor market, a professional digital presence is essential for attracting elite candidates and securing high-value client mandates. Your website is the bridge between human potential and corporate success.</p>
                 <p>Potential clients look for partners who demonstrate a deep understanding of industry verticals, talent mapping, and executive search rigor. A well-engineered website helps you bridge the gap between job listings and career-defining placements, positioning your firm as a trusted curator of regional talent.</p>
                    `}
        text2={`  <p>Modern recruitment websites must go beyond simple job boards, incorporating features like AI-powered candidate sorting, secure CV portals, and immersive sector-specific insight hubs. We focus on creating digital environments that project an image of professional sophistication and uncompromising talent standards.</p>
                <p><a href='/'>Website Development Agency</a> specializes in engineering high-impact websites for the recruitment and executive search sector. We design responsive, performance-optimized platforms that highlight your firm’s expertise and bolster institutional trust in a competitive talent market.</p>
                    `}
        imageintro1={imageintro1}
        alt1={
          "Specialized Recruitment Website Design in Dubai - Website Development Agency"
        }
        imageintro2={imageintro2}
        alt2={
          "Recruitment Web Development Company UAE - Website Development Agency"
        }
      />

      <DemoTemplate
        title="Recruitment & HR Website Designs- Explore Templates"
        description="Professional and talent-focused recruitment website designs in Dubai, starting at AED 1,500. Launch your <br>talent brand quickly with high-performance, expert designs. Get fast delivery today."
        activetaburl={"recruitment"}
      />

      <CommonInduestriesServices
        heding={"Recruitment Website Design in Dubai, UAE- Our Services"}
        subheding="We provide comprehensive digital solutions designed to help recruitment firms build trust and scale talent acquisition in the UAE."
      />

      <CommonWhyMetter
        imagewhymetter={imagewhymetter}
        alt={
          "Trusted Recruitment Website Design for UAE Agencies - Website Development Agency"
        }
        heding={"Trusted Recruitment Website Design for UAE-based Agencies"}
        subheding={
          "We design recruitment websites with a deep understanding of B2B and talent trust acquisition. From service clarity to sector prestige, every element is engineered for maximum professional impact."
        }
        lefttext={`  <p><b>Tailored for Talent Trust:</b> Each website is customized to support your agency's goals—whether that's securing high-level executive search mandates, promoting specialized HR consulting, or building a high-volume professional brand. Layouts focus on clarity.</p>
                        <p><b>Secure & Scalable Development:</b> we follow a rigorous development process that respects the high data standards of your industry. From initial backend architecture to final security testing, we ensure your digital platform is stable and secure.</p>
                        `}
        righttext={`<p><b>Ongoing Support & Professional SEO:</b> A professional recruitment website is a long-term business asset. Post-launch, we provide reliable support and continuous SEO updates, ensuring your agency remains visible and effective as the labor market evolves.</p>
                            `}
      />
      <CommonProtfolio />

      <DevelopmentServices />

      <CommonCostBreakdown
        heading="Recruitment Website Design Dubai- Cost Breakdown"
        description="Choose specialized recruitment website design and development solutions designed to strengthen your digital presence and build talent trust in the UAE."
      />
      <IndustryGrid />

      <CommonWhyWebsiteDevelopment
        heding={"HR Website Solutions for Specialized Agency Firms"}
        subheding={
          "We build recruitment websites that adapt to the specific focus of your talent firm. Every platform is planned around your sector catalog, search expertise, and client engagement goals."
        }
        lefttext={`<p><b>Executive Search & Headhunting:</b> We create comprehensive websites that highlight C-suite search methodology, international networks, and confidential frameworks, emphasizing prestige and high-level results.</p>
                                <p><b>Specialist Industry Recruitment:</b> For sector experts (Fintech, Tech, Healthcare), our designs focus on technical niche mapping, professional certifications, and industry thought leadership, positioning you as a key talent partner. </p>
                                <p><b>Contract & Temp Staffing:</b> Websites for high-volume staffing focus on speed, payroll reliability, and candidate volume management, showcasing your ability to deliver scale and agility to clients. </p>
                                <p><b>HR Consulting & Advisory:</b> We design platforms for HR consultants that focus on organizational design, compensation frameworks, and regulatory compliance, utilizing detailed whitepaper hubs and service pages.</p>
                            `}
        rightimage={imagewhydevelopment}
        alt={
          "Why Choose Website Development Agency for Recruitment Website Development"
        }
      />

      <Team />

      <CommonClientTestimonials
        testimonials={[
          {
            id: 1,
            name: "Jeremy Thorne",
            text: "Website Development Agency built a digital presence that perfectly reflects our executive search standards. Our new site has significantly improved our ability to attract high-caliber talent in Dubai.",
            image: imagetestimonial1,
          },
          {
            id: 2,
            name: "Laila Al-Ghazali",
            text: "A highly professional team with a deep understanding of the talent sector. They delivered an authoritative website that has become a key driver for our international client leads.",
            image: imagetestimonial2,
          },
          {
            id: 3,
            name: "Robert Miller",
            text: "Excellent service from start to finish. Our search rankings for specialized recruitment terms have improved dramatically, and the site's performance is exceptional.",
            image: imagetestimonial3,
          },
        ]}
      />

      <LocationService activeLocation="dubai" />

      <CommonFaqSection
        faqs={[
          {
            q: "How long does it take to build a professional recruitment website?",
            a: "A high-authority recruitment website typically takes 6 to 10 weeks, depending on the depth of job board features and the number of sector-specific portals required.",
          },
          {
            q: "Can you integrate our existing ATS (Applicant Tracking System)?",
            a: "Yes, we specialize in API integrations and can securely connect your website to your existing ATS (like Bullhorn, Greenhouse, or Zoho Recruit) for seamless candidate management.",
          },
          {
            q: "How do you ensure candidate data is secure on the website? ",
            a: "We implement advanced security measures including SSL encryption and secure form handling to ensure all candidate CVs and personal data are kept confidential and compliant.",
          },
          {
            q: "Can we have a blog for industry talent insights?",
            a: "Absolutely. We build user-friendly blogs and insight sections that allow your recruiters to easily publish market updates and demonstrate thought leadership to candidates and clients.",
          },
          {
            q: "Will the website be optimized for mobile job applications?",
            a: "Yes, we ensure all job boards and application forms are fully responsive, allowing candidates to easily apply for roles directly from their smartphones.",
          },
          {
            q: "Do you offer SEO for specialized recruitment terms?",
            a: "Yes, we provide specialized SEO strategies that target niche industry recruitment terms to ensure your agency is visible to both passive and active talent in the UAE.",
          },
        ]}
      />
    </>
  );
};

export default page;
