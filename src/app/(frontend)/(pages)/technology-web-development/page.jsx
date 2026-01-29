import React from "react";
import CommonBanner2 from "../../component/pages/common/CommonBanner2";
import imagebanner from "@/app/(frontend)/assets/images/startup-website-dev/startup-web-banner.webp";
import CommonIntroduction from "../../component/pages/common/CommonIntroduction";
import imageintro1 from "@/app/(frontend)/assets/images/startup-website-dev/intro-image-1.webp";
import imageintro2 from "@/app/(frontend)/assets/images/startup-website-dev/intro-image-2.webp";
import CommonWhyMetter from "../../component/pages/common/CommonWhyMetter";
import imagewhymetter from "@/app/(frontend)/assets/images/startup-website-dev/startup-needs-website.webp";
import CommonIndustries from "../../component/pages/common/CommonIndustries";
import imageService1 from "@/app/(frontend)/assets/images/startup-website-dev/startup-web-design.webp";
import imageService2 from "@/app/(frontend)/assets/images/startup-website-dev/landing-page-creation.webp";
import imageService3 from "@/app/(frontend)/assets/images/startup-website-dev/prototyping-mvp.webp";
import imageService4 from "@/app/(frontend)/assets/images/startup-website-dev/saas-integration.webp";
import imageService5 from "@/app/(frontend)/assets/images/startup-website-dev/crom-inte.webp";
import imageService6 from "@/app/(frontend)/assets/images/startup-website-dev/responsive-web-desi.webp";
import imageService7 from "@/app/(frontend)/assets/images/startup-website-dev/analytics-tracking.webp";
import imageService8 from "@/app/(frontend)/assets/images/startup-website-dev/support-maintenance-ser.webp";
import CommonThreeCard from "../../component/pages/common/CommonThreeCard";
import imagecommon1 from "@/app/(frontend)/assets/images/e-commerce-web-development/responsive.png";
import imagecommon2 from "@/app/(frontend)/assets/images/e-commerce-web-development/Secure-Transactions.png";
import imagecommon3 from "@/app/(frontend)/assets/images/e-commerce-web-development/Multi-Language.png";
import imagecommon4 from "@/app/(frontend)/assets/images/e-commerce-web-development/Fast-Loading-Speed.png";
import imagecommon5 from "@/app/(frontend)/assets/images/e-commerce-web-development/Advanced-Search.png";
import imagecommon7 from "@/app/(frontend)/assets/images/e-commerce-web-development/Analytics-Reporting-Dashboards.png";
import CommonDevelopmentProcess from "../../component/pages/common/CommonDevelopmentProcess";
import CommonWhyWebsiteDevelopment from "../../assets/style/common/CommonWhyWebsiteDevelopment";
import imagewhydevelopment from "@/app/(frontend)/assets/images/startup-website-dev/why-choose-wd-agency-2025.webp";
import CommonClientTestimonials from "../../component/pages/common/CommonClientTestimonials";
import imagetestimonial1 from "@/app/(frontend)/assets/images/testimonial/testimonial-1.webp";
import imagetestimonial2 from "@/app/(frontend)/assets/images/testimonial/testimonial-2.webp";
import imagetestimonial3 from "@/app/(frontend)/assets/images/testimonial/testimonial-3.webp";
import CommonFaqSection from "../../component/pages/common/CommonFaqSection";
import DevelopmentServices from "../../component/pages/home/DevelopmentServices";
import Team from "../../component/pages/about/Team";
import Portfolioimage1 from "@/app/(frontend)/assets/images/protfolio/tech-startup-1.webp";
import Portfolioimage2 from "@/app/(frontend)/assets/images/protfolio/tech-startup-2.webp";
import Portfolioimage3 from "@/app/(frontend)/assets/images/protfolio/tech-startup-3.webp";
import Portfolioimage4 from "@/app/(frontend)/assets/images/protfolio/tech-startup-4.webp";
import Portfolioimage5 from "@/app/(frontend)/assets/images/protfolio/tech-startup-5.webp";
import Portfolioimage6 from "@/app/(frontend)/assets/images/protfolio/tech-startup-6.webp";
import RealEstatePortfolio from "../../component/pages/common/RealEstatePortfolio";
import LocationService from "../../component/pages/common/LocationService";
import SubNav from "../../component/pages/common/SubNav";
import CommonCostBreakdown from "../../component/pages/common/CommonCostBreakdown";
import IndustryGrid from "../../component/pages/common/IndustryGrid";
import CommonProtfolio from "../../component/pages/common/CommonProtfolio";

const page = () => {
  return (
    <>
      <CommonBanner2
        bg={imagebanner}
        alt="Technology & IT Website Design Agency in UAE"
        heding={
          "Technology & IT Website Design Agency"
        }
        subtitle={
          "We design high-performance websites for tech and IT companies, enhancing <br>user experience, boosting conversions, and maximising online visibility."
        }
      />
      
      <CommonIntroduction
        heding={"Technology & IT Website Development in Dubai, UAE"}
        text1={` <p>The UAE has emerged as a hub for innovation and digital transformation, with technology and IT companies driving growth across industries. In this competitive landscape, a strong online presence is no longer optional- it’s essential for building credibility, attracting clients, and showcasing your expertise.</p>
                    <p>A company’s website is often the first point of contact for clients, partners, and investors. It serves as a platform to communicate your technological capabilities, highlight innovative solutions, and establish trust. A well-crafted website not only reflects your brand identity but also positions your IT business as a leader in the UAE’s fast-paced digital ecosystem. We design web solutions built for tech businesses to drive growth and engagement in Dubai and the UAE.</p>
                    `}
        text2={`  <p>Pre-built templates rarely meet the unique needs of technology companies. They often lack the flexibility, scalability, and performance required to support complex solutions, SaaS platforms, or enterprise software. What your business needs is a custom website designed to align with your products, services, and audience expectations.</p>
                <p>At <a href='/'>Website Development Agency</a>, we specialise in creating bespoke websites for IT and technology companies in the UAE. From dynamic corporate sites and SaaS platforms to enterprise solutions, we build engaging, high-performance websites that enhance user experience, showcase innovation, and support business growth. Our expert team ensures your digital presence reflects the cutting-edge solutions you provide.</p>
                    `}
        imageintro1={imageintro1}
        alt1="Technology Startup Website Development Services - Website Development Agency"
        imageintro2={imageintro2}
        alt2="Custom Technology Startup Website Development - Website Development Agency"
      />

      <CommonIndustries
        heding={"Our Technology & IT Website Services"}
        subheding="Website Development Agency appreciates the ordeal that the startups are going through, from the limited time span to the rapid changes in direction. Our tailored website development services form the backbone of your growth journey at every stage."
        services={[
          {
            title: "Custom Website Design",
            desc: "Our aim is to bring about the clean, modern, and UX-driven layout designs that indicate your brand identity, where your website will not only look fresh but also trustworthy.",
            img: imageService1,
            alt: "Custom Startup Website Design Services for Startups- Website Development Agency",
            btnname: "Contact Us",
            link: "/contact-us",
          },
          {
            title: "Landing Pages & Product Showcases",
            desc: "Powerful landing pages can create the right engagement for visitors, by which you can rush your features, pricing, and the availability of the product.",
            img: imageService2,
            alt: "Landing Page Creation Services for Startups - Website Development Agency",
            btnname: "Contact Us",
            link: "/contact-us",
          },
          {
            title: "Interactive Prototypes & MVP Sites",
            desc: "Be free to put the first versions to the test by involving the users and getting their feedback, thus making a solid ground for your business idea within a short period of time.",
            img: imageService3,
            alt: "MVP Website Development Services for Startups - Website Development Agency",
            btnname: "Contact Us",
            link: "/contact-us",
          },
          {
            title: "App & SaaS Integrations",
            desc: "Our services include connecting many necessary attributes like APIs, payment gateways, and other integrations that contribute to the smooth running of your SaaS or tech ecosystem with your website.",
            img: imageService4,
            alt: "SaaS Integration Services for Startup Websites - Website Development Agency",
            btnname: "Contact Us",
            link: "/contact-us",
          },
          {
            title: "Lead Capture & CRM Integration",
            desc: "Create a strong base of early adopters, investors, and partners through user-friendly lead forms and automatically connected CRMs.",
            img: imageService5,
            alt: "Lead Capture & CRM Integration Services for Startups - Website Development Agency",
            btnname: "Contact Us",
            link: "/contact-us",
          },
          {
            title: "Responsive Web Design",
            desc: "Give users the same outstanding experience on all devices, thereby increasing the time they spend on their mobile, tablet, or desktop.",
            img: imageService6,
            alt: "Responsive Web Design Services for Startups - Website Development Agency",
            btnname: "Contact Us",
            link: "/contact-us",
          },
          {
            title: "Analytics & Growth Tracking",
            desc: "Utilize the integrated analytics tools to track user behavior, conversion funnels, and engagement which in turn will be your scaling strategy.",
            img: imageService7,
            alt: "Analytics & Growth Tracking Services for Startup Websites - Website Development Agency",
            btnname: "Contact Us",
            link: "/contact-us",
          },
          {
            title: "Maintenance & Support",
            desc: "We are always ensuring that your startup’s online face keeps up with your product’s face in the market - by giving continuous maintenance, performance optimization, and feature updates.",
            img: imageService8,
            alt: "Startup Website Maintenance & Support Services - Website Development Agency",
            btnname: "Contact Us",
            link: "/contact-us",
          },
        ]}
      />

      <CommonWhyMetter
        imagewhymetter={imagewhymetter}
        alt="Expert Web Solutions for Technology Companies"
        heding={"Expert Web Solutions for Technology Companies"}
        subheding={
          "Technology & IT businesses in Dubai, UAE require websites that combine performance, innovation, and scalability. We build digital platforms that reflect your expertise, engage users, and position your company as a leader in the UAE’s fast-evolving tech landscape."
        }
        lefttext={`  <p><b>Advanced and Secure Platforms:</b> We utilise cutting-edge technologies and best coding practices to deliver websites that are fast, reliable, and future-ready. Every site is built with scalability and security in mind, ensuring long-term performance for complex tech solutions and SaaS platforms.</p>
                        <p><b>Industry-Focused Design:</b> Our team understands the unique needs of technology companies. We create platforms that effectively showcase your products, services, and innovations while connecting with the right audience to drive engagement and business growth.</p>
                        `}
        righttext={`<p><b>Brand-Centric User Experiences:</b> We craft websites that capture your brand identity and communicate your value proposition clearly. From intuitive navigation to visually engaging layouts, every element is designed to enhance user interaction and strengthen your digital presence.</p>
                            `}
      />
      
      <CommonProtfolio />



      <DevelopmentServices />

                  <CommonCostBreakdown
        heading="Technology Website Design Cost Breakdown"
        description="Select the best technology business design and Development package based on the features, performance, and growth level you need."
      />
      
      <IndustryGrid />

      
      <CommonWhyWebsiteDevelopment
        heding={
          "Custom Web Solutions for Technology and IT Businesses"
        }
        subheding={
          "Technology and IT companies require websites that reflect innovation, expertise, and reliability. We deliver customised web solutions designed to meet the unique needs of different tech sectors, ensuring your digital presence aligns with business goals and drives growth."
        }
        lefttext={`<p><b>IT Services and Consultancies:</b> We build responsive, scalable websites for IT service providers and tech consultancies. Our designs showcase your expertise, highlight service offerings, and make it easy for potential clients to connect with your team.</p>
                                <p><b>Software and SaaS Companies:</b> For software developers and SaaS platforms, we create feature-rich websites that communicate product value, support onboarding, and enable smooth integration with digital tools. Our solutions are built to scale as your business grows.</p>
                                <p><b>Hardware and Product Businesses:</b> We develop websites for businesses offering hardware and tech products, combining e-commerce functionality with informative content. Our platforms highlight your products, improve customer engagement, and simplify the purchase journey.</p>
                                <p><b>Startups, SMBs, and Enterprises:</b> Whether you’re a tech startup, a growing SMB, or a large enterprise, we deliver flexible, high-performance web solutions. Our websites are designed to enhance engagement, support innovation, and provide a seamless experience across all devices and platforms.</p>
                            `}
        rightimage={imagewhydevelopment}
        alt="Why Choose Website Development Agency for Startup Website Development - Website Development Agency"
      />

      <Team />
      <CommonClientTestimonials
        testimonials={[
          {
            id: 1,
            name: "Daniel R",
            text: "Website Development Agency transformed our online presence. Within 3 months, our sales doubled thanks to their Shopify development expertise.",
            image: imagetestimonial1,
          },
          {
            id: 2,
            name: "Sophia K",
            text: "Professional, efficient, and creative—the best ecommerce development agency in UAE we’ve worked with.",
            image: imagetestimonial2,
          },
          {
            id: 3,
            name: "James P",
            text: "From design to launch, everything was seamless. Their team handled even complex Magento integrations with ease.",
            image: imagetestimonial3,
          },
        ]}
      />
      <LocationService activeLocation="dubai" />

      <CommonFaqSection
        faqs={[
          {
            q: "How Much Does a Technology Website Development Cost?",
            a: "Depending on the features, integrations, and complexity, we offer scalable solutions from simple corporate sites to advanced SaaS platforms (AED 3,000 to AED 12,000+). Our transparent pricing ensures IT companies get a solution that fits both their goals and budget.",
          },
          {
            q: "Can You Integrate SaaS Tools and Apps?",
            a: "Yes, our experts have deep expertise in integrating different tools & APIs such as HubSpot, Stripe, Zapier, Slack, and Analytics software to make the business processes simpler. These integrations make it simple to do business, keep accurate records automatically, and you can manage everything from getting new customers to providing support with no hassle.",
          },
          {
            q: "Do You Provide MVP Landing Pages?",
            a: "For the purpose to validate ideas, gather leads, and measure market traction, we compose quick-launch MVP demonstration sites. Every startup page is optimized for conversions, designed to offer them an inexpensive way to attract the attention of investors and get the real user feedback before the scaling process takes place.",
          },
          {
            q: "How Long Does It Take to Build a Business Website?",
            a: "The duration of developing most websites generally takes from 3 to 6 weeks, according to their complexity, features, and approval timelines. In case of emergencies, we are able to speed up the delivery without sacrificing features such as design quality, functionality, and performance standards.",
          },
          {
            q: "Do You Provide Ongoing Maintenance and Feature Upgrades?",
            a: "To keep your site secure, fast, and up-to-date, we have monthly support and optimization plans. Our team provides continuous performance monitoring, is able to give quick solutions to problems, and is always upgrading versions to keep up with your growth.",
          },
          {
            q: "Do You Support Multi-language Websites for Global Audiences?",
            a: "Yes, we create multilingual websites that enable your startup to connect with audiences across different regions and cultures. Our solutions ensure seamless user experience, proper localization, and broader global reach.",
          },
        ]}
      />
    </>
  );
};

export default page;
