import React from 'react'
import CommonBanner2 from '../../component/pages/common/CommonBanner2'
import imagebanner from '@/app/(frontend)/assets/images/e-commerce-web-development/banner.webp'
import CommonIntroduction from '../../component/pages/common/CommonIntroduction'
import imageintro1 from '@/app/(frontend)/assets/images/e-commerce-web-development/introimg-1.webp'
import imageintro2 from '@/app/(frontend)/assets/images/e-commerce-web-development/introimg-2.webp'
import CommonWhyMetter from '../../component/pages/common/CommonWhyMetter'
import imagewhymetter from '@/app/(frontend)/assets/images/e-commerce-web-development/whymetterbg.webp'
import CommonIndustries from '../../component/pages/common/CommonIndustries'
import imageService1 from '@/app/(frontend)/assets/images/e-commerce-web-development/Custom-Ecommerce-Website-Design.webp'
import imageService2 from '@/app/(frontend)/assets/images/e-commerce-web-development/Ecommerce-Website-Development.webp'
import imageService3 from '@/app/(frontend)/assets/images/e-commerce-web-development/Payment-Gateway-Integration.webp'
import imageService4 from '@/app/(frontend)/assets/images/e-commerce-web-development/Shopping-Cart-Checkout-Solutions.webp'
import imageService5 from '@/app/(frontend)/assets/images/e-commerce-web-development/Product-Catalog-Management.webp'
import imageService6 from '@/app/(frontend)/assets/images/e-commerce-web-development/Mobile-Commerce-Development.webp'
import imageService7 from '@/app/(frontend)/assets/images/e-commerce-web-development/Third-Party-Integrations.webp'
import imageService8 from '@/app/(frontend)/assets/images/e-commerce-web-development/Maintenance-Support.webp'
import CommonThreeCard from '../../component/pages/common/CommonThreeCard'
import imagecommon1 from '@/app/(frontend)/assets/images/e-commerce-web-development/responsive.png'
import imagecommon2 from '@/app/(frontend)/assets/images/e-commerce-web-development/Secure-Transactions.png'
import imagecommon3 from '@/app/(frontend)/assets/images/e-commerce-web-development/Multi-Language.png'
import imagecommon4 from '@/app/(frontend)/assets/images/e-commerce-web-development/Fast-Loading-Speed.png'
import imagecommon5 from '@/app/(frontend)/assets/images/e-commerce-web-development/Advanced-Search.png'
import imagecommon6 from '@/app/(frontend)/assets/images/e-commerce-web-development/AI-Driven.png'
import imagecommon7 from '@/app/(frontend)/assets/images/e-commerce-web-development/Analytics-Reporting-Dashboards.png'
import imagecommon8 from '@/app/(frontend)/assets/images/e-commerce-web-development/SEO-Friendly-Architecture.png'
import imagecommon9 from '@/app/(frontend)/assets/images/e-commerce-web-development/Scalable-Infrastructure.png'    
import CommonDevelopmentProcess from '../../component/pages/common/CommonDevelopmentProcess'
import CommonWhyWebsiteDevelopment from '../../assets/style/common/CommonWhyWebsiteDevelopment'
import imagewhydevelopment from '@/app/(frontend)/assets/images/e-commerce-web-development/Why-Website-Development.webp'
import CommonClientTestimonials from '../../component/pages/common/CommonClientTestimonials'
import imagetestimonial1 from '@/app/(frontend)/assets/images/testimonial/testimonial-1.webp'
import imagetestimonial2 from '@/app/(frontend)/assets/images/testimonial/testimonial-2.webp'
import imagetestimonial3 from '@/app/(frontend)/assets/images/testimonial/testimonial-3.webp'
import CommonFaqSection from '../../component/pages/common/CommonFaqSection'
import CommonServiceLocations from '../../component/pages/common/CommonServiceLocations'



const page = () => {
    return (
        <>
            <CommonBanner2
                bg={imagebanner}
                heding={"Ecommerce Website Development for <br/>Growing UAE Businesses"}
                subtitle={"Build scalable, user-friendly, and revenue-driven online stores with WD Agency."}

            />
            <CommonIntroduction
                text1={` <p>The online retail sector in the UAE is booming as recent reports indicate that online sales in the region will surpass $17 billion by 2025, and aided by a tech-savvy and convenience-driven population. The UAE has reached a mobile-first ecommerce economy, with 98% internet penetration and practically every adult possessing a smartphone. </p>
                    <p>The shopper experience in the UAE is more than simple online shopping—it demands smarter online shopping. Shoppers want fast-loading websites, secure methods of payment, and the option to choose different languages, currencies, and seamless product delivery. Companies that don’t provide these simple shopping experiences will quickly lose out to competitors offering these experiences. </p>
                    `}
                text2={`  <p>While solutions such as Shopify, WooCommerce, or Magento provide easy-to-manage ecommerce set up, at the end of the day, the vast majority of DIY stores don’t provide the customization, scalability, or security that a business really needs. Stores using templates may look reasonable, they rarely represent a brand and fail when it gets complicated - managing thousands of SKUs, logistics development, or more complex multi-currency payments, for example, really needs a custom ecommerce development solution. </p>
                <p>At WD Agency, we understand the unique needs of UAE businesses. From integrating local payment gateways to creating bilingual websites in Arabic and English, we build platforms designed for growth in one of the world’s most dynamic ecommerce landscapes.</p>
                    `}
                imageintro1={imageintro1}
                imageintro2={imageintro2}
            />
            <CommonWhyMetter
                imagewhymetter={imagewhymetter}
                heding={'Why Ecommerce Website Development Matters in UAE'}
                subheding={'The online retail sector in the UAE is booming as recent reports indicate that online sales in the region will surpass $17 billion by 2025, and aided by a tech-savvy and convenience-driven population. The UAE has reached a mobile-first ecommerce economy, with 98% internet penetration and practically every adult possessing a smartphone.'}
                lefttext={`  <p>The shopper experience in the UAE is more than simple online shopping—it demands smarter online shopping. Shoppers want fast-loading websites, secure methods of payment, and the option to choose different languages, currencies, and seamless product delivery. Companies that don’t provide these simple shopping experiences will quickly lose out to competitors offering these experiences.</p>
                        <p>At WD Agency, we understand the unique needs of UAE businesses. From integrating local payment gateways to creating bilingual websites in Arabic and English, we build platforms designed for growth in one of the world’s most dynamic ecommerce landscapes.</p>
                        `}
                righttext={`<p>While solutions such as Shopify, WooCommerce, or Magento provide easy-to-manage ecommerce set up, at the end of the day, the vast majority of DIY stores don’t provide the customization, scalability, or security that a business really needs. Stores using templates may look reasonable, they rarely represent a brand and fail when it gets complicated - managing thousands of SKUs, logistics development, or more complex multi-currency payments, for example, really needs a custom ecommerce development solution.</p>
                            `}
            />
            <CommonIndustries
                heding={'Our Ecommerce Website Development Services'}
                subheding='At WD Agency, we offer a complete range of ecommerce website development services, from initial design through to ongoing support, in the UAE, empowering your business with the full suite of ecommerce services you need to compete, connect, and grow online. We harness the best in modern technology, combined with in-depth market and industry-specific knowledge, to develop custom ecommerce solutions that deliver results you can measure. We do not just create websites; we build dedicated ecommerce websites that are conversion-driven to improve the customer experience, maximizing sales and growth as your business grows.'
                services={[
                    {
                        title: 'Custom Ecommerce Website Design',
                        desc: 'Lorem ipsum dolor sit amet consectetur. Sodales vulputate elementum non maecenas dui ipsum consequat porttitor. Imperdiet nullam varius eget adipiscing vel. ',
                        img: imageService1,
                        btnname: 'Learn more',
                        link: '#',
                    }, {
                        title: 'Ecommerce Website Development',
                        desc: 'Lorem ipsum dolor sit amet consectetur. Sodales vulputate elementum non maecenas dui ipsum consequat porttitor. Imperdiet nullam varius eget adipiscing vel. ',
                        img: imageService2,
                        btnname: 'Learn more',
                        link: '#',
                    },
                    {
                        title: 'Payment Gateway Integration',
                        desc: 'Lorem ipsum dolor sit amet consectetur. Sodales vulputate elementum non maecenas dui ipsum consequat porttitor. Imperdiet nullam varius eget adipiscing vel. ',
                        img: imageService3,
                        btnname: 'Learn more',
                        link: '#',
                    },
                    {
                        title: 'Shopping Cart & Checkout Solutions',
                        desc: 'Lorem ipsum dolor sit amet consectetur. Sodales vulputate elementum non maecenas dui ipsum consequat porttitor. Imperdiet nullam varius eget adipiscing vel. ',
                        img: imageService4,
                        btnname: 'Learn more',
                        link: '#',
                    },
                    {
                        title: 'Product Catalog Management',
                        desc: 'Lorem ipsum dolor sit amet consectetur. Sodales vulputate elementum non maecenas dui ipsum consequat porttitor. Imperdiet nullam varius eget adipiscing vel. ',
                        img: imageService5,
                        btnname: 'Learn more',
                        link: '#',
                    },
                    {
                        title: 'Mobile Commerce (M-Commerce) Development',
                        desc: 'Lorem ipsum dolor sit amet consectetur. Sodales vulputate elementum non maecenas dui ipsum consequat porttitor. Imperdiet nullam varius eget adipiscing vel.  ',
                        img: imageService6,
                        btnname: 'Learn more',
                        link: '#',

                    },
                    {
                        title: 'Third-Party Integrations',
                        desc: 'Lorem ipsum dolor sit amet consectetur. Sodales vulputate elementum non maecenas dui ipsum consequat porttitor. Imperdiet nullam varius eget adipiscing vel. ',
                        img: imageService7,
                        btnname: 'Learn more',
                        link: '#',
                    },
                    {
                        title: 'Maintenance & Support',
                        desc: 'Lorem ipsum dolor sit amet consectetur. Sodales vulputate elementum non maecenas dui ipsum consequat porttitor. Imperdiet nullam varius eget adipiscing vel. ',
                        img: imageService8,
                        btnname: 'Learn more',
                        link: '#',
                    }


                ]}
            />
            <CommonThreeCard
                text1={'Features of a Successful Ecommerce Website'}
                text2={"Creating a beautifully designed site is just the start. To be truly successful in the competitive UAE ecommerce market, your website must be more than just pretty - it has to be fast, secure, easy to use, and conversion-focused. At WD Agency, we implement the features that will define your successful, modern ecommerce website in the UAE so your business will draw in visitors and convert them to customers."}
                boxdata={[
                    { id: 1, img: imagecommon1, title: 'Attractive & Responsive Design', desc: 'Every device your customer uses should be stunning. We design layouts that are responsive to their desktops, tablets, and smartphones so they have an intuitive feel across the board.' },
                    { id: 2, img: imagecommon2, title: 'Secure Transactions', desc: 'Trust is everything in ecommerce. All of our websites are secured with SSL encryption, PCI compliant, and secure payment gateways to assure buyers their data and payment are safe.' },
                    { id: 3, img: imagecommon3, title: 'Multi-Language & Multi-Currency Support', desc: 'In a country as diverse as the UAE, this is crucial. We integrate multi-language/multi-currency features to your store to make shopping easy for locals, expats, and/or international shoppers alike.' },
                    { id: 4, img: imagecommon4, title: 'Fast Loading Speed', desc: 'Speed is directly linked to sales. Even a few seconds of delay can lead to drop-offs. Our websites are performance-optimized to load in seconds increasing customers experiences and SEO results.' },
                    { id: 5, img: imagecommon5, title: 'Advanced Search & Filtering Options', desc: 'Shoppers expect convenience. Through advanced search and smart filtering options, customers can find products quickly, increasing satisfaction and conversion rates.' },
                    { id: 6, img: imagecommon6, title: 'Personalization & AI-Driven Recommendations', desc: "We will provide AI-driven recommendations based on customers' browsing and purchase history, keeping customers engaged and coming back to purchase again—essentially turning your website into a personal shopping experience." },
                    { id: 7, img: imagecommon7, title: 'Analytics & Reporting Dashboards', desc: "We can implement robust reporting tools for you to monitor your sales and customers’ online behaviors, manage inventory levels and you'll have information to help you make data-backed decisions." },
                    { id: 8, img: imagecommon8, title: 'SEO-Friendly Architecture', desc: 'As you will know, your ecommerce website is only truly effective when it has structured URLs, optimized meta data and clean coding. These will all make a positive contribution to Google, giving your ecommerce website a competitive edge in both visibility and organic traffic.' },
                    { id: 9, img: imagecommon9, title: 'Scalable Infrastructure & Omnichannel Experience', desc: "Lorem ipsum dolor sit amet consectetur. Nisl ornare vitae eleifend suspendisse risus laoreet aliquet amet quis. Tortor ullamcorper sagittis libero aenean vitae diam congue. At mollis mauris elementum enim urna mauris ac gravida vulputate. Justo neque in non turpis ut." },
                ]}

            />
            <CommonDevelopmentProcess
                heding={'Our Ecommerce Development Process'}
                subheding={'At WD Agency, we use a tried-and-true eCommerce website development process to deliver every project on time, on budget, and to consistently measure success. Our formula combines creativity, technical detail, and market intelligence to give UAE businesses a competitive edge.'}
                processData={[
                    {
                        id: "01",
                        title: "Consultation & Strategy",
                        description: `We will start by taking a deep dive consultation to learn about your goals, audience, and competitive landscape. This phase allows us to align the project to your business goals, industry trends, and customer expectations. `,
                    },
                    {
                        id: "02",
                        title: "Design & Architecture",
                        description: `Our experts map out the website’s structure, UX flow, and customer journey. We create wireframes and prototypes that visualize how users will interact with your store before moving into design and coding. `,
                    },
                    {
                        id: "03",
                        title: "Design & Development",
                        description: `Next, we create a visually engaging interface supported by a strong, secure, and scalable back end. Our development team works to ensure functionality is consistent across devices. Mobile-first design and loading speed are always prioritized.`,
                    },
                    {
                        id: "04",
                        title: "Integration",
                        description: `We connect your ecommerce site to payment gateways, logistics providers, ERP/CRM tools, and third-party connecting systems. This will ensure your business runs smoothly from syncing your inventory to tracking orders.`,
                    },
                    {
                        id: "05",
                        title: "Testing & QA",
                        description: `Prior to launch, the WD Team will conduct meticulous performance, usability and security testing. We will identify bugs and browser compatibility, while also ensuring a fast-loading site for the best user experience.`,
                    },
                    {
                        id: "06",
                        title: "Launch & Optimization",
                        description: `Your website goes live only after SEO audits, analytics setup, and speed optimization. We also implement conversion tracking tools to measure performance from day one.`,
                    },
                    {
                        id: "07",
                        title: "Support & Maintenance",
                        description: `Our partnership doesn’t end at launch. We offer ongoing monitoring, updates, and feature enhancements to ensure your website is operating efficiently and dynamic enough to adapt to market changes.`,
                    }

                    ]} />
                    <CommonWhyWebsiteDevelopment
                    heding={"Why Choose WD Agency for Ecommerce Website Development"}
                    subheding={"The right partner in ecommerce website development in UAE can be the difference between a basic online store and a powerful, income-generating digital experience. WD Agency combines technical expertise, knowledge of the UAE market, and a results-oriented approach that ensures your ecommerce business will launch effectively and develop long-term."}
                    lefttext={`<p>Our company has years of demonstrated experience developing ecommerce solutions to businesses regardless of size, from startups to multinational corporations, and across an array of industries from fashion and electronics, to food and real estate. Our knowledge and understanding of UAE-specific consumer behavior (mobile-first shopping, multilingual preferences, and confidence in secure payments methods) enable us to build ecommerce websites with customer needs and expectations in mind.</p>
                                <p>We have in-depth experience on numerous platforms such as Shopify, Magento, WooCommerce, and bespoke ecommerce solutions to recommend and deliver the ideal platform for your company’s needs. We are different from an agency that may solely focus on design; Our priority is maximizing conversion rates. Each and every detail, click or feature, from navigation through checkout, is created to increase sales conversion and minimize sales drop off. </p>
                                <p>Transparency is a key component of our process. We will share straightforward pricing, clear timelines and assign you a project manager to provide ongoing communication. This way, you will always be updated on the work on your website, and you can focus on scaling your business while we take care of the technical side.</p>
                            `}
                    rightimage={imagewhydevelopment}

                    />
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
                                q: "Why Should I Choose WD Agency for Ecommerce Website Development?",
                                a: "The right partner in ecommerce website development in UAE can be the difference between a basic online store and a powerful, income-generating digital experience. WD Agency combines technical expertise, knowledge of the UAE market, and a results-oriented approach that ensures your ecommerce business will launch effectively and develop long-term."
                            },
                            {
                                q: "What Industries Do You Design Websites for in Ecommerce?",
                                a: "Since 2014, we have served a diverse range of industries, including retail, healthcare, education, hospitality, e-commerce, professional services, and more, delivering tailored web development solutions."
                            },
                            {
                                q: "Do You Provide Custom Website Designs or Use Templates?",
                                a: "Our focus is on custom website designs that reflect your unique brand identity, but we also offer template-based solutions for businesses seeking faster turnaround and budget-friendly options."
                            },
                            {
                                q: "How Much Does Website Development in UAE Cost?",
                                a: "The cost depends on the website type, design complexity, features, and timeline. WD Agency offers flexible packages to suit various business needs and budgets. Typically, website development in UAE starts from AED 5,000, with prices varying based on customization and functionality."
                            }]}
                        />

        </>
    )
}

export default page