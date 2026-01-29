import React from "react";
import CommonBanner2 from "../../component/pages/common/CommonBanner2";
import imagebanner from "@/app/(frontend)/assets/images/travel-website/travel-image.webp";
import CommonIntroduction from "../../component/pages/common/CommonIntroduction";
import imageintro1 from "@/app/(frontend)/assets/images/travel-website/travel-agency-website.webp";
import imageintro2 from "@/app/(frontend)/assets/images/travel-website/travel-dubai.webp";
import CommonWhyMetter from "../../component/pages/common/CommonWhyMetter";
import imagewhymetter from "@/app/(frontend)/assets/images/travel-website/travel-web-design-service.webp";
import CommonIndustries from "../../component/pages/common/CommonIndustries";
import imageService1 from "@/app/(frontend)/assets/images/travel-website/custom-design.webp";
import imageService2 from "@/app/(frontend)/assets/images/travel-website/reservation-system.webp";
import imageService3 from "@/app/(frontend)/assets/images/travel-website/travel-planner.webp";
import imageService4 from "@/app/(frontend)/assets/images/travel-website/tech-integration.webp";
import imageService5 from "@/app/(frontend)/assets/images/travel-website/multi-language.webp";
import imageService6 from "@/app/(frontend)/assets/images/travel-website/mobile-friendly.webp";
import imageService7 from "@/app/(frontend)/assets/images/travel-website/recommendations.webp";
import imageService8 from "@/app/(frontend)/assets/images/travel-website/maintenance-support.webp";

import CommonWhyWebsiteDevelopment from "../../assets/style/common/CommonWhyWebsiteDevelopment";
import imagewhydevelopment from "@/app/(frontend)/assets/images/travel-website/why-choose-wd-agency.webp";
import CommonClientTestimonials from "../../component/pages/common/CommonClientTestimonials";
import imagetestimonial1 from "@/app/(frontend)/assets/images/testimonial/testimonial-1.webp";
import imagetestimonial2 from "@/app/(frontend)/assets/images/testimonial/testimonial-2.webp";
import imagetestimonial3 from "@/app/(frontend)/assets/images/testimonial/testimonial-3.webp";
import CommonFaqSection from "../../component/pages/common/CommonFaqSection";
import DevelopmentServices from "../../component/pages/home/DevelopmentServices";
import Team from "../../component/pages/about/Team";

import LocationService from "../../component/pages/common/LocationService";
import CommonCostBreakdown from "../../component/pages/common/CommonCostBreakdown";
import IndustryGrid from "../../component/pages/common/IndustryGrid";
import CommonProtfolio from "../../component/pages/common/CommonProtfolio";

const page = () => {
  return (
    <>
      <CommonBanner2
        bg={imagebanner}
        alt="Travel and Tourism Web Design Services in Dubai, UAE"
        heding={
          "Travel & Tourism Web Design in Dubai, UAE"
        }
        subtitle={
          "We design high-performing travel agency websites in UAE that increase bookings, <br>improve visibility, and deliver seamless user experiences for UAE travel businesses."
        }
      />
      
      <CommonIntroduction
        heding={"Tourism Website Design Services"}
        text1={`<p>The travel and tourism industry in the UAE is rapidly emerging as one of the fastest-growing sectors, driven by millions of international visitors and a strong local travel market. Today’s travellers rely heavily on digital platforms to research destinations, compare experiences, and plan their journeys.</p>
                    <p>At the same time, travellers have access to countless travel planning and booking platforms, increasing competition across the industry. Modern users expect personalised recommendations, real-time availability, transparent pricing, and a smooth booking experience. Websites that fail to meet these expectations risk losing potential customers to more digitally advanced competitors.</p>
                    `}
        text2={`<p>Additionally, travellers demand consistency across devices and languages, with fast load times and secure transactions. A lack of mobile optimisation, limited payment options, or poor user experience can directly impact bookings, customer trust, and brand perception in an increasingly competitive tourism landscape.</p>
                <p>Website Development Agency provides specialised travel and tourism web design services in Dubai and across the UAE. We build high-performing travel websites with advanced booking engines, multilingual support, mobile-first design, and secure payment gateway integrations. Whether you’re a travel agency, tour operator, hotel group, or destination management company, our solutions are designed to strengthen your digital presence, improve user engagement, and meet the high expectations of today’s travellers.</p>
                    `}
        imageintro1={imageintro1}
        alt1={
          "Travel Agency Website Development Services - Website Development Agency"
        }
        imageintro2={imageintro2}
        alt2={
          "Dubai Travel Website Development Services - Website Development Agency"
        }
      />

      <CommonIndustries
        heding={"Travel & Tourism Web Design Services"}
        subheding="At Website Development Agency, we build high-performance websites for travel agencies in Dubai, integrating advanced booking features with conversion-driven design."
        services={[
          {
            title: "Custom Website Design",
            desc: "We design custom, visually appealing websites that are intuitive and mobile-first to allow travelers complete easiness and simplicity in browsing and booking no matter what device they are using. Each design reflects your brand identity while prioritizing usability and conversions.",
            img: imageService1,
            alt: "Custom Travel Website Design Services - Website Development Agency",
            btnname: "Contact Us",
            link: "/contact-us",
          },
          {
            title: "Booking & Reservation Systems",
            desc: "We create booking systems for hotels, flights, tours, and packages provide real-time availability, confirmation, and no-frills navigation for planning. We also include advanced filtering options to simplify choices for travelers.",
            img: imageService2,
            alt: "Travel Booking and Reservation System Development - Website Development Agency",
            btnname: "Contact Us",
            link: "/contact-us",
          },
          {
            title: "Travel Planner Websites",
            desc: "We empower travel planners to manage multi-day itineraries, showcase packages, dynamic pricing, and interactive customization for travelers which not only can drive revenue but also decrease manual effort.",
            img: imageService3,
            alt: "Travel Planner Website Development Services - Website Development Agency",
            btnname: "Contact Us",
            link: "/contact-us",
          },
          {
            title: "Technology Integrations",
            desc: "We integrate fast and scalable APIs for flight, hotel, car rental, and tour booking systems to provide real-time and convenience for your customers. This allows your website platform to operate smoothly and remain competitive.",
            img: imageService4,
            alt: "Technology Integration Services - Website Development Agency",
            btnname: "Contact Us",
            link: "/contact-us",
          },
          {
            title: "Multi-language Support",
            desc: "Essential for UAE’s diverse market, our multilingual and multi-currency solutions expand your global reach and accessibility. Travelers feel at home with content and pricing in their language and currency.",
            img: imageService5,
            alt: "Multi-language Travel Website Development Services - Website Development Agency",
            btnname: "Contact Us",
            link: "/contact-us",
          },
          {
            title: "Mobile-Friendly Websites",
            desc: "Our responsive designs ensure smooth mobile bookings and an exceptional user experience on all devices. With features like push notifications and seamless integrations, you can engage modern travelers effectively.",
            img: imageService6,
            alt: "Mobile-Friendly Travel Website Design - Website Development Agency",
            btnname: "Contact Us",
            link: "/contact-us",
          },
          {
            title: "Personalized Travel Recommendations",
            desc: "We deliver tailored travel suggestions based on user preferences, search history, and popular trends. By offering personalized experiences, you can increase engagement, inspire new trips, and encourage repeat visits.",
            img: imageService7,
            alt: "Personalized Travel Recommendation System development - Website Development Agency",
            btnname: "Contact Us",
            link: "/contact-us",
          },
          {
            title: "Maintenance & Support",
            desc: "We provide ongoing support, seasonal updates, and performance scaling for peak travel times, ensuring uninterrupted service. From fixing bugs to enhancement of features, we are always there for you.",
            img: imageService8,
            alt: "Travel Website Maintenance and Support Services - Website Development Agency",
            btnname: "Contact Us",
            link: "/contact-us",
          },
        ]}
      />
      <CommonWhyMetter
        imagewhymetter={imagewhymetter}
        alt={
          "Tourism Web Design to Elevate Your Digital Presence"
        }
        heding={"Tourism Web Design to Elevate Your Digital Presence"}
        subheding={
          "In the highly competitive travel and tourism sector, a strong online presence plays a decisive role in attracting and converting travellers. Tourism websites must balance visual appeal with functionality, ensuring visitors can explore offerings, compare options, and take action without friction."
        }
        lefttext={`  <p><b>Effortless User Journeys:</b> We create travel websites that guide users seamlessly from discovery to booking. By combining intuitive navigation, structured layouts, and clear content hierarchy, we ensure visitors can quickly find destinations, packages, and services enhancing engagement and reducing bounce rates.</p>
                        <p><b>Seamless Booking Experiences:</b> We develop robust, secure booking systems that deliver a smooth experience across all devices. From real-time availability to mobile-first interfaces, our solutions enable travellers to plan and confirm trips efficiently, building trust and encouraging repeat bookings.</p>
                        `}
        righttext={`<p><b>Optimised Performance and Visibility:</b> We design travel websites with fast-loading pages, responsive frameworks, and SEO-focused architecture. This ensures high performance, improved search engine visibility, and greater exposure to potential customers actively seeking travel services.</p>
                            `}
      />

      
      <CommonProtfolio />
      
      <DevelopmentServices />

      <CommonCostBreakdown
        heading="Travel Agency Website Design Cost Breakdown"
        description="Select the best travel business design and Development package based on the features, performance, and growth level you need."
      />
      <IndustryGrid />

      
      <CommonWhyWebsiteDevelopment
        heding={
          "Web Design Solutions for the Travel and Tourism Industry"
        }
        subheding={
          "The travel and tourism sector in the UAE is diverse, and each business requires a website that reflects its unique offerings. We develop tailored travel websites that combine visually compelling design with advanced functionality, ensuring every platform aligns with its target audience & objectives."
        }
        lefttext={`<p><b>Hotels & Hospitality Platforms:</b> We design visually striking websites for hotels, resorts, and boutique accommodations that highlight facilities, amenities, and special packages. Our solutions focus on direct booking capabilities, intuitive room availability displays, and engaging multimedia galleries to drive conversions while building brand credibility.</p>
                                <p><b>Flight & Tour Booking Systems:</b> For airlines, flight aggregators, and tour operators, we deliver streamlined booking platforms that simplify search, comparison, and reservations. Integrated itinerary management, real-time availability, and secure payment gateways provide a seamless booking experience, improving customer satisfaction and repeat usage.</p>
                                <p><b>Solutions for Travel Agencies:</b> Our approach also extends to traditional travel agencies, providing fully customisable web development solutions with advanced booking features, destination insights, and multilingual support. By focusing on user engagement, mobile responsiveness, and digital optimisation, we help travel businesses across the UAE.</p>
                            `}
        rightimage={imagewhydevelopment}
        alt={
          "Why Choose Website Development Agency for Travel Website Development - Website Development Agency"
        }
      />

      <Team />

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

      <LocationService activeLocation="dubai" />

      <CommonFaqSection
        faqs={[
          {
            q: "How Much Does It Cost to Build a Travel Website?",
            a: "The cost of a travel website depends on the scope and complexity of the project. A basic site with essential booking features typically starts around AED 8,000 to AED 18,000, while a full-featured portal with multi-vendor systems, API integrations, and multilingual support can range from AED 20,000 to AED 52,000 or more. At Website Development Agency, we tailor solutions to your goals and budget, ensuring complete transparency with no hidden fees.",
          },
          {
            q: "Can You Integrate Flight, Hotel & Car Rental APIs?",
            a: "Yes, one of our specialties is the APIs integration for flights, hotels, car rentals, and tours. This means that you have a single platform that is updated in real-time and shows the correct prices and allows for a seamless booking of your clients.",
          },
          {
            q: "Do You Develop Multilingual Travel Websites?",
            a: "Absolutely, multilingual and multi-currency functionality is essential for UAE’s diverse and global audience. We design multi-lingual websites designed to let users choose the language in which they wish to browse and to pay in their own currency.",
          },
          {
            q: "Can I Manage Bookings Data Without Coding?",
            a: "Yes, You’ll get a dedicated dashboard that allows you to manage bookings, update packages, and track customer information easily, no coding or technical skills required.",
          },
          {
            q: "Do You Offer Post-launch Support & Maintenance?",
            a: "Definitely, We are always there for you through tough times (or whenever you want) with our regular updates, security patches, seasonal scalability, and all-around maintenance to ensure that your website is always running smoothly.",
          },
          {
            q: "Can You Optimize My Website for SEO?",
            a: "Yes, we create SEO-friendly websites that have well-structured optimizations, quick loading times, and content that is ready for keyword usage. In addition, we offer content marketing strategies that would help your website get a higher rank on Google.",
          },
          {
            q: "How Long Does It Take to Build a Booking Portal?",
            a: "The amount of time it will take to get the job done varies depending on the complexity. For a basic website, 4-6 weeks may be enough, whereas a bigger portal with advanced integrations can take from 10 to 16 weeks. We always provide clear timelines before starting.",
          },
        ]}
      />
    </>
  );
};

export default page;
