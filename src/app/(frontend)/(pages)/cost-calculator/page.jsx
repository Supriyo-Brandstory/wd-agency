import React from "react";
import CostCalculator from "../../component/pages/calculator/CostCalculator";
import CommonCtaSection from "../../component/pages/common/CommonCtaSection";
import ContactImage from "@/app/(frontend)/assets/images/about/contact.png";
import bannerImage from "@/app/(frontend)/assets/images/wireframing-prototyping/wireframing-banner.webp";
import CommonBanner2 from "../../component/pages/common/CommonBanner2";
import CommonIntroduction from "../../component/pages/common/CommonIntroduction";

import imageintro1 from "@/app/(frontend)/assets/images/php-website-dev/php-website-dev-1.webp";
import imageintro2 from "@/app/(frontend)/assets/images/php-website-dev/php-website-dev-2.webp";
import uiux from "@/app/(frontend)/assets/images/uiux.webp";
import webdev from "@/app/(frontend)/assets/images/webdev.webp";
import frontend from "@/app/(frontend)/assets/images/frontend.webp";
import fullstack from "@/app/(frontend)/assets/images/fullstack.webp";
import CommonIndustries from "../../component/pages/common/CommonIndustries";
import styles from "@/app/(frontend)/assets/style/calculator/CostCalculator.module.css";
import CommonFaqSection from "../../component/pages/common/CommonFaqSection";

const Page = () => {
  const faqData = [
    {
      q: "How much does website development cost in Dubai?",
      a: `<p>Your cost calculator provides tailored price ranges based on selected features. According to the tool:</p>
          <ul class="ml-50 my-20">
            <li>Web Design Solutions start from around AED 3,000 to AED 5,000 for basic websites.</li>
            <li>Standard Feature-Rich Websites typically range from AED 5,000 to AED 8,000.</li>
            <li>Advanced Growth-Ready Websites are around AED 8,000 to AED 12,000.</li>
            <li>Premium Custom Sites can go above AED 12,000+ depending on complexity.</li>
          </ul>
          <p>These ranges help you budget before you request a detailed quote.</p>`,
    },
    {
      q: "What factors contribute most to the total website development cost?",
      a: `<p>Several key elements affect your total estimate:</p>
          <ul class="ml-50 my-20">
            <li><strong>Number of Pages:</strong> More pages take more design and dev work.</li>
            <li><strong>Design Complexity:</strong> Custom visuals and advanced UI/UX add cost.</li>
            <li><strong>Responsive Design:</strong> Ensuring your site adapts on mobile increases value and cost.</li>
            <li><strong>E-Commerce & Database Integration:</strong> Adding online store functionality or database features raise website development pricing.</li>
            <li><strong>SEO & Content:</strong> Optimized structure and copywriting impact overall investment.</li>
          </ul>
          <p>Your cost calculator lets you toggle these options to see how prices change.</p>`,
    },
    {
      q: "How much will an eCommerce website cost compared to a basic website?",
      a: `<p>Market estimates in Dubai generally show:</p>
          <ul class="ml-50 my-20">
            <li><strong>Basic Business Websites:</strong> AED 3,000 to AED 8,000+ with standard pages and layout.</li>
            <li><strong>Ecommerce Sites:</strong> Often start from AED 10,000 to AED 40,000+ depending on product count, payment gateways, and inventory features.</li>
          </ul>
          <p>Your cost calculator can include eCommerce options to reflect these additional costs.</p>`,
    },
    {
      q: "Does custom design and branding increase cost?",
      a: `<p>Yes, custom UI/UX and branding are premium services. A simple template layout costs less, but a custom design tailored to your brand and audience usually:</p>
          <ul class="ml-50 my-20">
            <li>Raises cost into the higher tiers (AED 8,000 to AED 12,000+)</li>
            <li>Can add extra time for visual creation, prototyping, and revisions.</li>
          </ul>
          <p>This is reflected when you choose richer design options in the calculator.</p>`,
    },
    {
      q: "How much does content creation and SEO add to the cost?",
      a: `<p>Content and SEO ensure your site ranks and converts. In Dubai market pricing:</p>
          <ul class="ml-50 my-20">
            <li><strong>SEO-ready structure and on-page optimization:</strong> AED 2,000 to AED 10,000+ depending on pages.</li>
            <li><strong>Professional copywriting:</strong> Charged per page and varies with volume and quality needed.</li>
          </ul>
          <p>Your calculator lets you include these to preview their impact on overall pricing.</p>`,
    },
    {
      q: "Does responsive/mobile design affect pricing?",
      a: `<p>Absolutely. Mobile responsiveness ensures your site adapts to all devices. Including responsive design:</p>
          <ul class="ml-50 my-20">
            <li>May increase project cost compared to desktop-only builds.</li>
            <li>It is essential for SEO, user experience, and engagement.</li>
          </ul>
          <p>Your calculator reflects this when you toggle responsive design features.</p>`,
    },
    {
      q: "Are there separate costs for ongoing maintenance after development?",
      a: `<p>Yes, ongoing support is usually a separate investment:</p>
          <ul class="ml-50 my-20">
            <li><strong>Hosting:</strong> AED 500 to AED 3,000+ per year.</li>
            <li><strong>Maintenance & Security Updates:</strong> AED 3,500 to AED 8,500+ per year, depending on service level.</li>
          </ul>
          <p>These are not included in the initial build estimate but are critical for long-term performance.</p>`,
    },
    {
      q: "Why do website development costs vary so much between businesses?",
      a: `<p>Pricing varies due to:</p>
          <ul class="ml-50 my-20">
            <li>Type of website (basic brochure vs. eCommerce vs. custom web app).</li>
            <li>Agency vs. Freelancer rates</li>
            <li>Feature requirements (e.g., payment gateways, CRM integration)</li>
            <li>Design quality & SEO requirements</li>
          </ul>
          <p>The cost calculator helps you see how different selections affect your final estimate.</p>`,
    },
    {
      q: "Can I get an exact quote after using the calculator?",
      a: `<p>The calculator provides an estimated range based on standard project configurations. Final pricing is determined after a detailed discussion with our team, where custom requirements, integrations, and specific business goals are fully scoped.</p>`,
    },
    {
      q: "Is it worth investing more in a website for better results?",
      a: `<p>A high-quality website is a long-term asset. Strategic investment often yields:</p>
          <ul class="ml-50 my-20" >
            <li>Better user experience & brand trust</li>
            <li>Stronger SEO results</li>
            <li>Higher conversion & engagement</li>
          </ul>
          <p>Affordable options exist, but strategic investment in performance, design, and SEO typically drives long-term ROI.</p>`,
    },
  ];

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
          <h2 className="mb-20">Types of Website and Related Cost Breakdown</h2>
          <p>
            Select the right website package based on the features, performance,
            and growth level you need.
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
            alt: "UI/UX and Prototyping Services",
            btnname: "Learn More",
            link: "/services/wireframing-prototyping",
          },
          {
            title: "Dynamic Web Development",
            desc: "Custom web applications built with modern technologies to deliver exceptional user experiences.",
            img: webdev,
            alt: "Dynamic Web Development Services",
            btnname: "Learn More",
            link: "/services/dynamic-website-development",
          },
          {
            title: "Frontend Development",
            desc: "Modern, responsive user interfaces built with cutting-edge frontend technologies.",
            img: frontend,
            alt: "Frontend Development Services",
            btnname: "Learn More",
            link: "/services/frontend-development",
          },
          {
            title: "Full Stack Development",
            desc: "End-to-end web solutions covering both frontend and backend development needs.",
            img: fullstack,
            alt: "Full Stack Development Services",
            btnname: "Learn More",
            link: "/services/full-stack-development",
          },
        ]}
      />
      <CommonFaqSection faqs={faqData} />
      <CommonCtaSection
        imageUrl={ContactImage}
        title="Need a Custom Solution?"
        subtitle="Our experts are ready to help you build a high-performing website tailored to your business goals. Let's discuss your vision."
      />
    </div>
  );
};

export default Page;
