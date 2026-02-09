"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import styles from "@/app/(frontend)/assets/style/common/PremierAgency.module.css";
import LogoScroller from "./LogoScroller";

// Import Award Images

import clutchImg from "@/app/(frontend)/assets/images/awards/clutch.png";
import topinteractiveImg from "@/app/(frontend)/assets/images/awards/topinteractive.png";
import manifestImg from "@/app/(frontend)/assets/images/awards/manifest.png";
import trustpilotImg from "@/app/(frontend)/assets/images/awards/trustpilot.png";
import drumImg from "@/app/(frontend)/assets/images/awards/drum.png";
import nominetImg from "@/app/(frontend)/assets/images/awards/nominet.png";

const awards = [
  { img: clutchImg, alt: "Clutch Recognized" },
  { img: topinteractiveImg, alt: "Top Interactive Agencies" },
  { img: manifestImg, alt: "The Manifest Top Agency" },
  { img: trustpilotImg, alt: "Trustpilot Rated" },
  { img: clutchImg, alt: "Clutch Recognized" },
  { img: topinteractiveImg, alt: "Top Interactive Agencies" },
  { img: manifestImg, alt: "The Manifest Top Agency" },
  { img: trustpilotImg, alt: "Trustpilot Rated" },
];

const PremierAgency = () => {
  // Ensure we have enough items for valid scrolling on large screens
  // 6 items * 3 = 18 items. 18 items * ~150px = ~2700px width, safe for large screens.
  const repeatedAwards = [...awards, ...awards, ...awards].map((award) => ({
    src: award.img,
    alt: award.alt,
  }));

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.contentWrapper}>
          <motion.h2
            className={styles.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Premier Web Design Company in UAE
          </motion.h2>
          <motion.p
            className={styles.description}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Our work speaks for itself. Endorsed by industry leaders, Website
            Development Agency is recognized as an elite web design agency in
             UAE, delivering high-impact digital experiences for the UAE’s
            most ambitious brands.
          </motion.p>
        </div>

        <div className={styles.recognitionSection}>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <LogoScroller
              logos={repeatedAwards}
              speed={80}
              direction="left"
              logoHeight={70}
            />
          </motion.div>
          <motion.h4
            className={styles.subTitle}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            🏆 Recognized by Leading Industry Platforms for Web Design
            Excellence
          </motion.h4>
        </div>
      </div>
    </section>
  );
};

export default PremierAgency;
