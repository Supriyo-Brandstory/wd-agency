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



const page = () => {
    return (
        <>
            <Banner
                text1={"Build Your Digital Presence with"}
                text2={"Website Design in <br>Abu Dhabi - WD Agency"}
                text3={"We are WD Agency, the best website development agency in Abu Dhabi, UAE. Let’s create your website beyond the ordinary."}
            />
            <CommonAboutPage
                text1={"Best Web Design Agency in Abu Dhabi"}
                text2={" In Abu Dhabi’s competitive, high-expectation marketplace, a website is far more than a place on the web- it’s your brand’s front door, your lead generator, and often the very first impression customers have of your business. Whether you’re a startup, a multinational, a hospitality brand, or a government service, your site must be beautiful, fast, accessible, secure, and built with measurable business goals in mind."}
                text3={"At Website Development Agency (WD Agency), we design and build websites for Abu Dhabi organisations that combine strategic thinking, human-centered design, and resilient engineering. Our emphasis is on producing digital experiences that increase trust, enhance visibility, and turn visitors into customers or constituents. We line up technical expertise with local culture, Arabic/English language requirements, and the emirate’s Vision 2030 digital goals. <br><br>Schedule a free consultation with our specialist team, and let’s outline a website that really moves the needle for your Abu Dhabi venture."}
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
                            Abu Dhabi is an economic hub where professionalism, sophistication, and worldwide standards are anticipated. Consumers research and make decisions online; government services depend on digital access more and more; international investors assess companies by their digital existence. A well-designed website does five crucial things:
                            </p>
                            <ul class="ml-40">
                            <li>Builds immediate credibility — Professional design signals a professional company.</li>
                            <li>Supports conversions — Transparent journeys and calls-to-action convert visitors into leads or customers.</li>
                            <li>Offers 24/7 Accessibility — Your business can be explored and communicated with at any time.</li>
                            <li>Increases reach — Multilingual, SEO-ready sites stretch to local, regional, and worldwide audiences.</li>
                            <li>Aligns with Vision 2030 — The emirate’s digitisation targets digitally mature reward organisations.</li>
                            </ul>
                            <p>
                            If you want to attract higher-value clients, reduce friction in service delivery, or grow online revenue, your website is the single most powerful lever.
                            </p>
                    `}
                img={sharjahAboutimg}
            />
            <CommonThreeCard
                text1={'Why choose WD Agency — local expertise, global engineering'}
                text2={"Many agencies build websites; few combine a local Emirati understanding with modern engineering. Here’s what makes WD Agency the preferred partner for Abu Dhabi organisations:"}
                boxdata={[
                    { id: 1, img: StrategicProblemSolvingimage, title: 'Local market mastery', desc: 'We stabilize UAE cultural expectations, Arabic language nuances, and business etiquette with worldwide UX and accessibility standards.' },
                    { id: 2, img: FocusedApproachimage, title: 'End-to-end delivery', desc: 'Strategy, UX/UI design, development, hosting, security, SEO, analytics, and continuous support- all managed by one cross-functional team.' },
                    { id: 3, img: PartnershipCommitmentimage, title: 'Future-ready engineering', desc: 'We create flexible architectures, headless CMS alternatives, and progressive web app techniques that safeguard your investment.' },
                    { id: 4, img: Transparencyimage, title: 'Conversion-first thinking', desc: 'We don’t just make sites look attractive — we design quantifiable funnels with analytics, A/B testing, and iterative leveraging.' },
                    { id: 5, img: TechnologyAdoptionimage, title: '24/7 support & maintenance', desc: ' local SLA-based monitoring, security patching, and performance tuning so your site is always available.' },
                    { id: 6, img: ValueforMoneyServicesimage, title: '', desc: 'We partner with startups, SMEs, corporations and government bodies — tailoring our approach to fit budget, regulatory needs and growth ambitions.' },
                ]}
            />




            <CommonApproch
                text1={"What we build — services that cover every digital need"}
                text2={` <p>Our suite of services is designed to meet the diverse needs of Abu Dhabi businesses. We provide bespoke solutions, that are designed to deliver results.</p>
                    <ul>
                    <li>Bespoke Website Design & Development : Custom websites formed on contemporary frameworks and ideal practices. We begin with user journeys, then move to high-fidelity prototypes, iterative design, and powerful engineering. </li>
                    <li>eCommerce & Marketplaces : From boutique retail to multi-vendor marketplaces, we create secure, scalable commerce platforms with secure payment gateway and shipping integration.</li>
                    <li>Content Management Systems (CMS) : WordPress, headless CMS (Strapi, Contentful), Drupal- we select the proper platform for your content strategy. </li>
                    <li>Web Applications & Portals : Complex booking platforms, client portals, dashboards, CRM integrations, custom web apps. We integrate APIs, authentication, role-based access, and performant database architecture.</li>
                    <li>Progressive Web Apps (PWAs) : We create Progressive Web Apps (PWAs) that deliver app-like experiences- fast, reliable, offline-capable, and designed to re-engage users seamlessly across devices.</li>
                    <li>Performance & Security : From structured data and canonical tags to Core Web Vitals and CDN implementation, we optimise for discoverability and speed. Security measures include HTTPS, WAF, regular scanning.</li>
                    <li>Hosting, Monitoring & Maintenance : UAE-based hosting options, with global CDNs for international reach, automated backups, monitoring and 24/7 support- delivered through clear maintenance plans.</li>
                    </ul>
                    `}
                bannerimage={approchbannerimage}
            />
            <CommonServices
                theding={'The WD Agency method - collaborative, transparent, measurable'}
                tdesc={` <p>At WD Agency, we believe in a collaborative, transparent, and measurable approach to every project we undertake. Our defined process keeps you informed at every stage- from strategy to execution, ensuring complete clarity and alignment.</p>
                    <p class='mt-20'>Our structured and forward-thinking web development process not only drives measurable outcomes but also encourages creative solutions that set your business apart and deliver lasting commercial success.</p>
                `}
                bheding={'We follow a defined process that keeps you informed and ensures commercial outcomes:'}
                bdesc={`<ul class='ml-50'>
                <li>Discovery & research — Stakeholder interviews, competitor analysis, and audience mapping.</li>
                <li>Strategy & information architecture — Content strategy, taxonomy, and conversion mapping.</li>
                <li>Design — Wireframes, interactive prototypes, brand-consistent UI.</li>
                <li>Development — Agile sprints, unit & integration testing, API development.</li>
                <li>Testing & optimisation — Load testing, security scanning, cross-browser and device QA.</li>
                <li> Launch & analytics — Staged rollout, supervising, and objective tracking.</li>
                <li>Continuous improvement — A/B testing, SEO iteration, and quarterly performance feedback.
            </ul>
            <p class='mt-20'>We offer a project deadline and milestones upfront and utilize tools (project boards, regular demos) so you always know progress.</p>
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


            <CommonFaqSection
                faqs={[
                    {
                        q: "Why should I hire a local Abu Dhabi agency like WD Agency instead of outsourcing overseas?",
                        a: "Local providers comprehend language, culture, regulatory expectations, and can usually offer faster, on-the-ground support. We merge local information with international technology practices so your site is culturally resonant and technically sound."
                    },
                    {
                        q: "Do you build Arabic (RTL) websites?",
                        a: "Yes. We outline and advance RTL layouts, select suitable Arabic typefaces, and examine UX flows particularly for Arabic-speaking users."
                    },
                    {
                        q:"How do you measure success?",
                        a:"We establish KPIs before launch — conversion rate, lead volume, organic traffic growth, page speed scores, and user engagement metrics — and update monthly."
                    },
                    {
                        q:"Will my website be secure?",
                        a:"Yes. Security is built-in: HTTPS, WAF, constant dependency patching, role-based access control, and alternative penetration testing for high-risk projects."
                    },
                    {
                        q:"Can you move our current website to a new platform?",
                        a:"Ofcourse. We manage content migration, URL mapping (301 redirects), SEO preservation, and staged rollouts to prohibit downtime."
                    },
                    {
                        q:"What SEO work is included?",
                        a:"We involve technical on-page SEO cornerstones: metadata, site maps, schema markup, image alt tags, and mobile optimisation. Advanced SEO (link building, content campaigns) is provided as an add-on."
                    },
                    {
                        q:"How do you support post-launch?",
                        a:"Support plans comprise monthly maintenance, uptime supervision, error and security alerts, regular backups, and agreed response times for incidents."
                    },
                    {
                        q:"Which platforms do you recommend?",
                        a:"Selection relies on requirements: WordPress for content-heavy sites; Shopify or Magento/WooCommerce for eCommerce; headless CMS + React/Vue for high-performance front-ends and intricate integrations."
                    },
                    {
                        q:"How do you manage integrations (CRM, ERP, payment gateways)?",
                        a:"We create safe API integrations, middleware where needed, and automated dataflows that sync leads, orders, or records with your internal systems."
                    },
                    {
                        q:"What about accessibility?",
                        a:"We abide by WCAG guidelines and guarantee keyboard navigation, screen-reader compatibility, and contrast ratios so your site is usable by all citizens."
                    }
                ]}
            />


        </>
    )
}

export default page