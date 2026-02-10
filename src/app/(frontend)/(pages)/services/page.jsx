import React from "react";
import CommonBanner2 from "../../component/pages/common/CommonBanner2";
import bannerBg from "@/app/(frontend)/assets/images/web-solution-banner.webp";
import CommonInduestriesServices from "../../component/pages/common/CommonInduestriesServices";
import CommonCtaSection from "../../component/pages/common/CommonCtaSection";
import ServiceListing from "../../component/pages/services/ServiceListing";

export const metadata = {
  title:
    "Premium Website Development Services in Dubai | Website Development Agency",
  description:
    "Explore our wide range of web development services in Dubai, including UI/UX design, custom web applications, eCommerce solutions, and software maintenance.",
};

const Page = () => {
  return (
    <>
      <CommonBanner2
        bg={bannerBg}
        alt={"Our Premium Web Development Services"}
        heding={"Our Premium Web Development Services"}
        subtitle={
          "Strategic digital solutions tailored to elevate your business and drive measurable growth <br>through cutting-edge technology and innovative design."
        }
      />

      <ServiceListing />

      <CommonInduestriesServices
        heding={"Specialized Solutions for Every Industry"}
        subheding="We provide comprehensive digital solutions designed to help businesses across various sectors build trust and grow in the UAE."
      />

      <CommonCtaSection
        title="Ready to Elevate Your Digital Presence?"
        subtitle="Let's build something extraordinary together. Our team of experts is ready to transform your ideas into high-performing digital realities."
      />
    </>
  );
};

export default Page;
