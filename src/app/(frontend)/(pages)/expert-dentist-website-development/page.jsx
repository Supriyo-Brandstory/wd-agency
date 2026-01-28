import React from "react";
import CommonBanner2 from "../../component/pages/common/CommonBanner2";
import imagebanner from "@/app/(frontend)/assets/images/expert-dentist-website-development/banner.webp";
import CommonIntroduction from "../../component/pages/common/CommonIntroduction";
import imageintro1 from "@/app/(frontend)/assets/images/expert-dentist-website-development/intro-1.webp";
import imageintro2 from "@/app/(frontend)/assets/images/expert-dentist-website-development/intro-2.webp";
import CommonWhyMetter from "../../component/pages/common/CommonWhyMetter";
import imagewhymetter from "@/app/(frontend)/assets/images/expert-dentist-website-development/why.webp";
import CommonIndustries from "../../component/pages/common/CommonIndustries";
import imageService1 from "@/app/(frontend)/assets/images/expert-dentist-website-development/service-1.webp";
import imageService2 from "@/app/(frontend)/assets/images/expert-dentist-website-development/service-2.webp";
import imageService3 from "@/app/(frontend)/assets/images/expert-dentist-website-development/service-3.webp";
import imageService4 from "@/app/(frontend)/assets/images/expert-dentist-website-development/service-4.webp";
import imageService5 from "@/app/(frontend)/assets/images/expert-dentist-website-development/service-5.webp";
import imageService6 from "@/app/(frontend)/assets/images/expert-dentist-website-development/service-6.webp";
import CommonThreeCard from "../../component/pages/common/CommonThreeCard";
import imagecommon1 from "@/app/(frontend)/assets/images/e-commerce-web-development/responsive.png";
import imagecommon2 from "@/app/(frontend)/assets/images/e-commerce-web-development/Secure-Transactions.png";
import imagecommon3 from "@/app/(frontend)/assets/images/e-commerce-web-development/Multi-Language.png";
import imagecommon4 from "@/app/(frontend)/assets/images/e-commerce-web-development/Fast-Loading-Speed.png";
import imagecommon5 from "@/app/(frontend)/assets/images/e-commerce-web-development/Advanced-Search.png";
import imagecommon6 from "@/app/(frontend)/assets/images/e-commerce-web-development/AI-Driven.png";
import imagecommon7 from "@/app/(frontend)/assets/images/e-commerce-web-development/Analytics-Reporting-Dashboards.png";
import imagecommon8 from "@/app/(frontend)/assets/images/e-commerce-web-development/SEO-Friendly-Architecture.png";
import imagecommon9 from "@/app/(frontend)/assets/images/e-commerce-web-development/Scalable-Infrastructure.png";
import CommonDevelopmentProcess from "../../component/pages/common/CommonDevelopmentProcess";
import CommonWhyWebsiteDevelopment from "../../assets/style/common/CommonWhyWebsiteDevelopment";
import imagewhydevelopment from "@/app/(frontend)/assets/images/expert-dentist-website-development/why-choose.webp";
import CommonClientTestimonials from "../../component/pages/common/CommonClientTestimonials";
import imagetestimonial1 from "@/app/(frontend)/assets/images/testimonial/testimonial-1.webp";
import imagetestimonial2 from "@/app/(frontend)/assets/images/testimonial/testimonial-2.webp";
import imagetestimonial3 from "@/app/(frontend)/assets/images/testimonial/testimonial-3.webp";
import CommonFaqSection from "../../component/pages/common/CommonFaqSection";
import CommonServiceLocations from "../../component/pages/common/CommonServiceLocations";
import DevelopmentServices from "../../component/pages/home/DevelopmentServices";
import Team from "../../component/pages/about/Team";
import Portfolioimage1 from "@/app/(frontend)/assets/images/protfolio/healthcare-1.webp";
import Portfolioimage2 from "@/app/(frontend)/assets/images/protfolio/healthcare-3.webp";
import Portfolioimage3 from "@/app/(frontend)/assets/images/protfolio/healthcare-4.webp";
import RealEstatePortfolio from "../../component/pages/common/RealEstatePortfolio";
import LocationService from "../../component/pages/common/LocationService";
import CommonCostBreakdown from "../../component/pages/common/CommonCostBreakdown";
import CommonProtfolio from "../../component/pages/common/CommonProtfolio";
import DemoTemplate from "../../component/pages/home/DemoTemplate";

const page = () => {
  return (
    <>
      <CommonBanner2
        bg={imagebanner}
        alt={"Dentist Web Design Agency in Dubai, UAE"}
        heding={
          "Dentist Web Design Agency in Dubai, UAE"
        }
        subtitle={
          "We build dental clinic websites that increase visibility, attract more patients, and make <br>appointment booking easy. Our websites help clinics in Dubai, UAE stand out and grow online."
        }
      />

      <CommonIntroduction
        heding={"Dentist Website Design & Development"}
        text1={` <p>In Dubai’s fast‑growing healthcare and dental services market, patients increasingly rely on online research to find trusted dental professionals. A professional, well‑structured website serves as the digital front door for your practice, helping you attract new patients, explain treatment offerings, and communicate your clinic’s values clearly and confidently to a diverse local and expatriate population.</p>
                 <p>Today’s dental patients expect informative, easy‑to‑navigate websites that provide clear service details, professional profiles, and seamless appointment scheduling. With many clinics vying for attention, strong online visibility through a purpose‑built website helps your practice stand out in local searches and convert visitors into booked appointments.</p>
                    `}
        text2={`  <p>A modern dental website not only showcases services such as preventive care, cosmetic dentistry, orthodontics, and implants but also builds trust through features like team bios, patient testimonials, treatment galleries, and educational content. Integration of secure online forms for bookings and inquiries enhances patient convenience and simplifies clinic workflows.</p>
                <p><a href='/'>Website Development Agency</a> specializes in creating high‑impact dental websites tailored for Dubai’s healthcare landscape. We design responsive, SEO‑optimized platforms that highlight your clinic’s expertise, bolster online visibility, and improve patient engagement. Our solutions help dental practices attract more patients, enhance brand authority, and grow sustainably in a competitive digital environment.</p>
                    `}
        imageintro1={imageintro1}
        alt1={
          "Specialized Dentist Website Design in Dubai - Website Development Agency"
        }
        imageintro2={imageintro2}
        alt2={"Dental Web Development Company UAE - Website Development Agency"}
      />

      <DemoTemplate title="Dental Website Designs- Explore Templates" description="Affordable hospital and clinic website design in Dubai, starting at AED 1,500. Launch your healthcare <br>website quickly with modern, responsive designs. Get fast delivery today." activetaburl={"healthcare"} />


      <CommonIndustries
        heding={"Dentist Website Design in Dubai, UAE- Our Services"}
        subheding="We offer full suite of digital solutions designed to help dental practices in Dubai grow and succeed."
        services={[
          {
            title: "Custom Website Design & Development",
            desc: "We craft unique, fully tailored websites that perfectly capture your dental practice’s brand identity in Dubai. From elegant color schemes and professional imagery to intuitive layouts, every element reflects your clinic’s personality, premium services, and patient-focused approach, creating a memorable first impression for visitors.",
            img: imageService1,
            alt: "Custom Dental Website Design Dubai",
            btnname: "Contact Us",
            link: "/contact-us",
          },
          {
            title: "Responsive & Mobile-Friendly Design",
            desc: "Our websites deliver a flawless experience on desktops, tablets, and smartphones with fully responsive, mobile-optimized designs. Fast-loading pages and touch-friendly navigation ensure patients in Dubai can easily explore your site, view treatments, and book appointments conveniently from any device, anytime.",
            img: imageService2,
            alt: "Mobile Friendly Dental Website",
            btnname: "Contact Us",
            link: "/contact-us",
          },
          {
            title: "Online Appointment Booking Systems",
            desc: "We integrate advanced, real-time online scheduling tools that allow patients to view availability, select preferred times, and book appointments instantly. This efficient system reduces phone calls, streamlines your front-desk operations, and provides a modern, hassle-free booking experience for your Dubai patients.",
            img: imageService3,
            alt: "Dental Appointment Booking Systems",
            btnname: "Contact Us",
            link: "/contact-us",
          },
          {
            title: "Secure Patient Portals",
            desc: "Empower your patients with secure, private portals where they can access treatment records, complete digital forms, view upcoming appointments, and communicate confidentially with your team. Built with top-tier encryption, these portals ensure full compliance with UAE data protection standards while enhancing trust.",
            img: imageService4,
            alt: "Secure Patient Portals for Dentists",
            btnname: "Contact Us",
            link: "/contact-us",
          },
          {
            title: "Before & After Smile Galleries",
            desc: "Showcase your expertise through stunning before-and-after galleries featuring high-resolution images of cosmetic transformations, implants, veneers, and smile makeovers. Professionally organized and easy to navigate, these visual portfolios inspire confidence and help prospective patients in Dubai envision their own results.",
            img: imageService5,
            alt: "Dental Before and After Galleries",
            btnname: "Contact Us",
            link: "/contact-us",
          },
          {
            title: "Virtual Consultation Setup",
            desc: "Offer convenient virtual consultations directly through your website, allowing patients to connect with your dentists online via secure video calls. This feature is perfect for initial assessments, follow-ups, and attracting busy or international patients in Dubai’s fast-paced, tech-savvy environment.",
            img: imageService6,
            alt: "Virtual Consultation for Dental Patients",
            btnname: "Contact Us",
            link: "/contact-us",
          },
        ]}
      />

            <CommonWhyMetter
        imagewhymetter={imagewhymetter}
        alt={
          "Trusted Dental Website Design for UAE Clinics - Website Development Agency"
        }
        heding={"Trusted Dental Website Design for UAE-based Clinics"}
        subheding={
          "We design dental websites with a clear understanding of how clinics operate in the UAE. From service clarity to patient trust signals, every element is structured to appeal to local audiences while reflecting medical professionalism."
        }
        lefttext={`  <p><b>Tailored for Clinic Growth:</b> Each website is customised to support your clinic’s goals- whether that’s increasing appointment enquiries, promoting specialised treatments, or building long-term patient trust. Layouts, content flow, and calls-to-action are designed to convert visitors into patients.</p>
                        <p><b>Efficient & Reliable Development:</b> With custom and platform-based development approach we follow a streamlined development process ensures timely delivery without compromising quality. From planning to launch, we maintain transparency and structure, making the entire experience smooth and predictable for clinic owners.</p>
                        `}
        righttext={`<p><b>SEO & Ongoing Support:</b> We build websites with strong local SEO foundations to improve visibility across UAE search results. Post-launch, our team provides reliable support and updates, ensuring your dental website remains secure, fast, and effective as your clinic grows.</p>
                            `}
      />
      <CommonProtfolio />
      
      <DevelopmentServices />

            <CommonCostBreakdown
        heading="Dental Website Design Dubai- Cost Breakdown"
        description="Choose dental website design and development solutions designed to strengthen your digital presence and support sustainable growth in the UAE."
      />


      <CommonWhyWebsiteDevelopment
        heding={"Dental Website Solutions for Every Type of Practice"}
        subheding={
          "We design dental websites that adapt to the unique focus of each clinic across the UAE. Every website is planned around patient behaviour, treatment priorities, and clinic objectives- ensuring clarity, trust, and strong digital performance in a competitive healthcare market."
        }
        lefttext={`<p><b>General Dental Clinics:</b> For multi-service practices, we create structured websites that clearly present treatments, clinic information, and easy appointment pathways. Clear layouts and patient-friendly navigation help visitors quickly understand services and take action.</p>
                                <p><b>Cosmetic & Aesthetic Dentistry:</b> Websites for cosmetic clinics are designed to highlight visual results and patient confidence. We incorporate treatment-focused pages, image galleries, and conversion-driven layouts that support enquiries for high-value. </p>
                                <p><b>Orthodontic & Paediatric:</b> Orthodontic websites focus on education and long-term care, presenting treatments in a simple, reassuring way. For paediatric clinics, we design warm, approachable interfaces that appeal to both parents and children while maintaining professional credibility.</p>
                                <p>Specialist Dental Practices:</b> For clinics offering advanced dental services, we build content-rich websites that emphasise expertise, qualifications, and referral-friendly structures. These platforms support specialist positioning while remaining accessible and easy for patients to navigate.</p>
                            `}
        rightimage={imagewhydevelopment}
        alt={
          "Why Choose Website Development Agency for Dentist Website Development"
        }
      />

      <Team />

      <CommonClientTestimonials
        testimonials={[
          {
            id: 1,
            name: "Dr. Al Faisal",
            text: "Website Development Agency transformed our online presence. The new booking system has reduced our front-desk workload by 50% and patients love the ease of use.",
            image: imagetestimonial1,
          },
          {
            id: 2,
            name: "Dr. Sarah Miller",
            text: "Highly professional and experienced team. They understood the clinical requirements perfectly and delivered a stunning, high-converting website for our ortho clinic.",
            image: imagetestimonial2,
          },
          {
            id: 3,
            name: "Dr. Rajesh Gupta",
            text: "Excellent service from start to finish. Our search rankings improved dramatically, and we've seen a steady increase in new patient enquiries.",
            image: imagetestimonial3,
          },
        ]}
      />

      <LocationService activeLocation="dubai" />

      <CommonFaqSection
        faqs={[
          {
            q: "How long does it take to build a professional dentist website?",
            a: "Typically, a professional dentist website can take anywhere from 4 to 12 weeks, depending on the complexity, features required, and content availability.",
          },
          {
            q: "Do you provide SEO services specifically for dental clinics?",
            a: "Yes, we offer specialized Local SEO services designed for dental clinics in Dubai to help you rank higher in local search results and attract more relevant patients.",
          },
          {
            q: "Can I update my website content myself after it's launched?",
            a: "Absolutely. We integrate user-friendly Content Management Systems (CMS) like WordPress, allowing you to easily update text, images, and other content without technical knowledge.",
          },
          {
            q: "What kind of ongoing support do you offer?",
            a: "Our ongoing support includes security updates, performance monitoring, content management assistance, technical troubleshooting, and regular backups to ensure your website runs smoothly.",
          },
          {
            q: "How do you ensure the security and privacy of patient data on my website?",
            a: "We implement robust security measures including SSL certificates, secure patient portals, regular backups, and ensure full compliance with UAE's data privacy regulations for sensitive patient information.",
          },
          {
            q: "Can my website integrate with my existing practice management software?",
            a: "Yes, we specialize in API integrations to seamlessly connect your new website with your current practice management software, streamlining administrative tasks and patient data flow.",
          },
        ]}
      />
    </>
  );
};

export default page;
