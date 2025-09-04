"use client";
import React from "react";
import { motion } from "framer-motion";
import styles from "@/app/(frontend)/assets/style/home/ctaSection.module.css";
import Image from "next/image";
import womanLaptop from "@/app/(frontend)/assets/images/woman-laptop.webp";

const CtaSection = () => {
  return (
    <div className="frame-1200 py-100 sm-pt-0 sm-pb-50">
      <motion.div
        className={styles.ctaBox}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        {/* Left Content */}
        <motion.div
          className={styles.ctaContent}
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2>Ready to Transform Your Digital Presence?</h2>
          <p className="my-20">
            Let's discuss your project and create something amazing together.
            Our team of experts is ready to bring your vision to life.
          </p>
          <div className={styles.ctaButtons}>
            <motion.button
              className="blue-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Your Project
            </motion.button>
            <motion.button
              className="white-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn About Us
            </motion.button>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          className={styles.ctaImage}
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <Image src={womanLaptop} alt="CTA" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default CtaSection;
