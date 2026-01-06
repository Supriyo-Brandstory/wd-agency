"use client";
import React from "react";
import styles from "@/app/(frontend)/assets/style/services/cloudSecuritySection.module.css";
import { motion } from "framer-motion";

const CloudSecuritySection = ({ title, description, cards }) => {
  return (
    <section className={styles.section}>
      <div className={styles.scannerLine} />
      <div className="frame-1200 sm-px-20">
        <div className={styles.header}>
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {title}
          </motion.h2>
          <motion.div
            className={styles.intro}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            dangerouslySetInnerHTML={{ __html: description }}
          />
        </div>

        <div className={styles.securityLayout}>
          {cards.map((card, index) => (
            <motion.div
              key={index}
              className={styles.card}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className={styles.pulse} />
              <div className={styles.iconBox}>{card.icon}</div>
              <div className={styles.cardContent}>
                <h3>{card.title}</h3>
                <p>{card.desc}</p>
              </div>
              <div className={styles.hudOverlay}>
                System_Secure::{index + 1}
                <br />
                Protocol_v4.2.0
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CloudSecuritySection;
