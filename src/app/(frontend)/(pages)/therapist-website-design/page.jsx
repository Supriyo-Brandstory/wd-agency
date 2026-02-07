import React from "react";
import CommonBanner2 from "../../component/pages/common/CommonBanner2";
import imagebanner from "@/app/(frontend)/assets/images/cybersecurity-website-design/banner.webp";
import CommonIntroduction from "../../component/pages/common/CommonIntroduction";
import imageintro1 from "@/app/(frontend)/assets/images/cybersecurity-website-design/intro-1.webp";
import imageintro2 from "@/app/(frontend)/assets/images/cybersecurity-website-design/intro-2.webp";
import CommonWhyMetter from "../../component/pages/common/CommonWhyMetter";
import imagewhymetter from "@/app/(frontend)/assets/images/cybersecurity-website-design/why.webp";
import CommonInduestriesServices from "../../component/pages/common/CommonInduestriesServices";
import CommonWhyWebsiteDevelopment from "../../assets/style/common/CommonWhyWebsiteDevelopment";
import imagewhydevelopment from "@/app/(frontend)/assets/images/cybersecurity-website-design/why-choose.webp";
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
import DemoTemplate from "../../component/pages/home/DemoTemplate";
import IndustryGrid from "../../component/pages/common/IndustryGrid";

const page = () => {
  return (
    <>
      <CommonBanner2
        bg={imagebanner}
        alt={"Therapist & Mental Health Website Design Agency in Dubai, UAE"}
        heding={"Therapist Website Design Agency in Dubai, UAE"}
        subtitle={
          "We build compassionate, high-trust websites for therapists, psychologists, and wellness clinics that <br>emphasize empathy, professional expertise, and patient confidentiality in Dubai and the UAE."
        }
      />

      <CommonIntroduction
        heding={"Therapist Website Design & Development"}
        text1={` <p>In the field of mental health and therapy, your website is often the first point of contact for individuals seeking support. For therapists and psychologists in Dubai, a digital presence must offer more than just information—it must provide a sense of safety, calm, and professional reliability. A professional website is essential for building the deep trust necessary for therapeutic engagement.</p>
                 <p>Potential clients look for practitioners who demonstrate a balance of clinical expertise and empathetic understanding. A well-engineered website helps you bridge the gap between human vulnerability and professional care, positioning your practice as a trusted sanctuary for wellness in the region.</p>
                    `}
        text2={`  <p>Modern therapy websites must prioritize ease of connection and privacy, incorporating features like secure appointment booking, educational wellness resources, and intuitive navigation. We focus on creating digital environments that project an image of professional warmth and uncompromising clinical standards.</p>
                <p><a href='/'>Website Development Agency</a> specializes in engineering high-impact websites for the mental health and wellness sector. We design responsive, performance-optimized platforms that highlight your therapeutic approach and bolster patient trust in a sensitive market.</p>
                    `}
        imageintro1={imageintro1}
        alt1={
          "Specialized Therapist Website Design in Dubai - Website Development Agency"
        }
        imageintro2={imageintro2}
        alt2={
          "Therapist Web Development Company UAE - Website Development Agency"
        }
      />

      <DemoTemplate
        title="Therapist & Wellness Website Designs- Explore Templates"
        description="Compassionate and professional therapy website designs in Dubai, starting at AED 1,500. Launch your <br>wellness brand quickly with elegant, high-performance designs. Get fast delivery today."
        activetaburl={"medical"}
      />

      <CommonInduestriesServices
        heding={"Therapist Website Design in Dubai, UAE- Our Services"}
        subheding="We provide comprehensive digital solutions designed to help therapists build trust and grow their practice in the UAE."
      />

      <CommonWhyMetter
        imagewhymetter={imagewhymetter}
        alt={
          "Trusted Therapist Website Design for UAE Practices - Website Development Agency"
        }
        heding={"Trusted Therapist Website Design for UAE-based Practices"}
        subheding={
          "We design wellness websites with a deep understanding of patient trust acquisition. From service clarity to clinical prestige, every element is engineered for maximum professional impact."
        }
        lefttext={`  <p><b>Tailored for Clinical Empathy:</b> Each website is customized to support your practice's goals—whether that's securing high-value corporate mental health contracts, promoting specialized child therapy, or building local brand authority. Layouts focus on calm.</p>
                        <p><b>Precise & Sensitive Development:</b> we follow a rigorous development process that respects the high standards of your industry. From initial design to final load testing, we ensure your digital platform is stable, fast, and secure.</p>
                        `}
        righttext={`<p><b>Ongoing Support & Wellness SEO:</b> A professional therapy website is a long-term community asset. Post-launch, we provide reliable support and continuous SEO updates, ensuring your practice remains visible and effective as health standards evolve.</p>
                            `}
      />
      <CommonProtfolio />

      <DevelopmentServices />

      <CommonCostBreakdown
        heading="Therapist Website Design Dubai- Cost Breakdown"
        description="Choose specialized therapist website design and development solutions designed to strengthen your digital presence and build patient trust in the UAE."
      />
      <IndustryGrid />

      <CommonWhyWebsiteDevelopment
        heding={"Comprehensive Wellness Solutions for Your Practice"}
        subheding={
          "We build medical websites that adapt to the specific focus of your mental health practice. Every platform is planned around your therapeutic focus, clinical expertise, and client engagement goals."
        }
        lefttext={`<p><b>Counselling & Psychotherapy:</b> We create compassionate websites that highlight treatment specializations, individual approach, and patient stories, emphasizing safety and personal growth.</p>
                                <p><b>Child & Adolescent Therapy:</b> For pediatric specialists, our designs focus on family trust, developmental expertise, and play-based healing, positioning you as a key partner for parents in Dubai.</p>
                                <p><b>Corporate Wellness Consulting:</b> Websites for corporate mental health firms focus on organizational resilience, employee wellbeing frameworks, and professional scale, showcasing your ability to support local businesses.</p>
                                <p><b>Specialized Support Groups:</b> We design platforms for specialized groups that focus on community engagement, peer support stories, and resource hubs, utilizing detailed event pages and member portals.</p>
                            `}
        rightimage={imagewhydevelopment}
        alt={
          "Why Choose Website Development Agency for Therapist Website Development"
        }
      />

      <Team />

      <CommonClientTestimonials
        testimonials={[
          {
            id: 1,
            name: "Dr. Sarah Johnson",
            text: "Website Development Agency built a digital presence that perfectly reflects our clinic's calming ethos. Our new site has significantly improved our ability to connect with individuals seeking support.",
            image: imagetestimonial1,
          },
          {
            id: 2,
            name: "Laila Al-Ghazali",
            text: "A highly professional team with a deep understanding of the wellness sector. They delivered a stunning, authoritative website that has become a key driver for our international patient leads.",
            image: imagetestimonial2,
          },
          {
            id: 3,
            name: "Robert Miller",
            text: "Excellent service from start to finish. Our search rankings for specialized therapy terms have improved dramatically, and the site's performance is exceptional.",
            image: imagetestimonial3,
          },
        ]}
      />

      <LocationService activeLocation="dubai" />

      <CommonFaqSection
        faqs={[
          {
            q: "How long does it take to build a professional therapist website?",
            a: "A high-authority wellness website typically takes 4 to 8 weeks, depending on the depth of therapeutic content and the number of secure resource portals required.",
          },
          {
            q: "Can you provide specialized SEO for 'psychologist Dubai'?",
            a: "Yes, we offer specialized SEO strategies that target high-intent wellness keywords to ensure your services are visible to those searching for professional support in the UAE.",
          },
          {
            q: "How do you ensure our website projects a sense of calm and safety?",
            a: "We utilize psychological design principles, including soft color palettes, clean typography, and spacious layouts, to create a welcoming and trustworthy digital environment.",
          },
          {
            q: "Can patients book an initial consultation directly from the site?",
            a: "Absolutely. We build secure, easy-to-use booking forms that allow patients to schedule their first session or a discovery call directly from your website.",
          },
          {
            q: "Will the website be optimized for mobile access?",
            a: "Yes, we ensure all pages and booking systems are fully responsive, as many individuals will reach out for support directly from their mobile devices.",
          },
          {
            q: "Can you integrate our existing clinical management software?",
            a: "Yes, we can securely integrate your website with many clinical management platforms for seamless patient booking, intake, and scheduling.",
          },
        ]}
      />
    </>
  );
};

export default page;
