"use client";
import React from "react";
import styles from "@/app/(frontend)/assets/style/home/webExperiences.module.css";
import imgwebexprience from "@/app/(frontend)/assets/images/webexprience.webp";
import woman from "@/app/(frontend)/assets/images/women.webp";
import woman2 from "@/app/(frontend)/assets/images/woman-2.webp";
import webexpbuttomimage from "@/app/(frontend)/assets/images/webexperience-3.webp";
import Image from "next/image";
import { motion } from "framer-motion";

// Animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Webexperiences = () => {
  return (
    <>
      {/* Top Section */}
      <div className="frame-1200 py-100 sm-pt-0 sm-pb-50 sm-px-20">
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
              Best Website Development Agency - 
Crafting Next-Gen Web Experiences

            </h2>
            <p className="mt-20 mb-15 sm-my-10">
            At WD Agency, we don’t just create websites, we are here to shape your digital identity that defines your brand. From artistic precision to innovation, our team creates custom websites that stand out in today’s cluttered digital landscape. We take each project as a fresh canvas where we blend flair, clarity, responsiveness, and cross-platform adaptability. 

            </p>
            <p className="mb-15 sm-my-10">
             We have expert designers and developers who bring unmatched web design and development skills. We engineer the best websites that serve a purpose, guiding users effortlessly with quick and easy navigation. 
            </p>
            <p>
              We believe a website is more than just a digital platform, it is your brand’s voice and the foundation of your business. From wireframing and design to development and launch, we handle every phase with precision and attention to detail. At WD Agency, our approach is future-focused, ensuring your brand stays relevant while staying aligned with customer expectations.

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

      {/* Middle Section 1 */}
      <div className="frame-1200 py-100 sm-pt-0 sm-pb-50 sm-px-20">
        <motion.div
          className={`${styles.middleSection} p-30 mb-50 sm-p-20 sm-col-reverse`}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
        >
          <motion.div
            className={styles.middleSectionImg}
            variants={fadeUp}
            transition={{ delay: 0.2 }}
          >
            <Image src={woman} alt="woman" />
          </motion.div>
          <motion.div
            className={styles.middleSectionText}
            variants={fadeUp}
            transition={{ delay: 0.3 }}
          >
            <h3>What Makes Us a Leading Web Design Company in Dubai?</h3>
            <p className="my-20">
              <span>Uncompromised Creativity:</span> We take bold design
              decisions that reflect your uniqueness, not templated trends.
            </p>
            <p className="mb-20">
              <span>Business-Aligned Development:</span> Our sites are built to
              adapt and evolve with your goals.
            </p>
            <p className="mb-20">
              <span>Custom Solutions for All Sizes:</span> Whether you're a
              startup or an enterprise, we build to match your scale.
            </p>
            <p className="mb-20">
              <span>Interactive & Intuitive UI:</span> Each element is crafted
              for engagement, accessibility, and seamless user experience.
            </p>
            <p className="mb-20">
              <span>Recognised Excellence:</span> With awards and industry
              trust, we’ve proven our ability to deliver web excellence.
            </p>
          </motion.div>
        </motion.div>

        {/* Middle Section 2 */}
        <motion.div
          className={`${styles.middleSection} pb-0 px-30 pt-30 sm-px-20 sm-pt-20`}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
        >
          <motion.div
            className={`${styles.middleSectionText} mb-30 `}
            variants={fadeUp}
            transition={{ delay: 0.2 }}
          >
            <h3>Our Web Design & Development Services Include</h3>
            <p className="my-20">
              <span>Uncompromised Creativity:</span>  Pages that reflect your brand while offering smooth navigation and responsive layouts.
            </p>
            <p className="mb-20">
              <span>Prototyping & Wireframes:</span> Visuals that preview the user journey and encourage creative iterations.
            </p>
            <p className="mb-20">
              <span>Full-Stack Development:</span> From frontend animations to robust backend systems, we handle it all in-house.
            </p>
            <p className="mb-20">
              <span>Responsive & Device-Optimized Layouts:</span> A consistent experience on mobiles, tablets, desktops, and beyond.
            </p>
            <p className="mb-20">
              <span>CMS Integration:</span> Easy-to-manage content panels that put control in your hands.
            </p>
            <p className="mb-20">
              <span>Website Revamp:</span> Modernizing old designs with cutting-edge technology and fresh aesthetics.
            </p>
          </motion.div>
          <motion.div
            className={styles.middleSectionImg_2}
            variants={fadeUp}
            transition={{ delay: 0.3 }}
          >
            <Image src={woman2} alt="woman" />
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Section */}
      <div className="frame-1200 py-100 sm-pt-0 sm-pb-50 sm-px-20">
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
            <Image src={webexpbuttomimage} alt="Web Experiences" />
          </motion.div>

          <motion.div
            className={styles.bottomTextContent}
            variants={fadeUp}
            transition={{ delay: 0.3 }}
          >
            <h2>
             We Build Websites of All Types-Expert Designers at Your Doorstep

            </h2>
            <p className="my-20 sm-my-10">
             We empower businesses of all levels with scalable and customized website solutions. Whether you are a startup business in Dubai or an established enterprise, we create customized web design and development packages to match your budget and objectives. Every business deserves a powerful online presence, and we make it possible with affordable pricing and customized solutions. 


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
