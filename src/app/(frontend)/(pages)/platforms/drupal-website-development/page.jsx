import React from 'react'
import CommonBanner2 from '../../../component/pages/common/CommonBanner2'
import imagebanner from '@/app/(frontend)/assets/images/startup-website-dev/startup-web-banner.webp'
import CommonIntroduction from '../../../component/pages/common/CommonIntroduction'
import imageintro1 from '@/app/(frontend)/assets/images/portfolio-web-development/portfolio-website-design.webp'
import imageintro2 from '@/app/(frontend)/assets/images/portfolio-web-development/portfolio-web-design-agency.webp'
import CommonSetsUs from '../../../component/pages/common/CommonSetsUs'
import setusimagesabudhabi from '@/app/(frontend)/assets/images/abu-dhabi/setusbg.webp'
import StrategicProblemSolvingimage from '@/app/(frontend)/assets/images/website-development/Strategic-Problem-Solving.png'
import FocusedApproachimage from '@/app/(frontend)/assets/images/website-development/FocusedApproach.png'
import PartnershipCommitmentimage from '@/app/(frontend)/assets/images/website-development/Partnership-Commitment.png'
import Transparencyimage from '@/app/(frontend)/assets/images/website-development/Transparency.png'
import TechnologyAdoptionimage from '@/app/(frontend)/assets/images/website-development/Technology-Adoption.png'
import ValueforMoneyServicesimage from '@/app/(frontend)/assets/images/website-development/Value-for-Money-Services.png'
import CommonDevelopmentProcess from '../../../component/pages/common/CommonDevelopmentProcess'
import CommonIndustries from '../../../component/pages/common/CommonIndustries'
import imageService1 from '@/app/(frontend)/assets/images/e-commerce-web-development/Custom-Ecommerce-Website-Design.webp'
import imageService2 from '@/app/(frontend)/assets/images/e-commerce-web-development/Ecommerce-Website-Development.webp'
import imageService3 from '@/app/(frontend)/assets/images/e-commerce-web-development/Payment-Gateway-Integration.webp'
import imageService4 from '@/app/(frontend)/assets/images/e-commerce-web-development/Shopping-Cart-Checkout-Solutions.webp'
import imageService5 from '@/app/(frontend)/assets/images/e-commerce-web-development/Product-Catalog-Management.webp'
import imageService8 from '@/app/(frontend)/assets/images/e-commerce-web-development/Maintenance-Support.webp'
import CommonWhyWebsiteDevelopment from '../../../assets/style/common/CommonWhyWebsiteDevelopment'
import imagewhydevelopment from '@/app/(frontend)/assets/images/e-commerce-web-development/Why-Website-Development.webp'
import CommonFaqSection from '../../../component/pages/common/CommonFaqSection'
import CommonServiceLocations from '../../../component/pages/common/CommonServiceLocations'
import CommonClientTestimonials from '../../../component/pages/common/CommonClientTestimonials'
import CommonThreeCard from '@/app/(frontend)/component/pages/common/CommonThreeCard'


const page = () => {
  return (
    <>
      <CommonBanner2
                bg={imagebanner}
                heding={"Drupal Website Development Company</br> in Dubai, UAE"}
                subtitle={"We craft Drupal websites that combine security, scalability, and rich functionality, </br>helping businesses across Dubai and the UAE grow with confidence online."}

            />
             <CommonIntroduction
                heding={'Trusted Drupal Development Partner'}
                text1={` <p>WD‍‌‍‍‌‍‌‍‍‌ agency is the most reliable Drupal website development company in Dubai and the UAE. We have extensive experience in working with Drupal website projects for almost a decade. Our seasoned website development experts are capable of delivering high-quality, secure, and scalable Drupal websites with a strong focus on performance and design.</p>
                    <p>At WD Agency, our team of experienced Drupal developers is proficient across versions 8 through 10, ensuring compatibility, stability, and performance for every project. Whether it’s a simple business website or a complex enterprise-level platform, we deliver tailored Drupal solutions that are secure, scalable, and future-ready. </p>
                    `}
                text2={`  <p>WD Agency is your go-to agency if you want a powerful and fast Drupal website that will give your business the required freedom, growth potential, and top-level functionality. No matter if you are a startup, SME, or enterprise in the UAE, our expert Drupal developers create personalized solutions that fit your distinct online ‍‌‍‍‌‍‌‍‍‌goals.</p>
                <p>We have achieved significant milestones that set us apart from others. Our team consistently delivers cutting-edge Drupal solutions focused on security, scalability, and SEO optimization. With a proven track record in developing enterprise-grade web platforms, we emphasize transparency at every stage of the process and provide dedicated post-launch support.</p>
                    `}
                imageintro1={imageintro1}
                imageintro2={imageintro2}
            />
            <CommonSetsUs
                text1={'The Enterprise-Grade CMS for UAE Businesses'}
                text2={`Drupal is a powerful and flexible content management system trusted by businesses that demand security, scalability, and high performance. It offers enterprise-grade protection against vulnerabilities and can efficiently manage large, complex websites with thousands of pages and heavy traffic.
                    <br><br>
                    With its modular design, Drupal allows easy customization and efficient content management while supporting SEO-friendly features, multi-language, and multi-site capabilities. Perfect for UAE businesses, it helps brands reach wider audiences and maintain strong digital performance across all platforms.


                       `}
                bg={setusimagesabudhabi}
            />
            <CommonIndustries
                heding={'Comprehensive Drupal Solutions for UAE Businesses'}
                subheding='WD Agency provides a full suite of Drupal web development services designed to meet the diverse needs of UAE’s businesses. From startups to large enterprises, our solutions cover every aspect of your Drupal journey.'
                services={[
                    {
                        title: 'Custom‍‌‍‍‌‍‌‍‍‌ Drupal Development',
                        desc: 'We do not just make Drupal websites, we make tailor-made CMS websites that fit like a glove with your business objectives. Our team ensures that every website is optimized for performance, usability, and long-term scalability.',
                        img: imageService1,
                        btnname: 'Contact Us',
                        link: '/contact-us',
                    }, {
                        title: 'Drupal Theme Design & Customization',
                        desc: `Our inventive UI/UX designers produce eye-catching, fully responsive, and SEO-optimized Drupal theme designs that help the brand become more recognizable and better user experience.`,
                        img: imageService2,
                        btnname: 'Contact Us',
                        link: '/contact-us',
                    },
                    {
                        title: 'Drupal Module & Integration',
                        desc: 'How about feature customization? We create feature-rich Drupal modules and, as a result, third-party APIs, payment gateways, and CRMs are seamlessly integrated for your convenience.',
                        img: imageService3,
                        btnname: 'Contact Us',
                        link: '/contact-us',
                    },
                    {
                        title: 'Drupal Migration Services',
                        desc: 'Move to Drupal from WordPress, Joomla, or any other CMS, with the complete functionality being preserved and no data loss. We render the migration process both easy and safe.',
                        img: imageService4,
                        btnname: 'Contact Us',
                        link: '/contact-us',
                    },
                    {
                        title: 'Enterprise Drupal Solutions',
                        desc: 'As we have the capacity to deliver our solutions in such a variety of ways, be it multi-site setups, large-scale intranets, and web portals, our enterprise Drupal solutions.',
                        img: imageService5,
                        btnname: 'Contact Us',
                        link: '/contact-us',
                    },
                    {
                        title: 'Maintenance & Support',
                        desc: 'We keep up the website through regular maintenance, bug repairs, security updates, and performance tuning so that your Drupal website is always up to speed, safe, and ‍‌‍‍‌‍‌‍‍‌trustworthy.',
                        img: imageService8,
                        btnname: 'Contact Us',
                        link: '/contact-us',
                    }


                ]}
            />
            
               <CommonDevelopmentProcess
                heding={'Our Drupal Development Process'}
                subheding={'From Concept to Launch- Our Structured Workflow'}
                processData={[
                    {
                        id: "01",
                        title: "Requirement Analysis & Planning",
                        description: `By knowing your business objectives, target audience, and project scope, we create a detailed plan for design and development.`,
                    },
                    {
                        id: "02",
                        title: "Wireframing & UI/UX Design",
                        description: `Our designers prepare wireframes and working models which represent the layout, content, and user flow of your Drupal site.`,
                    },
                    {
                        id: "03",
                        title: "Custom Drupal Development",
                        description: `By sticking to the latest Drupal releases and using the correct coding standards, our developers create a web solution that is robust, safe, and can grow with you, and is specifically made for you.`,
                    },
                    {
                        id: "04",
                        title: "Module & API Integration",
                        description: `We integrate essential Drupal modules and third-party APIs to extend website functionality, streamline backend operations, and enhance overall site performance.`,
                    },
                    {
                        id: "05",
                        title: "Testing & Quality Assurance",
                        description: `We conduct comprehensive security, performance, and compatibility testing to ensure each website meets the highest quality standards before launch.`,
                    },
                    {
                        id: "06",
                        title: "Deployment & Ongoing Maintenance",
                        description: `We put your website online after you give the final go-ahead. We keep on providing support for the website to be at its best and to be ‍‌‍‍‌‍‌‍‍‌dependable.`,
                    }

                ]} />
                 <CommonThreeCard
                text1={'Advanced Features We Implement in Drupal Websites'}
                text2={"Our Drupal developers integrate the latest features and best practices to ensure your website is future-proof and business-ready."}
                boxdata={[
                    { id: 1, img: StrategicProblemSolvingimage, title: 'Device independent Website Performance', desc: 'Drupal ensures seamless performance across desktops, tablets, and smartphones with responsive themes, optimized caching, and adaptive image handling.' },
                    { id: 2, img: FocusedApproachimage, title: 'Mobile First Design Approach', desc: 'We follow a mobile-first strategy to prioritize handheld users, ensuring intuitive navigation, fast loading times, and excellent visual presentation across devices.' },
                    { id: 3, img: PartnershipCommitmentimage, title: 'Secure Authentication Systems', desc: 'With Drupal’s robust user management and permission system, we implement secure authentication, role-based access control, and advanced encryption standards.' },
                    { id: 4, img: Transparencyimage, title: 'API Development and Integration', desc: 'We leverage Drupal’s core RESTful and JSON:API modules to connect with CRMs, ERPs, and other third-party applications for smooth data exchange and automated workflows.' },
                    { id: 5, img: TechnologyAdoptionimage, title: 'E-commerce Capabilities', desc: 'Using Drupal Commerce, we build feature-rich online stores with product catalogs, order tracking, and integration with UAE-specific payment gateways such as PayTabs and Telr.' },
                    { id: 6, img: ValueforMoneyServicesimage, title: 'Database Optimization', desc: 'We implement Drupal’s built-in caching layers, query optimization, and database indexing to ensure fast load times and long-term stability.' },
                    { id: 7, img: ValueforMoneyServicesimage, title: 'Acceleration & Speed Optimization', desc: 'Redis, Memcached, and Drupal’s performance modules are configured to deliver high-speed responses even during heavy traffic surges.' },
                    { id: 8, img: ValueforMoneyServicesimage, title: 'Content Management Capabilities', desc: 'Drupal’s intuitive admin dashboard allows content editors to create, edit, and publish content effortlessly- no coding required.' },
                    { id: 9, img: ValueforMoneyServicesimage, title: 'Multilingual and Multicurrency Support ', desc: 'We configure Drupal’s multilingual modules and locale settings to serve diverse audiences with language-specific and currency-based content experiences.' },
                ]}
            />
            <CommonWhyWebsiteDevelopment
                    heding={"Why Choose WD Agency for Drupal Development"}
                    subheding={"Choosing‍‌‍‍‌‍‌‍‍‌ a WD Agency is basically a guarantee of getting a top-quality, innovative, and reliable service in the long run. Our team of technically skilled experts combines technical expertise with a deep understanding of the UAE market."}
                    lefttext={`<ul>
                                <li><strong>Skilled Drupal Developers</strong> – Our developers incorporate the latest Drupal trends and design practices to engage local businesses, combining technical expertise with an understanding of UAE market expectations.</li>
                                
                                <li><strong>Enterprise-Grade Solutions</strong> – We deliver secure, high-performance Drupal solutions for businesses of all sizes, from small websites to complex enterprise platforms, built on robust architecture and advanced security protocols.</li>
                                
                                <li><strong>Custom Integrations</strong> – We enhance Drupal’s functionality through custom module development and seamless third-party integrations to support unique business workflows.</li>
                                
                                <li><strong>Agile Workflow and Communication</strong> – Following agile methodology, we ensure timely delivery, clear communication, and complete project visibility throughout every development phase.</li>
                                </ul>
                            `}
                    rightimage={imagewhydevelopment}

                    />
                    <CommonIndustries />
            <CommonClientTestimonials/>
            <CommonServiceLocations/>

            <CommonFaqSection
                faqs={[
                    {
                        q: "How Much Does a Drupal Website Cost in The UAE?",
                        a: "The price of a Drupal website depends on various factors like the intricacy of the design, the features, and the size of the project. At WD Agency, we offer you the price that matches your exact needs. Typically Drupal websites may range between AED 5,000 to AED 50,000 based on the complexity."
                    },
                    {
                        q: "Is Drupal Suitable for Multilingual and Multi-currency Websites in The UAE?",
                        a: "Yes, Drupal’s core supports multilingual capabilities and can easily handle multiple currencies, making it ideal for UAE-based businesses that serve diverse audiences in Arabic, English, and other languages."
                    },
                    {
                        q: "Can You Integrate UAE-specific Payment Gateways with Drupal?",
                        a: "Definitely, we integrate local and global payment gateways such as PayTabs, Telr, Stripe, and PayPal within Drupal Commerce for secure and seamless online transactions."
                    },
                    {
                        q: "Do You Offer Drupal Maintenance and Support after Launch?",
                        a: "Yes, we provide ongoing maintenance, security updates, performance optimization, and feature enhancements to keep your Drupal website stable and up to date."
                    },
                    {
                        q: "How Do You Ensure The Security of Drupal Websites?",
                        a: "We follow the best security practices, use the latest patches, implement role-based access control, enable HTTPS, and perform regular vulnerability scans to keep your site fully protected."
                    },
                    {
                        q: "Can Drupal be Integrated with CRM or ERP Systems?",
                        a: "Absolutely, Drupal’s robust API architecture allows smooth integration with leading CRMs and ERPs like Salesforce, HubSpot, and SAP to ensure automated and synchronized data management."
                    }
                ]}
            />

    </>
  )
}

export default page