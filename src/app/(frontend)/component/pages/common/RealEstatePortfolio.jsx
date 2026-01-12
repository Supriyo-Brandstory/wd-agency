"use client";
import React from "react";
import styles from "@/app/(frontend)/assets/style/common/realEstatePortfolio.module.css";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const RealEstatePortfolio = ({ heading, description, portfolioData }) => {
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

  return (
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
              <Link
                href={item.link || "#"}
                target="_blank"
                className={styles.card}
                style={{ textDecoration: "none" }}
              >
                <div className={styles.cardHeader}>
                  <div className={styles.info}>
                    <p className={styles.itemSubtitle}>{item.subtitle}</p>
                    <h3 className={styles.itemTitle}>{item.title}</h3>
                  </div>
                  <div className={styles.liveBadge}>LIVE</div>
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
                  <div className={styles.discoverBtn}>Get a Quote</div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default RealEstatePortfolio;
