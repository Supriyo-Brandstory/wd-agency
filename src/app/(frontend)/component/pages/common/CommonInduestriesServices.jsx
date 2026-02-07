import React from "react";
import imageService1 from "@/app/(frontend)/assets/images/insurance-website-design/service-1.webp";
import imageService2 from "@/app/(frontend)/assets/images/travel-website/why-choose-wd-agency.webp";
import imageService3 from "@/app/(frontend)/assets/images/insurance-website-design/service-3.webp";
import imageService4 from "@/app/(frontend)/assets/images/insurance-website-design/service-6.webp";
import imageService5 from "@/app/(frontend)/assets/images/travel-website/tech-integration.webp";
import imageService6 from "@/app/(frontend)/assets/images/travel-website/reservation-system.webp";
import CommonIndustries from "./CommonIndustries";

const CommonInduestriesServices = ({ heding, subheding }) => {
  return (
    <CommonIndustries
      heding={
        heding
          ? heding
          : "Comprehensive Website Design & Development Services in Dubai"
      }
      subheding={
        subheding
          ? subheding
          : "We provide end-to-end digital solutions designed to help businesses build a strong online presence and drive growth in the UAE."
      }
      services={[
        {
          title: "Website UI/UX Design",
          desc: "Creating visually appealing layouts, intuitive navigation, and structured user journeys that reflect brand identity while improving usability and overall visitor experience.",
          img: imageService1,
          alt: "Website UI/UX Design",
          btnname: "Contact Us",
          link: "/contact-us",
        },
        {
          title: "Website Development",
          desc: "Building secure, scalable websites with clean code and required functionality, ensuring smooth performance, stability, and long-term flexibility across business use cases.",
          img: imageService2,
          alt: "Website Development",
          btnname: "Contact Us",
          link: "/contact-us",
        },
        {
          title: "Responsive Device Adaptation",
          desc: "Adapting websites to function seamlessly across mobiles, tablets, desktops, and different screen resolutions without layout issues or usability disruptions.",
          img: imageService3,
          alt: "Responsive Device Adaptation",
          btnname: "Contact Us",
          link: "/contact-us",
        },
        {
          title: "Payment Gateway Integration",
          desc: "Integrating secure payment gateways to enable online transactions, bookings, subscriptions, or fee collections with smooth checkout experiences and reliable payment processing.",
          img: imageService4,
          alt: "Payment Gateway Integration",
          btnname: "Contact Us",
          link: "/contact-us",
        },
        {
          title: "Third-Party API & Tool Integration",
          desc: "Connecting websites with external systems like CRMs, booking platforms, analytics tools, or business software to extend functionality and streamline operations.",
          img: imageService5,
          alt: "Third-Party API & Tool Integration",
          btnname: "Contact Us",
          link: "/contact-us",
        },
        {
          title: "Website Maintenance & Support",
          desc: "Providing ongoing technical support, regular updates, bug fixes, monitoring, and system upkeep to ensure uninterrupted website performance and reliability.",
          img: imageService6,
          alt: "Website Maintenance & Support",
          btnname: "Contact Us",
          link: "/contact-us",
        },
      ]}
    />
  );
};

export default CommonInduestriesServices;
