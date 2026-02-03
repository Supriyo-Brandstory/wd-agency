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
import result1 from "@/app/(frontend)/assets/images/casestudies/leru-remote-1.webp";
import result2 from "@/app/(frontend)/assets/images/casestudies/leru-remote-2.webp";
import result3 from "@/app/(frontend)/assets/images/casestudies/leru-remote-3.webp";
import result4 from "@/app/(frontend)/assets/images/casestudies/leru-remote-4.webp";
import result5 from "@/app/(frontend)/assets/images/casestudies/leru-remote-5.webp";

export default function LeruRemoteCaseStudyPage() {
  const [activeTab, setActiveTab] = useState(0);

  const processSteps = [
    {
      title: "Discovery",
      content:
        "We identified the need for a streamlined B2B platform that could effectively communicate the value of remote hiring to skeptical SMEs. The goal was to build trust through clear process visualization.",
    },
    {
      title: "Strategy",
      content:
        "Developed a content-heavy strategy focusing on 'Education'—explaining the EOR (Employer of Record) model, compliance, and payroll handling clearly to potential business clients.",
    },
    {
      title: "Execution",
      content:
        "Built a professional, high-performance website with dedicated landing pages for different markets (startups vs enterprises) and integrated an automated lead qualification system.",
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
                  HR Tech
                </span>
                <span className={`${styles.tag} ${styles.tagBlue}`}>
                  B2B Services
                </span>
                <span className={`${styles.tag} ${styles.tagGreen}`}>
                  Global
                </span>
              </div>
              <h1>Leru Remote</h1>
              <h2>Global Remote Talent Solutions</h2>
              <p>
                Connecting innovative startups and SMEs with top-tier remote
                professionals worldwide through a seamless recruitment platform.
              </p>
            </div>
            <div className={styles.heroImage}>
              <Image src={result1} alt="Leru Remote Hero Mockup" priority />
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
                Leru Remote specializes in helping companies build distributed
                teams. They needed a digital presence that would position them
                as experts in cross-border hiring, payroll management, and
                compliance.
              </p>
              <p>
                The challenge was to simplify complex HR processes for business
                owners. We designed a website that breaks down their "Executive
                Search" approach—vetting, interviewing, and onboarding—into
                digestible, convincing steps.
              </p>
            </div>
            <div className={styles.overviewStats}>
              <div className={styles.statCard}>
                <h3 className={styles.statValue}>40%</h3>
                <p className={styles.statLabel}>Increase in Client Leads</p>
              </div>
              <div className={styles.statCard}>
                <h3 className={styles.statValue}>2.5x</h3>
                <p className={styles.statLabel}>Faster Client Onboarding</p>
              </div>
              <div className={styles.statCard}>
                <h3 className={styles.statValue}>Global</h3>
                <p className={styles.statLabel}>Reach Across 4 Continents</p>
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
              We delivered a robust corporate website that serves as a
              lead-generation engine. By clearly articulating services like
              Payroll Management and Compliance, we helped Leru Remote convert
              hesitant prospects into long-term partners.
            </p>
            <div className={styles.resultGrid}>
              <div className={`${styles.resultItem} width-49 sm-width-100`}>
                <Image src={result1} alt="Leru Remote Website Interface" />
              </div>
              <div className={`${styles.resultItem} width-49 sm-width-100`}>
                <Image src={result2} alt="Leru Remote Services Page" />
              </div>
              <div className={`${styles.resultItem} width-100 sm-width-100`}>
                <Image src={result3} alt="Leru Remote Services Page" />
              </div>
              <div className={`${styles.resultItem} width-49 sm-width-100`}>
                <Image src={result4} alt="Leru Remote Services Page" />
              </div>
              <div className={`${styles.resultItem} width-49 sm-width-100`}>
                <Image src={result5} alt="Leru Remote Services Page" />
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
              <h3>UX/UI Design</h3>
              <p>
                Designed a clean, corporate aesthetic that instills trust and
                simplifies complex service offerings.
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
              <h3>Lead Gen Strategy</h3>
              <p>
                Implemented strategic CTAs and lead capture forms for "Talent
                Consultation" throughout the user journey.
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
              <h3>Content Strategy</h3>
              <p>
                Created content clusters around "Remote Work Compliance" and
                "Global Payroll" to drive B2B SEO.
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
              Many SMEs are interested in remote talent but fear the legal and
              administrative complexities. Leru Remote's challenge was to prove
              that they handle *everything*—from vetting to payroll—making the
              process risk-free for clients.
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
              <h3>Streamlined Client Onboarding</h3>
              <p>
                We built a clearer 'How It Works' section that walks clients
                through Briefing, Sourcing, and Onboarding. By visualizing the
                timeline, we reduced sales friction and set clear expectations
                for the service delivery.
              </p>
            </div>
            <div className={styles.zImage}>
              <Image src={mobileMockup} alt="Leru Remote Onboarding Flow" />
            </div>
          </div>

          {/* Solution 2 */}
          <div className={`${styles.zSection} ${styles.reverse}`}>
            <div className={styles.zText}>
              <h3>Trust Signals</h3>
              <p>
                We strategically placed testimonials, compliance certifications,
                and case studies of successful placements (DevOps, AI
                Scientists) to validate their expertise in high-demand tech
                roles.
              </p>
            </div>
            <div className={styles.zImage}>
              <Image src={illustration3d} alt="Trust and Verification" />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <CommonFaqSection
        faqs={[
          {
            q: "How does Leru Remote vet candidates?",
            a: "We implemented a section detailing their rigorous screening process, including skills testing, reference checks, and personality assessments, to reassure clients of quality.",
          },
          {
            q: "Where does Leru Remote source talent from?",
            a: "The website highlights their global reach, specifically in regions like India, Eastern Europe, Latin America, and Southeast Asia.",
          },
          {
            q: "Does Leru Remote handle payroll?",
            a: "Yes, we emphasized their EOR services, explaining how they manage local employment laws, tax compliance, and timely salary payments for remote staff.",
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
              "The new website has completely transformed how we present
              ourselves. Clients now understand our full value proposition
              immediately, and our lead quality has improved drastically."
            </p>
            <p
              style={{
                marginTop: "1rem",
                fontStyle: "italic",
                fontSize: "0.9rem",
              }}
            >
              — Leru Remote Management
            </p>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <CtaSection />
    </div>
  );
}
