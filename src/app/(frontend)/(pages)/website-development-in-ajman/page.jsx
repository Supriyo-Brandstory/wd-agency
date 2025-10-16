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
import CommonApproch from '../../component/pages/common/CommonApproch'


import approchbannerimage from '@/app/(frontend)/assets/images/ajman/our-approch.webp'
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


const page = () => {
    return (
        <>
            <Banner
                text1={"Elevate your online presence with"}
                text2={"Web Design Agency in Ajman"}
                text3={"We are WD Agency, the best website development agency in Ajman, UAE. Let’s create your website beyond the ordinary."}
            />
            <CommonAboutPage
                text1={"Website Design Ajman – Build Your Digital Identity with Confidence"}
                text2={"In today's ever-increasing digital universe, having a website is no longer just an option, it is your business's very first impression, digital storefront of your brand, and best conversion tool. At WD Agency, we specialize in providing supreme website design services in Ajman to help businesses stand out, attract customers, and grow sustainably."}
                text3={"At Website Development Agency, we design and develop websites tailored for businesses in Ajman, blending thoughtful strategy, user-centric design, and reliable engineering. We ensure our solutions reflect the local culture and align with Ajman’s digital development objectives."}
                img={aboutimagesharjhat}
            />
            <CommonSetsUs
                text1={'Elevating Digital Experiences in Ajman'}
                text2={'Searching for a reliable website development company in Ajman? WD Agency combines over a decade of experience with cutting-edge web design and development expertise to deliver websites that are both visually appealing and highly functional.<br><br>Our team focuses on creating digital experiences that reflect your brand, engage your audience, and drive meaningful conversions. By integrating innovative design with advanced technology, we help businesses in Ajman establish a strong online presence and achieve sustainable growth in today’s competitive digital landscape.'}
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
                            When you partner with a WD Agency for your website design in Ajman, you don’t just develop a website, you get a deliberate business tool designed to uplift your brand.
                            </p>
                    `}
                img={sharjahAboutimg}
            />
            <CommonProtfolio/>
            <CommonThreeCard
                text1={'Why choose WD Agency- Local Expertise, Global engineering'}
                text2={"Many agencies can build websites, but few combine a deep understanding of the local market with modern engineering. Here’s why WD Agency is the preferred partner for businesses in Abu Dhabi:"}
                boxdata={[
                    { id: 1, img: StrategicProblemSolvingimage, title: 'Local Market Mastery', desc: 'We understand UAEs cultural expectations, Arabic language nuances, and business etiquette with worldwide UX and accessibility standards.' },
                    { id: 2, img: FocusedApproachimage, title: 'End-to-end Services', desc: 'Strategy, UX/UI design, development, hosting, security, SEO, analytics, and continuous support- all managed by one cross-functional team.' },
                    { id: 3, img: PartnershipCommitmentimage, title: 'Future-ready Engineering', desc: 'We develop adaptable architectures, utilize headless CMS solutions, and implement progressive web app technologies to ensure your website remains scalable for the future.' },
                    { id: 4, img: Transparencyimage, title: 'Conversion-first Approach', desc: 'We don’t just make sites look attractive- we design quantifiable funnels with analytics, A/B testing, and iterative leveraging.' },
                    { id: 5, img: TechnologyAdoptionimage, title: '24/7 Support & Maintenance', desc: 'SLA-based monitoring, security patching, and performance tuning so your site is available 24*7.' },
                    { id: 6, img: ValueforMoneyServicesimage, title: 'Diverse Experience', desc: 'We partner with startups, SMEs, corporations and government bodies- tailoring our approach to fit budget, regulatory needs and growth ambitions.' },
                ]}
            />




            <CommonApproch
                text1={"Web Design Company in Ajman- Where Creativity Meets Technology"}
                text2={` <p>Our suite of web development services is tailored to meet the diverse needs of businesses in Ajman. We deliver custom website solutions designed to enhance online presence, improve user experience, and drive measurable results.</p>
                    <ul class="my-20">
                    <li>Attractive with highly engaging layouts, modern color schemes, and consistent branding.</li>
                    <li>User-friendly design, with simple navigation ensuring visitors can find what they might be looking for with ease.</li>
                    <li>Mobile-first, with designs being fully responsive and optimized for smartphones and tablets.</li>
                    <li>SEO-optimized, with a structure that ensures higher ranking and increased visibility on search engines.</li>
                  </ul>
                  <p>Whether launching your first digital presence as a startup or the redesigning website, we make sure your website represents you well and supports your growth ambitions.</p>

                    `}
                bannerimage={approchbannerimage}
            />
            <CommonServices
                theding={'Web Design in Ajman- More Than Just Aesthetics'}
                tdesc={` <p>A successful website goes beyond visual appeal; it’s about delivering real value to users. At WD Agency, our approach to web design in Ajman focuses on creating experiences that are intuitive, engaging, and purposeful. Every element from layout and navigation to content placement is designed to guide visitors seamlessly, ensuring they find what they need quickly while leaving a lasting impression of your brand.</p>
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
            <CommonResult
                heding={"Best Web Design Services that Drive Measurable Results"}
                desc={"Great website design connects a visitor’s journey from initial impact to conversation. We are the best expert web design agency creating websites that don’t just look good and functional, but also work across all devices. From intuitive UX design to high end visuals, we outline websites attract, engage, and keep users engaged."}
                subheding={"Our Core Strengths"}
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

                <CommonIndustries/>
                <CommonClientTestimonials/>
                <CommonServiceLocations/>

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
                        q: "Why Choose WD Agency for Web Development in Ajman?",
                        a: "WD Agency is one of the most reputable and 5-star rated web design agency in Ajman. We combine local market understanding with modern web technologies to deliver websites that are visually appealing, functional, and aligned with your business goals and digital growth initiatives."
                    }
                ]}
            />


        </>
    )
}

export default page