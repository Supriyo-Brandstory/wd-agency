"use client";
import React from "react";
import { motion } from "framer-motion";
import styles from "../../../assets/style/home/technologyStack.module.css";
import Image from "next/image";
import { useRouter } from "next/navigation";

const CommonTechnologyStack = ({heding,subheding,techData}) => {
 const route = useRouter();
 const handlelink = (link) => {
   route.push(link);
 };
  return (
    <div className="frame-1200 py-100 sm-pb-50 sm-text-start sm-px-20 sm-pt-0">
      {/* Heading */}
      <motion.div
        className="frame-1000 text-center mb-50 sm-text-start sm-mb-30"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="mb-20 sm-mb-20">{heding}</h2>
        <p>
            {subheding}
        </p>
      </motion.div>

      {/* Tech Cards */}
      <div className={styles.grid}>
        {techData.map((tech, index) => (
          <motion.div
            key={index}
            className={styles.card}
            style={{ "--hover-gradient": tech.gradient }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            onClick={() => handlelink(tech.Link)}
          >
            <Image src={tech.image} alt={tech.name} />
            <h3>{tech.name}</h3>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CommonTechnologyStack;
