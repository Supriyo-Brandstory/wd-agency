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



  return (
    <div>
      <CommonBanner2
        bg={bannerImage}
        heding="Website Development Cost Calculator"
        subtitle="Get a transparent and instant estimate for your next digital project in AED."
      />
      
      <CostCalculator />
      
      
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
