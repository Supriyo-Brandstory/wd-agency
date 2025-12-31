"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import styles from "@/app/(frontend)/assets/style/calculator/CostCalculator.module.css";

const pricingData = {
  numPages: [
    { id: 'starter', label: "1 – 10 Pages", min: 6000, max: 9000 },
    { id: 'growth', label: "11 – 50 Pages", min: 12000, max: 20000 },
    { id: 'professional', label: "51 – 100 Pages", min: 22000, max: 35000 },
    { id: 'enterprise', label: "101 – 150 Pages", min: 38000, max: 55000 },
    { id: 'large', label: "150+ Pages", min: 60000, max: 85000 },
  ],
  designStyle: [
    { id: 'none', label: "No design needed", min: 0, max: 0 },
    { id: 'modern', label: "Modern (Clean & Contemporary)", min: 1800, max: 2800 },
    { id: 'corporate', label: "Corporate (Professional Look)", min: 3000, max: 4500 },
    { id: 'highend', label: "High-End UX (Conversion-Focused)", min: 5000, max: 7000 },
    { id: 'global', label: "Global Standard (Premium)", min: 7500, max: 10000 },
  ],
  copywriting: [
    { id: 'none', label: "None", min: 0, max: 0 },
    { id: 'basic', label: "Basic (1-10 Pages)", min: 1500, max: 2500 },
    { id: 'standard', label: "Standard (11-50 Pages)", min: 3000, max: 5000 },
    { id: 'advanced', label: "Advanced (51+ Pages)", min: 6000, max: 10000 },
  ],
  seoServices: [
    { id: 'none', label: "None", min: 0, max: 0 },
    { id: 'basic', label: "Basic Setup (On-page Basics)", min: 1000, max: 1500 },
    { id: 'standard', label: "Standard (On-page + Technical)", min: 2000, max: 3000 },
    { id: 'growth_seo', label: "Growth (Advanced Optimization)", min: 3500, max: 5000 },
    { id: 'enterprise_seo', label: "Enterprise SEO (Large-Scale)", min: 5500, max: 7500 },
  ],
  responsiveness: [
    { id: 'no', label: "No", min: 0, max: 0 },
    { id: 'mobile', label: "Mobile Friendly", min: 1000, max: 1500 },
    { id: 'multi', label: "Multi-Device (Mobile + Tablet)", min: 1800, max: 2500 },
    { id: 'adaptive', label: "Adaptive UI (Dynamic Layouts)", min: 3000, max: 4000 },
    { id: 'premium_resp', label: "Premium (Full Adaptability)", min: 6500, max: 8500 },
  ],
  database: [
    { id: 'none', label: "None", min: 0, max: 0 },
    { id: 'basic_db', label: "Basic (Simple)", min: 2000, max: 3000 },
    { id: 'advanced_db', label: "Advanced (Relational)", min: 3500, max: 5000 },
    { id: 'enterprise_db', label: "Enterprise (Large Data)", min: 6000, max: 8500 },
    { id: 'highload', label: "High Load (Scalable)", min: 9500, max: 13000 },
  ],
  ecommerce: [
    { id: 'none', label: "None", min: 0, max: 0 },
    { id: 'basic_store', label: "Basic Store (Small)", min: 4500, max: 6500 },
    { id: 'advanced_store', label: "Advanced (Feature-Rich)", min: 7500, max: 10500 },
    { id: 'enterprise_store', label: "Enterprise (Large-Scale)", min: 13000, max: 18000 },
    { id: 'largescale_store', label: "Large Scale (High-Traffic)", min: 20000, max: 28000 },
  ],
  cms: [
    { id: 'none', label: "None", min: 0, max: 0 },
    { id: 'standard_cms', label: "Standard CMS (WordPress)", min: 2500, max: 3500 },
    { id: 'custom_cms', label: "Custom CMS (Tailored)", min: 4500, max: 6500 },
    { id: 'enterprise_cms', label: "Enterprise CMS (Advanced)", min: 8000, max: 12000 },
    { id: 'headless_cms', label: "Headless CMS (API-Driven)", min: 14000, max: 20000 },
  ]
};

const categories = [
  { key: 'numPages', title: 'Number of pages' },
  { key: 'designStyle', title: 'Style of design' },
  { key: 'copywriting', title: 'Copywriting # of pages' },
  { key: 'seoServices', title: 'SEO Placement' },
  { key: 'responsiveness', title: 'Responsive Design' },
  { key: 'database', title: 'Database Integration' },
  { key: 'ecommerce', title: 'e-Commerce Functionality' },
  { key: 'cms', title: 'CMS' },
];

const CostCalculator = () => {
  const [selections, setSelections] = useState({
    numPages: 0,
    designStyle: 0,
    copywriting: 0,
    seoServices: 0,
    responsiveness: 0,
    database: 0,
    ecommerce: 0,
    cms: 0,
  });

  const [totalMin, setTotalMin] = useState(0);
  const [totalMax, setTotalMax] = useState(0);

  useEffect(() => {
    let min = 0;
    let max = 0;
    Object.keys(selections).forEach(key => {
      const index = selections[key];
      const item = pricingData[key][index];
      min += item.min;
      max += item.max;
    });
    setTotalMin(min);
    setTotalMax(max);
  }, [selections]);

  const handleSliderChange = (key, value) => {
    setSelections(prev => ({
      ...prev,
      [key]: parseInt(value)
    }));
  };

  const handleStep = (key, delta) => {
    setSelections(prev => {
      const maxIdx = pricingData[key].length - 1;
      const newVal = Math.max(0, Math.min(maxIdx, prev[key] + delta));
      return { ...prev, [key]: newVal };
    });
  };

  return (
    <section className='frame-1200 py-100 sm-pt-0 sm-pb-50 sm-px-20'>
      <div className={styles.calculatorContainer}>
        <div className={styles.calcHeader}>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className='text-center mb-20 sm-text-start sm-mb-20'
          >
            Website Development Cost Calculator
          </motion.h2>
        </div>

        <div className={styles.optionsList}>
          {categories.map((cat, idx) => {
            const currentIdx = selections[cat.key];
            const maxIdx = pricingData[cat.key].length - 1;
            const currentItem = pricingData[cat.key][currentIdx];
            
            return (
              <motion.div 
                key={cat.key} 
                className={styles.sliderRow}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
              >
                <div className={styles.rowLabel}>{cat.title}</div>
                
                <div className={styles.sliderContainer}>
                  <button 
                    className={styles.arrow} 
                    onClick={() => handleStep(cat.key, -1)}
                    disabled={currentIdx === 0}
                  >
                    ❮
                  </button>
                  <input 
                    type="range"
                    min="0"
                    max={maxIdx}
                    value={currentIdx}
                    onChange={(e) => handleSliderChange(cat.key, e.target.value)}
                    className={styles.slider}
                  />
                  <button 
                    className={styles.arrow} 
                    onClick={() => handleStep(cat.key, 1)}
                    disabled={currentIdx === maxIdx}
                  >
                    ❯
                  </button>
                </div>

                <div className={styles.rowValue}>
                  {currentItem.label}
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className={styles.summarySticky}>
          <motion.div 
            className={styles.summaryCard}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className={styles.summaryTitle}>Project Estimate</h3>
            
            <div className={styles.summaryRows}>
              {categories.map(cat => {
                const item = pricingData[cat.key][selections[cat.key]];
                return (
                  <div key={cat.key} className={styles.summaryRow}>
                    <span>{cat.title}</span>
                    <span>{item.min === 0 ? 'None' : item.min.toLocaleString() + ' AED'}</span>
                  </div>
                );
              })}
            </div>

            <div className={styles.totalSection}>
              <div className={styles.totalLabel}>Estimated Investment</div>
              <div className={styles.totalValue}>
                {totalMin.toLocaleString()} – {totalMax.toLocaleString()} AED
              </div>
            </div>

            <button className={styles.ctaButton}>
              Get a Detailed Quote
            </button>

            <p className={styles.disclaimer}>
              * Estimates are based on standard project scope. 
              Contact us for a tailored proposal.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CostCalculator;
