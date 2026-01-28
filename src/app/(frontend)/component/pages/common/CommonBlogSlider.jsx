"use client";
import React, { useEffect, useState, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { getLatestBlogs } from "@/app/admin/dashboard/blog/actions";
import styles from "@/app/(frontend)/assets/style/common/commonBlogSlider.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";

const CommonBlogSlider = ({ category = null }) => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: false,
    skipSnaps: false,
  });

  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

  const router = useRouter();

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const data = await getLatestBlogs(category);
        setBlogs(data);
      } catch (error) {
        console.error("Error fetching blogs for slider:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, [category]);

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi],
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi],
  );

  const onSelect = useCallback((emblaApi) => {
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect(emblaApi);
    emblaApi.on("reInit", onSelect);
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  const getPreview = (content) => {
    if (!content) return "";
    let text = content.replace(/<[^>]*>/g, "");
    if (text.length > 100) {
      text = text.slice(0, 100) + "...";
    }
    return text;
  };

  if (loading) {
    return (
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.header}>
            <h2 className={styles.title}>Latest Insights</h2>
          </div>
          <div className={styles.grid}>
            {/* Skeleton loading could be added here */}
            <p>Loading blogs...</p>
          </div>
        </div>
      </section>
    );
  }

  if (blogs.length === 0) return null;

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div>
            <h2 className={styles.title}>Our Latest Blogs</h2>
          </div>
          <div className={styles.controls}>
            <button
              className={styles.controlBtn}
              onClick={scrollPrev}
              disabled={prevBtnDisabled}
              aria-label="Previous slide"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <button
              className={styles.controlBtn}
              onClick={scrollNext}
              disabled={nextBtnDisabled}
              aria-label="Next slide"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>

        <div className={styles.viewport} ref={emblaRef}>
          <div className={styles.sliderContainer}>
            {blogs.map((blog) => (
              <div className={styles.slide} key={blog.id}>
                <div
                  className={styles.blogCard}
                  onClick={() => router.push(`/blog/${blog.slug}`)}
                >
                  <div className={styles.imageWrapper}>
                    <img
                      src={blog.image || "/images/default-blog.jpg"}
                      alt={blog.title}
                      className={styles.blogImage}
                    />
                  </div>
                  <div className={styles.content}>
                    <span className={styles.category}>
                      {blog.category?.name || "General"}
                    </span>
                    <h3 className={styles.blogTitle}>{blog.title}</h3>
                    <p className={styles.excerpt}>{getPreview(blog.content)}</p>
                    <div className={styles.readMore}>
                      Read More
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommonBlogSlider;
