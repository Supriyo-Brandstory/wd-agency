import React from "react";
import Banner from "../../component/pages/home/Banner";
import CommonAboutPage from "../../component/pages/common/CommonAboutPage";
import aboutimageummalquwain from "@/app/(frontend)/assets/images/al-quwain/about.webp";
import setusimageummalquwain from "@/app/(frontend)/assets/images/al-quwain/setusbg.webp";
import ummalquwainAboutimg from "@/app/(frontend)/assets/images/al-quwain/about-2.webp";
import CommonSetsUs from "../../component/pages/common/CommonSetsUs";
import CommonAboutPage2 from "../../component/pages/common/CommonAboutPage2";
import CommonThreeCard from "../../component/pages/common/CommonThreeCard";

import StrategicProblemSolvingimage from "@/app/(frontend)/assets/images/website-development/Strategic-Problem-Solving.png";
import FocusedApproachimage from "@/app/(frontend)/assets/images/website-development/FocusedApproach.png";
import PartnershipCommitmentimage from "@/app/(frontend)/assets/images/website-development/Partnership-Commitment.png";
import Transparencyimage from "@/app/(frontend)/assets/images/website-development/Transparency.png";
import TechnologyAdoptionimage from "@/app/(frontend)/assets/images/website-development/Technology-Adoption.png";
import ValueforMoneyServicesimage from "@/app/(frontend)/assets/images/website-development/Value-for-Money-Services.png";
import CommonApproch from "../../component/pages/common/CommonApproch";

import approchbannerimage from "@/app/(frontend)/assets/images/al-quwain/our-approch.webp";
import CommonServices from "../../component/pages/common/CommonServices";
import CommonFaqSection from "../../component/pages/common/CommonFaqSection";
import CommonResult from "../../component/pages/common/CommonResult";
import developmentprocess from "@/app/(frontend)/assets/images/al-quwain/developmentprocess.webp";

import customdesign from "@/app/(frontend)/assets/images/website-development/custom-design.png";
import SEOCentric from "@/app/(frontend)/assets/images/website-development/SEO-Centric.webp";
import MobileFirst from "@/app/(frontend)/assets/images/website-development/Mobile-First.webp";
import Optimized from "@/app/(frontend)/assets/images/website-development/Optimized.webp";
import CommonIndustries from "../../component/pages/common/CommonIndustries";
import CommonProtfolio from "../../component/pages/common/CommonProtfolio";
import CommonClientTestimonials from "../../component/pages/common/CommonClientTestimonials";
import LocationService from "../../component/pages/common/LocationService";
import SubNav from "../../component/pages/common/SubNav";
import CommonCostBreakdown from "../../component/pages/common/CommonCostBreakdown";

const page = () => {
  return (
    <>
      <Banner
        text1={"Most Trusted Website Development Services"}
        text2={"Web Design Agency in Umm Al Quwain"}
        text3={
          "Website Development Agency is your one-stop solution for web design & development in Umm Al Quwain, delivering cutting-edge web design and development services since 2014."
        }
      />
      <SubNav
        title="Technology"
        items={[
          { name: "PHP", link: "/platforms/php-website-development" },
          { name: "ReactJS", link: "/platforms/react-js-website-development" },
          { name: "NodeJS", link: "/platforms/nodejs-website-development" },
          { name: "Laravel", link: "/platforms/laravel-website-development" },
          { name: "Angular", link: "/platforms/angular-website-development" },
          { name: "Drupal", link: "/platforms/drupal-website-development" },
          {
            name: "WordPress",
            link: "/platforms/wordpress-website-development",
          },
          { name: "Shopify", link: "/platforms/shopify-website-development" },
          {
            name: "WooCommerce",
            link: "/platforms/woo-commerce-website-development",
          },
        ]}
      />
      <CommonAboutPage
        text1={"Best Website Development Agency Umm Al Quwain"}
        text2={
          "Is your business ready for a digital transformation? We craft sleek, modern, and brand-focused websites that drive real impact. At <a href='/'>Website Development Agency</a>, our portfolio includes top-performing websites that deliver high-performance, visually appealing, and SEO-friendly digital solutions for businesses."
        }
        text3={
          "As a leading web development agency in Umm Al Quwain, we serve clients across all areas, from Al Salamah to Al Raas, and beyond. We create refined websites that perfectly reflect your brand identity from top to bottom."
        }
        img={aboutimageummalquwain}
      />
      <CommonSetsUs
        text1={"Redefining Digital Experiences for a Decade"}
        text2={
          "Your search for a professional website development company in Umm Al Quwain ends with Website Development Agency. We bring a decade of experience, web design and development expertise, and a vision to empower businesses with the best possible services.<br><br>At Website Development Agency, we redefine digital experiences with creative web design, next-gen technology, and seamless operability- keeping your branding aligned. We ensure your website exudes professionalism, delivers a memorable digital experience, and turns engagement into meaningful conversions."
        }
        bg={setusimageummalquwain}
      />
      <CommonAboutPage2
        text1="Why a Professional Website Design Matters <br/>for Businesses?"
        text2={`
            <p class="mb-20">
            Websites are more than just a digital brochure- they define your brand and act as an active sales channel 24/7. For local businesses in Umm Al Quwain looking to level up, a website is the perfect touchpoint to expand your reach. Your audience can quickly explore your business, offerings, and become loyal customers. A professional website design can help you:
            </p>
            <ul class="ml-40">
            <li>Build trust and credibility with a strong first impression</li>
            <li>Increase visibility and reach with an SEO-friendly design</li>
            <li>Drive more leads and conversions with an engaging user experience</li>
            <li>Enhance website performance through seamless navigation and speed</li>
            </ul>
            <p>
            From responsive design and modern features to seamless navigation and secure hosting, Website Development Agency takes care of every detail. Whether you're a startup, SME, or an established business, our custom web development solutions in Umm Al Quwain are tailored to meet your objectives and create a robust online impact.
            </p>
        `}
        img={ummalquwainAboutimg}
      />
      <CommonProtfolio />
      <CommonIndustries />

      <CommonServices
        theding={"The Website Development Agency Methodology"}
        tdesc={`
           <p>At Website Development Agency, we believe in a collaborative, transparent, and measurable approach for every project we undertake. We keep you informed at every stage- from strategy to execution, ensuring complete clarity and alignment.</p>
            <p class='mt-20'>Our structured and forward-thinking web development process not only drives measurable outcomes but also encourages creative solutions that set your business apart and deliver lasting commercial success.</p>
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
        `}
        bbg={developmentprocess}
      />

      <CommonCostBreakdown
        heading="Website Design Umm Al Quwain- Cost Breakdown"
        description="Avail the best website design and Development package based on the features, performance, and growth level you need."
      />

      <CommonThreeCard
        text1={"Why Choose Us as Your Web Design Partner<br/> in Umm Al Quwain"}
        text2={
          "Among many web development companies in Umm Al Quwain, we stand out with a deep understanding of local business needs, audience demographics, and the latest digital trends. We are not just a website development company; we are your transformation partner, supporting your digital expansion."
        }
        boxdata={[
          {
            id: 1,
            img: StrategicProblemSolvingimage,
            title: "Strategic Problem Solving",
            desc: "We excel in creating visually stunning, functional, and conversion-focused websites tailored to your brand. Every design we craft delivers a perfect blend of creativity and performance.",
          },
          {
            id: 2,
            img: FocusedApproachimage,
            title: "Focused Approach",
            desc: "As top web development experts, we focus on building clear strategies, addressing unique needs, and delivering exceptional websites that resonate with your brand.",
          },
          {
            id: 3,
            img: PartnershipCommitmentimage,
            title: "Partnership Commitment",
            desc: "We build long-term relationships with clients, delivering excellence. We work as a partner, not just an agency, ensuring growth and success hand-in-hand.",
          },
          {
            id: 4,
            img: Transparencyimage,
            title: "Transparency",
            desc: "We maintain complete openness at every project stage, from pricing to timelines. You stay informed from design to deployment—no hidden charges, no surprises.",
          },
          {
            id: 5,
            img: TechnologyAdoptionimage,
            title: "Technology Adoption",
            desc: "We leverage the latest tools, technologies, and frameworks to deliver future-ready websites, keeping your business ahead of the digital curve.",
          },
          {
            id: 6,
            img: ValueforMoneyServicesimage,
            title: "Value for Money Services",
            desc: "We provide premium web development services in Umm Al Quwain at competitive prices, ensuring maximum ROI with impactful solutions.",
          },
        ]}
      />
      <CommonResult
        heding={"Best Web Development Services that Drive Measurable Results"}
        desc={
          "Great website design connects a visitor’s journey from first impression to conversion. We are the leading web development agency, creating websites that are not only visually appealing and functional but also perform seamlessly across all devices. From intuitive UX design to high-end visuals, our websites attract, engage, and retain users."
        }
        resultdata={[
          {
            id: 1,
            img: customdesign,
            title: "Custom Design",
            desc: "Fully responsive for smartphones, tablets, and desktops.",
          },
          {
            id: 2,
            img: SEOCentric,
            title: "SEO-Centric",
            desc: "Structured with on-page SEO basics for better visibility.",
          },
          {
            id: 3,
            img: MobileFirst,
            title: "Mobile-First Approach",
            desc: "Optimized for seamless performance across all devices.",
          },
          {
            id: 4,
            img: Optimized,
            title: "Optimized for Performance",
            desc: "Fast, secure, and designed for conversions.",
          },
        ]}
        footertext={
          "We have worked with top businesses in Umm Al Quwain and the UAE across retail, real estate, hospitality, e-commerce, and more. We know what it takes to build a digital platform that works for every niche."
        }
      />

      <CommonClientTestimonials />
      <LocationService activeLocation="umm al quwain" />
      <CommonFaqSection
        faqs={[
          {
            q: "Why Should I Choose Website Development Agency for Website Development in Umm Al Quwain?",
            a: "Website Development Agency specializes in creating custom, user-friendly, and visually appealing websites tailored to your business goals, ensuring a strong online presence and functionality. We have 12+ years of experience working with 500+ clients across Umm Al Quwain, Dubai, and the UAE.",
          },
          {
            q: "What Industries Do You Design Websites for in Umm Al Quwain?",
            a: "Since 2014, we have served a diverse range of industries, including retail, hospitality, e-commerce, real estate, professional services, and more, delivering tailored web development solutions.",
          },
          {
            q: "Do You Provide Custom Website Designs or Use Templates?",
            a: "Our focus is on custom website designs that reflect your unique brand identity, but we also offer template-based solutions for businesses seeking faster turnaround and budget-friendly options.",
          },
          {
            q: "How Much Does Website Development in Umm Al Quwain Cost?",
            a: "The cost depends on the website type, design complexity, features, and timeline. Website Development Agency offers flexible packages to suit various business needs and budgets. Typically, website development in Umm Al Quwain starts from AED 5,000, with prices varying based on customization and functionality.",
          },
          {
            q: "How Long Does It Take to Develop a Website?",
            a: "A basic business website typically takes 3-4 weeks, while feature-rich or e-commerce websites may take 6-10 weeks, depending on complexity.",
          },
          {
            q: "Will My Website be Optimized for Speed and Performance?",
            a: "Yes, we follow best practices to ensure your website loads quickly, offers smooth navigation, and provides an excellent user experience.",
          },
          {
            q: "Will My Website Be Mobile-friendly?",
            a: "Yes, every website we develop is fully responsive, ensuring seamless performance across desktops, tablets, and smartphones.",
          },
          {
            q: "Can You Develop an E-commerce Website for My Business?",
            a: "Yes, we create secure, scalable, and user-friendly eCommerce websites with product catalogs, shopping carts, and integrated payment gateways.",
          },
          {
            q: "Do You Provide Website Redesign Services?",
            a: "Yes, if your current website is outdated or underperforming, we can redesign it with modern layouts, improved user experience, and enhanced functionality.",
          },
          {
            q: "Do You Provide Ongoing Support After The Website is Launched?",
            a: "Yes, Website Development Agency offers website maintenance and support services in Umm Al Quwain to keep your website updated, secure, and running smoothly.",
          },
          {
            q: "How Can I Get Started with Website Development Agency for Website Development in Umm Al Quwain?",
            a: "Simply reach out through our contact form or give us a call. Our team will discuss your requirements and create a tailored proposal for your website development project.",
          },
        ]}
      />
    </>
  );
};

export default page;
