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
                text1={"Build Your Digital Presence with"}
                text2={"Best Website Design Agency in Abu Dhabi"}
                text3={"At WD Agency, we are the best website design agency in Abu Dhabi, UAE. Let’s create your website beyond the ordinary."}
            />
            <CommonAboutPage
                text1={"Web Design Agency in Abu Dhabi"}
                text2={" In Abu Dhabi’s competitive, high-expectation marketplace, a website is far more than a place on the web- it’s your brand’s front door, your lead generator, and often the very first impression customers have of your business. Whether you’re a startup, a multinational, a hospitality brand, or a government service, your site must be beautiful, fast, accessible, and secure."}
                text3={"At Website Development Agency (WD Agency), we design and build websites for Abu Dhabi businesses that combine strategic thinking, user-first design, and resilient engineering. Our emphasis is on creating digital experiences that builds trust, enhance visibility, and turn visitors into customers. We line up technical expertise with local culture, Arabic/English language requirements, and the Emirate’s Vision of 2030 digital goals."}
                img={aboutimagesharjhat}
            />
            <CommonSetsUs
                text1={'Transforming Digital Presence in Abu Dhabi'}
                text2={'Looking for a website development company in Abu Dhabi that truly understands your business needs? WD Agency brings over a decade of experience in designing and developing websites that not only look stunning but also perform seamlessly. <br><br>We specialize in crafting intuitive websites that combine innovative design, advanced technology, and smooth functionality. Every website we build is crafted to strengthen your brand, engage your audience, and convert visitors into loyal customers- helping your business thrive in Abu Dhabi’s competitive digital landscape.'}
                bg={setusimagesharjhat}
            />
            {/* rest */}
            <CommonAboutPage2
                text1="Why a World-class Website Matters in Abu Dhabi"
                text2={`
                            <p class="mb-20">
                            Abu Dhabi is an economic hub where professionalism, sophistication, and worldwide standards are anticipated. We create websites with global standard with a fusion of local touch keeping up with 5 golden rules in mind:
                            </p>
                            <ul class="ml-40">
                            <li>Builds Immediate Credibility- Professional design signals a professional company.</li>
                            <li>Supports Conversions- Transparent journeys and calls-to-action convert visitors into leads or customers.</li>
                            <li>Offers 24/7 Accessibility- Your business can be explored and communicated with at any time.</li>
                            <li>Increases Reach- Multilingual, SEO-ready sites stretch to local, regional, and worldwide audiences.</li>
                            <li>Aligns with Vision 2030- The emirate’s digitisation targets digitally mature reward organisations.</li>
                            </ul>
                            <p>
                            If you want to attract higher-value clients, reduce friction in service delivery, or grow online revenue, your website is the single most powerful lever.
                            </p>
                    `}
                img={sharjahAboutimg}
            />
            <CommonProtfolio/>
            <CommonThreeCard
                text1={'Why Choose WD Agency- Local Expertise, Global Engineering'}
                text2={"Many agencies build websites, few combine a local business with modern engineering. Here’s what makes WD Agency the preferred partner for businesses in Abu Dhabi:"}
                boxdata={[
                    { id: 1, img: StrategicProblemSolvingimage, title: 'Local Market Mastery', desc: 'We understand UAE cultural expectations, Arabic language nuances, and business etiquette with worldwide UX and accessibility standards.' },
                    { id: 2, img: FocusedApproachimage, title: 'End-to-end Delivery', desc: 'Strategy, UX/UI design, development, hosting, security, SEO, analytics, and continuous support- all managed by one cross-functional team.' },
                    { id: 3, img: PartnershipCommitmentimage, title: 'Future-ready Engineering', desc: 'We create flexible architectures, headless CMS alternatives, and progressive web app techniques that safeguard your investment.' },
                    { id: 4, img: Transparencyimage, title: 'Conversion-first Approach', desc: 'We don’t just make sites look attractive- we design quantifiable funnels with analytics, A/B testing, and iterative leveraging.' },
                    { id: 5, img: TechnologyAdoptionimage, title: '24/7 Free Support', desc: ' Local SLA-based monitoring, security patching, and performance tuning so your site is always available.' },
                    { id: 6, img: ValueforMoneyServicesimage, title: 'Diverse Experience', desc: 'We partner with startups, SMEs, corporations and government bodies- tailoring our approach to fit budget, regulatory needs and growth ambitions.' },
                ]}
            />




            <CommonApproch
                text1={"What We Build- Services That Cover Every Digital Need"}
                text2={` 
                    <ul>
                    <li>Website Design & Development : Custom websites built using modern frameworks and industry best practices. We begin with user journeys, then move to high-fidelity prototypes, iterative design, and powerful engineering. </li>
                    <li>eCommerce & Marketplaces : From boutique retail to multi-vendor marketplaces, we create secure, scalable commerce platforms with secure payment gateway and shipping integration.</li>
                    <li>Content Management Systems (CMS) : WordPress, headless CMS (Strapi, Contentful), Drupal- we select the proper platform for your content strategy. </li>
                    <li>Web Applications & Portals : Complex booking platforms, client portals, dashboards, CRM integrations, custom web apps. We integrate APIs, authentication, role-based access, and performant database architecture.</li>
                    <li>Progressive Web Apps (PWAs) : We create Progressive Web Apps (PWAs) that deliver app-like experiences- fast, reliable, offline-capable, and designed to re-engage users seamlessly across devices.</li>
                    <li>Hosting, Monitoring & Maintenance : UAE-based hosting options, with global CDNs for international reach, automated backups, monitoring and 24/7 support and free maintenance.</li>
                    </ul>
                    `}
                bannerimage={approchbannerimage}
            />
            <CommonServices
                theding={'The WD Agency Method - Collaborative, Transparent, & Measurable'}
                tdesc={` <p>At WD Agency, we believe in a collaborative, transparent, and measurable approach for every project we undertake. We keep you informed at every stage- from strategy to execution, ensuring complete clarity and alignment.</p>
                    <p class='mt-20'>Our structured and forward-thinking web development process not only drives measurable outcomes but also encourages creative solutions that set your business apart and deliver lasting commercial success.</p>
                `}
                bheding={'Steps We Follow in Our Web Development Process:'}
                bdesc={`<ul class='ml-50'>
                <li>Discovery & Research — Understanding requirements, competitor analysis, and audience mapping.</li>
                <li>Strategy & Architecture — Content strategy, branding strategy, and conversion mapping.</li>
                <li>Design — Wireframes, interactive prototypes, brand-consistent UI.</li>
                <li>Development — Agile development, unit & integration testing, API development.</li>
                <li>Testing & Optimisation — Load testing, security scanning, cross-browser and device QA.</li>
                <li> Launch & Maintenance — Structured rollout, continuous monitoring, and performance tracking.</li>
            </ul>
            <p class='mt-20'>We provide project deadlines, milestones, utilize tools (project boards, regular demos) so you always know the progress.</p>
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
                footertext={'We have worked with top-level businesses in Abu Dhabi across retail, real estate, healthcare, education, e-commerce, etc. We know what it takes to build a digital platform that works for every niche. '}

            />
            <CommonIndustries />

            <CommonFaqSection
                faqs={[
                    {
                        q: "Why Should I Hire a Local Abu Dhabi Agency Like WD Agency Instead of Outsourcing Overseas?",
                        a: "Local providers comprehend language, culture, regulatory expectations, and can usually offer faster, on-the-ground support. We merge local information with international technology practices so your site is culturally resonant and technically sound."
                    },
                    {
                        q: "Do You Build Websites in Arabic (RTL)?",
                        a: "Yes. We outline and advance RTL layouts, select suitable Arabic typefaces, and examine UX flows particularly for Arabic-speaking users."
                    },
                    {
                        q: "How Do You Measure Success?",
                        a: "We establish KPIs before launch- conversion rate, lead volume, organic traffic growth, page speed scores, and user engagement metrics- and update monthly."
                    },
                    {
                        q: "Will My Website Be Secure?",
                        a: "Yes, we build websites with HTTPS, WAF, constant dependency patching, role-based access control, and alternative penetration testing for high-risk projects."
                    },
                    {
                        q: "Can You Move Our Current Website To a New Platform?",
                        a: "Yes, we can seamlessly transfer your existing website to a new platform while ensuring all content, URLs, and SEO value are preserved. Our team manages the entire migration process, including 301 redirects and staged rollouts, to prevent any downtime."
                    },
                    {
                        q: "Are Your Websites SEO-Friendly?",
                        a: "Yes, we involve technical and on-page SEO cornerstones: metadata, site maps, schema markup, image alt tags, and mobile optimisation. Advanced SEO (link building, content campaigns) is provided as an add-on."
                    },
                    {
                        q: "Do You Provide Post-launch Support?",
                        a: "Yes, we provide comprehensive post-launch support. You’ll receive free website maintenance for the first three months, followed by flexible support plans that include monthly maintenance, uptime monitoring, security and error alerts, regular backups, and instant assistance for any issues."
                    },
                    {
                        q: "Which We Development Platforms Do You Recommend?",
                        a: "The web development platform we recommend depends on your project needs. For content-focused websites, WordPress provides flexibility and easy management. For eCommerce sites, platforms like Shopify, Magento, or WooCommerce offer powerful features and scalability. For high-performance websites with complex integrations, we suggest using a headless CMS paired with modern frameworks such as React or Vue, ensuring speed, customization, and seamless user experiences."
                    },
                    {
                        q: "How Do You Manage Integrations (CRM, ERP, Payment Gateways)?",
                        a: "We handle integrations by implementing secure API connections and, where necessary, middleware to ensure seamless communication between systems. Automated data flows keep your leads, orders, and records synchronized with your CRM, ERP, or payment gateways, ensuring smooth and efficient operations."
                    }
                ]}
            />


        </>
    )
}

export default page