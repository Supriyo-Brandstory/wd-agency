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
                  Hotel & Resorts
                </span>
                <span className={`${styles.tag} ${styles.tagGreen}`}>
                  Sharjah, UAE
                </span>
              </div>
              <h1>Crystal Plaza Hotel</h1>
              <h2>The Heart of Sharjah</h2>
              <p>
                Enhancing the digital footprint of Sharjah's premier hotel
                destination, located minutes from Mega Mall and the Heritage
                Museum.
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
                Crystal Plaza Hotel, strategically positioned in the heart of
                Sharjah, offers guests a blend of comfort and convenience. With
                amenities like a state-of-the-art fitness center, international
                dining, and easy access to cultural landmarks like Al Majaz
                Park, they needed a digital presence that matched their physical
                excellence.
              </p>
              <p>
                Despite their prime location near Dubai International Airport
                (5.5 miles away) and key attractions, they faced challenges in
                distinguishing themselves in a competitive market and driving
                direct bookings through their own channels.
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
              We successfully transformed Crystal Plaza Hotel's digital
              presence, achieving a 5.2x ROAS on paid campaigns and securing
              first-page rankings for key commercial terms. The new global
              website highlights their multi-cuisine restaurant and superior
              amenities, driving a huge uptick in international and local
              bookings.
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
                Optimized content for local attractions like "Hotels near Mega
                Mall" and "Stay in Heart of Sharjah".
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
                Launched targeted campaigns for tourists visiting nearby
                landmarks like Sharjah Heritage Museum.
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
                Promoted on-site amenities like the health club and continental
                breakfast to increase engagement.
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
              Crystal Plaza Hotel needed to stand out in the dense Sharjah
              hospitality market. Potential guests were often unaware of its
              prime proximity to cultural sites and shopping hubs like Rolla
              Mall. The challenge was to communicate this convenience and their
              superior service quality to meaningful digital conversions.
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
              <h3>Highlighting Local Experience</h3>
              <p>
                We revamped the website content to focus on the "Sharjah
                Experience," highlighting the hotel's closeness to the
                Waterfront Market and Al Shaab Village. This local SEO strategy
                positioned Crystal Plaza as the ideal base for exploring the
                emirate.
              </p>
            </div>
            <div className={styles.zImage}>
              <Image src={mobileMockup} alt="SEO Optimization Strategy" />
            </div>
          </div>

          {/* Solution 2 */}
          <div className={`${styles.zSection} ${styles.reverse}`}>
            <div className={styles.zText}>
              <h3>Amenities Focus</h3>
              <p>
                We spotlighted key facilities effectively: the 24-hour room
                service, free Wi-Fi, and the versatile multi-cuisine restaurant
                serving Indian, Middle Eastern, and Russian dishes. This
                directly appealed to diverse traveler demographics.
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
            q: "Where is Crystal Plaza Hotel located?",
            a: "Crystal Plaza Hotel is located in the heart of Sharjah, just minutes away from Mega Mall, Sharjah Heritage Museum, and the Gold Souk.",
          },
          {
            q: "What dining options are available?",
            a: "The hotel features an on-site restaurant serving a wide variety of cuisines including Indian, Middle Eastern, Russian, Asian, and International dishes.",
          },
          {
            q: "Does the hotel offer parking?",
            a: "Crystal Plaza Hotel does not have on-site parking facilities, but our team can assist guests with nearby parking options.",
          },
          {
            q: "Is there an airport shuttle service?",
            a: "Yes, we provide an airport shuttle service for the convenience of our guests to and from nearby airports including Dubai International Airport (5.5 miles away).",
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
