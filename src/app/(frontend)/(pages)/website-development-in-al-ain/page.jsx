import React from 'react'
import Banner from '../../component/pages/home/Banner'
import CommonAboutPage from '../../component/pages/common/CommonAboutPage'
import aboutimagealain from '@/app/(frontend)/assets/images/al-ain/about.webp'
import setusimagealain from '@/app/(frontend)/assets/images/al-ain/setusbg.webp'
import alainAboutimg from '@/app/(frontend)/assets/images/al-ain/about-2.webp'
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
import developmentprocess from '@/app/(frontend)/assets/images/al-ain/developmentprocess.webp'



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
        text1={"Elevate your business growth with the"}
        text2={"Best Web Development Agency in Al Ain"}
        text3={"Website Development Agency is your one-stop solution for web development in Al Ain, providing cutting-edge web design and development services since 2014."}
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
        text1={"No.1 Web Design Agency in Al Ain"}
        text2={"Is your business ready for a digital transformation? We craft sleek, modern, and brand-focused websites that drive real impact. At <a href='/'>Website Development Agency</a>, our portfolio includes high-performance, visually appealing, and SEO-friendly digital solutions for businesses."}
        text3={"We transform ideas into dynamic, high-performing websites, helping businesses establish a strong digital presence. We redefine website development services in Al Ain that perfectly reflect your brand identity and appeal from top to bottom."}
        img={aboutimagealain}
    />
    <CommonSetsUs
        text1={'Redefining Digital Experiences for a Decade'}
        text2={'Your search for a professional website development company in Al Ain ends with Website Development Agency. We bring a decade of experience, web design and development expertise, and a vision to empower businesses with the best possible services.<br><br>At Website Development Agency, we are transforming digital experiences with creative web design, next-gen technology, and seamless operability- keeping your branding aligned. We ensure your website exudes professionalism, delivers a memorable digital experience, and turns engagement into meaningful conversions.'}
        bg={setusimagealain}
    />
    <CommonAboutPage2
        text1="Why a Professional Website Development Matters <br/>for Businesses?"
        text2={`
            <p class="mb-20">
            Al Ain, the "Garden City of the U.A.E.", is full of cultural wealth and business potential. Industries include healthcare, education, retail, hospitality, and others in competitive growth sectors. A professionally developed website provides your brand with the credibility to stand apart and engage with audiences.
            </p>
            <ul class="ml-40">
            <li>Build trust and credibility with a strong first impression</li>
            <li>Increase visibility and reach with an SEO-friendly design</li>
            <li>Drive more leads and conversions with an engaging user experience</li>
            <li>Make your business visible to potential customers looking for similar products and services</li>
            </ul>
            <p>
            From responsive design and modern features to seamless navigation and secure hosting, Website Development Agency takes care of every detail. Whether you're a startup, SME, or an established business, our custom web development solutions in Al Ain are tailored to meet your objectives and create a robust online impact.
            </p>
        `}
        img={alainAboutimg}
    />
    <CommonProtfolio/>
    <CommonIndustries/>

    
    <CommonServices
        theding={'Best Web Development Services in Al Ain - Website Development Agency'}
        tdesc={`
            <p>The business landscape of Al Ain is rapidly going digital, making it essential for brands to create a lasting impact. As customers increasingly search, browse, and shop online, your website becomes the key touchpoint for generating valuable leads and conversions.</p>
            <p class='my-20'>As a pioneer web development agency in Al Ain, we deliver high-performance websites using the latest technology. Every website we create includes critical elements: fast loading, mobile responsiveness, SEO optimization, and seamless navigation.</p>
        `}
        bheding={'Key features of our web development services in Al Ain include:'}
        bdesc={`
            <ul class='ml-50'>
            <li>Custom website designs tailored to your industry and business objectives.</li>
            <li>Responsive web design optimized for all screen sizes (Mobile, Desktop, Tablet).</li>
            <li>Easy navigation with strategic Call-to-Action placements.</li>
            <li>State-of-the-art visuals with consistent branding.</li>
            <li>Secure coding practices adhering to industry-standard protocols.</li>
            </ul>
        `}
        bbg={developmentprocess}
    />

    <div className="frame-1200 py-100 sm-pt-0 sm-pb-50 sm-px-20">
        <div className="text-center sm-text-start mb-50 sm-mb-20">
          <h2 className="mb-20">Website Design Al Ain- Cost Breakdown</h2>
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
        text1={'Why Choose Us as Your Web Design <br/> Partner in Al Ain'}
        text2={"Among many web development companies in Al Ain, we stand out with a deep understanding of local business needs, audience demographics, and the latest digital trends. When you partner with us, you get more than a website – you gain a dedicated digital partner. Here’s why businesses across Al Ain trust us:"}
        boxdata={[
            { id: 1, img: StrategicProblemSolvingimage, title: 'Visually Stunning Design', desc: 'We excel in creating visually stunning, functional, and conversion-focused websites tailored to your brand. Every design we craft delivers a perfect blend of creativity and performance.' },
            { id: 2, img: FocusedApproachimage, title: 'Focused Approach', desc: 'As top web development experts, we focus on building clear strategies, addressing unique needs, and delivering exceptional websites that resonate with your brand.' },
            { id: 3, img: PartnershipCommitmentimage, title: 'Partnership Commitment', desc: 'We build long-term relationships with clients, delivering excellence. We work as a partner, not just an agency, ensuring growth and success hand-in-hand.' },
            { id: 4, img: Transparencyimage, title: 'Transparency', desc: 'We maintain complete openness at every project stage, from pricing to timelines. You stay informed from design to deployment- no hidden charges, no surprises.' },
            { id: 5, img: TechnologyAdoptionimage, title: 'Technology Adoption', desc: 'We leverage the latest tools, technologies, and frameworks to deliver future-ready websites, keeping your business ahead of the digital curve.' },
            { id: 6, img: ValueforMoneyServicesimage, title: 'Value for Money Services', desc: 'We provide premium web development services in Al Ain at competitive prices, ensuring maximum ROI with impactful solutions.' },
        ]}
    />
    <CommonResult 
        heding={"Best Web Development Services that Drive Measurable Results"}
        desc={"Great website design connects a visitor’s journey from first impression to conversion. We are the leading web development agency, creating websites that are not only visually appealing and functional but also perform seamlessly across all devices. From intuitive UX design to high-end visuals, our websites attract, engage, and retain users."}
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
        footertext={'We have worked with top businesses in Al Ain and the UAE across retail, healthcare, education, hospitality, e-commerce, and more. We know what it takes to build a digital platform that works for every niche.'}
    />

    <CommonClientTestimonials/>
    <LocationService activeLocation="al ain" />  

    <CommonFaqSection
        faqs={[
            {
                q: "Why Should I Choose Website Development Agency for Website Development in Al Ain?",
                a: "Website Development Agency specializes in creating custom, user-friendly, and visually appealing websites tailored to your business goals, ensuring a strong online presence and functionality. We have 12+ years of experience working with 500+ clients across Al Ain, Dubai, and the UAE."
            },
            {
                q: "What Industries Do You Design Websites for in Al Ain?",
                a: "Since 2014, we have served a diverse range of industries, including retail, healthcare, education, hospitality, e-commerce, professional services, and more, delivering tailored web development solutions."
            },
            {
                q: "Do You Provide Custom Website Designs or Use Templates?",
                a: "Our focus is on custom website designs that reflect your unique brand identity, but we also offer template-based solutions for businesses seeking faster turnaround and budget-friendly options."
            },
            {
                q: "How Much Does Website Development in Al Ain Cost?",
                a: "The cost depends on the website type, design complexity, features, and timeline. Website Development Agency offers flexible packages to suit various business needs and budgets. Typically, website development in Al Ain starts from AED 5,000, with prices varying based on customization and functionality."
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
                a: "Yes, Website Development Agency offers website maintenance and support services in Al Ain to keep your website updated, secure, and running smoothly."
            },
            {
                q: "How Can I Get Started with Website Development Agency for Website Development in Al Ain?",
                a: "Simply reach out through our contact form or give us a call. Our team will discuss your requirements and create a tailored proposal for your website development project."
            }
        ]}
    />
</>
    )
}

export default page