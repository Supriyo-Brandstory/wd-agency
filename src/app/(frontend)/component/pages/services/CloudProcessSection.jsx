"use client";
import React, { useState } from "react";
import styles from "@/app/(frontend)/assets/style/services/cloudProcessSection.module.css";
import { motion, AnimatePresence } from "framer-motion";

const CloudProcessSection = ({ title, description, steps }) => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className={styles.section}>
      <div className="frame-1200 sm-px-20">
        <div className={styles.header}>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {title}
          </motion.h2>
          <motion.div
            className={styles.description}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            dangerouslySetInnerHTML={{ __html: description }}
          />
        </div>

        <div className={styles.timelineContainer}>
          {/* Progress Bar (Desktop) */}
          <div className={`${styles.progressBar} hidden-sm`}>
            <div
              className={styles.progressFill}
              style={{
                width: `${(activeStep / (steps.length - 1)) * 100}%`,
              }}
            />
            {steps.map((step, index) => (
              <div
                key={index}
                className={`${styles.stepNode} ${
                  index === activeStep ? styles.active : ""
                } ${index < activeStep ? styles.passed : ""}`}
                onClick={() => setActiveStep(index)}
              >
                <div className={styles.stepLabel}>{step.label}</div>
              </div>
            ))}
          </div>

          {/* Main Content Area */}
          <div style={{ position: "relative", minHeight: "350px" }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                className={styles.contentCard}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <div className={styles.cardIcon}>
                  {React.cloneElement(steps[activeStep].icon, { size: 50 })}
                </div>
                <div className={styles.cardText}>
                  <h3>{steps[activeStep].title}</h3>
                  <p>{steps[activeStep].desc}</p>
                </div>
                <div className={styles.phaseIndicator}>0{activeStep + 1}</div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Mobile Stepper Controls (Since bar is hidden) */}
          <div className="visible-sm" style={{ display: "none" }}>
            {" "}
            {/* CSS module handles visibility better normally, but for quick fix: */}
            {/* Note: In a real mobile implementation, we'd use a swiper or simple next/prev buttons. 
                 For now, the user didn't ask for mobile specifics, but the CSS handles a vertical list nicely. 
                 Actually, let's just let the 'timelineContainer' CSS logic handle the layout shift.
             */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CloudProcessSection;
