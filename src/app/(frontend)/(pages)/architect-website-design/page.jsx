import React from "react";
import CommonBanner2 from "../../component/pages/common/CommonBanner2";
import imagebanner from "@/app/(frontend)/assets/images/construction-website-design/banner.webp";
import CommonIntroduction from "../../component/pages/common/CommonIntroduction";
import imageintro1 from "@/app/(frontend)/assets/images/construction-website-design/intro-1.webp";
import imageintro2 from "@/app/(frontend)/assets/images/construction-website-design/intro-2.webp";
import CommonWhyMetter from "../../component/pages/common/CommonWhyMetter";
import imagewhymetter from "@/app/(frontend)/assets/images/construction-website-design/why.webp";
import CommonIndustries from "../../component/pages/common/CommonIndustries";
import imageService1 from "@/app/(frontend)/assets/images/construction-website-design/service-1.webp";
import imageService2 from "@/app/(frontend)/assets/images/construction-website-design/service-2.webp";
import imageService3 from "@/app/(frontend)/assets/images/construction-website-design/service-3.webp";
import imageService4 from "@/app/(frontend)/assets/images/construction-website-design/service-4.webp";
import imageService5 from "@/app/(frontend)/assets/images/construction-website-design/service-5.webp";
import imageService6 from "@/app/(frontend)/assets/images/construction-website-design/service-6.webp";
import CommonDevelopmentProcess from "../../component/pages/common/CommonDevelopmentProcess";
import CommonWhyWebsiteDevelopment from "../../assets/style/common/CommonWhyWebsiteDevelopment";
import imagewhydevelopment from "@/app/(frontend)/assets/images/construction-website-design/why-choose.webp";
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
        alt={"Architect Web Design Agency in Dubai, UAE"}
        heding={"Architect Web Design Agency in Dubai, UAE"}
        subtitle={
          "We build premium websites for architects and design studios that showcase projects with precision, <br>attract high-end clients, and establish industry authority in Dubai and across the UAE."
        }
      />

      <CommonIntroduction
        heding={"Architect Website Design & Development"}
        text1={` <p>In Dubai’s landscape of iconic structures and world-class developments, architects need a digital presence that reflects their vision, precision, and creativity. A professional, well-structured website serves as your virtual portfolio, helping you demonstrate your design philosophy, technical expertise, and project history to potential clients and developers.</p>
                 <p>Today’s clients expect immersive experiences that provide clear project details, high-quality visual renderings, and an understanding of the architectural process. With numerous firms competing for major projects, a strong online presence helps your studio stand out in searches and convert visitors into long-term partners.</p>
                    `}
        text2={`  <p>A modern architecture website not only showcases completed projects but also builds trust through features like architect profiles, design awards, publication credits, and detailed case studies. Integration of interactive 3D walkthroughs and high-resolution galleries enhances client engagement and simplifies the selection process.</p>
                <p><a href='/'>Website Development Agency</a> specializes in creating high-impact websites tailored for Dubai’s architectural and design sector. We design responsive, aesthetically superior, and SEO-optimized platforms that highlight your firm’s expertise and bolster brand authority in a competitive digital landscape.</p>
                    `}
        imageintro1={imageintro1}
        alt1={
          "Specialized Architect Website Design in Dubai - Website Development Agency"
        }
        imageintro2={imageintro2}
        alt2={
          "Architecture Web Development Company UAE - Website Development Agency"
        }
      />

      <DemoTemplate
        title="Architecture Website Designs- Explore Templates"
        description="Premium architect and design studio website designs in Dubai, starting at AED 1,500. Launch your <br>portfolio quickly with modern, responsive designs. Get fast delivery today."
        activetaburl={"real-estate"}
      />

      <CommonIndustries
        heding={"Architect Website Design in Dubai, UAE- Our Services"}
        subheding="We offer a full suite of digital solutions designed to help architectural firms in Dubai grow and succeed."
        services={[
          {
            title: "Custom Portfolio Design & Development",
            desc: "We craft unique, fully tailored websites that perfectly capture your architectural firm’s brand identity. From minimalist layouts to immersive project galleries, every element reflects your studio’s design philosophy and creative vision, ensuring a premium first impression for potential clients.",
            img: imageService1,
            alt: "Custom Architect Website Design Dubai",
            btnname: "Contact Us",
            link: "/contact-us",
          },
          {
            title: "Immersive Visual Galleries",
            desc: "Showcase your work with high-resolution, full-screen image galleries and interactive project sliders. We optimize imagery for fast loading without compromising quality, allowing visitors to explore the fine details of your architectural designs and material selections seamlessly.",
            img: imageService2,
            alt: "Architectural Visual Galleries",
            btnname: "Contact Us",
            link: "/contact-us",
          },
          {
            title: "Interactive 3D Walkthroughs & BIM Integration",
            desc: "We integrate advanced 3D visualization tools and BIM model previews directly into your website. This allows prospective clients to take virtual tours of your designs, providing a deeper understanding of space, lighting, and structure before the first stone is even laid.",
            img: imageService3,
            alt: "3D Walkthrough Integration for Architects",
            btnname: "Contact Us",
            link: "/contact-us",
          },
          {
            title: "Strategic SEO for Professional Services",
            desc: "Improve your firm's visibility with targeted SEO strategies designed for the architectural industry. We help you rank for competitive keywords in Dubai’s real estate and design market, ensuring your studio appears at the top when developers search for top-tier expertise.",
            img: imageService4,
            alt: "SEO for Architects in Dubai",
            btnname: "Contact Us",
            link: "/contact-us",
          },
          {
            title: "Project Management Client Portals",
            desc: "Enhance client collaboration with secure portals where stakeholders can access project updates, view blueprints, and approve designs. These integrated systems streamline communication and provide a professional, organized experience for your high-end clientele.",
            img: imageService5,
            alt: "Architect Client Portals",
            btnname: "Contact Us",
            link: "/contact-us",
          },
          {
            title: "Responsive & Performance-Driven Design",
            desc: "Our websites deliver a flawless experience on all devices, from large desktop monitors to mobile phones. Fast-loading, responsive pages ensure your portfolio is accessible to busy developers and clients on the go, maintaining your firm's professional image everywhere.",
            img: imageService6,
            alt: "Mobile Friendly Architect Website",
            btnname: "Contact Us",
            link: "/contact-us",
          },
        ]}
      />

      <CommonWhyMetter
        imagewhymetter={imagewhymetter}
        alt={
          "Trusted Architect Website Design for UAE Firms - Website Development Agency"
        }
        heding={"Trusted Architect Website Design for UAE-based Firms"}
        subheding={
          "We design architectural websites with a deep understanding of how design firms operate in the UAE. From visual storytelling to brand credibility, every element is structured to appeal to developers and luxury clients."
        }
        lefttext={`  <p><b>Tailored for Firm Growth:</b> Each website is customized to support your firm's goals—whether that's securing large-scale commercial contracts, promoting residential design excellence, or building international brand authority. Layouts and content flow are designed to highlight expertise.</p>
                        <p><b>Efficient & Reliable Development:</b> We follow a streamlined development process that respects the precision of your industry. From initial wireframes to final launch, we ensure timely delivery and technical excellence, making the entire experience smooth for firm owners.</p>
                        `}
        righttext={`<p><b>Ongoing Support & Maintenance:</b> We build websites with strong foundations for long-term success. Post-launch, our team provides reliable support, ensuring your architectural portfolio remains secure, updated, and high-performing as your practice expands.</p>
                            `}
      />
      <CommonProtfolio />

      <DevelopmentServices />

      <CommonCostBreakdown
        heading="Architect Website Design Dubai- Cost Breakdown"
        description="Choose specialized architect website design and development solutions designed to strengthen your digital presence and support sustainable growth in the UAE."
      />
      <IndustryGrid />

      <CommonWhyWebsiteDevelopment
        heding={"Architectural Website Solutions for Every Type of Practice"}
        subheding={
          "We design architectural websites that adapt to the unique focus of each firm across the UAE. Every website is planned around project presentation, technical credibility, and firm objectives—ensuring clarity and strong performance in a competitive design market."
        }
        lefttext={`<p><b>Residential Architects:</b> For firms focused on luxury villas and apartments, we create websites that emphasize lifestyle, space, and aesthetic detail. High-quality imagery and client testimonials help build a personal connection with homeowners.</p>
                                <p><b>Commercial & Urban Design:</b> Websites for commercial firms focus on scale, technical proficiency, and project management. We incorporate detailed case studies and stakeholder-focused content that speaks to developers and government entities. </p>
                                <p><b>Interior Architecture & Design:</b> For interior specialists, our designs focus on texture, lighting, and materiality. Visual-first layouts and refined typography ensure your interior projects are presented with the level of detail they require.</p>
                                <p><b>Landscape & Sustainability:</b> We build websites for firms specializing in landscape architecture and sustainable design, highlighting environmental impact and outdoor integration through rich visual storytelling and technical documentation.</p>
                            `}
        rightimage={imagewhydevelopment}
        alt={
          "Why Choose Website Development Agency for Architect Website Development"
        }
      />

      <Team />

      <CommonClientTestimonials
        testimonials={[
          {
            id: 1,
            name: "Michael Chen",
            text: "Website Development Agency truly understood our studio's aesthetic. Our new digital portfolio has been a game-changer for high-profile pitches and client meetings.",
            image: imagetestimonial1,
          },
          {
            id: 2,
            name: "Sarah Al-Maktoum",
            text: "A highly professional team that delivered a stunning, high-converting website for our boutique architecture firm. The attention to detail was exceptional.",
            image: imagetestimonial2,
          },
          {
            id: 3,
            name: "James Wilson",
            text: "Excellent service from start to finish. Our search rankings improved dramatically, and we have seen a steady increase in enquiries from major developers.",
            image: imagetestimonial3,
          },
        ]}
      />

      <LocationService activeLocation="dubai" />

      <CommonFaqSection
        faqs={[
          {
            q: "How long does it take to build a professional architect website?",
            a: "Typically, a professional architectural portfolio website takes between 6 to 12 weeks, depending on the number of projects, complexity of visual features, and interactive elements required.",
          },
          {
            q: "Can you integrate 3D models and virtual tours into my website?",
            a: "Yes, we specialize in integrating 3D walkthroughs, BIM model previews, and 360-degree virtual tours to provide an immersive experience for your prospective clients.",
          },
          {
            q: "Do you provide SEO services for architectural firms?",
            a: "Absolutely. We offer specialized Local and Industry SEO services designed for architects in Dubai to help your firm rank for competitive keywords and attract high-value project enquiries.",
          },
          {
            q: "Can I easily update my portfolio with new projects?",
            a: "Yes, we use user-friendly Content Management Systems (CMS) like WordPress or custom solutions that allow you to upload new projects, images, and descriptions without any technical knowledge.",
          },
          {
            q: "How do you ensure the high-quality images of my projects load fast?",
            a: "We utilize advanced image optimization techniques, lazy loading, and Content Delivery Networks (CDNs) to ensure your high-resolution architectural photos load instantly on all devices.",
          },
          {
            q: "Can my website include a password-protected area for clients?",
            a: "Yes, we can build secure, password-protected client portals where you can share blueprints, confidential project updates, and documents directly with your stakeholders.",
          },
        ]}
      />
    </>
  );
};

export default page;
