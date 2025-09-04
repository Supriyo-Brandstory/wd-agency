"use client";
import React from "react";
import styles from "@/app/(frontend)/assets/style/home/webExperiences.module.css";
import imgwebexprience from "@/app/(frontend)/assets/images/webexprience.webp";
import Image from "next/image";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Webexperiences = () => {
  return (
    <>
      <div className="frame-1200 py-100 sm-pt-0 sm-pb-50">
        {/* Section 1 */}
        <motion.div
          className={`${styles.topSection} sm-col-reverse`}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
        >
          <motion.div
            className={styles.textContent}
            variants={fadeUp}
            transition={{ delay: 0.2 }}
          >
            <h2>
              Website Development Agency - Crafting Next-Gen Web Experiences
            </h2>
            <p className="mt-20 mb-15 sm-my-10">
              At Website Development Agency, we don’t just build websites, we
              shape digital identities that define your brand. Through artistic
              precision and structured innovation, our team delivers
              custom-designed websites that stand out in today’s cluttered
              digital landscape. Each project is a fresh canvas where
              functionality meets flair, built with clarity, responsiveness, and
              cross-platform adaptability.
            </p>
            <p className="mb-15 sm-my-10">
              Our designers and developers bring together unmatched skill sets,
              combining imagination with functionality. We don’t stop at
              aesthetics; we engineer designs that serve a purpose, guiding
              users effortlessly while expressing your brand’s voice.
            </p>
            <p>
              We believe every website should breathe life into a business, and
              that’s what we do. From wireframing to launch, we handle every
              phase with meticulous attention to detail. Our approach is
              human-centered, brand-aligned, and future-focused.
            </p>
          </motion.div>

          <motion.div
            className={styles.imageContent}
            variants={fadeUp}
            transition={{ delay: 0.3 }}
          >
            <Image src={imgwebexprience} alt="Web Experiences" />
          </motion.div>
        </motion.div>
      </div>

      {/* Section 2 */}
      <div className="frame-1200 py-100 sm-pt-0 sm-pb-50">
        <motion.div
          className={`${styles.bottomSection}`}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
        >
          <motion.div
            className={styles.bottomimageContent}
            variants={fadeUp}
            transition={{ delay: 0.2 }}
          >
            <Image src={imgwebexprience} alt="Web Experiences" />
          </motion.div>

          <motion.div
            className={styles.bottomTextContent}
            variants={fadeUp}
            transition={{ delay: 0.3 }}
          >
            <h2>Designed Websites for All Businesses- Small, Medium, or Large</h2>
            <p className="my-20 sm-my-10">
              Website Development Agency empowers businesses at every level with
              scalable web solutions. Whether you're a growing entrepreneur or a
              leading enterprise, we create tailored web packages to match your
              budget and objectives. Every business deserves a polished digital
              home, and we make that possible through affordable pricing,
              flexible modules, and transparent collaboration.
            </p>
            <div className="sm-text-center sm-mt-20">
              <a href="#" className="blue-btn">
                Start Your Project Today
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default Webexperiences;
