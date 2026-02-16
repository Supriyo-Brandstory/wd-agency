import React from "react";
import Banner from "../../component/pages/home/Banner";
import TechnologyStack from "../../component/pages/home/TechnologyStack";
import DevelopmentServices from "../../component/pages/home/DevelopmentServices";

import WebDesignApproach from "../../component/pages/home/WebDesignApproach";
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
        text2={"Web Development Agency in Dubai"}
        text3={
          "Website Development Agency builds high-performance, cutting-edge websites for businesses across Dubai and the UAE. Trusted by 300+ leading brands such as Nestlé, Mercedes-Benz, Wipro, and The Electronics Group, we create precision-engineered digital platforms with compelling visual aesthetics."
        }
      />
      <ClientSection />
      <SpecializedWebServices />

      <CommonProtfolio />
      <PremierAgency />

      <CommonFinancialImpact
        heading={"Where Web Development Becomes a Growth Strategy"}
        subheading={
          "Picture this: Developers who live for code teaming up with designers obsessed over pixels- all laser-focused on one mission. That's Website Development Agency. We're not your average web agency. We're a tight-knit collective of strategists, developers, and creatives deeply invested in transforming your digital presence into your most powerful business tool."
        }
        costFactors={{
          title: "Core Pillars of Our Strategy",
          description:
            "Whether your goal is to increase sales, expand internationally, or build brand awareness, Website Development Agency is here to lead the way.",
          factors: [
            "We start by truly understanding your business: goals, audience, strengths, and challenges. Real conversation about your vision.",
            "We create a clear plan together: timelines, milestones, and priorities. No surprises, just a shared, exciting path forward.",
            "Our developers & designers collaborate closely to build your site. We take feedback at every step to matching your vision.",
            "We rigorously test every element, buttons, pages, & flawless interactions. When we launch, your site is ready to perform.",
          ],
        }}
        roiData={{
          title: "Impact on Your Digital Presence",
          description:
            "With WD Agency, your website becomes more than a digital presence- it's a conversion machine that captures attention, builds trust, and turns browsers into buyers.",
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
        text1="Your Full-Stack Website Development <br>Partner in Dubai, UAE"
        text2={`
                            <p class="mb-20">
                            At Website Development Agency, we don't follow the playbook of average Dubai web agencies. From ground-up custom builds to full-scale redesigns, cutting-edge e-commerce platforms to enterprise web applications- we bring technical expertise and strategic thinking to every project, guiding you from concept to launch and beyond.
                            </p>
                            <ul class="ml-40">
                            <li><b>12+ Years of Expertise</b></li>
                            <li><b>500+ Businesses Served</b></li>
                            <li><b>750+ Websites Launched</b></li>
                            <li><b>200+ Active Partnerships</b></li>
                            </ul>
                            <p>
                            When performance matters and mediocrity isn't an option, businesses across Dubai and the UAE turn to us. We've built our reputation on delivering high-impact websites that drive measurable growth- from conversion-optimized platforms for emerging brands to enterprise-grade solutions for global corporations.
                            </p>
                    `}
        img={OurStoryImage}
      />
      <Stats />

      

      <IndustryGrid />

      <CommonServices
        theding={"Our Methodology: Psychology, Strategy, & Performance"}
        tdesc={` <p>Behind every great website is a clear, proven process. Our web design framework blends psychology, design thinking, and strategy into a proven system that consistently delivers results.</p>
                  
                `}
        bheding={"Accelerating Digital Growth:"}
        bdesc={`<ul class='ml-50'>
   <li><strong>Industry-Leading Portfolio:</strong> Trusted by global brands like Nestlé, Mercedes-Benz, and Wipro alongside innovative UAE startups- proof our approach works at every scale.</li>
  <li><strong>Technology That Performs:</strong> Fast-loading, secure, scalable platforms built with cutting-edge AI tools and best practices that keep you competitive as markets evolve.</li>
  <li><strong>Your Success, Our Mission:</strong> We measure our success by yours. Every website we build is designed to achieve your specific business goals, not just check boxes.</li>
  <li><strong>End-to-End Excellence:</strong> Strategy, design, development, testing, launch, support, everything you need under one roof, delivered by experts who care about results.</li>
</ul>
            <p class='mt-20'>Ready to unlock your website's full potential? <a href="https://websitedevelopmentagency.ae/contact-us" target="_blank" rel="noopener"><strong>Let's Get Started</strong></a>.</p>
            `}
        bbg={DevelopmentProcess}
      />

      <DevelopmentServices />

      <TechnologyStack />

      <CommonCostBreakdown
        heading="Website Design Dubai- Cost Breakdown"
        description="Serving businesses across the United Arab Emirates with the same commitment: high-performance websites that drive measurable results. Local presence, world-class execution."
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
