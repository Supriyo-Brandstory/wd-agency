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
      <div className="frame-1200 py-100 sm-py-50">
        <motion.div
          className={styles.innerContainer}
          variants={slideUp}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="mb-20">
            What Sets Us Apart As The Best Web Development Agency in Dubai, UAE
          </h2>
          <p>
            Website Development Agency is the best web development agency in
            Dubai with years of expertise in designing user-centric websites. We
            are a highly reputed agency with cutting-edge design ability and
            unmatched creative vision. We design websites that deliver
            personalized browsing experiences and redefine excellence. We go
            beyond the ordinary norms when it comes to the vibrant landscape of
            Dubai.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default WhatSetsUs;
