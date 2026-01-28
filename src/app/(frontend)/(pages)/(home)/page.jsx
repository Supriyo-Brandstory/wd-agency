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
import DemoTemplate from "../../component/pages/home/DemoTemplate";
import LocationService from "../../component/pages/common/LocationService";

import CommonCostBreakdown from "../../component/pages/common/CommonCostBreakdown";
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
      <DemoTemplate activetaburl={""} />
      <DevelopmentProcess />
      <CommonCostBreakdown
        heading="Website Design Dubai- Cost Breakdown"
        description="Avail the best website design and Development package based on the features, performance, and growth level you need."
      />
      {/* <Portfolio/> */}

      <Webexperiences />
      <WebDesignApproach />
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
