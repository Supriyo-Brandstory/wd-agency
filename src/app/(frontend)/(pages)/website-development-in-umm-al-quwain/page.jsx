import React from 'react'
import Banner from '../../component/pages/home/Banner'
import CommonAboutPage from '../../component/pages/common/CommonAboutPage'
import aboutimageummalquwain from '@/app/(frontend)/assets/images/website-development/sharjah.jpg'
import setusimageummalquwain from '@/app/(frontend)/assets/images/website-development/sharjah-bg.webp'
import ummalquwainAboutimg from '@/app/(frontend)/assets/images/website-development/sharjah-about.webp'
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
        text1={"Most Trusted Website Development Services"}
        text2={"Web Development in Umm Al Quwain Tailored for<br>Your Business Growth"}
        text3={"WD Agency is your one-stop solution for web development in Umm Al Quwain, delivering cutting-edge web design and development services. Since 2014, we have worked on over 200 website projects for local businesses in Umm Al Quwain."}
    />
    <CommonAboutPage
        text1={"Best Website Development Agency Umm Al Quwain- WD Agency"}
        text2={"Is your business ready for a digital transformation? We craft sleek, modern, and brand-focused websites that drive real impact. At WD Agency, our portfolio includes top-performing websites that deliver high-performance, visually appealing, and SEO-friendly digital solutions for businesses."}
        text3={"As a leading web development agency in Umm Al Quwain, we serve clients across all areas, from Al Salamah to Al Raas, and beyond. We create refined websites that perfectly reflect your brand identity from top to bottom."}
        img={aboutimageummalquwain}
    />
    <CommonSetsUs
        text1={'Redefining Digital Experiences for a Decade'}
        text2={'Your search for a professional website development company in Umm Al Quwain ends with WD Agency. We bring a decade of experience, web design and development expertise, and a vision to empower businesses with the best possible services.<br><br>At WD Agency, we redefine digital experiences with creative web design, next-gen technology, and seamless operability—keeping your branding aligned. We ensure your website exudes professionalism, delivers a memorable digital experience, and turns engagement into meaningful conversions.'}
        bg={setusimageummalquwain}
    />
    <CommonAboutPage2
        text1="Why a Professional Website Design Matters <br/>for Businesses?"
        text2={`
            <p class="mb-20">
            Websites are more than just a digital brochure; they define your brand and act as an active sales channel 24/7. For local businesses in Umm Al Quwain looking to level up, a website is the perfect touchpoint to expand your reach. Your audience can quickly explore your business, offerings, and become loyal customers. A professional website design can help you:
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
    <CommonProtfolio/>
    <CommonThreeCard
        text1={'Why Choose WD Agency as Your Web Partner<br/> in Umm Al Quwain'}
        text2={"Among many web development companies in Umm Al Quwain, we stand out with a deep understanding of local business needs, audience demographics, and the latest digital trends. We are not just a website development company; we are your transformation partner, supporting your digital expansion."}
        boxdata={[
            { id: 1, img: StrategicProblemSolvingimage, title: 'Strategic Problem Solving', desc: 'We excel in creating visually stunning, functional, and conversion-focused websites tailored to your brand. Every design we craft delivers a perfect blend of creativity and performance.' },
            { id: 2, img: FocusedApproachimage, title: 'Focused Approach', desc: 'As top web development experts, we focus on building clear strategies, addressing unique needs, and delivering exceptional websites that resonate with your brand.' },
            { id: 3, img: PartnershipCommitmentimage, title: 'Partnership Commitment', desc: 'We build long-term relationships with clients, delivering excellence. We work as a partner, not just an agency, ensuring growth and success hand-in-hand.' },
            { id: 4, img: Transparencyimage, title: 'Transparency', desc: 'We maintain complete openness at every project stage, from pricing to timelines. You stay informed from design to deployment—no hidden charges, no surprises.' },
            { id: 5, img: TechnologyAdoptionimage, title: 'Technology Adoption', desc: 'We leverage the latest tools, technologies, and frameworks to deliver future-ready websites, keeping your business ahead of the digital curve.' },
            { id: 6, img: ValueforMoneyServicesimage, title: 'Value for Money Services', desc: 'We provide premium web development services in Umm Al Quwain at competitive prices, ensuring maximum ROI with impactful solutions.' },
        ]}
    />
    <CommonApproch
        text1={"Our Approach to Web Development in Umm Al Quwain"}
        text2={`
            <p class='mb-20'>We prioritize designing websites that are visually impressive, functional, and deliver the best user experience. A great website adds credibility to your brand, boosts customer trust, and serves as a premier sales channel 24/7. We blend advanced technology with an SEO-based structure for an exceptional browsing experience for every visitor.</p>
            <p>We pay utmost attention to detail, from color palettes and images to layouts and responsive design. We believe responsive web design aligns firmly with your brand and business objectives. Whether designing for e-commerce, service providers, or other industries, we keep your audience and goals in mind. Our designs are attractive, SEO-optimized, and built to improve Google rankings, visibility, and traffic.</p>
        `}
        bannerimage={approchbannerimage}
    />
    <CommonServices
        theding={'Best Web Development Services in Umm Al Quwain - WD Agency'}
        tdesc={`
            <p>The business landscape of Umm Al Quwain is rapidly going digital, making it essential for brands to create a lasting impact. As customers increasingly search, browse, and shop online, your website becomes the key touchpoint for generating valuable leads and conversions.</p>
            <p class='my-20'>As a pioneer web development agency in Umm Al Quwain, we deliver high-performance websites using the latest technology. Every website we create includes critical elements: fast loading, mobile responsiveness, SEO optimization, and seamless navigation.</p>
        `}
        bheding={'Key features of our web development services in Umm Al Quwain include:'}
        bdesc={`
            <ul class='ml-50'>
            <li>Custom website designs tailored to your industry and business objectives.</li>
            <li>Responsive web design optimized for all screen sizes (Mobile, Desktop, Tablet).</li>
            <li>Easy navigation with strategic Call-to-Action placements.</li>
            <li>State-of-the-art visuals with consistent branding.</li>
            <li>Secure coding practices adhering to industry-standard protocols.</li>
            </ul>
        `}
    />
    <CommonResult 
        heding={"Best Web Development Services that Drive Measurable Results"}
        desc={"Great website design connects a visitor’s journey from first impression to conversion. We are the leading web development agency, creating websites that are not only visually appealing and functional but also perform seamlessly across all devices. From intuitive UX design to high-end visuals, our websites attract, engage, and retain users."}
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
                desc: "Structured with on-page SEO basics for better visibility.",
                link: "#"
            },
            {
                id: 3,
                img: MobileFirst,
                title: "Mobile-First Approach",
                desc: "Optimized for seamless performance across all devices.",
                link: "#"
            },
            {
                id: 4,
                img: Optimized,
                title: "Optimized for Performance",
                desc: "Fast, secure, and designed for conversions.",
                link: "#"
            },
        ]}
        footertext={'We have worked with top businesses in Umm Al Quwain and the UAE across retail, real estate, hospitality, e-commerce, and more. We know what it takes to build a digital platform that works for every niche.'}
    />
    <CommonIndustries/>
    <CommonFaqSection
        faqs={[
            {
                q: "Why Should I Choose Website Development Agency for Website Development in Umm Al Quwain?",
                a: "Website Development Agency specializes in creating custom, user-friendly, and visually appealing websites tailored to your business goals, ensuring a strong online presence and functionality. We have 12+ years of experience working with 500+ clients across Umm Al Quwain, Dubai, and the UAE."
            },
            {
                q: "What Industries Do You Design Websites for in Umm Al Quwain?",
                a: "Since 2014, we have served a diverse range of industries, including retail, hospitality, e-commerce, real estate, professional services, and more, delivering tailored web development solutions."
            },
            {
                q: "Do You Provide Custom Website Designs or Use Templates?",
                a: "Our focus is on custom website designs that reflect your unique brand identity, but we also offer template-based solutions for businesses seeking faster turnaround and budget-friendly options."
            },
            {
                q: "How Much Does Website Development in Umm Al Quwain Cost?",
                a: "The cost depends on the website type, design complexity, features, and timeline. Website Development Agency offers flexible packages to suit various business needs and budgets. Typically, website development in Umm Al Quwain starts from AED 5,000, with prices varying based on customization and functionality."
            },
            {
                q: "How Long Does It Take to Develop a Website?",
                a: "A basic business website typically takes 3-4 weeks, while feature-rich or e-commerce websites may take 6-10 weeks, depending on complexity."
            },
            {
                q: "Will My Website be Optimized for Speed and Performance?",
                a: "Yes, we follow best practices to ensure your website loads quickly, offers smooth navigation, and provides an excellent user experience."
            },
            {
                q: "Will My Website Be Mobile-friendly?",
                a: "Yes, every website we develop is fully responsive, ensuring seamless performance across desktops, tablets, and smartphones."
            },
            {
                q: "Can You Develop an E-commerce Website for My Business?",
                a: "Yes, we create secure, scalable, and user-friendly eCommerce websites with product catalogs, shopping carts, and integrated payment gateways."
            },
            {
                q: "Do You Provide Website Redesign Services?",
                a: "Yes, if your current website is outdated or underperforming, we can redesign it with modern layouts, improved user experience, and enhanced functionality."
            },
            {
                q: "Do You Provide Ongoing Support After The Website is Launched?",
                a: "Yes, Website Development Agency offers website maintenance and support services in Umm Al Quwain to keep your website updated, secure, and running smoothly."
            },
            {
                q: "How Can I Get Started with Website Development Agency for Website Development in Umm Al Quwain?",
                a: "Simply reach out through our contact form or give us a call. Our team will discuss your requirements and create a tailored proposal for your website development project."
            }
        ]}
    />
</>
    )
}

export default page