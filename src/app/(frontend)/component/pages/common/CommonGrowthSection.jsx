"use client";
import React from "react";
import styles from "@/app/(frontend)/assets/style/common/commonGrowthSection.module.css";
import { motion } from "framer-motion";

const CommonGrowthSection = ({ heading, subheading, growthData }) => {
  return (
    <section className={styles.growthSection}>
      <div className="frame-1200 py-100 sm-py-50 sm-px-20">
        <div className={styles.header}>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {heading}
          </motion.h2>
          <motion.p
            className={styles.intro}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            dangerouslySetInnerHTML={{ __html: subheading }}
          />
        </div>

        <div className={styles.grid}>
          {growthData.map((item, index) => (
            <motion.div
              key={index}
              className={styles.growthCard}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className={styles.cardHeader}>
                <span className={styles.number}>{item.id}</span>
                <h3>{item.title}</h3>
              </div>
              <div className={styles.cardBody}>
                <p className={styles.description}>{item.description}</p>
                {item.benefitsTitle && (
                  <h4 className={styles.benefitsTitle}>{item.benefitsTitle}</h4>
                )}
                <ul className={styles.benefitsList}>
                  {item.benefits.map((benefit, i) => (
                    <li key={i}>{benefit}</li>
                  ))}
                </ul>
                {item.conclusion && (
                  <p className={styles.conclusion}>{item.conclusion}</p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommonGrowthSection;
