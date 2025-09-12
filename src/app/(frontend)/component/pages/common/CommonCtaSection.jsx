'use client'
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
// import ContactImg from "@/app/(frontend)/assets/images/about/contact.png";
import css from "../../../assets/style/about/contact.module.css";

const Contact = ({imageUrl, title, subtitle}) => {
  return (
    <motion.div
      className="relative frame-1200 mb-50"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.4 }} // plays once when 40% visible
    >
      {/* gradient overlay */}
      <div
        className={`absolute bottom-0 left-0 w-full h-18/20 bg-gradient-to-r from-[#5C405C] to-[#292929] rounded-2xl ${css.contactbg}`}
      />

      <div className="relative flex flex-col md:flex-row items-center gap-8">
        {/* data section */}
        <motion.div
          className="pl-20 w-full z-10 py-30"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.4 }}
        >
          <h1 className="fs-38">{title}</h1>
          <p className="fs-20 py-10">
            {subtitle}
          </p>
          {/* Buttons */}
          <div className={css.buttonGroup}>
            <button className={css.primaryButton}>Contact Us Today</button>
            <button className={css.secondaryButton}>View Our Work</button>
          </div>
        </motion.div>

        {/* image section */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true, amount: 0.4 }}
        >
          <Image
            src={imageUrl}
            alt="Contact"
            className={`rounded-lg h-full z-10 ${css.image}`}
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Contact;
