"use client"
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import styles from "../../../assets/style/home/ourCoreStrengths.module.css";

const strengths = [
  {
    title: "Forward-Thinking Ideation",
    desc: "We cultivate and transform fresh perspectives into compelling digital experiences that set your brand apart.",
    lottie: "https://lottie.host/6945404d-2c00-4962-8850-7569dac9b819/r9AxixUNsK.lottie",
  },
  {
    title: "Seamless Navigability",
    desc: "Our websites are architected for intuitive interaction, catering to diverse user journeys with effortless flow.",
    lottie: "https://lottie.host/f28ea47a-cbd2-482d-b6b9-f0e1ee5d7049/Z1KibwyXCV.lottie",
  },
  {
    title: "Strategic Problem Solving",
    desc: "As adept digital troubleshooters, we decode complex challenges and deliver refined, results-driven solutions.",
    lottie: "https://lottie.host/f28ea47a-cbd2-482d-b6b9-f0e1ee5d7049/Z1KibwyXCV.lottie",
  },
  {
    title: "Holistic Expertise",
    desc: "From intricate builds to scalable platforms, our multidisciplinary capabilities empower your business to thrive in the digital realm.",
    lottie: "https://lottie.host/f408e9c8-2f67-409f-814d-963ab4319cb5/2gFSjWpVif.lottie",
  },
];

const OurCoreStrengths = () => {
  // Load Lottie web component once
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://unpkg.com/@lottiefiles/dotlottie-wc@0.6.2/dist/dotlottie-wc.js";
    script.type = "module";
    document.body.appendChild(script);
  }, []);

  return (
    <div className="frame-1200 py-100 sm-py-50 ">
      {/* Heading Section */}
      <motion.div
        className="text-center sm-text-start frame-1000 mb-50 sm-mb-20"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="mb-20 sm-mb-10">
          What Sets Us Apart As The Best Web Development Agency in Dubai, UAE
        </h2>
        <p>
          We cultivate creativity and technology in every website that drives
          value. Our creative masterminds harness their idea and all
          technological resources to create a prominent solution.
        </p>
      </motion.div>

      {/* Strengths Cards */}
      <div className={styles.grid}>
        {strengths.map((item, index) => (
          <motion.div
            key={index}
            className={styles.card}
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <dotlottie-wc
              src={item.lottie}
              className={styles.lottie}
              autoplay
              loop
            ></dotlottie-wc>
            <h3 className="py-20 sm-py-10">{item.title}</h3>
            <p>{item.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Bottom Text */}
      <motion.div
        className={`sm-text-start ${styles.bottomBox}`}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <p>
          Website Development Agency harnesses visionary thinking to give your
          brand a distinct edge in a fiercely competitive market. Backed by a
          diverse pool of talent and deep industry knowledge, we are committed
          to delivering the best quality solutions aligned with your business
          objectives.
        </p>
      </motion.div>
    </div>
  );
};

export default OurCoreStrengths;
