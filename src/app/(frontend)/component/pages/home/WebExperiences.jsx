"use client";
import React from "react";
import styles from "@/app/(frontend)/assets/style/home/webExperiences.module.css";
import imgwebexprience from "@/app/(frontend)/assets/images/webexprience.webp";
import woman from "@/app/(frontend)/assets/images/women.webp";
import woman2 from "@/app/(frontend)/assets/images/woman-2.webp";
import webexpbuttomimage from "@/app/(frontend)/assets/images/webexperience-3.webp";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

// Animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Webexperiences = ({ content }) => {
  
  const defaultContent = {
    topSection: {
      title: "Best Website Development Agency - Crafting Next-Gen Web Experiences",
      descriptions: [
        "At WD Agency, we don’t just create websites, we are here to shape your digital identity that defines your brand. From artistic precision to innovation, our team creates custom websites that stand out in today’s cluttered digital landscape. We take each project as a fresh canvas where we blend flair, clarity, responsiveness, and cross-platform adaptability.",
        "We have expert designers and developers who bring unmatched web design and development skills. We engineer the best websites that serve a purpose, guiding users effortlessly with quick and easy navigation.",
        "We believe a website is more than just a digital platform, it is your brand’s voice and the foundation of your business. From wireframing and design to development and launch, we handle every phase with precision and attention to detail. At WD Agency, our approach is future-focused, ensuring your brand stays relevant while staying aligned with customer expectations."
      ],
      image: imgwebexprience,
      alt: "Best Website Development Agency - Crafting Next-Gen Web Experiences"
    },
    middleSection1: {
      title: "What Makes Us a Leading Web Design Company in Dubai?",
      image: woman,
      alt: "We Stand as The Leading Web Design Company in Dubai",
      points: [
        { title: "Uncompromised Creativity:", desc: "We take bold design decisions that reflect your uniqueness, not templated trends." },
        { title: "Business-Aligned Development:", desc: "Our sites are built to adapt and evolve with your goals." },
        { title: "Custom Solutions for All Sizes:", desc: "Whether you're a startup or an enterprise, we build to match your scale." },
        { title: "Interactive & Intuitive UI:", desc: "Each element is crafted for engagement, accessibility, and seamless user experience." },
        { title: "Recognised Excellence:", desc: "With awards and industry trust, we’ve proven our ability to deliver web excellence." }
      ]
    },
    middleSection2: {
      title: "Our Web Design & Development Services Include",
      image: woman2,
      alt: "WD Agency is The Best Web Design Agency in Dubai, UAE",
      points: [
        { title: "Uncompromised Creativity:", desc: "Pages that reflect your brand while offering smooth navigation and responsive layouts." },
        { title: "Prototyping & Wireframes:", desc: "Visuals that preview the user journey and encourage creative iterations." },
        { title: "Full-Stack Development:", desc: "From frontend animations to robust backend systems, we handle it all in-house." },
        { title: "Responsive & Device-Optimized Layouts:", desc: "A consistent experience on mobiles, tablets, desktops, and beyond." },
        { title: "CMS Integration:", desc: "Easy-to-manage content panels that put control in your hands." },
        { title: "Website Revamp:", desc: "Modernizing old designs with cutting-edge technology and fresh aesthetics." }
      ]
    },
    bottomSection: {
      title: "We Build Websites of All Types- Expert Designers at Your Doorstep",
      description: "We empower businesses of all levels with scalable and customized website solutions. Whether you are a startup business in Dubai or an established enterprise, we create customized web design and development packages to match your budget and objectives. Every business deserves a powerful online presence, and we make it possible with affordable pricing and customized solutions.",
      image: webexpbuttomimage,
      alt: "We master all types of web design and development services",
      btnText: "Start Your Project Today",
      btnLink: "/contact-us"
    }
  };

  const data = content || defaultContent;

  return (
    <>
      {/* Top Section */}
      <div className="frame-1200 pt-100 sm-pt-0 sm-pb-50 sm-px-20">
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
            <h2>{data.topSection.title}</h2>
            
            {data.topSection.descriptions.map((desc, index) => (
               <p key={index} className={index === 0 ? "mt-20 mb-15 sm-my-10" : index === data.topSection.descriptions.length - 1 ? "" : "mb-15 sm-my-10"}>
                 {desc}
               </p>
            ))}
          </motion.div>

          <motion.div
            className={styles.imageContent}
            variants={fadeUp}
            transition={{ delay: 0.3 }}
          >
            <Image src={data.topSection.image} alt={data.topSection.alt} />
          </motion.div>
        </motion.div>
      </div>

      {/* Middle Section 1 */}
      {(data.middleSection1) && (
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
            <Image src={data.middleSection1.image} alt={data.middleSection1.alt} />
          </motion.div>
          <motion.div
            className={styles.middleSectionText}
            variants={fadeUp}
            transition={{ delay: 0.3 }}
          >
            <h3>{data.middleSection1.title}</h3>
            {data.middleSection1.points.map((point, index) => (
                <p key={index} className={index === data.middleSection1.points.length - 1 ? "mb-20" : "my-20"}>
                <span>{point.title}</span> {point.desc}
                </p>
            ))}
          </motion.div>
        </motion.div>

        {/* Middle Section 2 */}
        {(data.middleSection2) && (
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
            <h3>{data.middleSection2.title}</h3>
             {data.middleSection2.points.map((point, index) => (
                <p key={index} className={index === data.middleSection2.points.length - 1 ? "mb-20" : "my-20"}>
                <span>{point.title}</span> {point.desc}
                </p>
            ))}
          </motion.div>
          <motion.div
            className={styles.middleSectionImg_2}
            variants={fadeUp}
            transition={{ delay: 0.3 }}
          >
            <Image src={data.middleSection2.image} alt={data.middleSection2.alt} />
          </motion.div>
        </motion.div>
        )}
      </div>
      )}

      {/* Bottom Section */}
      {(data.bottomSection) && (
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
            <Image src={data.bottomSection.image} alt={data.bottomSection.alt} />
          </motion.div>

          <motion.div
            className={styles.bottomTextContent}
            variants={fadeUp}
            transition={{ delay: 0.3 }}
          >
            <h2>
             {data.bottomSection.title}
            </h2>
            <p className="my-20 sm-my-10">
             {data.bottomSection.description}
            </p>
            <div className="sm-text-center sm-mt-20">
              <Link href={data.bottomSection.btnLink} className="blue-btn">
                {data.bottomSection.btnText}
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>
      )}
    </>
  );
};

export default Webexperiences;
