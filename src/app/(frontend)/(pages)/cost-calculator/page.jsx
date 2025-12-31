import React from 'react';
import CommonBanner from '../../component/pages/common/CommonBanner';
import CostCalculator from '../../component/pages/calculator/CostCalculator';
import CommonCtaSection from '../../component/pages/common/CommonCtaSection';
import ContactImage from "@/app/(frontend)/assets/images/about/contact.png";
import bannerImage from '@/app/(frontend)/assets/images/wireframing-prototyping/wireframing-banner.webp'
import CommonBanner2 from '../../component/pages/common/CommonBanner2';
import Webexperiences from '../../component/pages/home/WebExperiences';
import WebDesignApproach from '../../component/pages/home/WebDesignApproach';

import introImg1 from '@/app/(frontend)/assets/images/about/mission.jpg';
import introImg2 from '@/app/(frontend)/assets/images/about/our-story.jpg';
import whyMetterImg from '@/app/(frontend)/assets/images/about/about-banner.webp';


const Page = () => {

  const webExperiencesContent = {
    topSection: {
      title: "Accurate & Transparent Website Pricing",
      descriptions: [
        "In the digital age, budgeting for a new website shouldn't be a guessing game. Our cost calculator is designed to give you a clear, itemized estimate based on your specific needs, whether it's a simple corporate site or a full-fledged e-commerce platform.",
        "We believe in complete transparency. No hidden fees, no surprise charges—just honest pricing that reflects the quality and effort we invest in your project. Our team analyzes every detail, from design complexity to functional requirements, ensuring you get the most value for your investment.",
        "Use our interactive tool to explore different packages and features. By understanding the cost drivers, you can make informed decisions that align with your business goals and budget constraints."
      ],
      image: introImg1,
      alt: "Transparent Website Pricing Calculator"
    },
    middleSection1: {
      title: "What Drives Website Development Costs?",
      image: introImg2,
      alt: "Factors affecting website cost",
      points: [
        { title: "Design Complexity:", desc: "Custom graphics, animations, and unique layouts require more design hours than template-based sites." },
        { title: "Functionality & Features:", desc: "Advanced features like booking systems, e-commerce, and user portals increase development time." },
        { title: "Content Management:", desc: "A robust CMS (like WordPress or a custom solution) allows you to manage content easily but adds to the initial build." },
        { title: "SEO & Performance:", desc: "Optimizing for speed and search engines involves technical precision and ongoing adjustments." },
        { title: "Third-Party Integrations:", desc: "Connecting your site to CRMs, payment gateways, or other tools requires secure API development." }
      ]
    },
    middleSection2: {
      title: "Our Development Packages Include",
      image: whyMetterImg,
      alt: "Website Development Packages",
      points: [
        { title: "Strategic Planning:", desc: "We map out your site's architecture to ensure a seamless user journey." },
        { title: "Responsive Design:", desc: "Your site will look and function perfectly on all devices, from mobile phones to desktops." },
        { title: "Secure Coding:", desc: "We use the latest security best practices to protect your data and your users." },
        { title: "Scalable Architecture:", desc: "Built to grow with your business, allowing for easy updates and future expansions." },
        { title: "Post-Launch Support:", desc: "Our partnership doesn't end at launch; we offer ongoing maintenance to keep your site running smoothly." }
      ]
    },
    bottomSection: {
      title: "Ready to Start Building?",
      description: "Now that you have an estimate, it's time to bring your vision to life. Our expert team is ready to guide you through the next steps, refining your requirements and creating a project plan that delivers results.",
      image: bannerImage,
      alt: "Start your web project",
      btnText: "Schedule a Consultation",
      btnLink: "/contact-us"
    }
  };

  return (
    <div>
      <CommonBanner2
        bg={bannerImage}
        heding="Website Development Cost Calculator"
        subtitle="Get a transparent and instant estimate for your next digital project in AED."
      />
      
      <CostCalculator />
      
      <Webexperiences content={webExperiencesContent} />
      
      <CommonCtaSection 
        imageUrl={ContactImage}
        title="Need a Custom Solution?"
        subtitle="Our experts are ready to help you build a high-performing website tailored to your business goals. Let's discuss your vision."
      />
    </div>
  );
};

export default Page;

export const metadata = {
  title: "Website Development Cost Calculator | WD Agency",
  description: "Calculate your website development cost in Dubai with our interactive tool. Get estimates based on pages, design, SEO, and functionality. Transparent pricing for your digital project.",
};
