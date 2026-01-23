"use client";
import React, { useState, useEffect } from "react";
import styles from "@/app/(frontend)/assets/style/demo/DemoDetails.module.css";
import { getTemplateBySlug } from "@/app/admin/dashboard/template/actions";
import { useParams, notFound } from "next/navigation";
import QuotePopup from "@/app/(frontend)/component/pages/common/QuotePopup";
import { motion, AnimatePresence } from "framer-motion";
import uparrow from "@/app/(frontend)/assets/images/icons/faquparrow.svg";
import downarrow from "@/app/(frontend)/assets/images/icons/faqdownarrow.svg";
import Image from "next/image";

const faqs = [
  {
    q: "1. Do I need to already own a domain to get started?",
    a: "Not at all. If you already have a domain, we’ll use it. If you don’t, we can help you choose and register a suitable domain that matches your business name. We’ll always share available options with you first, so you stay in control of the final decision.",
  },
  {
    q: "2. What hosting plan is included with the website?",
    a: "We provide reliable, high-performance hosting for 12 months suitable for business websites. It ensures fast loading, strong security, and smooth performance. Hosting is included for the first year, so you don’t need to worry about any technical setup.",
  },
  {
    q: "3. How long does it take to complete my website?",
    a: "Most websites are completed within the committed project timeline of 1-2 days. Once we receive your logo, content details, and approvals on time, the process moves quickly and smoothly. Faster delivery within 3-4 hours options are also available if you’re on a tight deadline.",
  },
  {
    q: "4. Can I request changes to the design?",
    a: "Yes. We include 2 revisions as part of the website package. This allows you to review the website and request reasonable changes so the final result matches your expectations. We simply ask for timely feedback to avoid delays.",
  },
  {
    q: "5. Will you write the website content for me?",
    a: "Yes. We provide professionally written content based on your business type and goals. The content is clear, relevant, and easy to understand for your customers. If you already have content or brochures, we can use or refine them as well.",
  },
  {
    q: "6. Is the website mobile-friendly?",
    a: "Absolutely. Every website we design is fully responsive. This means it looks and works perfectly on mobiles, tablets, laptops, and desktops- an essential requirement for today’s users and search engines.",
  },
  {
    q: "7. Will my website load fast?",
    a: "Yes. Speed is a priority for us. We optimize images, code, and structure to ensure fast loading times, which improves user experience and helps with Google rankings.",
  },
  {
    q: "8. Will I be able to update the website myself?",
    a: "Yes. You will get full admin access after project completion. You can easily update text, images, and basic content without technical knowledge. We also provide guidance if needed.",
  },
  {
    q: "9. Do you provide SEO with the website?",
    a: "We include basic on-page SEO such as meta titles, descriptions, and search-friendly structure. This helps your website get indexed properly on Google. Advanced SEO services can be added separately if you want stronger visibility and faster results.",
  },
  {
    q: "10. Is my website secure?",
    a: "Yes. We include SSL security, which protects your website and builds trust with visitors. Security best practices are followed to keep your site safe from common threats.",
  },
  {
    q: "11. Will the website work on all browsers?",
    a: "Yes. Your website will be tested and optimized to work smoothly on all major browsers including Chrome, Safari, Firefox, and Edge.",
  },
  {
    q: "12. Do you offer website maintenance after launch?",
    a: "Yes. We provide free maintenance for 6 months after launch. During this time, we handle minor updates, security checks, and technical support to ensure everything runs smoothly.",
  },
  {
    q: "13. Can you set up the website on my own hosting?",
    a: "Yes. If you already have hosting, we can deploy the website on your server. We only require standard hosting access and sufficient storage to complete the setup.",
  },
  {
    q: "14. Will I fully own my website?",
    a: "Yes- 100%. Once the project is completed, the website, content, and credentials belong entirely to you. There are no hidden restrictions or lock-ins.",
  },
  {
    q: "15. What happens after I place an order?",
    a: "After payment confirmation, we’ll contact you to collect basic details like your logo, business information, and preferences. We then design, develop, and share the website for review. Once approved, your website goes live.",
  },
];

const DemoDetailsPage = () => {
  const { slug } = useParams();
  const [template, setTemplate] = useState(null);
  const [activeTab, setActiveTab] = useState("description");
  const [loading, setLoading] = useState(true);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [activeFaqIndex, setActiveFaqIndex] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaqIndex(activeFaqIndex === index ? null : index);
  };

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
                {faqs.map((faq, index) => (
                  <div key={index} className={styles.faqItem}>
                    <button
                      className={styles.faqHeader}
                      onClick={() => toggleFaq(index)}
                    >
                      <span className={styles.faqQuestion}>{faq.q}</span>
                      {activeFaqIndex === index ? (
                        <Image src={uparrow} alt="Up Arrow" />
                      ) : (
                        <Image src={downarrow} alt="Down Arrow" />
                      )}
                    </button>
                    <AnimatePresence>
                      {activeFaqIndex === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className={styles.faqContent}
                        >
                          <p className="pt-2">{faq.a}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
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
