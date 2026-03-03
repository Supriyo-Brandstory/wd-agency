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
        heding={"NextJS Website <br>Development Company in UAE"}
        subtitle={
          "We build SEO-optimized, super-fast, and future-ready <br>NextJS web applications that drive business growth in Dubai, <br>Abu Dhabi, and across the UAE."
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
        heding={"NextJS Website Development"}
        text1={` <p>In the digital age, speed and SEO are the differentiators for online success. <a href="/">Website Development Agency</a> is a leading NextJS development company in the UAE. We specialize in building lightning-fast, highly optimized web applications that combine the power of React with advanced server-side rendering (SSR) and static site generation (SSG).</p>
                    <p>Our team of expert NextJS developers is dedicated to crafting premium digital experiences that perform exceptionally well on search engines and deliver a flawless user experience. We partner with businesses across the UAE to build scalable and modern web solutions that achieve real results.</p>
                    `}
        text2={`  <p>NextJS is the framework of choice for businesses that prioritize speed, security, and search visibility. Whether you need a high-conversion e-commerce platform or a complex corporate portal, our team has the expertise to deliver a solution that exceeds your expectations.</p>
                <p>At Website Development Agency, we focus on delivering high Core Web Vitals and superior performance. Choose a UAE-based NextJS expert who understands your local audience and global digital standards.</p>
                    `}
        imageintro1={imageintro1}
        imageintro2={imageintro2}
      />
      <CommonSetsUs
        text1={"The Power of NextJS for Your Business"}
        text2={`NextJS offers a unique blend of performance and flexibility, making it ideal for modern businesses in the UAE. It allows for faster page loads, better SEO rankings through server-side rendering, and improved security. At Website Development Agency, we leverage these features to build platforms that are both powerful and user-friendly.
                    <br><br>
                    With NextJS, we ensure your website is ready for any traffic load while maintaining peak performance. Our development experts focus on clean code, modular architecture, and seamless integrations to provide a future-proof digital solution.
                       `}
        bg={setusimagesabudhabi}
      />
      <CommonIndustries
        heding={"Comprehensive NextJS Solutions for UAE Businesses"}
        subheding="At Website Development Agency, we provide a full suite of NextJS development services tailored to the needs of the UAE market. From custom app development to performance optimization, we cover it all."
        services={[
          {
            title: "Custom NextJS App Development",
            desc: "We create tailored NextJS applications that are fast, secure, and perfectly aligned with your brand's digital strategy.",
            img: imageService1,
            btnname: "Contact Us",
            link: "/contact-us",
          },
          {
            title: "Static & Dynamic Rendering",
            desc: `Leverage SSG and SSR to provide the best possible performance and SEO for your web content.`,
            img: imageService2,
            btnname: "Contact Us",
            link: "/contact-us",
          },
          {
            title: "E-commerce with NextJS",
            desc: "Build high-performing online stores that provide smooth user journeys and fast checkout experiences.",
            img: imageService3,
            btnname: "Contact Us",
            link: "/contact-us",
          },
          {
            title: "Headless CMS Integration",
            desc: "We integrate NextJS with various headless CMS options for flexible content management and superior frontend performance.",
            img: imageService4,
            btnname: "Contact Us",
            link: "/contact-us",
          },
          {
            title: "Performance Optimization",
            desc: "Improve your existing NextJS site's speed and SEO with our expert audits and optimization services.",
            img: imageService5,
            btnname: "Contact Us",
            link: "/contact-us",
          },
          {
            title: "Ongoing Support & Maintenance",
            desc: "We provide continuous monitoring and updates to ensure your NextJS application stays at the top of its game.",
            img: imageService8,
            btnname: "Contact Us",
            link: "/contact-us",
          },
        ]}
      />

      <CommonDevelopmentProcess
        heding={"Our NextJS Development Workflow"}
        subheding={"Engineered for Speed, SEO, and Scalability"}
        processData={[
          {
            id: "01",
            title: "Strategy & Planning",
            description: `We define the optimal rendering strategy (SSR vs. SSG) based on your content and business goals.`,
          },
          {
            id: "02",
            title: "Performance-Driven Design",
            description: `Our designers focus on layouts that not only look great but are also optimized for fast loading and Core Web Vitals.`,
          },
          {
            id: "03",
            title: "NextJS Development",
            description: `Our developers build a robust frontend using the latest Next.js features like App Router, Server Components, and more.`,
          },
          {
            id: "04",
            title: "API & Data Integration",
            description: `We connect your NextJS application with backends and external services for a dynamic and interactive experience.`,
          },
          {
            id: "05",
            title: "Testing & SEO Audit",
            description: `We perform comprehensive testing and SEO audits to ensure your site is ready to rank and perform on day one.`,
          },
          {
            id: "06",
            title: "Deployment & Growth",
            description: `We handle seamless deployment to Vercel or other cloud platforms and provide ongoing support for your growth.`,
          },
        ]}
      />
      <CommonThreeCard
        text1={"Key Performance Pillars of NextJS"}
        text2={
          "We use the full potential of NextJS to deliver superior digital products for our clients in the UAE."
        }
        boxdata={[
          {
            id: 1,
            img: StrategicProblemSolvingimage,
            title: "Server-Side Rendering (SSR)",
            desc: "Improve SEO and initial load times by rendering pages on the server for every request.",
          },
          {
            id: 2,
            img: FocusedApproachimage,
            title: "Static Site Generation (SSG)",
            desc: "Pre-render pages at build time for unmatched speed and performance.",
          },
          {
            id: 3,
            img: PartnershipCommitmentimage,
            title: "Optimized Images & Fonts",
            desc: "Automatic image and font optimization to improve site speed and Core Web Vitals.",
          },
          {
            id: 4,
            img: Transparencyimage,
            title: "Enhanced Security",
            desc: "NextJS provides a secure environment for building modern web applications with fewer vulnerabilities.",
          },
          {
            id: 5,
            img: TechnologyAdoptionimage,
            title: "Seamless Routing",
            desc: "Advanced routing capabilities that provide a smooth, app-like navigation experience.",
          },
          {
            id: 6,
            img: ValueforMoneyServicesimage,
            title: "API Routes",
            desc: "Build serverless functions directly within your NextJS application for backend logic.",
          },
          {
            id: 7,
            img: ValueforMoneyServicesimage,
            title: "Superior SEO",
            desc: "Built-in support for meta tags and headers to ensure your content is easily discoverable.",
          },
          {
            id: 8,
            img: ValueforMoneyServicesimage,
            title: "Edge Runtime Support",
            desc: "Deliver faster responses by running code at the edge, closer to your users in the UAE.",
          },
        ]}
      />
      <CommonWhyWebsiteDevelopment
        heding={"Why NextJS is the Right Choice for Your UAE Business"}
        subheding={
          "NextJS is the gold standard for modern web development. Here is why UAE businesses trust Website Development Agency for NextJS:"
        }
        lefttext={`<ul>
                                <li><strong>Expertise in Modern Frameworks</strong> – Our developers are masters of React and NextJS, ensuring top-tier technical implementation.</li>
                                
                                <li><strong>Focus on Speed & SEO</strong> – We build websites that rank higher and load faster, giving you a competitive edge.</li>
                                
                                <li><strong>Scalable Solutions</strong> – Whether you are a startup or an enterprise, our NextJS solutions grow with you.</li>
                                
                                <li><strong>Clean & Maintainable Code</strong> – We follow industry best practices to ensure your site is easy to manage and update.</li>

                                <li><strong>Local Support Team</strong> – We are right here in the UAE to support your digital journey every step of the way.</li>
                                </ul>
                                <p>Step into the future of web development with a partner dedicated to your online success in the UAE.</p>
                            `}
        rightimage={imagewhydevelopment}
      />
      <CommonIndustries />
      <CommonClientTestimonials />
      <CommonServiceLocations />

      <CommonFaqSection
        faqs={[
          {
            q: "Is NextJS better than a standard React app?",
            a: "Yes, for most business use cases. NextJS adds built-in SSR, SSG, and SEO optimization which standard React apps lack out of the box, making it better for growth and search visibility.",
          },
          {
            q: "How much does NextJS development cost in Dubai?",
            a: "Standard NextJS websites typically start from AED 9,000, while complex applications with custom integrations can range from AED 40,000 to AED 80,000+.",
          },
          {
            q: "How long does it take to develop a NextJS site?",
            a: "Most projects are completed within 4 to 10 weeks, depending on the complexity of the requirements and data integrations.",
          },
          {
            q: "Is NextJS good for E-commerce?",
            a: "Excellent. Its speed and SEO benefits directly lead to higher conversion rates and better search rankings for online stores.",
          },
          {
            q: "Can you host NextJS in the UAE?",
            a: "Yes, we can deploy NextJS to global platforms with edge nodes in the UAE or local hosting solutions depending on your preference.",
          },
        ]}
      />
    </>
  );
};

export default page;
