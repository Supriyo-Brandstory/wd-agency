import React from 'react'
import Banner from '../../component/pages/home/Banner'
import CommonAboutPage from '../../component/pages/common/CommonAboutPage'
import aboutimagesharjhat from '@/app/(frontend)/assets/images/fujairah/about.webp'
import setusimagesharjhat from '@/app/(frontend)/assets/images/fujairah/setusbg.webp'
import sharjahAboutimg from '@/app/(frontend)/assets/images/fujairah/about-2.webp'
import CommonSetsUs from '../../component/pages/common/CommonSetsUs'
import CommonAboutPage2 from '../../component/pages/common/CommonAboutPage2'
import CommonThreeCard from '../../component/pages/common/CommonThreeCard'

import StrategicProblemSolvingimage from '@/app/(frontend)/assets/images/website-development/Strategic-Problem-Solving.png'
import FocusedApproachimage from '@/app/(frontend)/assets/images/website-development/FocusedApproach.png'
import PartnershipCommitmentimage from '@/app/(frontend)/assets/images/website-development/Partnership-Commitment.png'
import Transparencyimage from '@/app/(frontend)/assets/images/website-development/Transparency.png'
import TechnologyAdoptionimage from '@/app/(frontend)/assets/images/website-development/Technology-Adoption.png'
import ValueforMoneyServicesimage from '@/app/(frontend)/assets/images/website-development/Value-for-Money-Services.png'

import CommonServices from '../../component/pages/common/CommonServices'
import CommonFaqSection from '../../component/pages/common/CommonFaqSection'
import CommonResult from '../../component/pages/common/CommonResult'
import developmentprocess from '@/app/(frontend)/assets/images/fujairah/developmentprocess.webp'



import customdesign from '@/app/(frontend)/assets/images/website-development/custom-design.png'
import SEOCentric from '@/app/(frontend)/assets/images/website-development/SEO-Centric.webp'
import MobileFirst from '@/app/(frontend)/assets/images/website-development/Mobile-First.webp'
import Optimized from '@/app/(frontend)/assets/images/website-development/Optimized.webp'
import CommonIndustries from '../../component/pages/common/CommonIndustries'
import CommonProtfolio from '../../component/pages/common/CommonProtfolio'
import CommonClientTestimonials from '../../component/pages/common/CommonClientTestimonials'
import LocationService from '../../component/pages/common/LocationService'
import SubNav from '../../component/pages/common/SubNav'
import styles from "@/app/(frontend)/assets/style/calculator/CostCalculator.module.css";

const page = () => {
    return (
    <>
    <Banner
        text1={"Elevate your online presence with"}
        text2={"Website Design Company in Fujairah"}
        text3={"We are Website Development Agency, the leading web design company in Fujairah, UAE. Let’s create your website beyond the ordinary."}
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
	        { name: "WordPress", link: "/platforms/wordpress-website-development" },
	        { name: "Shopify", link: "/platforms/shopify-website-development" },
	        { name: "WooCommerce", link: "/platforms/woo-commerce-website-development" },
	        
        ]}
      />
    <CommonAboutPage
        text1={"Website Design in Fujairah- Building Digital Confidence"}
        text2={"In today's ever-increasing digital universe, having a website is no longer just an option, it is your business's very first impression, digital storefront of your brand, and best conversion tool. At <a href='/'>Website Development Agency</a>, we specialize in providing supreme website development services in Fujairah to help businesses stand out, attract customers, and grow sustainably."}
        text3={"We create and develop websites tailored for businesses in Fujairah, blending thoughtful strategy, user-centric design, and reliable engineering. We ensure our solutions reflect the local culture and align with Fujairah’s digital development objectives."}
        img={aboutimagesharjhat}
    />
    <CommonSetsUs
        text1={'Elevating Digital Experiences'}
        text2={'Searching for a reliable website development company in Fujairah? Website Development Agency combines over a decade of experience with cutting-edge web design and development expertise to deliver websites that are both visually appealing and highly functional.<br><br>Our team focuses on creating digital experiences that reflect your brand, engage your audience, and drive meaningful conversions. By integrating innovative design with advanced technology, we help businesses in Fujairah establish a strong online presence and achieve sustainable growth in today’s competitive digital landscape.'}
        bg={setusimagesharjhat}
    />
    {/* rest */}
    <CommonAboutPage2
        text1="Why Your Business in Fujairah Needs a Professional Website"
        text2={`
                    <p class="mb-20">
                   Fujairah is a developing hub of industries such as logistics, trade, tourism, and real estate. In a competitive landscape, your website is more than just a digital brochure; it is your always-on 24/7 representative. Here is why:
                    </p>
                    <ul class="ml-40">
                    <li>Build trust and credibility with potential clients.</li>
                    <li>Increase online presence and visibility on search engines.</li>
                    <li>Attract customers from local, national, and international locations.</li>
                    <li>Automate your business operations, including bookings, inquiries, and e-commerce.</li>
                    <li>Stay ahead of your competitors in a rapidly changing digital world.</li>
                    </ul>
                    <p>
                    When you partner with Website Development Agency, you don’t just develop a website, you get a deliberate business tool designed to uplift your brand. We are a full-stack web design and development agency driving digital success for brands.
                    </p>
            `}
        img={sharjahAboutimg}
    />
    <CommonProtfolio/>

    <CommonIndustries/>

    <div className="frame-1200 py-100 sm-pt-0 sm-pb-50 sm-px-20">
        <div className="text-center sm-text-start mb-50 sm-mb-20">
          <h2 className="mb-20">Website Design Fujairah- Cost Breakdown</h2>
          <p>
            Avail the best website design and Development package
            based on the <br></br>features, performance, and growth level you
            need.
          </p>
        </div>

        <div className={styles.chart}>
          <div className={styles.grid}>
            <h3>Web Design Solution</h3>
            <h3>Benefits</h3>
            <h3>Price Range Estimate</h3>
          </div>
          <div className={styles.grid}>
            <p>Basic</p>
            <p>Affordable, creative</p>
            <p className={styles.price}>AED 3,000- 5,000</p>
          </div>
          <div className={styles.grid}>
            <p>Standard</p>
            <p>Feature-rich, creative</p>
            <p className={styles.price}>AED 5,000- 8,000</p>
          </div>
          <div className={styles.grid}>
            <p>Advanced</p>
            <p>Well-structured, growth-ready</p>
            <p className={styles.price}>AED 8,000- 12,000</p>
          </div>
          <div className={styles.grid}>
            <p>Premium</p>
            <p>Premium, custom-built</p>
            <p className={styles.price}>AED 12,000+</p>
          </div>
        </div>
      </div>



    
    <CommonServices
        theding={'Website Design in Fujairah- More Than Just Aesthetics'}
        tdesc={` <p>An effective website is not just visually appealing; it also functions perfectly to turn visitors into paying customers. With our website design services in Fujairah, we place an emphasis not just on appearance, but on function by providing a beautiful, user-friendly, and business-focused website.</p>
            <p class='mt-20'>We believe that effective web design combines creativity with functionality. Fast-loading pages, <a href='/blog/mobile-first-web-design-for-businesses-key-elements--benefits'>mobile responsiveness</a>, and clear calls-to-action work together to enhance usability and drive conversions. </p>
        `}
        bheding={'We prioritize our website design and development work with:'}
        bdesc={`<ul class='ml-50'>
        <li>Mobile First Design - Optimized on every screen size from smartphones to desktop computers.</li>
        <li>SEO-Integrated Design Structures - Built with the roadmap for ranking higher on Google.</li>
        <li>Fast Loading Speeds - Optimized for fast performance and a low bounce rate.</li>
        <li>Engaging UI/UX - Seamless navigation and an intuitive interface for users.</li>
        <li>Conversion-Focused – Pages designed with CTAs that guide users toward action.</li>
        
    </ul>
    <p class='mt-20'>Your website becomes your digital storefront, and we make sure it keeps customers engaged from the initial click to the ultimate conversion.</p>
    `}
        bbg={developmentprocess}
        />

    <CommonThreeCard
        text1={'Why Choose WDA Agency- Local Expertise, Global Engineering'}
        text2={"Many agencies can build websites, but few combine a deep understanding of the local market with modern engineering. Here’s why Website Development Agency is the preferred partner for businesses in Fujairah:"}
        boxdata={[
            { id: 1, img: StrategicProblemSolvingimage, title: 'Local Market Mastery', desc: 'We understand UAE’s cultural expectations, Arabic language nuances, and business etiquette with worldwide UX and accessibility standards.' },
            { id: 2, img: FocusedApproachimage, title: 'End-to-end Services', desc: 'Strategy, UX/UI design, development, hosting, security, SEO, analytics, and continuous support- all managed by one cross-functional team.' },
            { id: 3, img: PartnershipCommitmentimage, title: 'Future-ready Engineering', desc: 'We develop adaptable architectures, utilize headless CMS solutions, and implement progressive web app technologies to ensure your website remains scalable for the future.' },
            { id: 4, img: Transparencyimage, title: 'Conversion-first Approach', desc: 'We don’t just make sites look attractive- we design quantifiable funnels with analytics, A/B testing, and iterative leveraging.' },
            { id: 5, img: TechnologyAdoptionimage, title: '24/7 Support & Maintenance', desc: 'SLA-based monitoring, security patching, and performance tuning so your site is available 24*7.' },
            { id: 6, img: ValueforMoneyServicesimage, title: 'Diverse Experience', desc: 'We partner with startups, SMEs, corporations and government bodies- tailoring our approach to fit budget, regulatory needs and growth ambitions.' },
        ]}
    />

    <CommonResult
        heding={"Best Website Development Services that Drive Measurable Results"}
        desc={"Great website design connects a visitor’s journey from initial impact to conversation. We are the best expert web development agency creating websites that don’t just look good and functional, but also work across all devices. From intuitive UX design to high end visuals, we outline websites attract, engage, and keep users engaged."}
        resultdata={[
            {
                id: 1,
                img: customdesign,
                title: "Custom Design",
                desc: "Fully responsive for smartphones, tablets, and desktops.",
                link: "#"
            },
            {
                id: 2,
                img: SEOCentric,
                title: "SEO-Centric",
                desc: "Organized with on-page SEO basics in mind.",
                link: "#"
            },
            {
                id: 3,
                img: MobileFirst,
                title: "Mobile-First Approach",
                desc: "Fully responsive for smartphones, tablets, and desktops.",
                link: "#"
            },
            {
                id: 4,
                img: Optimized,
                title: "Optimized for Performance",
                desc: "Fast, safe, and leveraged for conversions.",
                link: "#"
            },
        ]}
        footertext={'We have worked with top-level businesses in Fujairah and UAE across retail, real estate, healthcare, education, e-commerce, etc. We know what it takes to build a digital platform that works for every niche. '}

    />

    <CommonClientTestimonials/>
    <LocationService activeLocation="fujairah" />


    <CommonFaqSection
        faqs={[
            {
                q: "What Types of Websites Do You Develop for Businesses in Fujairah?",
                a: "We design all types of websites ranging from corporate sites and eCommerce stores to portfolios and service-based platforms. Our website design and development solutions are customized to meet the unique needs of Fujairah businesses."
            },
            {
                q: "How Much Does Website Development in Fujairah Cost?",
                a: "Website costs vary based on complexity, features, and timeline. Our packages start from AED 5,000, with flexible options to fit different business sizes and goals."
            },
            {
                q: "How Long Does It Take to Develop a Website in Fujairah?",
                a: "A standard website can be completed in 4–6 weeks, while larger or custom projects with integrations may require additional time depending on scope."
            },
            {
                q: "Can You Create Bilingual Websites in Fujairah?",
                a: "Yes, we specialize in designing fully bilingual websites in Arabic and English. Our approach ensures that both languages are seamlessly integrated into the website’s layout, navigation, and content, providing a smooth and intuitive user experience."
            },
            {
                q: "Do You Provide Website Redesign Services?",
                a: "Yes, We specialize in website redesign services to improve design, speed, functionality, and user experience while preserving SEO and content integrity."
            },
            {
                q: "How Do You Ensure My Website Performs Well On All Devices?",
                a: "We focus on responsive design, mobile optimization, and cross-browser testing to ensure your website looks and works perfectly on desktops, tablets, and smartphones."
            },
            {
                q: "How Secure are The Websites You Develop?",
                a: "We follow industry-standard security protocols, including secure coding, SSL integration, and regular updates to protect your site and user data."
            },
            {
                q: "What Post-launch Support Do You Provide?",
                a: "We offer free maintenance for three months after launch and ongoing support plans for updates, backups, security monitoring, and performance optimization."
            },
            {
                q: "Why Choose Website Development Agency for Web Development in Fujairah?",
                a: "Website Development Agency stands out as a trusted web development partner in Fujairah by combining deep local market understanding with creative design and advanced technical expertise. We focus on building websites that not only look visually appealing but also provide seamless functionality, intuitive navigation, and an engaging user experience."
            }
        ]}
    />


</>
    )
}

export default page