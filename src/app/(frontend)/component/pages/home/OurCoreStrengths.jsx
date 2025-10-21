"use client";
import React from "react";
import { motion } from "framer-motion";
import styles from "../../../assets/style/home/ourCoreStrengths.module.css";
import forwardThinkingIdeation from "@/app/(frontend)/assets/images/Forward-Thinking.png";
import seamlessNavigability from "@/app/(frontend)/assets/images/Seamless-Navigability.png";
import strategicProblemSolving from "@/app/(frontend)/assets/images/Strategic-Problem.png";
import holisticExpertise from "@/app/(frontend)/assets/images/Holistic-Expertise.png";
import Image from "next/image";

const strengths = [
  {
    title: "Forward-Thinking Ideation",
    desc: "We cultivate and transform fresh perspectives into compelling digital experiences that set your brand apart.",
    image: forwardThinkingIdeation,
    alt:"We follow forward thinking ideation in website design", 
  },
  {
    title: "Seamless Navigability",
    desc: "Our websites are architected for intuitive interaction, catering to diverse user journeys with effortless flow.",
    image: seamlessNavigability,
    alt:"We Design Websites with Seamless Navigability",
  },
  {
    title: "Strategic Problem Solving",
    desc: "As adept digital troubleshooters, we decode complex challenges and deliver refined, results-driven solutions.",
    image: strategicProblemSolving,
    alt:"We provide Strategic Problem Solving in Website Development",
  },
  {
    title: "Holistic Expertise",
    desc: "From intricate builds to scalable platforms, our multidisciplinary capabilities empower your business to thrive in the digital realm.",
    image: holisticExpertise,
    alt:"We have 12+ Years of Hands-on Expertise in Website Design",
  },
];

const OurCoreStrengths = () => {
  return (
    <div className="frame-1200 py-100 sm-py-50 sm-px-20">
      {/* Heading Section */}
      <motion.div
        className="text-center sm-text-start frame-1000 mb-50 sm-mb-20"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="mb-20 sm-mb-20">
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
            <Image src={item.image} alt={item.title} width={80} height={80} />
            <h3 className="py-20 sm-py-10">{item.title}</h3>
            <p>{item.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Bottom Text */}
      <motion.div
        className={`sm-text-start sm-mt-30 ${styles.bottomBox}`}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <p>
          Website Development Agency (WD Agency) harnesses visionary thinking to give your
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
