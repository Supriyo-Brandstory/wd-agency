import React from "react";
import Banner from "../../component/pages/home/Banner";
import Trusted from "../../component/pages/home/Trusted";
import BestAgency from "../../component/pages/home/BestAgency";
import WhatSetsUs from "../../component/pages/home/WhatSetsUs";
import OurCoreStrengths from "../../component/pages/home/OurCoreStrengths";
import TechnologyStack from "../../component/pages/home/TechnologyStack";
import DevelopmentServices from "../../component/pages/home/DevelopmentServices";

import Webexperiences from "../../component/pages/home/WebExperiences";
import WebDesignApproach from "../../component/pages/home/WebDesignApproach";
import OurJourney from "../../component/pages/home/OurJourney";
import FaqSection from "../../component/pages/home/FaqSection";
import CtaSection from "../../component/pages/home/CtaSection";
import CommonProtfolio from "../../component/pages/common/CommonProtfolio";
import DemoTemplate from "../../component/pages/home/DemoTemplate";
import LocationService from "../../component/pages/common/LocationService";

import CommonCostBreakdown from "../../component/pages/common/CommonCostBreakdown";
import CommonBlogSlider from "../../component/pages/common/CommonBlogSlider";
import CommonAboutPage2 from "../../component/pages/common/CommonAboutPage2";
import OurStoryImage from "@/app/(frontend)/assets/images/about/wdagency.webp";
import Stats from "../../component/pages/about/Stats";
import IndustryGrid from "../../component/pages/common/IndustryGrid";
import CommonFinancialImpact from "../../component/pages/common/CommonFinancialImpact";
import CommonServices from "../../component/pages/common/CommonServices";
import DevelopmentProcess from "@/app/(frontend)/assets/images/abu-dhabi/DevelopmentProcess.webp";
import SpecializedWebServices from "../../component/pages/common/SpecializedWebServices";
import AgencyTextContent from "../../component/pages/common/AgencyTextContent";
import PremierAgency from "../../component/pages/common/PremierAgency";
import ClientSection from "../../component/pages/common/ClientSection";

const page = () => {
  return (
    <div>
      <Banner
        text1={"Where Creativity Meets Conversion"}
        text2={"Top-Rated Web Design Agency in Dubai, UAE"}
        text3={
          "Partner with UAE's trusted web design agency for websites that work as hard as you do. We deliver strategic designs built to engage and convert, fast, secure, and scalable technology, and real growth. Join 500+ UAE brands that trust us with their digital success."
        }
      />
      <ClientSection />
      <SpecializedWebServices />

      <CommonProtfolio />
      <PremierAgency />

      <CommonFinancialImpact
        heading={"Web Design Innovation Driving Growth in Dubai"}
        subheading={
          "Investing in high-performance web design is a strategic move to elevate your brand’s digital presence and operational efficiency. As a leader in the Dubai web design market, we balance creative excellence with technical precision to ensure your website isn't just a placeholder, but a powerful business asset."
        }
        costFactors={{
          title: "Core Pillars of Our Strategy",
          description:
            "Several critical elements define our approach to building high-converting websites, ensuring your digital platform is robust, secure, and future-proof.",
          factors: [
            "Leveraging the latest technologies to ensure optimal performance, security, and effortless scalability.",
            "Crafting visually striking interfaces that prioritize exceptional user experiences (UX) and brand authenticity.",
            "Applying industry best practices and emerging trends to keep your business ahead of the market curve.",
            "Direct collaboration with senior designers to align every pixel with your specific business objectives.",
          ],
        }}
        roiData={{
          title: "Impact on Your Digital Presence",
          description:
            "A well-designed website acts as a primary driver for business success by converting visitors into loyal customers and streamlining your brand's narrative.",
          metrics: [
            {
              label: "Brand Elevation",
              value: "Positioning your brand as an industry leader",
            },
            {
              label: "Audience Resonance",
              value: "Digital experiences that represent your values",
            },
            {
              label: "Operational Success",
              value: "Solving complex challenges with tech-savvy solutions",
            },
            {
              label: "Long-Term Growth",
              value: "Building sustainable digital foundations for businesses",
            },
          ],
        }}
      />
      <CommonAboutPage2
        text1="We're Dubai's Trusted Web Design Partner"
        text2={`
                            <p class="mb-20">
                            Website Development Agency is more than just another web design agency in Dubai. We deliver what we promise- high-performance websites that convert visitors into customers and drive sustainable business growth. Our Competitive Advantages:
                            </p>
                            <ul class="ml-40">
                            <li><b>Award-Winning Results-</b> Recognized expertise backed by proven client success stories</li>
                            <li><b>Dubai-Based Team-</b> Local market knowledge combined with international design standards.</li>
                            <li><b>Efficient Execution-</b> Streamlined processes that ensure on-time, on-budget project delivery</li>
                            <li><b>Collaborative Partnership-</b> You're involved every step, with transparent communication and regular milestone reviews</li>
                            <li><b>Full-Service Solution-</b> UI UX design, web design, development, SEO, content, and maintenance- everything you need, one trusted partner.</li>
                            </ul>
                            <p>
                            <b>The Difference is Clear:</b> While other agencies over-promise and under-deliver, we've built our reputation on consistent excellence and measurable results. When you choose Website Development Agency, you're choosing a partner committed to your long-term success.
                            </p>
                    `}
        img={OurStoryImage}
      />
      <Stats />

      

      <IndustryGrid />

      <CommonServices
        theding={"Web Design Consulting Agency in Dubai, UAE"}
        tdesc={` <p>Success in the UAE's competitive digital landscape demands more than just a beautiful website- it requires strategic insight, local market expertise, and a partner who understands your business goals.</p>
                  
                `}
        bheding={"Accelerating Digital Growth:"}
        bdesc={`<ul class='ml-50'>
   <li>Deliver end-to-end web design services that transform your website into a revenue-generating digital asset</li>
  <li>Analyze your current digital presence to identify growth gaps and performance opportunities</li>
  <li>Develop UAE-focused, data-driven strategies aligned with your business objectives</li>
  <li>Work collaboratively with your team to audit platforms and optimize user journeys</li>
  <li>Provide actionable expertise across architecture, UX, and conversion optimization to drive measurable results</li>
</ul>
            <p class='mt-20'>Ready to unlock your website's full potential? Let's start with a strategic consultation.</p>
            `}
        bbg={DevelopmentProcess}
      />

      <DevelopmentServices />

      <TechnologyStack />

      <CommonCostBreakdown
        heading="Website Design Dubai- Cost Breakdown"
        description="Avail the best website design and Development package based on the features, performance, and growth level you need."
      />
      <DemoTemplate activetaburl={""} />

      <WebDesignApproach />
      <AgencyTextContent />

      <LocationService activeLocation="dubai" />

      <CommonBlogSlider />

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
