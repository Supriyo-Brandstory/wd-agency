"use client";
import { useEffect, useState, useRef } from "react";
import styles from "@/app/(frontend)/assets/style/blog/blogSingle.module.css";
import Image from "next/image";
import { getBlogBySlug } from "@/app/admin/dashboard/blog/actions";
import bannerbg from "@/app/(frontend)/assets/images/blog-bg.webp";

export default function BlogDetail({ params }) {
  const slug = params.slug;
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [toc, setToc] = useState([]);
  const [activeId, setActiveId] = useState(null);
  const observerRef = useRef(null);

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

  // 🟣 Observe headings and update active TOC
  useEffect(() => {
    if (!blog?.content) return;

    const headings = document.querySelectorAll("h1[id], h2[id], h3[id], h4[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: "0px 0px -60% 0px", threshold: 0.3 }
    );

    headings.forEach((el) => observer.observe(el));
    observerRef.current = observer;

    return () => {
      if (observerRef.current) observerRef.current.disconnect();
    };
  }, [blog]);

  if (loading) return <p className={styles.loading}>Loading blog...</p>;
  if (!blog) return <p className={styles.noResults}>Blog not found.</p>;
 const bgurl = typeof bannerbg === "string" ? bannerbg : bannerbg?.src;
  return (
    <>
     <div className={styles.header} style={{"--bg":`url(${bgurl}) no-repeat center center / cover`}}>
        <h1 className={styles.title}>{blog.title}</h1>
        <p className={styles.meta}>
          {new Date(blog.createdAt).toLocaleDateString()} • {blog.category.name}
        </p>
      </div>

     <div className={`frame-1200 pb-100 sm-pt-0 sm-pb-50 sm-px-20 sm-pt-0 ${styles.blogSection}`}>
      {/* ===== Header ===== */}
     
      {/* ===== Banner Image ===== */}
      <div className={styles.imageWrapper}>
        <Image
          src={blog.image || "/images/default-blog.jpg"}
          alt={blog.title}
          width={1200}
          height={500}
          className={styles.image}
          priority
        />
      </div>

      {/* ===== Content Section ===== */}
      <div className={styles.contentContainer}>
        {toc.length > 0 && (
          <aside className={styles.toc}>
            <h3>Table of Contents</h3>
            <ul>
              {toc.map((item) => (
                <li key={item.id} className={styles[item.tagName]}>
                  <a
        href={`#${item.id}`}
        className={activeId === item.id ? styles.active : ""}
        onClick={(e) => {
          e.preventDefault();
          const element = document.getElementById(item.id);
          if (element) {
            // Smooth scroll to section
            element.scrollIntoView({ behavior: "smooth", block: "start" });
            // Manually update activeId
            setActiveId(item.id);
          }
        }}
      >
                    {item.text}
                    
                  </a>
                </li>
              ))}
            </ul>
          </aside>
        )}

        <article
          className={styles.content}
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />
      </div>
    </div>
    </>
   
  );
}
