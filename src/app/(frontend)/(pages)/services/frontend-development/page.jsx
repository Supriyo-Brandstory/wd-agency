import React from 'react'
import imagebanner from '@/app/(frontend)/assets/images/frontend-development/main-banner.webp'
import CommonBanner2 from '@/app/(frontend)/component/pages/common/CommonBanner2'
import CommonIntroduction from '@/app/(frontend)/component/pages/common/CommonIntroduction'
import imageintro1 from '@/app/(frontend)/assets/images/frontend-development/intro.webp'
import imageintro2 from '@/app/(frontend)/assets/images/frontend-development/intro-2.webp'
import CommonSetsUs from '@/app/(frontend)/component/pages/common/CommonSetsUs'
import setusimagesabudhabi from '@/app/(frontend)/assets/images/frontend-development/setusbg.webp'
import CommonThreeCard from '@/app/(frontend)/component/pages/common/CommonThreeCard'
import commonimage1 from '@/app/(frontend)/assets/images/website-development/Strategic-Problem-Solving.png'
import commonimage2 from '@/app/(frontend)/assets/images/website-development/FocusedApproach.png'
import commonimage3 from '@/app/(frontend)/assets/images/website-development/Partnership-Commitment.png'
import commonimage4 from '@/app/(frontend)/assets/images/website-development/Transparency.png'
import commonimage5 from '@/app/(frontend)/assets/images/website-development/Technology-Adoption.png'
import commonimage6 from '@/app/(frontend)/assets/images/website-development/Value-for-Money-Services.png'
import CommonIndustries from '@/app/(frontend)/component/pages/common/CommonIndustries'
import imageService1 from '@/app/(frontend)/assets/images/frontend-development/service-1.webp'
import imageService2 from '@/app/(frontend)/assets/images/frontend-development/service-2.webp'
import imageService3 from '@/app/(frontend)/assets/images/frontend-development/service-3.webp'
import imageService4 from '@/app/(frontend)/assets/images/frontend-development/service-4.webp'
import imageService5 from '@/app/(frontend)/assets/images/frontend-development/service-5.webp'
import imageService8 from '@/app/(frontend)/assets/images/frontend-development/service-6.webp'
import CommonAboutPage2 from '@/app/(frontend)/component/pages/common/CommonAboutPage2'
import Aboutimg from '@/app/(frontend)/assets/images/frontend-development/about-2.webp'
import CommonTechnologyStack from '@/app/(frontend)/component/pages/common/CommonTechnologyStack'
import react from "@/app/(frontend)/assets/images/reacticon.svg";
import nodejs from "@/app/(frontend)/assets/images/nodejsicon.svg";
import laravel from "@/app/(frontend)/assets/images/laravelicon.svg";
import wordpress from "@/app/(frontend)/assets/images/wordpressicon.svg";
import magento from "@/app/(frontend)/assets/images/magentoicon.svg";
import shopify from "@/app/(frontend)/assets/images/shopifyicon.svg";
import flutter from "@/app/(frontend)/assets/images/fluttericon.svg";
import reactnative from "@/app/(frontend)/assets/images/reactnativeicon.svg";
import php from "@/app/(frontend)/assets/images/phpicon.svg";
import python from "@/app/(frontend)/assets/images/pythonicon.svg";
import aws from "@/app/(frontend)/assets/images/awsicon.svg";
import mongo from "@/app/(frontend)/assets/images/mongodbicon.svg";
import CommonDevelopmentProcess from '@/app/(frontend)/component/pages/common/CommonDevelopmentProcess'
import CommonWhyWebsiteDevelopment from '../../../assets/style/common/CommonWhyWebsiteDevelopment'
import imagewhydevelopment from '@/app/(frontend)/assets/images/e-commerce-web-development/Why-Website-Development.webp'
import CommonClientTestimonials from '../../../component/pages/common/CommonClientTestimonials'
import imagetestimonial1 from '@/app/(frontend)/assets/images/testimonial/testimonial-1.webp'
import imagetestimonial2 from '@/app/(frontend)/assets/images/testimonial/testimonial-2.webp'
import imagetestimonial3 from '@/app/(frontend)/assets/images/testimonial/testimonial-3.webp'
import CommonFaqSection from '../../../component/pages/common/CommonFaqSection'
import CommonServiceLocations from '../../../component/pages/common/CommonServiceLocations'

const page = () => {
    return (
        <>
            <CommonBanner2
                bg={imagebanner}
                heding={"Frontend Web Design Services in Dubai </br>for Modern, Interactive Business Websites"}
                subtitle={"Build visually stunning, responsive, and interactive websites with </br>frontend web design services at WD Agency."}

            />
            <CommonIntroduction
                heding={'Impactful Website Design in Dubai'}
                text1={` <p>The frontend design of your website is just not about the design- it is the online representation of your brand. It is the place where your users can engage, get an idea, and decide whether to stay or exit. A robust, easy-to-use frontend not only creates trust among users but also activates conversions.</p>
                    <p>WD Agency delivers exactly what modern day businesses need- responsive, dynamic, and user-friendly website designs with interfaces that perform flawlessly across all browsers. Such interfaces attract visitors and deliver direct business results for a company. The front-end developers at our company mix the artistry with the latest technology to guarantee that your site will run smoothly on any device that you have.</p>
                    `}
                text2={`  <p>We put serious effort into improving the usability, the aesthetics, and the loading speed so that the users of your website can navigate easily and the site can respond quickly. Every feature that is there, from buttons to animations has been totally optimized for performance and interactivity.</p>
                <p>Our website designs work wonders in boosting user satisfaction, engagement, and conversion rates, whether it’s an e-commerce or startup website. With WD Agency, your digital presence becomes a powerful business tool- visually appealing, performance-driven, and deeply connected to your brand.</p>
                    `}
                imageintro1={imageintro1}
                imageintro2={imageintro2}
            />
            <CommonSetsUs
                text1={'Web Design for Startups, SMBs, and Enterprises'}
                text2={'approach for each case: startups are our speed, scalability, and branding clients, thus we work with them to launch quickly with attractive and conversion-oriented interfaces. For SMBs, we create websites that are adaptable, and have great performance, thus they can grow alongside your growing audience. </br>Our team guarantees that the intuitive experiences, rapid speeds, and consistent designs that users enjoy across platforms are all present in each website or web app we create. We adapt to your business model- whether it’s B2B, B2C, or SaaS and deliver web design solutions that enhance your brand presence.'}
                bg={setusimagesabudhabi}
            />
            <CommonThreeCard
                text1={'Website Design Services That Make a Difference'}
                text2={"Working with WD Agency is equivalent to being granted entry to a team of professionals who creatively, strategically, and with the help of the latest technologies put together front-end solutions that are measurable in their results."}
                boxdata={[
                    { id: 1, img: commonimage2, title: 'User-Centric Design', desc: 'We make your users the point of focus in every step, building interfaces that are easy, intuitive, and engaging for end users.' },
                    { id: 2, img: commonimage1, title: 'Modern Technologies', desc: 'In building React, Vue.js, Angular, HTML5, CSS3, and JavaScript, we create websites that are both robust and scalable and has great performance and functionality.' },
                    { id: 3, img: commonimage3, title: 'Performance Focused', desc: 'Our development lifecycle from page speed to responsive layouts makes sure that users get fast, efficient, and smooth interactions.' },
                    { id: 4, img: commonimage5, title: 'Conversion-first Approach', desc: 'We don’t just make sites look attractive- we design quantifiable funnels with analytics, A/B testing, and iterative leveraging.' },
                    { id: 5, img: commonimage4, title: 'SEO-Friendly Design', desc: 'Every website we design follows best SEO practices, ensuring higher visibility on search engines and better organic reach.' },
                    { id: 6, img: commonimage6, title: 'Seamless Integration', desc: 'We ensure your website works smoothly with third-party tools, APIs, and other software systems for a truly connected digital experience.' },
                ]}
            />
            <CommonIndustries
                heding={'Web Design Solutions That Engage and Convert'}
                subheding='At WD Agency, we don’t just do website design- we craft visually appealing, functionally powerful, and conversion-oriented experiences that merge design brilliance with technical precision. The services we offer at the front end are not only pretty but also made from logic to really attract customers and make the brands stronger.'
                services={[
                    {
                        title: 'Responsive Web Interfaces',
                        desc: 'It is not just the mobile-first websites that we design, taking into account all screens perfectly- we design websites with easy navigation, accessibility, and user-friendliness that is intuitive across all devices.',
                        img: imageService1,
                        btnname: 'Contact Us',
                        link: '/contact-us',
                    }, {
                        title: 'Interactive UI/UX Design',
                        desc: 'We not only put creative ideas into design, but we also turn them into interactive elements, attractive animations, and smooth transitions that are designed to increase user satisfaction and retention.',
                        img: imageService2,
                        btnname: 'Contact Us',
                        link: '/contact-us',
                    },
                    {
                        title: 'Single-Page Applications (SPAs)',
                        desc: 'With SPAs that are based on modern libraries like React, Vue, and Angular for fast and smooth navigation, you can enjoy the speed and smoothness of an app-like experience.',
                        img: imageService3,
                        btnname: 'Contact Us',
                        link: '/contact-us',
                    },
                    {
                        title: 'Progressive Web Apps (PWAs)',
                        desc: 'We design and deliver progressive web apps, a native app-like experience to users with fast performance, offline access, and push notifications, all directly through their browsers.',
                        img: imageService4,
                        btnname: 'Contact Us',
                        link: '/contact-us',
                    },
                    {
                        title: 'Performance Optimization',
                        desc: 'We ensure that the site loading and performance are consistent and responsive across the different browsers (Chrome, Safari, Firefox, and Edge) to make sure every visitor gets a similar, standardized experience.',
                        img: imageService5,
                        btnname: 'Contact Us',
                        link: '/contact-us',
                    },
                    {
                        title: 'API & Third-Party Integrations',
                        desc: 'We smoothly integrate CRMs, data analysis tools, payment systems, and other third-party APIs to improve the functionality of the site and attract more users.',
                        img: imageService8,
                        btnname: 'Contact Us',
                        link: '/contact-us',
                    }


                ]}
            />
            <CommonAboutPage2
                text1="Expand Your Digital Capabilities with WD Agency"
                text2={`
                            <p class="mb-20">
                            At WD Agency, our specialized frontend web design services in Dubai & the UAE are the perfect way to extend the functionality and get more user engagement.
                            </p>
                            <ul class="ml-40">
                            <li>Component Libraries & Design- We produce UI components that can be reused in continuous, efficient, and scalable development of the software.</li>
                            <li>Animations & Motion UI- Let your brand get the personality it deserves with the skate transitions and captivating animations.</li>
                            <li>Accessibility (WCAG) Compliance- We make sure that your website is an all-inclusive, accessible, and user-friendly platform for all.</li>
                            <li>Security Best Practices- Along with input validation and secure coding, we keep your users and data integrity safe.</li>
                            </ul>
                            <p>
                            Our services allow companies to keep brand consistency, enhance their performance, and guarantee reliability for the long term. It does not matter if you are merely doing an upgrade on your present website or creating a new, our advanced frontend capabilities are the ones that make your digital platforms stronger.
                            </p>
                    `}
                img={Aboutimg}
            />
              <CommonTechnologyStack
  heding={"Modern Frontend Web Design Tech Stack"}
  subheding={"We bring in the market at a top-notch level, and the technologies we mainly rely upon are the new-age ones which are generally considered as cutting-edge and industry-proven."}
  techData={[
  { name: "React", image: react, gradient: "linear-gradient(180deg, #61DAFB 0%, #03C9FF 118.42%)" },
  { name: "Node.js", image: nodejs, gradient: "linear-gradient(180deg, #6CC04A 16.44%, #539E43 60.27%)" },
  { name: "Laravel", image: laravel, gradient: "linear-gradient(180deg, #FF6960 16.44%, #FF2D20 60.27%)" },
  { name: "WordPress", image: wordpress, gradient: "linear-gradient(180deg, #4A87A3 16.44%, #21759B 60.27%)" },
  { name: "Magento", image: magento, gradient: "linear-gradient(180deg, #FF7949 0%, #EC6737 118.42%)" },
  { name: "Shopify", image: shopify, gradient: "linear-gradient(180deg, #CEF682 16.44%, #95BF46 60.27%)" },
  { name: "Flutter", image: flutter, gradient: "linear-gradient(180deg, #45D1FD 16.44%, #02539A 100%)" },
  { name: "React Native", image: reactnative, gradient: "linear-gradient(180deg, #61DAFB 0%, #03C9FF 118.42%)" },
  { name: "PHP", image: php, gradient: "linear-gradient(180deg, #697EBA 17.27%, #6E81B6 73.33%)" },
  { name: "Python", image: python, gradient: "linear-gradient(180deg, #387EB8 -73.67%, #FFC331 27.62%)" },
  { name: "AWS", image: aws, gradient: "linear-gradient(180deg, #F7DCB4 17.91%, #FF9900 65.66%)" },
  { name: "MongoDB", image: mongo, gradient: "linear-gradient(180deg, #6CAC48 17.91%, #599636 65.66%)" },
]}
  />
       <CommonDevelopmentProcess
                heding={'From Concept to Interactive Experience'}
                subheding={'We follow agile web design methodology from idea to implementation- the treatment of accuracy and openness. At WD Agency, we don’t just deliver code, we deliver experiences engineered for success.'}
                processData={[
                    {
                        id: "01",
                        title: "Requirement Analysis",
                        description: `We begin by finding out what you want to achieve, who your ideal users are, and what your technical environment is.`,
                    },
                    {
                        id: "02",
                        title: "UI/UX & Wireframing",
                        description: `We produce the user flow charts and UI/UX layout designs that guarantee easy navigation and usability.`,
                    },
                    {
                        id: "03",
                        title: "Frontend Design",
                        description: `The experts in our team create responsive, pixel-perfect, and interactive designs that are a true reflection of your idea.`,
                    },
                    {
                        id: "04",
                        title: "Testing & QA",
                        description: `Along with checking the application under different browsers, we also do performance testing.`,
                    },
                    {
                        id: "05",
                        title: "Testing & QA",
                        description: `Prior to launch, the WD Agency team will conduct meticulous performance, usability and security testing. We will identify bugs and browser compatibility, while also ensuring a fast-loading site for the best user experience.`,
                    },
                    {
                        id: "06",
                        title: "Support & Maintenance",
                        description: `Continuous updates, monitoring, and performance optimization after your website launch to ensure it stays fast, secure, and high-quality.`,
                    }

                    ]} />
                                       <CommonWhyWebsiteDevelopment
                    heding={"Why Choose WD Agency for Frontend Development"}
                    subheding={"Frontend excellence is what you get with WD Agency, combined with a digital presence that elevates your brand and helps your business stand out in today’s competitive online market."}
                    lefttext={`<ul>
                                <li><strong>Engaging User Experiences</strong> – We create simple, eye-catching, and helpful designs that deeply engage users and encourage them to return.</li>
                                
                                <li><strong>Faster Loading Websites</strong> – Sites are optimized to load quickly, reducing bounce rates, increasing conversions, and enhancing overall user satisfaction.</li>
                                
                                <li><strong>Scalable and Future-Proof Interfaces</strong> – Interfaces that grow with your business and easily integrate new technologies without issues.</li>
                                
                                <li><strong>Cross-Device Compatibility</strong> – Responsive designs ensure a seamless and user-friendly experience across all devices.</li>
                                </ul>
                                <p>WD Agency doesn’t only create beautiful designs, we also commit to performance, reliability, and results. Your frontend with WD Agency becomes a growth mechanism that, through increased engagement, nurtures trust among users and leaves a lasting digital memory.</p>
                            `}
                    rightimage={imagewhydevelopment}

                    />
                    <CommonIndustries />
                    <CommonClientTestimonials
                    testimonials={[
                        {
                            id: 1,
                            name: "Daniel R",
                            text: "WD Agency transformed our online presence. Within 3 months, our sales doubled thanks to their Shopify development expertise.",
                            image: imagetestimonial1,
                        },
                        {
                            id: 2,
                            name: "Sophia K",
                            text: "Professional, efficient, and creative—the best ecommerce development agency in UAE we’ve worked with.",
                            image: imagetestimonial2,
                        },
                                            {
                            id: 3,
                            name: "James P",
                            text: "From design to launch, everything was seamless. Their team handled even complex Magento integrations with ease.",
                            image: imagetestimonial3,
                        }
                    ]}  
                    />
                    <CommonServiceLocations/>
                    <CommonFaqSection
                        faqs={[
                            {
                                q: "What Frontend Technologies Do WD Agency Specialize In?",
                                a: "We work with cutting-edge frontend technologies like React, Vue.js, Angular, HTML5, CSS3, and JavaScript to build fast, interactive, and scalable web applications."
                            },
                            {
                                q: "How Do You Ensure Websites are User-friendly?",
                                a: "Our expert web designers in Dubai follow user-centric principles, focusing on intuitive navigation, clear layouts, and engaging visuals that enhance the overall user experience."
                            },
                            {
                                q: "Will My Website Look Good on Mobile Devices?",
                                a: "Yes, all websites we create are responsive, providing seamless performance and consistent design across desktops, tablets, and smartphones."
                            },
                            {
                                q: "Can You Optimize My Website for Speed and SEO?",
                                a: "Yes. We follow best practices in coding, performance optimization, and SEO to ensure your website loads quickly and ranks well on search engines."
                            },
                            {
                                q: "Can My Website Grow with My Business?",
                                a: "Definitely, we build scalable and future-proof interfaces that can easily accommodate new features, technologies, and increased traffic as your business expands."
                            }]}
                        />

        </>

    )
}

export default page