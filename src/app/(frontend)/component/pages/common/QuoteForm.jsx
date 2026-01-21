"use client";

import React, { useState, useEffect } from "react";
import { createEnquiry } from "@/app/admin/dashboard/enquiry/action";
import styles from "@/app/(frontend)/assets/style/common/QuotePopup.module.css";

const QuoteForm = ({
  initialData = {},
  successMsg = "Thank you! Your enquiry has been sent.",
  submitText = "Submit Request",
  onSuccess = () => {},
}) => {
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
  const [success, setSuccess] = useState("");

  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      ...initialData,
      serviceInterestedIn:
        initialData.service ||
        initialData.serviceInterestedIn ||
        "Web Development",
      projectBudget: initialData.price || initialData.projectBudget || "",
      projectDetails:
        initialData.projectDetails !== undefined
          ? initialData.projectDetails
          : initialData.title
            ? `Inquiry for project: ${initialData.title}`
            : "Enquiry from Website",
      companyName: initialData.companyName || "N/A",
    }));
  }, [initialData]);

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
      ...formData,
      submitted_page_url: window.location.pathname,
    };

    try {
      const result = await createEnquiry(submissionData);
      if (result.success) {
        setSuccess(successMsg);
        setFormData({
          fullName: "",
          emailAddress: "",
          phoneNumber: "",
          companyName: "N/A",
          serviceInterestedIn: "Web Development",
          projectBudget: "",
          projectDetails: "",
        });
        onSuccess();
        setTimeout(() => {
          setSuccess("");
        }, 5000);
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

  if (success) {
    return <div className={styles.successMessage}>{success}</div>;
  }

  return (
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
        <label>Phone Number *</label>
        <input
          type="tel"
          name="phoneNumber"
          required
          value={formData.phoneNumber}
          onChange={handleInputChange}
          placeholder="+971 50 123 4567"
        />
      </div>

      {!initialData.hideFields?.company ? (
        <div className={styles.inputGroup}>
          <label>Company Name</label>
          <input
            type="text"
            name="companyName"
            value={formData.companyName === "N/A" ? "" : formData.companyName}
            onChange={handleInputChange}
            placeholder="Your Company"
          />
        </div>
      ) : (
        <input type="hidden" name="companyName" value={formData.companyName} />
      )}

      {!initialData.hideFields?.service && (
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
      )}

      {initialData.hideFields?.budget ? (
        <input
          type="hidden"
          name="projectBudget"
          value={formData.projectBudget}
        />
      ) : (
        <div className={styles.inputGroup}>
          <label>Estimated Budget (AED)</label>
          <input
            type="text"
            name="projectBudget"
            value={formData.projectBudget}
            onChange={handleInputChange}
            readOnly
            style={{ opacity: 0.7, cursor: "not-allowed" }}
          />
        </div>
      )}

      {initialData.hideFields?.details ? (
        <input
          type="hidden"
          name="projectDetails"
          value={formData.projectDetails}
        />
      ) : (
        <div className={styles.inputGroup}>
          <label>Project Details</label>
          <textarea
            name="projectDetails"
            value={formData.projectDetails}
            onChange={handleInputChange}
            placeholder="Any specific requirements or questions?"
          />
        </div>
      )}

      <button
        type="submit"
        className={styles.submitButton}
        disabled={isSubmitting}
      >
        {isSubmitting ? "Sending..." : submitText}
      </button>
    </form>
  );
};

export default QuoteForm;
