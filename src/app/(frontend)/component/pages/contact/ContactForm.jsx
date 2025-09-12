"use client";
import React from "react";
import { motion } from "framer-motion";
import styles from "@/app/(frontend)/assets/style/contact/contactForm.module.css";

export default function ContactForm() {
  const containerVariants = {
    hidden: { opacity: 0, y: -40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      className="frame-1200 py-100 sm-pt-20 sm-pb-50 sm-px-20"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
    >
      <h2 className="mb-20 text-center">Get Your Free Consultation</h2>
      <p className="mb-40 sm-mb-30 text-center">
        Fill out the form below and we'll get back to you within 24 hours.
      </p>
      <div className={styles.formWrapper}>
        <form className={styles.form}>
          {/* Your form content remains exactly the same */}
          <div className={styles.row}>
            <div className={styles.inputGroup}>
              <label>Full Name *</label>
              <input type="text" placeholder="Enter your full name" required />
            </div>
            <div className={styles.inputGroup}>
              <label>Email Address *</label>
              <input type="email" placeholder="Enter your email address" required />
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.inputGroup}>
              <label>Phone Number</label>
              <input type="text" placeholder="Enter your phone number" />
            </div>
            <div className={styles.inputGroup}>
              <label>Company Name</label>
              <input type="text" placeholder="Enter your company name" />
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.inputGroup}>
              <label>Service Interested In *</label>
              <select required>
                <option value="">Select a service</option>
                <option value="web">Web Development</option>
                <option value="app">App Development</option>
                <option value="software">Software Development</option>
              </select>
            </div>
            <div className={styles.inputGroup}>
              <label>Project Budget</label>
              <select>
                <option value="">Select budget range</option>
                <option value="10k-25k">$10,000 - $25,000</option>
                <option value="25k-50k">$25,000 - $50,000</option>
                <option value="50k+">$50,000+</option>
              </select>
            </div>
          </div>

          <div className={styles.rowFull}>
            <div className={styles.inputGroup}>
              <label>Project Details *</label>
              <textarea
                placeholder="Tell us about project requirement, goals and timeline..."
                required
              ></textarea>
            </div>
          </div>

          <div className="mt-10 text-center">
            <button type="submit" className="blue-btn">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </motion.div>
  );
}
