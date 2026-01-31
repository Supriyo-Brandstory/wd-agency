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
        alt={"Pharma & Healthcare Website Design Agency in Dubai, UAE"}
        heding={"Pharma & Healthcare Website Design Agency in Dubai, UAE"}
        subtitle={
          "We build secure, compliant, and authoritative websites for pharmaceutical and healthcare firms that <br>emphasize medical expertise, regulatory trust, and patient safety in Dubai and the UAE."
        }
      />

      <CommonIntroduction
        heding={"Pharma Website Design & Development"}
        text1={` <p>In the highly regulated pharmaceutical industry, your website is a critical channel for information, trust, and professional engagement. For pharma firms in Dubai, a digital presence must be more than just informative—it must be scientifically authoritative and strictly compliant with local and international health regulations. Your website is the primary resource for healthcare professionals and patients alike.</p>
                 <p>Potential partners look for pharma leaders who demonstrate a deep commitment to R&D, safety, and clinical excellence. A well-engineered website helps you bridge the gap between complex medical innovation and the wellness of the community, positioning your firm as a trusted guardian in the regional healthcare landscape.</p>
                    `}
        text2={`  <p>Modern pharma websites must balance scientific depth with professional clarity, incorporating features like secure clinical trials portals, drug information databases, and physician-only resource hubs. We focus on creating digital environments that project an image of medical sophistication and uncompromising safety standards.</p>
                <p><a href='/'>Website Development Agency</a> specializes in engineering high-impact websites for the pharmaceutical and life sciences sector. We design responsive, performance-optimized platforms that highlight your firm’s expertise and bolster health authority trust in a competitive market.</p>
                    `}
        imageintro1={imageintro1}
        alt1={
          "Specialized Pharma Website Design in Dubai - Website Development Agency"
        }
        imageintro2={imageintro2}
        alt2={"Pharma Web Development Company UAE - Website Development Agency"}
      />

      <DemoTemplate
        title="Pharma & Healthcare Website Designs- Explore Templates"
        description="Authoritative and compliant pharmaceutical website designs in Dubai, starting at AED 1,500. Launch your <br>healthcare brand quickly with professional, high-performance designs. Get fast delivery today."
        activetaburl={"healthcare"}
      />

      <CommonIndustries
        heding={"Pharma Website Design in Dubai, UAE- Our Services"}
        subheding="We provide comprehensive digital solutions designed to help pharmaceutical firms build trust and engage healthcare professionals in the UAE."
        services={[
          {
            title: "Authority-Driven Scientific Design",
            desc: "We create professional, high-trust website designs that emphasize your firm’s medical expertise. From structured product dossiers to clinical research highlights, every element is designed to resonate with healthcare professionals and health authorities in Dubai.",
            img: imageService1,
            alt: "Custom Pharma Website Design Dubai",
            btnname: "Contact Us",
            link: "/contact-us",
          },
          {
            title: "Secure HCP & Resource Portals",
            desc: "Develop dedicated sections for clinical data, educational resources, and prescribing information. We build secure portals where healthcare professionals (HCPs) can access sensitive documentation, demonstrating your commitment to medical transparency.",
            img: imageService2,
            alt: "Secure HCP Portals for Pharma Firms",
            btnname: "Contact Us",
            link: "/contact-us",
          },
          {
            title: "Interactive Medical Infographics",
            desc: "Engage visitors with dynamic medical infographics and interactive MOA (Mechanism of Action) visualizations that explain complex biological processes. These tools help simplify medical concepts and demonstrate your firm's innovative strength.",
            img: imageService3,
            alt: "Interactive Medical Visualizations",
            btnname: "Contact Us",
            link: "/contact-us",
          },
          {
            title: "Medical SEO & Compliance Optimization",
            desc: "Improve your firm's visibility for specialized medical keywords. We optimize your site for search terms like 'pharma manufacturing Dubai' or 'specialty medicine UAE,' ensuring your expertise is visible within regulatory guidelines.",
            img: imageService4,
            alt: "Medical SEO for Pharma Firms Dubai",
            btnname: "Contact Us",
            link: "/contact-us",
          },
          {
            title: "Responsive & High-Performance Architecture",
            desc: "Your website must reflect the precision of your medical solutions. We build fast-loading, responsive platforms that deliver a flawless experience on all devices, ensuring your scientific content is accessible whenever it's needed.",
            img: imageService5,
            alt: "Mobile Friendly Pharma Website",
            btnname: "Contact Us",
            link: "/contact-us",
          },
          {
            title: "Secure pharmacovigilance Portals",
            desc: "We focus on safety first. Your website can include secure, easy-to-use report portals for adverse events and drug safety, ensuring you meet the highest standards of patient protection and regulatory compliance.",
            img: imageService6,
            alt: "Secure pharmacovigilance Portal Management",
            btnname: "Contact Us",
            link: "/contact-us",
          },
        ]}
      />

      <CommonWhyMetter
        imagewhymetter={imagewhymetter}
        alt={
          "Trusted Pharma Website Design for UAE Firms - Website Development Agency"
        }
        heding={"Trusted Pharma Website Design for UAE-based Firms"}
        subheding={
          "We design pharma websites with a deep understanding of medical trust acquisition. From scientific clarity to regulatory prestige, every element is engineered for maximum professional impact."
        }
        lefttext={`  <p><b>Tailored for Medical Authority:</b> Each website is customized to support your firm's goals—whether that's securing government tenders, promoting clinical breakthroughs, or building international medical brand authority. Layouts focus on clarity.</p>
                        <p><b>Compliant & Precise Development:</b> we follow a rigorous development process that respects the high standards of your industry. From initial information security to final regulatory testing, we ensure your digital platform is stable and secure.</p>
                        `}
        righttext={`<p><b>Ongoing Support & Technical SEO:</b> A professional pharma website is a long-term medical asset. Post-launch, we provide reliable support and continuous SEO updates, ensuring your firm remains visible and effective as health standards evolve.</p>
                            `}
      />
      <CommonProtfolio />

      <DevelopmentServices />

      <CommonCostBreakdown
        heading="Pharma Website Design Dubai- Cost Breakdown"
        description="Choose specialized pharmaceutical website design and development solutions designed to strengthen your digital presence and build medical trust in the UAE."
      />
      <IndustryGrid />

      <CommonWhyWebsiteDevelopment
        heding={"Medical Website Solutions for Specialized Firms"}
        subheding={
          "We build healthcare websites that adapt to the specific focus of your pharma firm. Every platform is planned around your product portfolio, scientific expertise, and client engagement goals."
        }
        lefttext={`<p><b>Generic Drug Manufacturing:</b> We create comprehensive websites that highlight quality assurance, manufacturing scale, and regional distribution networks, emphasizing affordability and reliability.</p>
                                <p><b>Life Sciences & Biotech:</b> For R&D firms, our designs focus on clinical research pipelines, scientific frameworks, and innovation stories, positioning you as a leader in medical discovery. </p>
                                <p><b>Medical Devices & Diagnostics:</b> Websites for equipment vendors focus on technical methodology, training support, and certification levels, showcasing your ability to provide precision medical tools. </p>
                                <p><b>Specialty & Rare Diseases:</b> We design platforms for specialized firms that focus on patient community support and medical education, utilizing detailed patient portals and doctor resource hubs.</p>
                            `}
        rightimage={imagewhydevelopment}
        alt={
          "Why Choose Website Development Agency for Pharma Website Development"
        }
      />

      <Team />

      <CommonClientTestimonials
        testimonials={[
          {
            id: 1,
            name: "Dr. Alan Grant",
            text: "Website Development Agency built a digital presence that perfectly reflects our medical standards. Our new HCP portal has significantly improved our engagement with local doctors.",
            image: imagetestimonial1,
          },
          {
            id: 2,
            name: "Sarah Al-Ghazali",
            text: "A highly professional team with a deep understanding of the healthcare sector. They delivered a compliant, authoritative website that has become a key driver for our clinical study leads.",
            image: imagetestimonial2,
          },
          {
            id: 3,
            name: "Richard Miller",
            text: "Excellent service from start to finish. Our search rankings for specialized medical terms have improved dramatically, and the site's pharmaceutical compliance is exceptional.",
            image: imagetestimonial3,
          },
        ]}
      />

      <LocationService activeLocation="dubai" />

      <CommonFaqSection
        faqs={[
          {
            q: "How long does it take to build a professional pharma website?",
            a: "A high-authority pharmaceutical website typically takes 8 to 12 weeks, depending on the depth of medical content and the number of secure HCP portals required.",
          },
          {
            q: "Do you ensure compliance with UAE health regulations?",
            a: "Yes, we build with a focus on compliance, ensuring drug information is handled according to MOHAP and international health authority guidelines.",
          },
          {
            q: "How do you handle secure physician login areas?",
            a: "We implement advanced, encrypted authentication systems for HCP portals, ensuring sensitive clinical data is only accessible to authorized medical professionals.",
          },
          {
            q: "Can we have a section for reporting adverse events?",
            a: "Absolutely. We build secure, easy-to-use pharmacovigilance forms that follow standard medical reporting formats to ensure patient safety and compliance.",
          },
          {
            q: "Will the website be optimized for mobile HCP access?",
            a: "Yes, we ensure all clinical portals and drug guides are fully responsive, so doctors can access critical medical information quickly on their tablets and phones.",
          },
          {
            q: "Can you integrate our CRM for medical representative lead management?",
            a: "Yes, we can securely integrate lead capture forms with your existing CRM software for seamless medical rep follow-up and engagement.",
          },
        ]}
      />
    </>
  );
};

export default page;
