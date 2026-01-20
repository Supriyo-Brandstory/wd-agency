"use client";
import React, { useState } from "react";
import styles from "@/app/(frontend)/assets/style/home/DemoTemplate.module.css";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

// Import images from protfolio
import healthcareImg from "@/app/(frontend)/assets/images/protfolio/healthcare-1.webp";
import travelImg from "@/app/(frontend)/assets/images/protfolio/travel-agency-1.webp";
import realestateImg from "@/app/(frontend)/assets/images/protfolio/realestate-1.webp";
import ecomImg from "@/app/(frontend)/assets/images/protfolio/e-com-1.webp";
import corporateImg from "@/app/(frontend)/assets/images/protfolio/corporate-1.webp";
import portfolioImg from "@/app/(frontend)/assets/images/protfolio/portfolio-1.webp";
import techStartupImg from "@/app/(frontend)/assets/images/protfolio/tech-startup-1.webp";
import dentalImg from "@/app/(frontend)/assets/images/protfolio/dentail-website.webp";

const categories = [
  "All Items",
  "Healthcare Websites",
  "Travel Websites",
  "Real Estate Websites",
  "E-commerce Websites",
  "Corporate Websites",
  "Portfolio Websites",
  "Tech Startup Websites",
  "Accountant Websites",
  "Automotive Websites",
  "Construction Websites",
  "Dental Websites",
];

const products = [
  {
    id: 1,
    title: "Healthcare Solutions",
    category: "Hospital & Clinic Management",
    price: "4,500.00",
    image: healthcareImg,
    type: "Healthcare Websites",
  },
  {
    id: 2,
    title: "Travel Agency Portal",
    category: "Booking & Reservation System",
    price: "3,800.00",
    image: travelImg,
    type: "Travel Websites",
  },
  {
    id: 3,
    title: "Real Estate Marketplace",
    category: "Property Listing & Management",
    price: "5,500.00",
    image: realestateImg,
    type: "Real Estate Websites",
  },
  {
    id: 4,
    title: "E-commerce Storefront",
    category: "Online Shop & Payment Gateway",
    price: "6,000.00",
    image: ecomImg,
    type: "E-commerce Websites",
  },
  {
    id: 5,
    title: "Corporate Identity",
    category: "Professional Business Presence",
    price: "3,500.00",
    image: corporateImg,
    type: "Corporate Websites",
  },
  {
    id: 6,
    title: "Creative Portfolio",
    category: "Personal Brand & Showcase",
    price: "2,500.00",
    image: portfolioImg,
    type: "Portfolio Websites",
  },
  {
    id: 7,
    title: "SaaS Startup App",
    category: "Tech Innovation & Landing Page",
    price: "4,200.00",
    image: techStartupImg,
    type: "Tech Startup Websites",
  },
  {
    id: 8,
    title: "Modern Accountant Site",
    category: "Financial & Tax Services",
    price: "3,200.00",
    image: corporateImg,
    type: "Accountant Websites",
  },
  {
    id: 9,
    title: "Auto Service Center",
    category: "Automotive & Parts Catalog",
    price: "3,900.00",
    image: healthcareImg,
    type: "Automotive Websites",
  },
  {
    id: 10,
    title: "Construction Hub",
    category: "Civil & Interior Portfolios",
    price: "4,800.00",
    image: techStartupImg,
    type: "Construction Websites",
  },
  {
    id: 11,
    title: "Dental Clinic Web",
    category: "Dentistry & Patient Care",
    price: "4,100.00",
    image: dentalImg,
    type: "Dental Websites",
  },
];

const DemoTemplate = () => {
  const [activeCategory, setActiveCategory] = useState("All Items");

  const filteredProducts =
    activeCategory === "All Items"
      ? products
      : products.filter((p) => p.type === activeCategory);

  return (
    <section className={styles.budgetSection}>
      <div className="frame-1200">
        <div className={styles.heading}>
          <h2 className="fs-38 fw-700">Explore Our Website Packages</h2>
        </div>
        <p className={styles.subHeading}>
          Select your industry to see our specialized, low-cost web design
          solutions in Dubai. We offer premium quality at affordable prices to
          help your business grow.
        </p>

        <div className={styles.filterContainer}>
          {categories.map((cat) => (
            <button
              key={cat}
              className={`${styles.filterBtn} ${
                activeCategory === cat ? styles.activeFilter : ""
              }`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div layout className={styles.grid}>
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0.5, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className={styles.card}
              >
                <div className={styles.imageContainer}>
                  <Image
                    src={product.image}
                    alt={product.title}
                    className={styles.image}
                  />
                  <div className={styles.overlay}>
                    <Link href="/contact-us" className={styles.detailsBtn}>
                      <span className={styles.infoIcon}>i</span>
                      Details
                    </Link>
                  </div>
                </div>
                <div className={styles.cardContent}>
                  <h3 className={styles.cardTitle}>{product.title}</h3>
                  <p className={styles.cardCategory}>{product.category}</p>
                  <div className={styles.priceInfo}>
                    <span className={styles.fromText}>
                      From: {product.price} AED
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <div className={styles.loadMoreContainer}>
          <Link href="/contact-us" className={styles.loadMoreBtn}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 3H5L5.4 5M7 13H17L21 5H5.4M7 13L5.4 5M7 13L4.707 15.293C4.077 15.923 4.523 17 5.414 17H17M17 17C15.895 17 15 17.895 15 19C15 20.105 15.895 21 17 21C18.105 21 19 20.105 19 19C19 17.895 18.105 17 17 17ZM9 17C7.895 17 7 17.895 7 19C7 20.105 7.895 21 9 21C10.105 21 11 20.105 11 19C11 17.895 10.105 17 9 17Z"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            View More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default DemoTemplate;
