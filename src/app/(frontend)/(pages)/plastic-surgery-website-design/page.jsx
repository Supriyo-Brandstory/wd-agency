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
        alt={"Plastic Surgery Website Design Agency in Dubai, UAE"}
        heding={"Plastic Surgery Website Design Agency in Dubai, UAE"}
        subtitle={
          "We build elegant, high-conversion websites for plastic surgeons and aesthetic clinics that emphasize <br>clinical excellence, patient results, and artistic precision in Dubai and the UAE."
        }
      />

      <CommonIntroduction
        heding={"Plastic Surgery Website Design & Development"}
        text1={` <p>In the world of aesthetic medicine, first impressions are everything. For plastic surgeons in Dubai, your website is your digital practice—where patients first experience your surgical philosophy, care standards, and the transformative power of your work. A professional, high-end website is essential for communicating your expertise and building the deep trust necessary for surgical consultation.</p>
                 <p>Potential patients look for surgeons who demonstrate a balance of medical rigor and artistic vision. A well-engineered website helps you bridge the gap between complex surgical procedures and the aesthetic results your patients desire, positioning your practice as a leader in refined aesthetic care.</p>
                    `}
        text2={`  <p>Modern plastic surgery websites must prioritize beautiful results, incorporating features like high-fidelity before-and-after galleries, interactive procedure guides, and secure virtual consultation booking. We focus on creating digital environments that project an image of clinical sophistication and uncompromising patient care standards.</p>
                <p><a href='/'>Website Development Agency</a> specializes in engineering high-impact websites for the plastic surgery and aesthetic medicine sector. We design responsive, performance-optimized platforms that highlight your surgical artistry and bolster patient trust in a competitive cosmetic market.</p>
                    `}
        imageintro1={imageintro1}
        alt1={
          "Specialized Plastic Surgery Website Design in Dubai - Website Development Agency"
        }
        imageintro2={imageintro2}
        alt2={
          "Plastic Surgery Web Development Company UAE - Website Development Agency"
        }
      />

      <DemoTemplate
        title="Plastic Surgery & Aesthetic Website Designs- Explore Templates"
        description="Elegant and high-conversion plastic surgery website designs in Dubai, starting at AED 1,500. Launch your <br>aesthetic practice quickly with stunning, high-performance designs. Get fast delivery today."
        activetaburl={"medical"}
      />

      <CommonIndustries
        heding={"Plastic Surgery Website Design in Dubai, UAE- Our Services"}
        subheding="We provide comprehensive digital solutions designed to help plastic surgeons showcase their results and grow in the UAE."
        services={[
          {
            title: "Artistic-First Clinical Design",
            desc: "We create elegant, high-trust website designs that emphasize your practice’s unique aesthetic. From curated color palettes to bespoke interactive elements, every detail is engineered to resonate with discerning aesthetic patients in Dubai.",
            img: imageService1,
            alt: "Custom Plastic Surgery Website Design Dubai",
            btnname: "Contact Us",
            link: "/contact-us",
          },
          {
            title: "High-Fidelity Before & After Galleries",
            desc: "Develop dedicated sections for patient transformations. We build secure, high-quality galleries that showcase your surgical results with clarity and professionalism, demonstrating your skill and commitment to aesthetic excellence.",
            img: imageService2,
            alt: "Patient Transformation Galleries",
            btnname: "Contact Us",
            link: "/contact-us",
          },
          {
            title: "Virtual Consultation Booking",
            desc: "Streamline the patient intake process with secure virtual consultation booking forms. We build intuitive systems that allow new patients to easily schedule their initial meeting, improving your practice's lead capture and engagement.",
            img: imageService3,
            alt: "Secure Aesthetic Consultation Booking",
            btnname: "Contact Us",
            link: "/contact-us",
          },
          {
            title: "Aesthetic SEO for High-Value Leads",
            desc: "Improve your practice's visibility for specialized aesthetic keywords. We optimize your site for competitive search terms like 'plastic surgeon Dubai' or 'rhinoplasty UAE,' ensuring your expertise is visible to those searching for refined care.",
            img: imageService4,
            alt: "SEO for Plastic Surgery Clinics Dubai",
            btnname: "Contact Us",
            link: "/contact-us",
          },
          {
            title: "Responsive & High-Performance Architecture",
            desc: "Your website must reflect the precision of your work. We build fast-loading, responsive platforms that deliver a flawless experience on all devices, ensuring your results look stunning everywhere.",
            img: imageService5,
            alt: "Mobile Friendly Aesthetic Website",
            btnname: "Contact Us",
            link: "/contact-us",
          },
          {
            title: "Secure Patient Portals & Privacy",
            desc: "We practice medical-grade security. Your website is built on a highly secure foundation with advanced encryption, ensuring patient information and inquiries are handled with the highest standards of confidentiality.",
            img: imageService6,
            alt: "Secure Patient Information Management",
            btnname: "Contact Us",
            link: "/contact-us",
          },
        ]}
      />

      <CommonWhyMetter
        imagewhymetter={imagewhymetter}
        alt={
          "Trusted Plastic Surgery Website Design for UAE Practices - Website Development Agency"
        }
        heding={
          "Trusted Plastic Surgery Website Design for UAE-based Practices"
        }
        subheding={
          "We design aesthetic medicine websites with a deep understanding of patient trust acquisition. From service clarity to artistic prestige, every element is engineered for maximum emotional impact."
        }
        lefttext={`  <p><b>Tailored for Clinical Elegance:</b> Each website is customized to support your practice's unique brand—whether that's focused on facial harmony, body contouring, or non-invasive rejuvenation. Layouts focus on beauty and professional credibility.</p>
                        <p><b>Artisanal & Precise Development:</b> we follow a meticulous development process that respects the high standards of your industry. From initial pixel-perfect design to final performance testing, we ensure your digital platform is impeccable.</p>
                        `}
        righttext={`<p><b>Ongoing Support & Aesthetic SEO:</b> A professional aesthetic website is an evolving brand asset. Post-launch, we provide reliable support and continuous SEO updates, ensuring your practice remains visible and effective as trends evolve.</p>
                            `}
      />
      <CommonProtfolio />

      <DevelopmentServices />

      <CommonCostBreakdown
        heading="Plastic Surgery Website Design Dubai- Cost Breakdown"
        description="Choose specialized aesthetic website design and development solutions designed to strengthen your digital presence and build patient trust in the UAE."
      />
      <IndustryGrid />

      <CommonWhyWebsiteDevelopment
        heding={"Aesthetic Website Solutions for Specialized Surgeons"}
        subheding={
          "We build medical websites that adapt to the specific focus of your practice. Every platform is planned around your procedure catalog, surgical expertise, and patient engagement goals."
        }
        lefttext={`<p><b>Facial Plastic Surgery:</b> We create comprehensive websites that highlight rhinoplasty, facelifts, and eyelid surgery, emphasizing harmony, balance, and specialized skill.</p>
                                <p><b>Body Contouring & Sculpting:</b> For body specialists, our designs focus on liposuction, tummy tucks, and non-invasive fat reduction, showcasing transformational results and patient safety. </p>
                                <p><b>Breast & Reconstruction:</b> Websites for breast specialists focus on surgical options, patient education, and natural-looking results, utilizing detailed galleries and procedure guides. </p>
                                <p><b>Non-Invasive Med-Spas:</b> We design platforms for rejuvenation centers that focus on fillers, Botox, and skin health, utilizing vibrant product pages and appointment booking systems.</p>
                            `}
        rightimage={imagewhydevelopment}
        alt={
          "Why Choose Website Development Agency for Plastic Surgery Website Development"
        }
      />

      <Team />

      <CommonClientTestimonials
        testimonials={[
          {
            id: 1,
            name: "Dr. Elena Rossi",
            text: "Website Development Agency built a digital presence that perfectly reflects our clinical standards. Our new before-and-after galleries are a key factor in our consultation growth.",
            image: imagetestimonial1,
          },
          {
            id: 2,
            name: "Laila Al-Rashid",
            text: "A highly professional team with a deep understanding of the aesthetic sector. They delivered a stunning, authoritative website that has become a key driver for our international patient leads.",
            image: imagetestimonial2,
          },
          {
            id: 3,
            name: "James Anderson",
            text: "Excellent service from start to finish. Our search rankings for specialized surgery terms have improved dramatically, and the visual performance of the site is exceptional.",
            image: imagetestimonial3,
          },
        ]}
      />

      <LocationService activeLocation="dubai" />

      <CommonFaqSection
        faqs={[
          {
            q: "How long does it take to build a professional aesthetic website?",
            a: "A high-fidelity plastic surgery website typically takes 6 to 10 weeks, depending on the number of galleries and the depth of procedural content required.",
          },
          {
            q: "Can you provide specialized SEO for 'rhinoplasty' or 'liposuction'?",
            a: "Yes, we offer specialized SEO strategies that target high-intent surgical terms to ensure your practice is visible to patients searching for refined care in the UAE.",
          },
          {
            q: "How do you handle medical photography and galleries?",
            a: "We implement secure, high-resolution galleries that are optimized for performance, ensuring your before-and-after cases look stunning but load fast for your patients.",
          },
          {
            q: "Can patients book consultations directly online?",
            a: "Absolutely. We build secure booking systems that allow patients to schedule initial consultations or virtual meetings directly from your website.",
          },
          {
            q: "Is the patient information collected on the site secure?",
            a: "Yes, we implement advanced healthcare-grade security measures including SSL encryption and secure database handling to ensure patient privacy is always protected.",
          },
          {
            q: "Can you help with multilingual content for international patients?",
            a: "Yes, we build multilingual websites (e.g., English, Arabic, Russian) that help you connect with the diverse international clientele looking for aesthetic surgery in Dubai.",
          },
        ]}
      />
    </>
  );
};

export default page;
