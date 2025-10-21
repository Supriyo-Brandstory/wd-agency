import React from 'react'
import imagebanner from '@/app/(frontend)/assets/images/portfolio-web-development/main-banner-portfolio-website.webp'
import CommonBanner2 from '@/app/(frontend)/component/pages/common/CommonBanner2'
import CommonIntroduction from '@/app/(frontend)/component/pages/common/CommonIntroduction'
import imageintro1 from '@/app/(frontend)/assets/images/portfolio-web-development/portfolio-website-design.webp'
import imageintro2 from '@/app/(frontend)/assets/images/portfolio-web-development/portfolio-web-design-agency.webp'
import CommonSetsUs from '@/app/(frontend)/component/pages/common/CommonSetsUs'
import setusimagesabudhabi from '@/app/(frontend)/assets/images/abu-dhabi/setusbg.webp'
import CommonThreeCard from '@/app/(frontend)/component/pages/common/CommonThreeCard'
import commonimage1 from '@/app/(frontend)/assets/images/website-development/Strategic-Problem-Solving.png'
import commonimage2 from '@/app/(frontend)/assets/images/website-development/FocusedApproach.png'
import commonimage3 from '@/app/(frontend)/assets/images/website-development/Partnership-Commitment.png'
import commonimage4 from '@/app/(frontend)/assets/images/website-development/Transparency.png'
import commonimage5 from '@/app/(frontend)/assets/images/website-development/Technology-Adoption.png'
import commonimage6 from '@/app/(frontend)/assets/images/website-development/Value-for-Money-Services.png'
import CommonIndustries from '@/app/(frontend)/component/pages/common/CommonIndustries'
import CommonAboutPage2 from '@/app/(frontend)/component/pages/common/CommonAboutPage2'
import Aboutimg from '@/app/(frontend)/assets/images/abu-dhabi/about-2.webp'
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
                heding={"Dynamic Website Development Services for </br>Scalable Web Solutions"}
                subtitle={"At WD Agency, we build feature-rich, responsive, and dynamic websites in Dubai,</br> UAE that adapt to your users and business needs."}

            />
            <CommonIntroduction
                heding={'Dynamic Websites that Captivate and Convert'}
                text1={` <p>Dynamic websites enable your data to get updated depending on user behavior, inputs, and backend data, thus generating highly interactive experiences. At WD Agency, we build strong, scalable, and visually attractive dynamic websites which in turn lead to user engagement, conversions, and business growth.</p>
                    <p>Dynamic websites offer personalized experiences that do not let the users disengage. Such sites also work with databases, APIs, and other applications, which means that your platform will always be relevant and remain updated. Whether it is through publishing fresh content, updating the shelves, or handling user interactions, our solutions make the process less tedious and more efficient.</p>
                    `}
                text2={`  <p>We implement the latest technologies, including React, Angular, and Node.js, to design scalable, high-performance platforms. All websites are prepared to manage complicated data structures and large numbers of visitors without sacrificing their speed or stability. By availing our services, you don’t just get a website, you get a digital ecosystem that adapts to user interactions, grows with your audience, and delivers seamless, high-performance experiences.</p>
                <p>We believe your website should be more than just an online presence, it should be an evolving platform that engages users, adapts to their needs, and continuously enhances their experience.</p>
                    `}
                imageintro1={imageintro1}
                imageintro2={imageintro2}
            />
            <CommonSetsUs
                text1={'Dynamic Websites for Startups, SMBs, and Enterprises'}
                text2={'If you are a startup creating your first digital product or an established enterprise that manages high-traffic portals, WD Agency offers dynamic website development that is suitable for your scale and objectives. We design & develop flexible architectures that are also compatible with changing requirements and encourage long-term growth. </br>We follow an agile website development approach for website development, which is the main advantage of our service for new businesses, as it allows them to start quickly and verify their ideas without sacrificing quality. Besides, for small and medium businesses, we create websites that are cost-effective and content-rich websites.'}
                bg={setusimagesabudhabi}
            />
            <CommonThreeCard
                text1={'We Build Dynamic & Interactive Websites</br> That Adapt and Perform'}
                text2={"When you engage with WD Agency, you essentially get a whole team of people whose work is to create websites that captivate, expand, and have great performance."}
                boxdata={[
                    { id: 1, img: commonimage2, title: 'Value-packed Interaction', desc: 'Every page is optimized for speed, ensuring that visitors do not have to wait. Faster load times improve engagement, reduce bounce rates, and enhance the overall user experience.' },
                    { id: 2, img: commonimage1, title: 'Expandable Organization', desc: 'A scalable plan that allows for more visitors, content, and data without changing the site’s core functionality. Whether your traffic spikes or your content library grows, your website remains fast without extra development costs.' },
                    { id: 3, img: commonimage3, title: 'Safe and Trustworthy', desc: 'The latest technology and security routines are used to keep your data safe and reliable. Regular updates, secure protocols, and development best practices ensure your website and user data are always protected.' },
                    { id: 4, img: commonimage5, title: 'Results, Time and Again', desc: 'Our service offerings are the leading factors of growth that can be measured, increasing engagement, conversions, and ROI. We focus on results that matter most to your business, translating website performance into real, tangible growth.' },
                    { id: 5, img: commonimage4, title: 'Real-Time Data & Updates', desc: 'Dynamic websites automatically update content based on user interactions, backend data, or integrations, keeping your platform fresh and relevant. This ensures your visitors always see the latest information without delays.' },
                    { id: 6, img: commonimage6, title: 'Personalized User Experiences', desc: 'Tailor content, recommendations, and interfaces for individual users, boosting engagement and satisfaction. By understanding user preferences and behavior, your website delivers experiences that feel custom-built for every visitor.' },
                ]}
            />
            <CommonAboutPage2
                text1="Expand Your Digital Capabilities with WD Agency"
                text2={`
                            <p class="mb-20">
                            At WD Agency, our work doesn’t stop at website launch- we continuously monitor, optimize, and enhance your website to ensure it remains competitive, examine core functionalities, and deliver the best user experience. 
                            </p>
                            <ul>
                            <li><strong>Continuous Data Adaptation:</strong> Your website can automatically update content based on user behavior, backend data, or real-time inputs, keeping your platform relevant and engaging.</li>
                            
                            <li><strong>Interactive User Experiences:</strong> Provide visitors with personalized recommendations, adaptive layouts, and interactive tools that respond to their actions in real-time.</li>
                            
                            <li><strong>Scalable Architecture:</strong> Dynamic websites can handle increasing traffic, large datasets, and complex functionalities without affecting performance or stability.</li>
                            
                            <li><strong>API & Integration Ready:</strong> Easily connect with third-party services, CRMs, and databases to pull live data and enhance user experience.</li>
                            </ul>
                            <p>
                            With WD Agency, dynamic websites adapt content and functionality in real-time to deliver personalized, engaging experiences for every user.
                            </p>
                    `}
                img={Aboutimg}
            />
              <CommonTechnologyStack
  heding={"Modern Tools for Dynamic Web Development"}
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
                    heding={"Why Our Dynamic Website Services Stand Out"}
                    subheding={"If you choose to work with WD Agency, you will be collaborating with a team that creatively combines innovation, technology, and strategy to create dynamic websites that attract measurable results."}
                    lefttext={`<ul>
                                <li><strong>Interactive User Experience:</strong> We make websites that can respond smartly to what users do with the help of the features such as real-time data updates, animations, and personalized recommendations.</li>
                                
                                <li><strong>Scalable for Growth and Traffic:</strong> With our evolving system, we can guarantee that your website will get more and more users without your having to do anything. No matter what the limits are, more users, data, or features, we plan for scalability and stability of the site in the long run.</li>
                                
                                <li><strong>Data-Driven Functionality:</strong> We provide you a platform for real-time data tracking, complex analytics dashboards, and AI-powered insights from which you can take informed decisions with minimum effort.</li>
                                
                                <li><strong>Secure & Reliable Infrastructure:</strong> We use encryption, SSL, and secure APIs. Regular updates, vulnerability scanning, and maintenance combine with these measures to ensure your website is always secure and stable.</li>
                                </ul>

                                <p>WD Agency feels proud of not only building you a website but also creating digital living ecosystems that are geared to evolve, engage, and accomplish with the growth of your business.</p>
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
                                q: "What is a Dynamic Website?",
                                a: "A dynamic website is a site that can change what it shows based on who is visiting or what they do. For example, it can show personalized content, recommendations, or updates automatically."
                            },
                            {
                                q: "How Can a Dynamic Website Benefit My Business?",
                                a: "Dynamic websites can enhance user engagement, provide personalized experiences, allow easy content updates, and scale seamlessly as your business grows."
                            },
                            {
                                q: "Are Dynamic Websites Suitable for Startups or Only Large Enterprises?",
                                a: "Dynamic websites are scalable and flexible, making them ideal for startups, growing businesses, and large enterprises alike, depending on your needs and traffic requirements."
                            },
                            {
                                q: "Can a Dynamic Website Handle High Traffic and Large Amounts of Data?",
                                a: "Yes, properly designed dynamic websites use scalable architecture and optimized code to manage large visitor volumes and complex data structures without compromising performance."
                            },
                            {
                                q: "Is a Dynamic Website Secure for Handling User Data?",
                                a: "Absolutely, dynamic websites can implement advanced security measures, including SSL encryption, secure authentication, and regular updates to protect user data and maintain trust."
                            },
                            {
                                q: "How is Content Updated on a Dynamic Website?",
                                a: "Content on dynamic websites can be updated automatically through backend databases, APIs, or CMS platforms, allowing real-time changes without manual edits to the code."
                            }]}
                        />

        </>

    )
}

export default page