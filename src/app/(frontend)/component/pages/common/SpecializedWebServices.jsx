"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import styles from "@/app/(frontend)/assets/style/common/SpecializedWebServices.module.css";

// Import images
import ecommerceImg from "@/app/(frontend)/assets/images/e-commerce-web-development/Ecommerce-Website-Development.webp";
import corporateImg from "@/app/(frontend)/assets/images/corporate-website/corporate-website.webp";
import mobileImg from "@/app/(frontend)/assets/images/e-commerce-web-development/Mobile-Commerce-Development.webp";
import onepageImg from "@/app/(frontend)/assets/images/industries/4.webp";
import redesignImg from "@/app/(frontend)/assets/images/industries/6.webp";
import bespokeImg from "@/app/(frontend)/assets/images/e-commerce-web-development/Custom-Ecommerce-Website-Design.webp";

const services = [
  {
    title: "Ecommerce Website Design",
    img: ecommerceImg,
    features: [
      {
        label: "Conversion-Optimized Experience",
        text: "Product pages that minimize cart abandonment.",
      },
      {
        label: "Security & Payment Integration",
        text: "PCI-DSS compliant gateways with encryption.",
      },
      {
        label: "Inventory & Order Management",
        text: "Automated synchronization and real-time tracking.",
      },
      {
        label: "Speed & SEO-Optimized",
        text: "Platforms engineered to rank higher.",
      },
    ],
  },
  {
    title: "Company Profile Website Design",
    img: corporateImg,
    features: [
      {
        label: "Strategic Brand Positioning",
        text: "Designs that communicate industry authority.",
      },
      {
        label: "Intelligent Content Architecture",
        text: "Layouts that effectively showcase your unique value.",
      },
      {
        label: "Lead Generation Framework",
        text: "Conversion elements designed to drive enquiries.",
      },
      {
        label: "Scalable Enterprise Foundation",
        text: "Built to accommodate future business expansion.",
      },
    ],
  },
  {
    title: "Mobile Website Design",
    img: mobileImg,
    features: [
      {
        label: "Fully Responsive Design",
        text: "Adaptive layouts for all devices and tablets.",
      },
      {
        label: "Mobile-First UX Strategy",
        text: "Intuitive touch navigation for mobile patterns.",
      },
      {
        label: "Mobile Performance",
        text: "Rapid load times even on slower networks.",
      },
      {
        label: "Enhanced Conversion Rates",
        text: "Designed for the growing mobile-first audience.",
      },
    ],
  },
  {
    title: "One-Page Website Design",
    img: onepageImg,
    features: [
      {
        label: "Single-Page Architecture",
        text: "Comprehensive messaging in one cohesive page.",
      },
      {
        label: "Optimized Load Speed",
        text: "Minimal technical overhead for instant loading.",
      },
      {
        label: "Scroll-Driven Engagement",
        text: "Narrative layouts that maintain attention.",
      },
      {
        label: "Perfect for Ad Campaigns",
        text: "Ideal for product launches and portfolios.",
      },
    ],
  },
  {
    title: "Website Redesign Services",
    img: redesignImg,
    features: [
      {
        label: "Design Overhaul",
        text: "Modern aesthetics aligned with current standards.",
      },
      {
        label: "Enhanced Functional",
        text: "Advanced features that boost engagement.",
      },
      {
        label: "Performance Optimize",
        text: "Speed and responsive design upgrades.",
      },
      {
        label: "SEO & Conversion",
        text: "Structural and technical SEO improvements.",
      },
    ],
  },
  {
    title: "Bespoke Website Design",
    img: bespokeImg,
    features: [
      {
        label: "Distinctive Branding",
        text: "Custom designs that reflect your identity.",
      },
      {
        label: "Purpose-Built Function",
        text: "Features developed around your unique goals.",
      },
      {
        label: "Competitive Difference",
        text: "Original approaches that distinguish your brand.",
      },
      {
        label: "Future-Proof Platform",
        text: "Flexible architecture engineered to expand.",
      },
    ],
  },
];

const SpecializedWebServices = () => {
  return (
    <section className={styles.section}>
      <div className={styles.bgElements}>
        <div className={styles.aurora}></div>
      </div>

      <div className={`${styles.container} frame-1200 sm-px-20`}>
        <div className={styles.intro}>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Web Design Services in Dubai, UAE
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            As a leading web design agency in Dubai, we create high-performing
            websites that turn visitors into customers. We craft strategic
            digital experiences that drive measurable business growth. With
            transparent processes, on-time delivery, and proven results across
            hundreds of UAE projects, we're the partner you need to elevate your
            online presence.
          </motion.p>
        </div>

        <div className={styles.stack}>
          {services.map((service, index) => (
            <motion.div
              key={index}
              className={styles.panel}
              style={{
                "--z-index": index + 1,
                "--top": `${80 + index * 40}px`,
                "--mobile-top": `${60 + index * 20}px`,
              }}
              initial={{ opacity: 0, scale: 0.95, y: 50 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className={styles.visualSide}>
                <div className={styles.glow}></div>
                <div className={styles.imageBox}>
                  <Image
                    src={service.img}
                    alt={service.title}
                    className={styles.serviceImage}
                    fill
                  />
                </div>
              </div>

              <div className={styles.contentSide}>
                <motion.h3
                  className="mb-30"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  {service.title}
                </motion.h3>

                <div className={styles.featuresGrid}>
                  {service.features.map((feature, fIndex) => (
                    <div key={fIndex} className={styles.feature}>
                      <h4>{feature.label}</h4>
                      <p>{feature.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecializedWebServices;
