"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import styles from "@/app/(frontend)/assets/style/contact/contactForm.module.css";
import { createEnquiry } from "@/app/admin/dashboard/enquiry/action";

export default function ContactForm() {
  const [fullName, setFullName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [serviceInterestedIn, setServiceInterestedIn] = useState("");
  const [projectBudget, setProjectBudget] = useState("");
  const [projectDetails, setProjectDetails] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const containerVariants = {
    hidden: { opacity: 0, y: -40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  async function handleSubmit(event) {
    event.preventDefault();

    const data = {
      fullName,
      emailAddress,
      phoneNumber,
      companyName,
      serviceInterestedIn,
      projectBudget,
      projectDetails,
      submitted_page_url: window.location.pathname,
    };

    const result = await createEnquiry(data);

    if (result.success) {
      setSuccessMessage("Enquiry submitted successfully!");
      setFullName("");
      setEmailAddress("");
      setPhoneNumber("");
      setCompanyName("");
      setServiceInterestedIn("");
      setProjectBudget("");
      setProjectDetails("");
    } else {
      console.error("Error submitting enquiry:", result);
      alert("Error submitting enquiry. Please try again.");
    }
  }

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
      {successMessage && (
        <div className="my-10 text-center text-green-500 bg-white py-3 rounded-md">
          {successMessage}
        </div>
      )}
      <div className={styles.formWrapper}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.row}>
            <div className={styles.inputGroup}>
              <label>Full Name *</label>
              <input
                type="text"
                placeholder="Enter your full name"
                required
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
            </div>
            <div className={styles.inputGroup}>
              <label>Email Address *</label>
              <input
                type="email"
                placeholder="Enter your email address"
                required
                value={emailAddress}
                onChange={(e) => setEmailAddress(e.target.value)}
              />
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.inputGroup}>
              <label>Phone Number</label>
              <input
                type="text"
                placeholder="Enter your phone number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>
            <div className={styles.inputGroup}>
              <label>Company Name</label>
              <input
                type="text"
                placeholder="Enter your company name"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
              />
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.inputGroup}>
              <label>Service Interested In *</label>
              <select
                required
                value={serviceInterestedIn}
                onChange={(e) => setServiceInterestedIn(e.target.value)}
              >
                <option value="">Select a service</option>
                <option value="web">Web Development</option>
                <option value="app">App Development</option>
                <option value="software">Software Development</option>
              </select>
            </div>
            <div className={styles.inputGroup}>
              <label>Project Budget</label>
              <select
                value={projectBudget}
                onChange={(e) => setProjectBudget(e.target.value)}
              >
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
                value={projectDetails}
                onChange={(e) => setProjectDetails(e.target.value)}
              />
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
