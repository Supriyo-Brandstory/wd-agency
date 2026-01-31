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
        alt={"Interior Design Website Design Agency in Dubai, UAE"}
        heding={"Interior Design Website Design Agency in Dubai, UAE"}
        subtitle={
          "We build stunning, highly visual websites for interior designers and architects that showcase <br>creativity, portfolio excellence, and luxury brand aesthetics in Dubai and the UAE."
        }
      />

      <CommonIntroduction
        heding={"Interior Design Website Design & Development"}
        text1={` <p>In the world of interior design, your website is your digital showroom. It’s where potential clients first experience your style, attention to detail, and creative vision. A professional website is essential for showcasing your portfolio to high-end residential and commercial clients across the UAE.</p>
                 <p>Potential clients look for designers who demonstrate a unique aesthetic and technical proficiency. A well-engineered website helps you bridge the gap between creative concepts and real-world results, positioning your firm as a leading design authority in the digital landscape.</p>
                    `}
        text2={`  <p>Modern interior design websites must be highly visual, featuring high-resolution galleries, interactive room planners, and seamless project walkthroughs. We focus on creating elegant digital environments that reflect the sophistication of your design work and luxury brand values.</p>
                <p><a href='/'>Website Development Agency</a> specializes in engineering high-impact websites for the interior design and architectural sector. We design responsive, performance-optimized platforms that highlight your firm’s creativity and bolster client trust in a competitive market.</p>
                    `}
        imageintro1={imageintro1}
        alt1={
          "Specialized Interior Design Website Design in Dubai - Website Development Agency"
        }
        imageintro2={imageintro2}
        alt2={
          "Interior Design Web Development Company UAE - Website Development Agency"
        }
      />

      <DemoTemplate
        title="Interior Design Website Designs- Explore Templates"
        description="Elegant and professional interior design website designs in Dubai, starting at AED 1,500. Launch your <br>creative brand quickly with stunning, high-performance designs. Get fast delivery today."
        activetaburl={"interior"}
      />

      <CommonIndustries
        heding={"Interior Design Website Design in Dubai, UAE- Our Services"}
        subheding="We provide comprehensive digital solutions designed to help interior designers showcase their portfolio and grow in the UAE."
        services={[
          {
            title: "Visual Portfolio Showcase",
            desc: "We create stunning, high-impact galleries that showcase your interior design projects in high-resolution detail. From grid layouts to full-screen sliders, every project is presented to maximize visual appeal for luxury clients in Dubai.",
            img: imageService1,
            alt: "Custom Interior Design Portfolio Website Dubai",
            btnname: "Contact Us",
            link: "/contact-us",
          },
          {
            title: "Interactive Project Walkthroughs",
            desc: "Engage visitors with interactive project walkthroughs and interactive before-and-after sliders. These tools help potential clients visualize your design process and the transformative impact of your work.",
            img: imageService2,
            alt: "Interactive Interior Design Features",
            btnname: "Contact Us",
            link: "/contact-us",
          },
          {
            title: "Luxury Brand Positioning",
            desc: "Sophisticated layouts that position your design firm as a premium player. We use curated typography and sleek design elements to reflect your brand's unique aesthetic and attract high-end residential and commercial projects.",
            img: imageService3,
            alt: "Premium Interior Design Brand Design",
            btnname: "Contact Us",
            link: "/contact-us",
          },
          {
            title: "Local SEO for Designers",
            desc: "Improve your firm's visibility for specialized design keywords. We optimize your site for competitive search terms like 'interior designers Dubai' or 'home renovation UAE,' ensuring your expertise is visible to those looking for premium design services.",
            img: imageService4,
            alt: "SEO for Interior Designers Dubai",
            btnname: "Contact Us",
            link: "/contact-us",
          },
          {
            title: "Responsive & Performance-Optimized",
            desc: "Your website must look stunning on any device. We build fast-loading, responsive platforms that deliver a flawless experience on desktops, tablets, and smartphones, ensuring your portfolio is accessible everywhere.",
            img: imageService5,
            alt: "Mobile Friendly Interior Design Website",
            btnname: "Contact Us",
            link: "/contact-us",
          },
          {
            title: "Project Management Integration",
            desc: "We can integrate your website with project management and client portal tools, allowing you to share updates and manage client communication securely through your own digital platform.",
            img: imageService6,
            alt: "Interior Design Client Portal Integration",
            btnname: "Contact Us",
            link: "/contact-us",
          },
        ]}
      />

      <CommonWhyMetter
        imagewhymetter={imagewhymetter}
        alt={
          "Trusted Interior Design Website Design for UAE Firms - Website Development Agency"
        }
        heding={"Trusted Interior Design Website Design for UAE-based Firms"}
        subheding={
          "We design interior design websites with a deep understanding of visual storytelling. From portfolio clarity to brand prestige, every element is engineered for maximum creative impact."
        }
        lefttext={`  <p><b>Tailored for Creative Excellence:</b> Each website is customized to support your firm's unique style—whether that's minimalist modern, classic luxury, or commercial industrial. Layouts focus on visual impact and brand authenticity.</p>
                        <p><b>Visual-First Development:</b> we follow a design-driven development process that respects the high aesthetic standards of your industry. From initial concept to final polish, we ensure your digital platform is as beautiful as your work.</p>
                        `}
        righttext={`<p><b>Ongoing Support & Visual SEO:</b> A creative website is an evolving asset. Post-launch, we provide reliable support and continuous SEO updates, ensuring your design firm remains visible and effective as design trends evolve.</p>
                            `}
      />
      <CommonProtfolio />

      <DevelopmentServices />

      <CommonCostBreakdown
        heading="Interior Design Website Design Dubai- Cost Breakdown"
        description="Choose specialized interior design website design and development solutions designed to showcase your creativity and build brand authority in the UAE."
      />
      <IndustryGrid />

      <CommonWhyWebsiteDevelopment
        heding={"Creative Website Solutions for Design Firms"}
        subheding={
          "We build design websites that adapt to the specific focus of your studio. Every platform is planned around your portfolio, creative philosophy, and client engagement goals."
        }
        lefttext={`<p><b>Residential Interior Design:</b> We create websites that focus on home aesthetics, lifestyle, and personal luxury, emphasizing comfort and individual style for private homeowners.</p>
                                <p><b>Commercial Design Studios:</b> For firms focusing on offices, retail, and hospitality, our designs focus on functionality, scale, and brand integration, positioning you for large-scale tenders.</p>
                                <p><b>Architectural Design:</b> Websites for architects focus on structure, space, and technical innovation, showcasing your ability to design iconic buildings and functional environments.</p>
                                <p><b>Furniture & Product Design:</b> We design platforms for specialized designers that focus on product detail and craftsmanship, utilizing high-end product pages and manufacturing stories.</p>
                            `}
        rightimage={imagewhydevelopment}
        alt={
          "Why Choose Website Development Agency for Interior Design Website Development"
        }
      />

      <Team />

      <CommonClientTestimonials
        testimonials={[
          {
            id: 1,
            name: "Sophie Chen",
            text: "Website Development Agency created a website that perfectly captures my design aesthetic. Our portfolio has never looked better, and we've seen a significant increase in high-end inquiries.",
            image: imagetestimonial1,
          },
          {
            id: 2,
            name: "Ahmed Al-Mansoori",
            text: "A highly creative team that understands the luxury market. They delivered a stunning website that has positioned our firm as a leader in commercial design in Dubai.",
            image: imagetestimonial2,
          },
          {
            id: 3,
            name: "Emma Wright",
            text: "Excellent service with a keen eye for detail. The visual performance of the site is exceptional, and our search rankings have improved dramatically for interior design terms.",
            image: imagetestimonial3,
          },
        ]}
      />

      <LocationService activeLocation="dubai" />

      <CommonFaqSection
        faqs={[
          {
            q: "How long does it take to build an interior design website?",
            a: "A high-quality interior design website typically takes 4 to 8 weeks, depending on the number of projects in your portfolio and the complexity of interactive features.",
          },
          {
            q: "Can you optimize my site for 'interior designers in Dubai'?",
            a: "Yes, we specialize in local SEO and can target keywords like 'interior design Dubai' or 'luxury fit-out UAE' to ensure your firm is found by local clients.",
          },
          {
            q: "Will my website look good on mobile devices?",
            a: "Absolutely. All our websites are built with a mobile-first approach, ensuring your portfolio looks stunning on smartphones and tablets.",
          },
          {
            q: "Can I update my portfolio myself?",
            a: "Yes, we build websites on user-friendly content management systems (CMS) that allow you to easily add new projects and update your galleries.",
          },
          {
            q: "Do you provide copywriting services for design firms?",
            a: "Yes, we offer professional copywriting that captures your brand voice and highlights your design philosophy to potential clients.",
          },
          {
            q: "Can you integrate my social media feeds?",
            a: "Yes, we can seamlessly integrate your Instagram and Pinterest feeds to showcase your latest work and build social proof directly on your website.",
          },
        ]}
      />
    </>
  );
};

export default page;
