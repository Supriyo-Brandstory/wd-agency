"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "@/app/(frontend)/assets/style/common/QuotePopup.module.css";
import { createEnquiry } from "@/app/admin/dashboard/enquiry/action";

const QuotePopup = ({ isOpen, onClose, initialData = {} }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    emailAddress: "",
    phoneNumber: "",
    companyName: "N/A",
    serviceInterestedIn: "Web Development",
    projectBudget: "",
    projectDetails: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  // Update form data when initialData changes or modal opens
  useEffect(() => {
    if (isOpen) {
      setFormData((prev) => ({
        ...prev,
        serviceInterestedIn: initialData.service || "Web Development",
        projectBudget: initialData.price || "",
        projectDetails:
          initialData.projectDetails !== undefined
            ? initialData.projectDetails
            : initialData.title
            ? `Inquiry for project: ${initialData.title}`
            : "Enquiry from Portfolio",
        // Keep other fields if you want them persistent, or reset them if you want a fresh form
      }));
    }
  }, [isOpen, initialData]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const submissionData = {
      fullName: formData.fullName,
      emailAddress: formData.emailAddress,
      phoneNumber: formData.phoneNumber,
      companyName: formData.companyName,
      serviceInterestedIn: formData.serviceInterestedIn,
      projectBudget: formData.projectBudget,
      projectDetails: formData.projectDetails,
    };

    try {
      const result = await createEnquiry(submissionData);
      if (result.success) {
        setSuccessMessage("Thank you! Your enquiry has been sent.");
        setFormData({
          fullName: "",
          emailAddress: "",
          phoneNumber: "",
          companyName: "N/A",
          serviceInterestedIn: "Web Development",
          projectBudget: "",
          projectDetails: "",
        });
        setTimeout(() => {
          setSuccessMessage("");
          onClose(); // Close the modal
        }, 3000);
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("An error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className={styles.modalOverlay}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className={styles.modalContent}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button className={styles.closeButton} onClick={onClose}>
              ✕
            </button>

            <h3 className={styles.modalTitle}>Request Detailed Quote</h3>

            {successMessage ? (
              <div className={styles.successMessage}>{successMessage}</div>
            ) : (
              <form className={styles.enquiryForm} onSubmit={handleSubmit}>
                <div className={styles.inputGroup}>
                  <label>Full Name *</label>
                  <input
                    type="text"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="John Doe"
                  />
                </div>

                <div className={styles.inputGroup}>
                  <label>Email Address *</label>
                  <input
                    type="email"
                    name="emailAddress"
                    required
                    value={formData.emailAddress}
                    onChange={handleInputChange}
                    placeholder="john@example.com"
                  />
                </div>

                <div className={styles.inputGroup}>
                  <label>Phone Number</label>
                  <input
                    type="tel"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    placeholder="+971 50 123 4567"
                  />
                </div>

                {/* Company Name hidden, defaults to N/A */}
                <input type="hidden" name="companyName" value="N/A" />

                <div className={styles.inputGroup}>
                  <label>Service Interested In</label>
                  <input
                    type="text"
                    name="serviceInterestedIn"
                    value={formData.serviceInterestedIn}
                    onChange={handleInputChange}
                    readOnly
                    style={{ opacity: 0.7, cursor: "not-allowed" }}
                  />
                </div>

                <div className={styles.inputGroup}>
                  <label>Estimated Budget (AED)</label>
                  <input
                    type="text"
                    name="projectBudget"
                    value={formData.projectBudget}
                    onChange={handleInputChange}
                    // Making this readOnly as per user request to 'set price'
                    // If they should be able to edit it, I can remove readOnly
                    // The prompt implies setting it, usually fixed from portfolio
                    readOnly
                    style={{ opacity: 0.7, cursor: "not-allowed" }}
                  />
                </div>

                <div className={styles.inputGroup}>
                  <label>Project Details</label>
                  <textarea
                    name="projectDetails"
                    value={formData.projectDetails}
                    onChange={handleInputChange}
                    placeholder="Any specific requirements or questions?"
                  />
                </div>

                <button
                  type="submit"
                  className={styles.submitButton}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Submit Quote Request"}
                </button>
              </form>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default QuotePopup;
