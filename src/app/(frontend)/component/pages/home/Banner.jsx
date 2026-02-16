"use client";

import React, { useState } from "react";
import styles from "@/app/(frontend)/assets/style/home/banner.module.css";
import Link from "next/link";
import VideoPopup from "../common/VideoPopup";

export default function Banner({ text1, text2, text3 }) {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const videoId = "D6PIHZ7O5PA";

  return (
    <>
      <section className={`sm-text-start ${styles.banner}`}>
        <div className={styles.content}>
          <p className="fw-600 fs-24 mb-20 sm-mb-20">{text1 || ""}</p>
          <h1
            className="mb-20 sm-mb-20"
            dangerouslySetInnerHTML={{ __html: text2 || "" }}
          ></h1>

          <p className="frame-800 mb-40 sm-mb-30">{text3 || ""}</p>
          <div className={`mb-20 sm-mb-20 ${styles.buttons} flex-wrap`}>
            <Link
              href="/contact-us"
              className={`fw-600 fs-22 ${styles.primary}`}
            >
              Get Started
            </Link>
            <Link
              href="/case-studies"
              className={`fw-600 fs-22 ${styles.secondary}`}
            >
              View Portfolio
            </Link> 
            {/* <button
              onClick={() => setIsVideoOpen(true)}
              className={`fw-600 fs-22 ${styles.videoLink}`}
            >
              <span className={styles.playIcon}>
                <svg
                  width="14 "
                  height="14"
                  viewBox="0 0 18 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M18 10L0 20V0L18 10Z" fill="white" />
                </svg>
              </span>
              Watch Video
            </button> */}
          </div>
        </div>
      </section>

      <VideoPopup
        isOpen={isVideoOpen}
        onClose={() => setIsVideoOpen(false)}
        videoId={videoId}
      />
    </>
  );
}
