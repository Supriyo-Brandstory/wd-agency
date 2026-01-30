"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "@/app/(frontend)/assets/style/common/AgencyTextContent.module.css";

const AgencyTextContent = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <motion.h1
            className={styles.mainTitle}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Architects of Digital Dominance: WD Agency
          </motion.h1>
        </div>

        <div className={styles.textContent}>
          {/* Always Visible Content */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p>
              In the hyper-connected, fast-paced ecosystem of the United Arab
              Emirates, a business without a commanding digital presence is
              invisible. At Website Development Agency (WD Agency), we do not
              simply design websites; we architect digital destinies. We are a
              collective of strategists, designers, and developers who believe
              that your website is the single most powerful asset in your
              corporate arsenal.
            </p>
            <p>
              As a premier web design agency in Dubai, we have moved beyond the
              traditional boundaries of aesthetics. We operate where art
              intersects with engineering, and where creativity meets conversion
              data. Our mission is to build the digital heartbeat of your
              brand—a living, breathing platform that not only looks stunning
              but also functions as a relentless engine for business growth.
            </p>
          </motion.div>

          {/* Expandable Content */}
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                style={{ overflow: "hidden" }}
              >
                <h2>Redefining the Digital Landscape in the UAE</h2>
                <p>
                  The digital marketplace in the UAE is unlike any other. It is
                  a fusion of global luxury standards and rapid technological
                  adoption. To succeed here, your brand needs more than a
                  template; it needs a digital identity that commands respect.
                </p>
                <p>
                  At WD Agency, we understand the nuances of this region. We
                  know that a consumer in Downtown Dubai interacts with a
                  website differently than a user in Ras Al Khaimah or a B2B
                  client in Abu Dhabi. We leverage this local insight to craft
                  bespoke digital experiences. As a leading website design
                  agency in UAE, our goal is to propel your business forward,
                  turning passive visitors into active partners and customers.
                </p>
                <p>
                  We don't just "build sites." We build relationships, trust,
                  and reputations. In an era of fleeting attention spans, we
                  create platforms that hold attention, deepen engagement, and
                  drive the metrics that matter most to your bottom line.
                </p>

                <h2>Our Core Philosophy: Intelligence Over Aesthetics</h2>
                <p>
                  Many agencies make the mistake of prioritizing "pretty" over
                  "profitable." At WD Agency, we believe that true design
                  excellence lies in the balance between visual impact and
                  functional intelligence. A beautiful site that confuses the
                  user is a failure. A functional site that looks outdated is a
                  missed opportunity.
                </p>
                <p>Our philosophy is built on three pillars:</p>

                <h3>1. User-Centric Architecture</h3>
                <p>
                  We design for humans, not just screens. Every pixel we place
                  is backed by an understanding of user psychology. We map out
                  customer journeys to ensure that the path from "landing" to
                  "conversion" is intuitive and friction-free. We anticipate
                  what your user needs before they even click, creating a
                  seamless flow that guides them toward the Call to Action (CTA)
                  naturally.
                </p>

                <h3>2. Data-Driven Innovation</h3>
                <p>
                  We do not rely on guesswork. As a modern web design agency in
                  Dubai, we utilize data analytics, heatmaps, and user behavior
                  tracking to inform our design decisions. We understand why
                  users bounce, where they linger, and what makes them click.
                  This scientific approach allows us to lay a foundation for
                  digital innovation that is measurable and effective.
                </p>

                <h3>3. Future-Proof Engineering</h3>
                <p>
                  The web is evolving rapidly. We build disruptive products
                  using clean, scalable code that ensures your website grows as
                  your business grows. We don't just solve today's problems; we
                  anticipate tomorrow's opportunities, ensuring your digital
                  investment remains relevant for years to come.
                </p>

                <h2>A Comprehensive Suite of Web Design Services</h2>
                <p>
                  We offer a holistic approach to digital transformation.
                  Whether you are looking to revamp an existing site or build a
                  massive platform from scratch, WD Agency provides end-to-end
                  solutions.
                </p>

                <h3>Custom Website Design & Development</h3>
                <p>
                  Your business is unique, and your website should be too. We
                  reject the "cookie-cutter" approach. Our team creates bespoke
                  designs that reflect your specific brand identity.
                </p>
                <ul>
                  <li>
                    <strong>Visual Identity:</strong> We select color palettes,
                    typography, and imagery that evoke the right emotional
                    response from your specific sector.
                  </li>
                  <li>
                    <strong>Bespoke Coding:</strong> We hand-code our solutions
                    to ensure they are lightweight, fast, and secure, avoiding
                    the bloat of pre-made themes.
                  </li>
                </ul>

                <h3>Responsive & Mobile-First Design</h3>
                <p>
                  With the vast majority of UAE internet traffic coming from
                  mobile devices, we adopt a "Mobile-First" methodology. We
                  ensure your site creates an immersive experience on a
                  smartphone, remains functional on a tablet, and expands
                  beautifully on a desktop. As a top-rated website design agency
                  in UAE, we ensure consistency across every device and browser.
                </p>

                <h3>SEO-Integrated Development</h3>
                <p>
                  Most agencies treat SEO (Search Engine Optimization) as an
                  afterthought. At WD Agency, it is part of the blueprint. We
                  build websites that Google loves.
                </p>
                <ul>
                  <li>
                    <strong>On-Page SEO:</strong> We structure your headers,
                    meta tags, and content hierarchy to maximize search
                    visibility.
                  </li>
                  <li>
                    <strong>Technical SEO:</strong> We optimize site speed, fix
                    crawl errors, and implement schema markup to help you rank
                    for competitive keywords like web design agencies in Dubai.
                  </li>
                </ul>

                <h3>E-Commerce Solutions</h3>
                <p>
                  We turn browsers into buyers. Our e-commerce designs are
                  focused on maximizing Revenue Per User (RPU). We streamline
                  checkout processes, design persuasive product pages, and
                  integrate secure payment gateways to ensure a smooth shopping
                  experience.
                </p>

                <h3>UI/UX Design Strategy</h3>
                <p>
                  This is the art of performance. Our UI/UX experts conduct
                  rigorous research to simplify complex processes. We remove the
                  clutter and focus on the essential elements that strengthen
                  your brand message and transform user interest into action.
                </p>

                <h2>The WD Agency Process: From Concept to Conversion</h2>
                <p>
                  Transparency is the cornerstone of our operations. We follow a
                  diligent, proven process to ensure that we not only meet but
                  exceed your expectations.
                </p>
                <ul>
                  <li>
                    <strong>Phase 1: Discovery & Immersion.</strong> We start by
                    listening. We dive deep into your industry, analyzing your
                    competitors and identifying promising opportunities.
                  </li>
                  <li>
                    <strong>Phase 2: Strategic Planning & Sitemapping.</strong>{" "}
                    We create a blueprint of success, developing detailed
                    sitemaps that outline the content structure.
                  </li>
                  <li>
                    <strong>Phase 3: Visual Prototyping.</strong> Our creative
                    designers bring the concept to life with high-fidelity
                    mockups.
                  </li>
                  <li>
                    <strong>Phase 4: Agile Development.</strong> Our developers
                    take over, turning designs into clean, scalable code working
                    in agile sprints.
                  </li>
                  <li>
                    <strong>Phase 5: Rigorous Testing (QA).</strong> We are
                    perfectionists. We test your site across multiple devices,
                    browsers, and operating systems.
                  </li>
                  <li>
                    <strong>Phase 6: Launch & Optimization.</strong> Going live
                    is just the beginning. We monitor performance and make
                    real-time adjustments.
                  </li>
                </ul>

                <h2>Solutions for Every Scale</h2>
                <h3>For Small & Medium Enterprises (SMEs)</h3>
                <p>
                  We offer affordable, high-impact packages designed to give
                  startups and SMEs instant credibility. We help you punch above
                  your weight, giving you a professional sheen that rivals
                  larger competitors.
                </p>
                <h3>For Large Enterprises & Corporations</h3>
                <p>
                  We have the infrastructure and expertise to handle complex,
                  large-scale projects, delivering enterprise-grade security,
                  scalability, and integration.
                </p>

                <h2>Why WD Agency is the Preferred Choice in Dubai</h2>
                <ul>
                  <li>
                    <strong>Unmatched Technical Expertise:</strong> Experts in
                    HTML5, CSS3, JavaScript, React, PHP, NodeJS, Python.
                  </li>
                  <li>
                    <strong>A Proven Track Record:</strong> A history of
                    excellence facilitating growth for our clients.
                  </li>
                  <li>
                    <strong>Radical Transparency:</strong> No hidden fees,
                    strict adherence to schedules.
                  </li>
                  <li>
                    <strong>Continuous Support:</strong> 24/7 post-launch
                    support and specialized maintenance.
                  </li>
                </ul>

                <h2>The Elements of Our Design Success</h2>
                <ul>
                  <li>
                    <strong>Strategic CTA Placement:</strong> Funneling user
                    paths brilliantly.
                  </li>
                  <li>
                    <strong>Optimized Visuals:</strong> Using SVG and compressed
                    images for speed.
                  </li>
                  <li>
                    <strong>Intelligent Typography:</strong> Fonts that are
                    readable and on-brand.
                  </li>
                  <li>
                    <strong>Clutter-Free Layouts:</strong> Embracing white
                    space.
                  </li>
                  <li>
                    <strong>Catchy Graphic Design:</strong> Icons and banners
                    that enhance UX.
                  </li>
                </ul>

                <h2>Empowering Your Business with Digital Automation</h2>
                <p>
                  We go beyond design by implementing digital automation tools
                  like CRM Integration and Google Ads infrastructure to solve
                  key business challenges.
                </p>

                <h2>Partner with the Best Web Design Agency in Dubai</h2>
                <p>
                  Your website is your legacy in the digital world. It is the
                  first thing a potential client sees, and often the last thing
                  they remember. Do not leave it to chance. At WD Agency, we are
                  ready to take your venture to new heights.
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Gradient Overlay when collapsed */}
          {!isExpanded && <div className={styles.fadeOverlay}></div>}
        </div>

        <div className={styles.buttonWrapper}>
          <button
            onClick={toggleExpand}
            className={`${styles.toggleButton} ${isExpanded ? styles.expanded : ""}`}
          >
            {isExpanded ? "Show Less" : "Read More"}
            <svg
              className={styles.icon}
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default AgencyTextContent;
