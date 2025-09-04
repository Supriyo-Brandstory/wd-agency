"use client";
import React, { useState } from "react";
import styles from "@/app/(frontend)/assets/style/home/faqSection.module.css";
import uparrow from "@/app/(frontend)/assets/images/icons/faquparrow.svg";
import downarrow from "@/app/(frontend)/assets/images/icons/faqdownarrow.svg";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const FaqSection = () => {
  const faqs = [
    {
      q: "What Makes Your Website Development Agency Stand Out In The UAE?",
      a: "Our Website Development Agency In The UAE Stands Out Due To Our 12+ Years Of Experience, Team Of 50+ Expert Developers, And Proven Track Record Of Delivering 750+ Successful Projects. We Combine Cutting-Edge Technology With Deep Understanding Of The UAE Market To Create Websites That Drive Business Growth.",
    },
    {
      q: "What Types Of Websites Does Your Agency Develop?",
      a: "We specialize in developing corporate websites, eCommerce platforms, custom web applications, and more to suit diverse industries.",
    },
    {
      q: "How Long Does It Take To Develop A Website With Your Agency?",
      a: "The timeline depends on project scope, but on average, standard websites take 4–6 weeks, while custom projects may take longer.",
    },
    {
      q: "Do You Offer Ongoing Support And Maintenance After Website Development?",
      a: "Yes, we provide ongoing support, security updates, and maintenance packages to ensure your website performs optimally.",
    },
    {
      q: "Can Your Agency Help With SEO And Digital Marketing For Websites?",
      a: "Absolutely! We offer SEO, content marketing, and performance optimization to help websites rank higher and attract more traffic.",
    },
    {
      q: "What Is The Cost Of Website Development Services In The UAE?",
      a: "Costs vary depending on complexity, but we provide transparent pricing and custom packages based on client requirements.",
    },
    {
      q: "Do You Develop Mobile-Responsive Websites?",
      a: "Yes, every website we develop is fully responsive and optimized for all screen sizes, ensuring a seamless user experience.",
    },
    {
      q: "Can You Integrate Third-Party Systems With Website Development?",
      a: "Yes, we can integrate CRMs, ERPs, payment gateways, booking systems, and more into your website.",
    },
    {
      q: "Why Should UAE Businesses Choose Your Website Development Agency?",
      a: "Because we combine local UAE market knowledge with global best practices to deliver websites that truly drive growth.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="frame-1200 py-100 sm-pt-0 sm-pb-50">
      <motion.h2
        className="text-center mb-50 frame-900 sm-text-start sm-mb-20"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Frequently Asked Questions
      </motion.h2>

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
                  <p>{faq.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FaqSection;
