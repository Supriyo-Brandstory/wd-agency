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
          <div className={styles.desktopContent}>
            {/* Progress Bar (Desktop) */}
            <div className={styles.progressBar}>
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
          </div>

          {/* Mobile View: Vertical List of All Steps */}
          <div className={styles.mobileContent}>
            {steps.map((step, index) => (
              <div key={index} className={styles.mobileCard}>
                <div className={styles.mobileNumber}>0{index + 1}</div>
                <div className={styles.mobileIconWrapper}>
                  {React.cloneElement(step.icon, { size: 32 })}
                </div>
                <h3 className={styles.mobileTitle}>{step.title}</h3>
                <p className={styles.mobileDesc}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CloudProcessSection;
