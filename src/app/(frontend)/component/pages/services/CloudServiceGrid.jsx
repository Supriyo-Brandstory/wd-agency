"use client";
import React from "react";
import styles from "@/app/(frontend)/assets/style/services/cloudServiceGrid.module.css";
import { motion } from "framer-motion";

const CloudServiceGrid = ({ title, description, services }) => {
  return (
    <section className={styles.serviceSection}>
      <div className="frame-1200 py-100 sm-py-50 sm-px-20">
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

        <div className={styles.grid}>
          {services.map((service, index) => (
            <motion.div
              key={index}
              className={styles.card}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className={styles.decoration} />
              <div className={styles.iconBox}>{service.icon}</div>
              <div className={styles.content}>
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CloudServiceGrid;
