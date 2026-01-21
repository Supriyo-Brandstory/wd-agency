"use client";
import React, { useState, useEffect } from "react";
import styles from "@/app/(frontend)/assets/style/home/DemoTemplate.module.css";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { getTemplates } from "@/app/admin/dashboard/template/actions";
import { getTemplateCategories } from "@/app/admin/dashboard/template-category/actions";

const DemoTemplate = () => {
  const [activeCategory, setActiveCategory] = useState("All Templates");
  const [showScrollHint, setShowScrollHint] = useState(true);
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState(["All Templates"]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [tData, cData] = await Promise.all([
          getTemplates(),
          getTemplateCategories(),
        ]);
        setProducts(tData);
        setCategories(["All Templates", ...cData.map((c) => c.name)]);
      } catch (error) {
        console.error("Error fetching demo templates:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleScroll = (e) => {
    if (e.target.scrollLeft > 10) {
      setShowScrollHint(false);
    }
  };

  const filteredProducts =
    activeCategory === "All Templates"
      ? products
      : products.filter((p) => p.category?.name === activeCategory);

  if (loading) return null;

  return (
    <section className={styles.budgetSection}>
      <div className="frame-1200">
        <div className={styles.heading}>
          <h2 className="text-center sm-text-start">
            Explore Our Website Templates
          </h2>
        </div>
        <p className="text-center sm-text-start mb-20">
          Select your industry to see our specialized, low-cost web design
          solutions in Dubai. We offer premium quality at affordable prices to
          help your business grow.
        </p>

        <div className={styles.filterWrapper}>
          <AnimatePresence>
            {showScrollHint && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className={styles.scrollIndicator}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 12H15M15 12L11 8M15 12L11 16"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M23 12L19 8M23 12L19 16"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    opacity="0.3"
                  />
                </svg>
              </motion.div>
            )}
          </AnimatePresence>

          <div className={styles.filterContainer} onScroll={handleScroll}>
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
                  <img
                    src={product.image}
                    alt={product.title}
                    className={styles.image}
                    style={{
                      width: "100%",
                      height: "auto",
                      objectFit: "cover",
                    }}
                  />
                  <div className={styles.overlay}>
                    <Link
                      href={`/demo-template/${product.slug}`}
                      className={styles.detailsBtn}
                    >
                      <span className={styles.infoIcon}>i</span>
                      Details
                    </Link>
                  </div>
                </div>
                <div className={styles.cardContent}>
                  <h3 className={styles.cardTitle}>{product.title}</h3>
                  <p className={styles.cardCategory}>
                    {product.category?.name}
                  </p>
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
