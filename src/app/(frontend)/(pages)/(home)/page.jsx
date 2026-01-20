import React from "react";
import Banner from "../../component/pages/home/Banner";
import Trusted from "../../component/pages/home/Trusted";
import BestAgency from "../../component/pages/home/BestAgency";
import WhatSetsUs from "../../component/pages/home/WhatSetsUs";
import OurCoreStrengths from "../../component/pages/home/OurCoreStrengths";
import TechnologyStack from "../../component/pages/home/TechnologyStack";
import DevelopmentServices from "../../component/pages/home/DevelopmentServices";
import DevelopmentProcess from "../../component/pages/home/ DevelopmentProcess";
import Webexperiences from "../../component/pages/home/WebExperiences";
import WebDesignApproach from "../../component/pages/home/WebDesignApproach";
import OurJourney from "../../component/pages/home/OurJourney";
import FaqSection from "../../component/pages/home/FaqSection";
import CtaSection from "../../component/pages/home/CtaSection";
import CommonProtfolio from "../../component/pages/common/CommonProtfolio";

import CommonIndustries from "../../component/pages/common/CommonIndustries";
import LocationService from "../../component/pages/common/LocationService";

import styles from "@/app/(frontend)/assets/style/calculator/CostCalculator.module.css";
const page = () => {
  return (
    <div>
      <Banner
        text1={"Are you searching for"}
        text2={"Well Experienced <br/>Web Development Company In UAE?"}
        text3={
          " We are Website Development Agency, the best website developers located in Dubai, UAE. Let’s create your website beyond the ordinary."
        }
      />
      <Trusted />
      {/* <CommonGame/> */}
      <BestAgency />
      <WhatSetsUs />
      <OurCoreStrengths />
      <CommonProtfolio />
      <TechnologyStack />
      <DevelopmentServices />
      <DevelopmentProcess />
     <div className="frame-1200 py-100 sm-pt-0 sm-pb-50 sm-px-20">
        <div className="text-center sm-text-start mb-50 sm-mb-20">
          <h2 className="mb-20">Website Design Dubai- Cost Breakdown</h2>
          <p>
            Avail the best website design and Development package
            based on the <br></br>features, performance, and growth level you
            need.
          </p>
        </div>

        <div className={styles.chart}>
          <div className={styles.grid}>
            <h3>Web Design Solution</h3>
            <h3>Benefits</h3>
            <h3>Price Range Estimate</h3>
          </div>
          <div className={styles.grid}>
            <p>Basic</p>
            <p>Affordable, creative</p>
            <p className={styles.price}>AED 3,000- 5,000</p>
          </div>
          <div className={styles.grid}>
            <p>Standard</p>
            <p>Feature-rich, creative</p>
            <p className={styles.price}>AED 5,000- 8,000</p>
          </div>
          <div className={styles.grid}>
            <p>Advanced</p>
            <p>Well-structured, growth-ready</p>
            <p className={styles.price}>AED 8,000- 12,000</p>
          </div>
          <div className={styles.grid}>
            <p>Premium</p>
            <p>Premium, custom-built</p>
            <p className={styles.price}>AED 12,000+</p>
          </div>
        </div>
      </div>
      {/* <Portfolio/> */}

      <Webexperiences />
      <WebDesignApproach />
      <CommonIndustries />
      <LocationService activeLocation="dubai" />
      <OurJourney />
      <FaqSection />
      <CtaSection />
  
    </div>
  );
};

export default page;

// export const metadata = {
//   title: "Premier Web Design & Development Agency in Dubai | WD Agency",
//   description: "Transform your online presence with our top-rated web design and development services in Dubai. With 12+ years of experience, 50+ expert developers, and over 750 successful projects, we deliver scalable, responsive, and SEO-friendly websites that drive business growth. Get a custom quote today!",
// };
