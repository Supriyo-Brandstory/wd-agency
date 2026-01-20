import React from "react";
import styles from "@/app/(frontend)/assets/style/common/CommonCostBreakdown.module.css";

const CommonCostBreakdown = ({
  heading = "Types of Website and Related Cost Breakdown",
  description = "Select the right website package based on the features, performance, and growth level you need.",
  data = [
    {
      solution: "Basic",
      benefits: "Affordable, creative",
      price: "AED 3,000- 5,000",
    },
    {
      solution: "Standard",
      benefits: "Feature-rich, creative",
      price: "AED 5,000- 8,000",
    },
    {
      solution: "Advanced",
      benefits: "Well-structured, growth-ready",
      price: "AED 8,000- 12,000",
    },
    {
      solution: "Premium",
      benefits: "Premium, custom-built",
      price: "AED 12,000+",
    },
  ],
}) => {
  return (
    <div className="frame-1200 py-100 sm-pt-10 sm-pb-50 sm-px-20">
      <div className="text-center sm-text-start mb-50 sm-mb-20">
        <h2 className="mb-20">{heading}</h2>
        <p>{description}</p>
      </div>

      <div className={styles.scrollHint}>
        <span>Swipe horizontally to view full table</span>
        <svg
          fill="none"
          height="20"
          viewBox="0 0 24 24"
          width="20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 5V19M12 5L6 11M12 5L18 11"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            transform="rotate(270 12 12)"
          />
        </svg>
      </div>

      <div className={styles.chart}>
        <div className={styles.grid}>
          <h3>Web Design Solution</h3>
          <h3>Benefits</h3>
          <h3>Price Range Estimate</h3>
        </div>
        {data.map((item, index) => (
          <div className={styles.grid} key={index}>
            <p>{item.solution}</p>
            <p>{item.benefits}</p>
            <p className={styles.price}>{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommonCostBreakdown;
