import React from "react";
import CommonBanner from "../../component/pages/common/CommonBanner";
import CostCalculator from "../../component/pages/calculator/CostCalculator";
import CommonCtaSection from "../../component/pages/common/CommonCtaSection";
import ContactImage from "@/app/(frontend)/assets/images/about/contact.png";
import bannerImage from "@/app/(frontend)/assets/images/wireframing-prototyping/wireframing-banner.webp";
import CommonBanner2 from "../../component/pages/common/CommonBanner2";
import CommonIntroduction from "../../component/pages/common/CommonIntroduction";

import imageintro1 from "@/app/(frontend)/assets/images/php-website-dev/php-website-dev-1.webp";
import imageintro2 from "@/app/(frontend)/assets/images/php-website-dev/php-website-dev-2.webp";
import imageService1 from "@/app/(frontend)/assets/images/php-website-dev/custom-php.webp";
import imageService2 from "@/app/(frontend)/assets/images/php-website-dev/e-commerce.webp";
import imageService3 from "@/app/(frontend)/assets/images/php-website-dev/php-cms.webp";
import imageService4 from "@/app/(frontend)/assets/images/php-website-dev/pwa.webp";
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
        heding={"PHP Website Development Services"}
        text1={` <p>At WD Agency, we are a reputable PHP web development agency in Dubai and the UAE. We enable businesses to build digital solutions that are fast, flexible, and future-ready. With 10+  years of experience and a team of skilled developers, we are proficient in designing websites and web applications based on PHP that are robust and specifically tailored to meet the specific requirements of our clients.</p>
                    <p>We have extensive expertise in major PHP-based platforms- Laravel, CodeIgniter, and Symfony. This enables us to create dynamic, feature-rich websites and web apps to help your business grow and thrive. Our PHP website solutions are designed to impress not only with their functionality but also with their ability to give you long-term value, whether you require a website or a custom web application.</p>
                    `}
        text2={`  <p>We are the ones whom leading brands in the UAE and ambitious startups trust. And we have helped them achieve success that can be measured in a very straightforward manner by means of digital transformation that is both easy and smooth. We deliver it by focusing on thorough coding, creating an intuitive UI/UX design, and providing a strong back-end functionality for websites that are not only visually appealing but are also flawless in their execution.</p>
                <p>We make sure that our PHP project are responsive, SEO-friendly, and user engagement-optimized, thus guaranteeing that visibility and conversions are at their highest levels. Being committed to quality, scalability, and innovation is what makes us one of the most dependable PHP web development partners in the UAE.</p>
                    `}
        imageintro1={imageintro1}
        imageintro2={imageintro2}
      />
      <CommonIndustries
        heding={
          "Comprehensive PHP Development Solutions Tailored for UAE Businesses"
        }
        subheding="At WD Agency (Website Development Agency), we provide fully integrated PHP web development solutions that are specifically tailored to the needs of businesses in the UAE. Our expert PHP developers create PHP projects that are highly efficient, secure, and scalable."
        services={[
          {
            title: "Custom PHP Web Development",
            desc: "We design full-feature custom websites that are in perfect harmony with both your brand’s vision and company goals. Be it a corporate website or a massive enterprise portal, our programming always results in a perfect combination of design and functionality.",
            img: imageService1,
            btnname: "Contact Us",
            link: "/contact-us",
          },
          {
            title: "E-commerce PHP Development",
            desc: `We build secure and feature-rich PHP-based e-commerce platforms. We make it possible for you to integrate seamless payment methods, accurate inventory management, and attractive yet simple designs, thus making the customer experience smooth and enjoyable.`,
            img: imageService2,
            btnname: "Contact Us",
            link: "/contact-us",
          },
          {
            title: "PHP CMS Development",
            desc: "With Single Page Applications (SPAs) built using modern libraries like React, Vue, and Angular, we design websites with fast loading speed, seamless navigation, and provide users with an app-like browsing experience.",
            img: imageService3,
            btnname: "Contact Us",
            link: "/contact-us",
          },
          {
            title: "Progressive Web Apps (PWAs)",
            desc: "With PHP-based CMS platforms such as WordPress, Drupal, or even a tailor-made CMS solution, content management becomes a walk in the park since you have full freedom over the usage of the website’s text and media.",
            img: imageService4,
            btnname: "Contact Us",
            link: "/contact-us",
          },
        ]}
      />
      <div className="frame-1200 py-100 sm-pt-0 sm-pb-50 sm-px-20">
        <div className="text-center sm-text-start mb-50 sm-mb-20">
          <h2 className="mb-20">
            Who Can Build My Site and How Much Will it Cost?
          </h2>
          <p>
            Check out the graph below to learn how to calculate website cost or
            visit our calculator to get a free, custom quote!
          </p>
        </div>

        <div className={styles.chart}>
          <div className={styles.grid}>
            <h3>Web Design Solution</h3>
            <h3>Benefits</h3>
            <h3>Price Range Estimate</h3>
          </div>
          <div className={styles.grid}>
            <p>Freelance designer</p>
            <p>Affordable, creative</p>
            <p className={styles.price}>$8 - $85 / hour</p>
          </div>
          <div className={styles.grid}>
            <p>Freelance designer</p>
            <p>Affordable, creative</p>
            <p className={styles.price}>$8 - $85 / hour</p>
          </div>
          <div className={styles.grid}>
            <p>Freelance designer</p>
            <p>Affordable, creative</p>
            <p className={styles.price}>$8 - $85 / hour</p>
          </div>
          <div className={styles.grid}>
            <p>Freelance designer</p>
            <p>Affordable, creative</p>
            <p className={styles.price}>$8 - $85 / hour</p>
          </div>
        </div>
      </div>
      <CommonCtaSection
        imageUrl={ContactImage}
        title="Need a Custom Solution?"
        subtitle="Our experts are ready to help you build a high-performing website tailored to your business goals. Let's discuss your vision."
      />
    </div>
  );
};

export default Page;
