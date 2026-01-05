"use client";
import React, { useRef, useEffect, useState } from "react";
import styles from "@/app/(frontend)/assets/style/common/commonAboutPage.module.css";
import Image from "next/image";

const CommonAboutPage2 = ({ text1, text2, img }) => {
  const scrollRef = useRef(null);
  const [isScrollable, setIsScrollable] = useState(false);
  const [scrolledToEnd, setScrolledToEnd] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      if (scrollRef.current) {
        const hasScroll =
          scrollRef.current.scrollHeight > scrollRef.current.clientHeight;
        setIsScrollable(hasScroll);

        // Initial check for scrolled to end
        const isAtEnd =
          Math.abs(
            scrollRef.current.scrollHeight -
              scrollRef.current.clientHeight -
              scrollRef.current.scrollTop
          ) < 5;
        setScrolledToEnd(isAtEnd);
      }
    };

    checkScroll();
    window.addEventListener("resize", checkScroll);

    // Check when content might change
    const observer = new MutationObserver(checkScroll);
    if (scrollRef.current) {
      observer.observe(scrollRef.current, {
        childList: true,
        subtree: true,
        characterData: true,
      });
    }

    return () => {
      window.removeEventListener("resize", checkScroll);
      observer.disconnect();
    };
  }, [text2]);

  const handleScroll = () => {
    if (scrollRef.current) {
      const isAtEnd =
        Math.abs(
          scrollRef.current.scrollHeight -
            scrollRef.current.clientHeight -
            scrollRef.current.scrollTop
        ) < 5;
      setScrolledToEnd(isAtEnd);
    }
  };

  return (
    <div className="frame-1200 py-100 sm-pt-0 sm-pb-50 sm-px-20">
      <h2
        className="text-center mb-40 sm-text-start"
        dangerouslySetInnerHTML={{ __html: text1 }}
      ></h2>
      <div className={styles.flex}>
        <div className={styles.left} style={{ "--width": "45%" }}>
          <Image
            src={img}
            alt="about image"
            width={628}
            height={556}
            className={styles.mainImg}
          />
        </div>
        <div className={styles.rightWrapper} style={{ "--width": "55%" }}>
          <div
            className={`${styles.right} ${
              isScrollable && !scrolledToEnd ? styles.canScroll : ""
            }`}
            ref={scrollRef}
            onScroll={handleScroll}
          >
            <div
              dangerouslySetInnerHTML={{ __html: text2 }}
              className={styles.textContent}
            />
          </div>

          {isScrollable && !scrolledToEnd && (
            <>
              <div className={styles.bottomFade}></div>
              <div className={styles.scrollHint}>
                <div className={styles.mouse}>
                  <div className={styles.wheel}></div>
                </div>
                <span>Scroll to read more</span>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CommonAboutPage2;
