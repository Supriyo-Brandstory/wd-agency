"use client";
import React, { useState } from "react";
import styles from "@/app/(frontend)/assets/style/home/faqSection.module.css";
import uparrow from "@/app/(frontend)/assets/images/icons/faquparrow.svg";
import downarrow from "@/app/(frontend)/assets/images/icons/faqdownarrow.svg";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const CommonFaqSection = ({ faqs, title, subtitle }) => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="frame-1200 py-100 sm-pt-0 sm-pb-50 sm-px-20">
      <motion.h2
        className="text-center mb-10 frame-900 sm-text-start sm-mb-10"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {title || "Frequently Asked Questions"}
      </motion.h2>

      {subtitle && (
        <motion.p
          className="text-center mb-50 frame-800 sm-text-start sm-mb-20 mx-auto opacity-70"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          style={{ fontSize: "17px", lineHeight: "1.6" }}
        >
          {subtitle}
        </motion.p>
      )}

      <div className={styles.faqContainer}>
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            className={`${styles.faqCard} ${
              openIndex === index ? styles.active : ""
            }`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <button
              className={styles.faqHeader}
              onClick={() => toggleFAQ(index)}
            >
              <span>{faq.q}</span>
              {openIndex === index ? (
                <Image src={uparrow} alt="Up Arrow" />
              ) : (
                <Image src={downarrow} alt="Down Arrow" />
              )}
            </button>

            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  className={styles.faqContent}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0, ease: "easeOut" }}
                >
                  <div dangerouslySetInnerHTML={{ __html: faq.a }}></div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CommonFaqSection;
