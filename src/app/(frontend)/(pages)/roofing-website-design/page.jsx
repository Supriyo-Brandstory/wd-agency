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
        alt={"Roofing Website Design Agency in Dubai, UAE"}
        heding={"Roofing Website Design Agency in Dubai, UAE"}
        subtitle={
          "We build reliable, high-performing websites for roofing and exterior maintenance companies that <br>emphasize durability, technical expertise, and client trust in Dubai and the UAE."
        }
      />

      <CommonIntroduction
        heding={"Roofing Website Design & Development"}
        text1={` <p>In the construction and maintenance sector, a roofing contractor's website is the ultimate test of its reliability. If you are in the business of protecting structures from the elements, your own digital presence must be strong, authoritative, and perfectly reliable. A professional website is essential for communicating your technical expertise to homeowners and commercial property managers across the UAE.</p>
                 <p>Potential clients look for partners who demonstrate a deep understanding of materials, safety, and long-term durability. A well-engineered website helps you bridge the gap between complex roofing services and the peace of mind your clients are searching for, positioning your firm as a trusted guardian of their assets.</p>
                    `}
        text2={`  <p>Modern roofing websites must balance technical depth with professional clarity, incorporating features like project case studies, material selector tools, and interactive inspection booking. We focus on creating digital environments that project an image of technical sophistication and uncompromising quality standards.</p>
                <p><a href='/'>Website Development Agency</a> specializes in engineering high-impact websites for the roofing and exterior infrastructure sector. We design responsive, performance-optimized platforms that highlight your firm’s expertise and bolster institutional trust in a competitive market.</p>
                    `}
        imageintro1={imageintro1}
        alt1={
          "Specialized Roofing Website Design in Dubai - Website Development Agency"
        }
        imageintro2={imageintro2}
        alt2={
          "Roofing Web Development Company UAE - Website Development Agency"
        }
      />

      <DemoTemplate
        title="Roofing & Maintenance Website Designs- Explore Templates"
        description="Reliable and professional roofing website designs in Dubai, starting at AED 1,500. Launch your <br>maintenance brand quickly with professional, high-performance designs. Get fast delivery today."
        activetaburl={"construction"}
      />

      <CommonIndustries
        heding={"Roofing Website Design in Dubai, UAE- Our Services"}
        subheding="We provide comprehensive digital solutions designed to help roofing firms build trust and grow in the UAE."
        services={[
          {
            title: "Expertise-Driven Authority Design",
            desc: "We create professional, high-trust website designs that emphasize your firm’s specialized knowledge. From structured service menus to technical capability statements, every element is designed to resonate with property managers and owners in Dubai.",
            img: imageService1,
            alt: "Custom Roofing Website Design Dubai",
            btnname: "Contact Us",
            link: "/contact-us",
          },
          {
            title: "Project Case Studies & Results",
            desc: "Develop dedicated sections for before-and-after projects, material highlights, and safety records. We build galleries that show the real-world impact of your work, demonstrating your commitment to quality and providing value to your audience.",
            img: imageService2,
            alt: "Roofing Project Case Studies",
            btnname: "Contact Us",
            link: "/contact-us",
          },
          {
            title: "Interactive Inspection Booking",
            desc: "Engage visitors with easy-to-use inspection booking forms and instant quote tools. These tools help simplify the service process and demonstrate your commitment to professional and fast responsiveness.",
            img: imageService3,
            alt: "Interactive Roofing Service Booking",
            btnname: "Contact Us",
            link: "/contact-us",
          },
          {
            title: "Local SEO for Roofing Services",
            desc: "Improve your firm's visibility for specialized roofing keywords. We optimize your site for search terms like 'roofing contractors Dubai' or 'roof repair UAE,' ensuring your expertise is visible to those searching for structural protection.",
            img: imageService4,
            alt: "SEO for Roofing Firms Dubai",
            btnname: "Contact Us",
            link: "/contact-us",
          },
          {
            title: "Responsive & High-Performance Architecture",
            desc: "Your website must reflect the performance of your roofing solutions. We build fast-loading, responsive platforms that deliver a flawless experience on all devices, ensuring your expert content is accessible whenever it's needed.",
            img: imageService5,
            alt: "Mobile Friendly Roofing Website",
            btnname: "Contact Us",
            link: "/contact-us",
          },
          {
            title: "Secure Project Management Portals",
            desc: "We practice what we preach. Your website can include secure portals where clients can access project timelines, inspection reports, and maintenance documentation, ensuring your own digital presence is as professional as your work.",
            img: imageService6,
            alt: "Secure Roofing Project Management",
            btnname: "Contact Us",
            link: "/contact-us",
          },
        ]}
      />

      <CommonWhyMetter
        imagewhymetter={imagewhymetter}
        alt={
          "Trusted Roofing Website Design for UAE Firms - Website Development Agency"
        }
        heding={"Trusted Roofing Website Design for UAE-based Firms"}
        subheding={
          "We design roofing websites with a deep understanding of service trust acquisition. From service clarity to structural prestige, every element is engineered for maximum professional impact."
        }
        lefttext={`  <p><b>Tailored for Protective Trust:</b> Each website is customized to support your firm's goals—whether that's securing large-scale commercial contracts, promoting specialized repair services, or building local brand authority. Layouts focus on clarity and durability.</p>
                        <p><b>Stable & Robust Development:</b> we follow a rigorous development process that respects the high standards of your industry. From initial information architecture to final performance testing, we ensure your digital platform is stable and fast.</p>
                        `}
        righttext={`<p><b>Ongoing Support & Technical SEO:</b> A professional website is a long-term asset. Post-launch, we provide reliable support and continuous SEO updates, ensuring your roofing firm remains visible and effective as the market evolves.</p>
                            `}
      />
      <CommonProtfolio />

      <DevelopmentServices />

      <CommonCostBreakdown
        heading="Roofing Website Design Dubai- Cost Breakdown"
        description="Choose specialized roofing website design and development solutions designed to strengthen your digital presence and build professional trust in the UAE."
      />
      <IndustryGrid />

      <CommonWhyWebsiteDevelopment
        heding={"Structural Website Solutions for Specialized Firms"}
        subheding={
          "We build construction websites that adapt to the specific focus of your roofing firm. Every platform is planned around your material catalog, technical expertise, and client engagement goals."
        }
        lefttext={`<p><b>Commercial Roofing:</b> We create comprehensive websites that highlight factory membranes, warehouse protection, and industrial scale, emphasizing long-term reliability and professional standards.</p>
                                <p><b>Residential Roof Repair:</b> For home specialists, our designs focus on aesthetics, leak prevention, and community trust, positioning you as a reliable partner for homeowners in Dubai. </p>
                                <p><b>Waterproofing & Specialty Coatings:</b> Websites for protective coating firms focus on technical methodology, material resilience, and case histories, showcasing your ability to mitigate moisture risks. </p>
                                <p><b>Solar-Ready Roofing:</b> We design platforms for modern installers that focus on sustainability and structural efficiency, utilizing detailed product pages and technical whitepapers.</p>
                            `}
        rightimage={imagewhydevelopment}
        alt={
          "Why Choose Website Development Agency for Roofing Website Development"
        }
      />

      <Team />

      <CommonClientTestimonials
        testimonials={[
          {
            id: 1,
            name: "Mark Henderson",
            text: "Website Development Agency built a digital presence that perfectly reflects our high quality standards. Our new site has significantly improved our credibility during major commercial tenders.",
            image: imagetestimonial1,
          },
          {
            id: 2,
            name: "Laila Al-Hashimi",
            text: "A highly professional team with a deep understanding of the construction sector. They delivered a robust, authoritative website that has become a key driver for our home repair leads.",
            image: imagetestimonial2,
          },
          {
            id: 3,
            name: "Robert Grant",
            text: "Excellent service from start to finish. Our search rankings for specialized roofing terms have improved dramatically, and the technical performance of the site is exceptional.",
            image: imagetestimonial3,
          },
        ]}
      />

      <LocationService activeLocation="dubai" />

      <CommonFaqSection
        faqs={[
          {
            q: "How long does it take to build a professional roofing website?",
            a: "A high-authority roofing website typically takes 6 to 8 weeks, depending on the depth of project case studies and the number of material guides required.",
          },
          {
            q: "Can you provide specialized SEO for 'roof repair' or 'commercial roofing' terms?",
            a: "Yes, we offer specialized SEO strategies that target competitive technical keywords to ensure your services are visible to property managers and homeowners in the UAE.",
          },
          {
            q: "How do you showcase before-and-after roofing projects?",
            a: "We implement high-resolution, interactive galleries that allow users to easily compare work stages, demonstrating the quality and impact of your roofing solutions.",
          },
          {
            q: "Can we have a calculator for roof repair estimates?",
            a: "Absolutely. We build custom estimate tools and booking forms that allow potential clients to get a preliminary idea of costs and schedule a professional inspection.",
          },
          {
            q: "Will the website be optimized for mobile site visits?",
            a: "Yes, we ensure all pages are fully responsive, as many property owners and managers will access your site directly from the site during an inspection.",
          },
          {
            q: "Can you integrate our project management software? ",
            a: "Yes, we can securely integrate lead capture and project inquiry forms with your existing software for seamless management of your roofing contracts.",
          },
        ]}
      />
    </>
  );
};

export default page;
