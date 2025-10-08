"use client"; // 👈 needed in Next.js App Router when using Framer Motion

import React from "react";
import { motion } from "framer-motion";
import styles from "@/app/(frontend)/assets/style/home/WhatSetsUs.module.css";

const slideUp = {
  hidden: { opacity: 0, y: 80 },
  visible: { opacity: 1, y: 0 },
};

const CommonSetsUs = ({
    text1,
    text2,
    bg
}) => {
      const bgUrl = typeof bg === "string" ? bg : bg?.src;
  return (
    <div className={`mb-20 ${styles.whatSetsUsContainer}`} style={{background:`url(${bgUrl}) no-repeat center center / cover`}}>
      <div className="frame-1200 py-100 sm-p-20 ">
        <motion.div
          className={styles.innerContainer}
          variants={slideUp}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="mb-20">
            {text1}
        

          </h2>
          <p dangerouslySetInnerHTML={{__html:text2}}></p>
           
          
        </motion.div>
      </div>
    </div>
  );
};

export default CommonSetsUs;
