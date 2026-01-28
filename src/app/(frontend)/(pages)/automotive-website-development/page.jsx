import React from "react";
import CommonBanner2 from "../../component/pages/common/CommonBanner2";
import imagebanner from "@/app/(frontend)/assets/images/automotive-website-development/banner.webp";
import CommonIntroduction from "../../component/pages/common/CommonIntroduction";
import imageintro1 from "@/app/(frontend)/assets/images/automotive-website-development/intro-1.webp";
import imageintro2 from "@/app/(frontend)/assets/images/automotive-website-development/intro-2.webp";
import CommonWhyMetter from "../../component/pages/common/CommonWhyMetter";
import imagewhymetter from "@/app/(frontend)/assets/images/automotive-website-development/why.webp";
import CommonIndustries from "../../component/pages/common/CommonIndustries";
import imageService1 from "@/app/(frontend)/assets/images/automotive-website-development/service-1.webp";
import imageService2 from "@/app/(frontend)/assets/images/automotive-website-development/service-2.png";
import imageService3 from "@/app/(frontend)/assets/images/automotive-website-development/service-3.webp";
import imageService4 from "@/app/(frontend)/assets/images/automotive-website-development/service-4.webp";
import imageService5 from "@/app/(frontend)/assets/images/automotive-website-development/service-5.webp";
import imageService6 from "@/app/(frontend)/assets/images/automotive-website-development/service-6.webp";
import imageService7 from "@/app/(frontend)/assets/images/automotive-website-development/service-7.webp";
import imageService9 from "@/app/(frontend)/assets/images/automotive-website-development/service-9.png";
import CommonWhyWebsiteDevelopment from "../../assets/style/common/CommonWhyWebsiteDevelopment";
import imagewhydevelopment from "@/app/(frontend)/assets/images/automotive-website-development/why-choose.webp";
import CommonClientTestimonials from "../../component/pages/common/CommonClientTestimonials";
import imagetestimonial1 from "@/app/(frontend)/assets/images/testimonial/testimonial-1.webp";
import imagetestimonial2 from "@/app/(frontend)/assets/images/testimonial/testimonial-2.webp";
import imagetestimonial3 from "@/app/(frontend)/assets/images/testimonial/testimonial-3.webp";
import CommonFaqSection from "../../component/pages/common/CommonFaqSection";
import DevelopmentServices from "../../component/pages/home/DevelopmentServices";
import Team from "../../component/pages/about/Team";
import CommonProtfolio from "../../component/pages/common/CommonProtfolio";
import CommonCostBreakdown from "../../component/pages/common/CommonCostBreakdown";
import LocationService from "../../component/pages/common/LocationService";

const page = () => {
  return (
    <>
      <CommonBanner2
        bg={imagebanner}
        alt={"Automotive Web Design in Dubai, UAE"}
        heding={"Automotive Web Design in Dubai, UAE"}
        subtitle={
          "Drive your automotive business forward in Dubai, UAE with a cutting-edge websites <br>designed to attract buyers, showcase vehicles, and generate qualified leads."
        }
      />

      <CommonIntroduction
        heding={"Automotive Website Design Solutions"}
        text1={` <p>The UAE automotive industry is increasingly shaped by digital-first buying behaviour, where customers research vehicles, compare prices, and evaluate brands online before making contact. With demand spanning luxury cars, electric vehicles, and the fast-growing used-car segment, automotive businesses must meet rising expectations for transparency and digital convenience.</p>
                 <p>As online marketplaces and automotive e-commerce platforms continue to grow across Dubai and the wider UAE, having a strong standalone website is essential. Dealerships, service centres, and automotive brands need platforms that establish credibility, support lead generation, and clearly present inventory and services. A well-structured website helps businesses stand out in a crowded market while capturing enquiries from high-intent buyers.</p>
                    `}
        text2={`  <p>Websites that lack performance, clarity, or modern functionality often result in lost opportunities. Today’s customers expect premium visuals, detailed vehicle information, smooth navigation, and mobile-first experiences. A high-quality automotive website acts as a 24/7 digital showroom, allowing businesses to showcase vehicles, services, and brand value while guiding users toward test drives, service bookings, or enquiries.</p>
                <p>At Website Development Agency, we deliver custom automotive website solutions built specifically for the UAE market. Our services include mobile-first design, fast-loading interfaces, structured inventory presentation, and conversion-focused layouts tailored to dealerships and automotive businesses. We focus on performance, usability, and scalability- ensuring your website not only looks premium but also drives measurable results, supports business growth.</p>
                    `}
        imageintro1={imageintro1}
        alt1={
          "Automotive Website Design Solutions in Dubai - Website Development Agency"
        }
        imageintro2={imageintro2}
        alt2={
          "Automotive Web Development Company UAE - Website Development Agency"
        }
      />

      <CommonIndustries
        heding={"Our Automotive Website Development Services"}
        subheding="At Website Development Agency, we specialize in delivering high-impact digital solutions specifically engineered for the automotive industry in Dubai."
        services={[
          {
            title: "Custom Website Design",
            desc: "We design sleek, modern automotive websites aligned with your brand identity, showcasing vehicles and services professionally while delivering buyer-friendly navigation, strong visual appeal, and market relevance tailored specifically for the UAE automotive landscape.",
            img: imageService1,
            alt: "Custom Automotive Website Design Dubai",
            btnname: "Contact Us",
            link: "/contact-us",
          },
          {
            title: "Vehicle Listing & Inventory Management",
            desc: "Our inventory management systems enable effortless control and display of large vehicle listings with advanced filters such as make, model, year, price, and features, ensuring fast browsing and seamless user experience across hundreds of vehicles.",
            img: imageService5,
            alt: "Automotive Inventory Management System",
            btnname: "Contact Us",
            link: "/contact-us",
          },
          {
            title: "CRM & Leads Connectivity",
            desc: "We maximize lead conversions through strategically placed enquiry forms and seamless CRM integrations, including Salesforce, HubSpot, and automotive DMS platforms, enabling efficient lead tracking, follow-ups, and transparent deal management for sales teams.",
            img: imageService3,
            alt: "Automotive CRM Integration Dubai",
            btnname: "Contact Us",
            link: "/contact-us",
          },
          {
            title: "Virtual Showroom & 3D Integration",
            desc: "Immersive virtual showrooms featuring 360° views, interactive walkthroughs, and high-quality videos allow buyers to explore vehicles digitally, boosting engagement, building purchase confidence, and reducing unnecessary showroom visits.",
            img: imageService4,
            alt: "Virtual Automotive Showroom Design",
            btnname: "Contact Us",
            link: "/contact-us",
          },
          {
            title: "Online Booking & Appointment Systems",
            desc: "Integrated online booking systems allow customers to schedule test drives, service appointments, or consultations directly from the website, improving operational efficiency while offering convenience and faster response times for automotive businesses.",
            img: imageService2,
            alt: "Automotive Booking Systems",
            btnname: "Contact Us",
            link: "/contact-us",
          },
          {
            title: "Multi-Language & Multi-Currency Options",
            desc: "We implement multi-language and multi-currency functionality, including Arabic and English support, enabling automotive businesses to serve the UAE’s diverse population and international investors while presenting a professional and globally accessible digital presence.",
            img: imageService6,
            alt: "Multi-Language Automotive Website Development",
            btnname: "Contact Us",
            link: "/contact-us",
          },
          {
            title: "Mobile & Tablet Optimized Designs",
            desc: "Our mobile-first, responsive designs ensure flawless browsing across smartphones and tablets, delivering fast loading speeds, clear readability, and intuitive navigation that reduce bounce rates and keep automotive buyers engaged on all devices.",
            img: imageService7,
            alt: "Mobile Optimized Automotive Website",
            btnname: "Contact Us",
            link: "/contact-us",
          },
          {
            title: "Technology Stack & Integrations",
            desc: "We leverage advanced technologies including WordPress, Magento, PHP, .NET, ReactJS, NodeJS, and Laravel, integrating payment gateways, CRMs, DMS platforms, virtual showroom tools, and finance calculators for seamless automotive operations.",
            img: imageService1, 
            alt: "Automotive Technology Stack Dubai",
            btnname: "Contact Us",
            link: "/contact-us",
          },
          {
            title: "Post-Launch Support & Maintenance",
            desc: "Our post-launch support includes regular updates, security enhancements, bug fixes, performance optimization, and feature upgrades, ensuring your automotive website remains secure, scalable, and future-ready in a fast-evolving digital market.",
            img: imageService9,
            alt: "Automotive Website Maintenance Dubai",
            btnname: "Contact Us",
            link: "/contact-us",
          },
        ]}
      />

            <CommonWhyMetter
        imagewhymetter={imagewhymetter}
        alt={
          "Automotive Website Development That Delivers Results"
        }
        heding={"Automotive Website Development That Delivers Results"}
        subheding={
          "We build automotive websites that drive real business growth in the UAE’s fast-paced digital market. Each project focuses on usability, performance, and brand presence- creating a strong first impression while guiding visitors toward meaningful actions."
        }
        lefttext={`  <p><b>Performance-Focused Development:</b> Our development process prioritises speed, structure, and functionality. From clean layouts and intuitive navigation to optimised loading performance, we ensure your website delivers a smooth experience across all devices. Automotive-specific features such as structured vehicle listings, service pages, and scalable content frameworks are built to support long-term growth.</p>
                        <p><b>SEO-Ready Architecture:</b> Visibility plays a critical role in automotive success. We develop websites with SEO-ready foundations, ensuring search engines can easily crawl, index, and rank your pages. Combined with mobile-first design and conversion-focused layouts, your website is positioned to attract high-intent traffic and convert visitors into qualified leads.</p>
                        `}
        righttext={`<p><b>Industry Recognition:</b> Backed by industry recognition and a results-driven team, we consistently deliver digital solutions that meet high performance standards. Our commitment to quality, innovation, and client success has earned recognition from leading industry platforms- reflecting the trust businesses place in us to build reliable, growth-oriented automotive websites.</p>
                            `}
      />
      <CommonProtfolio />
      
      <DevelopmentServices />

          <CommonCostBreakdown
        heading="Automotive Website Design Dubai- Cost Breakdown"
        description="Choose automotive website design and development solution designed to strengthen your digital presence and support sustainable growth in the UAE."
      />

      <CommonWhyWebsiteDevelopment
        heding={
          "From Showrooms to Rentals: Automotive Websites We Build"
        }
        subheding={
          "In today’s UAE automotive market, a professional, feature-rich website is essential for connecting with buyers, renters, and car enthusiasts. We design customised digital solutions that combine aesthetics, usability, and functionality."
        }
        lefttext={`<p><b>Car Dealership Websites:</b> Our dealership websites feature dynamic inventory management, showing all vehicles in real time. Customers can browse cars by make, model, or price, compare features, and access detailed specifications to make confident decisions.</p>
                                <p><b>Car Rental Platforms:</b> For car rental businesses, we integrate secure, easy-to-use booking systems that allow customers to reserve vehicles online effortlessly. Visitors can view available cars, choose rental durations, and complete their bookings smoothly on any device.</p>
                                <p><b>Auto Trader Websites:</b> We design platforms for auto traders that make buying and selling vehicles easier than ever. With advanced search filters, product categorisation, and lead capture tools, customers can quickly find the cars they want while you connect with potential buyers efficiently.</p>
                                <p><b>Service & Detailing Websites:</b> Our websites for car service centres and detailing businesses are designed to showcase your expertise professionally. Visitors can explore your services, browse high-quality photo galleries, and learn about your offerings with clear, accessible information.</p>
                            `}
        rightimage={imagewhydevelopment}
        alt={
          "Why Choose Website Development Agency for Automotive Website Development"
        }
      />

      <Team />

      <CommonClientTestimonials
        testimonials={[
          {
            id: 1,
            name: "Marco D.",
            text: "The new website completely changed how we handle our luxury car inventory. The 360 virtual tours are a massive hit with our international clients.",
            image: imagetestimonial1,
          },
          {
            id: 2,
            name: "Sarah J.",
            text: "Sales leads jumped by 40% in just two months. The integration with our DMS was flawless and saved us countless hours of manual work.",
            image: imagetestimonial2,
          },
          {
            id: 3,
            name: "Khalid A.",
            text: "Highly professional team. They understood the Dubai market perfectly and delivered a high-performance site that looks incredible on mobile.",
            image: imagetestimonial3,
          },
        ]}
      />

      <LocationService activeLocation="dubai" />

      <CommonFaqSection
        faqs={[
          {
            q: "How Much Does an Automotive Website Cost in Dubai?",
            a: "Price depends on features, scale, and customization. Basic sites are less costly, while advanced websites with CRM integrations, virtual showrooms, online booking, and multi-lingual capabilities require a larger investment. Custom packages ensure payment only for needed services.",
          },
          {
            q: "Can Your Website Integrate With Our Existing Dealer Management System (DMS)?",
            a: "Yes, integration with various existing DMS and other third-party software is a specialization to ensure seamless operation and data synchronization.",
          },
          {
            q: "Do You Provide Virtual Showroom and 360° Vehicle View Integration?",
            a: "Yes, cutting-edge virtual showroom features and 360° interactive vehicle views are implemented for an immersive and engaging customer experience.",
          },
          {
            q: "How Long Does It Take to Build an Automotive Website?",
            a: "Timelines vary based on complexity and features. Basic dealership websites may take 4-8 weeks, while comprehensive platforms with custom integrations could take 3-6 months or more. A detailed project timeline is provided after initial consultation.",
          },
          {
            q: "Can I Easily Update My Vehicle Inventory Without Technical Skills?",
            a: "Yes, websites are built with user-friendly Content Management Systems (CMS) allowing easy addition, removal, and updating of vehicle listings, images, prices, and specifications without technical expertise.",
          },
          {
            q: "Do You Offer Ongoing Maintenance and Support for Automotive Websites?",
            a: "Yes, comprehensive post-launch support and maintenance packages are offered, including security updates, performance monitoring, bug fixes, and feature enhancements.",
          },
          {
            q: "Can the Website Support Online Service Booking and Appointment Scheduling?",
            a: "Yes, robust online service booking and appointment scheduling systems can be integrated for customers to easily book test drives, maintenance appointments, or consultations.",
          },
          {
            q: "Is the Website Optimized for Mobile Users?",
            a: "All automotive websites are designed with a mobile-first approach, ensuring responsive layouts and optimized performance across all devices, including smartphones and tablets.",
          },
          {
            q: "Do You Assist With SEO and Digital Marketing for Automotive Businesses?",
            a: "Yes, comprehensive digital marketing services tailored for the automotive industry are offered, including SEO optimization, PPC campaign management, social media integration, and content marketing strategies.",
          },
        ]}
      />
    </>
  );
};

export default page;
