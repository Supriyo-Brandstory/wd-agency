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
                text1={"Most Trusted Website Design Services"}
                text2={"Web Design in Sharjah Tailored for <br>Your Business Growth"}
                text3={"WD Agency is your one-stop solution for web design in Sharjah, providing next-level web design and development services. Since 2014, we have worked on over 200 website projects for local businesses in Sharjah."}
            />
            <CommonAboutPage
                text1={"Best Website Design Agency Sharjah - WD Agency"}
                text2={" Is your business ready for a digital transformation? We create sleek, modern, and brand-focused websites that drive real impact. At WD Agency, we have some of the top-performing websites in our portfolio that deliver high-performance, visually appealing, and SEO friendly digital powerhouses for businesses. "}
                text3={"As a prominent player in web design in Sharjah, we serve clients across all locations, starting from Al Majaz, AI Nahda, Muwailih, and the Sharjah Industrial Area. We create some of the most refined websites that exactly reflect your brand identity from top to bottom."}
                img={aboutimagesharjhat}
            />
            <CommonSetsUs
                text1={'Redefining Digital Experiences for a Decade'}
                text2={'Your search for a professional website development company in Sharjah ends with WD Agency. We bring in a decade of experience, web design and development expertise, and our vision to empower businesses with the best possible services.<br><br>At WD Agency, we redefine digital experiences with creative web design, next-gen technology stack, and operability- keeping your branding aligned. We ensure your website depicts professionalism, delivers a memorable digital experience, and turns engagement into meaningful conversions.'}
                bg={setusimagesharjhat}
            />
            <CommonAboutPage2
                text1="Why a Professional Website Design Matters <br/>for Businesses?"
                text2={`
                            <p class="mb-20">
                            Websites are more than just a digital brochure, they define your brand and act as your active sales channel 24*7. Local businesses in Sharjah, those who are looking for a level-up, websites can be the right point of contact to expand your reach. Your audience can get a quick overview of your business, your offerings, and become a loyal customer. A professional website design can help you:
                            </p>
                            <ul class="ml-40">
                            <li>Build trust and credibility with a strong first impression</li>
                            <li>Increase visibility and reach with an SEO-friendly design</li>
                            <li>Drive more leads and conversions with an engaging user experience</li>
                            <li>Enhance website performance through seamless navigation and speed</li>
                            </ul>
                            <p>
                            Starting from responsive design, latest features, better navigation, and secure hosting, WD Agency takes care of every detail. Whether you're a startup, SME, or an established business, our custom web design solutions in Sharjah are customized to suit your objectives and help you make a robust impact online.
                            </p>
                    `}
                img={sharjahAboutimg}
            />
            <CommonThreeCard
                text1={'Why Choose WD Agency as Your Web Design<br/> Company in Sharjah'}
                text2={"Among many other web design companies in Sharjah, we stand as the best with a strong understanding of local business, audience demographics, and the latest digital trends. We are not just a website design company, we are the transformation partner for businesses supporting their digital expansion."}
                boxdata={[
                    { id: 1, img: StrategicProblemSolvingimage, title: 'Strategic Problem Solving', desc: 'We are experts in creating visually stunning, functional, and conversion-focused websites tailored to your branding. Every design we create is to deliver a perfect blend of creativity and performance.' },
                    { id: 2, img: FocusedApproachimage, title: 'Focused Approach', desc: 'As the best web design experts, we focus on building a clear strategy, addressing unique needs, and delivering exceptional websites that resonate with your branding.  ' },
                    { id: 3, img: PartnershipCommitmentimage, title: 'Partnership Commitment', desc: 'We build long-term relationships with clients with a commitment to deliver excellence. We work as a partner for businesses rather than an agency and work hand-in-hand to ensure growth & success. ' },
                    { id: 4, img: Transparencyimage, title: 'Transparency', desc: 'We maintain complete openness at every stage of a project, starting from pricing to the timeline of a website project. We keep you in the loop from design to deployment, no hidden charges, no hidden surprises.' },
                    { id: 5, img: TechnologyAdoptionimage, title: 'Technology Adoption', desc: 'We leverage all the latest tools, technologies, and frameworks to deliver future-ready websites. Our web solutions are designed to keep your business ahead of the digital curve with the latest available technology. ' },
                    { id: 6, img: ValueforMoneyServicesimage, title: 'Value for Money Services', desc: 'We deliver premium web design services in Sharjah at a competitive price compared to any other provider. WD Agency ensures the maximum ROI of your spending by delivering the most impactful solutions.' },
                ]}
            />
            <CommonApproch
                text1={"Our Approach to Web Design in Sharjah"}
                text2={` <p  class='mb-20'>We emphasize designing websites that are visually impressive, functional, and deliver the best user experience. A Good website adds credibility to your brand, improves customer trust, and acts as a premier sales channel for around the clock. We blend the most advanced technology with an SEO-based structure for a better browsing experience for every visitor. </p>
                     <p>We put our utmost attention to detail, starting from color palettes, images, layouts, and responsive design. We believe responsive web design stands firmly with your brand and business objectives. Whether designing websites for an e-commerce business, service provider, or healthcare business, we keep in mind your audience and business goals and audience network. Our designs are attractive and SEO optimized, which will surely help you leverage a better Google ranking, better visibility, and traffic.  </p>`}
                bannerimage={approchbannerimage}
            />
            <CommonServices
                theding={'Best Web Design Services in Sharjah - WD Agency'}
                tdesc={` <p>The business landscape of Sharjah is growing digital, and it has become mandatory for brands to make a perpetual impact. As more customers search, browse, and shop online, your website becomes the point of contact and brings the most valuable leads and conversions.   </p>
                <p class='my-20'>As the pioneer web design agency in Sharjah, we deliver high-performance websites utilizing the latest technology upgrades. Every website we create comes with the most important core elements: fast loading, mobile responsiveness, SEO optimization, and seamless navigation.</p>
                <p>Whether you want a new website or just want to revamp your existing one, we ensure that your platform accurately reflects the morals and personality of your brand. We have a thorough evaluation of the target audience, business objectives, and market trends before starting a project. With WD Agency, your website isn’t just built for today, it’s future-proofed for tomorrow’s digital success.</p>
                `}
                bheding={'Key features of our web design services in Sharjah include:'}
                bdesc={`<ul class='ml-50'>
                <li>Personalized designs tailored to your industry and business-specific objectives.</li>
                <li>Responsive design and layout optimized for all screen sizes</li>
                <li>Better navigation and strategic Call-to-Action placements</li>
                <li>State-of-the-art visuals and branding stability</li>
                <li>Safe coding practices maintaining security protocol</li>
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


            <CommonFaqSection
                faqs={[
                    {
                        q: "Which is the best web development company in Dubai, UAE?",
                        a: "Choosing the best web development company in Dubai, UAE depends on finding a partner that is reliable and tech-savvy. ..."
                    },
                    {
                        q: "Why does WD Agency prioritize on custom website design?",
                        a: "Because no two businesses are the same, their websites shouldn’t be either. ..."
                    }
                ]}
            />


        </>
    )
}

export default page