"use client";
import React, { useState } from "react";
import Image from "next/image";
import styles from "@/app/(frontend)/assets/style/demo/DemoDetails.module.css";
import mepMockup from "@/app/(frontend)/assets/images/mep_website_mockup.png";

const DemoDetailsPage = () => {
  const [activeTab, setActiveTab] = useState("description");

  const features = [
    "Advanced site with pages up to 35",
    "Editable website using Admin page",
    "Up to 7 main Menus",
    "Delivery within 4/3/2 days",
    "Scalable Projects page",
    "Scalable News & Media page",
    "Dynamic & mobile responsive site",
    "12 months free web hosting",
    "Lifetime Free SSL Certificate",
    "6 months free website maintenance",
  ];

  return (
    <div className={styles.demoContainer}>
      {/* Left Column */}
      <div className={styles.leftColumn}>
        <div className={styles.heroImageWrapper}>
          <Image
            src={mepMockup}
            alt="MEP Company Website Mockup"
            className={styles.heroImage}
            priority
          />
        </div>

        <div className={styles.actionButtons}>
          <button className={styles.btnLive}>
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
              <circle cx="12" cy="12" r="3" />
            </svg>
            Live Preview
          </button>
        </div>

        <div className={styles.tabsContainer}>
          <div className={styles.tabsHeader}>
            <button
              className={`${styles.tabBtn} ${activeTab === "description" ? styles.activeTab : ""}`}
              onClick={() => setActiveTab("description")}
            >
              Description
            </button>
            <button
              className={`${styles.tabBtn} ${activeTab === "faq" ? styles.activeTab : ""}`}
              onClick={() => setActiveTab("faq")}
            >
              FAQ
            </button>
          </div>

          <div className={styles.tabContent}>
            {activeTab === "description" ? (
              <div>
                <p>
                  MEP company (Electromechanical firm) advanced website design
                  with 35 pages and still scalable – professional web design
                  template. Ideal for: Mechanical and Electrical companies,
                  Civil construction companies, and Maintenance companies. Any
                  other similar industries can also buy this website design.
                </p>
                <p style={{ marginTop: "15px" }}>
                  Click the ‘Live Preview’ button above and view how will your
                  website layout look like at the end of the project. Read ‘FAQ’
                  to understand more about the web design service. See how the
                  website demo got customized for one of our clients:{" "}
                  <a
                    href="https://www.spotelectromechanical.com"
                    style={{ color: "#ff4d6d" }}
                  >
                    www.spotelectromechanical.com
                  </a>
                </p>

                <div className={styles.featuresList}>
                  <h3 style={{ marginBottom: "15px", fontWeight: "700" }}>
                    Features
                  </h3>
                  <ul>
                    <li>Total 35 Pages Information Website in English</li>
                    <li>Scalable pages</li>
                    <li>Editable website through Admin Interface</li>
                    <li>
                      4 Sliding banners with texts using Slider Revolution
                    </li>
                    <li>Sliding project images</li>
                    <li>Project pages with items up to 12 and scalable</li>
                    <li>Gallery with images up to 25</li>
                    <li>
                      Navigation Menu up to 7 (As per your choice), Ex:
                      Home/About/Services/Project/Contact, etc.
                    </li>
                    <li>12 months of free website hosting (1000 MB)</li>
                    <li>
                      Lifetime Free SSL Certificate (if the web hosting is from
                      us)
                    </li>
                    <li>
                      6 months of free website maintenance and content updates
                    </li>
                    <li>Free stock images to match your industry</li>
                    <li>Dynamic & mobile responsive site</li>
                    <li>WhatsApp Integration</li>
                    <li>Google Map Integration</li>
                    <li>Software – WordPress</li>
                    <li>
                      Compatible Browsers – IE9+, Chrome, Safari, Opera, Firefox
                    </li>
                    <li>Layout – Mobile Responsive</li>
                    <li>Compatible with – Elementor</li>
                    <li>
                      Editable website – No coding skills are required for
                      editing by the user
                    </li>
                  </ul>

                  <p style={{ marginTop: "20px" }}>
                    We will email you all the login credentials of the hosting
                    control panel (C-panel), domain, and your WordPress website
                    admin details on your request. Now you can update the
                    website content and images yourself! If you need online
                    training on WordPress website content management, you can
                    book such services from our website and get special skills
                    in editing the website contents without writing codes.
                  </p>

                  <h3
                    style={{
                      marginTop: "30px",
                      marginBottom: "15px",
                      fontWeight: "700",
                    }}
                  >
                    Website Design Include:
                  </h3>
                  <ul>
                    <li>WordPress Premium Theme</li>
                    <li>Required Plugins</li>
                    <li>
                      ON-Page Basic SEO (meta tag and meta description of your
                      site)
                    </li>
                    <li>
                      Max. 3 website revisions as per your review within the
                      project duration
                    </li>
                    <li>24/7 Online Support</li>
                  </ul>

                  <h3
                    style={{
                      marginTop: "30px",
                      marginBottom: "15px",
                      fontWeight: "700",
                    }}
                  >
                    Yearly Renewal Fees:
                  </h3>
                  <p>
                    A renewal fee is applicable only if these services are
                    availed from us. You will get an invoice at year-end for
                    making online payments and manual renewal. You can cancel
                    these services at any time.
                  </p>
                  <ul>
                    <li>Website hosting is FREE for the first year</li>
                    <li>400 AED/Yr as web hosting fee from the second year</li>
                    <li>
                      80 AED for .com/.net domains or 190 AED for .ae domains as
                      a yearly renewal fee from the second year
                    </li>
                  </ul>

                  <p
                    style={{
                      marginTop: "20px",
                      fontSize: "14px",
                      color: "#666",
                    }}
                  >
                    <strong>Note:</strong> You will receive a copy of this
                    product information as a website contract at the end of the
                    project. All website support is online only. We do not store
                    any of your card details while you pay online. Payments are
                    processed through secure payment gateways.
                  </p>
                </div>
              </div>
            ) : (
              <div>
                <h3 style={{ marginBottom: "15px", fontWeight: "700" }}>
                  Frequently Asked Questions
                </h3>
                <div style={{ marginBottom: "20px" }}>
                  <p style={{ fontWeight: "600" }}>
                    How long does it take to launch the website?
                  </p>
                  <p>
                    Depending on the package you choose, it can take 2, 3, or 4
                    days to launch the website once we receive your content and
                    domain access.
                  </p>
                </div>
                <div style={{ marginBottom: "20px" }}>
                  <p style={{ fontWeight: "600" }}>
                    Can I customize the design?
                  </p>
                  <p>
                    Yes, the color scheme and fonts can be adjusted to match
                    your brand identity. The layout structure remains the same
                    as the demo.
                  </p>
                </div>
                <div style={{ marginBottom: "20px" }}>
                  <p style={{ fontWeight: "600" }}>
                    Do I need to pay for hosting every year?
                  </p>
                  <p>
                    Hosting is free for the first year. From the second year, a
                    renewal fee of 400 AED applies for hosting.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Right Column */}
      <div className={styles.rightColumn}>
        <div className={styles.sidebarCard}>
          <div className={styles.productTitle}>MEP Company Website</div>

          <div className={styles.priceWrapper}>
            <span className={styles.priceLabel}>From:</span>
            <span className={styles.priceValue}>3,500 AED</span>
          </div>

          <ul className={styles.quickFeatures}>
            {features.map((feature, index) => (
              <li key={index}>
                <svg
                  className={styles.checkIcon}
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                {feature}
              </li>
            ))}
          </ul>

          <div className={styles.optionSection}>
            <div className={styles.optionTitle}>Choose your domain status</div>
            <div className={styles.optionGroup}>
              <label className={styles.radioItem}>
                <input type="radio" name="domain" defaultChecked />I have a
                domain
              </label>
              <label className={styles.radioItem}>
                <input type="radio" name="domain" />I need a .com or .net domain
                (+50 AED)
              </label>
              <label className={styles.radioItem}>
                <input type="radio" name="domain" />I need .ae domain (+150 AED)
              </label>
            </div>
          </div>

          <div className={styles.optionSection}>
            <div className={styles.optionTitle}>Choose project duration</div>
            <div className={styles.optionGroup}>
              <label className={styles.radioItem}>
                <input type="radio" name="duration" defaultChecked />4 Days -
                Normal
              </label>
              <label className={styles.radioItem}>
                <input type="radio" name="duration" />3 Days - Urgent (+300 AED)
              </label>
              <label className={styles.radioItem}>
                <input type="radio" name="duration" />2 Days - Super Fast (+500
                AED)
              </label>
            </div>
          </div>

          <div className={styles.optionSection}>
            <div className={styles.optionTitle}>Website content writing</div>
            <div className={styles.optionGroup}>
              <label className={styles.radioItem}>
                <input type="radio" name="content" defaultChecked />
                Buyer provides the full text content
              </label>
              <label className={styles.radioItem}>
                <input type="radio" name="content" />
                Generic website content writing (+600 AED)
              </label>
              <label className={styles.radioItem}>
                <input type="radio" name="content" />
                Fresh 100% Original & Unique (+900 AED)
              </label>
            </div>
          </div>

          <div className={styles.buySection}>
            <button className={styles.btnBuy}>Get Consultation</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemoDetailsPage;
