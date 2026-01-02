import React from "react";
import CostCalculator from "../../component/pages/calculator/CostCalculator";
import CommonCtaSection from "../../component/pages/common/CommonCtaSection";
import ContactImage from "@/app/(frontend)/assets/images/about/contact.png";
import bannerImage from "@/app/(frontend)/assets/images/wireframing-prototyping/wireframing-banner.webp";
import CommonBanner2 from "../../component/pages/common/CommonBanner2";
import CommonIntroduction from "../../component/pages/common/CommonIntroduction";

import imageintro1 from "@/app/(frontend)/assets/images/php-website-dev/php-website-dev-1.webp";
import imageintro2 from "@/app/(frontend)/assets/images/php-website-dev/php-website-dev-2.webp";
import uiux from '@/app/(frontend)/assets/images/uiux.webp'
import webdev from '@/app/(frontend)/assets/images/webdev.webp'
import frontend from '@/app/(frontend)/assets/images/frontend.webp'
import fullstack from '@/app/(frontend)/assets/images/fullstack.webp'
import CommonIndustries from "../../component/pages/common/CommonIndustries";
import styles from "@/app/(frontend)/assets/style/calculator/CostCalculator.module.css";
const Page = () => {
  return (
    <div>
      <CommonBanner2
        bg={bannerImage}
        heding="Website Development Cost Calculator"
        subtitle="Get a transparent and instant estimate for your next digital project in AED."
      />

      <CostCalculator />

      <CommonIntroduction
        heding={"Calculate Website Development Costs"}
        text1={` <p>Wondering what it really takes to build a website that fits your business goals and budget? Our interactive website cost calculator 
          helps you understand pricing before you commit. By selecting your project needs, such as page count, visual design level, SEO readiness, eCommerce 
          features, and custom functionality you receive a tailored cost estimate that reflects your exact requirements. No guesswork, just clarity before 
          you start. The cost breakdown basics are:</p>
          <p><b>Number of Pages:</b> This determines how many individual sections or pages your website will include. More pages typically require additional 
          planning, design, development, and content structuring, which directly influences the overall project cost.</p>
                    `}
        text2={`  <p><b>Design Complexity:</b> This refers to the visual depth and creativity involved in your website’s design. From simple layouts to custom visuals, animations, and branding elements, higher design complexity requires more time and resources.</p>
                <p><b>Responsive Layout:</b> A responsive layout ensures your website adapts smoothly to desktops, mobiles, and tablets. As mobile usage continues to grow, this functionality is essential for usability, accessibility, and overall user experience.</p>
                <p><b>Database Connectivity:</b> This feature allows your website to store, retrieve, and sync data dynamically. Depending on your needs, integration can range from simple data handling to advanced system connections, affecting development complexity.</p>
                    `}
        imageintro1={imageintro1}
        imageintro2={imageintro2}
      />
      
      
      <div className="frame-1200 py-100 sm-pt-0 sm-pb-50 sm-px-20">
        <div className="text-center sm-text-start mb-50 sm-mb-20">
          <h2 className="mb-20">
            Types of Website and Related Cost Breakdown
          </h2>
          <p>
            Select the right website package based on the features, performance, and growth level you need.
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

      <CommonIndustries
        heding="Common Web Design & Development Services Include"
        services={[
          {
            title: "UI/UX & Prototyping",
            desc: "User-centered design approaches that create intuitive and engaging digital experiences.",
            img: uiux,
            alt:"UI/UX and Prototyping Services",
            btnname: "Learn More",
            link: "/services/wireframing-prototyping"
          },
          {
            title: "Dynamic Web Development",
            desc: "Custom web applications built with modern technologies to deliver exceptional user experiences.",
            img: webdev,
            alt:"Dynamic Web Development Services",
            btnname: "Learn More",
            link: "/services/dynamic-website-development"
          },
          {
            title: "Frontend Development",
            desc: "Modern, responsive user interfaces built with cutting-edge frontend technologies.",
            img: frontend,
            alt:"Frontend Development Services",
            btnname: "Learn More",
            link: "/services/frontend-development"
          },
          {
            title: "Full Stack Development",
            desc: "End-to-end web solutions covering both frontend and backend development needs.",
            img: fullstack,
            alt:"Full Stack Development Services",
            btnname: "Learn More",
            link: "/services/full-stack-development"
          }
        ]}
      />
      <CommonCtaSection
        imageUrl={ContactImage}
        title="Need a Custom Solution?"
        subtitle="Our experts are ready to help you build a high-performing website tailored to your business goals. Let's discuss your vision."
      />
    </div>
  );
};

export default Page;
