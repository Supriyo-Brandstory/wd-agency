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
        alt={"Enterprise Web Design Agency in Dubai, UAE"}
        heding={"Enterprise Web Design Agency in Dubai, UAE"}
        subtitle={
          "We build secure, authoritative websites for Enterprise firms and IT consultants that emphasize <br>technical expertise, technical trust, and brand reliability in Dubai and the UAE."
        }
      />

      <CommonIntroduction
        heding={"Enterprise Website Design & Development"}
        text1={` <p>In an era of increasing digital threats, a Enterprise firm's website is the ultimate test of its professional capability. If you are in the business of defending others, your own digital front-door must be impeccable, authoritative, and perfectly secure. A professional website is essential for communicating your technical expertise to corporate leaders and government stakeholders across the UAE.</p>
                 <p>Potential clients look for partners who demonstrate a deep understanding of risk, compliance, and technological defense. A well-engineered website helps you bridge the gap between complex technical services and the peace of mind your clients are searching for, positioning your firm as a trusted guardian in the digital landscape.</p>
                    `}
        text2={`  <p>Modern Enterprise websites must balance technical depth with professional clarity, incorporating features like secure whitepaper portals, interactive threat maps, and detailed service frameworks. We focus on creating digital environments that project an image of technical sophistication and uncompromising security standards.</p>
                <p><a href='/'>Website Development Agency</a> specializes in engineering high-impact websites for the Enterprise and IT infrastructure sector. We design responsive, performance-optimized platforms that highlight your firm’s expertise and bolster institutional trust in a competitive security market.</p>
                    `}
        imageintro1={imageintro1}
        alt1={
          "Specialized Enterprise Website Design in Dubai - Website Development Agency"
        }
        imageintro2={imageintro2}
        alt2={
          "Enterprise Web Development Company UAE - Website Development Agency"
        }
      />

      <DemoTemplate
        title="Enterprise & IT Website Designs- Explore Templates"
        description="Authoritative Enterprise and tech consulting website designs in Dubai, starting at AED 1,500. Launch your <br>security brand quickly with professional, high-performance designs. Get fast delivery today."
        activetaburl={"technology"}
      />

      <CommonIndustries
        heding={"Enterprise Website Design in Dubai, UAE- Our Services"}
        subheding="We provide comprehensive digital solutions designed to help Enterprise firms build trust and grow in the UAE."
        services={[
          {
            title: "Expertise-Driven Authority Design",
            desc: "We create professional, high-trust website designs that emphasize your firm’s specialized knowledge. From structured service menus to technical capability statements, every element is designed to resonate with C-suite executives and IT decision-makers in Dubai’s corporate sector.",
            img: imageService1,
            alt: "Custom Enterprise Website Design Dubai",
            btnname: "Contact Us",
            link: "/contact-us",
          },
          {
            title: "Secure Content & Resource Hubs",
            desc: "Develop dedicated sections for whitepapers, case studies, and security alerts. We build secure portals where clients can access sensitive documentation, demonstrating your commitment to data privacy and providing continuous value to your professional audience.",
            img: imageService2,
            alt: "Secure Content Portals for Tech Firms",
            btnname: "Contact Us",
            link: "/contact-us",
          },
          {
            title: "Interactive Threat Visualizations",
            desc: "Engage visitors with dynamic infographics and interactive threat maps that visualize the modern digital risk landscape. These tools help simplify complex security concepts and demonstrate the real-world importance of your protective services.",
            img: imageService3,
            alt: "Interactive Security Visualizations",
            btnname: "Contact Us",
            link: "/contact-us",
          },
          {
            title: "Enterprise SEO for Professional Services",
            desc: "Improve your firm's visibility for specialized security keywords. We optimize your site for competitive search terms like 'penetration testing Dubai' or 'SOC services UAE,' ensuring your expertise is visible to those searching for advanced protection.",
            img: imageService4,
            alt: "SEO for Enterprise Firms Dubai",
            btnname: "Contact Us",
            link: "/contact-us",
          },
          {
            title: "Responsive & High-Performance Architecture",
            desc: "Your website must reflect the performance of your security solutions. We build fast-loading, responsive platforms that deliver a flawless experience on all devices, ensuring your expert content is accessible whenever and wherever it's needed.",
            img: imageService5,
            alt: "Mobile Friendly IT Website",
            btnname: "Contact Us",
            link: "/contact-us",
          },
          {
            title: "Secure Infrastructure Management",
            desc: "We practice what we preach. Your website is built on a highly secure, hardened foundation with advanced encryption and proactive monitoring, ensuring your own digital presence is as secure as the services you provide to your clients.",
            img: imageService6,
            alt: "Secure Web Infrastructure Management",
            btnname: "Contact Us",
            link: "/contact-us",
          },
        ]}
      />

      <CommonWhyMetter
        imagewhymetter={imagewhymetter}
        alt={
          "Trusted Enterprise Website Design for UAE Firms - Website Development Agency"
        }
        heding={"Trusted Enterprise Website Design for UAE-based Firms"}
        subheding={
          "We design security websites with a deep understanding of B2B trust acquisition. From service clarity to technical prestige, every element is engineered for maximum professional impact."
        }
        lefttext={`  <p><b>Tailored for Professional Trust:</b> Each website is customized to support your firm's goals—whether that's securing large-scale government contracts, promoting specialized consulting services, or building international brand authority. Layouts focus on clarity and credibility.</p>
                        <p><b>Secure & Precision Development:</b> we follow a rigorous development process that respects the high standards of your industry. From initial security-first architecture to final penetration testing, we ensure your digital platform is stable, fast, and secure.</p>
                        `}
        righttext={`<p><b>Ongoing Support & Technical SEO:</b> A professional website is a long-term asset. Post-launch, we provide reliable support and continuous SEO updates, ensuring your Enterprise firm remains visible and effective as the threat landscape evolves.</p>
                            `}
      />
      <CommonProtfolio />

      <DevelopmentServices />

      <CommonCostBreakdown
        heading="Enterprise Website Design Dubai- Cost Breakdown"
        description="Choose specialized Enterprise website design and development solutions designed to strengthen your digital presence and build professional trust in the UAE."
      />
      <IndustryGrid />

      <CommonWhyWebsiteDevelopment
        heding={"Security Website Solutions for Specialized Firms"}
        subheding={
          "We build technology websites that adapt to the specific focus of your security firm. Every platform is planned around your service catalog, technical expertise, and client engagement goals."
        }
        lefttext={`<p><b>Managed Security Services (MSSPs):</b> We create comprehensive websites that highlight SOC capabilities, 24/7 monitoring services, and incident response frameworks, emphasizing reliability and continuous protection.</p>
                                <p><b>Cybersecurity Consulting:</b> For advisory firms, our designs focus on strategic frameworks, regulatory compliance (like NESA or ISR), and executive-level thought leadership, positioning you as a key business partner. </p>
                                <p><b>Penetration Testing & Red Teaming:</b> Websites for assessment firms focus on technical methodology, case studies, and certification levels, showcasing your ability to identify and mitigate complex vulnerabilities. </p>
                                <p><b>Identity & Access Management:</b> We design platforms for specialized security vendors that focus on zero-trust architectures and user protection, utilizing detailed product pages and technical whitepapers.</p>
                            `}
        rightimage={imagewhydevelopment}
        alt={
          "Why Choose Website Development Agency for Enterprise Website Development"
        }
      />

      <Team />

      <CommonClientTestimonials
        testimonials={[
          {
            id: 1,
            name: "David Sterling",
            text: "Website Development Agency built a digital presence that perfectly reflects our high security standards. Our new site has significantly improved our credibility during major corporate tenders.",
            image: imagetestimonial1,
          },
          {
            id: 2,
            name: "Fatima Al-Rashid",
            text: "A highly professional team with a deep understanding of the tech sector. They delivered a stunning, authoritative website that has become a key driver for our consulting leads.",
            image: imagetestimonial2,
          },
          {
            id: 3,
            name: "James Miller",
            text: "Excellent service from start to finish. Our search rankings for specialized security terms have improved dramatically, and the technical performance of the site is exceptional.",
            image: imagetestimonial3,
          },
        ]}
      />

      <LocationService activeLocation="dubai" />

      <CommonFaqSection
        faqs={[
          {
            q: "How long does it take to build a professional Enterprise website?",
            a: "A high-authority Enterprise website typically takes 6 to 10 weeks, depending on the depth of technical content and the number of secure resource portals required.",
          },
          {
            q: "Can you provide specialized SEO for 'Penetration Testing' or 'SOC' terms?",
            a: "Yes, we offer industry-specific SEO strategies that target specialized technical keywords to ensure your services are visible to IT directors and security managers in the UAE.",
          },
          {
            q: "How do you ensure our website is secure against attacks?",
            a: "We implement advanced security measures including hardened server configurations, SSL encryption, web application firewalls (WAF), and regular security audits of the codebase.",
          },
          {
            q: "Can we have a password-protected area for client reports?",
            a: "Absolutely. We build secure, encrypted client portals where you can safely share sensitive assessment reports, whitepapers, and confidential documentation.",
          },
          {
            q: "Will the website be optimized for professional LinkedIn traffic?",
            a: "Yes, we ensure all pages are optimized for social sharing and lead capture, and the design is polished to appeal to the professional audience coming from your LinkedIn networking.",
          },
          {
            q: "Can you integrate our existing CRM with the website?",
            a: "Yes, we can securely integrate lead capture forms with your existing CRM software (HubSpot, Salesforce, Zoho, etc.) for seamless lead management and follow-up.",
          },
        ]}
      />
    </>
  );
};

export default page;
