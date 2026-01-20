import React from 'react'
import Banner from '../../component/pages/home/Banner'
import CommonAboutPage from '../../component/pages/common/CommonAboutPage'
import aboutimagesharjhat from '@/app/(frontend)/assets/images/ajman/about.webp'
import setusimagesharjhat from '@/app/(frontend)/assets/images/ajman/setusbg.webp'
import sharjahAboutimg from '@/app/(frontend)/assets/images/ajman/about-2.webp'
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



import customdesign from '@/app/(frontend)/assets/images/website-development/custom-design.png'
import SEOCentric from '@/app/(frontend)/assets/images/website-development/SEO-Centric.webp'
import MobileFirst from '@/app/(frontend)/assets/images/website-development/Mobile-First.webp'
import Optimized from '@/app/(frontend)/assets/images/website-development/Optimized.webp'
import CommonIndustries from '../../component/pages/common/CommonIndustries'
import CommonProtfolio from '../../component/pages/common/CommonProtfolio'
import DevelopmentProcess from '@/app/(frontend)/assets/images/ajman/DevelopmentProcess.webp'
import CommonClientTestimonials from '../../component/pages/common/CommonClientTestimonials'
import LocationService from '../../component/pages/common/LocationService'

import SubNav from '../../component/pages/common/SubNav'
import styles from "@/app/(frontend)/assets/style/calculator/CostCalculator.module.css";


const page = () => {
    return (
        <>
            <Banner
                text1={"Elevate your online presence with"}
                text2={"Web Design Agency in Ajman"}
                text3={"We are Website Development Agency, the best website development agency in Ajman, UAE. Let’s create your website beyond the ordinary."}
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
                text1={"No.1 Website Design Agency Ajman"}
                text2={"Your website is more than a digital presence- it's your most powerful sales tool. At <a href='/'>Website Development Agency</a>, we design high-performance websites that capture attention, build trust, and convert visitors into customers. We specialize in creating both custom web solutions and template-based websites tailored to your budget and timeline."}
                text3={"Whether you're a startup launching your first site or an established company ready for a digital upgrade, we deliver websites that work as hard as you do. Our experts combine conversion-focused design, mobile optimization, SEO foundations, and ongoing support to build websites that attract customers and drive results. Ready to transform your online presence? Let's build something remarkable together."}
                img={aboutimagesharjhat}
            />
            <CommonSetsUs
                text1={'Elevating Digital Experiences in Ajman'}
                text2={'Searching for a reliable website development company in Ajman? Website Development Agency combines over a decade of experience with cutting-edge web design and development expertise to deliver websites that are both visually appealing and highly functional.<br><br>Our team focuses on creating digital experiences that reflect your brand, engage your audience, and drive meaningful conversions. By integrating innovative design with advanced technology, we help businesses in Ajman establish a strong online presence and achieve sustainable growth in today’s competitive digital landscape.'}
                bg={setusimagesharjhat}
            />
            {/* rest */}
            <CommonAboutPage2
                text1="Why Your Business in Ajman Needs a Professional Website"
                text2={`
                            <p class="mb-20">
                           Ajman is a competitive market packed with small enterprises, well-established companies, and local merchants. Competing for visibility, it is inescapable to have a professional website. Here is why:
                            </p>
                            <ul class="ml-40">
                            <li>Builds trust and credibility - Customers decide the worthiness of your business within seconds after landing on your website.</li>
                            <li>Increases your reach - With a website, your services can go beyond local limits.</li>
                            <li>Generates sales and conversions - Strategic layouts coupled with purposeful call-to-actions (CTAs) convince visitors to pay for what you are selling.</li>
                            <li>Supports long-term growth – Your website is the cornerstone for digital marketing strategies and driving sustainable business growth.</li>
                            </ul>
                            <p>
                            When you partner with a Website Development Agency for your website design in Ajman, you don’t just develop a website, you get a deliberate business tool designed to uplift your brand.
                            </p>
                    `}
                img={sharjahAboutimg}
            />
            <CommonProtfolio/>

            <CommonIndustries/>

            <CommonServices
                theding={'Web Design in Ajman- More Than Just Aesthetics'}
                tdesc={` <p>A successful website goes beyond visual appeal; it’s about delivering real value to users. At Website Development Agency, our approach to web design in Ajman focuses on creating experiences that are intuitive, engaging, and purposeful. Every element from layout and navigation to content placement is designed to guide visitors seamlessly, ensuring they find what they need quickly while leaving a lasting impression of your brand.</p>
                    <p class='mt-20'>We believe that effective web design combines creativity with functionality. Fast-loading pages, mobile responsiveness, and clear calls-to-action work together to enhance usability and drive conversions. </p>
                `}
                bheding={'We proiritize our website design and development work with:'}
                bdesc={`<ul class='ml-50'>
                <li>User-centric Design – Fast-loading, glitch-free, and simple-to-use designs.</li>
                <li>Strategy & information architecture — Content strategy, taxonomy, and conversion mapping.</li>
                <li>Mobile Responsiveness – Leveraged for each screen size.</li>
                <li>Strong Branding – Steadiness across visuals, tone, and messaging.</li>
                <li>SEO Friendly – Built-in strategies to assist your business in ranking higher on Google.</li>
                
            </ul>
            <p class='mt-20'>Your website becomes your digital storefront, and we make sure it keeps customers engaged from the initial click to the ultimate conversion.</p>
            `}
            bbg={DevelopmentProcess}
            />

                        <div className="frame-1200 py-100 sm-pt-0 sm-pb-50 sm-px-20">
        <div className="text-center sm-text-start mb-50 sm-mb-20">
          <h2 className="mb-20">Website Design Ajman- Cost Breakdown</h2>
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

                
                <CommonThreeCard
                text1={'Why Choose Website Development Agency'}
                text2={"Many agencies can build websites, but few combine a deep understanding of the local market with modern engineering. Here’s why Website Development Agency is the preferred partner for businesses in Abu Dhabi:"}
                boxdata={[
                    { id: 1, img: StrategicProblemSolvingimage, title: 'Local Market Mastery', desc: 'We understand UAEs cultural expectations, Arabic language nuances, and business etiquette with worldwide UX and accessibility standards.' },
                    { id: 2, img: FocusedApproachimage, title: 'End-to-end Services', desc: 'Strategy, UX/UI design, development, hosting, security, SEO, analytics, and continuous support- all managed by one cross-functional team.' },
                    { id: 3, img: PartnershipCommitmentimage, title: 'Future-ready Engineering', desc: 'We develop adaptable architectures, utilize headless CMS solutions, and implement progressive web app technologies to ensure your website remains scalable for the future.' },
                    { id: 4, img: Transparencyimage, title: 'Conversion-first Approach', desc: 'We don’t just make sites look attractive- we design quantifiable funnels with analytics, A/B testing, and iterative leveraging.' },
                    { id: 5, img: TechnologyAdoptionimage, title: '24/7 Support & Maintenance', desc: 'SLA-based monitoring, security patching, and performance tuning so your site is available 24*7.' },
                    { id: 6, img: ValueforMoneyServicesimage, title: 'Diverse Experience', desc: 'We partner with startups, SMEs, corporations and government bodies- tailoring our approach to fit budget, regulatory needs and growth ambitions.' },
                ]}
            />
                        <CommonResult
                heding={"Best Web Design Services that Drive Measurable Results"}
                desc={"Great website design connects a visitor’s journey from initial impact to conversation. We are the best expert web design agency creating websites that don’t just look good and functional, but also work across all devices. From intuitive UX design to high end visuals, we outline websites attract, engage, and keep users engaged."}

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
                footertext={'We have worked with top-level businesses in Sharjah and USE across retail, real estate, healthcare, education, e-commerce, etc. We know what it takes to build a digital platform that works for every niche. '}

            />
                <CommonClientTestimonials/>
                <LocationService activeLocation="ajman" />

            <CommonFaqSection
                faqs={[
                    {
                        q: "What Types of Websites Do You Develop for Ajman Businesses?",
                        a: "We create a wide range of websites, including corporate sites, eCommerce stores, portfolio sites, blogs, and custom web applications, all designed to meet the unique needs of Ajman businesses."
                    },
                    {
                        q: "How Much Does Website Development in Ajman Cost?",
                        a: "The cost depends on the type of website, complexity, features, and timeline. Our packages start from AED 5,000 and can be customized to suit different budgets and business requirements."
                    },
                    {
                        q: "Do You Provide Multilingual Websites in Ajman?",
                        a: "Yes, we design websites that support both Arabic and English, ensuring a seamless experience for your local and international audience."
                    },
                    {
                        q: "Do You Offer Post-launch Support?",
                        a: "Yes, we provide free maintenance for the first three months and offer ongoing support plans, including uptime monitoring, security alerts, backups, and instant assistance for any issues."
                    },
                    {
                        q: "Which Web Development Platforms Do you Recommend?",
                        a: "We recommend WordPress for content-rich websites, Shopify, Magento, or WooCommerce for eCommerce, and headless CMS with React or Vue for high-performance websites with complex integrations."
                    },
                    {
                        q: "How Do You Handle Integrations with CRM, ERP, or Payment Gateways?",
                        a: "We implement secure API integrations and middleware where necessary, ensuring automated data flows that synchronize leads, orders, and records with your internal systems."
                    },
                    {
                        q: "How Long Does It Take to Develop a Website in Ajman?",
                        a: "Project timelines vary based on complexity, features, and revisions. On average, a standard website can be completed in 4–8 weeks, while more complex solutions may take longer."
                    },
                    {
                        q: "Do you Follow Security Best Practices in Web Development?",
                        a: "Yes, we follow secure coding practices and adhere to industry-standard security protocols to protect your website and user data."
                    },
                    {
                        q: "Why Choose Website Development Agency for Web Development in Ajman?",
                        a: "Website Development Agency is one of the most reputable and 5-star rated web design agency in Ajman. We combine local market understanding with modern web technologies to deliver websites that are visually appealing, functional, and aligned with your business goals and digital growth initiatives."
                    }
                ]}
            />


        </>
    )
}

export default page