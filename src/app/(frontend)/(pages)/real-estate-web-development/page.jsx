import React from "react";
import CommonBanner2 from "../../component/pages/common/CommonBanner2";
import imagebanner from "@/app/(frontend)/assets/images/real-estate-website/real-estate-website.webp";
import CommonIntroduction from "../../component/pages/common/CommonIntroduction";
import imageintro1 from "@/app/(frontend)/assets/images/real-estate-website/real-estate-websites.webp";
import imageintro2 from "@/app/(frontend)/assets/images/real-estate-website/real-estate-in-dubai.webp";
import CommonWhyMetter from "../../component/pages/common/CommonWhyMetter";
import imagewhymetter from "@/app/(frontend)/assets/images/real-estate-website/real-estate-why.webp";
import CommonIndustries from "../../component/pages/common/CommonIndustries";
import imageService1 from "@/app/(frontend)/assets/images/real-estate-website/custom-website-design.webp";
import imageService2 from "@/app/(frontend)/assets/images/real-estate-website/property-listing-web.webp";
import imageService3 from "@/app/(frontend)/assets/images/real-estate-website/idx-mlx-web-design.webp";
import imageService4 from "@/app/(frontend)/assets/images/real-estate-website/virtual-tour.webp";
import imageService5 from "@/app/(frontend)/assets/images/real-estate-website/crm-solutions.webp";
import imageService6 from "@/app/(frontend)/assets/images/real-estate-website/multi-currency-language.webp";
import imageService7 from "@/app/(frontend)/assets/images/real-estate-website/mobile-tablet-optimization.webp";
import imageService8 from "@/app/(frontend)/assets/images/real-estate-website/maintenance-and-support.webp";
import react from "@/app/(frontend)/assets/images/reacticon.svg";
import nodejs from "@/app/(frontend)/assets/images/nodejsicon.svg";
import laravel from "@/app/(frontend)/assets/images/laravelicon.svg";
import wordpress from "@/app/(frontend)/assets/images/wordpressicon.svg";
import flutter from "@/app/(frontend)/assets/images/fluttericon.svg";
import reactnative from "@/app/(frontend)/assets/images/reactnativeicon.svg";
import php from "@/app/(frontend)/assets/images/phpicon.svg";
import python from "@/app/(frontend)/assets/images/pythonicon.svg";
import CommonWhyWebsiteDevelopment from "../../assets/style/common/CommonWhyWebsiteDevelopment";
import imagewhydevelopment from "@/app/(frontend)/assets/images/real-estate-website/why-wd-agency.webp";
import CommonClientTestimonials from "../../component/pages/common/CommonClientTestimonials";
import imagetestimonial1 from "@/app/(frontend)/assets/images/testimonial/testimonial-1.webp";
import imagetestimonial2 from "@/app/(frontend)/assets/images/testimonial/testimonial-2.webp";
import imagetestimonial3 from "@/app/(frontend)/assets/images/testimonial/testimonial-3.webp";
import CommonFaqSection from "../../component/pages/common/CommonFaqSection";
import DevelopmentServices from "../../component/pages/home/DevelopmentServices";
import Team from "../../component/pages/about/Team";
import LocationService from "../../component/pages/common/LocationService";
import CommonTechnologyStack from "../../component/pages/common/CommonTechnologyStack";
import CommonProtfolio from "../../component/pages/common/CommonProtfolio";
import SubNav from "../../component/pages/common/SubNav";
import CommonCostBreakdown from "../../component/pages/common/CommonCostBreakdown";
import DemoTemplate from "../../component/pages/home/DemoTemplate";
import IndustryGrid from "../../component/pages/common/IndustryGrid";
import CommonBlogSlider from "../../component/pages/common/CommonBlogSlider";

const page = () => {
  return (
    <>
      <CommonBanner2
        bg={imagebanner}
        alt={"Real Estate Website Development Agency in Dubai"}
        heding={
          "Best-Rated Real Estate Website <br>Design Agency in Dubai, UAE"
        }
        subtitle={
          "We're the UAE's most trusted real estate web design agency, delivering <br>award-winning websites that turn visitors into buyers. Our high-converting property <br>portals have earned us top industry recognition and measurable results for developers <br>and agencies across the Emirates."
        }
      />
      <SubNav
        title="Real Estate"
        items={[
          { name: "PHP", link: "/platforms/php-website-development" },
          {
            name: "Laravel",
            link: "/platforms/laravel-website-development",
          },
          {
            name: "WordPress",
            link: "/platforms/wordpress-website-development",
          },
          { name: "ReactJS", link: "/platforms/react-js-website-development" },
          { name: "NodeJS", link: "/platforms/nodejs-website-development" },
          { name: "Angular", link: "/platforms/angular-website-development" },
          { name: "Drupal", link: "/platforms/drupal-website-development" },
          { name: "Shopify", link: "/platforms/shopify-website-development" },
          {
            name: "WooCommerce",
            link: "/platforms/woo-commerce-website-development",
          },
        ]}
      />
      <CommonIntroduction
        heding={"No. 1 Real Estate Website Development Agency in UAE"}
        text1={` <p>The UAE property market is booming with new developments, driven by rapid population growth, rising luxury demand, and accelerated PropTech adoption. At Website Development Agency, we lead the way as the premier partner for cutting-edge real estate digital platforms in Dubai and the UAE. Our real estate website solutions are designed to enhance property visibility, streamline lead generation, and support scalable growth.</p>
                    <p>In a dynamic landscape marked by record transaction volumes, sustained mid-single-digit price growth into 2026, and a shift toward data-driven, tech-enabled buying experiences, your real estate business needs more than a basic site- it requires a high-performance, immersive digital gateway that captures high-value leads from local end-users, global investors, and ultra-luxury seekers.</p>
                    `}
        text2={`  <p>We design premium real estate websites and property portals tailored for the Dubai and UAE market. Our on-demand websites are fast, bilingual (English & Arabic), mobile-first, and built to showcase properties through rich visuals, smart search, and virtual tours. With strong lead generation, local SEO, and secure architecture, we help real estate brands attract buyers, generate qualified enquiries, and convert interest into sales.</p>
                <p>At <a href='/'>Website Development Agency</a>, we serve the full spectrum of UAE real estate: luxury developers showcasing iconic projects, boutique agencies handling premium resale, investment firms targeting off-plan opportunities, property management companies streamlining rentals, and B2B platforms for commercial spaces. We are among the most trusted real estate website developers in Dubai, UAE. </p>
                    `}
        imageintro1={imageintro1}
        alt1={
          "Real Estate Website Design Services in Dubai - Website Development Agency"
        }
        imageintro2={imageintro2}
        alt2={
          "Real Estate Website Development Company in UAE - Website Development Agency"
        }
      />
      <DemoTemplate
        title="Real Estate Website Designs- Explore Templates"
        description="Affordable real estate website design in Dubai, starting at AED 1,500. Launch your property website quickly <br>with modern, responsive designs. Get fast delivery today."
        activetaburl={"real-estate"}
      />
      <CommonWhyMetter
        imagewhymetter={imagewhymetter}
        alt={"Elevate Your Property Business with a Website That Sells"}
        heding={"Elevate Your Property Business with a Website That Sells"}
        subheding={
          "Your real estate website becomes your most powerful sales tool, capturing attention from serious local buyers, international investors, and luxury property seekers the moment they land on your page. With stunning visuals and effortless navigation, visitors instantly see why your properties stand out in Dubai competitive market."
        }
        lefttext={`  <p><b>Showcase Properties Like Never Before:</b> Transform how buyers experience your listings with cinematic photography, immersive virtual tours, and interactive floor plans that let them explore every corner of a penthouse or villa from anywhere in the world. Properties that look exceptional online generate more inquiries, faster decisions, and premium offers.</p>
                    <p><b>Turn Visitors Into Qualified Leads:</b> Every element of your website is designed to capture buyer interest- from instant inquiry buttons and WhatsApp chat to viewing schedulers and downloadable brochures. Our smart systems identify serious prospects, track their favorite properties, and help your sales team follow up at exactly the right moment.</p>
                        `}
        righttext={`<p><b>Stay Ahead of the Competition:</b> While other agencies struggle with outdated websites, you'll command authority with a modern platform that works flawlessly on every device, loads instantly, ranks at the top of Google, and positions your brand as the premier choice for luxury real estate across the UAE.</p>
                            `}
      />

      <CommonIndustries
        heding={"Our Real Estate Website Development Services"}
        subheding="At Website Development Agency, we go beyond design, we build powerful real estate platforms that simplify property management, maximize buyer engagement, and generate leads. Our services include:"
        services={[
          {
            title: "Custom Website Design",
            desc: "We design sleek, modern layouts designed to align with your branding. As an agency or developer, your website will exude professionalism while maintaining ease of use and buyer-friendly access. All layouts are designed to showcase your properties in the most favorable way to give your business a leg up on the competition in the UAE.",
            img: imageService1,
            alt: "Custom Real Estate Website Design Services - Website Development Agency",
            btnname: "Contact Us",
            link: "/contact-us",
          },
          {
            title: "Property Listing & Management Systems",
            desc: "With enhanced tools, you can manage and display your properties effortlessly. Each listing includes features such as filters for location, pricing, and amenities, types, and are optimized  for quick browsing. This system is designed for function and ease of use, which means you can manage hundreds of listings with ease and little hassle.",
            img: imageService2,
            alt: "Property Listing and Management System - Website Development Agency",
            btnname: "Contact Us",
            link: "/contact-us",
          },
          {
            title: "IDX/MLS Integration",
            desc: "We seamlessly integrate IDX/MLS fees for live property data. We make listings automatically updated, so buyers can always access accurate, up-to-date information. This saves your time, eliminates inaccuracies, and generates client trust and a better user experience for your platform.",
            img: imageService3,
            alt: "IDX/MLS Integration Services - Website Development Agency",
            btnname: "Contact Us",
            link: "/contact-us",
          },
          {
            title: "Virtual Tours & 3D Integration",
            desc: "Engage people to your properties with immersive tours of your property. Our websites can provide 360° views and 3D walk-throughs so buyers can visualize homes, without having to physically step inside. This builds buyer confidence and decreases unnecessary visits to the property for clients and agents.",
            img: imageService4,
            alt: "Virtual Tour and 3D Integration Services - Website Development Agency",
            btnname: "Contact Us",
            link: "/contact-us",
          },
          {
            title: "Leads & CRM Connectivity",
            desc: "Maximize conversions from visitors by placing inquiry forms wherever possible, enabling them to reach you instantly, and by connecting your CRM to easily capture your leads. The process from 1st contact to closing the deal becomes more efficient and transparent.",
            img: imageService5,
            alt: "Leads and CRM Integration Services - Website Development Agency",
            btnname: "Contact Us",
            link: "/contact-us",
          },
          {
            title: "Multi-Language & Multi-Currency Options",
            desc: "With the UAE’s diverse population and worldwide investors, our websites can support multiple languages and currencies, which allows your website to be available to the entire world. The transaction and contact process reflects a level of professionalism that your local and foreign clients will appreciate. ",
            img: imageService6,
            alt: "Multi-Language and Multi-Currency Real Estate Website Development - Website Development Agency",
            btnname: "Contact Us",
            link: "/contact-us",
          },
          {
            title: "Mobile & Tablet Optimized Designs",
            desc: "Every page has a responsive layout to ensure an error-free and enjoyable experience browsing with smartphones or tablets, which is critical for on-the-go buyers. Speed and readability are optimized on each page to decrease bounce rates and retain reader engagement.",
            img: imageService7,
            alt: "Mobile Optimized Real Estate Website Design - Website Development Agency",
            btnname: "Contact Us",
            link: "/contact-us",
          },
          {
            title: "Maintenance & Support",
            desc: "Our commitment to your website is ongoing. We will continue to provide updates, bug fixes, and new features as needed to keep your website running wholly optimally with respect to performance and security. With our continual proactive monitoring, your online platform will be future-ready and market-ready.",
            img: imageService8,
            alt: "Real Estate Website Maintenance and Support Services - Website Development Agency",
            btnname: "Contact Us",
            link: "/contact-us",
          },
        ]}
      />

      <CommonTechnologyStack
        heding={"Our Website Development Technology Stack"}
        subheding={
          "We possess deep expertise in all frontend and backend website development technologies."
        }
        techData={[
          {
            name: "React",
            image: react,
            gradient: "linear-gradient(180deg, #61DAFB 0%, #03C9FF 118.42%)",
            Link: "/platforms/react-js-website-development",
          },
          {
            name: "Node.js",
            image: nodejs,
            gradient: "linear-gradient(180deg, #6CC04A 16.44%, #539E43 60.27%)",
            Link: "/platforms/nodejs-website-development",
          },
          {
            name: "Laravel",
            image: laravel,
            gradient: "linear-gradient(180deg, #FF6960 16.44%, #FF2D20 60.27%)",
            Link: "/platforms/laravel-website-development",
          },
          {
            name: "WordPress",
            image: wordpress,
            gradient: "linear-gradient(180deg, #4A87A3 16.44%, #21759B 60.27%)",
            Link: "/platforms/wordpress-website-development",
          },
          {
            name: "Flutter",
            image: flutter,
            gradient: "linear-gradient(180deg, #45D1FD 16.44%, #02539A 100%)",
            Link: "/platforms/flutter-website-development",
          },
          {
            name: "React Native",
            image: reactnative,
            gradient: "linear-gradient(180deg, #61DAFB 0%, #03C9FF 118.42%)",
            Link: "/platforms/react-native-website-development",
          },
          {
            name: "PHP",
            image: php,
            gradient: "linear-gradient(180deg, #697EBA 17.27%, #6E81B6 73.33%)",
            Link: "/platforms/php-website-development",
          },
          {
            name: "Python",
            image: python,
            gradient:
              "linear-gradient(180deg, #387EB8 -73.67%, #FFC331 27.62%)",
            Link: "/platforms/python-website-development",
          },
        ]}
      />

      <CommonCostBreakdown
        heading="Real Estate Website Cost Breakdown"
        description="Select the best real estate website design and Development package based on the features, performance, and growth level you need."
      />
      <IndustryGrid />

      <DevelopmentServices />

      <CommonWhyWebsiteDevelopment
        heding={"Designed for Every Role in the UAE Real Estate Market"}
        subheding={
          "In Dubai and UAE the real estate sector includes a wide range of professionals from independent consultants to large development firms- and each requires a website that reflects credibility, expertise, and local market knowledge. We build custom real estate websites that adapt to the specific needs of every property-focused business."
        }
        lefttext={`
          <p><b>Who We Build For</b></p>

          <p><b>Real Estate Agents & Consultants</b><br>
          High-performance websites that showcase listings, improve local visibility, and capture qualified leads through integrated enquiry systems and CRM-ready workflows.</p>

          <p><b>Luxury Property & Investment Brands</b><br>
          Premium digital experiences with refined design, immersive property showcases, and branding tailored to attract high-net-worth buyers and global investors.</p>

          <p><b>Developers, Brokerages & Commercial Firms</b><br>
          Scalable platforms built to manage projects, agents, and offices- featuring structured content, investor-focused presentation, and long-term growth flexibility.</p>

          <p><b>Property Management Companies & Startups</b><br>
          Efficient, easy-to-manage websites with tenant interaction tools, service request systems, and fast-launch capabilities designed to scale as the business grows.</p>

          <p><b>Why It Matters</b><br>
          Each website is strategically developed to strengthen your brand presence, simplify client interactions, and support long-term success in the competitive UAE property market.</p>
        `}
        rightimage={imagewhydevelopment}
        alt={
          "Why Choose Website Development Agency for Real Estate Website Development"
        }
      />

      <CommonProtfolio />

      <CommonClientTestimonials
        testimonials={[
          {
            id: 1,
            name: "Daniel R",
            text: "Website Development Agency transformed our online presence. Within 3 months, our sales doubled thanks to their Shopify development expertise.",
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

      <Team />
      <LocationService activeLocation="dubai" />
      <CommonBlogSlider category="Real Estate" />

      <CommonFaqSection
        faqs={[
          {
            q: "How Much Does a Real Estate Website Cost?",
            a: "The price of our services is dependent upon features, scale and customization. While basic sites may not cost as much to build, advanced websites that include CRM integrations, multi-lingual capability and booking engines, will take a larger investment of cost and/or time. Also, we have custom packages, so you are only paying for what you truly need.",
          },
          {
            q: "Do You Provide IDX/MLS Integration?",
            a: "Yes, we utilize IDX/MLS feeds to automatically aggregate the most up-to-date property listing directly into your website: this gives buyers instant access to accurately displayed, real-time availability, while generating trust, with the data being auto-synchronized.",
          },
          {
            q: "Can The Site Support Multiple Languages and Currencies?",
            a: "Yes, we develop multi-lingual websites with currency converters targeted at foreign investors/buyers. This is especially important for developers of luxury properties or coast-to-coast/international sellers, or for those wanting to target an international buyer base.",
          },
          {
            q: "How Long Does It Take to Build a Property Website?",
            a: "Website development timelines will vary based on the complexity of the sites. A basic site may be developed in as little as three to four weeks, while a full-platform advanced site can take 8-12 weeks to develop. We can, of course, also do phased roll-outs if a quicker lm to market is preferred.",
          },
          {
            q: "Can I Add/remove Properties Easily Without Technical Skills?",
            a: "Yes, our property management systems are easy to use and the platforms themselves are very user-friendly. In a few clicks, you will have added, edited or removed listings, images, and/or details from your sites without knowing any code.",
          },
          {
            q: "Do You Integrate Real Estate CRMs?",
            a: "Indeed, we integrate the latest CRM systems for managing your leads seamlessly. Fairly easy to capture inquiries from your website, follow them, and nurture your leads until that conversion. Custom workflows can also be established to align with your business process.",
          },
          {
            q: "Do You Offer Ongoing Maintenance?",
            a: "Definitely, we are with you on an ongoing basis, updates and feature improvements include security monitoring, and general support so that your website is always functioning smoothly. The maintenance plans we offer are flexible and created for businesses of all sizes.",
          },
          {
            q: "Can My Website Include Virtual Tours and Video Walkthroughs?",
            a: "Yes, we support multimedia integrations, including 360° virtual tours, drone videos, and walkthroughs to elevate the experience of potential buyers and increase engagement. All tools allow any property to separate itself and improve your online-to-offline conversion.",
          },
        ]}
      />
    </>
  );
};

export default page;
