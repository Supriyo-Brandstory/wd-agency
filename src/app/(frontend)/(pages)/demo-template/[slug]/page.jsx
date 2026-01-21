"use client";
import React, { useState, useEffect } from "react";
import styles from "@/app/(frontend)/assets/style/demo/DemoDetails.module.css";
import { getTemplateBySlug } from "@/app/admin/dashboard/template/actions";
import { useParams, notFound } from "next/navigation";

const DemoDetailsPage = () => {
  const { slug } = useParams();
  const [template, setTemplate] = useState(null);
  const [activeTab, setActiveTab] = useState("description");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getTemplateBySlug(slug);
        if (!data) return notFound();
        setTemplate(data);
      } catch (error) {
        console.error("Error fetching template:", error);
      } finally {
        setLoading(false);
      }
    };
    if (slug) fetchData();
  }, [slug]);

  if (loading)
    return (
      <div className={styles.loadingContainer}>
        <p>Loading Template...</p>
      </div>
    );
  if (!template) return notFound();

  const features = template.features
    ? template.features.split("\n").filter((f) => f.trim() !== "")
    : [];

  return (
    <div className={styles.demoContainer}>
      {/* Left Column */}
      <div className={styles.leftColumn}>
        <div className={styles.heroImageWrapper}>
          <img
            src={template.image}
            alt={template.title}
            className={styles.heroImage}
          />
        </div>

        <div className={styles.actionButtons}>
          <a
            href={template.livePreviewUrl || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.btnLive}
          >
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
          </a>
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
                <div
                  dangerouslySetInnerHTML={{ __html: template.description }}
                  className={styles.mainDescription}
                />

                <div className={styles.featuresList}>
                  <h3 className={styles.sectionHeading}>Features</h3>
                  <ul>
                    {features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>

                  <p className={styles.noteText}>
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
                <h3 className={styles.sectionHeading}>
                  Frequently Asked Questions
                </h3>
                <div className={styles.faqItem}>
                  <p className={styles.faqQuestion}>
                    How long does it take to launch the website?
                  </p>
                  <p>
                    Depending on the package you choose, it can take 2, 3, or 4
                    days to launch the website once we receive your content and
                    domain access.
                  </p>
                </div>
                <div className={styles.faqItem}>
                  <p className={styles.faqQuestion}>
                    Can I customize the design?
                  </p>
                  <p>
                    Yes, the color scheme and fonts can be adjusted to match
                    your brand identity. The layout structure remains the same
                    as the demo.
                  </p>
                </div>
                <div className={styles.faqItem}>
                  <p className={styles.faqQuestion}>
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
          <div className={styles.productTitle}>{template.title}</div>

          <div className={styles.priceWrapper}>
            <span className={styles.priceLabel}>From:</span>
            <span className={styles.priceValue}>{template.price} AED</span>
          </div>

          <ul className={styles.quickFeatures}>
            {features.slice(0, 10).map((feature, index) => (
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
