"use client";
import React, { useState } from "react";
import Image from "next/image";
import styles from "@/app/(frontend)/assets/style/casestudies/caseStudyDetail.module.css";
import CommonFaqSection from "@/app/(frontend)/component/pages/common/CommonFaqSection";
import heroMockup from "@/app/(frontend)/assets/images/protfolio/2.webp";
import mobileMockup from "@/app/(frontend)/assets/images/casestudies/cover-b-mobile.png"; 
import illustration3d from "@/app/(frontend)/assets/images/casestudies/cover-b-illustration.png";
import result1 from "@/app/(frontend)/assets/images/casestudies/ferns-estates-result.webp";
import result2 from "@/app/(frontend)/assets/images/casestudies/ferns-estates-result-1.webp";
import result3 from "@/app/(frontend)/assets/images/casestudies/ferns-estates-result-2.webp";
import result4 from "@/app/(frontend)/assets/images/casestudies/ferns-estates-result-3.webp";
import CtaSection from "@/app/(frontend)/component/pages/home/CtaSection";

export default function CaseStudyDetailPage() {
  const [activeTab, setActiveTab] = useState(0);

  const processSteps = [
    {
      title: "Concept",
      content: "Ferns Estates wanted to showcase their premium properties with an immersive digital experience. We started by mapping out user journeys for potential homebuyers."
    },
    {
      title: "Design",
      content: "We created a visual language that reflects luxury and tranquility, using high-quality imagery and minimal typography to let the properties speak for themselves."
    },
    {
      title: "Development",
      content: "Built a high-performance website with virtual tour capabilities and speedy image loading to ensure a smooth browsing experience on all devices."
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
                <span className={`${styles.tag} ${styles.tagRed}`}>Real Estate</span>
                <span className={`${styles.tag} ${styles.tagBlue}`}>Luxury</span>
                <span className={`${styles.tag} ${styles.tagGreen}`}>Website</span>
              </div>
              <h1>Ferns Estates</h1>
              <h2>Luxury Living Online</h2>
              <p>A premium digital showcase for one of the city's most prestigious real estate developers, featuring virtual tours and lead generation engines.</p>
            </div>
            <div className={styles.heroImage}>
              <Image 
                src={heroMockup} 
                alt="Ferns Estates Hero" 
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
                Ferns Estates & Developers have been a landmark in the real estate sector. However, their digital presence 
                didn't reflect the premium quality of their physical properties. They needed a website update that screamed luxury.
              </p>
              <p>
                Our team redesigned their web presence to focus on visual storytelling, making it easier for visitors 
                to explore amenities, view floor plans, and book site visits.
              </p>
            </div>
            <div className={styles.overviewStats}>
              <div className={styles.statCard}>
                <h3 className={styles.statValue}>200%</h3>
                <p className={styles.statLabel}>More Site Inquiries</p>
              </div>
              <div className={styles.statCard}>
                <h3 className={styles.statValue}>50+</h3>
                <p className={styles.statLabel}>Projects Showcased</p>
              </div>
              <div className={styles.statCard}>
                <h3 className={styles.statValue}>3x</h3>
                <p className={styles.statLabel}>Time on Site</p>
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
              The final result is a breathtaking digital showcase. We delivered a premium, immersive website 
              that empowers potential buyers to explore properties and schedule visits with unprecedented ease.
            </p>
            <div className={styles.resultGrid}>
              <div className={`${styles.resultItem} width-29 sm-width-100`}>
                <Image src={result1} alt="Ferns Estates Dashboard" />
              </div>
              <div className={`${styles.resultItem} width-70 sm-width-100`}>
                <Image src={result2} alt="Ferns Estates Form" />
              </div>
              <div className={`${styles.resultItem} width-70 sm-width-100`}>
                <Image src={result3} alt="Ferns Estates Form" />
              </div>
              <div className={`${styles.resultItem} width-29 sm-width-100`}>
                <Image src={result4} alt="Ferns Estates Form" />
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
              <h3>Visual Identity</h3>
              <p>Refining the brand's digital color palette and typography to convey elegance.</p>
            </div>
            <div className={styles.scopeCard}>
              <div className={styles.iconWrapper}>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
              </div>
              <h3>Web Development</h3>
              <p>Developing a custom CMS allowing the sales team to easily update property availability.</p>
            </div>
            <div className={styles.scopeCard}>
              <div className={styles.iconWrapper}>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 11a9 9 0 0 1 9 9"></path><path d="M4 4a16 16 0 0 1 16 16"></path><circle cx="5" cy="19" r="1"></circle></svg>
              </div>
              <h3>Marketing Integration</h3>
              <p>Connecting the website forms directly to their CRM for instant lead follow-up.</p>
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
              The main challenge was handling high-resolution media assets without compromising site speed. 
              Real estate sites are image-heavy, and we needed to ensure fast load times even on 4G networks 
              while standardizing the presentation of diverse project types.
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
              <h3>Immersive Property Views</h3>
              <p>
                We implemented 360-degree views and high-definition galleries. Users can basically walk through 
                a property from their living room, increasing the quality of leads that physically visit the site.
              </p>
            </div>
            <div className={styles.zImage}>
              <Image src={mobileMockup} alt="Mobile Property View" />
            </div>
          </div>

          <div className={`${styles.zSection} ${styles.reverse}`}>
            <div className={styles.zText}>
              <h3>Smart Lead Capture</h3>
              <p>
                Context-aware contact forms appear at the right moments like after viewing a floor plan or 
                pricing page nudging users to connect without being intrusive.
              </p>
            </div>
            <div className={styles.zImage}>
              <Image src={illustration3d} alt="Lead Gen Illustration" />
            </div>
          </div>
        </div>
      </section>

     

      {/* GROWTH SECTION */}
      <section className={styles.growth}>
        <div className={styles.container}>
          <div className={styles.growthContent}>
            <h2 className="mb-20">Supporting <span className={styles.highlight}>Business Growth</span></h2>
            <p>
              "The new website beautifully represents our brand. We've seen a significant uptake in premium buyers contacting us directly through the site."
            </p>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
     <CtaSection />
    </div>
  );
}
