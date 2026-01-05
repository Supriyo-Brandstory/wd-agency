import React from "react";
import imagebanner from "@/app/(frontend)/assets/images/frontend-development/main-banner.webp";
import CommonBanner2 from "@/app/(frontend)/component/pages/common/CommonBanner2";
import CommonIntroduction from "@/app/(frontend)/component/pages/common/CommonIntroduction";
import imageintro1 from "@/app/(frontend)/assets/images/frontend-development/intro.webp";
import imageintro2 from "@/app/(frontend)/assets/images/frontend-development/intro-2.webp";
import CommonSetsUs from "@/app/(frontend)/component/pages/common/CommonSetsUs";
import setusimagesabudhabi from "@/app/(frontend)/assets/images/frontend-development/setusbg.webp";
import CommonThreeCard from "@/app/(frontend)/component/pages/common/CommonThreeCard";
import commonimage1 from "@/app/(frontend)/assets/images/website-development/Strategic-Problem-Solving.png";
import commonimage2 from "@/app/(frontend)/assets/images/website-development/FocusedApproach.png";
import commonimage3 from "@/app/(frontend)/assets/images/website-development/Partnership-Commitment.png";
import commonimage4 from "@/app/(frontend)/assets/images/website-development/Transparency.png";
import commonimage5 from "@/app/(frontend)/assets/images/website-development/Technology-Adoption.png";
import commonimage6 from "@/app/(frontend)/assets/images/website-development/Value-for-Money-Services.png";
import CommonIndustries from "@/app/(frontend)/component/pages/common/CommonIndustries";
import imageService1 from "@/app/(frontend)/assets/images/frontend-development/service-1.webp";
import imageService2 from "@/app/(frontend)/assets/images/frontend-development/service-2.webp";
import imageService3 from "@/app/(frontend)/assets/images/frontend-development/service-3.webp";
import imageService4 from "@/app/(frontend)/assets/images/frontend-development/service-4.webp";
import imageService5 from "@/app/(frontend)/assets/images/frontend-development/service-5.webp";
import imageService8 from "@/app/(frontend)/assets/images/frontend-development/service-6.webp";
import CommonAboutPage2 from "@/app/(frontend)/component/pages/common/CommonAboutPage2";
import Aboutimg from "@/app/(frontend)/assets/images/frontend-development/about-2.webp";
import ContactImage from "@/app/(frontend)/assets/images/about/contact.png";
import CommonCtaSection from "@/app/(frontend)/component/pages/common/CommonCtaSection";

import CommonTechnologyStack from "@/app/(frontend)/component/pages/common/CommonTechnologyStack";
import react from "@/app/(frontend)/assets/images/reacticon.svg";
import nodejs from "@/app/(frontend)/assets/images/nodejsicon.svg";
import laravel from "@/app/(frontend)/assets/images/laravelicon.svg";
import wordpress from "@/app/(frontend)/assets/images/wordpressicon.svg";
import magento from "@/app/(frontend)/assets/images/magentoicon.svg";
import shopify from "@/app/(frontend)/assets/images/shopifyicon.svg";
import flutter from "@/app/(frontend)/assets/images/fluttericon.svg";
import reactnative from "@/app/(frontend)/assets/images/reactnativeicon.svg";
import php from "@/app/(frontend)/assets/images/phpicon.svg";
import python from "@/app/(frontend)/assets/images/pythonicon.svg";
import aws from "@/app/(frontend)/assets/images/awsicon.svg";
import mongo from "@/app/(frontend)/assets/images/mongodbicon.svg";
import CommonDevelopmentProcess from "@/app/(frontend)/component/pages/common/CommonDevelopmentProcess";
import CommonWhyWebsiteDevelopment from "../../../assets/style/common/CommonWhyWebsiteDevelopment";
import imagewhydevelopment from "@/app/(frontend)/assets/images/e-commerce-web-development/Why-Website-Development.webp";
import CommonClientTestimonials from "../../../component/pages/common/CommonClientTestimonials";
import imagetestimonial1 from "@/app/(frontend)/assets/images/testimonial/testimonial-1.webp";
import imagetestimonial2 from "@/app/(frontend)/assets/images/testimonial/testimonial-2.webp";
import imagetestimonial3 from "@/app/(frontend)/assets/images/testimonial/testimonial-3.webp";
import CommonFaqSection from "../../../component/pages/common/CommonFaqSection";
import CommonServiceLocations from "../../../component/pages/common/CommonServiceLocations";
import LocationService from "@/app/(frontend)/component/pages/common/LocationService";

const page = () => {
  return (
    <>
      <CommonBanner2
        bg={imagebanner}
        heding={"Leading UI UX Design Agency in Dubai"}
        subtitle={
          "As a leading UI UX design agency in Dubai, we create intuitive, user-centric <br>interfaces that enhance engagement and drive meaningful interactions. <br>Our designs combine visual excellence with strategic usability, helping UAE <br>businesses deliver seamless digital experiences that convert users into <br>loyal customers."
        }
      />
      <CommonIntroduction
        heding={"Why Choose WD Agency as Your UI UX Partner in Dubai?"}
        text1={` 
          <h3>Deep Understanding of the Dubai Market</h3>
          <p>At WD Agency, our UI UX strategies are shaped by in-depth insights into UAE user behavior, cultural sensitivity, and local market trends. We design digital experiences that align with the Dubai business ecosystem, industry expectations, and regulatory considerations ensuring relevance, trust, and usability for local audiences.</p>
          <h3>Current Trends & Future Vision in Dubai</h3>
          <p>We stay ahead of Dubai design trends by blending global best practices with regional innovation. From the future of UI UX in the UAE to emerging technologies and interaction patterns, our team focuses on forward-thinking solutions that support long-term digital growth and innovation in digital design across Dubai.</p>
          `}
        text2={`  <h3>Our Award-Winning UI/UX Design Approach</h3>
          <p>Our user-centered design methodology is built on research, strategy, and continuous improvement. Through an iterative process and data-driven design decisions, we craft interfaces that not only look exceptional but also deliver measurable performance and user satisfaction.</p>
          <h3>Proven Track Record with Dubai Businesses</h3>
          <p>WD Agency has partnered with businesses across Dubai and the UAE, delivering impactful UI UX solutions tailored to diverse industries. Our experience with local brands, supported by Dubai client testimonials, local success stories, and collaborations with industry leaders in the UAE, reflects our ability to create designs that drive real business outcomes.</p>

          `}
        imageintro1={imageintro1}
        imageintro2={imageintro2}
      />
      <CommonSetsUs
        text1={"Understanding UI UX Design Costs in Dubai"}
        text2={`<h3>Factors Influencing UI UX Project Costs</h3>
          <p>UI UX design costs in Dubai vary based on multiple factors, including project scope, product complexity, and the required feature set. The level of customization, platforms involved, and the depth of research also play a role, along with the design expertise and experience needed to deliver high-quality, scalable results.</p> 
          <h3>Our Transparent Pricing Models</h3>
          <p>At WD Agency, we follow clear and flexible pricing structures to suit different business needs. Whether it’s fixed-price projects, hourly engagement, or long-term retainers, our approach to cost estimation ensures accurate project quotes with flexible pricing so you know exactly what you’re investing in and why.</p> `}
        bg={setusimagesabudhabi}
      />
      <CommonThreeCard
        text1={"Comprehensive UI UX Design Services in Dubai"}
        text2={""}
        boxdata={[
          {
            id: 1,
            img: commonimage2,
            title: "User Interface (UI) Design Dubai",
            desc: "Our UI design services in Dubai focus on creating visually engaging, intuitive interfaces that reflect your brand’s identity and values. From refined visual design and consistent brand identity in Dubai to interactive elements that enhance engagement, we craft interface designs that are both functional and visually impactful.",
          },
          {
            id: 2,
            img: commonimage1,
            title: "User Experience (UX) Design Dubai",
            desc: "We deliver strategic UX design in Dubai grounded in deep user research and behavioral insights. By applying a clear UX strategy and human-centered design principles, we optimize user journeys to ensure seamless navigation, improved usability, and meaningful interactions across all digital touchpoints.",
          },
          {
            id: 3,
            img: commonimage3,
            title: "Mobile App UI UX Design Dubai",
            desc: "Our mobile app design services in Dubai are tailored specifically for iOS and Android platforms. We consider device-specific behaviors, platform guidelines, and conduct local testing to ensure smooth performance, intuitive iOS UX, and responsive Android UI experiences for UAE users.",
          },

          {
            id: 4,
            img: commonimage4,
            title: "Web Design UI UX Dubai",
            desc: "We design websites that balance aesthetics with performance. Our website design services in Dubai emphasize usability, responsive web design, and conversion-focused layouts, including optimized e-commerce UI UX, to help businesses engage visitors and drive measurable results.",
          },
          {
            id: 5,
            img: commonimage6,
            title: "Digital Product Design Services Dubai",
            desc: "WD Agency offers end-to-end digital product design services in Dubai, covering product strategy, MVP development, and scalable software design. From concept to launch, we help businesses transform ideas into well-designed digital products built for growth in the UAE market.",
          },
          {
            id: 6,
            img: commonimage5,
            title: "Conversion-first Approach",
            desc: "We don’t just make sites look attractive- we design quantifiable funnels with analytics, A/B testing, and iterative leveraging.",
            link: "/contact-us",
            linkText: "Contact Us",
          },
        ]}
      />
      <CommonIndustries
        heding={"Specialized UI UX Solutions for Dubai Businesses"}
        subheding=""
        services={[
          {
            title: "UI UX Design for Startups Dubai",
            desc: "We help startups in Dubai transform ideas into market-ready products through focused startup UI UX solutions. From MVP design to rapid prototyping and rapid iteration, our designs support product validation, investor-ready funding presentations, and scalable growth in the UAE startup ecosystem.",
            img: imageService1,
            btnname: "Contact Us",
            link: "/contact-us",
          },
          {
            title: "UI UX Audit Services Dubai",
            desc: "Our UI UX audit services in Dubai provide a detailed evaluation of your existing digital products. Through comprehensive UX audits and usability assessments, we identify friction points and opportunities for conversion rate optimization (CRO), delivering clear, actionable recommendations tailored to Dubai businesses.",
            img: imageService2,
            btnname: "Contact Us",
            link: "/contact-us",
          },
          {
            title: "Branding Agency Dubai UI UX Integration",
            desc: "WD Agency ensures seamless integration between UI/UX and brand identity. By aligning brand consistency, digital branding, and corporate identity in Dubai, we create cohesive digital experiences that reinforce brand recognition and trust across all user touchpoints.",
            img: imageService3,
            btnname: "Contact Us",
            link: "/contact-us",
          },
          {
            title: "E-commerce UI UX Design for Online Stores in Dubai",
            desc: "We design high-performing e-commerce UI UX solutions for Dubai-based online stores, focusing on optimized user flows and seamless checkout experiences. From e-commerce platforms to secure UAE-friendly payment integrations, we enhance the online shopping experience and strengthen the conversion funnel to drive higher sales.",
            img: imageService4,
            btnname: "Contact Us",
            link: "/contact-us",
          },
        ]}
      />
      <CommonAboutPage2
        text1="How to Choose the Best UI UX Agency in Dubai"
        text2={`
                            <p class="mb-20">
                            Choosing the right UI UX agency in Dubai requires careful evaluation beyond visuals alone. Use the following criteria to make an informed decision:
                            </p>
                            <h3 class="mb-10">Portfolio Review</h3>
                            <ul class="ml-40">
                            <li>Look for real, live projects—not just concept designs</li>
                            <li>Check industry relevance and complexity of work</li>
                            <li>Evaluate usability, clarity, and consistency across platforms</li>
                            <li>Assess whether designs solve business problems, not just look attractive</li>
                            </ul>
                            <h3 class="mb-10">Client Testimonials & References</h3>
                            <ul class="ml-40">
                            <li>Review client references from Dubai or UAE-based businesses</li>
                            <li>Look for measurable outcomes such as improved engagement or conversions</li>
                            <li>Check long-term client relationships as a trust indicator</li>
                            </ul>
                           <h3 class="mb-10">Local Experience</h3>
                           <ul class="ml-40">
                           <li>Ensure the agency understands the Dubai business ecosystem</li>
                           <li>Familiarity with UAE user behavior, cultural expectations, and multilingual audiences</li>
                           <li>Experience working with regional compliance, accessibility, and market standards</li>
                           </ul>
                           <h3 class="mb-10">Design & UX Process</h3>
                           <ul class="ml-40">
                           <li>A clear, structured process from research to launch</li>
                           <li>Strong focus on user research and validation</li>
                           <li>Ability to explain decisions using data, not assumptions</li>
                           </ul>
                    `}
        img={Aboutimg}
      />

      <CommonDevelopmentProcess
        heding={"Our Localized UI UX Design Process"}
        subheding={""}
        processData={[
          {
            id: "01.",
            title: "Discovery & Research in the Dubai Market",
            description: `We begin with in-depth discovery to understand your business goals and the Dubai audience. By gathering user insights, leveraging market intelligence, and conducting demographic analysis in Dubai, we ensure our design decisions are grounded in real local user behavior and expectations.`,
          },
          {
            id: "02.",
            title: "Strategy & Conceptualization",
            description: `Based on research findings, we define a clear UX strategy that aligns with your business objectives. This stage includes information architecture planning, wireframing, and mapping user journeys to create a structured design blueprint supported by an effective content strategy.`,
          },
          {
            id: "03.",
            title: "Design & Prototyping",
            description: `Our designers translate strategy into visually engaging interfaces through refined visual design. We create detailed UI mockups, high-fidelity prototypes, and scalable design systems that ensure consistency, usability, and brand alignment across all digital platforms.`,
          },
          {
            id: "04.",
            title: "Testing & Refinement with Dubai Users",
            description: `We validate designs through real-world testing with local audiences. Using usability testing, A/B testing, and continuous user feedback, we refine interactions and layouts to ensure optimal performance and relevance for Dubai users.`,
          },
          {
            id: "05.",
            title: "Implementation & Launch Support",
            description: `WD Agency works closely with development teams during development handover to ensure accurate execution. With thorough quality control and structured launch strategy, we support smooth deployment and post-launch monitoring for long-term success.`,
          },
        ]}
      />

      <CommonClientTestimonials
        testimonials={[
          {
            id: 1,
            name: "Daniel R",
            text: "WD Agency transformed our online presence. Within 3 months, our sales doubled thanks to their Shopify development expertise.",
            image: imagetestimonial1,
          },
          {
            id: 2,
            name: "Sophia K",
            text: "Professional, efficient, and creative—the best ecommerce development agency in UAE we’ve worked with.",
            image: imagetestimonial2,
          },
          {
            id: 3,
            name: "James P",
            text: "From design to launch, everything was seamless. Their team handled even complex Magento integrations with ease.",
            image: imagetestimonial3,
          },
        ]}
      />
      {/* <CommonServiceLocations /> */}
      <LocationService activeLocation="dubai" />

      <CommonFaqSection
        faqs={[
          {
            q: "What makes WD Agency a leading UI UX design agency in Dubai?",
            a: "WD Agency combines deep local market knowledge with a user-centered, data-driven design approach. Our understanding of Dubai’s business ecosystem, UAE user behavior, and industry-specific needs allows us to create UI UX solutions that are visually refined, culturally relevant, and aligned with measurable business outcomes.",
          },
          {
            q: "How does UI UX design benefit businesses specifically in the Dubai market?",
            a: "In Dubai’s highly competitive digital landscape, strong UI UX design helps businesses stand out by improving usability, trust, and engagement. Well-optimized user experiences reduce friction, support multilingual audiences, and guide users toward conversions—making digital platforms more effective for the UAE market.",
          },
          {
            q: "Do you offer mobile app UI UX design services for iOS and Android in Dubai?",
            a: "Yes, WD Agency provides dedicated mobile app UI UX design services for both iOS and Android platforms in Dubai. Our designs follow platform-specific guidelines, consider local user behavior, and ensure smooth, intuitive experiences across devices commonly used in the UAE.",
          },
          {
            q: "What is the typical cost of UI UX design services in Dubai?",
            a: "UI UX design costs in Dubai vary based on project scope, complexity, and the level of research and customization required. WD Agency offers transparent pricing with clear cost estimations, ensuring businesses receive tailored solutions that align with their goals and budgets.",
          },
          {
            q: "How long does a typical UI UX design project take to complete in Dubai?",
            a: "Project timelines depend on the size and complexity of the engagement. Smaller UI UX projects may take a few weeks, while larger digital platforms or product designs can take several months, including research, testing, and refinement phases.",
          },
          {
            q: "What should I look for when choosing a UI UX agency in Dubai?",
            a: "When selecting a UI UX agency in Dubai, review their portfolio, client testimonials, and local experience. A strong agency should demonstrate a clear design process, understanding of UAE user behavior, and the ability to connect design decisions to real business objectives.",
          },
          {
            q: "Do you provide UI UX audit services for existing digital products in Dubai?",
            a: "Yes, WD Agency offers comprehensive UI UX audit services for existing websites, apps, and digital platforms in Dubai. Our audits identify usability issues, conversion barriers, and improvement opportunities, supported by actionable recommendations.",
          },
          {
            q: "How does WD Agency ensure that designs are culturally relevant for users in Dubai?",
            a: "We incorporate cultural sensitivity by researching local user expectations, language preferences, visual norms, and interaction patterns. By aligning design choices with Dubai’s diverse audience and business environment, WD Agency delivers UI UX solutions that feel familiar, trustworthy, and effective for UAE users.",
          },
        ]}
      />
      <CommonCtaSection
        imageUrl={ContactImage}
        title="Get a Free UI UX Design Consultation"
        subtitle="Take the first step toward creating impactful digital experiences with WD Agency. Contact us today to request a quote or schedule a consultation, and discover how our UI UX expertise can help your business stand out and grow in Dubai and across the UAE."
      />
    </>
  );
};

export default page;
