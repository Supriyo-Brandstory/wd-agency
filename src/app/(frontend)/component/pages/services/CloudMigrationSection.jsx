"use client";
import React from "react";
import styles from "@/app/(frontend)/assets/style/services/cloudMigrationSection.module.css";
import { motion } from "framer-motion";

const CloudMigrationSection = ({ title, description, services }) => {
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
            className={styles.intro}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            dangerouslySetInnerHTML={{ __html: description }}
          />
        </div>

        <div className={styles.flowContainer}>
          {services.map((service, index) => (
            <div key={index} className={styles.step}>
              <motion.div
                className={styles.stepContent}
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className={styles.iconBox}>{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
              </motion.div>

              <div className={styles.node}>{index + 1}</div>

              <motion.div
                className={styles.visual}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 0.5, scale: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
              >
                {/* Decorative background element */}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CloudMigrationSection;
