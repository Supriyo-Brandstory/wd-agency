"use client";
import React, { useState } from "react";
import Image from "next/image";
import styles from "@/app/(frontend)/assets/style/casestudies/caseStudyDetail.module.css";
import CommonFaqSection from "@/app/(frontend)/component/pages/common/CommonFaqSection";
import CtaSection from "@/app/(frontend)/component/pages/home/CtaSection";

// Import images (Using placeholders from cover-b for now)
import mobileMockup from "@/app/(frontend)/assets/images/casestudies/cover-b-mobile.png";
import illustration3d from "@/app/(frontend)/assets/images/casestudies/cover-b-illustration.png";
import result1 from "@/app/(frontend)/assets/images/casestudies/leru-partners-1.webp";
import result2 from "@/app/(frontend)/assets/images/casestudies/leru-partners-2.webp";
import result3 from "@/app/(frontend)/assets/images/casestudies/leru-partners-3.webp";
import result4 from "@/app/(frontend)/assets/images/casestudies/leru-partners-4.webp";
import result5 from "@/app/(frontend)/assets/images/casestudies/leru-partners-5.webp";

export default function LeruPartnersCaseStudyPage() {
  const [activeTab, setActiveTab] = useState(0);

  const processSteps = [
    {
      title: "Discovery",
      content:
        "Job seekers are often wary of 'remote job scams'. We needed a careers platform that felt legitimate, stable, and integrated, distinguishing Leru Partners from freelance marketplaces.",
    },
    {
      title: "Strategy",
      content:
        "Focused on 'Career Stability' and 'Belonging'. The design highlights long-term full-time roles, company culture, and the support system provided to remote employees.",
    },
    {
      title: "Execution",
      content:
        "Developed a user-friendly job board with advanced filtering, detailed role descriptions, and a smooth application flow that collects necessary candidate data efficiently.",
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
                  Recruitment
                </span>
                <span className={`${styles.tag} ${styles.tagBlue}`}>
                  Job Board
                </span>
                <span className={`${styles.tag} ${styles.tagGreen}`}>
                  Careers
                </span>
              </div>
              <h1>Leru Partners</h1>
              <h2>Global Careers Platform</h2><br></br>
              <p>
                A dedicated portal connecting skilled professionals with
                full-time, long-term remote opportunities at innovative
                companies.
              </p>
            </div>
            <div className={styles.heroImage}>
              <Image src={result1} alt="Leru Partners Hero Mockup" priority />
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
                Leru Partners operates as the candidate-facing platform responsible for managing applications
                 for remote job opportunities across multiple roles. The platform needed to serve as a central 
                 destination where professionals in technology, sales, and management could explore verified openings 
                 and submit applications efficiently.
              </p>
              <p>
                The objective was to design and develop a structured careers experience rather than a simple job listing page.
                 The website was built to present opportunities clearly, support the application workflow, and communicate what
                  candidates can expect from remote roles offered through Leru Partners, while addressing common concerns
                   associated with remote work.
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
              <h3>Web Development</h3>
              <p>
                Built a responsive, fast-loading job board with search and
                filter capabilities for various roles (Tech, Sales, Management).
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
              <h3>Candidate Experience</h3>
              <p>
                Designed and implemented a clear application journey, guiding users smoothly from job discovery 
                through application submission with minimal friction and clear status feedback.
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
                Implemented clean, scalable code and conducted cross-device testing to ensure reliable 
                performance, usability, and long-term maintainability of the careers platform.
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
              The project delivered a structured and reliable careers portal that presents remote job opportunities clearly
               and supports a smooth application workflow. The streamlined interface improves usability for candidates, reduces 
               friction during submissions, and provides an efficient platform for managing job applications across multiple roles.
            </p>
            <div className={styles.resultGrid}>
              <div className={`${styles.resultItem} width-49 sm-width-100`}>
                <Image src={result1} alt="Leru Partners Job Board" />
              </div>
              <div className={`${styles.resultItem} width-49 sm-width-100`}>
                <Image src={result2} alt="Leru Partners Job Detail" />
              </div>
              <div className={`${styles.resultItem} width-100 sm-width-100`}>
                <Image src={result3} alt="Leru Partners Job Detail" />
              </div>
              <div className={`${styles.resultItem} width-49 sm-width-100`}>
                <Image src={result4} alt="Leru Partners Job Detail" />
              </div>
              <div className={`${styles.resultItem} width-49 sm-width-100`}>
                <Image src={result5} alt="Leru Partners Job Detail" />
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
              The challenge was to design a careers platform that goes beyond basic job listings and clearly
               communicates role context, expectations, and long-term opportunities. From a development perspective, 
               this required structuring content and workflows that present company culture, role stability, and benefits
                in a clear, accessible, and scalable digital format.
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
              <h3>Searchable Job Board</h3>
              <p>
                We implemented a robust search interface allowing candidates to
                filter by "Job Function" (e.g., Engineering, Sales) and
                "Location" (Global/Remote). This enhances usability and helps
                users find relevant roles instantly.
              </p>
            </div>
            <div className={styles.zImage}>
              <Image src={mobileMockup} alt="Job Search Functionality" />
            </div>
          </div>

          {/* Solution 2 */}
          <div className={`${styles.zSection} ${styles.reverse}`}>
            <div className={styles.zText}>
              <h3>Value Proposition</h3>
              <p>
                Content throughout the site reinforces the benefits of joining
                Leru: full-time contracts, long-term stability, and integration
                into client teams. This messaging is crucial for attracting
                senior-level talent.
              </p>
            </div>
            <div className={styles.zImage}>
              <Image src={illustration3d} alt="Career Benefits" />
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
              "The new careers platform has streamlined our recruitment process.
              We are receiving higher quality applications and our brand is now
              seen as a premium destination for remote talent."
            </p>
            <p
              style={{
                marginTop: "1rem",
                fontStyle: "italic",
                fontSize: "0.9rem",
              }}
            >
              — Leru Partners HR Team
            </p>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <CtaSection />
    </div>
  );
}
