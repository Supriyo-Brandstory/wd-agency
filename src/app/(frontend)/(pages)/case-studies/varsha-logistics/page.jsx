"use client";
import React, { useState } from "react";
import Image from "next/image";
import styles from "@/app/(frontend)/assets/style/casestudies/caseStudyDetail.module.css";
import CommonFaqSection from "@/app/(frontend)/component/pages/common/CommonFaqSection";
import heroMockup from "@/app/(frontend)/assets/images/protfolio/1.webp"; // Using existing portfolio image
// Re-using common graphics or placeholders for now
import mobileMockup from "@/app/(frontend)/assets/images/casestudies/cover-b-mobile.png"; 
import illustration3d from "@/app/(frontend)/assets/images/casestudies/cover-b-illustration.png";
import result1 from "@/app/(frontend)/assets/images/casestudies/cover-b-result-1.png";
import result2 from "@/app/(frontend)/assets/images/casestudies/cover-b-result-2.png";
import result3 from "@/app/(frontend)/assets/images/casestudies/cover-b-result-3.png";
import CtaSection from "@/app/(frontend)/component/pages/home/CtaSection";

export default function CaseStudyDetailPage() {
  const [activeTab, setActiveTab] = useState(0);

  const processSteps = [
    {
      title: "Discovery",
      content: "We analyzed Varsha Logistics' supply chain operations to identify key pain points in tracking and fleet management. The goal was to digitize legacy manual processes."
    },
    {
      title: "Strategy",
      content: "Designed a comprehensive logistics management system focusing on real-time tracking, automated dispatching, and inventory management."
    },
    {
      title: "Execution",
      content: "Developed a secure, cloud-based platform using scalable technologies, ensuring 99.9% uptime for their critical 24/7 operations."
    }
  ];

  return (
    <div className={styles.wrapper}>
      {/* HERO SECTION */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <div className={styles.heroText}>
              <div className={styles.tags}>
                <span className={`${styles.tag} ${styles.tagRed}`}>Logistics</span>
                <span className={`${styles.tag} ${styles.tagBlue}`}>Supply Chain</span>
                <span className={`${styles.tag} ${styles.tagGreen}`}>Web App</span>
              </div>
              <h1>Varsha Logistics</h1>
              <h2>Streamlining Global Logistics</h2>
              <p>A digital transformation project to modernize fleet tracking, reducing delays and optimizing route planning for a global logistics leader.</p>
            </div>
            <div className={styles.heroImage}>
              <Image 
                src={heroMockup} 
                alt="Varsha Logistics Hero" 
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* OVERVIEW SECTION */}
      <section className={styles.overview}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2>Project <span className={styles.highlight}>Overview</span></h2>
          </div>
          <div className={styles.overviewContent}>
            <div className={styles.overviewText}>
              <p>
                Varsha Logistics needed a robust digital solution to manage their expanding fleet and warehouse operations. 
                Legacy systems were slowing down decision-making and causing data discrepancies.
              </p>
              <p>
                We partnered with them to build a unified logistics platform that connects drivers, warehouse managers, and clients 
                in real-time, providing transparency and efficiency across the supply chain.
              </p>
            </div>
            <div className={styles.overviewStats}>
              <div className={styles.statCard}>
                <h3 className={styles.statValue}>500+</h3>
                <p className={styles.statLabel}>Trucks Tracked</p>
              </div>
              <div className={styles.statCard}>
                <h3 className={styles.statValue}>40%</h3>
                <p className={styles.statLabel}>Efficiency Gain</p>
              </div>
              <div className={styles.statCard}>
                <h3 className={styles.statValue}>99%</h3>
                <p className={styles.statLabel}>On-Time Delivery</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL RESULT SECTION */}
      <section className={styles.finalResult}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2>Final <span className={styles.highlight}>Result</span></h2>
          </div>
          <div className={styles.resultContent}>
            <p>
              The culmination of our efforts is a state-of-the-art logistics tracking platform. 
              We delivered a sleek, intuitive dashboard that empowers fleet managers to track shipments 
              and optimize routes with unprecedented ease and speed.
            </p>
            <div className={styles.resultGrid}>
              <div className={styles.resultItem}>
                <Image src={result1} alt="Varsha Logistics Dashboard" />
              </div>
              <div className={styles.resultItem}>
                <Image src={result2} alt="Varsha Logistics Form" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SCOPE OF WORK */}
      <section className={styles.scope}>
        <div className={styles.container}>
          <div className={styles.sectionHeader} style={{ textAlign: "center", marginBottom: "50px" }}>
             <h2>Scope of <span className={styles.highlight}>Work</span></h2>
          </div>
          <div className={styles.scopeGrid}>
            <div className={styles.scopeCard}>
              <div className={styles.iconWrapper}>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg>
              </div>
              <h3>UX/UI Design</h3>
              <p>Creating intuitive dashboards for fleet managers to monitor assets at a glance.</p>
            </div>
            <div className={styles.scopeCard}>
              <div className={styles.iconWrapper}>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
              </div>
              <h3>Development</h3>
              <p>Custom web application development with real-time GPS integration and reporting.</p>
            </div>
            <div className={styles.scopeCard}>
              <div className={styles.iconWrapper}>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 11a9 9 0 0 1 9 9"></path><path d="M4 4a16 16 0 0 1 16 16"></path><circle cx="5" cy="19" r="1"></circle></svg>
              </div>
              <h3>Optimization</h3>
              <p>Database optimization to handle large volumes of transactional data efficiently.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CHALLENGE SECTION */}
      <section className={styles.challenge}>
        <div className={styles.container}>
          <div className={styles.challengeContent}>
            <h2 className="mb-20">The <span className={styles.highlight}>Challenge</span></h2>
            <p>
              The main challenge was integrating diverse hardware tracking devices with a unified software interface. 
              Additionally, the system needed to be accessible in low-bandwidth areas for drivers on the road. 
              We needed a solution that was both powerful and lightweight.
            </p>
          </div>
        </div>
      </section>

      {/* PROCESS TABS SECTION */}
      <section className={styles.processTabs}>
        <div className={styles.container}>
          <div className={styles.sectionHeader} style={{ textAlign: "center" }}>
            <h2>Our <span className={styles.highlight}>Process</span></h2>
          </div>
          <div className={styles.tabsWrapper}>
            <div className={styles.tabHeaders}>
              {processSteps.map((step, index) => (
                <button
                  key={index}
                  className={`${styles.tabBtn} ${activeTab === index ? styles.activeTab : ""}`}
                  onClick={() => setActiveTab(index)}
                >
                  {step.title}
                </button>
              ))}
            </div>
            <div className={styles.tabContent}>
              <h3>{processSteps[activeTab].title} Phase</h3>
              <p>{processSteps[activeTab].content}</p>
            </div>
          </div>
        </div>
      </section>

      {/* SOLUTION SECTIONS */}
      <section className={styles.solution}>
        <div className={styles.container}>
          <div className={styles.zSection}>
            <div className={styles.zText}>
              <h3>Real-Time Fleet Tracking</h3>
              <p>
                We implemented a live map view that shows the exact location of every truck in the fleet. 
                Managers can see speed, fuel status, and estimated arrival times instantly.
              </p>
            </div>
            <div className={styles.zImage}>
              <Image src={mobileMockup} alt="Mobile Tracking App" />
            </div>
          </div>

          <div className={`${styles.zSection} ${styles.reverse}`}>
            <div className={styles.zText}>
              <h3>Automated Dispatch System</h3>
              <p>
                The new system automatically assigns pickups to the nearest available driver, reducing 
                idle time and fuel consumption. This smart allocation has revolutionized their dispatch operations.
              </p>
            </div>
            <div className={styles.zImage}>
              <Image src={illustration3d} alt="Automation Illustration" />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <CommonFaqSection
        faqs={[
          {
            q: "How did you handle the GPS integration?",
            a: "We used a unified API layer to ingest data from various GPS hardware providers and normalize it for our platform."
          },
          {
            q: "Is the application mobile responsive?",
            a: "Yes, the driver's interface is a PWA (Progressive Web App) designed to work offline and on mobile devices seamlessly."
          },
          {
            q: "What tech stack was used?",
            a: "We used React.js for the frontend, Node.js for real-time data streaming, and MongoDB for handling large datasets."
          }
        ]}
      />

      {/* GROWTH SECTION */}
      <section className={styles.growth}>
        <div className={styles.container}>
          <div className={styles.growthContent}>
            <h2 className="mb-20">Supporting <span className={styles.highlight}>Business Growth</span></h2>
            <p>
              "The new tracking system has given us visibility we never had before. We've reduced operational costs by 15% in just 6 months."
            </p>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
     <CtaSection />
    </div>
  );
}
