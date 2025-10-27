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
                heding={'WordPress Website Development'}
                text1={` <p>Your‍‌‍‍‌‍‌‍‍‌ website is the first impression of your business in a digitally-driven world. WD Agency is the company that can expert in custom WordPress website development in the UAE. We provide powerful, scalable, and aesthetically appealing website that really gets your business noticed. We have been up to this for more than ten years.</p>
                    <p>So, we had no problem teaming up with the startups, SMEs, and big companies in the UAE to build a strong online presence through powerful WordPress solutions. Our team of certified WordPress developers and designers is passionate about creating websites that are creative and high-performing. </p>
                    `}
                text2={`  <p>Creating websites that are easy to use, fast, and compatible with any device helps attract visitors and keep them coming back. We offer a full range of WordPress CMS customization and maintenance services designed to deliver seamless functionality and user-friendly experiences.</p>
                <p>At WD Agency, we ensure your website’s security, scalability, and performance for long-term success. When you choose us, you’re partnering with a UAE-based WordPress expert who understands your business, audience, and digital goals.</p>
                    `}
                imageintro1={imageintro1}
                imageintro2={imageintro2}
            />
            <CommonSetsUs
                text1={'WordPress Website Development Services'}
                text2={`We provide scalable WordPress development services for various startups and large-scale enterprises. At WD Agency, we focus on creating high-performance and visually appealing websites that are easy to navigate, optimized for search engines, and future-ready. Beyond design and development, we provide ongoing support and performance optimization.
                    <br><br>
                    We ensure your website can deliver the best performance and improve user engagement. Our WordPress development experts build solutions that combine creativity and functionality to help your brand grow and scale in the competitive marketplace. 


                       `}
                bg={setusimagesabudhabi}
            />
            <CommonIndustries
                heding={'End-to-End WordPress Solutions for UAE Businesses'}
                subheding='At‍‌‍‍‌‍‌‍‍‌ WD Agency, we provide full-fledged WordPress development solutions crafted to fit the exact needs of the market. Essentially, our team is your one-stop solution for strategy, design, development, optimization, and support services.'
                services={[
                    {
                        title: 'Custom WordPress Development',
                        desc: 'Our website designers bring you a tailored website that reflects the business goals, brand identity, and the customer journey of your company. This means that every feature and format has been designed with the conversion-driven design principle in mind.',
                        img: imageService1,
                        btnname: 'Contact Us',
                        link: '/contact-us',
                    }, {
                        title: 'Theme Design & Customization',
                        desc: `Our designers devise visually appealing, user-friendly, SEO-friendly WordPress themes that are also mobile-responsive. Additionally, we tailor the themes which are already built to reflect the brand aesthetics of your business.`,
                        img: imageService2,
                        btnname: 'Contact Us',
                        link: '/contact-us',
                    },
                    {
                        title: 'Plug-in Development & Integration',
                        desc: 'Looking for a custom feature? The answer is yes. We create custom plugins and integrate third-party tools for payments, analytics, CRM, and others that you may need.',
                        img: imageService3,
                        btnname: 'Contact Us',
                        link: '/contact-us',
                    },
                    {
                        title: 'WordPress eCommerce Solutions',
                        desc: 'Make the most out of your WooCommerce store with easy checkout, product filters, and payment integrations. We, as a team, are here to help UAE businesses to optimize their online sales experience.',
                        img: imageService4,
                        btnname: 'Contact Us',
                        link: '/contact-us',
                    },
                    {
                        title: 'Website Migration & Upgradation',
                        desc: 'Transition to WordPress, or simply upgrade your old website without compromising on data, SEO ranking, or functionality.',
                        img: imageService5,
                        btnname: 'Contact Us',
                        link: '/contact-us',
                    },
                    {
                        title: 'Maintenance & Support',
                        desc: 'We take on your site’s regular care through ongoing maintenance - this includes the most recent updates, backups, smooth running, and security ‍‌‍‍‌‍‌‍‍‌monitoring.',
                        img: imageService8,
                        btnname: 'Contact Us',
                        link: '/contact-us',
                    }


                ]}
            />
            
               <CommonDevelopmentProcess
                heding={'From Concept to Launch- Our Proven Workflow'}
                subheding={'How We Build WordPress Websites That Drive Results'}
                processData={[
                    {
                        id: "01",
                        title: "Requirement Analysis & Planning",
                        description: `We do it by understanding the business goals, target audience, and the functionality of the website that you want to create.`,
                    },
                    {
                        id: "02",
                        title: "Wireframing & UI/UX Design",
                        description: `Our designers evolve to the next level user interface design concepts and brilliant user flow with the help of the latest design standards.`,
                    },
                    {
                        id: "03",
                        title: "Custom WordPress Development",
                        description: `Our experts customize and configure WordPress to transform your design into a fully functional, high-performing website tailored to your business needs.`,
                    },
                    {
                        id: "04",
                        title: "Plugin & API Integration",
                        description: `Along with plugins and APIs for the marketing, CRM, analytics, and payment gateways, we integrate the essential one only.`,
                    },
                    {
                        id: "05",
                        title: "Quality Testing & Launch",
                        description: `Before the website launch, we perform a tough test for characteristics, speed, mobile-friendliness, and SEO readiness of a website.`,
                    },
                    {
                        id: "06",
                        title: "Ongoing Maintenance & Support",
                        description: `After the release, we keep an eye on, carry out changes, and upgrade the site for a continuous betterment.`,
                    }

                ]} />
                 <CommonThreeCard
                text1={'Powerful Features for Dynamic UAE Websites'}
                text2={"We integrate advanced WordPress features to craft secure, fast, and high-performing websites designed to meet the needs of UAE businesses."}
                boxdata={[
                    { id: 1, img: StrategicProblemSolvingimage, title: 'Responsive Design', desc: 'We design websites that automatically adjust to every screen size and browser. This ensures your visitors enjoy a seamless, engaging experience on mobile, tablet, or desktop.' },
                    { id: 2, img: FocusedApproachimage, title: 'SEO-Friendly Structure', desc: 'Our WordPress builds follow SEO best practices from the start. With optimized code, meta tags, and site architecture, your website is ready to perform well in search rankings.' },
                    { id: 3, img: PartnershipCommitmentimage, title: 'Interactive Media Management', desc: 'Keep your audience engaged with dynamic blogs, galleries, and portfolios. We make it easy to update and manage your content effortlessly.' },
                    { id: 4, img: Transparencyimage, title: 'Custom Forms & CRM Integration', desc: 'Streamline your lead generation process with tailored contact forms and integrated CRM systems. This helps you capture, track, and nurture potential customers effectively.' },
                    { id: 5, img: TechnologyAdoptionimage, title: 'WooCommerce Integration', desc: 'We bring eCommerce to your website with WooCommerce- offering secure payments, smooth checkout, and intuitive product management. This gives your customers a hassle-free shopping experience.' },
                    { id: 6, img: ValueforMoneyServicesimage, title: 'Enhanced Security & Backups', desc: 'Your website is safeguarded with advanced security measures and automated backups. We ensure your data remains protected and easily recoverable at all times.' },
                    { id: 7, img: ValueforMoneyServicesimage, title: 'Speed & Performance Optimization', desc: 'We optimize your website for speed and performance to enhance user satisfaction. Improved Core Web Vitals and faster load times help boost engagement and SEO rankings.' },
                    { id: 8, img: ValueforMoneyServicesimage, title: 'Multi-Language & Currency Support', desc: 'Cater to the UAE’s diverse audience with multilingual websites and multiple currency options. This helps your business connect with local and international customers alike.' },
                ]}
            />
            <CommonWhyWebsiteDevelopment
                    heding={"Why Choose WD Agency for WordPress Website Development"}
                    subheding={"The‍‌‍‍‌‍‌‍‍‌ right WordPress agency can be a major factor in your online success. So, here is why enterprises in the UAE rely on us:"}
                    lefttext={`<ul>
                                <li><strong>Experienced WordPress Developers</strong> – Our developers are extensively skilled in creating themes, customizing plugins, and setting up e-commerce.</li>
                                
                                <li><strong>Local Market Expertise</strong> – We know the digital ecosystem of the UAE, consumer behavior, and market trends.</li>
                                
                                <li><strong>Responsive & Optimized Websites</strong> – We create custom WordPress websites with optimal user experience, ensuring seamless performance, faster loading, and flawless functionality across all devices.</li>
                                
                                <li><strong>Custom-Tailored Solutions</strong> – We craft unique WordPress websites that align perfectly with your brand identity, business goals, and audience expectations for maximum impact.</li>

                                <li><strong>Ongoing Support</strong> –  We provide continuous maintenance, updates, and performance optimization to ensure your website stays secure, fast, and effective long after launch.</li>
                                </ul>
                                <p>By partnering with WD Agency, you are not merely creating a website, but rather, you are gaining a digital growth partner who is dedicated to your success in the long ‍‌‍‍‌‍‌‍‍‌run.</p>
                            `}
                    rightimage={imagewhydevelopment}

                    />
                    <CommonIndustries />
            <CommonClientTestimonials/>
            <CommonServiceLocations/>

            <CommonFaqSection
                faqs={[
                    {
                        q: "How Much Does WordPress Website Development Cost?",
                        a: "The‍‌‍‍‌‍‌‍‍‌ price primarily depends on features, design intricacy, and business objectives. A simple site will cost you from AED 5,000, whereas the price for an advanced eCommerce or a custom website may go as high as AED 50,000+. We provide you with pricing that is clear and designed specifically for your needs."
                    },
                    {
                        q: "Can You Develop a Custom WordPress Design for My Business Website?",
                        a: "Absolutely, our design team develops custom WordPress themes that are in line with your brand identity, thus resulting in unique layouts, responsive design, and SEO-friendly structure."
                    },
                    {
                        q: "Do You Offer WooCommerce Integration for eCommerce Stores?",
                        a: "Yes, we only deal in WooCommerce development that covers everything from setting up a store to integrating a payment gateway (such as PayTabs, Telur, and Stripe). We make it possible for you to have online stores that are not only secure but also attract conversions."
                    },
                    {
                        q: "How Long Does It Take to Develop a WordPress Website?",
                        a: "Delivery timing depends on the volume of the work. The making of an average corporate website would take 2–4 weeks, whereas the time for custom or eCommerce sites might be 6–8 weeks. We are committed to delivering on time without giving up quality."
                    },
                    {
                        q: "Will My Website Be Optimized for SEO and Mobile Devices?",
                        a: "Definitely, any website we construct is equipped with full responsiveness and is SEO-friendly with the best speed, mobile usability, and search visibility from the very first ‍‌‍‍‌‍‌‍‍‌day."
                    }
                ]}
            />

    </>
  )
}

export default page