"use client";
import React from "react";
import styles from "../../../assets/style/home/WebDesignApproach.module.css";
import Image from "next/image";
import buildingIcon from "../../../assets/images/icons/building.svg";
import simplifying from "../../../assets/images/icons/simplifying.svg";
import tv from "../../../assets/images/icons/tv.svg";
import dynamicvisuals from "../../../assets/images/icons/dynamicvisuals.svg";
import customersupport from "../../../assets/images/icons/customersupport.svg";
import { motion } from "framer-motion";

const boxData = [
  {
    id: 1,
    icon: buildingIcon,
    text: "Building web solutions that are immersive, intuitive, and intelligent",
  },
  {
    id: 2,
    icon: simplifying,
    text: "Simplifying navigation with clear calls-to-action and visual hierarchy",
  },
  {
    id: 3,
    icon: tv,
    text: "Ensuring high-end brand presentation and retention",
  },
  {
    id: 4,
    icon: dynamicvisuals,
    text: "Using dynamic visuals, videos, and animations where necessary",
  },
  {
    id: 5,
    icon: customersupport,
    text: "Giving you a voice in every decision, every iteration",
  },
];

// Animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.2 },
  }),
};

const WebDesignApproach = () => {
  return (
    <div className="frame-1200 py-100 sm-pt-0 sm-pb-50 sm-px-20">
      <motion.h2
        className="frame-700 text-center sm-text-start"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Transforming Ideas into Immersive Digital Experiences
      </motion.h2>

      <div className={`${styles.boxcontainer} mt-60`}>
        {boxData.map((item, index) => (
          <motion.div
            key={item.id}
            className={styles.box}
            custom={index}
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            viewport={{ once: true, amount: 0.2 }}
          >
            <Image src={item.icon} alt="Icon" />
            <p>{item.text}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default WebDesignApproach;
