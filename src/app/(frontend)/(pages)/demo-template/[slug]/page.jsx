"use client";
import React, { useState, useEffect } from "react";
import styles from "@/app/(frontend)/assets/style/demo/DemoDetails.module.css";
import { getTemplateBySlug } from "@/app/admin/dashboard/template/actions";
import { useParams, notFound } from "next/navigation";
import QuotePopup from "@/app/(frontend)/component/pages/common/QuotePopup";

const DemoDetailsPage = () => {
  const { slug } = useParams();
  const [template, setTemplate] = useState(null);
  const [activeTab, setActiveTab] = useState("description");
  const [loading, setLoading] = useState(true);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  // Selections state
  const [selections, setSelections] = useState({
    domain: "I have a domain",
    duration: "4 Days - Normal",
    content: "Buyer provides the full text content",
  });

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

  const handleConsultation = () => {
    setIsPopupOpen(true);
  };

  const popupData = {
    title: template.title,
    price: template.price,
    service: "Demo Template: " + template.title,
    projectDetails: `Inquiry for Template: ${template.title}\n\nSelected Options:\n- Domain: ${selections.domain}\n- Duration: ${selections.duration}\n- Content: ${selections.content}`,
    hideFields: { service: true, budget: true, details: true },
  };

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
          {template.demoFolder && (
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
          )}
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
                <input
                  type="radio"
                  name="domain"
                  checked={selections.domain === "I have a domain"}
                  onChange={() =>
                    setSelections({ ...selections, domain: "I have a domain" })
                  }
                />
                I have a domain
              </label>
              <label className={styles.radioItem}>
                <input
                  type="radio"
                  name="domain"
                  checked={
                    selections.domain ===
                    "I need a .com or .net domain (+50 AED)"
                  }
                  onChange={() =>
                    setSelections({
                      ...selections,
                      domain: "I need a .com or .net domain (+50 AED)",
                    })
                  }
                />
                I need a .com or .net domain (+50 AED)
              </label>
              <label className={styles.radioItem}>
                <input
                  type="radio"
                  name="domain"
                  checked={selections.domain === "I need .ae domain (+150 AED)"}
                  onChange={() =>
                    setSelections({
                      ...selections,
                      domain: "I need .ae domain (+150 AED)",
                    })
                  }
                />
                I need .ae domain (+150 AED)
              </label>
            </div>
          </div>

          <div className={styles.optionSection}>
            <div className={styles.optionTitle}>Choose project duration</div>
            <div className={styles.optionGroup}>
              <label className={styles.radioItem}>
                <input
                  type="radio"
                  name="duration"
                  checked={selections.duration === "4 Days - Normal"}
                  onChange={() =>
                    setSelections({
                      ...selections,
                      duration: "4 Days - Normal",
                    })
                  }
                />
                4 Days - Normal
              </label>
              <label className={styles.radioItem}>
                <input
                  type="radio"
                  name="duration"
                  checked={selections.duration === "3 Days - Urgent (+300 AED)"}
                  onChange={() =>
                    setSelections({
                      ...selections,
                      duration: "3 Days - Urgent (+300 AED)",
                    })
                  }
                />
                3 Days - Urgent (+300 AED)
              </label>
              <label className={styles.radioItem}>
                <input
                  type="radio"
                  name="duration"
                  checked={
                    selections.duration === "2 Days - Super Fast (+500 AED)"
                  }
                  onChange={() =>
                    setSelections({
                      ...selections,
                      duration: "2 Days - Super Fast (+500 AED)",
                    })
                  }
                />
                2 Days - Super Fast (+500 AED)
              </label>
            </div>
          </div>

          <div className={styles.optionSection}>
            <div className={styles.optionTitle}>Website content writing</div>
            <div className={styles.optionGroup}>
              <label className={styles.radioItem}>
                <input
                  type="radio"
                  name="content"
                  checked={
                    selections.content ===
                    "Buyer provides the full text content"
                  }
                  onChange={() =>
                    setSelections({
                      ...selections,
                      content: "Buyer provides the full text content",
                    })
                  }
                />
                Buyer provides the full text content
              </label>
              <label className={styles.radioItem}>
                <input
                  type="radio"
                  name="content"
                  checked={
                    selections.content ===
                    "Generic website content writing (+600 AED)"
                  }
                  onChange={() =>
                    setSelections({
                      ...selections,
                      content: "Generic website content writing (+600 AED)",
                    })
                  }
                />
                Generic website content writing (+600 AED)
              </label>
              <label className={styles.radioItem}>
                <input
                  type="radio"
                  name="content"
                  checked={
                    selections.content ===
                    "Fresh 100% Original & Unique (+900 AED)"
                  }
                  onChange={() =>
                    setSelections({
                      ...selections,
                      content: "Fresh 100% Original & Unique (+900 AED)",
                    })
                  }
                />
                Fresh 100% Original & Unique (+900 AED)
              </label>
            </div>
          </div>

          <div className={styles.buySection}>
            <button className={styles.btnBuy} onClick={handleConsultation}>
              Get Consultation
            </button>
          </div>
        </div>
      </div>

      {/* Consultation Popup */}
      <QuotePopup
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
        initialData={popupData}
      />
    </div>
  );
};

export default DemoDetailsPage;
