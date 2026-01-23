"use client";
import React from "react";
import styles from "@/app/(frontend)/assets/style/home/developmentServices.module.css";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

import industriesimg1 from "@/app/(frontend)/assets/images/industries/1.webp";
import industriesimg2 from "@/app/(frontend)/assets/images/industries/2.webp";
import industriesimg3 from "@/app/(frontend)/assets/images/industries/3.webp";
import industriesimg4 from "@/app/(frontend)/assets/images/industries/4.webp";
import industriesimg5 from "@/app/(frontend)/assets/images/industries/5.webp";
import industriesimg6 from "@/app/(frontend)/assets/images/industries/6.webp";
const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const CommonIndustries = ({
  heding = "Proven Experience Across Industries",
  subheding = "We build custom web solutions across multiple industries to boost engagement and drive growth.",
  services = [
    {
      title: "Real Estate & Property",
      desc: "Searchable listings, virtual tours, lead routing and CRM integrations for property management.",
      img: industriesimg1,
      alt: "Real Estate & Property Web Design Services in Dubai, UAE- Website Development Agency",
      btnname: "Know More",
      link: "/real-estate-web-development",
      viewlink: "#",
    },
    {
      title: "Hospitality & Travel",
      desc: "Booking integrations, rate management, multi-language content and conversion optimised funnels.",
      img: industriesimg2,
      alt: "Hospitality & Travel Web Design Services in Dubai, UAE- Website Development Agency",
      btnname: "Know More",
      link: "/travel-web-development",
      viewlink: "#",
    },
    {
      title: "Healthcare Websites",
      desc: "Patient portals, appointment booking, stern security and data privacy workflows.",
      img: industriesimg3,
      alt: "Healthcare Website Design Services in Dubai, UAE- Website Development Agency",
      btnname: "Know More",
      link: "/healthcare-web-development",
      viewlink: "#",
    },
    {
      title: "Portfolio Websites",
      desc: "Project galleries, case studies, client testimonials, skill highlights, easy navigation.",
      img: industriesimg4,
      alt: "Portfolio Website Design Services in Dubai, UAE- Website Development Agency",
      btnname: "Know More",
      link: "/portfolio-web-development",
      viewlink: "#",
    },
    {
      title: "Retail & eCommerce",
      desc: "Product merchandising, omni-channel sync, and promotional mechanisms.",
      img: industriesimg5,
      alt: "Retail & eCommerce Website Design Services in Dubai, UAE- Website Development Agency",
      btnname: "Know More",
      link: "/e-commerce-web-development",
      viewlink: "#",
    },
    {
      title: "Corporate Websites",
      desc: "Company overview, services, team profiles, client testimonials, contact forms, brand messaging.",
      img: industriesimg6,
      alt: "Corporate Website Design Services in Dubai, UAE- Website Development Agency",
      btnname: "Know More",
      link: "/corporate-web-development",
      viewlink: "#",
    },
  ],
  btnname = null,
  btnlink = null,
}) => {
  return (
    <div className="frame-1200 pt-100 sm-pb-50 sm-pt-0 sm-px-20 ">
      <motion.h2
        className="text-center mb-20 sm-mb-20 sm-text-start"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        {heding}
      </motion.h2>
      <motion.p
        className="text-center sm-text-start mb-50 sm-mb-20"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        {subheding}
      </motion.p>

      <div className={styles.grid}>
        {services.map((service, i) => (
          <motion.div
            key={i}
            className={styles.card}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={i}
          >
            <div className={styles.imageWrapper}>
              <Image
                src={service.img}
                alt={service.title}
                className={styles.image}
              />
              <div className={styles.imageOverlay}>
                <Link
                  href={service.viewlink ? service.viewlink : "#"}
                  className={styles.viewDesignBtn}
                >
                  <span className={styles.infoIcon}>i</span> View Design
                </Link>
              </div>
            </div>
            <div className={styles.content}>
              <h3 className="mb-20">{service.title}</h3>
              <p className="mb-10">{service.desc}</p>
              <Link href={service.link} className={styles.learnMore}>
                {service.btnname}{" "}
                <svg
                  width="30"
                  height="12"
                  viewBox="0 0 30 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M29.5303 6.53033C29.8232 6.23744 29.8232 5.76256 29.5303 5.46967L24.7574 0.696699C24.4645 0.403806 23.9896 0.403806 23.6967 0.696699C23.4038 0.989593 23.4038 1.46447 23.6967 1.75736L27.9393 6L23.6967 10.2426C23.4038 10.5355 23.4038 11.0104 23.6967 11.3033C23.9896 11.5962 24.4645 11.5962 24.7574 11.3033L29.5303 6.53033ZM0 6V6.75H29V6V5.25H0V6Z"
                    fill="#E83E8C"
                  />
                </svg>
              </Link>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="text-center mt-30 sm-mt-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        viewport={{ once: true }}
      >
        {btnname && (
          <Link className="white-btn" href={btnlink}>
            {btnname}
          </Link>
        )}
      </motion.div>
    </div>
  );
};

export default CommonIndustries;
