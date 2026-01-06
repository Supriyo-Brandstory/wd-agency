"use client";
import React from "react";
import styles from "@/app/(frontend)/assets/style/services/advancedTechSection.module.css";
import { motion } from "framer-motion";

const AdvancedTechSection = ({ title, description, technologies }) => {
  return (
    <section className={styles.section}>
      <div className={styles.glow} />
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

        <div className={styles.techStack}>
          {technologies.map((tech, index) => (
            <div key={index} className={styles.techRow}>
              <motion.div
                className={styles.visualArea}
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className={styles.iconContainer}>
                  {React.cloneElement(tech.icon, {
                    size: 60,
                    strokeWidth: 1.5,
                  })}
                </div>
              </motion.div>
              <motion.div
                className={styles.content}
                initial={{ opacity: 0, x: index % 2 === 0 ? 100 : -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <span className={styles.tag}>{tech.tag}</span>
                <h3>{tech.title}</h3>
                <p>{tech.desc}</p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvancedTechSection;
