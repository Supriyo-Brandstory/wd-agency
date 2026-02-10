import React from "react";
import CommonBanner2 from "../../component/pages/common/CommonBanner2";
import bannerBg from "@/app/(frontend)/assets/images/web-solution-banner-2.webp";
import TechListing from "../../component/pages/technologies/TechListing";
import CommonCtaSection from "../../component/pages/common/CommonCtaSection";
import IndustryGrid from "../../component/pages/common/IndustryGrid";

export const metadata = {
  title: "Cutting-Edge Technology Stack | Website Development Agency Dubai",
  description:
    "Explore our comprehensive technology stack, including React, Node.js, Laravel, WordPress, Shopify, and more. We use the latest tools to build high-performance web solutions.",
};

const Page = () => {
  return (
    <>
      <CommonBanner2
        bg={bannerBg}
        alt={"Our Modern Technology Stack"}
        heding={"Our Modern Technology Stack"}
        subtitle={
          "We leverage the most advanced and reliable technologies to build scalable, <br>secure, and high-performing digital experiences for businesses in Dubai."
        }
      />

      <TechListing />

      <IndustryGrid />

      <CommonCtaSection
        title="Looking for a Specific Technology Solution?"
        subtitle="Our team of developers is proficient in a wide range of modern technologies. Let's discuss your project and choose the right stack for your success."
      />
    </>
  );
};

export default Page;
