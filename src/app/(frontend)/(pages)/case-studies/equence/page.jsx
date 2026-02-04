"use client";
import React, { useState } from "react";
import Image from "next/image";
import styles from "@/app/(frontend)/assets/style/casestudies/caseStudyDetail.module.css";
import CommonFaqSection from "@/app/(frontend)/component/pages/common/CommonFaqSection";
import heroMockup from "@/app/(frontend)/assets/images/protfolio/4.webp";
import mobileMockup from "@/app/(frontend)/assets/images/casestudies/cover-b-mobile.png"; 
import illustration3d from "@/app/(frontend)/assets/images/casestudies/cover-b-illustration.png";
import result1 from "@/app/(frontend)/assets/images/casestudies/equence-result.webp";
import result2 from "@/app/(frontend)/assets/images/casestudies/equence-result-1.webp";
import CtaSection from "@/app/(frontend)/component/pages/home/CtaSection";

export default function CaseStudyDetailPage() {
  const [activeTab, setActiveTab] = useState(0);

  const processSteps = [
    {
      title: "Ideation",
      content: "Equence came to us with a disruptor idea. We facilitated deep-dive workshops to refine their value proposition and user personas."
    },
    {
      title: "MVP",
      content: "Adopted a lean startup approach to build a Minimum Viable Product. We focused on core features to get them to market quickly."
    },
    {
      title: "Scale",
      content: "After initial traction, we refactored the codebase to microservices to support their rapid user growth and new feature rollouts."
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
                <span className={`${styles.tag} ${styles.tagRed}`}>Tech Startup</span>
                <span className={`${styles.tag} ${styles.tagBlue}`}>SaaS</span>
                <span className={`${styles.tag} ${styles.tagGreen}`}>Mobile App</span>
              </div>
              <h1>Equence</h1>
              <h2>Innovating for the Future</h2>
              <p>A cutting-edge SaaS platform designed to disrupt the industry with AI-driven analytics and smart automation tools.</p>
            </div>
            <div className={styles.heroImage}>
              <Image 
                src={heroMockup} 
                alt="Equence Hero" 
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
                Equence is a tech startup focused on financial analytics. They aim to make high-level market data accessible 
                to retail investors through a simplified, gamified interface.
              </p>
              <p>
                We helped them build their product from the ground up, moving from a rough concept to a polished, 
                investor-ready application in just 4 months.
              </p>
            </div>
            <div className={styles.overviewStats}>
              <div className={styles.statCard}>
                <h3 className={styles.statValue}>10k+</h3>
                <p className={styles.statLabel}>App Downloads</p>
              </div>
              <div className={styles.statCard}>
                <h3 className={styles.statValue}>4.8</h3>
                <p className={styles.statLabel}>App Store Rating</p>
              </div>
              <div className={styles.statCard}>
                <h3 className={styles.statValue}>$2M</h3>
                <p className={styles.statLabel}>Seed Funding Raised</p>
              </div>
            </div>
          </div>
        </div>
      </section>

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
              <h3>Product Design</h3>
              <p>Designing a gamified UI that encourages daily usage and retention.</p>
            </div>
            <div className={styles.scopeCard}>
              <div className={styles.iconWrapper}>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
              </div>
              <h3>Full Stack Dev</h3>
              <p>Building the complete stack including React Native mobile apps and a Node.js backend.</p>
            </div>
            <div className={styles.scopeCard}>
              <div className={styles.iconWrapper}>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 11a9 9 0 0 1 9 9"></path><path d="M4 4a16 16 0 0 1 16 16"></path><circle cx="5" cy="19" r="1"></circle></svg>
              </div>
              <h3>Analytics</h3>
              <p>Integrating mixpanel and other tools to track user behavior and KPIs.</p>
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
              The final product is a powerful financial analytics tool. We delivered a data-rich, intuitive 
              dashboard that empowers investors to analyze markets and manage portfolios with unprecedented ease.
            </p>
            <div className={styles.resultGrid}>
              <div className={`${styles.resultItem} width-68 height-100 sm-width-100`}>
                <Image src={result1} alt="Equence Dashboard" />
              </div>
              <div className={`${styles.resultItem} width-29 height-50 sm-width-100`}>
                <Image src={result2} alt="Equence Form" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SCOPE OF WORK */}
     
      {/* CHALLENGE SECTION */}
      <section className={styles.challenge}>
        <div className={styles.container}>
          <div className={styles.challengeContent}>
            <h2 className="mb-20">The <span className={styles.highlight}>Challenge</span></h2>
            <p>
              The startup environment is fast-paced. The challenge was to deliver a stable, feature-rich product 
              on a tight budget and strict timeline, while ensuring the architecture was scalable enough 
              to handle viral growth.
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
              <h3>Intuitive Dashboards</h3>
              <p>
                We simplified complex financial charts into easy-to-read visuals, allowing users to make 
                decisions in seconds.
              </p>
            </div>
            <div className={styles.zImage}>
              <Image src={mobileMockup} alt="App Dashboard" />
            </div>
          </div>

          <div className={`${styles.zSection} ${styles.reverse}`}>
            <div className={styles.zText}>
              <h3>Community Features</h3>
              <p>
                Built-in social features allow users to share insights and learn from top performers, 
                creating a sticky ecosystem.
              </p>
            </div>
            <div className={styles.zImage}>
              <Image src={illustration3d} alt="Community Illustration" />
            </div>
          </div>
        </div>
      </section>

     
      {/* GROWTH SECTION */}
      <section className={styles.growth}>
        <div className={styles.container}>
          <div className={styles.growthContent}>
            <h2 className="mb-20">Supporting <span className={styles.highlight}>Business Growth</span></h2>
            <p>
              "This platform is exactly what the market needed. The WD Agency team were true partners, helping us navigate the technical challenges of a fintech startup."
            </p>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
     <CtaSection />
    </div>
  );
}
