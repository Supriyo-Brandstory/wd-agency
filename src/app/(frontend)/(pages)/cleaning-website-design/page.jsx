import React from "react";
import CommonBanner2 from "../../component/pages/common/CommonBanner2";
import imagebanner from "@/app/(frontend)/assets/images/cleaning-website-design/banner.webp";
import CommonIntroduction from "../../component/pages/common/CommonIntroduction";
import imageintro1 from "@/app/(frontend)/assets/images/cleaning-website-design/intro-1.webp";
import imageintro2 from "@/app/(frontend)/assets/images/cleaning-website-design/intro-2.webp";
import CommonWhyMetter from "../../component/pages/common/CommonWhyMetter";
import imagewhymetter from "@/app/(frontend)/assets/images/cleaning-website-design/why.webp";
import CommonIndustries from "../../component/pages/common/CommonIndustries";
import imageService1 from "@/app/(frontend)/assets/images/cleaning-website-design/service-1.webp";
import imageService2 from "@/app/(frontend)/assets/images/cleaning-website-design/service-2.webp";
import imageService3 from "@/app/(frontend)/assets/images/cleaning-website-design/service-3.webp";
import imageService4 from "@/app/(frontend)/assets/images/cleaning-website-design/service-4.webp";
import imageService5 from "@/app/(frontend)/assets/images/cleaning-website-design/service-5.webp";
import imageService6 from "@/app/(frontend)/assets/images/cleaning-website-design/service-6.webp";
import CommonWhyWebsiteDevelopment from "../../assets/style/common/CommonWhyWebsiteDevelopment";
import imagewhydevelopment from "@/app/(frontend)/assets/images/cleaning-website-design/why-choose.webp";
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
        alt={"Cleaning Company Web Design Agency in Dubai, UAE"}
        heding={"Cleaning Company Web Design in Dubai, UAE"}
        subtitle={
          "We build high-converting websites for cleaning service providers that showcase professionalism, <br>streamline bookings, and attract more domestic and commercial clients in Dubai."
        }
      />

      <CommonIntroduction
        heding={"Cleaning Company Website Design & Development"}
        text1={` <p>In Dubai's fast-paced metropolitan lifestyle, demand for reliable cleaning services is higher than ever. Whether your firm specializes in residential maid services, commercial office cleaning, or industrial sanitation, a professional website is your most powerful marketing tool. It serves as a 24/7 storefront that validates your credibility and makes it easy for busy clients to hire you.</p>
                 <p>Modern clients in the UAE look for cleaning companies that offer transparent pricing, easy online booking, and visible proof of quality. A well-designed website helps you transition from a simple service provider to a trusted brand, allowing you to stand out in a crowded marketplace and capture high-value contracts.</p>
                    `}
        text2={`  <p>A successful cleaning website goes beyond basic information delivery it incorporates interactive quote calculators, real-time scheduling tools, and customer review sections that build immediate trust. We focus on creating digital platforms that simplify the customer journey from the first click to a recurring booking.</p>
                <p><a href='/'>Website Development Agency</a> specializes in engineering high-performing websites for cleaning and facility management companies across Dubai. we design responsive, search-optimized platforms that highlight your service quality and drive consistent business growth.</p>
                    `}
        imageintro1={imageintro1}
        alt1={
          "Specialized Cleaning Website Design in Dubai - Website Development Agency"
        }
        imageintro2={imageintro2}
        alt2={
          "Cleaning Web Development Company UAE - Website Development Agency"
        }
      />

      <DemoTemplate
        title="Cleaning Website Designs- Explore Templates"
        description="Professional cleaning and facility management website designs in Dubai, starting at AED 1,500. Launch your <br>service business online quickly with high-converting, responsive designs. Get fast delivery today."
        activetaburl={"corporate"}
      />

      <CommonIndustries
        heding={"Cleaning Company Website Design- Our Services"}
        subheding="We provide comprehensive digital solutions designed to help your cleaning business grow in the UAE."
        services={[
          {
            title: "Online Booking & Scheduling Systems",
            desc: "Empower your clients to book cleaning sessions and select service packages directly through your website. Our integrated calendars allow for real-time scheduling, helping you manage your team efficiently while providing instant confirmation to your Dubai customers.",
            img: imageService1,
            alt: "Cleaning Service Booking Systems Dubai",
            btnname: "Contact Us",
            link: "/contact-us",
          },
          {
            title: "Instant Quote Calculators",
            desc: "Provide immediate pricing based on cleaning type, property size, and frequency. Our custom quote tools help qualify leads instantly and reduce administrative time spent on manual estimates, improving conversion rates for your commercial and residential services.",
            img: imageService2,
            alt: "Cleaning Quote Calculator Tool",
            btnname: "Contact Us",
            link: "/contact-us",
          },
          {
            title: "Service Package Showcases",
            desc: "Detail your various cleaning packages from move-in/move-out cleans to specialized office sanitation. We design clear, comparison-style layouts that help potential clients understand the value of each tier, encouraging upselling and recurring booking commitments.",
            img: imageService3,
            alt: "Cleaning Service Package Design",
            btnname: "Contact Us",
            link: "/contact-us",
          },
          {
            title: "Customer Portals & Subscription Management",
            desc: "Build long-term relationships with dashboards where clients can manage recurring bookings, access invoices, and request specialized services. These portals simplify account management for your large-scale commercial clients in Dubai and Abu Dhabi.",
            img: imageService4,
            alt: "Cleaning Company Client Portals",
            btnname: "Contact Us",
            link: "/contact-us",
          },
          {
            title: "Trust-Building Gallaries & Reviews",
            desc: "Showcase the quality of your work with 'Before & After' galleries and integrated review platforms. We highlight your team’s professionalism and safety standards through visual storytelling, making your firm the first choice for security-conscious households.",
            img: imageService5,
            alt: "Cleaning Transformation Portfolio",
            btnname: "Contact Us",
            link: "/contact-us",
          },
          {
            title: "Localized SEO for Service Companies",
            desc: "Dominate local searches for 'cleaning services in Dubai Marina' or 'office cleaning in Business Bay.' We optimize your site for area-specific keywords, ensuring that customers in your service zones find you exactly when they need a clean.",
            img: imageService6,
            alt: "Local SEO for Cleaning Companies Dubai",
            btnname: "Contact Us",
            link: "/contact-us",
          },
        ]}
      />

      <CommonWhyMetter
        imagewhymetter={imagewhymetter}
        alt={
          "Trusted Cleaning Website Design for UAE Companies - Website Development Agency"
        }
        heding={"Trusted Cleaning Website Design for UAE-based Companies"}
        subheding={
          "We design cleaning websites with a deep understanding of service industry dynamics in the UAE. From operational efficiency to brand trust, every element is engineered to capture leads."
        }
        lefttext={`  <p><b>Built for Conversion:</b> Every website is engineered to turn visitors into booked jobs. We focus on clear calls-to-action, trust signals, and a friction-free booking process that respects the modern Dubai customer's need for speed and reliability.</p>
                        <p><b>Dynamic & Professional Image:</b> We help you project a clean, organized, and reliable brand image. Our designs use crisp aesthetics and professional layouts to communicate the high standards of your cleaning crews from the first impression.</p>
                        `}
        righttext={`<p><b>Ongoing Support & Expansion:</b> As your cleaning fleet grows, so should your website. We build scalable platforms that can easily accommodate new service areas, additional cleaning types, and marketing campaigns to keep your business moving forward.</p>
                            `}
      />
      <CommonProtfolio />

      <DevelopmentServices />

      <CommonCostBreakdown
        heading="Cleaning Website Design Dubai- Cost Breakdown"
        description="Specialized cleaning service website design and development solutions designed to showcase your professionalism and drive bookings in the UAE."
      />
      <IndustryGrid />

      <CommonWhyWebsiteDevelopment
        heding={"Cleaning Website Solutions for Diverse Service Focus"}
        subheding={
          "We build cleaning websites that adapt to the specific focus of your company. Every platform is planned around your service catalog, target audience, and operational workflow."
        }
        lefttext={`<p><b>Residential Maid Services:</b> Our designs focus on approachability, trustworthiness, and easy recurring booking options, making it simple for families and busy professionals to invite your team into their homes.</p>
                                <p><b>Commercial & Office Cleaning:</b> For B2B focused firms, we emphasize reliability, insurance coverage, and professional management, using structured layouts that appeal to facility managers and business owners. </p>
                                <p><b>Industrial & Post-Construction:</b> Websites for specialized cleaning focus on technical capability, safety certifications, and large-scale project handling, showcasing your ability to tackle the toughest jobs. </p>
                                <p><b>Niche Specialized Cleaning:</b> Whether you focus on pools, windows, or high-end upholstery, we create tailored content and visual galleries that highlight your specialized skills and material knowledge.</p>
                            `}
        rightimage={imagewhydevelopment}
        alt={
          "Why Choose Website Development Agency for Cleaning Website Development"
        }
      />

      <Team />

      <CommonClientTestimonials
        testimonials={[
          {
            id: 1,
            name: "John Carter",
            text: "Website Development Agency built a site that finally matches the professionalism of our cleaning crew. Our online bookings have tripled in three months.",
            image: imagetestimonial1,
          },
          {
            id: 2,
            name: "Fatima Al-Sayed",
            text: "The integration of the quote calculator has been a game-changer. We spend much less time on the phone and more time managing our cleaning teams.",
            image: imagetestimonial2,
          },
          {
            id: 3,
            name: "Michael Chen",
            text: "High-quality design and exceptional SEO performance. We are now the top-ranking cleaning service in our target Dubai neighborhoods. Outstanding work!",
            image: imagetestimonial3,
          },
        ]}
      />

      <LocationService activeLocation="dubai" />

      <CommonFaqSection
        faqs={[
          {
            q: "How long does it take to create a cleaning company website?",
            a: "A high-performing cleaning website usually takes 3 to 6 weeks, depending on whether you require advanced features like real-time booking and invoice management.",
          },
          {
            q: "Can my website include price calculators for different room sizes?",
            a: "Yes, we can build custom interactive calculators that provide instant quotes based on number of rooms, square footage, or specific service requirements.",
          },
          {
            q: "Do you provide SEO for cleaning companies in Dubai?",
            a: "Absolutely. We specialize in area-specific Local SEO to ensure your cleaning company ranks prominently when customers search for services in their specific Dubai district.",
          },
          {
            q: "Can I manage the booking schedule myself?",
            a: "Yes, we providing you with a user-friendly management dashboard where you can view all bookings, assign teams, and manage your cleaning calendar in real-time.",
          },
          {
            q: "Is it possible to accept online payments on the website?",
            a: "Yes, we can integrate secure payment gateways (Stripe, PayPal, etc.) so your clients can pay for their cleaning services safely during the booking process.",
          },
          {
            q: "How do you make our company look trustworthy online?",
            a: "We emphasize trust through the use of client testimonials, professional team photos, safety certification badges, and secure, high-quality website design.",
          },
        ]}
      />
    </>
  );
};

export default page;
