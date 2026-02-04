"use client";
import React, { useState, useEffect, useCallback } from "react";
import styles from "@/app/(frontend)/assets/style/common/commonProtfolio.module.css";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

import protfolio1 from "@/app/(frontend)/assets/images/casestudies/varsha-port.webp";
import protfolio2 from "@/app/(frontend)/assets/images/casestudies/ferms-port.webp";
import protfolio3 from "@/app/(frontend)/assets/images/casestudies/ksma-port.webp";
import protfolio4 from "@/app/(frontend)/assets/images/casestudies/equence-port.webp";
import crystalPlaza from "@/app/(frontend)/assets/images/casestudies/crystal-port.webp";
import travelex from "@/app/(frontend)/assets/images/casestudies/travelex-port.webp";
import leruRemote from "@/app/(frontend)/assets/images/casestudies/leru-remote-port.webp";
import leruPartners from "@/app/(frontend)/assets/images/casestudies/leru-partner-port.webp";

const CommonProtfolio = ({
  heding = "Our Website Design Portfolio",
  desc = "We have worked with 500+ clients across Dubai and the United Arab Emirates. See our extensive website design and development portfolio here.",
  protfoliodata = [
    {
      id: "01",
      image: protfolio1,
      alt: "Our Website Design Portfolio - Varsha Logistics Pvt Ltd",
      slug: "varsha-logistics",
      title: "Varsha Logistics",
      category: "Business Website",
    },
    {
      id: "02",
      image: protfolio2,
      alt: "Our Website Design Portfolio - Ferns Real Estate",
      slug: "ferns-estates",
      title: "Ferns Estates",
      category: "Real Estate Website",
    },
    {
      id: "03",
      image: protfolio3,
      alt: "Our Website Design Portfolio - Kshema Vanitha",
      slug: "kshemavana",
      title: "Kshemavana",
      category: "Healthcare & Wellness",
    },
    {
      id: "04",
      image: protfolio4,
      alt: "Our Website Design Portfolio - Equence",
      slug: "equence",
      title: "Equence",
      category: "Tech Startup Website",
    },
    {
      id: "05",
      title: "Crystal Plaza",
      category: "Hotel Website",
      image: crystalPlaza,
      alt: "Our Website Design Portfolio - Crystal Plaza",
      slug: "crystal-plaza",
    },
    {
      id: "06",
      title: "Travelex UAE",
      category: "Currency Exhange Platform",
      image: travelex,
      alt: "Our Website Design Portfolio - Travelex UAE",
      slug: "travelex",
    },
    {
      id: "07",
      title: "Leru Remote",
      category: "B2B HR Tech Website",
      image: leruRemote,
      alt: "Our Website Design Portfolio - Leru Remote",
      slug: "leru-remote",
    },
    {
      id: "08",
      title: "Leru Partners",
      category: "Recruitment Platform",
      image: leruPartners,
      alt: "Our Website Design Portfolio - Leru Partners",
      slug: "leru-partners",
    },
  ],
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % protfoliodata.length);
  }, [protfoliodata.length]);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) =>
      prev === 0 ? protfoliodata.length - 1 : prev - 1,
    );
  }, [protfoliodata.length]);

  const goToSlide = useCallback(
    (index) => {
      setDirection(index > currentIndex ? 1 : -1);
      setCurrentIndex(index);
    },
    [currentIndex],
  );

  // Auto-play functionality
  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(nextSlide, 5000);
      return () => clearInterval(interval);
    }
  }, [nextSlide, isPaused]);

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
    }),
  };

  return (
    <div className={styles.CommonProtfolio}>
      <div className="frame-900 mb-60 sm-px-20">
        <motion.h2
          className="text-center sm-text-start mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {heding}
        </motion.h2>
        <motion.p
          className="text-center sm-text-start"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {desc}
        </motion.p>
      </div>

      <div
        className={styles.sliderContainer}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.5 },
              scale: { duration: 0.5 },
            }}
            className={styles.slideWrapper}
          >
            <div className={styles.portfolioSlide}>
              <div className={styles.imageContainer}>
                <Image
                  src={protfoliodata[currentIndex].image}
                  alt={protfoliodata[currentIndex].alt}
                  fill
                  className={styles.portfolioImage}
                  priority={currentIndex === 0}
                />
                <div className={styles.overlay} />
              </div>

              <div className={styles.contentBox}>
                <motion.div
                  className={styles.textContent}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                >
                  <h3>{protfoliodata[currentIndex].title}</h3>
                  <p className={styles.category}>
                    {protfoliodata[currentIndex].category}
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                >
                  <Link
                    href={
                      protfoliodata[currentIndex].slug
                        ? `/case-studies/${protfoliodata[currentIndex].slug}`
                        : "/case-studies"
                    }
                    className={styles.caseStudyBtn}
                  >
                    <span>View Case Study</span>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrows */}
        <button
          className={`${styles.navButton} ${styles.prevButton}`}
          onClick={prevSlide}
          aria-label="Previous slide"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>

        <button
          className={`${styles.navButton} ${styles.nextButton}`}
          onClick={nextSlide}
          aria-label="Next slide"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>

        {/* Dot Indicators */}
        <div className={styles.dotContainer}>
          {protfoliodata.map((_, index) => (
            <button
              key={index}
              className={`${styles.dot} ${
                index === currentIndex ? styles.activeDot : ""
              }`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Progress Bar */}
        {!isPaused && (
          <motion.div
            className={styles.progressBar}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 5, ease: "linear" }}
            key={currentIndex}
          />
        )}
      </div>
    </div>
  );
};

export default CommonProtfolio;
