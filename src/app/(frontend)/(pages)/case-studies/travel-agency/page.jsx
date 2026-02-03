"use client";
import React, { useState } from "react";
import Image from "next/image";
import styles from "@/app/(frontend)/assets/style/casestudies/caseStudyDetail.module.css";
import CommonFaqSection from "@/app/(frontend)/component/pages/common/CommonFaqSection";
import CtaSection from "@/app/(frontend)/component/pages/home/CtaSection";

// Import images (Using placeholders from cover-b for now)
import heroMockup from "@/app/(frontend)/assets/images/casestudies/cover-b-hero.png";
import mobileMockup from "@/app/(frontend)/assets/images/casestudies/cover-b-mobile.png";
import illustration3d from "@/app/(frontend)/assets/images/casestudies/cover-b-illustration.png";
import result1 from "@/app/(frontend)/assets/images/casestudies/cover-b-result-1.png";
import result2 from "@/app/(frontend)/assets/images/casestudies/cover-b-result-2.png";

export default function TravelAgencyCaseStudyPage() {
  const [activeTab, setActiveTab] = useState(0);

  const processSteps = [
    {
      title: "Discovery",
      content:
        "We identified that being new to the Dubai market, the agency had zero brand recognition and almost no online visibility. The primary goal was to build a brand identity from scratch.",
    },
    {
      title: "Strategy",
      content:
        "Our strategy involved building a brand identity (logo, brand messaging), developing a feature-rich booking website, and launching an aggressive multi-channel digital marketing campaign.",
    },
    {
      title: "Execution",
      content:
        "Executed the plan by designing the website, setting up social media pages, running targeted SEO and PPC campaigns, and implementing remarketing strategies to recapture interest.",
    },
  ];

  return (
    <div className={styles.wrapper}>
      {/* HERO SECTION */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <div className={styles.heroText}>
              <div className={styles.tags}>
                <span className={`${styles.tag} ${styles.tagRed}`}>Travel</span>
                <span className={`${styles.tag} ${styles.tagBlue}`}>
                  Digital Marketing
                </span>
                <span className={`${styles.tag} ${styles.tagGreen}`}>
                  Dubai, UAE
                </span>
              </div>
              <h1>TravelX</h1>
              <h2>Travel Agency in Dubai Marina</h2>
              <p>
                Building a brand presence from the ground up and generating
                quality travel enquiries.
              </p>
            </div>
            <div className={styles.heroImage}>
              <Image src={heroMockup} alt="TravelX Hero Mockup" priority />
            </div>
          </div>
        </div>
      </section>

      {/* OVERVIEW SECTION */}
      <section className={styles.overview}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2>
              Project <span className={styles.highlight}>Overview</span>
            </h2>
          </div>
          <div className={styles.overviewContent}>
            <div className={styles.overviewText}>
              <p>
                TravelX, based in Dubai Marina, sought to create a strong brand
                presence and generate a steady flow of travel enquiries from
                various regions.
              </p>
              <p>
                Being a new entrant in the competitive Dubai market, they faced
                challenges including zero brand recognition, limited online
                visibility, and almost no social media presence. They needed a
                partner to build their digital footprint from scratch.
              </p>
            </div>
            <div className={styles.overviewStats}>
              <div className={styles.statCard}>
                <h3 className={styles.statValue}>370%</h3>
                <p className={styles.statLabel}>Increase in Website Traffic</p>
              </div>
              <div className={styles.statCard}>
                <h3 className={styles.statValue}>200%</h3>
                <p className={styles.statLabel}>Boost in Travel Queries</p>
              </div>
              <div className={styles.statCard}>
                <h3 className={styles.statValue}>80+</h3>
                <p className={styles.statLabel}>1st Page Keywords</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL RESULT SECTION */}
      <section className={styles.finalResult}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2>
              Final <span className={styles.highlight}>Result</span>
            </h2>
          </div>
          <div className={styles.resultContent}>
            <p>
              We established TravelX as a recognized player in the market. The
              results speak for themselves: a massive 370% increase in traffic
              and over 80 commercial keywords ranking on the first page of
              Google.
            </p>
            <div className={styles.resultGrid}>
              <div className={styles.resultItem}>
                <Image src={result1} alt="TravelX Website Interface" />
              </div>
              <div className={styles.resultItem}>
                <Image src={result2} alt="TravelX Booking Form" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SCOPE OF WORK */}
      <section className={styles.scope}>
        <div className={styles.container}>
          <div
            className={styles.sectionHeader}
            style={{ textAlign: "center", marginBottom: "50px" }}
          >
            <h2>
              Scope of <span className={styles.highlight}>Work</span>
            </h2>
          </div>
          <div className={styles.scopeGrid}>
            <div className={styles.scopeCard}>
              <div className={styles.iconWrapper}>
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 20h9"></path>
                  <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                </svg>
              </div>
              <h3>Branding</h3>
              <p>
                Designed the brand identity including logo, color code, and core
                brand messaging.
              </p>
            </div>
            <div className={styles.scopeCard}>
              <div className={styles.iconWrapper}>
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="16 18 22 12 16 6"></polyline>
                  <polyline points="8 6 2 12 8 18"></polyline>
                </svg>
              </div>
              <h3>Web Development</h3>
              <p>
                Designed and launched a fully responsive website with booking
                features and contact forms.
              </p>
            </div>
            <div className={styles.scopeCard}>
              <div className={styles.iconWrapper}>
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 11a9 9 0 0 1 9 9"></path>
                  <path d="M4 4a16 16 0 0 1 16 16"></path>
                  <circle cx="5" cy="19" r="1"></circle>
                </svg>
              </div>
              <h3>Digital Marketing</h3>
              <p>
                Managed social media, launched ad campaigns, and executed an SEO
                strategy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CHALLENGE SECTION */}
      <section className={styles.challenge}>
        <div className={styles.container}>
          <div className={styles.challengeContent}>
            <h2 className="mb-20">
              The <span className={styles.highlight}>Challenge</span>
            </h2>
            <p>
              The main challenge for TravelX was obscurity. As a new business in
              Dubai's saturated travel market, they had no brand recognition.
              They needed a rapid strategy to build trust and visibility to
              start generating leads immediately.
            </p>
          </div>
        </div>
      </section>

      {/* PROCESS TABS SECTION */}
      <section className={styles.processTabs}>
        <div className={styles.container}>
          <div className={styles.sectionHeader} style={{ textAlign: "center" }}>
            <h2>
              Our <span className={styles.highlight}>Process</span>
            </h2>
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
          {/* Solution 1 */}
          <div className={styles.zSection}>
            <div className={styles.zText}>
              <h3>Brand & Web Presence</h3>
              <p>
                We started from square one, creating a unique brand identity
                that would resonate with travelers. We then translated this
                identity into a functional, user-friendly website equipped with
                all necessary tools for booking and inquiries.
              </p>
            </div>
            <div className={styles.zImage}>
              <Image src={mobileMockup} alt="TravelX Brand Identity" />
            </div>
          </div>

          {/* Solution 2 */}
          <div className={`${styles.zSection} ${styles.reverse}`}>
            <div className={styles.zText}>
              <h3>Growth Marketing</h3>
              <p>
                We launched a multi-pronged marketing attack: SEO to capture
                long-term traffic, PPC for immediate leads, and social media
                campaigns on Facebook, Instagram, and X to build a community.
                Remarketing ads kept TravelX top-of-mind for undecided
                travelers.
              </p>
            </div>
            <div className={styles.zImage}>
              <Image src={illustration3d} alt="TravelX Marketing Growth" />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <CommonFaqSection
        faqs={[
          {
            q: "How can a new travel agency get customers?",
            a: "New agencies need a mix of branding to build trust and performance marketing (ads, SEO) to generate immediate leads. A professional website and active social media presence are non-negotiable.",
          },
          {
            q: "What digital marketing channels are best for travel?",
            a: "Instagram and Facebook are excellent for visual inspiration. Google Ads/SEO capture high-intent users searching for specific trips. Email marketing works well for retention.",
          },
          {
            q: "How long does it take to see SEO results for a travel site?",
            a: "SEO is a long-term game, but with a targeted strategy focusing on niche keywords (like we did with TravelX), you can see significant traffic improvements and rankings within 3-4 months.",
          },
        ]}
      />

      {/* GROWTH SECTION */}
      <section className={styles.growth}>
        <div className={styles.container}>
          <div className={styles.growthContent}>
            <h2 className="mb-20">
              Client <span className={styles.highlight}>Review</span>
            </h2>
            <p>
              "Seen a massive growth in enquiries within the first 3 months.
              Improved number of branded searches and social media engagement
              has also spiked. Thank you!"
            </p>
            <p
              style={{
                marginTop: "1rem",
                fontStyle: "italic",
                fontSize: "0.9rem",
              }}
            >
              — TravelX Team
            </p>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <CtaSection />
    </div>
  );
}
