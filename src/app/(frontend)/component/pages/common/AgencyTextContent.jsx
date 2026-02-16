"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "@/app/(frontend)/assets/style/common/AgencyTextContent.module.css";

const AgencyTextContent = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <motion.h2
            className={styles.mainTitle}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Architects of Digital Dominance: WD Agency
          </motion.h2>
        </div>

        <div className={styles.textContent}>
          {/* Always Visible Content */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p>
              In the hyper-connected, fast-paced ecosystem of the United Arab
              Emirates, a business without a commanding digital presence is
              invisible. At Website Development Agency (WD Agency), we do not
              simply design websites; we architect digital destinies. We are a
              collective of strategists, designers, and developers who believe
              that your website is the single most powerful asset in your
              corporate arsenal.
            </p>
            <p>
              As a premier web design agency in Dubai, we have moved beyond the
              traditional boundaries of aesthetics. We operate where art
              intersects with engineering, and where creativity meets conversion
              data. Our mission is to build the digital heartbeat of your
              brand- a living, breathing platform that not only looks stunning
              but also functions as a relentless engine for business growth.
            </p>
          </motion.div>

          {/* Expandable Content */}
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                style={{ overflow: "hidden" }}
              >
                <h2>Why Your UAE Business Needs a Professional Website</h2>
                <h3>Dubai’s Digital Economy Demands Strong Presence</h3>
                <p>
                  The UAE is leading digital transformation through government initiatives
                   that promote smart solutions and seamless online experiences. A professional
                    website is no longer optional; it is a critical business asset essential for 
                    competitiveness and growth.
                </p>
                <h3>Capitalize on UAE's Growing E-Commerce Market</h3>
                <p>
                  The Middle East's online retail sector is expanding rapidly, with Dubai at its 
                  forefront. A strategically developed website enables you to capture this demand, 
                  reaching customers throughout the UAE and internationally, available 24/7 without 
                  geographic restrictions.
                </p>
                <h3>Establish Credibility in Competitive Landscape</h3>
                <p>
                  In Dubai's dynamic market, first impressions are formed online. A professional website 
                  conveys expertise, displays your portfolio, and highlights client successes, distinguishing
                   established businesses from competitors.
                </p>
                <h3>Secure B2B Growth Opportunities</h3>
                <p>Business decision-makers conduct online research before engaging. A well-crafted website 
                  serves as a continuous demonstration of your capabilities, attracting potential partners, 
                  investors, and enterprise clients who can significantly advance your business.</p>

                <h2>How We Deliver a High-Performance Digital Platform</h2>
                <h3>Phase 1: Discovery & Strategic Foundation</h3>
                <p>
                  We begin by thoroughly examining what distinguishes your business. Through collaborative
                   discussions, we identify your goals, challenges, target audience, and competitive positioning.
                </p>
                <p>What We Do:</p>
                <li>In-depth consultations to align on business objectives, brand identity, and success criteria</li>
                <li>Audience analysis to understand customer needs and online behavior.</li>
                <li>Competitor review to identify differentiation opportunities.</li>

                <h3>Phase 2: Blueprint & Strategy</h3>
                <p>
                  With gathered insights, we create a structured plan that converts concepts into an 
                  executable development strategy. Every element is purposeful and aligned with your objectives.
                </p>
                <p>What we do:</p>
                <li>Site architecture and navigation design for intuitive user journeys and conversions.</li>
                <li>Content strategy outlining text, visuals, video, and interactive components. </li>
                <li>Technical specifications, including platform, integrations, hosting, and security.</li>
                <li>Defined timeline with milestones and deliverables for full transparency.</li>

                <h3>Phase 3: Design & User Experience</h3>
                <p>
                  Strategy integrates with creative execution to produce visual experiences that engage users 
                  and guide them toward your goals. What we do:
                </p>
                <li>Wireframe creation focused on usability and flow.</li>
                <li>High-fidelity mockups incorporating your brand elements for accurate preview.</li>
                <li>Iterative reviews and refinements based on your feedback.</li>
                <li>Mobile-first design optimized for all devices.</li>
              

                <h3>Phase 4: Development & Quality Assurance</h3>
                <p>
                  Our developers convert approved designs into secure, high-speed websites through precise coding and thorough validation. What we do:
                </p>
                <li>Custom implementation of all features and functionalities.</li>
                <li>Professional integration of content and media.</li>
                <li>Multi-device, multi-browser testing to resolve issues preemptively.</li>
                <li>Performance enhancements for fast loading and optimal efficiency.</li>

                
                <h3>Phase 5: Launch & Ongoing Optimization</h3>
                <p>
                  Launch marks the start of ongoing value. We manage a seamless rollout and provide continuous support to maximize impact. What we do:
                </p>
                <li>Final verification, security checks, and coordinated launch.</li>
                <li>Initial SEO implementation for improved visibility and organic reach.</li>
                <li>Analytics configuration to track user behavior and guide enhancements.</li>
                <li>Post-launch training, maintenance, and strategic optimization.</li>
                

                <h2>Best Website Development Agency in Dubai, UAE</h2>
                <p>
                  Your website is your legacy in the digital world. It is the
                  first thing a potential client sees, and often the last thing
                  they remember. Do not leave it to chance. At <a href="https://websitedevelopmentagency.ae">Website Development Agency</a>, we are
                  ready to take your venture to new heights.
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Gradient Overlay when collapsed */}
          {!isExpanded && <div className={styles.fadeOverlay}></div>}
        </div>

        <div className={styles.buttonWrapper}>
          <button
            onClick={toggleExpand}
            className={`${styles.toggleButton} ${isExpanded ? styles.expanded : ""}`}
          >
            {isExpanded ? "Show Less" : "Read More"}
            <svg
              className={styles.icon}
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default AgencyTextContent;
