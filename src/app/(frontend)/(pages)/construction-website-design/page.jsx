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
import imageService7 from "@/app/(frontend)/assets/images/construction-website-design/service-7.webp";
import imageService8 from "@/app/(frontend)/assets/images/construction-website-design/service-8.webp";
import CommonWhyWebsiteDevelopment from "../../assets/style/common/CommonWhyWebsiteDevelopment";
import imagewhydevelopment from "@/app/(frontend)/assets/images/construction-website-design/why-choose.webp";
import CommonClientTestimonials from "../../component/pages/common/CommonClientTestimonials";
import imagetestimonial1 from "@/app/(frontend)/assets/images/testimonial/testimonial-1.webp";
import imagetestimonial2 from "@/app/(frontend)/assets/images/testimonial/testimonial-2.webp";
import imagetestimonial3 from "@/app/(frontend)/assets/images/testimonial/testimonial-3.webp";
import CommonFaqSection from "../../component/pages/common/CommonFaqSection";
import DevelopmentServices from "../../component/pages/home/DevelopmentServices";
import Team from "../../component/pages/about/Team";
import LocationService from "../../component/pages/common/LocationService";
import CommonCostBreakdown from "../../component/pages/common/CommonCostBreakdown";
import CommonProtfolio from "../../component/pages/common/CommonProtfolio";
import IndustryGrid from "../../component/pages/common/IndustryGrid";

const page = () => {
  return (
    <>
      <CommonBanner2
        bg={imagebanner}
        alt={"Construction Website Design Company in Dubai"}
        heding={"Construction Web Design in Dubai, UAE"}
        subtitle={
          "Enhance your construction business in Dubai, UAE with a professional website design <br>to showcases projects, highlights capabilities, and attracts high-quality leads."
        }
      />

      <CommonIntroduction
        heding={"Construction Website Design Solutions"}
        text1={` <p>Dubai’s construction industry is highly competitive, with large infrastructure projects, luxury developments, and smart city initiatives driving growth. A professional website is essential to showcase expertise, completed projects, and capabilities, helping firms build credibility and attract developers, contractors, and decision-makers.</p>
                 <p>At <a href='/'>Website Development Agency</a>, we create websites that blend design and functionality. Project galleries, interactive features, and clear service presentations highlight your work, while enquiry forms and lead capture tools make it easy for clients to connect. Every site is built to showcase your technical expertise and compliance credentials effectively.</p>
                    `}
        text2={`  <p>Our websites are mobile-responsive, fast-loading, and SEO-optimized to attract high-intent traffic from across Dubai and the UAE. Strategic content layouts communicate your value, projects, and experience, helping your firm rank higher in search results for construction services in Dubai. With clear calls-to-action, visitors are guided seamlessly from discovery to enquiry.</p>
                <p>We deliver scalable, secure, and professional construction websites tailored to your business needs. Whether a portfolio site or a dynamic project platform, our solutions drive leads, strengthen brand authority, and support long-term growth in Dubai’s construction sector. All websites are designed for easy updates, allowing you to showcase new projects and capabilities as your business expands.</p>
                    `}
        imageintro1={imageintro1}
        alt1={
          "Construction Website Design Solutions in Dubai - Website Development Agency"
        }
        imageintro2={imageintro2}
        alt2={
          "Construction Web Development Company UAE - Website Development Agency"
        }
      />

      <CommonIndustries
        heding={"Our Construction Website Development Services"}
        subheding="At Website Development Agency, we specialize in delivering high-impact digital solutions specifically engineered for the construction industry in Dubai."
        services={[
          {
            title: "Custom Website Design for Construction",
            desc: "We deliver fully tailored website designs that perfectly align with your construction brand's identity, incorporating industry-specific aesthetics like modern architecture visuals, clean layouts, and professional color schemes. Our user-centric approach ensures intuitive navigation for architects, developers, contractors, and clients, enhancing engagement and reflecting your expertise in Dubai's competitive market.",
            img: imageService1,
            alt: "Custom Construction Website Design Dubai",
            btnname: "Contact Us",
            link: "/contact-us",
          },
          {
            title: "Project Listing & Management Systems",
            desc: "Our advanced systems showcase active and completed projects with high-resolution galleries, detailed descriptions, timelines, and progress updates. Featuring powerful filtering and search functionality by location, type, scale, or status, these tools help visitors quickly find relevant work, boosting visibility and demonstrating your portfolio's strength in the UAE construction sector.",
            img: imageService2,
            alt: "Construction Project Management Systems",
            btnname: "Contact Us",
            link: "/contact-us",
          },
          {
            title: "Integrating CRM and Project Management Tools",
            desc: "We seamlessly integrate CRM systems for efficient lead capture, nurturing, and follow-up, while connecting to popular industry-specific project management software like Procore and Aconex (now Oracle). This creates a unified platform for streamlined workflows, real-time data sharing, and improved collaboration, helping construction firms manage enquiries and projects more effectively.",
            img: imageService3,
            alt: "CRM Integration for Construction Firms",
            btnname: "Contact Us",
            link: "/contact-us",
          },
          {
            title: "Virtual Tours & 3D Integration",
            desc: "Provide immersive experiences through interactive virtual tours, 360° walkthroughs, and 3D project visualizations, including site progress simulations. We incorporate cutting-edge Augmented Reality (AR) and Virtual Reality (VR) features aligned with Dubai's digital trends in BIM and smart construction, allowing clients to explore developments remotely and make informed decisions.",
            img: imageService4,
            alt: "Virtual Tours for Construction Projects",
            btnname: "Contact Us",
            link: "/contact-us",
          },
          {
            title: "Website Security and Data Privacy for Construction Firms",
            desc: "We implement robust cybersecurity measures, including SSL encryption, secure forms, and firewalls, to protect sensitive project data. Our solutions ensure full compliance with UAE's Personal Data Protection Law (PDPL), effective since 2026, safeguarding personal and confidential information while building trust with stakeholders in the regulated construction industry.",
            img: imageService5,
            alt: "Data Privacy for Construction Companies",
            btnname: "Contact Us",
            link: "/contact-us",
          },
          {
            title: "Multi-Language & Multi-Currency Options",
            desc: "Support international growth with multi-language capabilities (Arabic, English, and more) to reach global investors and diverse UAE clients. Integrated multi-currency features simplify interactions for cross-border transactions, making your website accessible and appealing in Dubai's cosmopolitan, investor-driven construction market.",
            img: imageService6,
            alt: "Multi-Language Construction Website Options",
            btnname: "Contact Us",
            link: "/contact-us",
          },
          {
            title: "Mobile & Tablet Optimized Designs",
            desc: "All websites feature fully responsive, mobile-first designs optimized for smartphones and tablets, ensuring fast loading and seamless user experience on-site or on-the-go. This is crucial for construction professionals accessing project details, updates, or submitting enquiries from job sites in Dubai's dynamic environment.",
            img: imageService7,
            alt: "Mobile Optimized Construction Website",
            btnname: "Contact Us",
            link: "/contact-us",
          },
          {
            title: "Maintenance & Ongoing Support",
            desc: "We provide proactive monitoring, regular security updates, performance optimizations, bug fixes, and feature enhancements to keep your website running smoothly. Our dedicated support team ensures long-term reliability, allowing construction firms to focus on projects while we handle technical maintenance and evolve the site with industry advancements.",
            img: imageService8,
            alt: "Construction Website Maintenance and Support",
            btnname: "Contact Us",
            link: "/contact-us",
          },
        ]}
      />
      <CommonWhyMetter
        imagewhymetter={imagewhymetter}
        alt={"Construction Builder Web Design Services for UAE Businesses"}
        heding={"Construction Builder Web Design Services for UAE Businesses"}
        subheding={
          "Choosing the right website design partner can directly influence how your construction or building business is perceived online. In the UAE’s competitive market, your website must clearly present your expertise, completed projects, and service strengths."
        }
        lefttext={`  <p><b>Tailor-made Designs:</b> Our custom web design approach is shaped by a strong understanding of the UAE construction sector. We create websites that reflect regional business standards, tender-based workflows, and client research behaviour. Structured service pages and well-organised project portfolios help communicate your capabilities with clarity and confidence.</p>
                        <p><b>Performance-Driven Approach:</b> Website performance and usability are central to our development process. Clean layouts, intuitive navigation, and fast-loading pages ensure visitors can quickly find the information they need. Each website is fully responsive, delivering a consistent and professional experience across desktop, tablet, and mobile devices.</p>
                        `}
        righttext={`<p><b>Scalable for Growth:</b> Our construction websites are built to support enquiries and long-term growth. Strategic calls to action, enquiry forms, and contact points encourage direct engagement from potential clients. Scalable frameworks allow your website to grow alongside your business, making it a valuable digital asset well into the future.</p>
                            `}
      />

      <CommonProtfolio />

      <DevelopmentServices />

      <CommonCostBreakdown
        heading="Construction Website Design Dubai- Cost Breakdown"
        description="Choose construction website design and development solutions designed to strengthen your digital presence and support sustainable growth in the UAE."
      />
      <IndustryGrid />

      <CommonWhyWebsiteDevelopment
        heding={"Website Design for Construction Businesses Across UAE"}
        subheding={
          "Every construction business operates differently, which is why a one-size-fits-all website never works. We design construction websites that reflect the specific nature of your services, projects, and target clients- ensuring your expertise is presented clearly and professionally across the UAE market."
        }
        lefttext={`<p><b>Residential Developers:</b> For residential builders and developers, we focus on visually rich project showcases that highlight completed work, design quality, and delivery standards. Structured layouts, image-led portfolios, and credibility-focused content help build confidence with homeowners and investors alike.</p>
                                <p><b>Commercial Construction Firms:</b> Commercial and industrial construction websites are designed to communicate scale, capability, and compliance. We create structured service sections, project timelines, and certification highlights that help decision-makers quickly understand your technical expertise and project experience.</p>
                                <p><b>Renovation, Fit-Out & Specialist Contractors:</b> For renovation companies, fit-out specialists, and niche contractors, we build websites that emphasise service clarity and easy enquiry paths. Clear service breakdowns, project galleries, and streamlined contact forms make it simple for clients to take the next step and engage with your business.</p>
                            `}
        rightimage={imagewhydevelopment}
        alt={
          "Why Choose Website Development Agency for Construction Website Design"
        }
      />

      <Team />

      <CommonClientTestimonials
        testimonials={[
          {
            id: 1,
            name: "Ibrahim K.",
            text: "The website built for our civil engineering firm perfectly highlights our major infrastructure projects. The project management tool integration has significantly streamlined our client interactions.",
            image: imagetestimonial1,
          },
          {
            id: 2,
            name: "Sofia R.",
            text: "We’ve seen a 35% increase in overseas developer inquiries since launching our new site. The 3D project visualizations are absolute world-class.",
            image: imagetestimonial2,
          },
          {
            id: 3,
            name: "Hassan S.",
            text: "Highly professional team with deep knowledge of the UAE construction market. Our site is fast, secure, and visually stunning across all devices.",
            image: imagetestimonial3,
          },
        ]}
      />

      <LocationService activeLocation="dubai" />

      <CommonFaqSection
        faqs={[
          {
            q: "1. How Much Does a Construction Website Cost?",
            a: "The cost depends on your requirements, including the number of projects, features like virtual tours, 3D walkthroughs, CRM integration, multi-language support, and custom design. Basic websites are more affordable, while feature-rich, scalable platforms for developers or contractors require a higher investment. Custom quotes are available based on project scope.",
          },
          {
            q: "2. Do You Integrate CRM and Project Management Systems?",
            a: "Yes. We can integrate your website with CRMs (Salesforce, HubSpot) and construction-specific project management tools like Procore or Aconex. This ensures seamless lead capture, project tracking, and improved workflow between your website and internal systems.",
          },
          {
            q: "3. Can the Site Support Multiple Languages and Currencies?",
            a: "Absolutely. We build websites with multi-language and multi-currency functionality to cater to Dubai’s diverse population, international investors, and partners, providing a professional and accessible experience for clients from different regions.",
          },
          {
            q: "4. How Long Does It Take to Build a Construction Website?",
            a: "A standard professional construction website typically takes 6–8 weeks, while advanced platforms with CRM integrations, virtual tours, and 3D visualizations may take 10–14 weeks. Timelines vary based on approvals, custom features, and project size.",
          },
          {
            q: "5. Can I Add or Remove Projects Easily Without Technical Skills?",
            a: "Yes. All websites are built on intuitive Content Management Systems (CMS) that allow you to manage project listings, galleries, and service pages without coding knowledge. Adding new developments or updating existing content is simple and quick.",
          },
          {
            q: "6. Do You Offer Ongoing Maintenance and Future-Proofing?",
            a: "Yes. We provide proactive maintenance, security updates, bug fixes, and feature enhancements to ensure your website remains secure, optimized, and technologically relevant as your construction business grows.",
          },
          {
            q: "7. Can My Website Include Virtual Tours and 3D Walkthroughs of Projects?",
            a: "Absolutely. We integrate immersive 3D walkthroughs, interactive virtual tours, and AR/VR applications to showcase projects effectively, helping potential clients, investors, and partners visualize developments remotely.",
          },
          {
            q: "8. What Security Measures Are in Place for Sensitive Data?",
            a: "We implement robust cybersecurity measures, including SSL encryption, secure hosting, role-based access, and compliance with UAE data protection regulations, ensuring all project data, client information, and documents are safely managed.",
          },
          {
            q: "9. Will My Website Help Generate Leads and Attract Clients?",
            a: "Yes. Features like enquiry forms, downloadable brochures, project filters, and SEO-optimized pages ensure your website attracts qualified leads, nurtures prospects, and converts visitors into inquiries, helping you grow your construction business in Dubai.",
          },
        ]}
      />
    </>
  );
};

export default page;
