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
import result1 from "@/app/(frontend)/assets/images/casestudies/travelex-1.webp";
import result2 from "@/app/(frontend)/assets/images/casestudies/travelex-2.webp";
import result3 from "@/app/(frontend)/assets/images/casestudies/travelex-3.webp";
import result4 from "@/app/(frontend)/assets/images/casestudies/travelex-4.webp";
import result5 from "@/app/(frontend)/assets/images/casestudies/travelex-5.webp";

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
                <span className={`${styles.tag} ${styles.tagRed}`}>
                  Fintech
                </span>
                <span className={`${styles.tag} ${styles.tagBlue}`}>
                  Currency Exchange
                </span>
                <span className={`${styles.tag} ${styles.tagGreen}`}>
                  UAE Wide
                </span>
              </div>
              <h1>Travelex UAE</h1>
              <h2>Leading Currency Exchange</h2>
              <p>
                Revolutionizing how travelers in the UAE buy and exchange
                foreign currency with a seamless online reservation system.
              </p>
            </div>
            <div className={styles.heroImage}>
              <Image src={result1} alt="Travelex UAE Hero Mockup" priority />
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
                Travelex is the world's leading foreign exchange specialist. In
                the UAE, they sought to digitize the currency buying experience,
                allowing customers to lock in rates online and collect cash at
                major hubs like Dubai International Airport, Abu Dhabi Airport,
                and Sharjah Airport.
              </p>
              <p>
                The goal was to increase online reservations (Click & Collect)
                and promote unique value propositions like the "Same Rate
                Guarantee" and "Tax Free Shopping" refunds, distinguishing them
                from traditional exchange houses.
              </p>
            </div>
            <div className={styles.overviewStats}>
              <div className={styles.statCard}>
                <h3 className={styles.statValue}>370%</h3>
                <p className={styles.statLabel}>Increase in Online Orders</p>
              </div>
              <div className={styles.statCard}>
                <h3 className={styles.statValue}>200%</h3>
                <p className={styles.statLabel}>Boost in Search Visibility</p>
              </div>
              <div className={styles.statCard}>
                <h3 className={styles.statValue}>60+</h3>
                <p className={styles.statLabel}>Currencies Available</p>
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
              We successfully positioned Travelex UAE as the go-to digital
              platform for travel money. The new "Reserve Online, Pay on
              Collection" workflow significantly reduced friction, while our SEO
              efforts dominated terms like "Exchange Rates Dubai" and "Buy Euro
              in UAE".
            </p>
            <div className={styles.resultGrid}>
              <div className={`${styles.resultItem} width-49 sm-width-100`}>
                <Image src={result1} alt="Travelex Website Interface" />
              </div>
              <div className={`${styles.resultItem} width-49 sm-width-100`}>
                <Image src={result2} alt="Travelex Mobile Booking" />
              </div>
              <div className={`${styles.resultItem} width-100 sm-width-100`}>
                <Image src={result3} alt="Travelex Mobile Booking" />
              </div>
              <div className={`${styles.resultItem} width-49 sm-width-100`}>
                <Image src={result4} alt="Travelex Mobile Booking" />
              </div>
              <div className={`${styles.resultItem} width-49 sm-width-100`}>
                <Image src={result5} alt="Travelex Mobile Booking" />
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
              <h3>Web Experience</h3>
              <p>
                Optimized the "Click & Collect" user flow for selecting
                currencies and finding the nearest store.
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
              <h3>SEO Strategy</h3>
              <p>
                Targeted high-volume keywords related to currency exchange rates
                and travel money in Dubai and Abu Dhabi.
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
              <h3>Product Marketing</h3>
              <p>
                Promoted niche services like "Tax Free Shopping" refunds and the
                "Same Rate Guarantee" to build trust.
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
              Travelers often view currency exchange as a last-minute chore or
              worry about high fees. Travelex needed to change this perception,
              proving that booking online yields better rates and convenience.
              Competing with established local exchange houses on "rates" alone
              was tough; we needed to win on "trust" and "convenience".
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
              <h3>Seamless Online Ordering</h3>
              <p>
                We highlighted the "3-Step Process": Select Currency → Choose
                Location → Pay on Collection. This transparency removed anxiety
                for users. We also integrated the "Store Finder" prominently to
                show their extensive presence at airports and malls.
              </p>
            </div>
            <div className={styles.zImage}>
              <Image src={mobileMockup} alt="Travelex Mobile Order" />
            </div>
          </div>

          {/* Solution 2 */}
          <div className={`${styles.zSection} ${styles.reverse}`}>
            <div className={styles.zText}>
              <h3>Trust & Security</h3>
              <p>
                To build confidence, we emphasized Travelex's regulatory
                compliance (Central Bank of UAE) and benefits like the "Same
                Rate Guarantee" (buy back at the same rate). This content
                strategy positioned them as the safest bet for travel money.
              </p>
            </div>
            <div className={styles.zImage}>
              <Image src={illustration3d} alt="Safe Currency Exchange" />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <CommonFaqSection
        faqs={[
          {
            q: "How does the online currency reservation work?",
            a: "Simply select your currency and amount online, choose your nearest store (e.g., Dubai Airport), and pick it up. You pay when you collect, locking in the order rate.",
          },
          {
            q: "What is the Same Rate Guarantee?",
            a: "For a small fee, Travelex promises to buy back your leftover foreign currency at the exact same rate you bought it, protecting you from exchange rate fluctuations.",
          },
          {
            q: "Where can I collect my ordered currency?",
            a: "You can collect your currency at Travelex stores across the UAE, including all major terminals at Dubai International Airport, Abu Dhabi Airport, and Sharjah Airport.",
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
              "The digital transformation has been incredible. We've seen a
              record number of customers reserving travel money online before
              their trips, streamlining our in-store operations significantly."
            </p>
            <p
              style={{
                marginTop: "1rem",
                fontStyle: "italic",
                fontSize: "0.9rem",
              }}
            >
              — Travelex UAE Team
            </p>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <CtaSection />
    </div>
  );
}
