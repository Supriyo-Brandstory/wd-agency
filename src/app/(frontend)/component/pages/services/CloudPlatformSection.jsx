"use client";
import React from "react";
import styles from "@/app/(frontend)/assets/style/services/cloudPlatformSection.module.css";
import { motion } from "framer-motion";

const CloudPlatformSection = ({ title, description, platforms }) => {
  return (
    <section className={styles.section}>
      <div className={styles.glow + " " + styles.glowTop} />
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
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            dangerouslySetInnerHTML={{ __html: description }}
          />
        </div>

        <div className={styles.platformGrid}>
          {platforms.map((platform, index) => (
            <motion.div
              key={index}
              className={styles.platformCard}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className={styles.iconWrapper}>{platform.icon}</div>
              <div className={styles.mainContent}>
                <h3>{platform.title}</h3>
                <p>{platform.desc}</p>
              </div>
              <div className={styles.statsBox}>
                {platform.benefits.map((benefit, i) => (
                  <div key={i} className={styles.statItem}>
                    <span className={styles.dot} />
                    {benefit}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CloudPlatformSection;
