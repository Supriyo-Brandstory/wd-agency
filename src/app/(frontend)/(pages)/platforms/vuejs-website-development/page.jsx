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
        heding={"VueJS Website <br>Development Company in UAE"}
        subtitle={
          "We build high-performance, reactive, and scalable <br>VueJS web applications that drive business growth in Dubai, <br>Abu Dhabi, and across the UAE."
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
        heding={"VueJS Website Development"}
        text1={` <p>In the modern digital landscape, your website's performance and interactivity are key to business success. <a href="/">Website Development Agency</a> is a premier VueJS website development company in the UAE. We specialize in building fast, scalable, and highly interactive web applications using Vue.js, ensuring your business stands out with a cutting-edge online presence.</p>
                    <p>Our team of expert VueJS developers combines technical mastery with creative design to deliver solutions that are not only visually stunning but also exceptionally performant. We help startups, SMEs, and large enterprises in the UAE leverage Vue.js to create seamless user experiences that drive engagement and conversions.</p>
                    `}
        text2={`  <p>By using Vue.js, we create applications that are easy to maintain, highly flexible, and lightning-fast. From complex single-page applications (SPAs) to interactive user interfaces, we provide comprehensive Vue.js development services tailored to your specific business needs.</p>
                <p>At Website Development Agency, we focus on security, scalability, and performance to ensure your digital product succeeds in the long run. Partner with a UAE-based VueJS expert to transform your vision into a high-performing reality.</p>
                    `}
        imageintro1={imageintro1}
        imageintro2={imageintro2}
      />
      <CommonSetsUs
        text1={"Expert VueJS Development Services"}
        text2={`We provide scalable VueJS development services for businesses looking to build modern web applications. At Website Development Agency, we focus on creating reactive user interfaces that are intuitive, fast, and optimized for search engines. Our approach ensures your application can handle growth while maintaining a smooth user experience.
                    <br><br>
                    We combine technical expertise with a deep understanding of the UAE market to build VueJS solutions that deliver results. From state management with Vuex/Pinia to modern routing, we ensure every aspect of your application is built to the highest standards.
                       `}
        bg={setusimagesabudhabi}
      />
      <CommonIndustries
        heding={"End-to-End VueJS Solutions for UAE Businesses"}
        subheding="At Website Development Agency, we offer a full range of VueJS development solutions designed to help UAE businesses thrive in a digital-first world. Our team provides strategy, design, development, and ongoing support."
        services={[
          {
            title: "Custom VueJS Development",
            desc: "We build tailored VueJS applications that align with your business goals and user needs, ensuring a unique and effective digital presence.",
            img: imageService1,
            btnname: "Contact Us",
            link: "/contact-us",
          },
          {
            title: "SPA & PWA Development",
            desc: `We specialize in creating Single Page Applications and Progressive Web Apps that offer app-like experiences with fast loading times and offline capabilities.`,
            img: imageService2,
            btnname: "Contact Us",
            link: "/contact-us",
          },
          {
            title: "Interactive UI Development",
            desc: "Leverage Vue.js to create highly interactive and responsive user interfaces that engage your audience and improve site usability.",
            img: imageService3,
            btnname: "Contact Us",
            link: "/contact-us",
          },
          {
            title: "Third-Party API Integration",
            desc: "We seamlessly integrate VueJS applications with external APIs, payment gateways, and CRMs to enhance functionality and streamline operations.",
            img: imageService4,
            btnname: "Contact Us",
            link: "/contact-us",
          },
          {
            title: "Migration to VueJS",
            desc: "Upgrade your legacy systems to VueJS for better performance, easier maintenance, and a more modern user experience.",
            img: imageService5,
            btnname: "Contact Us",
            link: "/contact-us",
          },
          {
            title: "Support & Maintenance",
            desc: "We provide ongoing technical support and maintenance to ensure your VueJS application remains secure, up-to-date, and high-performing.",
            img: imageService8,
            btnname: "Contact Us",
            link: "/contact-us",
          },
        ]}
      />

      <CommonDevelopmentProcess
        heding={"Our VueJS Development Workflow"}
        subheding={"Building Modern Web Applications from Concept to Launch"}
        processData={[
          {
            id: "01",
            title: "Requirement Gathering",
            description: `We start by understanding your business vision and defining the technical requirements for your VueJS application.`,
          },
          {
            id: "02",
            title: "UI/UX Design & Prototyping",
            description: `Our designers create intuitive and attractive interfaces that focus on user engagement and seamless navigation.`,
          },
          {
            id: "03",
            title: "Core VueJS Development",
            description: `Our developers build a robust and scalable frontend using Vue.js components and modern development practices.`,
          },
          {
            id: "04",
            title: "State Management & Integration",
            description: `We implement efficient state management and integrate necessary APIs to ensure smooth data flow and functionality.`,
          },
          {
            id: "05",
            title: "Quality Assurance",
            description: `We perform rigorous testing across devices and browsers to ensure the application is bug-free and performant.`,
          },
          {
            id: "06",
            title: "Deployment & Maintenance",
            description: `We handle the launch process and provide continuous support to keep your VueJS application running at its best.`,
          },
        ]}
      />
      <CommonThreeCard
        text1={"Core Features of Our VueJS Solutions"}
        text2={
          "We implement advanced VueJS features to create fast, responsive, and secure web applications for businesses in the UAE."
        }
        boxdata={[
          {
            id: 1,
            img: StrategicProblemSolvingimage,
            title: "Reactivity & Performance",
            desc: "VueJS offers impressive performance with its virtual DOM, ensuring fast updates and a smooth user experience.",
          },
          {
            id: 2,
            img: FocusedApproachimage,
            title: "Component-Based Architecture",
            desc: "Our developers use modular components for efficient development, easier maintenance, and improved scalability.",
          },
          {
            id: 3,
            img: PartnershipCommitmentimage,
            title: "Scalable Ecosystem",
            desc: "We build applications that can grow with your business, leveraging the rich Vue ecosystem of tools and libraries.",
          },
          {
            id: 4,
            img: Transparencyimage,
            title: "Seamless Integrations",
            desc: "Easily connect your Vue frontend with any backend or third-party service for enhanced functionality.",
          },
          {
            id: 5,
            img: TechnologyAdoptionimage,
            title: "Lightweight & Flexible",
            desc: "Vue.js is lightweight and flexible, allowing us to build everything from small widgets to large-scale applications.",
          },
          {
            id: 6,
            img: ValueforMoneyServicesimage,
            title: "SEO-Friendly Implementation",
            desc: "We ensure your VueJS applications are optimized for search engines using Server-Side Rendering (SSR) or modern SEO techniques.",
          },
          {
            id: 7,
            img: ValueforMoneyServicesimage,
            title: "Secure & Reliable",
            desc: "We follow best practices in security to protect your data and ensure your application remains reliable under load.",
          },
          {
            id: 8,
            img: ValueforMoneyServicesimage,
            title: "Modern Dev Tooling",
            desc: "We use the latest Vue CLI and Vite tooling for faster development cycles and optimized production builds.",
          },
        ]}
      />
      <CommonWhyWebsiteDevelopment
        heding={"Why Choose Web Development Agency for VueJS"}
        subheding={
          "Partnering with the right agency is crucial for your digital success. Here is why UAE businesses choose us for VueJS:"
        }
        lefttext={`<ul>
                                <li><strong>Expert VueJS Developers</strong> – Our team has extensive experience in building complex Vue.js applications with optimal performance.</li>
                                
                                <li><strong>Local UAE Knowledge</strong> – We understand the local market trends and consumer behaviors in Dubai and beyond.</li>
                                
                                <li><strong>High-Performance Results</strong> – We focus on speed, responsiveness, and user experience for every project we undertake.</li>
                                
                                <li><strong>Custom-Tailored Solutions</strong> – We don't believe in one-size-fits-all; we build solutions that reflect your brand.</li>

                                <li><strong>Dedicated Support</strong> – We are here for the long term, providing support and updates as your business grows.</li>
                                </ul>
                                <p>Gain a digital growth partner dedicated to your success in the UAE by choosing Website Development Agency.</p>
                            `}
        rightimage={imagewhydevelopment}
      />
      <CommonIndustries />
      <CommonClientTestimonials />
      <CommonServiceLocations />

      <CommonFaqSection
        faqs={[
          {
            q: "Why choose Vue.js for my business website?",
            a: "Vue.js offers excellent performance, flexibility, and a gentle learning curve, making it ideal for creating interactive and fast web applications that can scale with your business.",
          },
          {
            q: "How much does VueJS development cost in the UAE?",
            a: "VueJS project costs depend on complexity and features. A standard application may start from AED 8,000, while complex enterprise solutions can exceed AED 50,000. We provide transparent pricing tailored to your needs.",
          },
          {
            q: "How long does it take to build a VueJS application?",
            a: "Timelines typically range from 3 to 8 weeks, depending on the scope of the project and the level of customization required.",
          },
          {
            q: "Can you migrate my existing site to VueJS?",
            a: "Yes, we specialize in migrating legacy applications to Vue.js, improving performance, maintainability, and user experience while preserving your data.",
          },
          {
            q: "Is Vue.js good for SEO?",
            a: "Yes, when implemented with Nuxt.js or other SSR techniques, Vue.js applications are highly SEO-friendly and perform well in search rankings.",
          },
        ]}
      />
    </>
  );
};

export default page;
