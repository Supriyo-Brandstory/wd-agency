import React from "react";
import Banner from "../../component/pages/home/Banner";
import CommonAboutPage from "../../component/pages/common/CommonAboutPage";
import aboutimagesharjhat from "@/app/(frontend)/assets/images/ajman/about.webp";
import setusimagesharjhat from "@/app/(frontend)/assets/images/ajman/setusbg.webp";
import sharjahAboutimg from "@/app/(frontend)/assets/images/ajman/about-2.webp";
import CommonSetsUs from "../../component/pages/common/CommonSetsUs";
import CommonAboutPage2 from "../../component/pages/common/CommonAboutPage2";
import CommonThreeCard from "../../component/pages/common/CommonThreeCard";

import StrategicProblemSolvingimage from "@/app/(frontend)/assets/images/website-development/Strategic-Problem-Solving.png";
import FocusedApproachimage from "@/app/(frontend)/assets/images/website-development/FocusedApproach.png";
import PartnershipCommitmentimage from "@/app/(frontend)/assets/images/website-development/Partnership-Commitment.png";
import Transparencyimage from "@/app/(frontend)/assets/images/website-development/Transparency.png";
import TechnologyAdoptionimage from "@/app/(frontend)/assets/images/website-development/Technology-Adoption.png";
import ValueforMoneyServicesimage from "@/app/(frontend)/assets/images/website-development/Value-for-Money-Services.png";

import CommonServices from "../../component/pages/common/CommonServices";
import CommonFaqSection from "../../component/pages/common/CommonFaqSection";
import CommonResult from "../../component/pages/common/CommonResult";

import customdesign from "@/app/(frontend)/assets/images/website-development/custom-design.png";
import SEOCentric from "@/app/(frontend)/assets/images/website-development/SEO-Centric.webp";
import MobileFirst from "@/app/(frontend)/assets/images/website-development/Mobile-First.webp";
import Optimized from "@/app/(frontend)/assets/images/website-development/Optimized.webp";
import CommonIndustries from "../../component/pages/common/CommonIndustries";
import CommonProtfolio from "../../component/pages/common/CommonProtfolio";
import DevelopmentProcess from "@/app/(frontend)/assets/images/ajman/DevelopmentProcess.webp";
import CommonClientTestimonials from "../../component/pages/common/CommonClientTestimonials";
import LocationService from "../../component/pages/common/LocationService";

import CommonCostBreakdown from "../../component/pages/common/CommonCostBreakdown";
import ClientSection from "../../component/pages/common/ClientSection";
import PremierAgency from "../../component/pages/common/PremierAgency";
import IndustryGrid from "../../component/pages/common/IndustryGrid";
import TechnologyStack from "../../component/pages/home/TechnologyStack";

const page = () => {
  return (
    <>
      <Banner
        text1={"Elevate your online presence with The"}
        text2={"Best Web Design Agency in Ajman"}
        text3={
          "We design intelligent, responsive, and results-driven websites for businesses in Ajman. Partner with a website development agency that understands the local market and is committed to turning your business goals into online success."
        }
      />
      <ClientSection />
      

      <CommonAboutPage2
        text1="Professional Website Design & Development <br>Services in Ajman"
        text2={`
                            <p class="mb-20">
                           Your website isn't just a digital placeholder- it's the engine that powers modern business growth. It works while you sleep, turning browsers into buyers, answering questions before they're asked, and positioning your Ajman business as the clear choice in a crowded market. When built right, your website becomes your most effective sales representative.
                            </p>
                            <ul class="ml-40">
                            <li>Instant credibility that turns skeptical visitors into interested prospects</li>
                            <li>Crystal-clear messaging that highlights what sets you apart</li>
                            <li>Flawless performance on every screen size and device type</li>
                            <li>Measurable contributions to your sales pipeline and revenue goals</li>
                            </ul>
                            <p>
                            We're an <a href='/website-development-in-ajman'><strong>web development agency in Ajman</strong></a> that builds websites with one priority: making your business more successful. Our approach blends data-driven strategy with creative execution and rock-solid technical development. The websites we create don't just look professional; they generate leads, close sales, and give you a competitive advantage that compounds over time.
                            </p>
                    `}
        img={sharjahAboutimg}
      />

      <CommonSetsUs
        text1={"Transforming Ideas Into High-Performance Websites"}
        text2={
          "We build digital platforms that earn trust quickly, communicate your value clearly, and convert visitors into customers. Our design process is grounded in user behavior- understanding what your audience needs, how they decide, and what stops them from taking action. <br><br>As your business grows, your website should scale with it. We develop secure, flexible frameworks that support new features like customer portals, added services, and market expansion, without a full rebuild. With mobile-first design, fast load speeds, and integrated tools for leads, scheduling, and sales, your website works as a dependable revenue-driving platform."
        }
        bg={setusimagesharjhat}
      />
      {/* rest */}
      
      <CommonProtfolio />
      <PremierAgency />
      <IndustryGrid />

      <CommonServices
        theding={"Web Design in Ajman- More Than Just Aesthetics"}
        tdesc={` <p>At Website Development Agency, our approach to web design in Ajman focuses on creating experiences that are intuitive, engaging, and purposeful. Every element from layout and navigation to content placement is designed to guide visitors seamlessly, ensuring they find what they need quickly.</p>
                    <p class='mt-20'>We believe that effective web design combines creativity with functionality. Fast-loading pages, mobile responsiveness, and clear calls-to-action work together to enhance usability and drive conversions. </p>
                `}
        bheding={"We proiritize our website design and development work with:"}
        bdesc={`<ul class='ml-50'>
                <li>User-centric Design - Fast-loading, glitch-free, and simple-to-use designs.</li>
                <li>Strategy & information architecture - Content strategy, taxonomy, and conversion mapping.</li>
                <li>Mobile Responsiveness - Leveraged for each screen size.</li>
                <li>Strong Branding - Steadiness across visuals, tone, and messaging.</li>
                <li>SEO Friendly - Built-in strategies to assist your business in ranking higher on Google.</li>
                
            </ul>
            <p class='mt-20'>Your website becomes your digital storefront, and we make sure it keeps customers engaged from the initial click to the ultimate conversion.</p>
            `}
        bbg={DevelopmentProcess}
      />

      <TechnologyStack />

      <CommonCostBreakdown
        heading="Website Design Ajman- Cost Breakdown"
        description="Avail the best website design and Development package based on the features, performance, and growth level you need."
      />


      <CommonResult
        heding={"We Follow Results-Driven Web Design Principles"}
        desc={
          "Great website design connects a visitor’s journey from initial impact to conversation. We are the best expert web design agency creating websites that don’t just look good and functional, but also work across all devices. From intuitive UX design to high end visuals, we outline websites attract, engage, and keep users engaged."
        }
        resultdata={[
          {
            id: 1,
            img: customdesign,
            title: "Custom Design",
            desc: "Fully responsive for smartphones, tablets, and desktops.",
            link: "#",
          },
          {
            id: 2,
            img: SEOCentric,
            title: "SEO-Centric",
            desc: "Organized with on-page SEO basics in mind.",
            link: "#",
          },
          {
            id: 3,
            img: MobileFirst,
            title: "Mobile-First Approach",
            desc: "Fully responsive for smartphones, tablets, and desktops.",
            link: "#",
          },
          {
            id: 4,
            img: Optimized,
            title: "Optimized for Performance",
            desc: "Fast, safe, and leveraged for conversions.",
            link: "#",
          },
        ]}
        footertext={
          "We have worked with leading businesses in Ajman, UAE across retail, real estate, healthcare, education, and e-commerce. Each industry has different user expectations, workflows, and compliance needs, and we design digital platforms tailored to those differences- not one-size-fits-all solutions. "
        }
      />
      <CommonClientTestimonials />
      <LocationService activeLocation="ajman" />

      <CommonFaqSection
        faqs={[
          {
            q: "What Types of Websites Do You Develop for Ajman Businesses?",
            a: "We create a wide range of websites, including corporate sites, eCommerce stores, portfolio sites, blogs, and custom web applications, all designed to meet the unique needs of Ajman businesses.",
          },
          {
            q: "How Much Does Website Development in Ajman Cost?",
            a: "The cost depends on the type of website, complexity, features, and timeline. Our packages start from AED 5,000 and can be customized to suit different budgets and business requirements.",
          },
          {
            q: "Do You Provide Multilingual Websites in Ajman?",
            a: "Yes, we design websites that support both Arabic and English, ensuring a seamless experience for your local and international audience.",
          },
          {
            q: "Do You Offer Post-launch Support?",
            a: "Yes, we provide free maintenance for the first three months and offer ongoing support plans, including uptime monitoring, security alerts, backups, and instant assistance for any issues.",
          },
          {
            q: "Which Web Development Platforms Do you Recommend?",
            a: "We recommend WordPress for content-rich websites, Shopify, Magento, or WooCommerce for eCommerce, and headless CMS with React or Vue for high-performance websites with complex integrations.",
          },
          {
            q: "How Do You Handle Integrations with CRM, ERP, or Payment Gateways?",
            a: "We implement secure API integrations and middleware where necessary, ensuring automated data flows that synchronize leads, orders, and records with your internal systems.",
          },
          {
            q: "How Long Does It Take to Develop a Website in Ajman?",
            a: "Project timelines vary based on complexity, features, and revisions. On average, a standard website can be completed in 4–8 weeks, while more complex solutions may take longer.",
          },
          {
            q: "Do you Follow Security Best Practices in Web Development?",
            a: "Yes, we follow secure coding practices and adhere to industry-standard security protocols to protect your website and user data.",
          },
          {
            q: "Why Choose Website Development Agency for Web Development in Ajman?",
            a: "Website Development Agency is one of the most reputable and 5-star rated web design agency in Ajman. We combine local market understanding with modern web technologies to deliver websites that are visually appealing, functional, and aligned with your business goals and digital growth initiatives.",
          },
        ]}
      />
    </>
  );
};

export default page;
