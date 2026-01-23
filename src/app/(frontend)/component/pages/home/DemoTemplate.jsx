"use client";
import React, { useState, useEffect } from "react";
import styles from "@/app/(frontend)/assets/style/home/DemoTemplate.module.css";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { getTemplates } from "@/app/admin/dashboard/template/actions";
import { getTemplateCategories } from "@/app/admin/dashboard/template-category/actions";

const DemoTemplate = () => {
  const [activeCategory, setActiveCategory] = useState({
    name: "All Templates",
    slug: "all",
  });
  const [showScrollHint, setShowScrollHint] = useState(true);
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([
    { name: "All Templates", slug: "all" },
  ]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [tData, cData] = await Promise.all([
          getTemplates(),
          getTemplateCategories(),
        ]);
        setProducts(tData);
        setCategories([
          { name: "All Templates", slug: "all" },
          ...cData.map((c) => ({ name: c.name, slug: c.slug })),
        ]);
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
    activeCategory.slug === "all"
      ? products
      : products.filter((p) => p.category?.slug === activeCategory.slug);

  if (loading) return null;

  return (
    <section className={styles.budgetSection}>
      <div className="frame-1200">
        <div className={styles.heading}>
          <h2 className="text-center sm-text-start">
            Affordable Website Design in Dubai <br></br>Explore Templates
          </h2>
        </div>
        <p className="text-center sm-text-start mb-20">
          We offer low-cost website design solutions in Dubai that help
          start-ups go online quickly with modern, <br></br>responsive, and
          conversion-focused websites.
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
                key={cat.slug}
                className={`${styles.filterBtn} ${
                  activeCategory.slug === cat.slug ? styles.activeFilter : ""
                }`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className={styles.grid}>
          <AnimatePresence mode="popLayout">
            {filteredProducts.slice(0, 8).map((product) => (
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
                  />
                  <div className={styles.overlay}>
                    <Link
                      href={`/demo-template/${product.slug}`}
                      className={styles.detailsBtn}
                    >
                      <span className={styles.infoIcon}>i</span>
                      Details
                    </Link>
                    {product.demoFolder && (
                      <Link
                        href={`/demo-live/${product.slug}`}
                        target="_blank"
                        className={styles.detailsBtn}
                        style={{
                          background: "var(--primary-color)",
                          color: "white",
                        }}
                      >
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                          <circle cx="12" cy="12" r="3" />
                        </svg>
                        Live Preview
                      </Link>
                    )}
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
          <Link
            href={
              activeCategory.slug === "all"
                ? "/website-templates"
                : `/website-templates/${activeCategory.slug}`
            }
            className={styles.loadMoreBtn}
          >
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
            More Products
          </Link>
        </div>
      </div>
    </section>
  );
};

export default DemoTemplate;
