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

export default function HotelCaseStudyPage() {
  const [activeTab, setActiveTab] = useState(0);

  const processSteps = [
    {
      title: "Discovery",
      content:
        "We analyzed past data and performed a full audit of the website and business. We found critical technical issues on the website and identified that customer engagement on social media was very limited.",
    },
    {
      title: "Strategy",
      content:
        "Developed a comprehensive plan focusing on fixing technical issues, implementing SEO best practices, and calculating a media mix of Meta Ads and Google Ads to target both business and leisure travelers.",
    },
    {
      title: "Execution",
      content:
        "Created local pages for each hotel property, launched email marketing campaigns for past guests, and established a strong social media presence with creative ads to drive engagement and bookings.",
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
                  Hotel Chain
                </span>
                <span className={`${styles.tag} ${styles.tagGreen}`}>
                  Dubai, UAE
                </span>
              </div>
              <h1>Crystal Plaza</h1>
              <h2>Hotel Chain in Dubai</h2>
              <p>
                Improving online presence and driving direct bookings for a
                leading hotel chain in Dubai Marina and Downtown.
              </p>
            </div>
            <div className={styles.heroImage}>
              <Image
                src={heroMockup}
                alt="Crystal Plaza Hero Mockup"
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
                Crystal Plaza, a hotel chain with multiple properties across
                Downtown Dubai and Dubai Marina, approached us to improve their
                online presence and increase direct bookings.
              </p>
              <p>
                They faced severe competition in global booking platforms and
                were losing revenue to high commission rates. Despite having a
                strong market reputation, they lacked a robust online presence
                and social media engagement.
              </p>
            </div>
            <div className={styles.overviewStats}>
              <div className={styles.statCard}>
                <h3 className={styles.statValue}>105%</h3>
                <p className={styles.statLabel}>Increase in Direct Bookings</p>
              </div>
              <div className={styles.statCard}>
                <h3 className={styles.statValue}>230%</h3>
                <p className={styles.statLabel}>Boost in Website Traffic</p>
              </div>
              <div className={styles.statCard}>
                <h3 className={styles.statValue}>5.2x</h3>
                <p className={styles.statLabel}>ROAS on Ad Campaigns</p>
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
              We successfully transformed Crystal Plaza's digital presence,
              achieving a 5.2x ROAS on paid campaigns and securing first-page
              rankings for 40+ commercial keywords like "luxury hotel in Dubai"
              and "business stay Dubai".
            </p>
            <div className={styles.resultGrid}>
              <div className={styles.resultItem}>
                <Image src={result1} alt="Crystal Plaza Website Result" />
              </div>
              <div className={styles.resultItem}>
                <Image src={result2} alt="Crystal Plaza Mobile View" />
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
              <h3>SEO & Content</h3>
              <p>
                Fixed technical issues and implemented best practices to rank
                for commercial keywords.
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
              <h3>Paid Advertising</h3>
              <p>
                Planned and launched Meta Ads and Google Ads targeting business
                and leisure travelers.
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
              <h3>Social Media</h3>
              <p>
                Created a strong social media presence with creative ads to
                improve engagement.
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
              Crystal Plaza faced multiple challenges: heavy reliance on
              third-party booking platforms leading to high commissions, fierce
              competition from global players, and a website that lacked
              traffic. Additionally, their social media presence was not
              converting into bookings.
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
              <h3>Technical Optimization & SEO</h3>
              <p>
                We started by fixing critical technical issues on their website.
                We created dedicated local pages for each hotel property in
                Dubai Marina and Downtown to capture city-specific traffic,
                significantly boosting organic visibility.
              </p>
            </div>
            <div className={styles.zImage}>
              <Image src={mobileMockup} alt="SEO Optimization Strategy" />
            </div>
          </div>

          {/* Solution 2 */}
          <div className={`${styles.zSection} ${styles.reverse}`}>
            <div className={styles.zText}>
              <h3>Performance Marketing</h3>
              <p>
                We launched targeted Google and Meta ad campaigns focused on
                specific traveler personas. Coupled with email marketing for
                past guests, this strategy maximized direct bookings and reduced
                dependency on OTA platforms.
              </p>
            </div>
            <div className={styles.zImage}>
              <Image
                src={illustration3d}
                alt="Marketing Strategy Illustration"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <CommonFaqSection
        faqs={[
          {
            q: "How can a hotel increase direct bookings?",
            a: "Direct bookings can be increased by optimizing the website for SEO, running targeted PPC campaigns, offering exclusive deals on your site, and utilizing email marketing to re-engage past guests.",
          },
          {
            q: "Why is social media important for hotels?",
            a: "Social media helps build brand awareness, showcases the property through visuals, and engages directly with potential guests. It's a powerful tool for visual storytelling in hospitality.",
          },
          {
            q: "What is the benefit of local SEO for hotels?",
            a: "Local SEO ensures your hotel appears in location-specific searches (like 'hotel in Dubai Marina'). This captures high-intent traffic from users looking for accommodation in specific areas.",
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
              "The BrandStory team is truly genius, they helped us gain 5X
              bookings in just 4 months. They helped us dominate the market!"
            </p>
            <p
              style={{
                marginTop: "1rem",
                fontStyle: "italic",
                fontSize: "0.9rem",
              }}
            >
              — Crystal Plaza Management
            </p>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <CtaSection />
    </div>
  );
}
