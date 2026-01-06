"use client";
import React from "react";
import styles from "@/app/(frontend)/assets/style/common/commonWhyChoose.module.css";
import { motion } from "framer-motion";

const CommonWhyChoose = ({ heading, subheading, reasons }) => {
  return (
    <section className={styles.whyChooseSection}>
      <div className="frame-1200 py-100 sm-py-50 sm-px-20">
        <div className={styles.header}>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {heading}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className={styles.subheading}
            dangerouslySetInnerHTML={{ __html: subheading }}
          />
        </div>

        <div className={styles.grid}>
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              className={styles.reasonCard}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className={styles.iconWrapper}>
                {reason.icon || (
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </div>
              <div className={styles.content}>
                <h3>{reason.title}</h3>
                <p>{reason.description}</p>
              </div>
              <div className={styles.cardBg}></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommonWhyChoose;
