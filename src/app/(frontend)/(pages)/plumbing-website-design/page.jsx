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
        alt={"Plumbing & Maintenance Website Design Agency in Dubai, UAE"}
        heding={"Plumbing & Maintenance Website Design Agency in Dubai, UAE"}
        subtitle={
          "We build reliable, service-focused websites for plumbing and facility maintenance companies that <br>emphasize quick response, technical skill, and customer satisfaction in Dubai and the UAE."
        }
      />

      <CommonIntroduction
        heding={"Plumbing Website Design & Development"}
        text1={` <p>In the maintenance industry, speed and trust are the primary factors for client conversion. For plumbing companies in Dubai, a professional digital presence is essential for building immediate credibility with homeowners and business managers during a service emergency. Your website must communicate reliability, expertise, and a commitment to quality work.</p>
                 <p>Potential clients look for partners who demonstrate transparent pricing, skilled technicians, and quick availability. A well-engineered website helps you bridge the gap between a service need and a booked call, positioning your firm as the go-to provider for maintenance solutions in your local area.</p>
                    `}
        text2={`  <p>Modern plumbing websites must prioritize ease of contact, incorporating features like instant booking forms, service price guides, and real-time emergency contact buttons. We focus on creating digital environments that project an image of professional skill and stress-free service standards.</p>
                <p><a href='/'>Website Development Agency</a> specializes in engineering high-impact websites for the plumbing and maintenance sector. We design responsive, performance-optimized platforms that highlight your firm’s reliability and bolster lead generation in a competitive local market.</p>
                    `}
        imageintro1={imageintro1}
        alt1={
          "Specialized Plumbing Website Design in Dubai - Website Development Agency"
        }
        imageintro2={imageintro2}
        alt2={
          "Plumbing Web Development Company UAE - Website Development Agency"
        }
      />

      <DemoTemplate
        title="Plumbing & Maintenance Website Designs- Explore Templates"
        description="Reliable and service-focused plumbing website designs in Dubai, starting at AED 1,500. Launch your <br>maintenance brand quickly with professional, high-performance designs. Get fast delivery today."
        activetaburl={"service"}
      />

      <CommonInduestriesServices
        heding={"Plumbing Website Design in Dubai, UAE- Our Services"}
        subheding="We provide comprehensive digital solutions designed to help plumbing firms build trust and grow in the UAE."
      />

      <CommonWhyMetter
        imagewhymetter={imagewhymetter}
        alt={
          "Trusted Plumbing Website Design for UAE Firms - Website Development Agency"
        }
        heding={"Trusted Plumbing Website Design for UAE-based Firms"}
        subheding={
          "We design maintenance websites with a deep understanding of service trust acquisition. From service clarity to response speed, every element is engineered for maximum local impact."
        }
        lefttext={`  <p><b>Tailored for Local Reliability:</b> Each website is customized to support your firm's goals—whether that's securing large-scale commercial maintenance contracts, promoting 24/7 residential services, or building a high-trust local brand. Layouts focus on accessibility.</p>
                        <p><b>Responsive & Fast Development:</b> we follow a rigorous development process that respects the need for speed in your industry. We ensure your digital platform is stable, fast, and easy to use on all devices, especially mobile.</p>
                        `}
        righttext={`<p><b>Ongoing Support & Local SEO:</b> A service website is a dynamic business tool. Post-launch, we provide reliable support and continuous SEO updates, ensuring your firm remains at the top of local search results as maintenance needs arise.</p>
                            `}
      />
      <CommonProtfolio />

      <DevelopmentServices />

      <CommonCostBreakdown
        heading="Plumbing Website Design Dubai- Cost Breakdown"
        description="Choose specialized maintenance website design and development solutions designed to strengthen your digital presence and build service trust in the UAE."
      />
      <IndustryGrid />

      <CommonWhyWebsiteDevelopment
        heding={"Maintenance Website Solutions for Specialized Firms"}
        subheding={
          "We build service websites that adapt to the specific focus of your maintenance firm. Every platform is planned around your service catalog, local footprint, and client engagement goals."
        }
        lefttext={`<p><b>Residential Plumbing Services:</b> We create comprehensive websites that highlight leak detection, bathroom renovations, and 24/7 repairs, emphasizing speed and home care.</p>
                                <p><b>Commercial Facility Maintenance:</b> For business services, our designs focus on preventative maintenance, AMC packages, and specialized pipework, positioning you as a professional facility partner.</p>
                                <p><b>Drainage & Sewer Specialists:</b> Websites for drainage experts focus on technical equipment (CCTV surveys, jetting), specialized skill stories, and large-scale industrial solutions.</p>
                                <p><b>Water Heater & Filtration:</b> We design platforms for specialized equipment installers that focus on product quality and technical installation expertise, utilizing detailed service pages and product stories.</p>
                            `}
        rightimage={imagewhydevelopment}
        alt={
          "Why Choose Website Development Agency for Plumbing Website Development"
        }
      />

      <Team />

      <CommonClientTestimonials
        testimonials={[
          {
            id: 1,
            name: "David Smith",
            text: "Website Development Agency built a digital presence that has tripled our residential leads. Our new mobile-optimized site is the reason we're winning so many emergency calls now.",
            image: imagetestimonial1,
          },
          {
            id: 2,
            name: "Mariam Al-Khalili",
            text: "A highly professional team with a deep understanding of the local service market. They delivered a helpful website that has become a key driver for our commercial maintenance contracts.",
            image: imagetestimonial2,
          },
          {
            id: 3,
            name: "Steve Rogers",
            text: "Excellent service from start to finish. Our search rankings for 'plumber in Dubai' have improved dramatically, and the site's mobile performance is exceptional.",
            image: imagetestimonial3,
          },
        ]}
      />

      <LocationService activeLocation="dubai" />

      <CommonFaqSection
        faqs={[
          {
            q: "How long does it take to build a professional plumbing website?",
            a: "A high-conversion service website typically takes 4 to 6 weeks, depending on the complexity of the booking systems and the number of service pages required.",
          },
          {
            q: "Can you optimize my site for 'plumber in Dubai'?",
            a: "Yes, we specialize in local SEO and can target competitive terms like 'emergency plumber Dubai' or 'maintenance services UAE' to ensure your firm is found by local clients.",
          },
          {
            q: "Will the website work on mobile for emergency calls?",
            a: "Absolutely. We prioritize mobile-first design, ensuring your phone number and emergency booking forms are front and center for customers using smartphones.",
          },
          {
            q: "Can patients book a service directly online?",
            a: "Yes, we build secure, easy-to-use booking forms that allow customers to schedule service visits or request quotes directly from your website.",
          },
          {
            q: "Can we showcase our annual maintenance packages?",
            a: "Absolutely. We build dedicated sections for AMCs where you can highlight the benefits of recurring service and even take digital payments for contracts.",
          },
          {
            q: "Do you offer Google Ads management for plumbers?",
            a: "In addition to web design, we can help with local Google Ads campaigns to ensure your plumbing company gets immediate visibility for emergency search terms.",
          },
        ]}
      />
    </>
  );
};

export default page;
