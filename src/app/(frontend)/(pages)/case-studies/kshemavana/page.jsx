"use client";
import React, { useState } from "react";
import Image from "next/image";
import styles from "@/app/(frontend)/assets/style/casestudies/caseStudyDetail.module.css";
import CommonFaqSection from "@/app/(frontend)/component/pages/common/CommonFaqSection";
import heroMockup from "@/app/(frontend)/assets/images/protfolio/3.webp";
import mobileMockup from "@/app/(frontend)/assets/images/casestudies/cover-b-mobile.png"; 
import illustration3d from "@/app/(frontend)/assets/images/casestudies/cover-b-illustration.png";
import result1 from "@/app/(frontend)/assets/images/casestudies/cover-b-result-1.png";
import result2 from "@/app/(frontend)/assets/images/casestudies/cover-b-result-2.png";
import result3 from "@/app/(frontend)/assets/images/casestudies/cover-b-result-3.png";
import CtaSection from "@/app/(frontend)/component/pages/home/CtaSection";

export default function CaseStudyDetailPage() {
  const [activeTab, setActiveTab] = useState(0);

  const processSteps = [
    {
      title: "Empathy",
      content: "For a wellness brand like Kshemavana, understanding the patient's state of mind was crucial. We focused on calming colors and easy navigation."
    },
    {
      title: "Structure",
      content: "Organized complex medical information and wellness programs into easily digestible sections, using clear icons and simplified medical language."
    },
    {
      title: "Launch",
      content: "Deployed a secure, HIPAA-compliant (standard-adherent) platform that allows for safe appointment booking and patient inquiry management."
    }
  ];

  return (
    <div className={styles.wrapper}>
      {/* HERO SECTION */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <div className={styles.heroText}>
              <div className={styles.tags}>
                <span className={`${styles.tag} ${styles.tagRed}`}>Healthcare</span>
                <span className={`${styles.tag} ${styles.tagBlue}`}>Wellness</span>
                <span className={`${styles.tag} ${styles.tagGreen}`}>Consumer</span>
              </div>
              <h1>Kshemavana</h1>
              <h2>Healing Through Digital</h2>
              <p>A serene, user-friendly digital experience for a holistic wellness center, focusing on patient accessibility and comprehensive care information.</p>
            </div>
            <div className={styles.heroImage}>
              <Image 
                src={heroMockup} 
                alt="Kshemavana Hero" 
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
            <h2>Project <span className={styles.highlight}>Overview</span></h2>
          </div>
          <div className={styles.overviewContent}>
            <div className={styles.overviewText}>
              <p>
                Kshemavana promotes naturopathy and yogic sciences. They needed a website that wasn't just informative 
                but also acted as an extension of their healing environment—calm, organized, and welcoming.
              </p>
              <p>
                We crafted a digital space that embodies their philosophy, helping visitors understand their treatments, 
                meet their doctors, and book retreats with ease.
              </p>
            </div>
            <div className={styles.overviewStats}>
              <div className={styles.statCard}>
                <h3 className={styles.statValue}>10k+</h3>
                <p className={styles.statLabel}>Monthly Visitors</p>
              </div>
              <div className={styles.statCard}>
                <h3 className={styles.statValue}>50+</h3>
                <p className={styles.statLabel}>Wellness Experts</p>
              </div>
              <div className={styles.statCard}>
                <h3 className={styles.statValue}>24/7</h3>
                <p className={styles.statLabel}>Booking Access</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL RESULT SECTION */}
      <section className={styles.finalResult}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2>Final <span className={styles.highlight}>Result</span></h2>
          </div>
          <div className={styles.resultContent}>
            <p>
              The final platform is a serene digital sanctuary. We delivered a calming, accessible website 
              that empowers patients to explore wellness programs and book retreats with unprecedented ease.
            </p>
            <div className={styles.resultGrid}>
              <div className={styles.resultItem}>
                <Image src={result1} alt="Kshemavana Dashboard" />
              </div>
              <div className={styles.resultItem}>
                <Image src={result2} alt="Kshemavana Form" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SCOPE OF WORK */}
      <section className={styles.scope}>
        <div className={styles.container}>
          <div className={styles.sectionHeader} style={{ textAlign: "center", marginBottom: "50px" }}>
             <h2>Scope of <span className={styles.highlight}>Work</span></h2>
          </div>
          <div className={styles.scopeGrid}>
            <div className={styles.scopeCard}>
              <div className={styles.iconWrapper}>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg>
              </div>
              <h3>Brand Experience</h3>
              <p>Translating the physical tranquility of the center into the digital color scheme and layout.</p>
            </div>
            <div className={styles.scopeCard}>
              <div className={styles.iconWrapper}>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
              </div>
              <h3>Content Management</h3>
              <p>Structuring vast amounts of health content into an navigable and SEO-friendly wiki style.</p>
            </div>
            <div className={styles.scopeCard}>
              <div className={styles.iconWrapper}>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 11a9 9 0 0 1 9 9"></path><path d="M4 4a16 16 0 0 1 16 16"></path><circle cx="5" cy="19" r="1"></circle></svg>
              </div>
              <h3>Booking Engine</h3>
              <p>Implementing a simple, stress-free booking flow for appointments and longer retreats.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CHALLENGE SECTION */}
      <section className={styles.challenge}>
        <div className={styles.container}>
          <div className={styles.challengeContent}>
            <h2 className="mb-20">The <span className={styles.highlight}>Challenge</span></h2>
            <p>
              The challenge was to present "medical" information without feeling clinical or sterile. 
              We had to strike a balance between professional credibility and organic warmth, ensuring 
              users felt safe and understood from the first click.
            </p>
          </div>
        </div>
      </section>

      {/* PROCESS TABS SECTION */}
      <section className={styles.processTabs}>
        <div className={styles.container}>
          <div className={styles.sectionHeader} style={{ textAlign: "center" }}>
            <h2>Our <span className={styles.highlight}>Process</span></h2>
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
          <div className={styles.zSection}>
            <div className={styles.zText}>
              <h3>Serene Mobile Experience</h3>
              <p>
                Knowing many users search for wellness on their phones, we prioritized a mobile experience 
                that feels like a breath of fresh air—uncluttered, fast, and calming.
              </p>
            </div>
            <div className={styles.zImage}>
              <Image src={mobileMockup} alt="Mobile Wellness App" />
            </div>
          </div>

          <div className={`${styles.zSection} ${styles.reverse}`}>
            <div className={styles.zText}>
              <h3>Program Finder</h3>
              <p>
                We built a dynamic filter that helps users find the right wellness program based on their 
                needs (e.g., detox, weight loss, stress management), guiding them to the right solution.
              </p>
            </div>
            <div className={styles.zImage}>
              <Image src={illustration3d} alt="Program Finder Illustration" />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <CommonFaqSection
        faqs={[
          {
            q: "Who provides the content?",
            a: "All medical and wellness content is vetted by Kshemavana's expert doctors before publishing."
          },
          {
            q: "Can I book appointments online?",
            a: "Yes, the site features a full calendar system for real-time booking."
          },
          {
            q: "Is patient data secure?",
            a: "We adhere to strict privacy standards to ensure all patient inquiries are kept confidential."
          }
        ]}
      />

      {/* GROWTH SECTION */}
      <section className={styles.growth}>
        <div className={styles.container}>
          <div className={styles.growthContent}>
            <h2 className="mb-20">Supporting <span className={styles.highlight}>Business Growth</span></h2>
            <p>
              "WD Agency understood our ethos perfectly. The website effectively communicates our philosophy and has helped us reach a wider audience seeking holistic health."
            </p>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
     <CtaSection />
    </div>
  );
}
