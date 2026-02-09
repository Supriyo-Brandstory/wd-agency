import React from "react";
import CommonBanner2 from "../../component/pages/common/CommonBanner2";
import imagebanner from "@/app/(frontend)/assets/images/healthcare-web-development/banner.webp";
import CommonIntroduction from "../../component/pages/common/CommonIntroduction";
import imageintro1 from "@/app/(frontend)/assets/images/healthcare-web-development/introimg-1.jpg";
import imageintro2 from "@/app/(frontend)/assets/images/healthcare-web-development/introimg-2.jpg";
import CommonWhyMetter from "../../component/pages/common/CommonWhyMetter";
import imagewhymetter from "@/app/(frontend)/assets/images/healthcare-web-development/healthcare-website-design-services.webp";
import CommonIndustries from "../../component/pages/common/CommonIndustries";
import imageService1 from "@/app/(frontend)/assets/images/healthcare-web-development/Healthcare-Website-Design.webp";
import imageService2 from "@/app/(frontend)/assets/images/healthcare-web-development/Doctor-Hospital-Websites.webp";
import imageService3 from "@/app/(frontend)/assets/images/healthcare-web-development/Appointment-Booking-System.webp";
import imageService4 from "@/app/(frontend)/assets/images/healthcare-web-development/Telemedicine-Integration.webp";
import imageService5 from "@/app/(frontend)/assets/images/healthcare-web-development/Patient-Portals.webp";
import imageService6 from "@/app/(frontend)/assets/images/healthcare-web-development/Medical-Ecommerce-Integration.webp";
import imageService7 from "@/app/(frontend)/assets/images/healthcare-web-development/Content-Management-Systems.webp";
import imageService8 from "@/app/(frontend)/assets/images/e-commerce-web-development/Payment-Gateway-Integration.webp";

import CommonWhyWebsiteDevelopment from "../../assets/style/common/CommonWhyWebsiteDevelopment";
import imagewhydevelopment from "@/app/(frontend)/assets/images/healthcare-web-development/Why-Website-Development.webp";
import CommonClientTestimonials from "../../component/pages/common/CommonClientTestimonials";
import imagetestimonial1 from "@/app/(frontend)/assets/images/testimonial/testimonial-1.webp";
import imagetestimonial2 from "@/app/(frontend)/assets/images/testimonial/testimonial-2.webp";
import imagetestimonial3 from "@/app/(frontend)/assets/images/testimonial/testimonial-3.webp";
import CommonFaqSection from "../../component/pages/common/CommonFaqSection";
import DevelopmentServices from "../../component/pages/home/DevelopmentServices";


import LocationService from "../../component/pages/common/LocationService";

import CommonCostBreakdown from "../../component/pages/common/CommonCostBreakdown";
import DemoTemplate from "../../component/pages/home/DemoTemplate";
import IndustryGrid from "../../component/pages/common/IndustryGrid";
import CommonProtfolio from "../../component/pages/common/CommonProtfolio";
import Team from "../../component/pages/about/Team";

const page = () => {
  return (
    <>
      <CommonBanner2
        bg={imagebanner}
        alt="Healthcare Web Development Banner - Website Development Agency"
        heding={
          "Healthcare Web Design in Dubai, UAE"
        }
        subtitle={
          "Empowering healthcare providers in Dubai with secure, user-friendly websites <br>that build patient trust, enhance engagement, and support seamless interactions."
        }
      />

      <CommonIntroduction
        heding={"Healthcare Website Design UAE"}
        text1={` <p>Healthcare in the UAE is rapidly undergoing digital transformation, reshaping how patients interact with medical providers. With online consultations, appointment scheduling, and patient portals becoming standard expectations, patients now judge healthcare services not only by clinical expertise but also by the quality of their digital experience.</p>
                    <p>Today’s healthcare website is no longer just an informational platform- it functions as a virtual clinic. Patients expect to find accurate doctor availability, book appointments effortlessly, access reports, and consult physicians remotely through telemedicine. When these capabilities are missing or poorly implemented, it leads to frustration, missed appointments, administrative overload, and reduced patient satisfaction.</p>
                    `}
        text2={` <p>At the same time, healthcare providers must ensure strict data security, privacy compliance, and secure system integrations. Without a professionally developed website infrastructure, clinics and hospitals risk data breaches, operational inefficiencies, and reputational damage, making digital reliability a necessity rather than an optional enhancement.</p> 
          <p><a href="/">Website Development Agency</a> provides end-to-end healthcare website development services in Dubai, UAE, tailored for clinics, hospitals, and medical institutions of all sizes. We design secure, patient-friendly, and scalable healthcare websites with integrated appointment systems, patient portals, telemedicine interfaces, and responsive designs. Our solutions focus on improving patient engagement, operational efficiency, and digital trust- ensuring your healthcare brand delivers seamless care experiences anytime, anywhere.</p>
                    `}
        imageintro1={imageintro1}
        alt1="Healthcare Website Design UAE - Website Development Agency"
        imageintro2={imageintro2}
        alt2="Healthcare Website Development Company in Dubai - Website Development Agency"
      />
      <DemoTemplate
        title="Healthcare Website Designs- Explore Templates"
        description="Affordable hospital and clinic website design in Dubai, starting at AED 1,500. Launch your healthcare <br>website quickly with modern, responsive designs. Get fast delivery today."
        activetaburl={"healthcare"}
      />

      <CommonIndustries
        heding={"Custom Healthcare Web Design Services"}
        subheding="At Website Development Agency, we don’t just build websites, we develop powerful healthcare platforms that enhance patient experiences, streamline operations, and search engine friendly. Our specialized services include:"
        services={[
          {
            title: "Healthcare Website Design",
            desc: "We create modern, premium, easy-to-navigate designs that inspire trust and professionalism. Each design is mobile-first, easily accessible by smartphone, tablet and desktop interface.",
            img: imageService1,
            alt: "Healthcare Website Design - Website Development Agency",
            btnname: "Contact Us",
            link: "/contact-us",
          },
          {
            title: "Doctor & Hospital Websites",
            desc: "From individual practitioner sites to complex multi-department hospital portals, we build fully custom websites. Every element from custom layout to functionality, is crafted to highlight specialties.",
            img: imageService2,
            alt: "Doctor & Hospital Websites - Website Development Agency",
            btnname: "Contact Us",
            link: "/contact-us",
          },
          {
            title: "Appointment Booking System",
            desc: "Streamline appointments with a booking system. Patients book online, receive reminders, and sync with their calendars, which reduces no-shows and time on administration tasks.",
            img: imageService3,
            alt: "Appointment Booking System - Website Development Agency",
            btnname: "Contact Us",
            link: "/contact-us",
          },
          {
            title: "Telemedicine Integration",
            desc: "Enable video consultations, secure messaging with doctors, and digital prescriptions. This is a must-have feature for modern-day healthcare providers who are catering patients remotely.",
            img: imageService4,
            alt: "Telemedicine Integration - Website Development Agency",
            btnname: "Contact Us",
            link: "/contact-us",
          },
          {
            title: "Patient Portals",
            desc: "Give patients secure login access with medical history, lab work results, and prescriptions with an access to their health record. This promotes transparency and empowers patients to manage own care.",
            img: imageService5,
            alt: "Patient Portal Development - Website Development Agency",
            btnname: "Contact Us",
            link: "/contact-us",
          },
          {
            title: "Medical Ecommerce Integration",
            desc: "Extend any products/services through e-commerce. Sell medicines, healthcare products, and wellness packages directly from your website with secure order and delivery options.",
            img: imageService6,
            alt: "Medical Ecommerce Integration Services - Website Development Agency",
            btnname: "Contact Us",
            link: "/contact-us",
          },
          {
            title: "Content Management Systems",
            desc: "Effortlessly manage doctor profiles, services, and medical blogs. We ensure your website stays organized, up to date, and optimized for both users and search engines.",
            img: imageService7,
            alt: "Content Management Systems for Healthcare - Website Development Agency",
            btnname: "Contact Us",
            link: "/contact-us",
          },
          {
            title: "Payment Gateway Integration",
            desc: "We configure secure payments embodied with insurance billing, online consultations, and care packages, to have payment processes be seamless. Patients can pay bills online with confidence.",
            img: imageService8,
            alt: "Payment Gateway Integration for Healthcare Websites - Website Development Agency",
            btnname: "Contact Us",
            link: "/contact-us",
          },
        ]}
      />

      <CommonWhyMetter
        imagewhymetter={imagewhymetter}
        alt="Expert Web Design Consultancy in the UAE"
        heding={"Best Healthcare Website Development Services"}
        subheding={
          "Healthcare websites must deliver more than visual appeal they need to support patient trust, operational efficiency, and regulatory compliance. A well-developed healthcare website enables medical professionals to offer accessible digital services while ensuring patients experience clarity, reliability, and ease of use at every touchpoint."
        }
        lefttext={`  <p><b>Designed for Patient Experience:</b> An intuitive website structure is essential for helping patients quickly find services, doctors, and appointment options. Clear navigation, user-friendly layouts, and accessibility-focused design reduce friction, improve engagement, and create a more inclusive digital experience for patients across all age groups.</p>
                        <p><b>Secure & Compliant Infrastructure:</b> Protecting sensitive medical data is a critical requirement for healthcare organisations. Our healthcare website solutions are built with robust security frameworks, compliance-ready architectures, and secure integrations to safeguard patient information and support industry regulations.</p>
                        `}
        righttext={`<p><b>Feature-Rich Solutions:</b> From online appointment scheduling and responsive mobile experiences to secure patient portals and integrated communication tools, our healthcare websites are designed to support efficient workflows and enhanced patient interaction- enabling healthcare providers to deliver care anytime, anywhere.</p>
                            `}
      />

      <CommonProtfolio />
      
      <DevelopmentServices />
      <CommonCostBreakdown
        heading="Healthcare Website Design Cost Breakdown"
        description="Select the best healthcare website design and Development package based on the features, performance, and growth level you need."
      />
      <IndustryGrid />

    

      <CommonWhyWebsiteDevelopment
        heding={"Medical Web Solutions for Clinics and Specialists"}
        subheding={
          "Healthcare providers operate in highly specialised environments, and their websites must reflect those unique requirements. Our medical web solutions are designed to support a wide range of clinics and specialists by delivering websites that align with their services, patient workflows, and regulatory expectations in the UAE."
        }
        lefttext={`<p><b>Platforms for Dental & Preventive Care:</b> Websites for family doctors, general physicians, dental clinics, and dentists are built to simplify patient interactions- from appointment scheduling and service visibility to sharing essential care information. These platforms focus on clarity, accessibility, and ease of use, helping patients connect with healthcare providers effortlessly.</p>
                                <p><b>Therapy, Wellness, and Rehabilitation:</b> Physiotherapy clinics, mental wellness centres, and rehabilitation specialists require websites that prioritise trust, usability, and privacy. We design intuitive platforms that support online bookings, secure communication, and informative content, creating a reassuring digital experience for patients seeking ongoing or specialised care.</p>
                                <p><b>Advanced Medical Services:</b> Paediatric clinics, chiropractic practices, and other specialised healthcare providers benefit from websites tailored to their audiences. From layouts to professionally structured service pages, each website is developed to enhance patient engagement, comply with UAE healthcare standards, and ensure reliable digital access from the very first visit.</p>
                            `}
        rightimage={imagewhydevelopment}
        alt="Why Choose Website Development Agency for Healthcare Website Development - Website Development Agency"
      />
      <Team />
      <CommonClientTestimonials
        testimonials={[
          {
            id: 1,
            name: "Daniel R",
            text: "Website Development Agency transformed our online presence. Within 3 months, our sales doubled thanks to their Shopify development expertise.",
            image: imagetestimonial1,
            alt: "Client Testimonial - Website Development Agency",
          },
          {
            id: 2,
            name: "Sophia K",
            text: "Professional, efficient, and creative—the best ecommerce development agency in UAE we’ve worked with.",
            image: imagetestimonial2,
            alt: "Client Testimonial - Website Development Agency",
          },
          {
            id: 3,
            name: "James P",
            text: "From design to launch, everything was seamless. Their team handled even complex Magento integrations with ease.",
            image: imagetestimonial3,
            alt: "Client Testimonial - Website Development Agency",
          },
        ]}
      />
      <LocationService activeLocation="dubai" />

      <CommonFaqSection
        faqs={[
          {
            q: "How Much Does Healthcare Website Development Cost?",
            a: "Costs depend on features, integrations, and scale- a basic clinic website with scheduling will be less expensive than a hospital or telemedicine platform with advanced modules like patient portals, multilingual support, and payment gateways. We create tailored, flexible packages from AED 4,000 to AED 20,000 for your goals and budget.",
          },
          {
            q: "Do You Provide Telemedicine Integration?",
            a: "Yes, video consultations, digital prescriptions, and secure patient messaging systems are part of the suite of features. These components facilitate connections between patients and doctors, improving access to care and saving time for both.",
          },
          {
            q: "Can Patients Access Reports and Medical Records Securely?",
            a: "Absolutely, we build encrypted patient portals with secure login for reports, prescriptions, and records. Access is role-based, maintaining data privacy and compliance with healthcare regulations.",
          },
          {
            q: "Can Patients Access Reports and Medical Records Securely?",
            a: "Absolutely, we build encrypted patient portals with secure login for reports, prescriptions, and records. Access is role-based, maintaining data privacy and compliance with healthcare regulations.",
          },
          {
            q: "Do You Offer Ongoing Support After Launch?",
            a: "Yes, recurring maintenance, performance monitoring, Error and Bug fixes, and updates to features, are part of our services. We act as your long-term digital partner.",
          },
          {
            q: "Do You Offer Ongoing Support After Launch?",
            a: "Yes, recurring maintenance, performance monitoring, Error and Bug fixes, and updates to features, are part of our services. We act as your long-term digital partner.",
          },
          {
            q: "Will The Website Work on Mobile Devices?",
            a: "Of course, all of our healthcare websites are mobile responsive to better serve your patients with engagement through smartphones and tablets.",
          },
          {
            q: "How Long Does It Take to Launch a Hospital Website?",
            a: "The timeline to build a website is variable, typically 6–10 weeks, depending on complexity and the integrations of your website. Larger projects that require multiple departments or connectivity to EHR may take a few weeks longer.",
          },
        ]}
      />
    </>
  );
};

export default page;
