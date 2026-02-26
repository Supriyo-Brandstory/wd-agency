import React from "react";
import CommonBanner2 from "@/app/(frontend)/component/pages/common/CommonBanner2";
import CommonIntroduction from "@/app/(frontend)/component/pages/common/CommonIntroduction";
import CommonSetsUs from "@/app/(frontend)/component/pages/common/CommonSetsUs";
import CommonThreeCard from "@/app/(frontend)/component/pages/common/CommonThreeCard";
import CommonIndustries from "@/app/(frontend)/component/pages/common/CommonIndustries";
import CommonAboutPage2 from "@/app/(frontend)/component/pages/common/CommonAboutPage2";
import CommonDevelopmentProcess from "@/app/(frontend)/component/pages/common/CommonDevelopmentProcess";
import CommonClientTestimonials from "@/app/(frontend)/component/pages/common/CommonClientTestimonials";
import CommonFaqSection from "@/app/(frontend)/component/pages/common/CommonFaqSection";
import LocationService from "@/app/(frontend)/component/pages/common/LocationService";
import CommonCtaSection from "@/app/(frontend)/component/pages/common/CommonCtaSection";
import SpecializedWebServices from "@/app/(frontend)/component/pages/common/SpecializedWebServices";
import CommonGrowthSection from "@/app/(frontend)/component/pages/common/CommonGrowthSection";
import CommonFinancialImpact from "@/app/(frontend)/component/pages/common/CommonFinancialImpact";
import AgencyTextContent from "@/app/(frontend)/component/pages/common/AgencyTextContent";

// Images
import imagebanner from "@/app/(frontend)/assets/images/website-migration-service/banner.webp";
import imageintro1 from "@/app/(frontend)/assets/images/website-migration-service/intro.webp";
import imageintro2 from "@/app/(frontend)/assets/images/website-migration-service/intro-2.webp";
import imageSetsUs from "@/app/(frontend)/assets/images/website-migration-service/setusbg.webp";
import imageAbout from "@/app/(frontend)/assets/images/website-migration-service/about.webp";
import contactImage from "@/app/(frontend)/assets/images/about/contact.png";

// Icons (using existing UI/UX icons)
import icon1 from "@/app/(frontend)/assets/images/ui-ux/ico-1.webp";
import icon2 from "@/app/(frontend)/assets/images/ui-ux/ico-2.webp";
import icon3 from "@/app/(frontend)/assets/images/ui-ux/ico-3.webp";
import icon4 from "@/app/(frontend)/assets/images/ui-ux/ico-4.webp";
import icon5 from "@/app/(frontend)/assets/images/ui-ux/ico-5.webp";
import icon6 from "@/app/(frontend)/assets/images/ui-ux/ico-6.webp";

// Service specific images
import serviceImg1 from "@/app/(frontend)/assets/images/ui-ux/s1.webp";
import serviceImg2 from "@/app/(frontend)/assets/images/ui-ux/s2.webp";
import serviceImg3 from "@/app/(frontend)/assets/images/ui-ux/s3.webp";
import serviceImg4 from "@/app/(frontend)/assets/images/ui-ux/s4.webp";

// Testimonials
import imagetestimonial1 from "@/app/(frontend)/assets/images/testimonial/testimonial-1.webp";
import imagetestimonial2 from "@/app/(frontend)/assets/images/testimonial/testimonial-2.webp";
import imagetestimonial3 from "@/app/(frontend)/assets/images/testimonial/testimonial-3.webp";

export const metadata = {
  title: "Website Redesign Services in Dubai | Transform Your Online Presence",
  description:
    "Give your website a modern upgrade with our expert redesign services in Dubai. We focus on enhancing user experience, improving performance, and driving higher conversions for UAE businesses.",
};

const WebsiteRedesignPage = () => {
  return (
    <>
      <CommonBanner2
        bg={imagebanner}
        heding={"Expert Website Redesign Services in Dubai"}
        subtitle={
          "Transform your outdated website into a high-performing digital asset. <br>Our redesign solutions combine modern aesthetics with cutting-edge <br>functionality to help Dubai businesses stay ahead of the competition <br>and deliver exceptional user experiences."
        }
      />

      <CommonIntroduction
        heding={"Why Your Business Needs a Strategic Website Redesign"}
        text1={`
          <h3>Meeting Modern Standards in Dubai</h3>
          <p>The digital landscape in the UAE is evolving rapidly. A website that worked fine three years ago may now feel outdated, slow, or difficult to navigate. Our redesign services focus on aligning your online presence with current design trends, user expectations, and technological advancements prevalent in the Dubai market.</p>
          <h3>Performance and Reliability</h3>
          <p>A successful redesign isn't just about looks; it's about performance. We optimize core web vitals, improve loading speeds, and ensure your site is built on a robust architecture that can handle the demands of a growing business in the UAE.</p>
        `}
        text2={`
          <h3>Conversion-Focused Approach</h3>
          <p>We don't just redesign; we re-engineer for results. By analyzing user behavior and implementing proven UX patterns, we transform your website into a powerful sales and lead generation tool that works for your business 24/7.</p>
          <h3>Seize New Opportunities</h3>
          <p>Redesigning your website is an opportunity to re-introduce your brand to the Dubai market. It's a chance to refine your messaging, showcase new products or services, and strengthen the trust your customers have in your digital presence.</p>
        `}
        imageintro1={imageintro1}
        imageintro2={imageintro2}
      />

      <SpecializedWebServices />

      <CommonSetsUs
        text1={"When Is the Right Time for a Website Redesign?"}
        text2={`
          <h3>Identifying the Need for Change</h3>
          <p>If your website has high bounce rates, low conversion numbers, or isn't mobile-friendly, it's time for a redesign. In Dubai's competitive market, a sub-par website can actively drive customers toward your competitors. We help you identify these friction points and turn them into strengths.</p>
          <h3>Our Strategic Evaluation</h3>
          <p>At Website Development Agency, we conduct a thorough audit of your current site to understand what's working and what isn't. We look at everything from SEO performance and site speed to user flow and brand alignment, ensuring your redesign is based on data, not just assumptions.</p>
        `}
        bg={imageSetsUs}
      />

      <CommonThreeCard
        text1={"Our Comprehensive Redesign Solutions"}
        boxdata={[
          {
            id: 1,
            img: icon1,
            title: "UI/UX Overhaul",
            desc: "We completely transform your website's interface and user experience, creating a modern, intuitive design that resonates with your target audience in Dubai and makes navigation seamless.",
          },
          {
            id: 2,
            img: icon2,
            title: "Mobile-First Optimization",
            desc: "In a mobile-dominated market like the UAE, we ensure your website delivers a flawless experience across all devices, with responsive layouts and touch-optimized interactions.",
          },
          {
            id: 3,
            img: icon3,
            title: "Performance Upgrade",
            desc: "We optimize your site's codebase and assets to achieve lightning-fast load times, improving both user satisfaction and your search engine rankings in Google UAE.",
          },
          {
            id: 4,
            img: icon4,
            title: "SEO Structural Improvements",
            desc: "A redesign is the perfect time to fix technical SEO issues. We restructure your site for better crawlability, implement schema markup, and ensure your content is easily discoverable.",
          },
          {
            id: 5,
            img: icon5,
            title: "Conversion Rate Optimization (CRO)",
            desc: "We strategically place calls-to-action and simplify user journeys to guide visitors toward conversion, turning your traffic into measurable business growth.",
          },
          {
            id: 6,
            img: icon6,
            title: "Advanced Functionality Integration",
            desc: "Whether you need to integrate a new CRM, add e-commerce capabilities, or implement AI chatbots, we bring modern features to your legacy web presence.",
          },
        ]}
      />

      <CommonIndustries
        heding={"Redesigning for Success Across UAE Industries"}
        services={[
          {
            title: "Corporate Website Redesign",
            desc: "Elevate your professional image with a corporate redesign that reflects your business's authority and values. We focus on brand consistency and professional aesthetics for Dubai's top enterprises.",
            img: serviceImg1,
            btnname: "Request a Quote",
            link: "/contact-us",
          },
          {
            title: "E-commerce Redesign",
            desc: "Boost your online sales with a redesigned Shopify, Magento, or custom store. We optimize product pages, streamline checkouts, and enhance the overall shopping experience for UAE consumers.",
            img: serviceImg2,
            btnname: "Boost My Sales",
            link: "/contact-us",
          },
          {
            title: "SaaS & Tech Redesign",
            desc: "Modernize your platform's interface to match your cutting-edge technology. We create sleek, functional designs that help tech companies in the UAE stand out and attract investors.",
            img: serviceImg3,
            btnname: "Modernize Now",
            link: "/contact-us",
          },
          {
            title: "Real Estate Portal Redesign",
            desc: "In Dubai's booming property market, your portal needs to be fast and visually stunning. We redesign real estate sites with advanced search filters, map integrations, and high-quality visuals.",
            img: serviceImg4,
            btnname: "Elevate My Portal",
            link: "/contact-us",
          },
        ]}
      />

      <CommonFinancialImpact
        heading={"The Economic Impact of a Strategic Website Redesign"}
        subheading={
          "Investing in a professional website redesign is a direct investment in your company's growth potential. We focus on delivering high-impact solutions that generate measurable value and long-term returns for your business in Dubai."
        }
        costFactors={{
          title: "Strategic Redesign Value Pillars",
          description:
            "Our approach focuses on the elements that drive the highest return on investment for UAE enterprises.",
          factors: [
            "Advanced technical SEO to capture modern search demand",
            "Performance optimization that reduces bounce rates drastically",
            "Conversion-first UI design that turns traffic into revenue",
            "Scalable architecture that minimizes future development costs",
            "Enhanced mobile responsiveness for the UAE's mobile-first market",
          ],
        }}
        roiData={{
          title: "Measuring Redesign Success",
          description:
            "We track the metrics that matter most to your business growth and operational success.",
          metrics: [
            {
              label: "Engagement",
              value: "Increased time-on-site and interaction rates",
            },
            {
              label: "Conversion",
              value: "Direct growth in lead generation and inquiries",
            },
            {
              label: "Authority",
              value: "Enhanced brand perception and market positioning",
            },
            {
              label: "Efficiency",
              value: "Lower cost-per-acquisition and improved sales flow",
            },
          ],
        }}
      />

      <CommonAboutPage2
        text1="The Benefits of Partnering with a Redesign Agency in Dubai"
        text2={`
          <p class="mb-20">Choosing the right partner for your website redesign is crucial for achieving long-term success. Here's why Dubai businesses choose us:</p>
          <h3 class="mb-10">Localized Market Knowledge</h3>
          <ul class="ml-40 mb-20">
            <li>Understanding of UAE user behavior and preferences</li>
            <li>Experience with multilingual (Arabic/English) design requirements</li>
            <li>Knowledge of regional industry standards and expectations</li>
          </ul>
          <h3 class="mb-10">Proven Methodology</h3>
          <ul class="ml-40 mb-20">
            <li>Data-driven design decisions based on user analytics</li>
            <li>Rigorous testing across devices and browsers</li>
            <li>Seamless migration process to protect your existing SEO rankings</li>
          </ul>
          <h3 class="mb-10">End-to-End Support</h3>
          <ul class="ml-40">
            <li>From initial audit to post-launch optimization</li>
            <li>Comprehensive training for your team on new features</li>
            <li>Ongoing maintenance to keep your site performing at its best</li>
          </ul>
        `}
        img={imageAbout}
      />

      <CommonDevelopmentProcess
        heding={"Our Structured Redesign Journey"}
        processData={[
          {
            id: "01.",
            title: "Audit & Analysis",
            description:
              "We start by analyzing your current website's performance, user behavior, and SEO standings to identify areas for improvement and opportunities for growth.",
          },
          {
            id: "02.",
            title: "Strategy & Wireframing",
            description:
              "We define a clear strategy for the redesign, creating wireframes and user flow diagrams that prioritize usability and conversion.",
          },
          {
            id: "03.",
            title: "Creative Visual Design",
            description:
              "Our designers craft a modern, visually stunning interface that aligns with your brand identity and appeals to the Dubai market.",
          },
          {
            id: "04.",
            title: "Development & Testing",
            description:
              "We bring the design to life using the latest web technologies, ensuring full responsiveness and conducting thorough quality assurance testing.",
          },
          {
            id: "05.",
            title: "Migration & Launch",
            description:
              "We handle the launch with precision, ensuring a smooth transition from your old site to the new one while preserving your SEO authority.",
          },
        ]}
      />

      <CommonClientTestimonials
        testimonials={[
          {
            id: 1,
            name: "Ahmed K.",
            text: "The redesign of our corporate site by Website Development Agency was a game-changer. Our lead generation increased by 40% in just two months.",
            image: imagetestimonial1,
          },
          {
            id: 2,
            name: "Sarah L.",
            text: "Professional, creative, and very fast. They transformed our outdated e-commerce store into a modern shopping experience that our customers love.",
            image: imagetestimonial2,
          },
          {
            id: 3,
            name: "Omar M.",
            text: "They managed the entire migration perfectly. Our new site is lightning fast, and we didn't lose any of our Google rankings during the process.",
            image: imagetestimonial3,
          },
        ]}
      />

      <LocationService activeLocation="dubai" />

      <AgencyTextContent />

      <CommonFaqSection
        faqs={[
          {
            q: "How often should a website be redesigned?",
            a: "Generally, websites should be redesigned every 2 to 3 years to keep up with design trends, technological updates, and changing user behaviors. However, if your site is slow, not mobile-friendly, or has low conversions, you should consider a redesign immediately.",
          },
          {
            q: "Will a redesign hurt my SEO rankings?",
            a: "If done correctly, a redesign should improve your SEO. We take careful measures during the migration process, such as setting up proper 301 redirects and maintaining URL structures where possible, to ensure your existing rankings are preserved and enhanced.",
          },
          {
            q: "How long does a website redesign take?",
            a: "The timeline depends on the complexity of the project. A standard corporate redesign typically takes 4 to 8 weeks, while a large e-commerce platform or a highly custom site may take 3 to 4 months.",
          },
          {
            q: "What is the cost of a website redesign in Dubai?",
            a: "Cost varies based on the scope, features, and level of customization required. We offer transparent pricing after initial consultations to ensure the solution fits your budget and business goals.",
          },
          {
            q: "Do I need to change my hosting for a redesign?",
            a: "Not necessarily, but we may recommend a hosting upgrade if your current provider doesn't meet the performance needs of your new, modernized website.",
          },
          {
            q: "Can you redesign my existing WordPress or Shopify site?",
            a: "Yes, we specialize in redesigning sites across various platforms, including WordPress, Shopify, Magento, and custom-built applications.",
          },
        ]}
      />

      <CommonCtaSection
        imageUrl={contactImage}
        title="Ready to Transform Your Digital Presence?"
        subtitle="Partner with Dubai's leading redesign agency to breathe new life into your website. Contact us today for a free audit and consultation."
      />
    </>
  );
};

export default WebsiteRedesignPage;
