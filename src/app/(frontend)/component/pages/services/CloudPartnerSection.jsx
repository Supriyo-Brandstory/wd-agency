"use client";
import React, { useState } from "react";
import styles from "@/app/(frontend)/assets/style/services/partnerSection.module.css";
import { motion } from "framer-motion";

const CloudPartnerSection = ({ title, description, reasons }) => {
  const [activeindex, setActiveIndex] = useState(0);

  return (
    <section className={styles.section}>
      <div className="frame-1200 sm-px-20">
        <div className={styles.header}>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {title}
          </motion.h2>
          <motion.div
            className={styles.description}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            dangerouslySetInnerHTML={{ __html: description }}
          />
        </div>

        <div className={styles.accordionContainer}>
          {reasons.map((reason, index) => (
            <div
              key={index}
              className={`${styles.panel} ${
                activeindex === index ? styles.active : ""
              }`}
              onMouseEnter={() => setActiveIndex(index)}
            >
              <div className={styles.number}>0{index + 1}</div>

              {/* Vertical Title for collapsed state (Desktop only via CSS) */}
              <div className={styles.verticalTitle}>{reason.title}</div>

              <div className={styles.content}>
                <div className={styles.iconWrapper}>{reason.icon}</div>
                <div className={styles.titleWrapper}>
                  <h3>{reason.title}</h3>
                </div>
                <p className={styles.text}>{reason.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CloudPartnerSection;
