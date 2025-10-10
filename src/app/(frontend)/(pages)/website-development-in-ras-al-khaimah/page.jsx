import React from 'react'
import Banner from '../../component/pages/home/Banner'
import CommonAboutPage from '../../component/pages/common/CommonAboutPage'
import aboutimagesharjhat from '@/app/(frontend)/assets/images/website-development/sharjah.jpg'
import setusimagesharjhat from '@/app/(frontend)/assets/images/website-development/sharjah-bg.webp'
import sharjahAboutimg from '@/app/(frontend)/assets/images/website-development/sharjah-about.webp'
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


import approchbannerimage from '@/app/(frontend)/assets/images/website-development/our-approch.webp'
import CommonServices from '../../component/pages/common/CommonServices'
import CommonFaqSection from '../../component/pages/common/CommonFaqSection'
import CommonResult from '../../component/pages/common/CommonResult'



import customdesign from '@/app/(frontend)/assets/images/website-development/custom-design.png'
import SEOCentric from '@/app/(frontend)/assets/images/website-development/SEO-Centric.webp'
import MobileFirst from '@/app/(frontend)/assets/images/website-development/Mobile-First.webp'
import Optimized from '@/app/(frontend)/assets/images/website-development/Optimized.webp'
import CommonIndustries from '../../component/pages/common/CommonIndustries'
import CommonProtfolio from '../../component/pages/common/CommonProtfolio'



const page = () => {
    return (
        <>
            <Banner
                text1={"designed to impress, engineered to perform"}
                text2={"Best Web Development Agency in Ras Al Khaimah"}
                text3={"At WD Agency, we develop exceptional websites for businesses in Ras Al Khaimah (RAK). Whether designing for a luxury resort, an enterprise business, or a start-up, we craft custom-built websites for all RAK-based businesses."}
            />
            <CommonAboutPage
                text1={"Web Design in Ras Al Khaimah- Engineered to Impress & Perform"}
                text2={"In the current digital-first environment, your website is not just a digital brochure. Rather, it is your identity, sales channel, and credibility. At WD Agency, we develop exceptional websites for businesses in Ras Al Khaimah (RAK)."}
                text3={"Our team combines creativity, technical expertise, and market insight to craft websites that not only look stunning but also perform seamlessly across all devices. We focus on building user-friendly interfaces, optimized loading speeds, and conversion-driven layouts that reflect your brand’s values."}
                img={aboutimagesharjhat}
            />
            <CommonSetsUs
                text1={'Building Digital Future of Ras Al Khaimah'}
                text2={'Your search for a trusted website development company in Ras Al Khaimah ends with WD Agency. With over a decade of proven experience, we specialize in crafting websites that balance creativity, technology, and business purpose to help RAK-based brands grow online.<br><br>At WD Agency, we focus on creating websites that reflect your brand’s personality while ensuring smooth functionality and measurable performance. Our approach combines modern design principles, powerful development frameworks, and an understanding of Ras Al Khaimah’s evolving business landscape.'}
                bg={setusimagesharjhat}
            />
            <CommonAboutPage2
                text1="Why A Professional Website Matters in Ras Al Khaimah"
                text2={`
                            <p class="mb-20">
                            Ras Al Khaimah is among the UAE's fastest-growing business destinations. In today's world of commerce, potential customers are online, engaging and comparing services for providers in seconds. This is why you need to gather your thoughts regarding a professional website that is responsive and SEO friendly. 
                            </p>
                            <ul class="ml-40">
                            <li>Ultimately, a well-constructed website will help you to:</li>
                            <li>Instill trust and confidence among potential clients.</li>
                            <li>Display your products or services in an efficient and stimulating manner. </li>
                            <li>Generate engaged and qualified leads with compelling design and content.</li>
                            <li>Outpace your competitors in a growing digital landscape</li>
                            </ul>
                            <p>
                            At WD Agency, our web design services are developed with attention to performance metrics while creating a visually appealing website that drives conversion and growth.
                            </p>
                    `}
                img={sharjahAboutimg}
            />
            <CommonProtfolio/>
            <CommonThreeCard
                text1={'Why Choose WD Agency for Website <br/>Design Services'}
                text2={"Among many other web design companies in Ras Al Khaimah, we stand as the best with a strong understanding of local business, audience demographics, and the latest digital trends. We’re more than just a website design company- we’re a digital transformation partner dedicated to helping businesses expand and thrive online."}
                boxdata={[
                    { id: 1, img: StrategicProblemSolvingimage, title: 'Proven Experience', desc: 'We have years of documented successful projects with numerous industries. Our extensive portfolio demonstrates our ability to adapt to different business needs and deliver impactful digital solutions.' },
                    { id: 2, img: FocusedApproachimage, title: 'End-to-End Solutions', desc: 'We offer comprehensive services covering every stage of your website’s lifecycle, including design, development, SEO, and maintenance. From concept to launch, we ensure your website remains fully optimized and secure.' },
                    { id: 3, img: PartnershipCommitmentimage, title: 'Partnership Commitment', desc: 'We foster long-term partnerships with our clients, driven by a commitment to excellence. Rather than just acting as a service provider, we collaborate closely with businesses, working hand-in-hand to support their growth.' },
                    { id: 4, img: Transparencyimage, title: 'Full Transparency', desc: 'We ensure full transparency throughout every phase of your website project- from pricing to timelines. You’ll be informed at every step, from design to deployment, with no hidden costs or unexpected surprises.' },
                    { id: 5, img: TechnologyAdoptionimage, title: 'Scalable Technology', desc: 'We utilize the latest tools, technologies, and frameworks to create websites that are ready for the future. Our web solutions are crafted to keep your business at the forefront of the digital landscape.' },
                    { id: 6, img: ValueforMoneyServicesimage, title: 'Value for Money Services', desc: 'We deliver premium web design services in Sharjah at a competitive price compared to any other provider. WD Agency ensures the maximum ROI of your spending by delivering the most impactful solutions.' },
                ]}
            />
            <CommonApproch
                text1={"Web Design Agency Ras Al Khaimah- Your Partner in Growth"}
                text2={` <p  class='mb-20'>Your website is the cornerstone of your online success. At WD Agency, we combine creativity, technology, and strategy to create a website that is not only unique but also scalable to grow alongside your business. We focus on delivering user-friendly interfaces, fast-loading pages, and seamless navigation to ensure an engaging digital experience for every visitor.</p>
                     <p>From start-ups to established businesses, we are honored to help companies in Ras Al Khaimah embrace the digital future with confidence. Our goal is to ensure every website we build drives engagement, builds trust, and delivers measurable results. With a focus on responsive design, SEO optimization, and secure coding practices, we ensure your website not only looks professional but also performs flawlessly across devices.</p>`}
                bannerimage={approchbannerimage}
            />
            <CommonServices
                theding={'The Website Design & Development Process We Follow'}
                tdesc={` <p>Our website development process begins with understanding your business, target audience, and goals. We conduct thorough research and analysis to define the project scope, create detailed wireframes, and plan the website’s structure. This ensures that every element, from navigation to content placement, is aligned with your objectives and provides a seamless experience.</p>
                <p class='my-20'>Once the blueprint is ready, our design and development teams collaborate to bring the website to life. We focus on responsive design, intuitive interfaces, and optimized performance. After development, we conduct extensive testing for functionality, speed, and security before launching the site.</p>
                `}
                bheding={'Our detailed website development process include:'}
                bdesc={`<ul class='ml-50'>
                <li>Discovery & Research- Being acknowledged with your business, your competitors, and your goals.</li>
                <li>Wireframing & Design- Outlining designs that weigh beauty with usability. </li>
                <li>Development & Coding- Building working, responsive, and safe sites utilizing the latest technologies.</li>
                <li>Testing & QA- Examining for speed, functions, and responsiveness throughout several devices.</li>
                <li>Launch & Optimization- Introducing your website and leveraging it for search.</li>
            </ul>
            `}
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
            <CommonFaqSection
                faqs={[
                    {
                        q: "What Types of Websites Do You Develop for Businesses in Ras Al Khaimah?",
                        a: "We develop a wide range of websites including corporate, eCommerce, portfolio, and service-based sites. Each project is customized to meet the specific needs and goals of businesses in Ras Al Khaimah."
                    },
                    {
                        q: "How Much Does Website Development in Ras Al Khaimah Cost?",
                        a: "The cost depends on the website type, design complexity, features, and timeline. Typically, our web development packages start from AED 5,000, with flexible options to suit different business sizes and requirements."
                    },
                    {
                        q: "How Long Does It Take to Build a Website in Ras Al Khaimah?",
                        a: "A standard business website usually takes 4–6 weeks to complete, while advanced or custom projects with integrations may take longer depending on scope and feedback cycles."
                    },
                    {
                        q: "Do You Design Websites in Both Arabic and English?",
                        a: "Yes, we specialize in bilingual websites (Arabic and English) to help your brand connect effectively with local and international audiences in Ras Al Khaimah."
                    },
                    {
                        q: "Can You Help Us Redesign Our Existing Website?",
                        a: "Absolutely. We can revamp your existing website with a modern design, improved performance, and enhanced user experience while preserving your SEO and existing content."
                    },
                    {
                        q: "Do You Offer SEO Services for Ras Al Khaimah Websites?",
                        a: "Yes, we integrate SEO best practices into every website we build. We also provide dedicated SEO services to help your site rank higher and attract qualified traffic in Ras Al Khaimah."
                    },
                    {
                        q: "How Do You Ensure Website Security and Performance?",
                        a: "We follow secure coding practices, implement SSL certificates, conduct performance optimization, and run security audits to ensure your website is safe, fast, and reliable."
                    },
                    {
                        q: "Do You Provide Post-launch Maintenance and Support?",
                        a: "Yes, we offer 3 months of free maintenance after launch and ongoing support plans covering updates, security checks, backups, and performance monitoring."
                    },
                    {
                        q: "Which Technologies and Platforms Do You Use for Web Development?",
                        a: "We work with leading technologies such as WordPress, Shopify, Magento, React, and custom CMS solutions, depending on the project requirements and scalability goals."
                    },
                    {
                        q: "Why Should Businesses in Ras Al Khaimah Choose WD Agency?",
                        a: "WD Agency combines local market understanding, creative design, and technical expertise to deliver high-performing websites. Our team ensures every project reflects your brand identity, drives engagement, and supports long-term business growth."
                    }
                ]}
            />


        </>
    )
}

export default page