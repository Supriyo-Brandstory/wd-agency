"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "@/app/(frontend)/assets/style/common/QuotePopup.module.css";
import { createEnquiry } from "@/app/admin/dashboard/enquiry/action";

import QuoteForm from "./QuoteForm";

const QuotePopup = ({
  isOpen,
  onClose,
  initialData = {},
  modalTitle = "Request Detailed Quote",
  successMsg = "Thank you! Your enquiry has been sent.",
  submitText = "Submit Request",
}) => {
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

            <h3 className={styles.modalTitle}>{modalTitle}</h3>

            <QuoteForm
              initialData={initialData}
              successMsg={successMsg}
              submitText={submitText}
              onSuccess={() => {
                setTimeout(onClose, 3000);
              }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default QuotePopup;
