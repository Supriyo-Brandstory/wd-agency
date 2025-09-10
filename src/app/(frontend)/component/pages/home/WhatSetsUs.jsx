"use client"; // 👈 needed in Next.js App Router when using Framer Motion

import React from "react";
import { motion } from "framer-motion";
import styles from "@/app/(frontend)/assets/style/home/WhatSetsUs.module.css";

const slideUp = {
  hidden: { opacity: 0, y: 80 },
  visible: { opacity: 1, y: 0 },
};

const WhatSetsUs = () => {
  return (
    <div className={styles.whatSetsUsContainer}>
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
            Redefining Web Design & Development Services in the UAE

          </h2>
          <p>
            True digital success is built on the pillars of innovation, performance, and design. With a decade of expertise, we craft user-centric websites that seamlessly blend creativity with functionality. Our cutting-edge design capabilities and true creative vision ensure every website we deliver provides a personalized browsing experience that resonates with your audience. In the vibrant and competitive landscape of Dubai, we don’t just build websites- we create digital experiences that inspire, engage, and set new benchmarks for excellence.
          </p>
          
        </motion.div>
      </div>
    </div>
  );
};

export default WhatSetsUs;
