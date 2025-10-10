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


const page = () => {
    return (
    <>
    <Banner
        text1={"Elevate your online presence with"}
        text2={"Website Development Company in Fujairah"}
        text3={"We are WD Agency, the leading web development agency in Fujairah, UAE. Let’s create your website beyond the ordinary."}
    />
    <CommonAboutPage
        text1={"Website Design in Fujairah- Building Digital Confidence"}
        text2={"In today's ever-increasing digital universe, having a website is no longer just an option, it is your business's very first impression, digital storefront of your brand, and best conversion tool. At WD Agency, we specialize in providing supreme website development services in Fujairah to help businesses stand out, attract customers, and grow sustainably."}
        text3={"We create and develop websites tailored for businesses in Fujairah, blending thoughtful strategy, user-centric design, and reliable engineering. We ensure our solutions reflect the local culture and align with Fujairah’s digital development objectives."}
        img={aboutimagesharjhat}
    />
    <CommonSetsUs
        text1={'Elevating Digital Experiences'}
        text2={'Searching for a reliable website development company in Fujairah? WD Agency combines over a decade of experience with cutting-edge web design and development expertise to deliver websites that are both visually appealing and highly functional.<br><br>Our team focuses on creating digital experiences that reflect your brand, engage your audience, and drive meaningful conversions. By integrating innovative design with advanced technology, we help businesses in Fujairah establish a strong online presence and achieve sustainable growth in today’s competitive digital landscape.'}
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
                    When you partner with WD Agency, you don’t just develop a website, you get a deliberate business tool designed to uplift your brand. We are a full-stack web design and development agency driving digital success for brands.
                    </p>
            `}
        img={sharjahAboutimg}
    />
    <CommonProtfolio/>
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




    <CommonApproch
        text1={"Web Development Company- Where Creativity Meets Technology"}
        text2={` <p>Our suite of web development services is tailored to meet the diverse needs of businesses in Fujairah. We deliver custom website solutions designed to enhance online presence, improve user experience, and drive measurable results.</p>
            <ul class="my-20">
            <li>Attractive with highly engaging layouts, modern color schemes, and consistent branding.</li>
            <li>User-friendly design, with simple navigation ensuring visitors can find what they might be looking for with ease.</li>
            <li>Mobile-first, with designs being fully responsive and optimized for smartphones and tablets.</li>
            <li>SEO-optimized, with a structure that ensures higher ranking and increased visibility on search engines.</li>
          </ul>
          <p>Whether launching your first digital presence as a startup or redesigning your website, we make sure your website represents you well and supports your growth ambitions.</p>

            `}
        bannerimage={approchbannerimage}
    />
    <CommonServices
        theding={'Website Design in Fujairah- More Than Just Aesthetics'}
        tdesc={` <p>An effective website is not just visually appealing; it also functions perfectly to turn visitors into paying customers. With our website design services in Fujairah, we place an emphasis not just on appearance, but on function by providing a beautiful, user-friendly, and business-focused website.</p>
            <p class='mt-20'>We believe that effective web design combines creativity with functionality. Fast-loading pages, mobile responsiveness, and clear calls-to-action work together to enhance usability and drive conversions. </p>
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
        bbg={DevelopmentProcess}
        />
    <CommonResult
        heding={"Best Website Development Services that Drive Measurable Results"}
        desc={"Great website design connects a visitor’s journey from initial impact to conversation. We are the best expert web development agency creating websites that don’t just look good and functional, but also work across all devices. From intuitive UX design to high end visuals, we outline websites attract, engage, and keep users engaged."}
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
        footertext={'We have worked with top-level businesses in Fujairah and UAE across retail, real estate, healthcare, education, e-commerce, etc. We know what it takes to build a digital platform that works for every niche. '}

    />

        <CommonIndustries/>
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
                q: "Why Choose WD Agency for Web Development in Fujairah?",
                a: "WD Agency stands out as a trusted web development partner in Fujairah by combining deep local market understanding with creative design and advanced technical expertise. We focus on building websites that not only look visually appealing but also provide seamless functionality, intuitive navigation, and an engaging user experience."
            }
        ]}
    />


</>
    )
}

export default page