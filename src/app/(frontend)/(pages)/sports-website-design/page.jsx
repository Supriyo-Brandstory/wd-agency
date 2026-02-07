import React from "react";
import CommonBanner2 from "../../component/pages/common/CommonBanner2";
import imagebanner from "@/app/(frontend)/assets/images/cybersecurity-website-design/banner.webp";
import CommonIntroduction from "../../component/pages/common/CommonIntroduction";
import imageintro1 from "@/app/(frontend)/assets/images/cybersecurity-website-design/intro-1.webp";
import imageintro2 from "@/app/(frontend)/assets/images/cybersecurity-website-design/intro-2.webp";
import CommonWhyMetter from "../../component/pages/common/CommonWhyMetter";
import imagewhymetter from "@/app/(frontend)/assets/images/cybersecurity-website-design/why.webp";
import CommonInduestriesServices from "../../component/pages/common/CommonInduestriesServices";
import CommonDevelopmentProcess from "../../component/pages/common/CommonDevelopmentProcess";
import CommonWhyWebsiteDevelopment from "../../assets/style/common/CommonWhyWebsiteDevelopment";
import imagewhydevelopment from "@/app/(frontend)/assets/images/cybersecurity-website-design/why-choose.webp";
import CommonClientTestimonials from "../../component/pages/common/CommonClientTestimonials";
import imagetestimonial1 from "@/app/(frontend)/assets/images/testimonial/testimonial-1.webp";
import imagetestimonial2 from "@/app/(frontend)/assets/images/testimonial/testimonial-2.webp";
import imagetestimonial3 from "@/app/(frontend)/assets/images/testimonial/testimonial-3.webp";
import CommonFaqSection from "../../component/pages/common/CommonFaqSection";
import CommonServiceLocations from "../../component/pages/common/CommonServiceLocations";
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
        alt={"Sports & Fitness Website Design Agency in Dubai, UAE"}
        heding={"Sports & Fitness Website Design Agency in Dubai, UAE"}
        subtitle={
          "We build dynamic, high-engagement websites for sports clubs, fitness centers, and athletes that <br>emphasize performance, community energy, and active lifestyles in Dubai and the UAE."
        }
      />

      <CommonIntroduction
        heding={"Sports Website Design & Development"}
        text1={` <p>In the vibrant world of sports and wellness, your website is your digital stadium. For sports organizations in Dubai, a digital presence must transcend standard information to capture the energy and passion of the athlete and fan alike. A professional sports website is essential for building a community, managing memberships, and showcasing athletic excellence across the UAE.</p>
                 <p>Potential members look for clubs that demonstrate a deep commitment to performance, community, and expert coaching. A well-engineered website helps you bridge the gap between active training and digital engagement, positioning your sports brand as a leader in regional health and vitality.</p>
                    `}
        text2={`  <p>Modern sports websites must be dynamic and interactive, incorporating features like live match updates, member performance trackers, and seamless booking for training sessions. We focus on creating digital environments that project an image of athletic sophistication and uncompromising energy standards.</p>
                <p><a href='/'>Website Development Agency</a> specializes in engineering high-impact websites for the sports and fitness sector. We design responsive, performance-optimized platforms that highlight your brand’s vitality and bolster community trust in a competitive market.</p>
                    `}
        imageintro1={imageintro1}
        alt1={
          "Specialized Sports Website Design in Dubai - Website Development Agency"
        }
        imageintro2={imageintro2}
        alt2={"Sports Web Development Company UAE - Website Development Agency"}
      />

      <DemoTemplate
        title="Sports & Fitness Website Designs- Explore Templates"
        description="Dynamic and high-engagement sports website designs in Dubai, starting at AED 1,500. Launch your <br>active brand quickly with professional, high-performance designs. Get fast delivery today."
        activetaburl={"fitness"}
      />

      <CommonInduestriesServices
        heding={"Sports Website Design in Dubai, UAE- Our Services"}
        subheding="We provide comprehensive digital solutions designed to help sports brands build community and grow in the UAE."
      />

      <CommonWhyMetter
        imagewhymetter={imagewhymetter}
        alt={
          "Trusted Sports Website Design for UAE Brands - Website Development Agency"
        }
        heding={"Trusted Sports Website Design for UAE-based Brands"}
        subheding={
          "We design sports websites with a deep understanding of community trust acquisition. From service clarity to energy prestige, every element is engineered for maximum athletic impact."
        }
        lefttext={`  <p><b>Tailored for Brand Energy:</b> Each website is customized to support your brand's goals—whether that's securing large-scale tournament sponsorships, promoting specialized training, or building a high-trust local club brand. Layouts focus on vitality.</p>
                        <p><b>Agile & Fast Development:</b> we follow a rigorous development process that respects the pace of your industry. From initial design to final performance testing, we ensure your digital platform is stable, fast, and secure.</p>
                        `}
        righttext={`<p><b>Ongoing Support & Professional SEO:</b> A dynamic sports website is a long-term community asset. Post-launch, we provide reliable support and continuous performance updates, ensuring your brand remains iconic and effective as the sports world evolves.</p>
                            `}
      />
      <CommonProtfolio />

      <DevelopmentServices />

      <CommonCostBreakdown
        heading="Sports Website Design Dubai- Cost Breakdown"
        description="Choose specialized sports website design and development solutions designed to strengthen your digital presence and build community trust in the UAE."
      />
      <IndustryGrid />

      <CommonWhyWebsiteDevelopment
        heding={"Active Website Solutions for Specialized Brands"}
        subheding={
          "We build sports websites that adapt to the specific focus of your studio. Every platform is planned around your active mission, community footprint, and client engagement goals."
        }
        lefttext={`<p><b>Youth Academies & Schools:</b> We create comprehensive websites that highlight safety, skill progression, and coaching excellence, emphasizing personal growth for young athletes.</p>
                                <p><b>Professional Clubs & Teams:</b> For pro organizations, our designs focus on fan engagement, ticket sales, and player stats, positioning you as a pinnacle of regional athletic success.</p>
                                <p><b>Fitness & Personal Training:</b> Websites for fitness specialists focus on workout plans, nutrition advice, and client transformations, showcasing your ability to deliver healthy lifestyle results.</p>
                                <p><b>Tournament & Event Organizers:</b> We design platforms for event planners that focus on registration, scheduling, and live results, utilizing detailed event pages and interactive maps.</p>
                            `}
        rightimage={imagewhydevelopment}
        alt={
          "Why Choose Website Development Agency for Sports Website Development"
        }
      />

      <Team />

      <CommonClientTestimonials
        testimonials={[
          {
            id: 1,
            name: "Jake Williams",
            text: "Website Development Agency built a digital presence that perfectly reflects our club's energy. Our member sign-up rate has improved dramatically since the relaunch.",
            image: imagetestimonial1,
          },
          {
            id: 2,
            name: "Laila Al-Kamali",
            text: "A highly professional team with a deep understanding of the sports sector. They delivered a vibrant website that has become a key driver for our academy's growth in Dubai.",
            image: imagetestimonial2,
          },
          {
            id: 3,
            name: "Robert Miller",
            text: "Excellent service from start to finish. Our search rankings for 'football coaching' in Dubai have improved dramatically, and the site's performance is exceptional.",
            image: imagetestimonial3,
          },
        ]}
      />

      <LocationService activeLocation="dubai" />

      <CommonFaqSection
        faqs={[
          {
            q: "How long does it take to build a professional sports website?",
            a: "A high-engagement sports website typically takes 6 to 10 weeks, depending on the number of interactive features and membership systems required.",
          },
          {
            q: "Can you provide specialized SEO for 'sports academy' or 'fitness center' terms?",
            a: "Yes, we offer specialized SEO strategies that target high-intent active terms to ensure your brand is visible to those searching for sports opportunities in the UAE.",
          },
          {
            q: "How do you handle live match results and stats?",
            a: "We implement dynamic modules that can be easily updated or securely integrated with external data feeds to provide real-time scores and statistics to your fans.",
          },
          {
            q: "Can members book a training session directly on the site?",
            a: "Absolutely. We build secure booking systems that allow members to schedule and pay for sessions directly from your website, improving your club's efficiency.",
          },
          {
            q: "Will the website be optimized for mobile fan engagement?",
            a: "Yes, we ensure all match centers and schedules are fully responsive, so your fans can follow results on their smartphones while at the stadium or on the go.",
          },
          {
            q: "Can you integrate our existing membership management software?",
            a: "Yes, we can securely integrate your website with many management platforms (like Mindbody or custom systems) for seamless member tracking and billing.",
          },
        ]}
      />
    </>
  );
};

export default page;
