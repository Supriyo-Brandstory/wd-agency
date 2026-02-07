import React from "react";
import CommonBanner2 from "../../component/pages/common/CommonBanner2";
import imagebanner from "@/app/(frontend)/assets/images/cybersecurity-website-design/banner.webp";
import CommonIntroduction from "../../component/pages/common/CommonIntroduction";
import imageintro1 from "@/app/(frontend)/assets/images/cybersecurity-website-design/intro-1.webp";
import imageintro2 from "@/app/(frontend)/assets/images/cybersecurity-website-design/intro-2.webp";
import CommonWhyMetter from "../../component/pages/common/CommonWhyMetter";
import imagewhymetter from "@/app/(frontend)/assets/images/cybersecurity-website-design/why.webp";
import CommonInduestriesServices from "../../component/pages/common/CommonInduestriesServices";
import CommonWhyWebsiteDevelopment from "../../assets/style/common/CommonWhyWebsiteDevelopment";
import imagewhydevelopment from "@/app/(frontend)/assets/images/cybersecurity-website-design/why-choose.webp";
import CommonClientTestimonials from "../../component/pages/common/CommonClientTestimonials";
import imagetestimonial1 from "@/app/(frontend)/assets/images/testimonial/testimonial-1.webp";
import imagetestimonial2 from "@/app/(frontend)/assets/images/testimonial/testimonial-2.webp";
import imagetestimonial3 from "@/app/(frontend)/assets/images/testimonial/testimonial-3.webp";
import CommonFaqSection from "../../component/pages/common/CommonFaqSection";
import DevelopmentServices from "../../component/pages/home/DevelopmentServices";
import Team from "../../component/pages/about/Team";
import LocationService from "../../component/pages/common/LocationService";
import CommonCostBreakdown from "../../component/pages/common/CommonCostBreakdown";
import CommonProtfolio from "../../component/pages/common/CommonProtfolio";
import DemoTemplate from "../../component/pages/home/DemoTemplate";
import IndustryGrid from "../../component/pages/common/IndustryGrid";

const page = () => {
  return (
    <>
      <CommonBanner2
        bg={imagebanner}
        alt={"Yachting & Maritime Website Design Agency in Dubai, UAE"}
        heding={"Yachting Website Design Agency in Dubai, UAE"}
        subtitle={
          "We build elegant, high-impact websites for yacht charters, brokerage firms, and luxury maritime brands <br>that emphasize nautical excellence, elite service, and brand prestige in Dubai and the UAE."
        }
      />

      <CommonIntroduction
        heding={"Yachting Website Design & Development"}
        text1={` <p>In the luxury maritime sector, your website is your flagship digital vessel. For yachting firms in Dubai, a digital presence must offer more than just specs—it must provide an experience that reflects the prestige and freedom of the open sea. A professional yachting website is essential for building brand desire and securing high-value charters or sales in the competitive UAE market.</p>
                 <p>Potential clients look for brands that demonstrate nautical mastery, uncompromising service, and professional scale. A well-engineered website helps you bridge the gap between luxury vessels and the unforgettable experiences your clients are searching for, positioning your brand as a leader in regional maritime excellence.</p>
                    `}
        text2={`  <p>Modern yachting websites must balance aesthetic beauty with technological performance, incorporating features like high-definition vessel cinematography, interactive deck plans, and seamless charter booking. We focus on creating digital environments that project an image of luxury sophistication and uncompromising service standards.</p>
                <p><a href='/'>Website Development Agency</a> specializes in engineering high-impact websites for the yachting and luxury maritime sector. We design responsive, performance-optimized platforms that highlight your fleet’s artistry and bolster consumer trust in a competitive global market.</p>
                    `}
        imageintro1={imageintro1}
        alt1={
          "Specialized Yachting Website Design in Dubai - Website Development Agency"
        }
        imageintro2={imageintro2}
        alt2={
          "Yachting Web Development Company UAE - Website Development Agency"
        }
      />

      <DemoTemplate
        title="Yachting & Maritime Website Designs- Explore Templates"
        description="Elegant and high-impact yachting website designs in Dubai, starting at AED 1,500. Launch your <br>luxury brand quickly with professional, high-performance designs. Get fast delivery today."
        activetaburl={"luxury"}
      />

      <CommonInduestriesServices
        heding={"Yachting Website Design in Dubai, UAE- Our Services"}
        subheding="We provide comprehensive digital solutions designed to help yachting brands build trust and grow in the UAE."
      />

      <CommonWhyMetter
        imagewhymetter={imagewhymetter}
        alt={
          "Trusted Yachting Website Design for UAE Brands - Website Development Agency"
        }
        heding={"Trusted Yachting Website Design for UAE-based Brands"}
        subheding={
          "We design maritime websites with a deep understanding of luxury trust acquisition. From service clarity to nautical prestige, every element is engineered for maximum operational impact."
        }
        lefttext={`  <p><b>Tailored for Brand Longevity:</b> Each website is customized to support your brand's goals—whether that's securing high-value charter mandates, promoting specialized brokerage, or building an international luxury brand. Layouts focus on beauty.</p>
                        <p><b>Precise & Reliable Development:</b> we follow a meticulous development process that respects the high standards of the maritime industry. From initial design to final performance tuning, we ensure your digital platform is stable and fast.</p>
                        `}
        righttext={`<p><b>Ongoing Support & Nautical SEO:</b> A professional yachting website is a long-term business asset. Post-launch, we provide reliable support and continuous SEO updates, ensuring your brand remains iconic and effective as the luxury landscape evolves.</p>
                            `}
      />
      <CommonProtfolio />

      <DevelopmentServices />

      <CommonCostBreakdown
        heading="Yachting Website Design Dubai- Cost Breakdown"
        description="Choose specialized maritime website design and development solutions designed to strengthen your digital presence and build brand prestige in the UAE."
      />
      <IndustryGrid />

      <CommonWhyWebsiteDevelopment
        heding={"Sophisticated Maritime Solutions for Global Brands"}
        subheding={
          "We build technology websites that adapt to the specific focus of your yachting practice. Every platform is planned around your active mission, fleet footprint, and client engagement goals."
        }
        lefttext={`<p><b>Luxury Yacht Charters:</b> We create comprehensive websites that highlight charter destinations, seasonal itineraries, and on-board experiences, emphasizing freedom and elite service.</p>
                                <p><b>Yacht Brokerage & Sales:</b> For sales organizations, our designs focus on inventory clarity, technical specs, and market expertise, positioning you as a key partner for buyers in Dubai.</p>
                                <p><b>Marine Services & Management:</b> Websites for technical specialists focus on maintenance excellence, crew management, and registration assistance, showcasing your ability to provide holistic support.</p>
                                <p><b>Maritime Events & Clubs:</b> We design platforms for event planners and social clubs that focus on community engagement, regatta schedules, and membership portals, utilizing detailed event pages and member hubs.</p>
                            `}
        rightimage={imagewhydevelopment}
        alt={
          "Why Choose Website Development Agency for Yachting Website Development"
        }
      />

      <Team />

      <CommonClientTestimonials
        testimonials={[
          {
            id: 1,
            name: "Jeremy Thorne",
            text: "Website Development Agency built a digital presence that perfectly reflects our fleet's innovation. Our charter inquiry rate has improved dramatically since the relaunch.",
            image: imagetestimonial1,
          },
          {
            id: 2,
            name: "Laila Al-Ghazali",
            text: "A highly professional team with a deep understanding of the luxury sector. They delivered a stunning, authoritative website that has become a key driver for our brokerage leads in Dubai.",
            image: imagetestimonial2,
          },
          {
            id: 3,
            name: "Robert Miller",
            text: "Excellent service from start to finish. Our search rankings for specialized nautical terms have improved dramatically, and the visual performance of the site is exceptional.",
            image: imagetestimonial3,
          },
        ]}
      />

      <LocationService activeLocation="dubai" />

      <CommonFaqSection
        faqs={[
          {
            q: "How long does it take to build a professional yachting website?",
            a: "A high-authority maritime website typically takes 8 to 12 weeks, depending on the depth of fleet imagery and the complexity of booking systems required.",
          },
          {
            q: "Can you provide specialized SEO for 'yacht charter' or 'yacht sales' keywords?",
            a: "Yes, we offer specialized SEO strategies that target high-intent maritime keywords to ensure your brand is visible to those searching for the finest sea experiences in the UAE.",
          },
          {
            q: "How do you handle vessel inventory and complex deck plans?",
            a: "We implement dynamic inventory modules and interactive galleries that allow users to easily explore your fleet's features, deck layouts, and luxury amenities.",
          },
          {
            q: "Can we have a private area for confidential broker listings?",
            a: "Absolutely. We build secure, encrypted partner portals where you can safely share off-market listings, technical whitepapers, and confidential documentation.",
          },
          {
            q: "Will the website be optimized for high-volume visual traffic? ",
            a: "Yes, we ensure all vessel cinematography and galleries are performance-optimized, as much of your traffic will be driven by the visual appeal of your fleet.",
          },
          {
            q: "Can you integrate our existing CRM and booking management software? ",
            a: "Yes, we can securely integrate your website with many luxury management platforms via API for seamless client tracking and charter management.",
          },
        ]}
      />
    </>
  );
};

export default page;
