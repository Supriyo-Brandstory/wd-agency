"use client";

import React from "react";
import Image from "next/image";
import "./LogoScroller.css";

/**
 * LogoScroller Component
 * A reusable component for creating infinite scrolling logo carousels
 *
 * @param {Array} logos - Array of logo objects with { src, alt } properties
 * @param {String} direction - 'left' or 'right' (default: 'left')
 * @param {Number} speed - Animation duration in seconds (default: 30)
 * @param {Number} logoHeight - Max height for logos in pixels (default: 40)
 * @param {String} className - Additional CSS classes
 */
const LogoScroller = ({
  logos = [],
  direction = "left",
  speed = 30,
  logoHeight = 40,
  className = "",
}) => {
  // Duplicate logos for seamless infinite scroll
  const duplicatedLogos = [...logos, ...logos];

  return (
    <div
      className={`logo-scroller-container ${className}`}
      style={{ "--logo-height": `${logoHeight}px` }}
    >
      <div
        className={`logo-scroller ${direction === "right" ? "reverse" : ""}`}
        style={{ animationDuration: `${speed}s` }}
      >
        {duplicatedLogos.map((logo, index) => (
          <div key={index} className="logo-wrap">
            <Image
              src={logo.src}
              alt={logo.alt || "Client Logo"}
              width={150}
              height={80}
              className="client-logo"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoScroller;
