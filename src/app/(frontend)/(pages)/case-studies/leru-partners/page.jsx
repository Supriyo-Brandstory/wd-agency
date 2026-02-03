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
              <h2>Global Careers Platform</h2>
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
                Leru Partners serves as the candidate-facing brand, managing the
                pipeline of talent for their remote job openings. They needed a
                centralized hub where tech, sales, and management professionals
                could find and apply for verified roles.
              </p>
              <p>
                The goal was to create a "Careers" experience, not just a job
                list. The site needed to communicate the benefits of working
                remotely through Leru: stability, growth, and community,
                addressing common pain points of remote workers like isolation.
              </p>
            </div>
            <div className={styles.overviewStats}>
              <div className={styles.statCard}>
                <h3 className={styles.statValue}>5000+</h3>
                <p className={styles.statLabel}>Applications Processed</p>
              </div>
              <div className={styles.statCard}>
                <h3 className={styles.statValue}>150%</h3>
                <p className={styles.statLabel}>Increase in Organic Traffic</p>
              </div>
              <div className={styles.statCard}>
                <h3 className={styles.statValue}>High</h3>
                <p className={styles.statLabel}>Candidate Retention Rate</p>
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
              We launched a polished careers portal that ranks for key terms
              like "Remote AI Jobs" and "Sales Development Representative
              Remote". The application process is streamlined, resulting in a
              higher completion rate and better candidate quality.
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
                Optimized the user journey from "Job Search" to "Application
                Submitted" to reduce drop-off rates.
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
              <h3>SEO Optimization</h3>
              <p>
                Targeted keywords related to remote work in specific sectors to
                attract high-quality, relevant applications.
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
              Attracting top talent in a competitive market requires more than
              just posting a job description. We needed to convey the culture,
              benefits, and stability of the roles offered through Leru
              Partners, differentiating them from short-term gig work.
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

      {/* FAQ SECTION */}
      <CommonFaqSection
        faqs={[
          {
            q: "What types of jobs are available?",
            a: "We feature a wide range of roles including Tech (AI, DevOps), Sales (SDR, Business Development), and Management positions.",
          },
          {
            q: "Are these full-time positions?",
            a: "Yes, Leru Partners focuses on placing candidates in full-time, long-term roles offering stability and growth, not short-term freelance gigs.",
          },
          {
            q: "What support do remote employees receive?",
            a: "Candidates receive comprehensive onboarding, ongoing support from the Leru team, and managed payroll to ensure a smooth remote working experience.",
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
