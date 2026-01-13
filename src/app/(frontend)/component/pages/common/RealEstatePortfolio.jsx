"use client";
import React from "react";
import styles from "@/app/(frontend)/assets/style/common/realEstatePortfolio.module.css";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import QuotePopup from "./QuotePopup";

const RealEstatePortfolio = ({ heading, description, portfolioData }) => {
  const [isPopupOpen, setIsPopupOpen] = React.useState(false);
  const [popupData, setPopupData] = React.useState({});

  // Staggered entrance animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const handleQuoteClick = (e, item) => {
    e.preventDefault(); // Prevent Link navigation
    e.stopPropagation(); // Stop event bubbling
    setPopupData({
      price: item.price,
      service: "Website Development",
      title: item.subtitle,
    });
    setIsPopupOpen(true);
  };

  const handleCustomizationClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setPopupData({
      price: "",
      service: "Website Development",
      title: "",
      projectDetails: "",
    });
    setIsPopupOpen(true);
  };

  return (
    <>
      <div className={styles.portfolioSection}>
        <div className={styles.container}>
          <motion.div
            className={styles.header}
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className={styles.heading}>{heading}</h2>
            {description && <p className={styles.description}>{description}</p>}
          </motion.div>

          <motion.div
            className={styles.grid}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {portfolioData.map((item, index) => (
              <motion.div key={index} variants={itemVariants}>
                <div className={styles.card}>
                  <div className={styles.cardHeader}>
                    <div className={styles.info}>
                      <h3 className={styles.itemSubtitle}>{item.subtitle}</h3>
                    </div>
                    {item.price && (
                      <div className={styles.priceBadge}>{item.price}</div>
                    )}
                  </div>

                  <div className={styles.imageWrapper}>
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className={styles.image}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      priority={index < 3}
                    />
                    <div className={styles.overlay}></div>
                    <div className={styles.btnContainer}>
                      <div
                        className={styles.quoteBtn}
                        onClick={(e) => handleQuoteClick(e, item)}
                      >
                        Get Quote
                      </div>
                      <div
                        className={styles.customBtn}
                        onClick={handleCustomizationClick}
                      >
                        Get Custom Design
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
      <QuotePopup
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
        initialData={popupData}
      />
    </>
  );
};

export default RealEstatePortfolio;
