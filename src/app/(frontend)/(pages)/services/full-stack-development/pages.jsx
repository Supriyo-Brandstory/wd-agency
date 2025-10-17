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
import imageService1 from '@/app/(frontend)/assets/images/e-commerce-web-development/Custom-Ecommerce-Website-Design.webp'
import imageService2 from '@/app/(frontend)/assets/images/e-commerce-web-development/Ecommerce-Website-Development.webp'
import imageService3 from '@/app/(frontend)/assets/images/e-commerce-web-development/Payment-Gateway-Integration.webp'
import imageService4 from '@/app/(frontend)/assets/images/e-commerce-web-development/Shopping-Cart-Checkout-Solutions.webp'
import imageService5 from '@/app/(frontend)/assets/images/e-commerce-web-development/Product-Catalog-Management.webp'
import imageService6 from '@/app/(frontend)/assets/images/e-commerce-web-development/Mobile-Commerce-Development.webp'
import imageService7 from '@/app/(frontend)/assets/images/e-commerce-web-development/Third-Party-Integrations.webp'
import imageService8 from '@/app/(frontend)/assets/images/e-commerce-web-development/Maintenance-Support.webp'
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
                heding={"Portfolio & Personal Branding Website</br> Development in Dubai, UAE"}
                subtitle={"Showcase your work, achievements, and personality with a professionally</br> designed portfolio and personal branding websites in Dubai tailored for success."}

            />
            <CommonIntroduction
                heding={'Portfolio Website Development Dubai, UAE'}
                text1={` <p>In today’s digital-world, your online presence defines your professional credibility. Whether you are a creative, a business person, or an expert in the field, your personal website is a robust extension of your identity and purpose. Unlike social media, where your identity is restricted by algorithms and design limitations, a personal website is your very own, where you can have complete control over everything- from layout and theme to messaging and customer service.</p>
                    <p>Gone are the days when a personal branding website just showcased a CV or a gallery. In the modern world, this type of website tells the user's story in both effective and natural ways. It not only generates loyalty but also attracts the right opportunities and places you as a leader in your field.</p>
                    `}
                text2={`  <p>The professionals all over the UAE are swiftly turning to portfolio and personal websites in order to grab the attention of potential clients in highly competitive industries. The professionals in the fields of consulting, photography, as well as the founders and influencers, everybody is longing for a stage that unveils their personal features and the area they specialize in. It is becoming more and more popular to engage with others online, having your own platform makes you more visible, relevant, and memorable in a positive way.</p>
                <p>WD Agency specializes in creating narrative-driven, eye-catching, and interactive personal branding websites. Our goal is to help you make a memorable digital impression, one that not only showcases your work but amplifies your personal narrative to the world.</p>
                    `}
                imageintro1={imageintro1}
                imageintro2={imageintro2}
            />
            <CommonSetsUs
                text1={'Transforming Digital Presence in Abu Dhabi'}
                text2={'Looking for a website development company in Abu Dhabi that truly understands your business needs? WD Agency brings over a decade of experience in designing and developing websites that not only look stunning but also perform seamlessly. <br><br>We specialize in crafting intuitive websites that combine innovative design, advanced technology, and smooth functionality. Every website we build is crafted to strengthen your brand, engage your audience, and convert visitors into loyal customers- helping your business thrive in Abu Dhabi’s competitive digital landscape.'}
                bg={setusimagesabudhabi}
            />
            <CommonThreeCard
                text1={'Why Choose WD Agency- Local Expertise, Global Engineering'}
                text2={"Many agencies build websites, few combine a local business with modern engineering. Here’s what makes WD Agency the preferred partner for businesses in Abu Dhabi:"}
                boxdata={[
                    { id: 1, img: commonimage1, title: 'Local Market Mastery', desc: 'We understand UAE cultural expectations, Arabic language nuances, and business etiquette with worldwide UX and accessibility standards.' },
                    { id: 2, img: commonimage2, title: 'End-to-end Delivery', desc: 'Strategy, UX/UI design, development, hosting, security, SEO, analytics, and continuous support- all managed by one cross-functional team.' },
                    { id: 3, img: commonimage3, title: 'Future-ready Engineering', desc: 'We create flexible architectures, headless CMS alternatives, and progressive web app techniques that safeguard your investment.' },
                    { id: 4, img: commonimage4, title: 'Conversion-first Approach', desc: 'We don’t just make sites look attractive- we design quantifiable funnels with analytics, A/B testing, and iterative leveraging.' },
                    { id: 5, img: commonimage5, title: '24/7 Free Support', desc: ' Local SLA-based monitoring, security patching, and performance tuning so your site is always available.' },
                    { id: 6, img: commonimage6, title: 'Diverse Experience', desc: 'We partner with startups, SMEs, corporations and government bodies- tailoring our approach to fit budget, regulatory needs and growth ambitions.' },
                ]}
            />
            <CommonIndustries
                heding={'Our Portfolio & Personal Branding Website Services'}
                subheding='At WD Agency, we design digital identities that speak for you. Our portfolio and personal branding website services are crafted to bring your story to life through design, content, and technology, creating an immersive experience that reflects your individuality and professional journey.'
                services={[
                    {
                        title: 'Custom Website Design',
                        desc: 'We create tailor-made layouts that mirror your personality, profession, and objectives. Each design reflects who you are and what makes your work unique.',
                        img: imageService1,
                        btnname: 'Contact Us',
                        link: '/contact-us',
                    }, {
                        title: 'Creative Showcases & Galleries',
                        desc: 'Visually engaging galleries are suitable for photographers, designers, authors, and artists, allowing visitors to experience and admire their creative work.',
                        img: imageService2,
                        btnname: 'Contact Us',
                        link: '/contact-us',
                    },
                    {
                        title: 'Interactive Resume Websites',
                        desc: 'Conventional resume is static and non-interactive, however, with our attention-grabbing interactive resume-style websites, the clients’ stories, and the achievements along with the awards and testimonials.',
                        img: imageService3,
                        btnname: 'Contact Us',
                        link: '/contact-us',
                    },
                    {
                        title: 'Video & Media Integrations',
                        desc: 'Show the speaker sessions, interviews, performances, or product demos to attract your audience and to show your message powerfully with the help of visuals.',
                        img: imageService4,
                        btnname: 'Contact Us',
                        link: '/contact-us',
                    },
                    {
                        title: 'Brand Identity Development',
                        desc: 'We take the initiative in the process of building your brand from the colors, fonts, and even the tone of the message, making sure that every design element perfectly complements your voice and professional image.',
                        img: imageService5,
                        btnname: 'Contact Us',
                        link: '/contact-us',
                    },
                    {
                        title: 'Social Media Integrations',
                        desc: 'We integrate your social media accounts effortlessly, which will help you increase the number of followers, show the live views, and extend your online presence on other networks.',
                        img: imageService6,
                        btnname: 'Contact Us',
                        link: '/contact-us',

                    },
                    {
                        title: 'Freelancer Portfolio Tools',
                        desc: 'Reveal the journey of your projects, go in-depth in your case studies, and make your resume or credentials available for download to build up the trust of others towards you.',
                        img: imageService7,
                        btnname: 'Contact Us',
                        link: '/contact-us',
                    },
                    {
                        title: 'Mobile Friendly Design',
                        desc: 'When using our responsive design approach, your site will look and work perfectly on all devices and will give the visitor the same experience no matter where or when they access it.',
                        img: imageService8,
                        btnname: 'Contact Us',
                        link: '/contact-us',
                    }


                ]}
            />
            <CommonAboutPage2
                text1="Why a World-class Website Matters in Abu Dhabi"
                text2={`
                            <p class="mb-20">
                            Abu Dhabi is an economic hub where professionalism, sophistication, and worldwide standards are anticipated. We create websites with global standard with a fusion of local touch keeping up with 5 golden rules in mind:
                            </p>
                            <ul class="ml-40">
                            <li>Builds Immediate Credibility- Professional design signals a professional company.</li>
                            <li>Supports Conversions- Transparent journeys and calls-to-action convert visitors into leads or customers.</li>
                            <li>Offers 24/7 Accessibility- Your business can be explored and communicated with at any time.</li>
                            <li>Increases Reach- Multilingual, SEO-ready sites stretch to local, regional, and worldwide audiences.</li>
                            <li>Aligns with Vision 2030- The emirate’s digitisation targets digitally mature reward organisations.</li>
                            </ul>
                            <p>
                            If you want to attract higher-value clients, reduce friction in service delivery, or grow online revenue, your website is the single most powerful lever.
                            </p>
                    `}
                img={Aboutimg}
            />
              <CommonTechnologyStack
  heding={"Our Website Development Technology Stack"}
  subheding={"We possess deep expertise in all frontend and backend website development technologies."}
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
                heding={'Our Website Development Process'}
                subheding={'Every personal branding journey is unique, and so is our process. WD Agency, we apply the mix of creativity, technology, and strategy to forge a website that shows your uniqueness and delivers your worth exactly.'}
                processData={[
                    {
                        id: "01",
                        title: "Discovery & Consultation",
                        description: `Based on information about your goals, story, profession, and audience expectations, we define the creative direction, and tone for your brand.`,
                    },
                    {
                        id: "02",
                        title: "Website Artchitecture",
                        description: `We take your achievements, case studies, and highlights and shape them into a convincing narrative that attracts visitors while mirroring your professional values.`,
                    },
                    {
                        id: "03",
                        title: "Design & Development",
                        description: `We build the identity of your business with the help of the latest technology and our visually captivating and mobile-first designs ensure the best user experience and functionality.`,
                    },
                    {
                        id: "04",
                        title: "Integration",
                        description: `Social media APIs, videos, and portfolio tools are some of the elements that we integrate to boost your online presence and engagement.`,
                    },
                    {
                        id: "05",
                        title: "Testing & QA",
                        description: `Prior to launch, the WD Agency team will conduct meticulous performance, usability and security testing. We will identify bugs and browser compatibility, while also ensuring a fast-loading site for the best user experience.`,
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
                    subheding={"Picking the right partner to work on your personal website is undoubtedly an essential decision. WD Agency is where we integrate imagination, strategies, and technology into the layouts that are not only your own but also work at a high level. Our ambition is not simply to construct a website, but to forge a digital journey that is your signature and extends your reach."}
                    lefttext={`<p>We don't just build tech-savvy websites but also, and most importantly, the visual storytelling, the user experience, and the lasting impact of your site. Every feature of your website represents you authentically, from the character of the voice to the visual design of it, everything is tweaked carefully to fit you. In this manner, our expertise includes consultants, artists, public speakers, authors, and entrepreneurs, which enables us to draw from a wide pool of creative thoughts for every new idea.</p>
                                <p>From portfolio integration and media showcases to SEO-driven architecture and responsive design, every detail is optimized to elevate your visibility and influence online. We don’t just help you create a personal brand; we help you build a digital legacy that continues to grow with you.</p>
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
                                q: "How Much Does a Personal Branding Website Cost?",
                                a: "The cost of pricing is largely influenced by your layout, desired features, and objectives. We adjust according to the client requirements and budgets. So, if you are a freelancer or a professional who wants to create a top-notch interactive website, we will come up with the solutions that are most compatible with your needs. The pricing may also be dependent on the number of pages, technology, and project complexity (AED 5,000 to AED 30,000)."
                            },
                            {
                                q: "Can You Create a Design That Reflects My Personal Style?",
                                a: "Yes, each of our web designs is personalized to suit not only your individual characteristics and profession but also the expectations of your audience. The colors, fonts, content style - you name it, and it has been carefully thought of to be a very true representation of you and your business. We achieve this through our innovative process, which assures that the end product is essentially your uniquely branded identity."
                            },
                            {
                                q: "Do You Build Resume-style Portfolio Websites?",
                                a: "Yes, one of the things that our team does really well is that we create engaging resume websites, which, along with the details about the work history of the person, state that person's accomplishments and include reviews. Such sites are applicable not only to people who are currently looking for new positions but also to consultants and freelancers as a platform for their reliable presence in the online market."
                            },
                            {
                                q: "Will My Site be Optimized for Google Search?",
                                a: "Every website we create is not only friendly to search engines but also built in such a way that it can be found easily. So we optimize, among other things, the titles and meta tags, and also speed up your site's loading rate, so that you may rank better. Our SEO strategy is like a spotlight on your personal brand that catches the right people at the right time."
                            },
                            {
                                q: "Can I Integrate Videos, Blogs, or Social Media Feeds?",
                                a: "Yes, what we offer is the integration of multimedia as well as all social media platforms, so that more users would be able to interact with you. It does not matter whether you want to embed a YouTube video, show the latest pictures from your Instagram account, or provide easy access to your blog, all these things can be done using your website, which we make dynamic and interactive."
                            },
                            {
                                q: "Do You Provide Maintenance and Updates?",
                                a: "Yes, we also have special plans to provide customers with the support that they need to keep their sites up to date and secure. We do all the hard work for you, such as backing up your site, updating plugins, and checking the performance of your site while you are busy doing your thing."
                            },
                            {
                                q: "How Long Does It Take to Build a Portfolio Website?",
                                a: "Usually, it is done within 3 to 6 weeks, the size of the project and the degree of customization have a decisive role in determining the duration. If one wants to have a simplistic design, they can expect the process to be over in a short time, but if they seek to have a feature-rich or multi-page website, there is going to be more work for them to develop and test it until they find the desired version to be launched."
                            }]}
                        />

        </>

    )
}

export default page