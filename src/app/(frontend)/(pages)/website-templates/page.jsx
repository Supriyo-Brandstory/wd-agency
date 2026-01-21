"use client";
import React, { useState, useEffect } from "react";
import styles from "@/app/(frontend)/assets/style/template/template.module.css";
import { getTemplatesPaginated } from "@/app/admin/dashboard/template/actions";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

import bannerbg from "@/app/(frontend)/assets/images/home-banner.webp";

export default function WebsiteTemplates() {
  const [data, setData] = useState({ items: [], totalPages: 1 });
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const limit = 12;

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const result = await getTemplatesPaginated(currentPage, limit, "all");
        setData(result);
      } catch (error) {
        console.error("Error fetching templates:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  const bgurl = typeof bannerbg === "string" ? bannerbg : bannerbg?.src;

  return (
    <div className={styles.templateSection}>
      <div className={styles.banner} style={{ "--bg": `url(${bgurl})` }}>
        <div className="frame-1200">
          <h1>Website Templates</h1>
          <p>
            Choose from our collection of premium website templates designed to
            grow your business.
          </p>
        </div>
      </div>

      <div className="frame-1200">
        {loading ? (
          <div className={styles.grid}>
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className={styles.card}
                style={{ height: "400px", background: "#222", opacity: 0.5 }}
              ></div>
            ))}
          </div>
        ) : (
          <>
            <motion.div layout className={styles.grid}>
              <AnimatePresence mode="popLayout">
                {data.items.map((product) => (
                  <motion.div
                    key={product.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9 }}
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
                              borderColor: "var(--primary-color)",
                            }}
                          >
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

            {data.totalPages > 1 && (
              <div className={styles.pagination}>
                <button
                  onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                  disabled={currentPage === 1}
                >
                  &lt;
                </button>
                {Array.from({ length: data.totalPages }, (_, i) => i + 1).map(
                  (page) => (
                    <button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className={currentPage === page ? styles.activePage : ""}
                    >
                      {page}
                    </button>
                  ),
                )}
                <button
                  onClick={() =>
                    setCurrentPage((p) => Math.min(data.totalPages, p + 1))
                  }
                  disabled={currentPage === data.totalPages}
                >
                  &gt;
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
