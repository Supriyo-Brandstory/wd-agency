"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import styles from "@/app/(frontend)/assets/style/common/PremierAgency.module.css";

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
  { img: drumImg, alt: "The Drum Recommended" },
  { img: nominetImg, alt: "Nominet Registrar" },
];

const PremierAgency = () => {
  const [emblaRef] = useEmblaCarousel(
    { loop: true, align: "center", skipSnaps: false },
    [
      AutoScroll({
        speed: 1.5,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
      }),
    ],
  );

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
            Premier Web Design Company in Dubai, UAE
          </motion.h2>
          <motion.p
            className={styles.description}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Our work speaks for itself. WD Agency is recognized by top industry
            platforms for consistently delivering exceptional web design
            solutions that help UAE businesses build their online presence.
          </motion.p>
        </div>

        <div className={styles.recognitionSection}>
          <motion.div
            className={styles.embla}
            ref={emblaRef}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <div className={styles.emblaContainer}>
              {awards.map((award, index) => (
                <div className={styles.emblaSlide} key={index}>
                  <Image
                    src={award.img}
                    alt={award.alt}
                    className={styles.awardImage}
                    width={150} // Aspect ratio baseline
                    height={80} // Aspect ratio baseline
                  />
                </div>
              ))}
              {/* Duplicating for seamless loop visual if needed, though Embla loop handles logic */}
              {awards.map((award, index) => (
                <div className={styles.emblaSlide} key={`dup-${index}`}>
                  <Image
                    src={award.img}
                    alt={award.alt}
                    className={styles.awardImage}
                    width={150}
                    height={80}
                  />
                </div>
              ))}
            </div>
          </motion.div>
          <motion.h4
            className={styles.subTitle}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            🏆 Recognized by Leading Industry Platforms for Web Design Excellence
          </motion.h4>
        </div>
      </div>
    </section>
  );
};

export default PremierAgency;
