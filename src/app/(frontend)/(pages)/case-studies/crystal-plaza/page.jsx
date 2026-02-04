"use client";
import React, { useState } from "react";
import Image from "next/image";
import styles from "@/app/(frontend)/assets/style/casestudies/caseStudyDetail.module.css";
import CtaSection from "@/app/(frontend)/component/pages/home/CtaSection";

// Import images (Using placeholders from cover-b for now)
import mobileMockup from "@/app/(frontend)/assets/images/casestudies/cover-b-mobile.png";
import illustration3d from "@/app/(frontend)/assets/images/casestudies/cover-b-illustration.png";
import result1 from "@/app/(frontend)/assets/images/casestudies/crystal-plaza-1.webp";
import result2 from "@/app/(frontend)/assets/images/casestudies/crystal-plaza-2.webp";
import result3 from "@/app/(frontend)/assets/images/casestudies/crystal-plaza-3.webp";
import result4 from "@/app/(frontend)/assets/images/casestudies/crystal-plaza-4.webp";
import result5 from "@/app/(frontend)/assets/images/casestudies/crystal-plaza-5.webp";

export default function HotelCaseStudyPage() {
  const [activeTab, setActiveTab] = useState(0);

  const processSteps = [
    {
      title: "Discovery",
      content:
        "We collaborated with the Crystal Plaza Hotel team to understand their business objectives, guest expectations, brand positioning, and existing digital challenges. This phase helped define clear website goals, content priorities, and functional requirements before moving into design.",
    },
    {
      title: "Strategy",
      content:
        "Using the insights gathered, we designed and developed a responsive, user-focused website with clear navigation, structured content, and consistent visual language. The development process ensured smooth performance, cross-device compatibility, and a layout aligned with the hotel’s brand identity.",
    },
    {
      title: "Execution",
      content:
        "The completed website underwent thorough testing across multiple browsers and devices to ensure reliability, usability, and performance consistency. After final validations, the website was deployed with all pages fully functional and ready for ongoing updates and maintenance.",
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
                  Hospitality
                </span>
                <span className={`${styles.tag} ${styles.tagBlue}`}>
                  Hotel & Resorts
                </span>
                <span className={`${styles.tag} ${styles.tagGreen}`}>
                  Sharjah, UAE
                </span>
              </div>
              <h1>Crystal Plaza Hotel</h1>
              <h2>Hotel in Sharjah</h2>
              <p>
                Crystal Plaza Hotel is a centrally located hospitality property in Sharjah, 
                positioned minutes away from Mega Mall and the Sharjah Heritage Museum.
              </p>
            </div>
            <div className={styles.heroImage}>
              <Image
                src={result1}
                alt="Crystal Plaza Hotel Sharjah Hero Mockup"
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
            <h2>
              Project <span className={styles.highlight}>Overview</span>
            </h2>
          </div>
          <div className={styles.overviewContent}>
            <div className={styles.overviewText}>
              <p>
                Crystal Plaza Hotel required a website that accurately reflected its location, 
                facilities, and guest experience while supporting its business objective of increasing 
                direct engagement with potential guests. Although the hotel benefits from proximity to 
                major attractions such as Al Majaz Park and is approximately 5.5 miles from Dubai International
                 Airport, its existing digital presence did not effectively communicate these advantages.
              </p>
              <p>
                The project focused on designing and developing a website that presents the hotel clearly and 
                professionally, improves usability for visitors, and provides essential information in a structured 
                and accessible manner.
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
              <h3>Website Design</h3>
              <p>
                Designed a clean, user-friendly interface reflecting the hotel’s comfort, location, and hospitality experience.
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
                Developed a responsive, high-performance website incorporating an integrated room enquiry and booking functionality, enabling users to view details and submit booking requests.
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
                Implemented clean, maintainable code with thorough testing for stable and reliable deployment.
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
              The project resulted in a modern, well-structured website that significantly improved Crystal Plaza Hotel’s
               digital presence. The new website clearly presents the hotel’s rooms, multi-cuisine dining options, and 
               key amenities, making information easily accessible for both local and international visitors. 
            </p>
            <div className={styles.resultGrid}>
              <div className={`${styles.resultItem} width-49 sm-width-100`}>
                <Image src={result1} alt="Crystal Plaza Website Result" />
              </div>
              <div className={`${styles.resultItem} width-49 sm-width-100`}>
                <Image src={result2} alt="Crystal Plaza Mobile View" />
              </div>
              <div className={`${styles.resultItem} width-100 sm-width-100`}>
                <Image src={result3} alt="Crystal Plaza Mobile View" />
              </div>
              <div className={`${styles.resultItem} width-49 sm-width-100`}>
                <Image src={result4} alt="Crystal Plaza Mobile View" />
              </div>
              <div className={`${styles.resultItem} width-49 sm-width-100`}>
                <Image src={result5} alt="Crystal Plaza Mobile View" />
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
              Crystal Plaza Hotel required a website that could clearly differentiate it within Sharjah’s 
              competitive hospitality landscape. Many visitors were unaware of the hotel’s central location 
              near cultural landmarks and shopping destinations such as Rolla Mall. The challenge was to present 
              this information clearly and consistently through a well-structured digital platform.
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
              "Working with BrandStory was a smooth experience from start to finish. The team understood our requirements 
              clearly and delivered a website that represents our hotel well and is easy for our guests to use."
            </p>
            <p
              style={{
                marginTop: "1rem",
                fontStyle: "italic",
                fontSize: "0.9rem",
              }}
            >
              — Crystal Plaza Team
            </p>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <CtaSection />
    </div>
  );
}
