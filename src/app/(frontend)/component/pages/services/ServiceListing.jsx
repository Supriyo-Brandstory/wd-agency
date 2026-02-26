"use client";
import React from "react";
import CommonIndustries from "../common/CommonIndustries";

// Import images
import uiuxImg from "@/app/(frontend)/assets/images/ui-ux/main-banner.webp";
import dynamicImg from "@/app/(frontend)/assets/images/dynamic-website-development/banner.webp";
import frontendImg from "@/app/(frontend)/assets/images/frontend-development/main-banner.webp";
import fullstackImg from "@/app/(frontend)/assets/images/full-stack-development/banner.webp";
import brandingImg from "@/app/(frontend)/assets/images/branding/main-banner.webp";
import cloudImg from "@/app/(frontend)/assets/images/cloud-applications/main-banner.webp";
import crmImg from "@/app/(frontend)/assets/images/crm/main-banner.webp";
import enterpriseImg from "@/app/(frontend)/assets/images/enterprise-software/main-banner.png";
import legacyImg from "@/app/(frontend)/assets/images/legacy-modernization/main-banner.webp";
import maintenanceImg from "@/app/(frontend)/assets/images/software-maintenance/main-banner.webp";
import staticImg from "@/app/(frontend)/assets/images/static-website-development/banner.webp";
import migrationImg from "@/app/(frontend)/assets/images/website-migration-service/banner.webp";
import wireframingImg from "@/app/(frontend)/assets/images/wireframing-prototyping/wireframing-banner.webp";
import redesignImg from "@/app/(frontend)/assets/images/specializedservices/6.webp";

const servicesData = [
  {
    title: "UI/UX Design",
    desc: "Crafting intuitive and engaging user experiences through strategic design that resonates with your audience.",
    img: uiuxImg,
    link: "/services/ui-ux-design",
    btnname: "Explore Service",
  },
  {
    title: "Wireframing & Prototyping",
    desc: "Transforming ideas into interactive blueprints, allowing for rapid iteration and validation of user flows.",
    img: wireframingImg,
    link: "/services/wireframing-prototyping",
    btnname: "Explore Service",
  },
  {
    title: "Dynamic Web Development",
    desc: "Building scalable, high-performance dynamic websites tailored to your specific business requirements with robust functionality.",
    img: dynamicImg,
    link: "/services/dynamic-website-development",
    btnname: "Explore Service",
  },
  {
    title: "Frontend Development",
    desc: "Developing modern, responsive, and interactive user interfaces using the latest frontend technologies for a seamless experience.",
    img: frontendImg,
    link: "/services/frontend-development",
    btnname: "Explore Service",
  },
  {
    title: "Full Stack Development",
    desc: "End-to-end web solutions integrating robust backends with seamless frontend experiences for comprehensive digital platforms.",
    img: fullstackImg,
    link: "/services/full-stack-development",
    btnname: "Explore Service",
  },
  {
    title: "Branding Services",
    desc: "Transforming your business identity with strategic branding and cohesive digital design solutions that leave a lasting impression.",
    img: brandingImg,
    link: "/services/branding",
    btnname: "Explore Service",
  },
  {
    title: "Cloud Application Development",
    desc: "Leveraging cloud technology to build resilient, scalable, and accessible web applications designed for the modern digital era.",
    img: cloudImg,
    link: "/services/cloud-applications",
    btnname: "Explore Service",
  },
  {
    title: "CRM Software Solutions",
    desc: "Custom CRM development to streamline your business operations, automate workflows, and enhance customer relationships.",
    img: crmImg,
    link: "/services/crm-software",
    btnname: "Explore Service",
  },
  {
    title: "Enterprise Software",
    desc: "Robust enterprise-grade software solutions designed to handle complex business processes and drive institutional efficiency.",
    img: enterpriseImg,
    link: "/services/enterprise-software",
    btnname: "Explore Service",
  },
  {
    title: "Legacy Modernization",
    desc: "Upgrading and transforming your legacy systems into modern, efficient digital platforms without compromising on data integrity.",
    img: legacyImg,
    link: "/services/legacy-modernization",
    btnname: "Explore Service",
  },
  {
    title: "Software Maintenance",
    desc: "Reliable maintenance and support services to ensure your software remains secure, optimized, and up-to-date at all times.",
    img: maintenanceImg,
    link: "/services/software-maintenance",
    btnname: "Explore Service",
  },
  {
    title: "Static Website Development",
    desc: "Lightning-fast, secure, and SEO-friendly static websites designed for maximum performance and minimal technical overhead.",
    img: staticImg,
    link: "/services/static-website-development",
    btnname: "Explore Service",
  },
  {
    title: "Website Migration",
    desc: "Seamless and secure website migration services with zero downtime, ensuring your digital assets are safely transitioned.",
    img: migrationImg,
    link: "/services/website-migration-service",
    btnname: "Explore Service",
  },
  {
    title: "Website Redesign",
    desc: "Transforming your outdated website into a modern, high-performing digital asset with enhanced UX and performance.",
    img: redesignImg,
    link: "/services/website-redesign",
    btnname: "Explore Service",
  },
];

const ServiceListing = () => {
  return (
    <section className="py-100 sm-py-50">
      <CommonIndustries
        heding="Our Comprehensive Service Portfolio"
        subheding="From initial design to final deployment and maintenance, we offer a full spectrum of web development services to meet your unique business objectives."
        services={servicesData}
      />
    </section>
  );
};

export default ServiceListing;
