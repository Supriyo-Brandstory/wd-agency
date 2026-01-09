import React from 'react'
import imagebanner from '@/app/(frontend)/assets/images/static-website-development/banner.webp'
import CommonBanner2 from '@/app/(frontend)/component/pages/common/CommonBanner2'
import CommonIntroduction from '@/app/(frontend)/component/pages/common/CommonIntroduction'
import imageintro1 from '@/app/(frontend)/assets/images/static-website-development/intro.webp'
import imageintro2 from '@/app/(frontend)/assets/images/static-website-development/intro-2.webp'
import CommonSetsUs from '@/app/(frontend)/component/pages/common/CommonSetsUs'
import setusimagesabudhabi from '@/app/(frontend)/assets/images/static-website-development/setusbg.webp'
import CommonThreeCard from '@/app/(frontend)/component/pages/common/CommonThreeCard'
import commonimage1 from '@/app/(frontend)/assets/images/website-development/Strategic-Problem-Solving.png'
import commonimage2 from '@/app/(frontend)/assets/images/website-development/FocusedApproach.png'
import commonimage3 from '@/app/(frontend)/assets/images/website-development/Partnership-Commitment.png'
import commonimage4 from '@/app/(frontend)/assets/images/website-development/Transparency.png'
import commonimage5 from '@/app/(frontend)/assets/images/website-development/Technology-Adoption.png'
import commonimage6 from '@/app/(frontend)/assets/images/website-development/Value-for-Money-Services.png'
import CommonIndustries from '@/app/(frontend)/component/pages/common/CommonIndustries'
import CommonAboutPage2 from '@/app/(frontend)/component/pages/common/CommonAboutPage2'
import Aboutimg from '@/app/(frontend)/assets/images/static-website-development/about.webp'
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
import imagewhydevelopment from '@/app/(frontend)/assets/images/static-website-development/Why-Website-Development.webp'
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
                heding={"Static Website Development Services for </br>Businesses in Dubai, UAE"}
                subtitle={"At Website Development Agency, we build static websites that are fast, secure, and easy to use. Our </br>solutions deliver your information clearly, helping your business communicate effectively online."}

            />
            <CommonIntroduction
                heding={'Simple, Fast, & Secure Websites for Every Business'}
                text1={` <p>The success of a digital-first world is primarily determined by the trio of Speed, Security, and Simplicity. Static websites are a perfect solution for companies that want to have a powerful, reliable, and efficient digital presence without the problems typically associated with dynamic web systems. At Website Development Agency, our expertise lies in creating static websites that provide instant loading, offer a flawless experience on any device, and are generally safe for your visitors.</p>
                    <p>Whether you are a startup that aims to introduce its brand, a small business wishing to proudly display the range of your services, or a big company that wants to provide the necessary information about it, our static sites are not only fast and functional but also visually attractive.</p>
                    `}
                text2={`  <p>It is our certainty and promise that every static website we create is fully optimized for search engines, is mobile-friendly, and is easy for the client to manage. With simple hosting and minimal maintenance, static sites are not only budget-friendly but also future-ready. Opting for a static website with <a href="/about">Website Development Agency</a> is equivalent to selecting performance and reliability.</p>
                <p>Our development process relies on the use of clean code, security protocols of the highest level, and optimized assets which, collectively, facilitate the meeting of modern web standards for every project. We are the ones who make the digital experiences that are the exact and professional representation of your brand.</p>
                    `}
                imageintro1={imageintro1}
                imageintro2={imageintro2}
            />
            <CommonSetsUs
                text1={'Static Websites for Startups, SMBs, & Enterprises'}
                text2={'Website Development Agency provides static website solutions that suit every business size and goal. We understand the needs of businesses and, therefore, we have the right solutions for you. It doesn’t matter whether you are a startup in need of a rapid launch, a small business wanting to build a trustworthy online presence, or a big enterprise presenting your corporate portfolios- we are here to help you. </br>Our team is responsible for the responsiveness, design, and the performance optimization of every site for all the browsers and devices. Moreover, our static website solutions are adaptable, scalable, and customized to your needs so that they bring you your desired results.'}
                bg={setusimagesabudhabi}
            />
            <CommonThreeCard
                text1={'We Expertise in Simple Yet Powerful Website Design'}
                text2={"At Website Development Agency, we combine creative design and technical expertise to build static websites that are both visually appealing and highly functional."}
                boxdata={[
                    { id: 1, img: commonimage2, title: 'Fast Loading', desc: 'Every page is optimized for speed, ensuring that visitors don’t have to wait. Faster load times improve engagement, reduce bounce rates, and enhance the overall user experience.' },
                    { id: 2, img: commonimage1, title: 'Better Security', desc: 'Static websites have minimal backend operations, making them less vulnerable to hacking and other security threats. This ensures your site and visitor data remain safe and protected.' },
                    { id: 3, img: commonimage3, title: 'SEO-Friendly', desc: 'Our developers carefully structure the code and implement best practices to make your website easily discoverable by search engines, improving your visibility online.' },
                    { id: 4, img: commonimage5, title: 'More Reliability', desc: 'With fewer moving parts and minimal maintenance needs, static websites remain stable and consistent over time, offering high uptime and dependable performance.' },
                    { id: 5, img: commonimage4, title: 'Cost-Effective', desc: 'Simpler architecture and lower server requirements make static websites more affordable to build, host, and maintain, providing excellent value for small and medium-sized businesses.' },
                    { id: 6, img: commonimage6, title: 'Consistent User Experience', desc: 'With predictable performance across all devices and browsers, static websites deliver a seamless and uniform experience, keeping users engaged and satisfied.' },
                ]}
            />
            <CommonAboutPage2
                text1="Expand Your Digital Capabilities with Website Development Agency"
                text2={`
                            <p class="mb-20">
                            We don't just create basic static websites, we offer additional services that improve your online presence: 
                            </p>
                            <ul>
                            <li><strong>SEO Optimization:</strong> Implementation of meta tags, structured data, and load-speed optimization to improve visibility and broaden your website's reach.</li>
                            
                            <li><strong>Hosting & Domain Setup:</strong> Fast and secure hosting, along with domain registration and configuration support for hassle-free deployment.</li>
                            
                            <li><strong>Maintenance & Updates:</strong> Regular content updates and performance check-ups keep your site fresh, secure, and running smoothly.</li>
                            
                            <li><strong>Design Customization:</strong> Tailored design solutions, from pre-built templates to fully bespoke layouts, that reflect your brand’s unique identity.</li>
                            </ul>
                            <p>
                            If you are looking for content refreshes from time to time or advanced SEO enhancements, Website Development Agency is there to support you with the performance of your static website at the highest level - far beyond the date of launch.
                            </p>
                    `}
                img={Aboutimg}
            />
              <CommonTechnologyStack
  heding={"Modern Static Web Design Tech Stack"}
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
                    <CommonWhyWebsiteDevelopment
                    heding={"Benefits of Partnering with Us"}
                    subheding={"When you team up with Website Development Agency, you get a team that is all about offering performance-driven, future-ready solutions. That is what makes us different from the others:"}
                    lefttext={`<ul>
                                <li><strong>Fast Loading Speeds:</strong> Our static websites are designed for near-instant loading, providing a seamless user experience that encourages visitor engagement.</li>
                                
                                <li><strong>Enhanced Security:</strong> With no databases or server-side scripting, static sites are less vulnerable to cyber threats and attacks, keeping your website safe.</li>
                                
                                <li><strong>Cost-Effective and Low-Maintenance:</strong> Enjoy high performance without recurring costs or complex maintenance requirements, making static sites an economical choice.</li>
                                
                                <li><strong>Reliable and Scalable:</strong> Our static solutions are flexible and can be easily scaled to accommodate new sections or pages as your business grows.</li>
                                </ul>

                                <p>We specialize in creating static websites that effectively communicate with your customers professionally. Each website that we design & develop is a true reflection of our commitment to design perfection, speed optimization, and longevity of service.</p>
                            `}
                    rightimage={imagewhydevelopment}

                    />
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
                                q: "What is a Static Website?",
                                a: "A static website is made up of fixed web pages coded in HTML, CSS, and JavaScript. Each page is delivered to the user exactly as stored, offering fast performance and simplicity."
                            },
                            {
                                q: "Are Static Websites Secure?",
                                a: "Yes, since static sites don’t rely on databases or server-side scripts, they are much less vulnerable to hacking and other security threats."
                            },
                            {
                                q: "How Easy is It to Maintain a Static Website?",
                                a: "Static websites are low-maintenance because they don’t require frequent updates or server-side management. Updating content is simple and cost-effective."
                            },
                            {
                                q: "Can a Static Website Handle High Traffic?",
                                a: "Yes, static sites are highly scalable and can be served through CDNs (Content Delivery Networks) to handle large volumes of visitors efficiently."
                            },
                            {
                                q: "Are Static Websites Suitable for All Businesses?",
                                a: "Static websites are ideal for businesses that need fast, secure, and reliable online presence. They work best for informational sites, portfolios, landing pages, and small to medium web projects."
                            }]}
                        />

        </>

    )
}

export default page