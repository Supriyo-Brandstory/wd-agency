"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { createEnquiry } from "@/app/admin/dashboard/enquiry/action";
import styles from "@/app/(frontend)/assets/style/common/QuotePopup.module.css";

const ChecklistPopup = ({ isOpen, onClose, blogTitle, selectedItems }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    emailAddress: "",
    phoneNumber: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const description = `Blog Checklist Submission: ${blogTitle}\n\nSelected Items:\n${selectedItems
      .map((item) => `• ${item}`)
      .join("\n")}`;

    const submissionData = {
      fullName: formData.fullName,
      emailAddress: formData.emailAddress,
      phoneNumber: formData.phoneNumber,
      companyName: "N/A",
      serviceInterestedIn: "Blog Content",
      projectBudget: "N/A",
      projectDetails: description,
    };

    try {
      const result = await createEnquiry(submissionData);
      if (result.success) {
        setSuccess(true);
        setTimeout(() => {
          setSuccess(false);
          onClose();
          setFormData({ fullName: "", emailAddress: "", phoneNumber: "" });
        }, 3000);
      } else {
        alert("Failed to send details. Please try again.");
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred.");
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
            <h3 className={styles.modalTitle}>Send your selections</h3>

            {success ? (
              <div className={styles.successMessage}>
                Thank you! Your selections have been sent successfully.
              </div>
            ) : (
              <form className={styles.enquiryForm} onSubmit={handleSubmit}>
                <div className={styles.inputGroup}>
                  <label>Full Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) =>
                      setFormData({ ...formData, fullName: e.target.value })
                    }
                    placeholder="Enter your name"
                  />
                </div>
                <div className={styles.inputGroup}>
                  <label>Email Address *</label>
                  <input
                    type="email"
                    required
                    value={formData.emailAddress}
                    onChange={(e) =>
                      setFormData({ ...formData, emailAddress: e.target.value })
                    }
                    placeholder="Enter your email"
                  />
                </div>
                <div className={styles.inputGroup}>
                  <label>Phone Number *</label>
                  <input
                    type="tel"
                    required
                    value={formData.phoneNumber}
                    onChange={(e) =>
                      setFormData({ ...formData, phoneNumber: e.target.value })
                    }
                    placeholder="Enter your phone number"
                  />
                </div>
                <button
                  type="submit"
                  className={styles.submitButton}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Submit Selections"}
                </button>
              </form>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ChecklistPopup;
