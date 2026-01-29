"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import style from "@/app/(frontend)/assets/style/home/bestAgency.module.css";
import highEndAbility from "@/app/(frontend)/assets/images/icons/high-end-ability.svg";
import bestPractices from "@/app/(frontend)/assets/images/icons/best-practices.svg";
import spectacular from "@/app/(frontend)/assets/images/icons/spectacular.svg";
import brandIdentity from "@/app/(frontend)/assets/images/icons/brand-identity.svg";
import deliverTheBestResults from "@/app/(frontend)/assets/images/icons/deliver-the-best-results.svg";
import webSolutionBanner from "@/app/(frontend)/assets/images/web-solution-banner.webp";
import Image from "next/image";

const BestAgency = () => {
  const [isOpen, setIsOpen] = useState({ "1": false, "2": false });
  const [isMobile, setIsMobile] = useState(false);

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  // Detect screen size
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      if (!mobile) {
        setIsOpen({ "1": true, "2": true }); // Both sections open on desktop
      } else {
        setIsOpen({ "1": false, "2": false }); // Closed by default on mobile
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleClickOpen = (section) => {
    if (!isMobile) return; // Disable toggle on desktop
    setIsOpen((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  return (
    <div className="frame-1200 py-100 sm-pb-50 sm-px-20 sm-pt-0">
      {/* Heading */}
      <motion.h2
        className="text-center mb-20 sm-mb-20 frame-900 sm-text-start"
        initial="hidden"
        whileInView="show"
        variants={fadeUp}
        viewport={{ once: true }}
      >
        Expert Crafted, Fast & High-Converting <br></br>Web Design Innovation
      </motion.h2>
      <motion.p
        className="text-center mb-50 sm-mb-20 sm-text-start"
        initial="hidden"
        whileInView="show"
        variants={fadeUp}
        transition={{ delay: 0.2 }}
        viewport={{ once: true }}
      >
        Creating Digital Experiences That Stand Out- Web Design Company Dubai
      </motion.p>

      {/* Icon Boxes */}
      <div className={style.bestAgencyContainerBox}>
        {[
          {
            img: highEndAbility,
            alt:"High End Ability in Website Design and Development",
            text: "As one of Dubai's leading website design companies, WD Agency specializes in crafting visually striking, high-performance websites that deliver exceptional user experiences. Our team combines creative excellence with technical expertise to build digital solutions.",
          },
          {
            img: bestPractices,
            alt:"We Follow Website Design and Development Best Practices",
            text: "We leverage cutting-edge web design frameworks, industry best practices, and emerging technologies to create websites that exceed client expectations. Our forward-thinking approach ensures your digital presence stays ahead of market trends while maintaining optimal performance, security, and scalability.",
          },
          {
            img: spectacular,
            alt:"High End Ability in Website Design and Development",
            text: "Recognized as a top-rated web design company in Dubai, our work has been featured and endorsed by leading industry platforms. Our award-winning portfolio showcases diverse projects across multiple sectors, demonstrating our consistent ability to deliver exceptional results that elevate brands.",
          },
          {
            img: brandIdentity,
            alt:"Top-level expertise in Website Design and Development",
            text: "Our dedicated team of senior web designers invests significant effort into understanding your business objectives and brand identity. We don't just build websites- we create digital experiences that authentically represent your values, resonate with your target audience, and position your brand for long-term growth.",
          },
          {
            img: deliverTheBestResults,
            alt:"We Deliver The Best Website Design and Development Services",
            text: "As expert website development specialists, we thrive on solving complex technical challenges and delivering innovative solutions that drive success. Our proven methodology, attention to detail, and commitment to excellence ensure we transform your vision into a powerful digital asset.",
          },
        ].map((item, index) => (
          <motion.div
            key={index}
            className={style.innerBestAgencyBox}
            initial="hidden"
            whileInView="show"
            variants={fadeUp}
            transition={{ delay: index * 0.15 }}
            viewport={{ once: true }}
          >
            <Image src={item.img} alt={item.alt} />
            <p className="fw-500">{item.text}</p>
          </motion.div>
        ))}
        <div></div>
      </div>

      {/* First Banner Section */}

   

      
    </div>
  );
};

export default BestAgency;
