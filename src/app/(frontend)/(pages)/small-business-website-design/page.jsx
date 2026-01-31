import React from "react";
import CommonBanner2 from "../../component/pages/common/CommonBanner2";
import imagebanner from "@/app/(frontend)/assets/images/cybersecurity-website-design/banner.webp";
import CommonIntroduction from "../../component/pages/common/CommonIntroduction";
import imageintro1 from "@/app/(frontend)/assets/images/cybersecurity-website-design/intro-1.webp";
import imageintro2 from "@/app/(frontend)/assets/images/cybersecurity-website-design/intro-2.webp";
import CommonWhyMetter from "../../component/pages/common/CommonWhyMetter";
import imagewhymetter from "@/app/(frontend)/assets/images/cybersecurity-website-design/why.webp";
import CommonIndustries from "../../component/pages/common/CommonIndustries";
import imageService1 from "@/app/(frontend)/assets/images/cybersecurity-website-design/service-1.webp";
import imageService2 from "@/app/(frontend)/assets/images/cybersecurity-website-design/service-2.webp";
import imageService3 from "@/app/(frontend)/assets/images/cybersecurity-website-design/service-3.webp";
import imageService4 from "@/app/(frontend)/assets/images/cybersecurity-website-design/service-4.webp";
import imageService5 from "@/app/(frontend)/assets/images/cybersecurity-website-design/service-5.webp";
import imageService6 from "@/app/(frontend)/assets/images/cybersecurity-website-design/service-6.webp";
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
        alt={"Small Business Website Design Agency in Dubai, UAE"}
        heding={"Small Business Website Design Agency in Dubai, UAE"}
        subtitle={
          "We build professional, growth-focused websites for small businesses and startups that emphasize <br>local visibility, customer trust, and digital agility in Dubai and the UAE."
        }
      />

      <CommonIntroduction
        heding={"Small Business Website Design & Development"}
        text1={` <p>In today's digital-first economy, a small business's website is its most valuable asset for growth. For local businesses in Dubai, a professional digital presence is essential for competing with larger brands and building a loyal customer base. Your website is the heart of your brand–where you tell your story and connect with your community across the UAE.</p>
                 <p>Potential customers look for local businesses that demonstrate professional quality, ease of contact, and a unique personality. A well-engineered website helps you bridge the gap between being a local favorite and becoming a regional success, positioning your business as a trusted and accessible choice in the digital landscape.</p>
                    `}
        text2={`  <p>Modern small business websites must be nimble and effective, incorporating features like easy contact forms, local service highlights, and seamless social media integration. We focus on creating digital environments that project an image of professional skill and community reliability.</p>
                <p><a href='/'>Website Development Agency</a> specializes in engineering high-impact websites for small businesses and growing startups. We design responsive, performance-optimized platforms that highlight your unique strengths and bolster customer confidence in a competitive market.</p>
                    `}
        imageintro1={imageintro1}
        alt1={
          "Specialized Small Business Website Design in Dubai - Website Development Agency"
        }
        imageintro2={imageintro2}
        alt2={
          "Small Business Web Development Company UAE - Website Development Agency"
        }
      />

      <DemoTemplate
        title="Small Business & Startup Website Designs- Explore Templates"
        description="Professional and growth-focused small business website designs in Dubai, starting at AED 1,500. Launch your <br>brand quickly with high-performance, expert designs. Get fast delivery today."
        activetaburl={"service"}
      />

      <CommonIndustries
        heding={"Small Business Website Design in Dubai, UAE- Our Services"}
        subheding="We provide comprehensive digital solutions designed to help small businesses build trust and grow in the UAE."
        services={[
          {
            title: "Local Growth & Professional Design",
            desc: "We create professional, high-trust website designs that emphasize your business's unique personality. From structured service menus to clear contact pathways, every element is designed to convert local visitors into loyal customers in Dubai.",
            img: imageService1,
            alt: "Custom Small Business Website Design Dubai",
            btnname: "Contact Us",
            link: "/contact-us",
          },
          {
            title: "Quick-Start Brand Launch Hubs",
            desc: "Develop dedicated sections for about us, services, and local success stories. We build hubs that tell your brand's unique story, demonstrating your commitment to quality and providing a professional face for your growing business.",
            img: imageService2,
            alt: "Brand Building Hubs for Local Businesses",
            btnname: "Contact Us",
            link: "/contact-us",
          },
          {
            title: "Interactive Lead Capture Systems",
            desc: "Engage visitors with simple booking forms and instant inquiry tools. These tools help simplify the customer journey and demonstrate your business's commitment to fast and helpful service.",
            img: imageService3,
            alt: "Simple Lead Capture Tools",
            btnname: "Contact Us",
            link: "/contact-us",
          },
          {
            title: "Local SEO for Community Growth",
            desc: "Improve your business's visibility for local search terms. We optimize your site for keywords like 'local services Dubai' or 'small business UAE,' ensuring your brand is visible to those searching for quality help in their immediate area.",
            img: imageService4,
            alt: "Local SEO for Small Businesses Dubai",
            btnname: "Contact Us",
            link: "/contact-us",
          },
          {
            title: "Responsive & High-Performance Architecture",
            desc: "Your website must work flawlessly on mobile for local search. We build fast-loading platforms that deliver a seamless experience on all devices, ensuring your business details are accessible whenever a customer is looking.",
            img: imageService5,
            alt: "Mobile Friendly Small Business Website",
            btnname: "Contact Us",
            link: "/contact-us",
          },
          {
            title: "Scalable Infrastructure for Growth",
            desc: "We build for where you are going. Your website is built on a flexible foundation that can grow with your business, allowing you to easily add new services, products, and features as you scale your operations.",
            img: imageService6,
            alt: "Scalable Web Infrastructure for Growth",
            btnname: "Contact Us",
            link: "/contact-us",
          },
        ]}
      />

      <CommonWhyMetter
        imagewhymetter={imagewhymetter}
        alt={
          "Trusted Small Business Website Design for UAE Firms - Website Development Agency"
        }
        heding={"Trusted Small Business Website Design for UAE-based Firms"}
        subheding={
          "We design community-focused websites with a deep understanding of local trust acquisition. From service clarity to brand personality, every element is engineered for maximum local impact."
        }
        lefttext={`  <p><b>Tailored for Local Trust:</b> Each website is customized to support your business's goals—whether that's securing repeat residential customers, promoting specialized local services, or building a high-trust neighborhood brand. Layouts focus on helpfulness.</p>
                        <p><b>Agile & Fast Development:</b> we follow a rigorous development process that respects the pace of your business. From initial setup to final launch, we ensure your digital platform is stable, fast, and easy to use.</p>
                        `}
        righttext={`<p><b>Ongoing Support & Local SEO:</b> A small business website is a critical growth tool. Post-launch, we provide reliable support and continuous SEO updates, ensuring your firm remains at the top of local search results as you grow.</p>
                            `}
      />
      <CommonProtfolio />

      <DevelopmentServices />

      <CommonCostBreakdown
        heading="Small Business Website Design Dubai- Cost Breakdown"
        description="Choose specialized small business website design and development solutions designed to strengthen your digital presence and build local trust in the UAE."
      />
      <IndustryGrid />

      <CommonWhyWebsiteDevelopment
        heding={"Growth-Focused Website Solutions for Local Businesses"}
        subheding={
          "We build business websites that adapt to the specific focus of your studio. Every platform is planned around your service catalog, local story, and customer engagement goals."
        }
        lefttext={`<p><b>Professional Services (Consultants, Coaches):</b> We create clean websites that highlight individual expertise, success stories, and specialized advice, emphasizing personal trust and authority.</p>
                                <p><b>Local Shops & Boutiques:</b> For retail businesses, our designs focus on product charm, local personality, and ease of purchase, positioning you as a heart-of-the-community favorite.</p>
                                <p><b>Service Companies (Repairs, Beauty):</b> Websites for local service firms focus on availability, transparent pricing, and customer reviews, showcasing your reliability for home and personal care.</p>
                                <p><b>Startup Innovative Venturess:</b> We design platforms for new ventures that focus on unique value propositions, founder stories, and early-stage engagement, utilizing detailed landings and community hubs.</p>
                            `}
        rightimage={imagewhydevelopment}
        alt={
          "Why Choose Website Development Agency for Small Business Website Development"
        }
      />

      <Team />

      <CommonClientTestimonials
        testimonials={[
          {
            id: 1,
            name: "Jeremy Smith",
            text: "Website Development Agency built a digital presence that has transformed our local reach. Our new site is the heart of our community engagement and has helped us double our client base.",
            image: imagetestimonial1,
          },
          {
            id: 2,
            name: "Laila Al-Sharif",
            text: "A highly professional team with a deep understanding of small business needs. They delivered a helpful website that has become a key driver for our boutique's growth in Dubai.",
            image: imagetestimonial2,
          },
          {
            id: 3,
            name: "Robert Miller",
            text: "Excellent service from start to finish. Our search rankings for 'local services' in Dubai have improved dramatically, and the site's mobile performance is exceptional.",
            image: imagetestimonial3,
          },
        ]}
      />

      <LocationService activeLocation="dubai" />

      <CommonFaqSection
        faqs={[
          {
            q: "How long does it take to build a professional small business website?",
            a: "A high-conversion small business website typically takes 3 to 5 weeks, depending on the complexity of service pages and the number of local integrations required.",
          },
          {
            q: "Can you optimize my site for 'local services' in my area?",
            a: "Yes, we specialize in local SEO and can target terms specific to your neighborhood or region to ensure your business is found by customers near you.",
          },
          {
            q: "Will the website work on mobile for my customers?",
            a: "Absolutely. We ensure your site is fully responsive, as the majority of local searches for small businesses now happen directly from smartphones.",
          },
          {
            q: "Can customers book an appointment directly from my site?",
            a: "Yes, we build simple, secure booking forms that allow customers to schedule consultations or service visits directly from your website.",
          },
          {
            q: "Can we integrate our social media with the website?",
            a: "Absolutely. We can seamlessly integrate your Instagram, Facebook, and LinkedIn feeds to help you build community trust and social proof on your main site.",
          },
          {
            q: "Do you offer Google Maps optimization for local businesses?",
            a: "Yes, in addition to web design, we can help you optimize your Google Business Profile to ensure your business appears prominently in local map searches.",
          },
        ]}
      />
    </>
  );
};

export default page;
