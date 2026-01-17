"use client";
import { use, useEffect, useState, useRef } from "react";
import styles from "@/app/(frontend)/assets/style/blog/blogSingle.module.css";
import Image from "next/image";
import { getBlogBySlug } from "@/app/admin/dashboard/blog/actions";
import bannerbg from "@/app/(frontend)/assets/images/blog-bg.webp";
import ChecklistPopup from "@/app/(frontend)/component/pages/blog/ChecklistPopup";

export default function BlogDetail({ params }) {
  const { slug } = use(params);
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [toc, setToc] = useState([]);
  const [activeId, setActiveId] = useState(null);
  const [isTocExpanded, setIsTocExpanded] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);
  const [sidebarMessage, setSidebarMessage] = useState({ type: "", text: "" });
  const [copyMessage, setCopyMessage] = useState(false);
  const observerRef = useRef(null);

  const handleShare = (platform) => {
    const url = window.location.href;
    const title = blog?.title || "";
    let shareUrl = "";

    switch (platform) {
      case "linkedin":
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
          url,
        )}`;
        break;
      case "facebook":
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
          url,
        )}`;
        break;
      case "twitter":
        shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(
          url,
        )}&text=${encodeURIComponent(title)}`;
        break;
      case "copy":
        navigator.clipboard.writeText(url).then(() => {
          setCopyMessage(true);
          setTimeout(() => setCopyMessage(false), 2000);
        });
        return;
      default:
        return;
    }

    if (shareUrl) {
      window.open(shareUrl, "_blank");
    }
  };

  const handleAISummary = (provider) => {
    const url = window.location.href;
    const prompt = `Summarize this blog post: ${url}`;
    let aiUrl = "";

    switch (provider) {
      case "chatgpt":
        aiUrl = `https://chat.openai.com/?q=${encodeURIComponent(prompt)}`;
        break;
      case "perplexity":
        aiUrl = `https://www.perplexity.ai/search?q=${encodeURIComponent(
          prompt,
        )}`;
        break;
      case "claude":
        aiUrl = `https://claude.ai/`;
        break;
      case "grok":
        aiUrl = `https://grok.com/`;
        break;
      default:
        return;
    }

    if (aiUrl) {
      window.open(aiUrl, "_blank");
    }
  };

  useEffect(() => {
    async function fetchBlog() {
      try {
        setLoading(true);
        const fetchedBlog = await getBlogBySlug(slug);
        let contentHtml = fetchedBlog?.content || "";

        // 🧠 Add IDs to headings for TOC scroll
        const tempDiv = document.createElement("div");
        tempDiv.innerHTML = contentHtml;
        const headings = Array.from(tempDiv.querySelectorAll("h1, h2, h3, h4"));

        const tocData = headings.map((h) => {
          const id =
            h.id ||
            h.textContent
              .trim()
              .replace(/[^\w\s-]/g, "")
              .replace(/\s+/g, "-")
              .toLowerCase();
          h.id = id;
          return {
            text: h.textContent,
            id,
            tagName: h.tagName.toLowerCase(),
          };
        });

        fetchedBlog.content = tempDiv.innerHTML;
        setToc(tocData);
        setBlog(fetchedBlog);
      } catch (error) {
        console.error("Error fetching blog:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchBlog();
  }, [slug]);

  // 🟣 Accurate scroll listener for TOC active state
  useEffect(() => {
    if (!blog?.content || toc.length === 0) return;

    const handleScroll = () => {
      const headings = toc
        .map((t) => document.getElementById(t.id))
        .filter(Boolean);
      const scrollPosition = window.scrollY + 130; // 130px offset for header spacing

      let currentId = toc[0]?.id; // Default to first heading
      for (let i = 0; i < headings.length; i++) {
        if (scrollPosition >= headings[i].offsetTop) {
          currentId = headings[i].id;
        } else {
          break; // Stop once we find the first heading below the scroll position
        }
      }
      setActiveId(currentId);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial active state check

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [blog, toc]);

  const bgurl = typeof bannerbg === "string" ? bannerbg : bannerbg?.src;

  return (
    <>
      <div
        className={styles.header}
        style={{ "--bg": `url(${bgurl}) no-repeat center center / cover` }}
      >
        <div className="frame-1200">
          <div className={styles.headerContent}>
            {loading ? (
              <div className={styles.headerLeft}>
                <div className={styles.skeletonTitle}></div>
                <div className={styles.skeletonMeta}></div>
              </div>
            ) : (
              <>
                <div className={styles.headerLeft}>
                  <h1 className={styles.title}>{blog.title}</h1>

                  <div className={styles.authorInfo}>
                    <div className={styles.authorAvatar}>
                      <img
                        src={`https://ui-avatars.com/api/?name=Tapas+Pal&background=0D8ABC&color=fff`}
                        alt="Author"
                      />
                    </div>
                    <span>By Tapas Pal</span>
                  </div>

                  <div className={styles.headerFooter}>
                    <p className={styles.date}>
                      {new Date(blog.createdAt).toLocaleDateString("en-GB", {
                        day: "2-digit",
                        month: "short",
                        year: "numeric",
                      })}
                    </p>
                    <div className={styles.shareIcons}>
                      <span className={styles.shareText}>Share</span>
                      <a
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          handleShare("linkedin");
                        }}
                      >
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        </svg>
                      </a>
                      <a
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          handleShare("facebook");
                        }}
                      >
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                        </svg>
                      </a>
                      <a
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          handleShare("copy");
                        }}
                      >
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M21.586 10.461l-10.05 10.075c-1.95 1.95-5.125 1.95-7.075 0s-1.95-5.125 0-7.075l10.625-10.625c1.3-1.3 3.425-1.3 4.725 0 1.3 1.3 1.3 3.425 0 4.725l-9.4 9.425c-.65.65-1.7.65-2.35 0-.65-.65-.65-1.7 0-2.35l8.475-8.475-1.425-1.425-8.475 8.475c-1.425 1.425-1.425 3.75 0 5.175s3.75 1.425 5.175 0l9.425-9.425c2.075-2.075 2.075-5.45 0-7.525s-5.45-2.075-7.525 0l-10.625 10.625c-2.725 2.725-2.725 7.15 0 9.875s7.15 2.725 9.875 0l10.05-10.075-1.425-1.425z" />
                        </svg>
                      </a>
                      <a
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          handleShare("twitter");
                        }}
                      >
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
                <div className={styles.headerRight}>
                  <div className={styles.imageWrapper}>
                    <img
                      src={blog.image || "/images/default-blog.jpg"}
                      alt={blog.title}
                      width={1200}
                      height={500}
                      className={styles.image}
                    />
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      <div
        className={`frame-1200 pb-100 sm-pt-0 sm-pb-50 sm-px-15 sm-pt-0 ${styles.blogSection}`}
      >
        {loading ? (
          <>
            {/* ===== Skeleton Content ===== */}
            <div className={styles.skeletonContent}>
              {Array.from({ length: 8 }).map((_, i) => (
                <div
                  key={i}
                  className={`${styles.skeletonLine} ${
                    i % 3 === 0 ? styles.wide : ""
                  }`}
                ></div>
              ))}
            </div>
          </>
        ) : (
          <>
            {/* ===== Content Section ===== */}
            <div className={styles.contentContainer}>
              <div className={styles.leftColumn}>
                {/* ===== Quick Summary Box ===== */}
                <div className={styles.summaryBox}>
                  <h3>Get a quick blog summary with</h3>
                  <div className={styles.summaryButtons}>
                    <button
                      className={styles.summaryBtn}
                      onClick={() => handleAISummary("chatgpt")}
                    >
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M22.28 7.53c-.004 0-.007.003-.011.003l-1.63 4.14a.5.5 0 0 1-.93 0l-1.63-4.14c-.004 0-.007-.003-.011-.003a.5.5 0 0 1-.468-.328L16.47 3.53a.5.5 0 0 1 .93 0l1.13 2.872 1.13-2.872a.5.5 0 0 1 .93 0l1.13 2.872 1.13-2.872a.5.5 0 0 1 .93 0l1.13 2.872c.003.007.007.013.01.02a.5.5 0 0 1-.471.638zM12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z" />
                      </svg>
                      ChatGPT
                    </button>
                    <button
                      className={styles.summaryBtn}
                      onClick={() => handleAISummary("perplexity")}
                    >
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71L12 2z" />
                      </svg>
                      Perplexity
                    </button>
                    <button
                      className={styles.summaryBtn}
                      onClick={() => handleAISummary("claude")}
                    >
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 1L9 9l-8 3 8 3 3 8 3-8 8-3-8-3-3-8z" />
                      </svg>
                      Claude
                    </button>
                    <button
                      className={styles.summaryBtn}
                      onClick={() => handleAISummary("grok")}
                    >
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      </svg>
                      Grok
                    </button>
                  </div>
                </div>

                {/* ===== Mobile TOC (Visible only on mobile) ===== */}
                {toc.length > 0 && (
                  <div
                    className={`${styles.tocSidebar} ${styles.mobileOnly} ${
                      isTocExpanded ? styles.expanded : ""
                    }`}
                  >
                    <div
                      className={styles.tocHeader}
                      onClick={() => setIsTocExpanded(!isTocExpanded)}
                    >
                      <h3>Page Contents</h3>
                      <div className={styles.tocIcon}>
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M4 6h16M4 12h16M4 18h16" />
                          <path
                            d="M18 9l3 3-3 3"
                            className={isTocExpanded ? styles.flipped : ""}
                          />
                        </svg>
                      </div>
                    </div>
                    <div className={styles.tocBody}>
                      <ul>
                        {toc.map((item) => (
                          <li key={item.id} className={styles[item.tagName]}>
                            <a
                              href={`#${item.id}`}
                              className={
                                activeId === item.id ? styles.active : ""
                              }
                              onClick={(e) => {
                                e.preventDefault();
                                const element = document.getElementById(
                                  item.id,
                                );
                                if (element) {
                                  element.scrollIntoView({
                                    behavior: "smooth",
                                    block: "start",
                                  });
                                  setActiveId(item.id);
                                }
                              }}
                            >
                              {item.text}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}

                <article
                  className={styles.content}
                  dangerouslySetInnerHTML={{ __html: blog.content }}
                />

                {/* ===== Checklist Section ===== */}
                {blog.checklistItems && (
                  <div className={styles.checklistSection}>
                    <div className={styles.checklistHeader}>
                      <span className={styles.checklistIcon}>📋</span>
                      <h2 className={styles.checklistTitle}>
                        {blog.checklistTitle ||
                          "Website Project Requirement Checklist"}
                      </h2>
                    </div>
                    <p className={styles.checklistDesc}>
                      Select the requirements that align with your project
                      goals. Our team at Website Development Agency will use
                      these details to create a custom-tailored solution for
                      your business.
                    </p>
                    <ul className={styles.checklistList}>
                      {blog.checklistItems
                        .split("\n")
                        .filter((i) => i.trim())
                        .map((item, index) => {
                          const itemText = item.trim();
                          return (
                            <li key={index} className={styles.checklistItem}>
                              <input
                                type="checkbox"
                                id={`item-${index}`}
                                onChange={(e) => {
                                  if (e.target.checked) {
                                    setSelectedItems((prev) => [
                                      ...prev,
                                      itemText,
                                    ]);
                                  } else {
                                    setSelectedItems((prev) =>
                                      prev.filter((i) => i !== itemText),
                                    );
                                  }
                                }}
                              />
                              <label htmlFor={`item-${index}`}>
                                {itemText}
                              </label>
                            </li>
                          );
                        })}
                    </ul>
                    <div className={styles.checklistTip}>
                      <span className={styles.tipIcon}>✅</span>
                      <p>
                        <strong>Tip:</strong> Share your selections with us for
                        a faster, more accurate proposal tailored to your
                        specific needs.
                      </p>
                    </div>
                    <button
                      className={styles.checklistSubmitBtn}
                      onClick={() => setIsPopupOpen(true)}
                    >
                      Submit Selections
                    </button>
                  </div>
                )}
              </div>

              <aside className={styles.rightSidebar}>
                {toc.length > 0 && (
                  <div
                    className={`${styles.tocSidebar} ${styles.desktopOnly} ${
                      isTocExpanded ? styles.expanded : ""
                    }`}
                  >
                    <div
                      className={styles.tocHeader}
                      onClick={() => setIsTocExpanded(!isTocExpanded)}
                    >
                      <h3>Page Contents</h3>
                      <div className={styles.tocIcon}>
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M4 6h16M4 12h16M4 18h16" />
                          <path
                            d="M18 9l3 3-3 3"
                            className={isTocExpanded ? styles.flipped : ""}
                          />
                        </svg>
                      </div>
                    </div>

                    <div className={styles.tocBody}>
                      <ul>
                        {toc.map((item) => (
                          <li key={item.id} className={styles[item.tagName]}>
                            <a
                              href={`#${item.id}`}
                              className={
                                activeId === item.id ? styles.active : ""
                              }
                              onClick={(e) => {
                                e.preventDefault();
                                const element = document.getElementById(
                                  item.id,
                                );
                                if (element) {
                                  element.scrollIntoView({
                                    behavior: "smooth",
                                    block: "start",
                                  });
                                  setActiveId(item.id);
                                }
                              }}
                            >
                              {item.text}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
                <div className={styles.stickyForm}>
                  <h3>
                    Get Your Free Project Roadmap & Expert Design Consultation
                  </h3>
                  <form
                    onSubmit={async (e) => {
                      e.preventDefault();
                      const formData = new FormData(e.target);
                      const data = {
                        fullName: formData.get("fullName"),
                        emailAddress: formData.get("email"),
                        phoneNumber: formData.get("phone"),
                        projectDetails: `Inquiry from Blog: ${blog.title}`,
                        serviceInterestedIn: "Web Design",
                      };
                      const { createEnquiry } =
                        await import("@/app/admin/dashboard/enquiry/action");
                      const result = await createEnquiry(data);
                      if (result.success) {
                        setSidebarMessage({
                          type: "success",
                          text: "Success! We will contact you soon.",
                        });
                        e.target.reset();
                        setTimeout(
                          () => setSidebarMessage({ type: "", text: "" }),
                          5000,
                        );
                      } else {
                        setSidebarMessage({
                          type: "error",
                          text: "Something went wrong. Please try again.",
                        });
                      }
                    }}
                  >
                    <div className={styles.sidebarInputGroup}>
                      <input
                        type="text"
                        name="fullName"
                        placeholder="Full Name*"
                        required
                      />
                    </div>
                    <div className={styles.sidebarInputGroup}>
                      <input
                        type="email"
                        name="email"
                        placeholder="Email Address*"
                        required
                      />
                    </div>
                    <div className={styles.sidebarInputGroup}>
                      <input
                        type="tel"
                        name="phone"
                        placeholder="Phone Number*"
                        required
                      />
                    </div>
                    <button type="submit" className={styles.sidebarSubmitBtn}>
                      Get Started
                    </button>
                    {sidebarMessage.text && (
                      <p
                        className={`${styles.sidebarMessage} ${
                          styles[sidebarMessage.type]
                        }`}
                      >
                        {sidebarMessage.text}
                      </p>
                    )}
                  </form>
                </div>
              </aside>
            </div>
          </>
        )}
      </div>
      {blog && (
        <ChecklistPopup
          isOpen={isPopupOpen}
          onClose={() => setIsPopupOpen(false)}
          blogTitle={blog.title}
          selectedItems={selectedItems}
        />
      )}
      {copyMessage && (
        <div className={styles.copyPopup}>Link copied to clipboard!</div>
      )}
    </>
  );
}
