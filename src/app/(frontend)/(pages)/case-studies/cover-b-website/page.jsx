
"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "@/app/(frontend)/assets/style/casestudies/caseStudyDetail.module.css";
import CommonFaqSection from "@/app/(frontend)/component/pages/common/CommonFaqSection";


// Import images
import heroMockup from "@/app/(frontend)/assets/images/casestudies/cover-b-hero.png";
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
      title: "Discovery",
      content: "We started by analyzing Cover B's existing workflow and identifying bottlenecks in their manual quotation process. Stakeholder interviews revealed a critical need for automation."
    },
    {
      title: "Strategy",
      content: "Developed a roadmap focusing on API integration for real-time data fetching and a user-centric design to simplify complex insurance terms for end-users."
    },
    {
      title: "Execution",
      content: "Implemented a Next.js frontend for speed and SEO, coupled with a Node.js backend to handle complex logic. We used agile sprints to deliver key features iteratively."
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
                <span className={`${styles.tag} ${styles.tagRed}`}>B2B Business</span>
                <span className={`${styles.tag} ${styles.tagBlue}`}>Insurance Services</span>
                <span className={`${styles.tag} ${styles.tagGreen}`}>Dubai, UAE</span>
              </div>
              <h1>Cover B</h1>
              <h2>Insurance Services Redefined</h2>
              <p>Delivering a seamless, automated, and high-converting digital experience for the modern insurance era.</p>
            </div>
            <div className={styles.heroImage}>
              <Image 
                src={heroMockup} 
                alt="Cover B Hero Mockup" 
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
                Cover B is a leading insurance provider in the UAE, dedicated to providing comprehensive coverage 
                with a focus on customer convenience. They approached WD Agency to overhaul their outdated 
                digital platform and create a system that could handle complex quotations in real-time.
              </p>
              <p>
                Our mission was to design a platform that not only looked premium but also simplified the 
                often-confusing insurance journey for B2B and B2C clients alike.
              </p>
            </div>
            <div className={styles.overviewStats}>
              <div className={styles.statCard}>
                <h3 className={styles.statValue}>300%</h3>
                <p className={styles.statLabel}>Increase in Leads</p>
              </div>
              <div className={styles.statCard}>
                <h3 className={styles.statValue}>&lt;60s</h3>
                <p className={styles.statLabel}>Quote Time</p>
              </div>
              <div className={styles.statCard}>
                <h3 className={styles.statValue}>85%</h3>
                <p className={styles.statLabel}>Process Automation</p>
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
              The culmination of our efforts is a state-of-the-art digital insurance platform. 
              We delivered a sleek, intuitive dashboard that empowers users to manage quotes and policies 
              with unprecedented ease and speed.
            </p>
            <div className={styles.resultGrid}>
              <div className={styles.resultItem}>
                <Image src={result1} alt="Cover B Dashboard" />
              </div>
              <div className={styles.resultItem}>
                <Image src={result2} alt="Cover B Form Interface" />
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
              <h3>UI/UX Design</h3>
              <p>Crafting an intuitive, accessibility-focused interface that guides users through the insurance process.</p>
            </div>
            <div className={styles.scopeCard}>
              <div className={styles.iconWrapper}>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
              </div>
              <h3>Development</h3>
              <p>Building a robust, scalable backend capable of processing real-time insurance premiums and data.</p>
            </div>
            <div className={styles.scopeCard}>
              <div className={styles.iconWrapper}>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 11a9 9 0 0 1 9 9"></path><path d="M4 4a16 16 0 0 1 16 16"></path><circle cx="5" cy="19" r="1"></circle></svg>
              </div>
              <h3>Content Strategy</h3>
              <p>Developing clear, persuasive copy that builds trust and explains complex insurance products simply.</p>
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
              The primary hurdle was the insurance industry's inherent complexity. Cover B's existing manual 
              quotation process was slow, leading to high drop-off rates. They needed a solution that could 
              integrate multiple API providers and deliver accurate quotes in under 60 seconds, all while 
              maintaining a sleek, modern aesthetic that stood out in a traditional market.
            </p>
          </div>
        </div>
      </section>

      {/* PROCESS TABS SECTION - NEW */}
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
          {/* Solution 1 */}
          <div className={styles.zSection}>
            <div className={styles.zText}>
              <h3>Custom Application Development</h3>
              <p>
                We developed a highly optimized web application that automates the entire quotation lifecycle. 
                Users can input their requirements and receive tailored insurance options instantly. 
                The interface was designed to be mobile-first, ensuring a flawless experience on the go.
              </p>
            </div>
            <div className={styles.zImage}>
              <Image src={mobileMockup} alt="Mobile Application Design" />
            </div>
          </div>

          {/* Solution 2 */}
          <div className={`${styles.zSection} ${styles.reverse}`}>
            <div className={styles.zText}>
              <h3>Automated Quotation Engine</h3>
              <p>
                By integrating powerful AI-driven algorithms, we created a system that calculates risk and 
                premiums dynamically. This reduced manual intervention by 85%, allowing Cover B to focus 
                on high-level strategic growth rather than paperwork.
              </p>
            </div>
            <div className={styles.zImage}>
              <Image src={illustration3d} alt="Automated Solutions Illustration" />
            </div>
          </div>
        </div>
      </section>


          {/* FAQ SECTION */}
          <CommonFaqSection
            faqs={[
              {
                q: "Why Do I Need Wireframing before Designing My Website?",
                a: "Wireframing helps you plan the layout and structure of your website or app before investing in design or development. It gives you a clear idea of how each section will look and function."
              },
              {
                q: "What is The Difference Between a Wireframe and a Prototype?",
                a: " A wireframe is a basic visual outline showing where things will go on a page, while a prototype is a clickable, interactive version that shows how users will interact with the site or app."
              },
              {
                q: "How Does Wireframing Save Time and Cost in a Project?",
                a: "By spotting design or usability issues early, wireframing prevents expensive changes later in development. It ensures everyone agrees on the structure before coding begins."
              },
              {
                q: "Can I Give Feedback During the Wireframing and Prototyping Stage?",
                a: "Yes, absolutely, This stage is all about collaboration. You can review layouts, suggest changes, and test interactions before finalizing the design."
              },
              {
                q: "Do Prototypes Look Exactly Like The Final Website?",
                a: "Not always- they’re built to demonstrate functionality and flow, but not the final visuals. However, high-fidelity prototypes can look very close to the finished product."
              },
              {
                q: "How Long Does The Wireframing and Prototyping Process Take?",
                a: "It depends on project size and complexity, but most wireframes and prototypes are completed within a few days to a few weeks."
              },
              {
                q: "Is Wireframing and Prototyping Useful for Redesigning an Existing Website?",
                a: "Definitely, it helps identify what’s working and what’s not, allowing you to plan improvements and test new layouts before committing to a full redesign."
              }
            ]}
          />



      {/* GROWTH SECTION */}
      <section className={styles.growth}>
        <div className={styles.container}>
          <div className={styles.growthContent}>
            <h2 className="mb-20">Supporting <span className={styles.highlight}>Business Growth</span></h2>
            <p>
              "The new digital infrastructure has completely transformed how we do business. 
              Our conversion rates have tripled, and customer satisfaction is at an all-time high."
            </p>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
     <CtaSection />
    </div>
  );
}
