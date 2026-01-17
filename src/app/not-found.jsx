"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import styles from "@/app/(frontend)/assets/style/notFound.module.css";
import Header from "@/app/(frontend)/component/partials/Header";
import Footer from "@/app/(frontend)/component/partials/Footer";
import "@/app/(frontend)/globals.scss";
import "@/app/(frontend)/globals.css";

export default function NotFound() {
  return (
    <html lang="en">
      <body className="antialiased">
        <Header />
        <div className={styles.container}>
          {/* Dynamic Background Elements */}
          <div className={styles.backgroundGlow} />
          <div className={styles.backgroundGlow2} />

          <motion.div
            className={styles.content}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className={styles.errorCode}
              animate={{
                y: [0, -10, 0],
                filter: [
                  "drop-shadow(0 0 30px rgba(74, 144, 226, 0.3))",
                  "drop-shadow(0 0 50px rgba(74, 144, 226, 0.5))",
                  "drop-shadow(0 0 30px rgba(74, 144, 226, 0.3))",
                ],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              404
            </motion.h1>

            <h2 className={styles.title}>Lost in Digital Space?</h2>

            <p className={styles.description}>
              The page you are looking for might have been removed, had its name
              changed, or is temporarily unavailable. Let's get you back on
              track.
            </p>

            <div className={styles.buttonGroup}>
              <Link href="/" className={styles.homeButton}>
                <span>Back to Homepage</span>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="19" y1="12" x2="5" y2="12"></line>
                  <polyline points="12 19 5 12 12 5"></polyline>
                </svg>
              </Link>

              <Link href="/contact-us" className={styles.contactButton}>
                <span>Support Center</span>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                </svg>
              </Link>
            </div>

            {/* Decorative Grid or Particles if needed */}
            <motion.div
              className={styles.illustration}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              <svg width="100%" height="100" viewBox="0 0 400 100" fill="none">
                <path
                  d="M0 50 Q 100 20, 200 50 T 400 50"
                  stroke="rgba(255,255,255,0.1)"
                  strokeWidth="1"
                />
                <path
                  d="M0 60 Q 100 30, 200 60 T 400 60"
                  stroke="rgba(255,255,255,0.05)"
                  strokeWidth="1"
                />
              </svg>
            </motion.div>
          </motion.div>
        </div>
        <Footer />
      </body>
    </html>
  );
}
