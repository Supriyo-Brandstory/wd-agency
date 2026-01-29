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
        alt={"Chiropractor Web Design Agency in Dubai, UAE"}
        heding={"Chiropractor Web Design Agency in Dubai, UAE"}
        subtitle={
          "We build professional websites for chiropractors that increase visibility, attract more patients, <br>and make booking easy. Grow your wellness clinic in Dubai with a premium digital presence."
        }
      />

      <CommonIntroduction
        heding={"Chiropractor Website Design & Development"}
        text1={` <p>In Dubai’s thriving wellness and healthcare market, potential patients increasingly turn to the internet to find trusted chiropractic care. A professional, informative website serves as your clinic's digital headquarters, helping you explain the benefits of chiropractic treatment, build trust with prospective patients, and showcase your expertise.</p>
                 <p>Today’s patients look for clinics that offer ease of navigation, clear information about spinal health, and simple ways to book consultations. A well-designed website helps your practice stand out in a competitive medical landscape and converts local searches into lifelong patients.</p>
                    `}
        text2={`  <p>A modern chiropractor website not only showcases your services like spinal adjustments, sports injury recovery, and postural correction but also builds credibility through practitioner profiles, treatment videos, and patient success stories. Integration of secure booking systems and educational blogs enhances patient engagement and streamlines your clinic's operations.</p>
                <p><a href='/'>Website Development Agency</a> specializes in creating high-impact wellness websites tailored for Dubai’s health-conscious residents. We design responsive, SEO-optimized platforms that highlight your clinical expertise and improve patient acquisition in a digital-first world.</p>
                    `}
        imageintro1={imageintro1}
        alt1={
          "Specialized Chiropractor Website Design in Dubai - Website Development Agency"
        }
        imageintro2={imageintro2}
        alt2={
          "Chiropractic Web Development Company UAE - Website Development Agency"
        }
      />

      <DemoTemplate
        title="Chiropractor Website Designs- Explore Templates"
        description="Affordable wellness and medical clinic website design in Dubai, starting at AED 1,500. Launch your <br>healthcare practice quickly with modern, patient-focused designs. Get fast delivery today."
        activetaburl={"healthcare"}
      />

      <CommonIndustries
        heding={"Chiropractor Website Design in Dubai, UAE- Our Services"}
        subheding="We offer specialized digital solutions designed to help chiropractic practices in Dubai flourish."
        services={[
          {
            title: "Patient-Focused Website Design",
            desc: "We create calming, professional website designs that reflect the healing nature of your chiropractic practice. From clean layouts to intuitive navigation, every element is designed to make patients feel comfortable and confident in choosing your clinic for their spinal health needs.",
            img: imageService1,
            alt: "Custom Chiropractor Website Design Dubai",
            btnname: "Contact Us",
            link: "/contact-us",
          },
          {
            title: "Online Appointment Scheduling",
            desc: "Integrate a seamless booking system that allows new and existing patients to view your real-time availability and book their spinal assessments instantly. This 24/7 booking capability increases conversion rates while reducing administrative tasks for your clinic staff.",
            img: imageService2,
            alt: "Chiropractic Booking Systems",
            btnname: "Contact Us",
            link: "/contact-us",
          },
          {
            title: "Educational Content & Blog Hub",
            desc: "Establish your authority as a health leader with a dedicated educational hub. We build blog sections where you can share tips on posture, injury prevention, and wellness, helping to improve your SEO and provide continuous value to your Dubai-based patients.",
            img: imageService3,
            alt: "Health & Wellness Blog Design",
            btnname: "Contact Us",
            link: "/contact-us",
          },
          {
            title: "Responsive Mobile Experience",
            desc: "Many patients search for chiropractic relief while on the move. Our websites are fully optimized for mobile devices, ensuring that your contact details, service list, and booking engine are perfectly accessible on any smartphone or tablet.",
            img: imageService4,
            alt: "Mobile Friendly Wellness Website",
            btnname: "Contact Us",
            link: "/contact-us",
          },
          {
            title: "Practitioner Profiles & Video Intros",
            desc: "Build a personal connection before the first visit. We design comprehensive bio pages for your team, including space for video introductions and professional credentials, helping to alleviate patient anxiety and build immediate trust.",
            img: imageService5,
            alt: "Chiropractor Team Profiles",
            btnname: "Contact Us",
            link: "/contact-us",
          },
          {
            title: "Local SEO for Health Clinics",
            desc: "Rank higher in local Dubai searches. We optimize your website for keywords related to chiropractic care and physical therapy in your specific neighborhood, ensuring that patients in need of spinal health support find your clinic first.",
            img: imageService6,
            alt: "SEO for Chiropractors Dubai",
            btnname: "Contact Us",
            link: "/contact-us",
          },
        ]}
      />

      <CommonWhyMetter
        imagewhymetter={imagewhymetter}
        alt={
          "Trusted Chiropractor Website Design for UAE Clinics - Website Development Agency"
        }
        heding={"Trusted Chiropractor Website Design for UAE Clinics"}
        subheding={
          "We design wellness websites with a deep understanding of patient psychology and clinical professionalism. From service transparency to trust signals, every element is built to conversion."
        }
        lefttext={`  <p><b>Tailored for Wellness Growth:</b> Each website is customized to support your clinic's goals—whether that's increasing initial assessments, promoting specialized decompression therapy, or building long-term wellness plans. Our layouts focus on patient education and action.</p>
                        <p><b>Reliable & Health-Compliant:</b> We follow development practices that respect medical site standards. From secure contact forms to clear disclosure sections, we ensure your clinic's digital presence is professional, secure, and ready to serve the UAE community.</p>
                        `}
        righttext={`<p><b>Ongoing Support & SEO Optimization:</b> A website is a growing asset. Post-launch, we provide continuous support and local SEO updates, ensuring your chiropractic practice remains visible and effective as you expand your services in Dubai.</p>
                            `}
      />
      <CommonProtfolio />

      <DevelopmentServices />

      <CommonCostBreakdown
        heading="Chiropractor Website Design Dubai- Cost Breakdown"
        description="Choose chiropractic website development solutions designed to strengthen your clinical presence and attract more patients in the UAE."
      />
      <IndustryGrid />

      <CommonWhyWebsiteDevelopment
        heding={"Wellness Website Solutions for Every Specialization"}
        subheding={
          "We design chiropractic websites that adapt to the specific focus of your clinic. Every website is planned around your unique treatments, patient demographic, and clinic objectives."
        }
        lefttext={`<p><b>Family Chiropractic:</b> We build warm, approachable websites that resonate with parents and families, emphasizing safe care for all ages and comprehensive wellness plans for the entire household.</p>
                                <p><b>Sports & Performance:</b> For clinics focused on athlete recovery, our designs emphasize performance, biomechanics, and rapid injury return, using dynamic visuals and technical service descriptions to appeal to active individuals. </p>
                                <p><b>Corrective & Rehabilitative:</b> Websites for corrective clinics focus on long-term spinal health, utilizing educational diagrams and structured treatment journey pages to communicate the value of structural correction.</p>
                                <p><b>Multidisciplinary Wellness:</b> If your clinic offers massage, physiotherapy, or nutrition alongside chiropractic, we create clear service hierarchies that reflect your holistic approach to health.</p>
                            `}
        rightimage={imagewhydevelopment}
        alt={
          "Why Choose Website Development Agency for Chiropractor Website Development"
        }
      />

      <Team />

      <CommonClientTestimonials
        testimonials={[
          {
            id: 1,
            name: "Dr. Marc Stevens",
            text: "Website Development Agency transformed our clinic's online image. We've seen a 40% increase in new patient bookings since the new site launched. Highly recommended!",
            image: imagetestimonial1,
          },
          {
            id: 2,
            name: "Emily Watson",
            text: "Professional, responsive, and they truly understood the wellness sector. The new blog and booking features have made our practice much more efficient.",
            image: imagetestimonial2,
          },
          {
            id: 3,
            name: "Dr. Layla Hassan",
            text: "Fantastic experience from start to finish. Our SEO has improved tremendously, and we are now ranking on the first page for key chiropractic terms in Dubai.",
            image: imagetestimonial3,
          },
        ]}
      />

      <LocationService activeLocation="dubai" />

      <CommonFaqSection
        faqs={[
          {
            q: "How long does it take to build a chiropractor website?",
            a: "A professional chiropractor website typically takes 4 to 8 weeks, depending on the complexity of the design and the amount of health content required.",
          },
          {
            q: "Can patients book their sessions directly through the website?",
            a: "Yes, we integrate real-time booking engines that sync with your clinic's calendar, allowing patients to schedule and pay for their sessions 24/7.",
          },
          {
            q: "Will my website rank for 'Chiropractor in Dubai' search terms?",
            a: "Absolutely. We include local SEO optimization specifically tailored for your neighborhood and clinical focus to help you rank at the top of relevant search results.",
          },
          {
            q: "Is the website mobile-friendly?",
            a: "Yes, all our websites use responsive design, ensuring they look great and function perfectly on iPhones, Android devices, and all tablets.",
          },
          {
            q: "Can I add videos of adjustments and clinic tours?",
            a: "Yes, we highly recommend video content for wellness sites. We optimize video delivery to ensure it enhances the user experience without slowing down your site load times.",
          },
          {
            q: "Do you provide ongoing maintenance and security updates?",
            a: "Yes, we offer monthly maintenance plans that cover technical updates, regular backups, and security monitoring to keep your clinic's site safe and fast.",
          },
        ]}
      />
    </>
  );
};

export default page;
