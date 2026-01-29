import React from "react";
import CommonBanner2 from "../../component/pages/common/CommonBanner2";
import imagebanner from "@/app/(frontend)/assets/images/corporate-website/corporate-website.webp";
import CommonIntroduction from "../../component/pages/common/CommonIntroduction";
import imageintro1 from "@/app/(frontend)/assets/images/corporate-website/corporate-web-2.webp";
import imageintro2 from "@/app/(frontend)/assets/images/corporate-website/corporate-web-1.webp";
import CommonWhyMetter from "../../component/pages/common/CommonWhyMetter";
import imagewhymetter from "@/app/(frontend)/assets/images/corporate-website/wbhy-corporate-need-website.webp";
import CommonIndustries from "../../component/pages/common/CommonIndustries";
import imageService1 from "@/app/(frontend)/assets/images/corporate-website/web-design.webp";
import imageService2 from "@/app/(frontend)/assets/images/corporate-website/content-cms.webp";
import imageService3 from "@/app/(frontend)/assets/images/corporate-website/multi-language-support.webp";
import imageService4 from "@/app/(frontend)/assets/images/corporate-website/csr.webp";
import imageService5 from "@/app/(frontend)/assets/images/corporate-website/crm-integration.webp";
import imageService8 from "@/app/(frontend)/assets/images/corporate-website/support-maintenance.webp";
import CommonThreeCard from "../../component/pages/common/CommonThreeCard";
import imagecommon1 from "@/app/(frontend)/assets/images/e-commerce-web-development/responsive.png";
import imagecommon2 from "@/app/(frontend)/assets/images/e-commerce-web-development/Secure-Transactions.png";
import imagecommon3 from "@/app/(frontend)/assets/images/e-commerce-web-development/Multi-Language.png";
import imagecommon4 from "@/app/(frontend)/assets/images/e-commerce-web-development/Fast-Loading-Speed.png";
import imagecommon5 from "@/app/(frontend)/assets/images/e-commerce-web-development/Advanced-Search.png";
import imagecommon7 from "@/app/(frontend)/assets/images/e-commerce-web-development/AI-Driven.png";
import CommonDevelopmentProcess from "../../component/pages/common/CommonDevelopmentProcess";
import CommonWhyWebsiteDevelopment from "../../assets/style/common/CommonWhyWebsiteDevelopment";
import imagewhydevelopment from "@/app/(frontend)/assets/images/corporate-website/why-choose-wd-agency.webp";
import CommonClientTestimonials from "../../component/pages/common/CommonClientTestimonials";
import imagetestimonial1 from "@/app/(frontend)/assets/images/testimonial/testimonial-1.webp";
import imagetestimonial2 from "@/app/(frontend)/assets/images/testimonial/testimonial-2.webp";
import imagetestimonial3 from "@/app/(frontend)/assets/images/testimonial/testimonial-3.webp";
import CommonFaqSection from "../../component/pages/common/CommonFaqSection";
import DevelopmentServices from "../../component/pages/home/DevelopmentServices";
import Team from "../../component/pages/about/Team";
import Portfolioimage1 from "@/app/(frontend)/assets/images/protfolio/corporate-1.webp";
import Portfolioimage2 from "@/app/(frontend)/assets/images/protfolio/corporate-2.webp";
import Portfolioimage3 from "@/app/(frontend)/assets/images/protfolio/corporate-3.webp";
import Portfolioimage4 from "@/app/(frontend)/assets/images/protfolio/corporate-4.webp";
import Portfolioimage5 from "@/app/(frontend)/assets/images/protfolio/corporate-5.webp";
import Portfolioimage6 from "@/app/(frontend)/assets/images/protfolio/corporate-6.webp";
import RealEstatePortfolio from "../../component/pages/common/RealEstatePortfolio";
import styles from "@/app/(frontend)/assets/style/calculator/CostCalculator.module.css";
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
        alt="Corporate Website Development Services in Dubai Website Development Agency"
        heding={
          "Business Website Design Agency in Dubai, UAE"
        }
        subtitle={
          "We deliver corporate web design solutions that combine professional design, seamless <br>user experience, and SEO optimisation to drive visibility, engagement, and business growth."
        }
      />
      
      <CommonIntroduction
        heding={"Corporate Website Design in Dubai"}
        text1={` <p>Nowadays, a convincing online presence is mandatory rather than a choice, eventually leading to the win of corporate giants. Going by this principle, the corporate world in the UAE has seen the digital CSR evolve directly into the flagship digital asset of the enterprise. This corporate website goes as far as being the company's digital face- one that can depict, after all, with each new visitor, the quality of the product/service and the degree of trust.</p>
                    <p>The initial methods to visit the site and see the company through its website are usual when clients, investors, or business partners are about to judge it. It would be the representation of the company through a sleek, scalable, and professional website that would be the best way to let the enterprise be understood.</p>
                    `}
        text2={`  <p>Though generic website templates may be easy to use, they seldom reflect the unique vision, the professional manner, or the procedural needs of the company's internal. They are inefficient in complex requirements of businesses, which have multiple stakeholders living in different geographical areas or industries. From multilingual customer support to high-tech security, every aspect of corporate websites demands custom-built features, which only dedicated platforms can provide.</p>
                <p><a href="/">Website Development Agency</a>, as a reliable and loyal website design partner, empowers corporate companies to morph their online visibility to hardly-acquirable competitive advantages. We don’t just build websites, we craft digital ecosystems that communicate brand excellence, inspire stakeholder confidence, and open doors to new opportunities.</p>
                    `}
        imageintro1={imageintro1}
        alt1="Corporate Website Design Services - Website Development Agency"
        imageintro2={imageintro2}
        alt2="Professional Corporate Website Development - Website Development Agency"
      />

      <CommonIndustries
        heding={"Our Corporate Website Development Services"}
        subheding="At Website Development Agency, we understand that corporate websites must serve multiple purposes: brand building, stakeholder communication, and business growth. Our services are designed to address every aspect of corporate digital presence."
        services={[
          {
            title: "Custom Website Design",
            desc: "We design modern websites with a focus on brand layouts that visually reflect your companys identity and professionalism. No two websites are the same, each is customized to suit your business while maintaining a professional and corporate look that resonates with your audience.",
            img: imageService1,
            alt: "Custom Corporate Website Design Services - Website Development Agency",
            btnname: "Contact Us",
            link: "/contact-us",
          },
          {
            title: "Content Management Systems (CMS)",
            desc: "Empower your team to manage and update content quickly and easily using CMS platforms such as WordPress, Joomla, and more. Our CMS websites simplify publishing, enabling greater efficiency, collaboration, and agility across your organization.",
            img: imageService2,
            alt: "Corporate Website CMS Development Services - Website Development Agency",
            btnname: "Contact Us",
            link: "/contact-us",
          },
          {
            title: "Multilingual & Multi-regional Websites",
            desc: "UAE businesses cater to global audiences. We design websites with multilingual and multi-regional features to expand reach and inclusivity, ensuring that your content resonates with diverse audiences across different languages and regions. ",
            img: imageService3,
            alt: "Multilingual Corporate Website Development Services - Website Development Agency",
            btnname: "Contact Us",
            link: "/contact-us",
          },
          {
            title: "Investor Relations & CSR",
            desc: "Present and socialize data, reports, and environmental conscious activities through well-organized and developed investors as well as CSR portals, in this way you will win over your customers and gain their loyalty.",
            img: imageService4,
            alt: "Investor Relations & CSR Website Development Services - Website Development Agency",
            btnname: "Contact Us",
            link: "/contact-us",
          },
          {
            title: "Lead Capture & CRM Integration",
            desc: "Just as easily as you could integrate forms, chat rooms, and CRMs in order to trace, handle, and cultivate your business leads adequately, ou can also automate follow-ups, segment your audience, and track interactions in real time. ",
            img: imageService5,
            alt: "Lead Capture & CRM Integration Services - Website Development Agency",
            btnname: "Contact Us",
            link: "/contact-us",
          },

          {
            title: "Maintenance & Support",
            desc: "Through times of change, our supporting team makes sure that your corporate website is always up-to-date, secure, and flexible enough to meet challenging demands.",
            img: imageService8,
            alt: "Corporate Website Maintenance & Support Services - Website Development Agency",
            btnname: "Contact Us",
            link: "/contact-us",
          },
        ]}
      />

      <CommonWhyMetter
        imagewhymetter={imagewhymetter}
        alt="Why Corporate Businesses Need Professional Websites - Website Development Agency"
        heding={"Why Corporate Businesses Need Professional Websites"}
        subheding={
          "Corporate websites in the UAE’s changing and vibrant business market serve as the first interfaces for customers, investors, and other people from the company’s network. A well-maintained online presence is more than just a good idea, it acts as the foundation of trust between the corporation and its customers. This will undoubtedly lead to future visits beyond the first."
        }
        lefttext={`  <p>A corporate website is not just about design; it’s about building trust. First of all, they represent the ones who might want to invest in the company, as well as the global partners. The way a company presents itself through the web is the first criterion on which decision-makers base their judgment.</p>
                        <p>The mobile-first websites are a must for the digitally active audience of the UAE. Common mobile habits, such as the use of small handheld devices to access corporate content, are directly linked to the importance of mobile-friendly design. When people are browsing in the same fashion, they are basically turning their mobile devices into their worldwide access point for business.</p>
                        `}
        righttext={`<p>Corporate websites act as digital business cards, the foundation of brand trust and development. At Website Development Agency, we are the best <strong><a href="https://websitedevelopmentagency.ae/">web development agency</a></strong> in Dubai and the UAE helping business build brand identity with high-end and professional website design services.</p>
                            `}
      />
      
      <CommonProtfolio />
      
      <DevelopmentServices />

      <CommonCostBreakdown
        heading="Corporate Website Cost Breakdown"
        description="Select the right corporate website design and Development package based on the features, performance, and growth level you need."
      />
      <IndustryGrid />

      
      <CommonWhyWebsiteDevelopment
        heding={"Why Choose Website Development Agency for Corporate Websites"}
        subheding={
          "At Website Development Agency, we specialize in creating corporate websites that make a lasting impact. With great knowledge of the United Arab Emirates (UAE) corporate sector, we know very well the details of creating websites that are the face of professionalism, credibility, and innovation."
        }
        lefttext={`<p>Our expertise spans across big businesses, medium-sized companies, and well-known international brands, thus giving us the vision to develop solutions that are not only adaptable but also capable of making it possible to increase the business progressively. </p>
                                <p>The security of an enterprise level website is the first and foremost priority in every website security we build, thereby assuring that your online presence is protected, trustworthy, and in line with industry standards. </p>
                                <p>Besides that, we put our emphasis on the design that adjust well to any device and that can be accessed by any device without any hiccups. This is because we always think about the various visitors to the site and want them all to have the same great experience as they access the site.</p>
                                <p>The concept of transparency is the very essence of our method. We do things with honesty and clarity, giving you regular updates and we are not just your supplier but a member of your long-term digital partner.</p>
                            `}
        rightimage={imagewhydevelopment}
        alt="Why Choose Website Development Agency for Corporate Website Development - Website Development Agency"
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
            q: "How Much Does Corporate Website Development Cost?",
            a: "The cost of corporate website development depends on what features it will have (AED 5000 to AED 30000), how complicated the design is, what kind of integrations the website has, and the number of pages. The Website Development Agency estimates provide you with personalized quotes based on your detailed needs, which not only guarantees the return of your investment but also ensures a high-quality, scalable solution is delivered.",
          },
          {
            q: "Can You Build Multilingual Websites for Global Audiences?",
            a: "Yes, we also create multilingual corporate websites dedicated to your target markets. This comprises language-specific content management, the localization of visuals and messaging, and SEO optimized for each language to benefit from the worldwide reach.",
          },
          {
            q: "Do You Provide CMS for Easy Content Updates?",
            a: "Absolutely, the websites we build are equipped with CMS platforms that are so easy to use that any member of your team can add, edit, and manage content without any technical skills, and in this way, your website will not only stay up to date but it will also be relevant.",
          },
          {
            q: "How Secure Will Our Corporate Website Be?",
            a: "Our corporate websites are built with enterprise-grade security measures to protect your business and sensitive data. This includes SSL certificates, firewalls, regular software updates, and advanced monitoring tools, ensuring your website remains safe, reliable, and maintains the trust and reputation of your company.",
          },
          {
            q: "Can You Integrate CRM or ERP Systems?",
            a: "Definitely, we join corporate websites with your CRM, ERP, or other business software so that the operations are uninterrupted, lead management and workflow are efficient, and there is a smooth interaction between digital platforms and business processes.",
          },
          {
            q: "How Long Does It Take to Build a Corporate Website?",
            a: "Usually, the duration is 6–12 weeks, and it varies depending on the design, functionality, integrations, and content readiness. We stick to a well-planned timeline with milestone reviews, which guarantees that the delivery of the project is done on time and also makes the whole process transparent.",
          },
          {
            q: "Do You Offer Ongoing Support and Maintenance?",
            a: "We are definitely there for you, keeping the website up and running through constant support, updates, and maintenance. Our team also does the troubleshooting, feature enhancements, and performance optimization for you as your business grows.",
          },
        ]}
      />
    </>
  );
};

export default page;
