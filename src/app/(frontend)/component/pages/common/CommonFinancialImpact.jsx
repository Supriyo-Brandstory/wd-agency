"use client";
import React from "react";
import styles from "@/app/(frontend)/assets/style/common/commonFinancialImpact.module.css";
import { motion } from "framer-motion";

const CommonFinancialImpact = ({
  heading,
  subheading,
  costFactors,
  roiData,
  pricingModels,
}) => {
  return (
    <section className={styles.roiSection}>
      <div className="frame-1200 py-100 sm-py-50 sm-px-20">
        <div className={styles.header}>
          <motion.h2
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {heading}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {subheading}
          </motion.p>
        </div>

        <div className={styles.mainGrid}>
          {/* Cost Factors Card */}
          <motion.div
            className={`${styles.gridCard} ${styles.costCard}`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className={styles.cardHeader}>
              <div className={styles.iconBox}>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 2V22M17 5H9.5C8.50544 5 7.55161 5.39509 6.84835 6.09835C6.14509 6.80161 5.75 7.75544 5.75 8.75C5.75 9.74456 6.14509 10.6984 6.84835 11.4017C7.55161 12.1049 8.50544 12.5 9.5 12.5H14.5C15.4946 12.5 16.4484 12.8951 17.1517 13.5983C17.8549 14.3016 18.25 15.2554 18.25 16.25C18.25 17.2446 17.8549 18.1984 17.1517 18.9017C16.4484 19.6049 15.4946 20 14.5 20H6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3>{costFactors.title}</h3>
            </div>
            <p className={styles.cardDesc}>{costFactors.description}</p>
            <ul className={styles.factorList}>
              {costFactors.factors.map((factor, i) => (
                <li key={i}>{factor}</li>
              ))}
            </ul>
          </motion.div>

          {/* ROI Calculation Card */}
          <motion.div
            className={`${styles.gridCard} ${styles.roiCard}`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className={styles.cardHeader}>
              <div className={styles.iconBox}>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path
                    d="M12 7V12L15 15"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <h3>{roiData.title}</h3>
            </div>
            <p className={styles.cardDesc}>{roiData.description}</p>
            <div className={styles.roiMetricGrid}>
              {roiData.metrics.map((metric, i) => (
                <div key={i} className={styles.roiMetric}>
                  <span>{metric.label}</span>
                  <p>{metric.value}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Pricing Models */}

      </div>
    </section>
  );
};

export default CommonFinancialImpact;
