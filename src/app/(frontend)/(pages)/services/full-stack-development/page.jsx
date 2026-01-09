import React from 'react'
import imagebanner from '@/app/(frontend)/assets/images/full-stack-development/banner.webp'
import CommonBanner2 from '@/app/(frontend)/component/pages/common/CommonBanner2'
import CommonIntroduction from '@/app/(frontend)/component/pages/common/CommonIntroduction'
import imageintro1 from '@/app/(frontend)/assets/images/full-stack-development/intro.webp'
import imageintro2 from '@/app/(frontend)/assets/images/full-stack-development/intro-2.webp'
import CommonSetsUs from '@/app/(frontend)/component/pages/common/CommonSetsUs'
import setusimagesabudhabi from '@/app/(frontend)/assets/images/full-stack-development/setusbg.webp'
import CommonThreeCard from '@/app/(frontend)/component/pages/common/CommonThreeCard'
import commonimage1 from '@/app/(frontend)/assets/images/website-development/Strategic-Problem-Solving.png'
import commonimage2 from '@/app/(frontend)/assets/images/website-development/FocusedApproach.png'
import commonimage3 from '@/app/(frontend)/assets/images/website-development/Partnership-Commitment.png'
import commonimage4 from '@/app/(frontend)/assets/images/website-development/Transparency.png'
import commonimage5 from '@/app/(frontend)/assets/images/website-development/Technology-Adoption.png'
import commonimage6 from '@/app/(frontend)/assets/images/website-development/Value-for-Money-Services.png'
import CommonIndustries from '@/app/(frontend)/component/pages/common/CommonIndustries'
import imageService1 from '@/app/(frontend)/assets/images/full-stack-development/service-1.webp'
import imageService2 from '@/app/(frontend)/assets/images/full-stack-development/service-2.webp'
import imageService3 from '@/app/(frontend)/assets/images/full-stack-development/service-3.webp'
import imageService4 from '@/app/(frontend)/assets/images/full-stack-development/service-4.webp'
import imageService5 from '@/app/(frontend)/assets/images/full-stack-development/service-5.webp'
import imageService8 from '@/app/(frontend)/assets/images/full-stack-development/service-6.webp'
import CommonAboutPage2 from '@/app/(frontend)/component/pages/common/CommonAboutPage2'
import Aboutimg from '@/app/(frontend)/assets/images/full-stack-development/about-2.webp'
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
                heding={"Full-Stack Development Services in Dubai </br>for Scalable, Robust Web Solutions"}
                subtitle={"At Website Development Agency, we are a leading full-stack web development agency in Dubai, utilizing modern</br> frontend and backend technologies to build tech-savvy websites for businesses in the UAE."}

            />
            <CommonIntroduction
                heding={'Full-Stack Web Development Agency in Dubai'}
                text1={` <p>Full-stack development seamlessly combines frontend creativity with backend strength to build dynamic, high-performing digital experiences. At Website Development Agency, we deliver complete end-to-end web solutions that merge elegant interfaces with robust server-side systems, ensuring speed, reliability, and scalability for your business.</p>
                    <p>Our effort is not just about writing code rather, it is the process of comprehending your business objectives, anticipating user requirements, and measuring the potential for growth. Whether it’s an elegant customer portal, a scalable online storefront, or an enterprise-grade application, we build solutions that perform seamlessly across all devices and environments without compromise.</p>
                    `}
                text2={`  <p>By full-stack development, businesses will be able to innovate more rapidly, have lower costs, and keep the same style and vibe at every step of the customer journey. You are not required to multitask between several teams or deal with different technological requirements- we are the ones who do the hard work for you that is frontend design, backend logic, and database management.</p>
                <p><a href="/">Website Development Agency</a> and our collective effort are essentially all about the creation of web solutions that are both functionally sound and future-proof. With the combination of designing, coding, and deployment in one location, we enable you to transform your applications into high-impact, efficiency-driven websites.</p>
                    `}
                imageintro1={imageintro1}
                imageintro2={imageintro2}
            />
            <CommonSetsUs
                text1={'Full-Stack Solutions for Startups, SMBs, and Enterprises'}
                text2={'At Website Development Agency, we understand that every organization is unique, operating in its own way and at its own stage of growth. Consequently, our full-stack development services are headed to a startup justifying its first product, small and medium businesses extending their activities, and enterprises that are digitally transforming their intricate ecosystems. </br>We build platforms that are scalable for SMBs, enabling them to automate their processes, customer engagement, and ROI to be enhanced. Our solutions are the driving force of growth and efficiency in your custom CRM, eCommerce stores, and internal management tools, bansed on your specific preferences.'}
                bg={setusimagesabudhabi}
            />
            <CommonThreeCard
                text1={'Why Choose Us for Full-Stack Development'}
                text2={"Working with Website Development Agency implies engagement with a crew that is all about top-notch work, honesty, and progress. We don’t merely construct the online presence of your company- we architect scalable digital ecosystems for your company which facilitate your business to prosper in the new digital economy."}
                boxdata={[
                    { id: 1, img: commonimage2, title: 'End-to-End Development', desc: 'From intuitive UI/UX design to robust backend architecture, we manage the entire development lifecycle. Our process ensures consistency, stability, and quality from concept to deployment.' },
                    { id: 2, img: commonimage1, title: 'Future-Ready Technologies', desc: 'We leverage cutting-edge technologies like React, Node.js, Laravel, and Vue.js to create flexible, secure, and scalable applications. Your product stays relevant and performs seamlessly as technology evolves.' },
                    { id: 3, img: commonimage3, title: 'User-Focused Design', desc: 'Every project begins with your users in mind. Our team designs intuitive interfaces and smooth navigation to deliver engaging, conversion-driven digital experiences.' },
                    { id: 4, img: commonimage5, title: 'Proven Track Record', desc: 'Our portfolio includes successful web applications that have boosted traffic, improved conversions, and maximized ROI. We combine data-driven insights with creative strategies to help brands stand out.' },
                    { id: 5, img: commonimage4, title: 'Scalable & Secure Solutions', desc: 'We build systems that grow with your business while maintaining top-notch security standards. Whether you’re scaling up traffic or adding new features, performance and safety remain uncompromised.' },
                    { id: 6, img: commonimage6, title: 'Support & Optimization', desc: 'Our relationship doesn’t end at launch- we provide ongoing monitoring, updates, and performance optimization. This ensures your web solution stays fast, secure, and future-ready.' },
                ]}
            />
            <CommonIndustries
                heding={'Our Full-Stack Development Services in Dubai, UAE'}
                subheding='Website Development Agency delivers full-stack web applications that perfectly balance technical excellence with aesthetic appeal. With every service we provide, clients can be confident that every element- from the user interface to the database.'
                services={[
                    {
                        title: 'Custom Web Applications',
                        desc: 'Web applications developed by Website Development Agency are fully tailored to your business model, workflow, and user needs. Every line of code is crafted to deliver the functionality and results your business requires.',
                        img: imageService1,
                        btnname: 'Contact Us',
                        link: '/contact-us',
                    }, {
                        title: 'Responsive Web Design',
                        desc: 'The frontend team at Website Development Agency develops the most engaging and user-friendly interfaces optimized for mobile devices. The mentioned are implemented via React.js, Vue.js, and Angular.',
                        img: imageService2,
                        btnname: 'Contact Us',
                        link: '/contact-us',
                    },
                    {
                        title: 'Backend & API Integration',
                        desc: 'Our backend developers design and code server-side applications with technologies like Node.js, Express, Laravel, and Django. Also, we take on API integrations, database management, and server optimization.',
                        img: imageService3,
                        btnname: 'Contact Us',
                        link: '/contact-us',
                    },
                    {
                        title: 'Single-Page Applications (SPAs)',
                        desc: 'Embedding app-like functionalities in the browser, SPAs enable users to get very rapid navigation and thus great engagement with dynamic platforms.',
                        img: imageService4,
                        btnname: 'Contact Us',
                        link: '/contact-us',
                    },
                    {
                        title: 'Progressive Web Apps (PWAs)',
                        desc: 'Besides having all the features of the web, PWA has offline function, push notifications, and smooth running on low connectivity.',
                        img: imageService5,
                        btnname: 'Contact Us',
                        link: '/contact-us',
                    },
                    {
                        title: 'Security & Compliance',
                        desc: 'By secure coding practices, the use of SSL, the creation of encrypted databases, and also regular security audits, we keep you safe from attacks and data leaks.',
                        img: imageService8,
                        btnname: 'Contact Us',
                        link: '/contact-us',
                    }


                ]}
            />
            <CommonAboutPage2
                text1="Expand Your Digital Capabilities with Website Development Agency"
                text2={`
                            <p class="mb-20">
                            Website Development Agency extends its full-stack capabilities beyond basic development to deliver comprehensive services that enable businesses to grow, streamline their processes, and progress digitally. 
                            </p>
                                <ul>
                                <li><strong>E-commerce platforms and web stores</strong>- Custom storefronts with secure payment integration and robust backend management.</li>
                                
                                <li><strong>Enterprise resource planning (ERP)</strong>- Centralized tools for managing operations, analytics, and workflow efficiency.</li>
                                
                                <li><strong>CMS and custom admin panels</strong>- Simplify content updates and system control with user-friendly, custom-built dashboards.</li>
                                
                                <li><strong>Migration & Legacy Apps</strong>- Modernize outdated systems, securely migrate data, and revamp platforms using the latest technologies.</li>
                                </ul>

                            <p>
                            Our knowledge of full-stack makes every digital layer scalable, secure, and high-performing. With Website Development Agency, you do not just get a website- it is a cutting-edge solution that stays ahead of markets and technology changes.
                            </p>
                    `}
                img={Aboutimg}
            />
              <CommonTechnologyStack
  heding={"Modern Full-Stack Tech Stack"}
  subheding={"Our stack of technology keeps your apps fast, reliable, and scalable. We blend the leading-edge tools for frontend and backend development to create extraordinary digital experiences that are customized to your business objectives."}
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
                subheding={'We follow agile web design methodology from idea to implementation- the treatment of accuracy and openness. At Website Development Agency, we don’t just deliver code, we deliver experiences engineered for success.'}
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
                        description: `Prior to launch, the Website Development Agency team will conduct meticulous performance, usability and security testing. We will identify bugs and browser compatibility, while also ensuring a fast-loading site for the best user experience.`,
                    },
                    {
                        id: "06",
                        title: "Support & Maintenance",
                        description: `Continuous updates, monitoring, and performance optimization after your website launch to ensure it stays fast, secure, and high-quality.`,
                    }

                    ]} />
 
                    <CommonIndustries />
                    <CommonClientTestimonials
                    testimonials={[
                        {
                            id: 1,
                            name: "Daniel R",
                            text: "Website Development Agency transformed our online presence. Within 3 months, our sales doubled thanks to their Shopify development expertise.",
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
                                q: "What Technologies Do You Use for Full-stack Development?",
                                a: "We use modern frontend and backend technologies including React, Vue.js, Angular, Node.js, Laravel, and PHP to build scalable, high-performance web applications."
                            },
                            {
                                q: "What is The Advantage of Full-stack Development?",
                                a: "Full-stack development ensures that your website or application works seamlessly from the user interface to the server and database, providing faster development and smoother performance."
                            },
                            {
                                q: "Can You Create Custom Web Applications for My Business?",
                                a: "Absolutely, we tailor every application to your business model, workflows, and user requirements, ensuring a solution that truly fits your needs."
                            },
                            {
                                q: "Do You Provide Ongoing Support After Launch?",
                                a: "We offer continuous monitoring, updates, and performance optimization to ensure your web application remains fast, secure, and reliable."
                            },
                            {
                                q: "Can You Upgrade or Migrate My Existing Legacy Systems?",
                                a: "Yes, we modernize outdated systems, securely migrate data, and rebuild platforms using the latest technologies to ensure efficiency and future readiness."
                            }]}
                        />

        </>

    )
}

export default page