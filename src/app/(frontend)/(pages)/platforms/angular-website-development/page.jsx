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
                heding={"WordPress Website <br>Development Company in UAE"}
                subtitle={"We design and develop responsive, secure, and high-performing <br>WordPress websites that drive business growth in Dubai, <br>Abu Dhabi, and across the UAE."}

            />
             <CommonIntroduction
                heding={'Impactful Website Design in Dubai'}
                text1={` <p>WD Agency is a PHP web development company you can rely on in the UAE. We enable businesses to build digital solutions that are fast, flexible, and ready for the future. With the experience of several years and a team of developers skilled in their trade, we are proficient in designing websites and web applications based on PHP that are strong and specifically designed to satisfy the individual requirements of our clients.</p>
                    <p>We have the expertise to work with Laravel, CodeIgniter, and Symfony to a great extent. This, in turn, enables us to create websites or platforms that are dynamic, rich in features, and driven by performance, and also scale without any issues as your business expands. The PHP solutions that we provide will impress you not only with their functionality but also with their ability to give you long-term value, whether you require a corporate website, an eCommerce platform, or a custom web application.</p>
                    `}
                text2={`  <p>We are the ones whom leading brands in the UAE and ambitious startups trust. And we have helped them achieve success that can be measured in a very straightforward manner by means of digital transformation that is both easy and smooth. We deliver it by focusing on thorough coding, creating an intuitive UI/UX design, and providing a strong back-end functionality for websites that are not only visually appealing but are also flawless in their execution.</p>
                <p>We make sure that our every PHP project will be responsive, SEO-friendly, and user engagement-optimized, thus guaranteeing that visibility and conversions are at their highest levels. Being committed to quality, scalability, and innovation is what makes us one of the most dependable PHP web development partners in the UAE.</p>
                    `}
                imageintro1={imageintro1}
                imageintro2={imageintro2}
            />
            <CommonSetsUs
                text1={'The Power of PHP for Modern UAE Businesses'}
                text2={`In spite of the existence of new technologies, PHP is still a very strong and dependable technology which can be used to create websites that load fast and are efficient in a very nice way for businesses in the UAE that are looking for flexibility, speed, and scalability. So, PHP is the best web development solution for businesses in the UAE.
                    <br><br>
                    Any business from Dubai, Abu Dhabi, and Sharjah can build a high-quality website by the use of PHP, which is an open-source and cost-effective technology without spending a lot. Furthermore, its wide community support and frequent updates are the ways to keep your website secure, modern, and trend-ready in the future.


                       `}
                bg={setusimagesabudhabi}
            />
            <CommonIndustries
                heding={'Comprehensive PHP Development Solutions Tailored for UAE Businesses'}
                subheding='We at Brandstory are committed to providing fully integrated PHP web development solutions that are specifically tailored to the needs of businesses in the whole UAE, i.e. from Dubai to Abu Dhabi, Sharjah, and other cities. Our talented PHP developers turnaround PHP projects that are highly efficient, secure, and scalable and thus result in increased profits for our clients in the digital space.'
                services={[
                    {
                        title: 'Custom PHP Web Development',
                        desc: 'We design single and fully featured custom websites that are in perfect harmony with both your brand’s vision and company goals. Be it a corporate website or a massive enterprise portal, our programming always results in a perfect combination of appearance and functionality.',
                        img: imageService1,
                        btnname: 'Contact Us',
                        link: '/contact-us',
                    }, {
                        title: 'E-commerce PHP Development',
                        desc: `Come aboard the thriving UAE online market through a secure, feature-rich PHP-based e-commerce platform. We make it possible for you to have seamless payment methods, accurate inventory management, and attractive yet simple designs thus making the customers' experience smooth and enjoyable.`,
                        img: imageService2,
                        btnname: 'Contact Us',
                        link: '/contact-us',
                    },
                    {
                        title: 'PHP CMS Development',
                        desc: 'With SPAs that are based on modern libraries like React, Vue, and Angular for fast and smooth navigation, you can enjoy the speed and smoothness of an app-like experience.',
                        img: imageService3,
                        btnname: 'Contact Us',
                        link: '/contact-us',
                    },
                    {
                        title: 'Progressive Web Apps (PWAs)',
                        desc: 'With PHP-based CMS platforms such as WordPress, Drupal, or even a tailor-made CMS solution, content management becomes a walk in the park since you have full freedom over the usage of the website’s text and media.',
                        img: imageService4,
                        btnname: 'Contact Us',
                        link: '/contact-us',
                    },
                    {
                        title: 'API Integration & Development',
                        desc: 'Use your website to communicate with CRMs, ERPs, and other third-party software through well-constructed RESTful and SOAP APIs.',
                        img: imageService5,
                        btnname: 'Contact Us',
                        link: '/contact-us',
                    },
                    {
                        title: 'PHP Migration & Upgradation',
                        desc: 'Switch to the latest PHP versions from old and tired ones or move to such frameworks as Laravel or CodeIgniter for improved speed and safety.',
                        img: imageService8,
                        btnname: 'Contact Us',
                        link: '/contact-us',
                    }


                ]}
            />
            
               <CommonDevelopmentProcess
                heding={'Our PHP Development Process'}
                subheding={'How We Build World-Class PHP Websites'}
                processData={[
                    {
                        id: "01",
                        title: "Discovery & Requirement Analysis",
                        description: `Our approach is to first understand your business model, goals, and target audience. Technical experts of ours scrutinize your requirements, competitors, and user expectations to come up with the scope of the project.`,
                    },
                    {
                        id: "02",
                        title: "Wireframing & UI/UX Design",
                        description: `After that, we design the wireframes and the user interface in great detail. The layout, color scheme, and navigation elements are all designed to provide the users with an experience that is easy to use, and that increases engagement and conversions.`,
                    },
                    {
                        id: "03",
                        title: "Custom PHP Development",
                        description: `Our accredited PHP developers perform the development work in PHP by writing clean, scalable, and reusable codes that are compatible with the latest frameworks — Laravel, CodeIgniter, Symfony, and Yii. Our main focus is on modular architecture for the sake of easy upgrades and long-term flexibility.`,
                    },
                    {
                        id: "04",
                        title: "Quality Testing & Optimization",
                        description: `On top of that, before the website is launched; QA engineers put the website through rigorous tests by checking the features, the user-friendliness, and the security level. We want to make sure that your website is fast, able to perform smoothly, and not susceptible to bugs or security loopholes.`,
                    },
                    {
                        id: "05",
                        title: "Deployment on UAE-based Hosting Servers",
                        description: `Deployment is done by us in a hassle-free manner on hosting servers that are high-performing and based in the UAE thus, your website will not only have a fast loading time but also Dubai local SEO benefits.`,
                    },
                    {
                        id: "06",
                        title: "Ongoing Maintenance & Support",
                        description: `Nevertheless, we are not done until after the website has been launched. To make sure the website is always performing well, we offer through-time and security updates, and technical support.<br><br>By adhering to this well-organized plan we are able to make sure that every single PHP project that we bring to fruition is of a world-class standard — the projects are a perfect blend of innovation, speed, and reliability which results in extraordinary digital experiences.
`,
                    }

                ]} />
                 <CommonThreeCard
                text1={'Key Features We Implement'}
                text2={"At Brandstory we upgrade your website with more comfortable,more expandable and safe features that are usable directly from mobile and desktop devices and on the different platforms of the web making a standard PHP development."}
                boxdata={[
                    { id: 1, img: StrategicProblemSolvingimage, title: 'Device independent Website Performance', desc: 'PHP plus brand story features including heavy and light computing, memory management, networking, and threading that work seamlessly on desktops, tablets, and smartphones.' },
                    { id: 2, img: FocusedApproachimage, title: 'Mobile First Design Approach', desc: 'Strategies that prioritize users of handheld devices and deliver total satisfaction to them alongside good data visualization features.' },
                    { id: 3, img: PartnershipCommitmentimage, title: 'Secure Authentication Systems', desc: 'WordPress, Drupal, and custom CMS for flexible content management.' },
                    { id: 4, img: Transparencyimage, title: 'API Development and Integration', desc: 'Besides creating resources that enable to-consumers-access functionalities,we also employ RESTful and SOAP services to link these abilities among CRMs, ERPs, and other third-party apps for uninterrupted business flows.' },
                    { id: 5, img: TechnologyAdoptionimage, title: 'Online store capabilities', desc: 'Fully-featured e-commerce modules inclusive of product management, order tracking, and UAE-specific payment gateways such as PayTabs and Telr.' },
                    { id: 6, img: ValueforMoneyServicesimage, title: 'Database Optimization', desc: 'Measures such as quicker search query invocation, shortened load times, and longer database health have been undertaken by us to set the stage for steady performance.' },
                    { id: 7, img: ValueforMoneyServicesimage, title: 'Acceleration & Speed Up Techniques', desc: 'High-speed answer, even if there is a flood of traffic, is guaranteed by Redis or Memcached caching.' },
                    { id: 8, img: ValueforMoneyServicesimage, title: 'Content managing capabilities', desc: 'Admin dashboards that are user-friendly and allow for non-technicians to update content in real time.' },
                    { id: 9, img: ValueforMoneyServicesimage, title: 'Support for multiple languages and currencies ', desc: ' Lead the diverse audience of the UAE by applying locale-specific language and currency settings.' },
                ]}
            />
            <CommonWhyWebsiteDevelopment
                    heding={"Your Trusted PHP Web Development Agency in UAE"}
                    subheding={"Choosing Brandstory means partnering with a PHP development team that understands the UAE market while delivering global standards of excellence."}
                    lefttext={`<ul>
                                <li><strong>Decade-long experience in PHP website development</strong> – With over ten years of experience, we’ve helped hundreds of UAE businesses establish robust and dynamic online platforms.</li>
                                
                                <li><strong>Local UAE expertise with a global development standard</strong> – Our deep knowledge of the business culture and the regulations in the UAE helps your website to be the best fit for local performance and compliance.</li>
                                
                                <li><strong>Agile methodology and transparent communication</strong> – We operate agile workflows, thus, you are updated and you can participate at every stage for total project openness.</li>
                                
                                <li><strong>Dedicated team for front-end and back-end development</strong> – Responsive designs ensure a seamless and user-friendly experience across all devices.</li>
                                <li><strong>Affordable pricing tailored for UAE businesses</strong> –  Enjoy top-notch PHP solutions at budget-friendly rates that are planned for startups, SMEs, and enterprises going across the UAE.</li>
                                </ul>
                                <p>Our goal is to digitally grow the businesses of the UAE with web solutions that are dependable, scalable, and innovative, and built on PHP — one of the most reliable web technologies globally.</p>
                            `}
                    rightimage={imagewhydevelopment}

                    />
                    <CommonIndustries />
            <CommonClientTestimonials/>
            <CommonServiceLocations/>

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