"use client";
import React, { useState } from "react";
import Image from "next/image";
import styles from "@/app/(frontend)/assets/style/casestudies/caseStudyDetail.module.css";
import CommonFaqSection from "@/app/(frontend)/component/pages/common/CommonFaqSection";
import CtaSection from "@/app/(frontend)/component/pages/home/CtaSection";

// Import images (Using placeholders from cover-b for now)
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
        "We analysed Leru Remote’s service structure, user types, and content requirements to understand how complex HR processes should be represented digitally.",
    },
    {
      title: "Strategy",
      content:
        "A clear website architecture was defined to separate offerings for startups and enterprise clients while maintaining consistent structure and navigation.",
    },
    {
      title: "Execution",
      content:
        "The website was designed and developed with dedicated pages for different audiences, supported by structured forms and system logic to route enquiries appropriately.",
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
              <h2>Remote Talent Solutions</h2><br></br>
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
                Leru Remote is a global workforce solutions company that helps businesses
                 build and manage distributed teams across multiple countries. Their services
                  span international hiring, payroll coordination, and compliance support, requiring 
                  clear communication and structured information delivery.
              </p>
              <p>
                The project involved designing and developing a website that simplifies complex HR processes into clear, 
                understandable sections. The platform presents Leru Remote’s executive search and talent onboarding workflow 
                in a structured manner, helping business owners easily understand how remote hiring is managed from sourcing 
                through deployment.
              </p>
            </div>
            <div className={styles.overviewStats}>
              <div className={styles.statCard}>
                <h3 className={styles.statValue}>100%</h3>
                <p className={styles.statLabel}>Responsive design across devices</p>
              </div>
              <div className={styles.statCard}>
                <h3 className={styles.statValue}>2.5x</h3>
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
              <h3>UX/UI Design</h3>
              <p>
                Designed a clean, corporate interface that establishes credibility and clearly presents Leru 
                Remote’s global hiring, payroll, and compliance services in an easy-to-understand format.
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
                Developed a responsive website with structured service pages, intuitive navigation, and clear user 
                flows to help businesses understand Leru Remote’s executive search and remote workforce processes.
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
              <h3>Content Structuring</h3>
              <p>
                Organised complex HR and compliance information into well-defined sections, ensuring clarity, 
                readability, and logical progression across the website for business decision-makers.
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
              The project resulted in a structured corporate website that clearly presents Leru Remote’s services, including
               payroll management and compliance support. The platform improves information clarity, supports informed decision-making, 
               and provides a reliable digital reference point for businesses exploring distributed workforce solutions.
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
      

      {/* CHALLENGE SECTION */}
      <section className={styles.challenge}>
        <div className={styles.container}>
          <div className={styles.challengeContent}>
            <h2 className="mb-20">
              The <span className={styles.highlight}>Challenge</span>
            </h2>
            <p>
              Leru Remote’s services involve complex workflows covering international hiring, payroll, and compliance, 
              which were difficult to present clearly within a single digital platform. The challenge was to translate these
               multi-step processes into a well-structured website experience that remains clear, credible, and easy to understand 
               for business users.
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
