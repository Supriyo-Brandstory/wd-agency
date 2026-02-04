"use client";
import React, { useState } from "react";
import Image from "next/image";
import styles from "@/app/(frontend)/assets/style/casestudies/caseStudyDetail.module.css";
import CommonFaqSection from "@/app/(frontend)/component/pages/common/CommonFaqSection";
import CtaSection from "@/app/(frontend)/component/pages/home/CtaSection";

// Import images (Using placeholders from cover-b for now)
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
        "We worked closely with the Travelex UAE team to understand operational requirements, compliance considerations, and user expectations related to online currency reservation and branch selection.",
    },
    {
      title: "Strategy",
      content:
        "Based on the insights gathered, we defined a clear website structure and user flow focused on simplifying currency selection, reservation steps, and information clarity across devices.",
    },
    {
      title: "Execution",
      content:
        "The website was designed and developed with an integrated “Click & Collect” reservation system, followed by thorough testing to ensure accuracy, usability, and stable performance.",
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
              <h2>Currency Exchange Provider</h2><br></br>
              <p>
                Travelex UAE is a well-established foreign currency exchange provider serving travelers
                 across the United Arab Emirates. The platform supports customers looking to reserve and
                  exchange foreign currency conveniently, while maintaining accuracy, clarity, and trust 
                  across its digital touchpoints.
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
                Travelex UAE required a modern website that could support its online currency reservation system 
                while presenting complex financial information in a clear and user-friendly manner. The objective
                 was to design and develop a reliable digital platform that simplifies user interaction, ensures
                  smooth navigation, and delivers a consistent experience across devices.
              </p>
              <p>
                The website was built to handle structured content, clear call-to-actions, and seamless user 
                flows, supporting customers throughout their reservation journey while aligning with Travelex UAE’s
                 established brand standards.
              </p>
            </div>
            <div className={styles.overviewStats}>
              <div className={styles.statCard}>
                <h3 className={styles.statValue}>100%</h3>
                <p className={styles.statLabel}>Responsive design across devices</p>
              </div>
              <div className={styles.statCard}>
                <h3 className={styles.statValue}>3X</h3>
                <p className={styles.statLabel}>Faster page loading time & performance</p>
              </div>
              <div className={styles.statCard}>
                <h3 className={styles.statValue}>100%</h3>
                <p className={styles.statLabel}>Improved user navigation flow</p>
              </div>
            </div>
          </div>
        </div>
      </section>

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
              <h3>Web Experience Design</h3>
              <p>
                Designed a clear and intuitive user experience focused on simplifying currency selection, rate visibility, and store discovery, 
                ensuring users can easily navigate the platform and understand the reservation process.
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
              <h3>Website Development</h3>
              <p>
                Developed a responsive, high-performance website with an integrated “Click & Collect” currency reservation system, allowing users
                 to select currencies, enter quantities, and choose nearby branches seamlessly across devices.
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
              <h3>Technical Implementation</h3>
              <p>
                Implemented a secure, scalable, and maintainable codebase with thorough testing to ensure accuracy, performance 
                stability, and reliable functionality of the reservation workflow in a live environment.
              </p>
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
              The project delivered a structured and reliable digital platform that supports Travelex UAE’s online currency reservation process. The new “Reserve Online, Pay on Collection” workflow simplifies user interaction, improves clarity around currency
               selection and pickup locations, and provides customers with a consistent and efficient experience across devices.
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
      

      {/* CHALLENGE SECTION */}
      <section className={styles.challenge}>
        <div className={styles.container}>
          <div className={styles.challengeContent}>
            <h2 className="mb-20">
              The <span className={styles.highlight}>Challenge</span>
            </h2>
            <p>
              Many travelers perceive currency exchange as a last-minute task, often associated with uncertainty around rates and fees. 
              Travelex UAE needed a digital platform that could clearly communicate reliability, transparency, and ease of use. Competing
               purely on exchange rates was not sustainable; the challenge was to build a trustworthy and convenient online reservation experience
                that users could rely on with confidence.
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
