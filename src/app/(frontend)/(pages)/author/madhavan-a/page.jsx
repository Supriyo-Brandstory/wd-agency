"use client";
import { useState, useEffect } from "react";
import { getBlogs } from "@/app/admin/dashboard/blog/actions";
import styles from "@/app/(frontend)/assets/style/author.module.css";
import Image from "next/image";
import Link from "next/link";
import authorImage from "@/app/(frontend)/assets/images/1719401017176.jpeg";

export default function AuthorProfile() {
  const [latestBlogs, setLatestBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchBlogs() {
      try {
        setLoading(true);
        const allBlogs = await getBlogs();
        // Take latest 6 blogs
        setLatestBlogs(allBlogs.slice(0, 6));
      } catch (error) {
        console.error("Failed to fetch blogs:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchBlogs();
  }, []);

  // Helper to strip HTML for excerpt
  const getExcerpt = (html) => {
    if (!html) return "";
    const stripped = html.replace(/<[^>]+>/g, "");
    return stripped.substring(0, 150) + "...";
  };

  return (
    <main className={styles.container}>
      {/* Profile Section */}
      <div className={styles.profileWrapper}>
        <div className={styles.leftColumn}>
          <div className={styles.avatarWrapper}>
            <img
              src={authorImage.src}
              alt="Madhavan A"
              className={styles.avatar}
            />
          </div>
          <div className={styles.socialLinks}>
            <a
              href="https://in.linkedin.com/in/madhavan-a-850207155"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label="LinkedIn"
            >
              <svg
                width="20"
                height="20"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label="Facebook"
            >
              <svg
                width="20"
                height="20"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
              </svg>
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label="Instagram"
            >
              <svg
                width="20"
                height="20"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.329 3.608 1.304.975.975 1.242 2.242 1.304 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.329 2.633-1.304 3.608-.975.975-2.242 1.242-3.608 1.304-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.329-3.608-1.304-.975-.975-1.242-2.242-1.304-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.329-2.633 1.304-3.608.975-.975 2.242-1.242 3.608-1.304 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98.058-1.281.072-1.689.072-4.948s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98-1.281-.058-1.689-.072-4.948-.072zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
          </div>
        </div>

        <div className={styles.info}>
          <h1>Madhavan A</h1>
          <span className={styles.role}>
            Web Development Expert & Content Creator
          </span>
          <p className={styles.bio}>
            Madhavan is a passionate web development professional with deep
            expertise in building scalable, high-performance web applications.
            With a keen eye for design and a strong technical background, he
            shares valuable insights on modern web technologies, best practices,
            and digital strategy. Connect with him to stay updated on the latest
            trends in the tech world.
          </p>
        </div>
      </div>

      {/* Articles Section */}
      <div className={styles.articlesSection}>
        <div style={{ textAlign: "center" }}>
          <h2 className={styles.sectionTitle}>Latest Articles by Madhavan</h2>
        </div>

        <div className={styles.articlesGrid}>
          {loading ? (
            Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className={styles.skeletonCard}>
                <div className={styles.skeletonImage}></div>
                <div className={styles.skeletonText}></div>
                <div className={styles.skeletonTextSmall}></div>
              </div>
            ))
          ) : latestBlogs.length > 0 ? (
            latestBlogs.map((blog) => (
              <div key={blog.id} className={styles.articleCard}>
                <div className={styles.articleImageWrapper}>
                  <img
                    src={blog.image || "/images/default-blog.jpg"}
                    alt={blog.title}
                    className={styles.articleImage}
                    style={{
                      width: "100%",
                      height: "240px",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <div className={styles.articleContent}>
                  <span className={styles.articleDate}>
                    {new Date(blog.createdAt).toLocaleDateString("en-GB", {
                      day: "2-digit",
                      month: "short",
                      year: "numeric",
                    })}
                  </span>
                  <h3 className={styles.articleTitle}>{blog.title}</h3>
                  <p className={styles.articleExcerpt}>
                    {getExcerpt(blog.content)}
                  </p>
                  <Link href={`/blog/${blog.slug}`} className={styles.readMore}>
                    Read Article &rarr;
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <p
              style={{
                textAlign: "center",
                color: "#ccc",
                gridColumn: "1 / -1",
              }}
            >
              No articles found.
            </p>
          )}
        </div>
      </div>
    </main>
  );
}
