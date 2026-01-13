import React from "react";
import CommonBanner2 from "../../component/pages/common/CommonBanner2";
import imagebanner from "@/app/(frontend)/assets/images/portfolio-web-development/main-banner-portfolio-website.webp";
import CommonIntroduction from "../../component/pages/common/CommonIntroduction";
import imageintro1 from "@/app/(frontend)/assets/images/portfolio-web-development/portfolio-website-design.webp";
import imageintro2 from "@/app/(frontend)/assets/images/portfolio-web-development/portfolio-web-design-agency.webp";
import CommonWhyMetter from "../../component/pages/common/CommonWhyMetter";
import imagewhymetter from "@/app/(frontend)/assets/images/portfolio-web-development/portfolio-website-sample.webp";
import CommonIndustries from "../../component/pages/common/CommonIndustries";
import imageService1 from "@/app/(frontend)/assets/images/portfolio-web-development/custom-web-ux-design.webp";
import imageService2 from "@/app/(frontend)/assets/images/portfolio-web-development/showcase-galleries.webp";
import imageService3 from "@/app/(frontend)/assets/images/portfolio-web-development/resume-websites.webp";
import imageService4 from "@/app/(frontend)/assets/images/portfolio-web-development/video-media-integration.webp";
import imageService5 from "@/app/(frontend)/assets/images/portfolio-web-development/brand-identity-development.webp";
import imageService6 from "@/app/(frontend)/assets/images/portfolio-web-development/social-media-integration.webp";
import imageService7 from "@/app/(frontend)/assets/images/portfolio-web-development/freelance-portfolio-tools.webp";
import imageService8 from "@/app/(frontend)/assets/images/portfolio-web-development/mobile-friendly-websites.webp";
import CommonThreeCard from "../../component/pages/common/CommonThreeCard";
import imagecommon1 from "@/app/(frontend)/assets/images/e-commerce-web-development/responsive.png";
import imagecommon2 from "@/app/(frontend)/assets/images/e-commerce-web-development/Secure-Transactions.png";
import imagecommon3 from "@/app/(frontend)/assets/images/e-commerce-web-development/Multi-Language.png";
import imagecommon4 from "@/app/(frontend)/assets/images/e-commerce-web-development/Fast-Loading-Speed.png";
import imagecommon6 from "@/app/(frontend)/assets/images/e-commerce-web-development/AI-Driven.png";
import imagecommon8 from "@/app/(frontend)/assets/images/e-commerce-web-development/SEO-Friendly-Architecture.png";
import CommonDevelopmentProcess from "../../component/pages/common/CommonDevelopmentProcess";
import CommonWhyWebsiteDevelopment from "../../assets/style/common/CommonWhyWebsiteDevelopment";
import imagewhydevelopment from "@/app/(frontend)/assets/images/portfolio-web-development/why-choose-wd-agency.webp";
import CommonClientTestimonials from "../../component/pages/common/CommonClientTestimonials";
import imagetestimonial1 from "@/app/(frontend)/assets/images/testimonial/testimonial-1.webp";
import imagetestimonial2 from "@/app/(frontend)/assets/images/testimonial/testimonial-2.webp";
import imagetestimonial3 from "@/app/(frontend)/assets/images/testimonial/testimonial-3.webp";
import CommonFaqSection from "../../component/pages/common/CommonFaqSection";
import CommonServiceLocations from "../../component/pages/common/CommonServiceLocations";
import DevelopmentServices from "../../component/pages/home/DevelopmentServices";
import Team from "../../component/pages/about/Team";

import Portfolioimage1 from "@/app/(frontend)/assets/images/protfolio/portfolio-1.webp";
import Portfolioimage2 from "@/app/(frontend)/assets/images/protfolio/portfolio-2.webp";
import Portfolioimage3 from "@/app/(frontend)/assets/images/protfolio/portfolio-3.webp";
import Portfolioimage4 from "@/app/(frontend)/assets/images/protfolio/portfolio-4.webp";
import Portfolioimage5 from "@/app/(frontend)/assets/images/protfolio/portfolio-5.webp";
import Portfolioimage6 from "@/app/(frontend)/assets/images/protfolio/portfolio-6.webp";
import RealEstatePortfolio from "../../component/pages/common/RealEstatePortfolio";

const page = () => {
  return (
    <>
      <CommonBanner2
        bg={imagebanner}
        heding={
          "Portfolio & Personal Branding Website</br> Development in Dubai, UAE"
        }
        subtitle={
          "Showcase your work, achievements, and personality with a professionally</br> designed portfolio and personal branding websites in Dubai tailored for success."
        }
      />
      <CommonIntroduction
        heding={"Portfolio Website Development Dubai, UAE"}
        text1={` <p>In today’s digital-world, your online presence defines your professional credibility. Whether you are a creative, a business person, or an expert in the field, your personal website is a robust extension of your identity and purpose. Unlike social media, where your identity is restricted by algorithms and design limitations, a personal website is your very own, where you can have complete control over everything- from layout and theme to messaging and customer service.</p>
                    <p>Gone are the days when a personal branding website just showcased a CV or a gallery. In the modern world, this type of website tells the user's story in both effective and natural ways. It not only generates loyalty but also attracts the right opportunities and places you as a leader in your field.</p>
                    `}
        text2={`  <p>The professionals all over the UAE are swiftly turning to portfolio and personal websites in order to grab the attention of potential clients in highly competitive industries. The professionals in the fields of consulting, photography, as well as the founders and influencers, everybody is longing for a stage that unveils their personal features and the area they specialize in. It is becoming more and more popular to engage with others online, having your own platform makes you more visible, relevant, and memorable in a positive way.</p>
                <p><a href='/'>Website Development Agency</a> specializes in creating eye-catching and interactive personal branding websites. Our goal is to help you make a memorable digital impression, one that not only showcases your work but amplifies your personal narrative to the world.</p>
                    `}
        imageintro1={imageintro1}
        imageintro2={imageintro2}
      />

      <CommonWhyMetter
        imagewhymetter={imagewhymetter}
        heding={"Why Your Portfolio Websites Matters"}
        subheding={
          "Your website is indeed your first impression, sometimes even before your audience meets you face-to-face. Whether your visitor is a potential client, employer, or collaborator, your website is just like your digital handshake."
        }
        lefttext={`  <p>In this highly interconnected world, people have stopped buying products or services and started believing in people and their stories. You become the thought leader who forges emotional links and builds authority within your niche, by showing your path, field of knowledge, and sharing your thoughts.</p>
                        <p>Carefully designed portfolio websites are also a stepping stone to collaborations, networking, and getting paid to speak in public. It is a way for visitors to effortlessly speak about your work, get in touch with you, or schedule your events, all on one platform. Besides visibility, it serves as a seal of your consistency and reliability, showing that you are passionate about your brand.</p>
                        `}
        righttext={`<p>Website Development Agency boasts of a mobile-first approach, and we make sure that your online portfolio is flawless on any and all mobile devices. Whether someone’s discovering you through their phone or laptop, your personal brand remains consistent, powerful, and polished, leaving a lasting impression that drives real opportunities.</p>
                            `}
      />
      <RealEstatePortfolio
        heading="Real Estate Website Design & Development Portfolio"
        description="Our portfolio showcases a diverse range of high-performance real estate solutions, from luxury developer portals to high-converting campaign landing pages in Dubai & UAE."
        portfolioData={[
          {
            title: "Abu Alnaga Development",
            subtitle: "Real Estate Developer",
            image: Portfolioimage1,
            link: "/contact-us",
            price: "AED 20,000",
          },
          {
            title: "Offplan Project Landing Page 1",
            subtitle: "Campaign Landing Page",
            image: Portfolioimage2,
            link: "/contact-us",
            price: "AED 8,000",
          },
          {
            title: "Offplan Project Landing Page 2",
            subtitle: "Offplan Project Landing Page",
            image: Portfolioimage3,
            link: "/contact-us",
            price: "AED 8,000",
          },
          {
            title: "Val By Kasco",
            subtitle: "Ad campaign landing page",
            image: Portfolioimage4,
            link: "/contact-us",
            price: "AED 6,000",
          },
          {
            title: "Mansion Edition Real Estate",
            subtitle: "Luxury Real Estate - Offplan Projects",
            image: Portfolioimage5,
            link: "/contact-us",
            price: "AED 25,000",
          },
          {
            title: "Sankari Properties",
            subtitle: "Real Estate Developer Website",
            image: Portfolioimage6,
            link: "/contact-us",
            price: "AED 22,000",
          },
        ]}
      />
      <CommonIndustries
        heding={"Our Portfolio & Personal Branding Website Services"}
        subheding="At Website Development Agency, we design digital identities that speak for you. Our portfolio and personal branding website services are crafted to bring your story to life through design, content, and technology, creating an immersive experience that reflects your individuality and professional journey."
        services={[
          {
            title: "Custom Website Design",
            desc: "We create tailor-made layouts that mirror your personality, profession, and objectives. Each design reflects who you are and what makes your work unique.",
            img: imageService1,
            btnname: "Contact Us",
            link: "/contact-us",
          },
          {
            title: "Creative Showcases & Galleries",
            desc: "Visually engaging galleries are suitable for photographers, designers, authors, and artists, allowing visitors to experience and admire their creative work.",
            img: imageService2,
            btnname: "Contact Us",
            link: "/contact-us",
          },
          {
            title: "Interactive Resume Websites",
            desc: "Conventional resume is static and non-interactive, however, with our attention-grabbing interactive resume-style websites, the clients’ stories, and the achievements along with the awards and testimonials.",
            img: imageService3,
            btnname: "Contact Us",
            link: "/contact-us",
          },
          {
            title: "Video & Media Integrations",
            desc: "Show the speaker sessions, interviews, performances, or product demos to attract your audience and to show your message powerfully with the help of visuals.",
            img: imageService4,
            btnname: "Contact Us",
            link: "/contact-us",
          },
          {
            title: "Brand Identity Development",
            desc: "We take the initiative in the process of building your brand from the colors, fonts, and even the tone of the message, making sure that every design element perfectly complements your voice and professional image.",
            img: imageService5,
            btnname: "Contact Us",
            link: "/contact-us",
          },
          {
            title: "Social Media Integrations",
            desc: "We integrate your social media accounts effortlessly, which will help you increase the number of followers, show the live views, and extend your online presence on other networks.",
            img: imageService6,
            btnname: "Contact Us",
            link: "/contact-us",
          },
          {
            title: "Freelancer Portfolio Tools",
            desc: "Reveal the journey of your projects, go in-depth in your case studies, and make your resume or credentials available for download to build up the trust of others towards you.",
            img: imageService7,
            btnname: "Contact Us",
            link: "/contact-us",
          },
          {
            title: "Mobile Friendly Design",
            desc: "When using our responsive design approach, your site will look and work perfectly on all devices and will give the visitor the same experience no matter where or when they access it.",
            img: imageService8,
            btnname: "Contact Us",
            link: "/contact-us",
          },
        ]}
      />
      <CommonThreeCard
        text1={"Key Features of a Strong Portfolio Website"}
        text2={
          "Creating a beautifully designed site is just the start. To be truly successful in the competitive UAE ecommerce market, your website must be more than just pretty - it has to be fast, secure, easy to use, and conversion-focused. At Website Development Agency, we implement the features that will define your successful, modern ecommerce website in the UAE so your business will draw in visitors and convert them to customers."
        }
        boxdata={[
          {
            id: 1,
            img: imagecommon1,
            title: "Modern, Engaging Design",
            desc: "Crafted with simplicity and sophistication, your website will feature a clean, contemporary design that highlights your individuality and creativity, keeping the spotlight on you and your work.",
          },
          {
            id: 2,
            img: imagecommon3,
            title: "Compelling Personal Storytelling",
            desc: "An engaging “About Me” section that captures your professional journey, values, and vision, helping audiences connect with your story on a deeper, more personal level.",
          },
          {
            id: 3,
            img: imagecommon2,
            title: "Purpose-Driven Calls-to-Action",
            desc: "Strategically placed CTAs guide visitors to take meaningful actions, from collaboration inquiries to project discussions, turning interest into real opportunities.",
          },
          {
            id: 4,
            img: imagecommon4,
            title: "Fast Loading Speed",
            desc: "Speed is directly linked to sales. Even a few seconds of delay can lead to drop-offs. Our websites are performance-optimized to load in seconds increasing customers experiences and SEO results.",
          },
          {
            id: 5,
            img: imagecommon6,
            title: "Thought Leadership",
            desc: "A dedicated blog or article space allows you to share insights, expertise, and opinions, positioning you as a credible voice and thought leader in your field.",
          },
          {
            id: 6,
            img: imagecommon8,
            title: "Optimized for Search and Visibility",
            desc: "Built with SEO best practices, your site will be structured for higher visibility on search engines, ensuring your portfolio reaches the right audience effortlessly.",
          },
        ]}
      />
      <DevelopmentServices />
      <CommonDevelopmentProcess
        heding={"Our Website Development Process"}
        subheding={
          "Every personal branding journey is unique, and so is our process. Website Development Agency, we apply the mix of creativity, technology, and strategy to forge a website that shows your uniqueness and delivers your worth exactly."
        }
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
            description: `Prior to launch, the Website Development Agency team will conduct meticulous performance, usability and security testing. We will identify bugs and browser compatibility, while also ensuring a fast-loading site for the best user experience.`,
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
          },
        ]}
      />
      <CommonWhyWebsiteDevelopment
        heding={
          "Why Choose Website Development Agency for Ecommerce Website Development"
        }
        subheding={
          "Picking the right partner to work on your personal website is undoubtedly an essential decision. Website Development Agency is where we integrate imagination, strategies, and technology into the layouts that are not only your own but also work at a high level. Our ambition is not simply to construct a website, but to forge a digital journey that is your signature and extends your reach."
        }
        lefttext={`<p>We don't just build tech-savvy websites but also, and most importantly, the visual storytelling, the user experience, and the lasting impact of your site. Every feature of your website represents you authentically, from the character of the voice to the visual design of it, everything is tweaked carefully to fit you. In this manner, our expertise includes consultants, artists, public speakers, authors, and entrepreneurs, which enables us to draw from a wide pool of creative thoughts for every new idea.</p>
                                <p>From portfolio integration and media showcases to SEO-driven architecture and responsive design, every detail is optimized to elevate your visibility and influence online. We don’t just help you create a personal brand; we help you build a digital legacy that continues to grow with you.</p>
                                <p>Transparency is a key component of our process. We will share straightforward pricing, clear timelines and assign you a project manager to provide ongoing communication. This way, you will always be updated on the work on your website, and you can focus on scaling your business while we take care of the technical side.</p>
                            `}
        rightimage={imagewhydevelopment}
      />
      <Team />
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
          },
        ]}
      />
      <CommonServiceLocations />
      <CommonFaqSection
        faqs={[
          {
            q: "How Much Does a Personal Branding Website Cost?",
            a: "The cost of pricing is largely influenced by your layout, desired features, and objectives. We adjust according to the client requirements and budgets. So, if you are a freelancer or a professional who wants to create a top-notch interactive website, we will come up with the solutions that are most compatible with your needs. The pricing may also be dependent on the number of pages, technology, and project complexity (AED 5,000 to AED 30,000).",
          },
          {
            q: "Can You Create a Design That Reflects My Personal Style?",
            a: "Yes, each of our web designs is personalized to suit not only your individual characteristics and profession but also the expectations of your audience. The colors, fonts, content style - you name it, and it has been carefully thought of to be a very true representation of you and your business. We achieve this through our innovative process, which assures that the end product is essentially your uniquely branded identity.",
          },
          {
            q: "Do You Build Resume-style Portfolio Websites?",
            a: "Yes, one of the things that our team does really well is that we create engaging resume websites, which, along with the details about the work history of the person, state that person's accomplishments and include reviews. Such sites are applicable not only to people who are currently looking for new positions but also to consultants and freelancers as a platform for their reliable presence in the online market.",
          },
          {
            q: "Will My Site be Optimized for Google Search?",
            a: "Every website we create is not only friendly to search engines but also built in such a way that it can be found easily. So we optimize, among other things, the titles and meta tags, and also speed up your site's loading rate, so that you may rank better. Our SEO strategy is like a spotlight on your personal brand that catches the right people at the right time.",
          },
          {
            q: "Can I Integrate Videos, Blogs, or Social Media Feeds?",
            a: "Yes, what we offer is the integration of multimedia as well as all social media platforms, so that more users would be able to interact with you. It does not matter whether you want to embed a YouTube video, show the latest pictures from your Instagram account, or provide easy access to your blog, all these things can be done using your website, which we make dynamic and interactive.",
          },
          {
            q: "Do You Provide Maintenance and Updates?",
            a: "Yes, we also have special plans to provide customers with the support that they need to keep their sites up to date and secure. We do all the hard work for you, such as backing up your site, updating plugins, and checking the performance of your site while you are busy doing your thing.",
          },
          {
            q: "How Long Does It Take to Build a Portfolio Website?",
            a: "Usually, it is done within 3 to 6 weeks, the size of the project and the degree of customization have a decisive role in determining the duration. If one wants to have a simplistic design, they can expect the process to be over in a short time, but if they seek to have a feature-rich or multi-page website, there is going to be more work for them to develop and test it until they find the desired version to be launched.",
          },
        ]}
      />
    </>
  );
};

export default page;
