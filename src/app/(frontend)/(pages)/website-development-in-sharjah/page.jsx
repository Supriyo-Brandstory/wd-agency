import React from "react";
import Banner from "../../component/pages/home/Banner";
import setusimagesharjhat from "@/app/(frontend)/assets/images/website-development/sharjah-bg.webp";
import CommonSetsUs from "../../component/pages/common/CommonSetsUs";
import CommonAboutPage2 from "../../component/pages/common/CommonAboutPage2";

import CommonServices from "../../component/pages/common/CommonServices";
import CommonFaqSection from "../../component/pages/common/CommonFaqSection";
import CommonResult from "../../component/pages/common/CommonResult";

import customdesign from "@/app/(frontend)/assets/images/website-development/custom-design.png";
import sharjah from "@/app/(frontend)/assets/images/website-development/sharjah.webp";
import SEOCentric from "@/app/(frontend)/assets/images/website-development/SEO-Centric.webp";
import MobileFirst from "@/app/(frontend)/assets/images/website-development/Mobile-First.webp";
import Optimized from "@/app/(frontend)/assets/images/website-development/Optimized.webp";
import CommonProtfolio from "../../component/pages/common/CommonProtfolio";
import CommonClientTestimonials from "../../component/pages/common/CommonClientTestimonials";
import LocationService from "../../component/pages/common/LocationService";
import CommonCostBreakdown from "../../component/pages/common/CommonCostBreakdown";
import ClientSection from "../../component/pages/common/ClientSection";
import PremierAgency from "../../component/pages/common/PremierAgency";
import IndustryGrid from "../../component/pages/common/IndustryGrid";
import DevelopmentServices from "../../component/pages/home/DevelopmentServices";
import TechnologyStack from "../../component/pages/home/TechnologyStack";

const page = () => {
  return (
    <>
      <Banner
        text1={"Top-Rated Website Design Services"}
        text2={"Web Design Agency in Sharjah"}
        text3={
          "Website Development Agency is your one-stop solution for web design in Sharjah, providing next-level web design and development services. Since 2014, we have worked on over 750+ website projects for businesses in Sharjah and across the UAE."
        }
      />
  <ClientSection />

  <CommonAboutPage2
        text1="Premier Website Design & Development <br>Services Agency"
        text2={`
                            <p class="mb-20">
                            In Sharjah's evolving business landscape, your website serves as your most hardworking sales tool. It operates around the clock building credibility, showcasing what makes your business unique, and turning curious visitors into committed customers. A strategically developed website doesn't just represent your brand; it actively contributes to your bottom line.
                            </p>
                          
                            <ul class='ml-50'>
                            <li>Creates trust & positions your brand as industry leader</li>
                            <li>Showcases your offerings in ways that resonate and convert</li>
                            <li>Deliver a seamless user experience across all devices</li>
                            <li>Empowers your marketing efforts and generates leads</li>
                          </ul>

                            <p class='mt-20'>
                            As a trusted <a href='/website-development-in-sharjah'><strong>web design agency in Sharjah</strong></a>, we specialize in building growth-focused websites that align with your business goals. Our process brings together strategic design thinking, intuitive user journeys, and reliable technical infrastructure to create digital experiences that actually work. Each website we deliver is engineered to capture attention and elevate your business.
                            </p>
                    `}
        img={sharjah}
      />
    
     
      <CommonSetsUs
        text1={"Transforming Ideas Into High-Performance Websites"}
        text2={
          "Your website is the digital front door to your business, and in Sharjah's competitive market, it needs to do more than simply exist online. We build websites that actively work for you- establishing credibility from the first click, communicating your unique value clearly, and guiding visitors smoothly toward becoming customers. <br><br>We don't believe in one-size-fits-all solutions. Each website we develop for Sharjah businesses is built on secure, scalable technology that grows with your ambitions- whether you're launching new services, entering new markets, or adding sophisticated functionality. From lightning-fast mobile performance to integrated business tools like lead capture, booking systems, and e-commerce capabilities, your website becomes a 24/7 growth engine."
        }
        bg={setusimagesharjhat}
      />
     
      
      
      <CommonProtfolio />
      <PremierAgency />
      <IndustryGrid />

      <DevelopmentServices />

      <CommonServices
        theding={"The Website Development Agency Methodology"}
        tdesc={` <p>At Website Development Agency, we believe in a collaborative, transparent, and measurable approach for every project we undertake. We keep you informed at every stage- from strategy to execution, ensuring complete clarity and alignment.</p>
                <p class='my-20'>Our structured and forward-thinking web development process not only drives measurable outcomes but also encourages creative solutions that set your business apart and deliver lasting commercial success.</p>
                `}
        bheding={"Steps We Follow in Our Web Development Process:"}
        bdesc={`<ul class='ml-50'>
                <li>Discovery & Research- Understanding requirements, competitor analysis, and audience mapping.</li>
                <li>Strategy & Architecture- Content strategy, branding strategy, and conversion mapping.</li>
                <li>Design- Wireframes, <a href="/services/wireframing-prototyping">interactive prototypes</a>, brand-consistent UI.</li>
                <li>Development- Agile development, unit & integration testing, API development.</li>
                <li>Testing & Optimisation- Load testing, security scanning, cross-browser and device QA.</li>
                <li> Launch & Maintenance- Structured rollout, continuous monitoring, and performance tracking.</li>
            </ul>
            <p class='mt-20'>We provide project deadlines, milestones, utilize tools (project boards, regular demos) so you always know the progress.</p>
            </ul>
            `}
      />
      <TechnologyStack />
      <CommonCostBreakdown
        heading="Website Design Sharjah- Cost Breakdown"
        description="Avail the best website design and Development package based on the features, performance, and growth level you need."
      />

      <CommonResult
        heding={"Web Design Services that Drive Real Results"}
        desc={
          "Great website design connects a visitor’s journey from initial impact to conversation. We are the best expert web design agency creating websites that don’t just look good and functional, but also work across all devices. From intuitive UX design to high end visuals, we outline websites attract, engage, and keep users engaged."
        }
        resultdata={[
          {
            id: 1,
            img: customdesign,
            title: "Custom Design",
            desc: "Fully responsive for smartphones, tablets, and desktops.",
            link: "#",
          },
          {
            id: 2,
            img: SEOCentric,
            title: "SEO-Centric",
            desc: "Organized with on-page SEO basics in mind.",
            link: "#",
          },
          {
            id: 3,
            img: MobileFirst,
            title: "Mobile-First Approach",
            desc: "Fully responsive for smartphones, tablets, and desktops.",
            link: "#",
          },
          {
            id: 4,
            img: Optimized,
            title: "Optimized for Performance",
            desc: "Fast, safe, and leveraged for conversions.",
            link: "#",
          },
        ]}
        footertext={
          "We have worked with leading businesses in Sharjah and UAE across retail, real estate, healthcare, education, and e-commerce. Each industry has different user expectations, workflows, and compliance needs, and we design digital platforms tailored to those differences- not one-size-fits-all solutions. "
        }
      />

  

      

      <CommonClientTestimonials />
      <LocationService activeLocation="sharjah" />

      <CommonFaqSection
        faqs={[
          {
            q: "Why Should I Choose Website Development Agency for Website Design in Sharjah?",
            a: "Website Development Agency specializes in creating custom, user-friendly, and visually appealing websites tailored to your business goals, ensuring a strong online presence and functionality. We have 12+ years of experience working with 500+ clients across Dubai, Sharjah, and the UAE.",
          },
          {
            q: "What Industries Do You Design Websites for in Sharjah?",
            a: "Since 2014 have worked with a diverse range of industries. We provide web design and development services for retail, healthcare, education, real estate, hospitality, e-commerce, professional services, and more.",
          },
          {
            q: "Do You Provide Custom Website Designs or Use Templates?",
            a: "Our focus is on custom website designs that reflect your unique brand identity, but we also offer template-based solutions for businesses seeking faster turnaround and budget-friendly options.",
          },
          {
            q: "Do You Provide Custom Website Designs or Use Templates?",
            a: "Our focus is on custom website designs that reflect your unique brand identity, but we also offer template-based solutions for businesses seeking faster turnaround and budget-friendly options.",
          },
          {
            q: "How Much Does Website Design in Sharjah Cost?",
            a: "The cost depends on the type of website, design complexity, features required, and timeline. Website Development Agency provides flexible packages that fit different business needs and budgets. Typically, website design in Sharjah starts from AED 5,000, with prices varying based on customization and functionality.",
          },
          {
            q: "How Long Does It Take to Design a Website?",
            a: "Typically, a basic business website takes 3-4 weeks, while feature-rich or e-commerce websites may take 6-10 weeks, depending on complexity.",
          },
          {
            q: "Will My Website be Optimized for Speed and Performance?",
            a: "Yes, we follow best practices to ensure your website loads quickly, offers smooth navigation, and provides an excellent user experience.",
          },
          {
            q: "Will My Website Be Mobile-friendly?",
            a: "Yes, every website we design is fully responsive, ensuring seamless performance across desktops, tablets, and smartphones.",
          },
          {
            q: "Can You Design an E-commerce Website for My Business?",
            a: "Yes, we create secure, scalable, and easy-to-manage eCommerce websites with product catalogs, shopping carts, and integrated payment gateways.",
          },
          {
            q: "Do You Provide Website Redesign Services?",
            a: "Yes, if you already have a website that looks outdated or is not performing well, we can redesign it with modern layouts, improved user experience, and better functionality.",
          },
          {
            q: "Do You Provide Ongoing Support After The Website is Launched?",
            a: "Yes, Website Development Agency offers website maintenance and support services in Sharjah to keep your website updated, secure, and running smoothly.",
          },
          {
            q: "Do You Provide Ongoing Support After The Website is Launched?",
            a: "Yes, Website Development Agency offers website maintenance and support services in Sharjah to keep your website updated, secure, and running smoothly.",
          },
          {
            q: "How Can I Get Started with Website Development Agency for Website Design in Sharjah?",
            a: "Simply reach out to us through our contact form or give us a call. Our team will discuss your requirements and create a tailored proposal for your website design project.",
          },
        ]}
      />
    </>
  );
};

export default page;
