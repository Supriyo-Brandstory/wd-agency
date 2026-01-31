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
        alt={"Law Firm Website Design Agency in Dubai, UAE"}
        heding={"Law Firm Website Design Agency in Dubai, UAE"}
        subtitle={
          "We build authoritative, professional websites for law firms and legal consultants that emphasize <br>legal expertise, client trust, and professional integrity in Dubai and the UAE."
        }
      />

      <CommonIntroduction
        heding={"Law Firm Website Design & Development"}
        text1={` <p>In the legal profession, reputation is everything. Your website is often the first point of contact for potential clients seeking counsel and representation. A professional, authoritative website is essential for communicating your expertise and building the trust necessary to secure high-value legal instructions across the UAE.</p>
                 <p>Potential clients look for partners who demonstrate a deep understanding of the law, regulatory compliance, and successful case histories. A well-engineered website helps you bridge the gap between complex legal services and the peace of mind your clients are searching for, positioning your firm as a trusted advisor.</p>
                    `}
        text2={`  <p>Modern law firm websites must balance professionalism with accessibility, incorporating features like legal insight hubs, lawyer bios, and secure consultation booking tools. We focus on creating digital environments that project an image of legal sophistication and uncompromising professional standards.</p>
                <p><a href='/'>Website Development Agency</a> specializes in engineering high-impact websites for the legal and professional services sector. We design responsive, performance-optimized platforms that highlight your firm’s expertise and bolster institutional trust in a competitive legal market.</p>
                    `}
        imageintro1={imageintro1}
        alt1={
          "Specialized Law Firm Website Design in Dubai - Website Development Agency"
        }
        imageintro2={imageintro2}
        alt2={
          "Law Firm Web Development Company UAE - Website Development Agency"
        }
      />

      <DemoTemplate
        title="Law Firm Website Designs- Explore Templates"
        description="Authoritative and professional law firm website designs in Dubai, starting at AED 1,500. Launch your <br>legal brand quickly with high-performance, expert designs. Get fast delivery today."
        activetaburl={"legal"}
      />

      <CommonIndustries
        heding={"Law Firm Website Design in Dubai, UAE- Our Services"}
        subheding="We provide comprehensive digital solutions designed to help law firms build trust and attract high-value clients in the UAE."
        services={[
          {
            title: "Authority-Driven Professional Design",
            desc: "We create professional, high-trust website designs that emphasize your firm’s legal expertise. From structured service menus to detailed lawyer biographies, every element is designed to resonate with corporate and private clients in Dubai.",
            img: imageService1,
            alt: "Custom Law Firm Website Design Dubai",
            btnname: "Contact Us",
            link: "/contact-us",
          },
          {
            title: "Legal Insights & Resource Hubs",
            desc: "Develop dedicated sections for legal articles, case studies, and regulatory updates. We build hubs where clients can access expert legal commentary, demonstrating your firm's thought leadership and keeping you top-of-mind.",
            img: imageService2,
            alt: "Legal Insight Portals for Law Firms",
            btnname: "Contact Us",
            link: "/contact-us",
          },
          {
            title: "Secure Consultation Booking",
            desc: "Streamline the client intake process with secure consultation booking forms and inquiry portals. We ensure client data is handled with the highest standards of privacy and professionalism.",
            img: imageService3,
            alt: "Secure Legal Consultation Booking",
            btnname: "Contact Us",
            link: "/contact-us",
          },
          {
            title: "SEO for Legal Services",
            desc: "Improve your firm's visibility for specialized legal terms. We optimize your site for competitive search terms like 'corporate lawyer Dubai' or 'commercial litigation UAE,' ensuring your expertise is visible to those searching for legal counsel.",
            img: imageService4,
            alt: "SEO for Law Firms Dubai",
            btnname: "Contact Us",
            link: "/contact-us",
          },
          {
            title: "Responsive & High-Performance Architecture",
            desc: "Your website must reflect the precision of your legal work. We build fast-loading, responsive platforms that deliver a flawless experience on all devices, ensuring your legal content is accessible whenever it's needed.",
            img: imageService5,
            alt: "Mobile Friendly Law Website",
            btnname: "Contact Us",
            link: "/contact-us",
          },
          {
            title: "Multilingual Legal Content",
            desc: "Reach a broader audience with professionally translated content. We can build multilingual websites in English and Arabic, ensuring your legal services are accessible to the diverse population of the UAE.",
            img: imageService6,
            alt: "Multilingual Law Firm Website UAE",
            btnname: "Contact Us",
            link: "/contact-us",
          },
        ]}
      />

      <CommonWhyMetter
        imagewhymetter={imagewhymetter}
        alt={
          "Trusted Law Firm Website Design for UAE Firms - Website Development Agency"
        }
        heding={"Trusted Law Firm Website Design for UAE-based Firms"}
        subheding={
          "We design legal websites with a deep understanding of B2B and private client trust acquisition. From service clarity to professional prestige, every element is engineered for maximum impact."
        }
        lefttext={`  <p><b>Tailored for Professional Integrity:</b> Each website is customized to support your firm's goals—whether that's securing corporate contracts, promoting specialized counsel, or building international brand authority. Layouts focus on clarity and credibility.</p>
                        <p><b>Secure & Precision Development:</b> we follow a rigorous development process that respects the high standards of your industry. From initial information architecture to final launch, we ensure your digital platform is stable and secure.</p>
                        `}
        righttext={`<p><b>Ongoing Support & Legal SEO:</b> A professional website is a long-term asset. Post-launch, we provide reliable support and continuous SEO updates, ensuring your law firm remains visible and effective as the legal landscape evolves.</p>
                            `}
      />
      <CommonProtfolio />

      <DevelopmentServices />

      <CommonCostBreakdown
        heading="Law Firm Website Design Dubai- Cost Breakdown"
        description="Choose specialized law firm website design and development solutions designed to strengthen your digital presence and build professional trust in the UAE."
      />
      <IndustryGrid />

      <CommonWhyWebsiteDevelopment
        heding={"Legal Website Solutions for Specialized Firms"}
        subheding={
          "We build legal websites that adapt to the specific focus of your practice. Every platform is planned around your service catalog, legal expertise, and client engagement goals."
        }
        lefttext={`<p><b>Corporate & Commercial Law:</b> We create comprehensive websites that highlight corporate advisory, M&A capabilities, and contract law expertise, emphasizing reliability for business clients.</p>
                                <p><b>Litigation & Dispute Resolution:</b> For trial firms, our designs focus on case histories, courtroom experience, and strategic success stories, positioning you as a formidable advocate.</p>
                                <p><b>Real Estate & Property Law:</b> Websites for property specialists focus on transaction support, regulatory compliance, and local real estate laws, showcasing your ability to navigate complex markets.</p>
                                <p><b>Employment & Labor Law:</b> We design platforms for labor specialists that focus on hr compliance, worker rights, and employer protection, utilizing detailed resource pages and FAQs.</p>
                            `}
        rightimage={imagewhydevelopment}
        alt={
          "Why Choose Website Development Agency for Law Firm Website Development"
        }
      />

      <Team />

      <CommonClientTestimonials
        testimonials={[
          {
            id: 1,
            name: "John Harrison",
            text: "Website Development Agency built a digital presence that perfectly reflects our firm's prestige. Our new site has significantly improved our ability to attract high-value corporate clients.",
            image: imagetestimonial1,
          },
          {
            id: 2,
            name: "Laila Al-Saud",
            text: "A highly professional team with a deep understanding of the legal sector. They delivered an authoritative website that has become a key driver for our international consulting leads.",
            image: imagetestimonial2,
          },
          {
            id: 3,
            name: "Robert Miller",
            text: "Excellent service from start to finish. Our search rankings for specialized legal terms have improved dramatically, and the site's performance is exceptional.",
            image: imagetestimonial3,
          },
        ]}
      />

      <LocationService activeLocation="dubai" />

      <CommonFaqSection
        faqs={[
          {
            q: "How long does it take to build a professional law firm website?",
            a: "A high-authority law firm website typically takes 6 to 10 weeks, depending on the depth of legal content and the number of specialized practice areas included.",
          },
          {
            q: "Can you provide specialized SEO for 'corporate lawyer' or 'commercial litigation'?",
            a: "Yes, we offer industry-specific SEO strategies that target specialized legal keywords to ensure your services are visible to corporate directors and legal managers in the UAE.",
          },
          {
            q: "Is the website secure for client inquiries?",
            a: "Yes, we implement advanced security measures including SSL encryption and secure form handling to ensure all client inquiries are kept confidential.",
          },
          {
            q: "Can we have a blog for legal updates?",
            a: "Absolutely. We build user-friendly blogs and insight sections that allow your lawyers to easily publish legal updates and demonstrate thought leadership.",
          },
          {
            q: "Will the website be optimized for professional LinkedIn traffic?",
            a: "Yes, we ensure all pages are optimized for professional sharing and lead capture, tailored to the professional audience coming from your LinkedIn network.",
          },
          {
            q: "Can you integrate our legal practice management software?",
            a: "Yes, we can securely integrate lead capture forms and consultation systems with many legal software platforms for seamless practice management.",
          },
        ]}
      />
    </>
  );
};

export default page;
