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
import DevelopmentServices from "../../component/pages/home/DevelopmentServices";
import Team from "../../component/pages/about/Team";

import Portfolioimage1 from "@/app/(frontend)/assets/images/protfolio/portfolio-website-1.webp";
import Portfolioimage2 from "@/app/(frontend)/assets/images/protfolio/portfolio-2.webp";
import Portfolioimage3 from "@/app/(frontend)/assets/images/protfolio/portfolio-website-3.webp";
import Portfolioimage4 from "@/app/(frontend)/assets/images/protfolio/portfolio-website-4.webp";
import Portfolioimage5 from "@/app/(frontend)/assets/images/protfolio/portfolio-5.webp";
import Portfolioimage6 from "@/app/(frontend)/assets/images/protfolio/portfolio-website-6.webp";
import RealEstatePortfolio from "../../component/pages/common/RealEstatePortfolio";
import styles from "@/app/(frontend)/assets/style/calculator/CostCalculator.module.css";
import LocationService from "../../component/pages/common/LocationService";
import SubNav from "../../component/pages/common/SubNav";
import CommonCostBreakdown from "../../component/pages/common/CommonCostBreakdown";
import IndustryGrid from "../../component/pages/common/IndustryGrid";
import CommonProtfolio from "../../component/pages/common/CommonProtfolio";

const page = () => {
  return (
    <>
      <CommonBanner2
        bg={imagebanner}
        heding={"Portfolio Web Design</br> Company in Dubai, UAE"}
        subtitle={
          "Build a powerful portfolio website in Dubai that highlights your expertise, <br>achievements, and unique identity. Our professionally crafted websites are <br>designed to create impact and support long-term success."
        }
      />
     
      <CommonIntroduction
        heding={"Portfolio Website Design Dubai, UAE"}
        text1={` <p>In today’s digital-world, your online presence defines your professional credibility. Whether you are a creative, a business person, or an expert in the field, your personal website is a robust extension of your identity and purpose. Unlike social media, where your identity is restricted by algorithms and design limitations, a personal website is your very own, where you can have complete control over everything- from layout and theme to messaging and customer service.</p>
                    <p>Gone are the days when a personal branding website just showcased a CV or a gallery. In the modern world, this type of website tells the user's story in both effective and natural ways. It not only generates loyalty but also attracts the right opportunities and places you as a leader in your field.</p>
                    `}
        text2={`  <p>The professionals all over the UAE are swiftly turning to portfolio and personal websites in order to grab the attention of potential clients in highly competitive industries. The professionals in the fields of consulting, photography, as well as the founders and influencers, everybody is longing for a stage that unveils their personal features and the area they specialize in. It is becoming more and more popular to engage with others online, having your own platform makes you more visible, relevant, and memorable in a positive way.</p>
                <p><a href='/'>Website Development Agency</a> specializes in creating eye-catching and interactive personal branding websites. Our goal is to help you make a memorable digital impression, one that not only showcases your work but amplifies your personal narrative to the world.</p>
                    `}
        imageintro1={imageintro1}
        imageintro2={imageintro2}
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
      
      <CommonProtfolio />
      
      <DevelopmentServices />

      <CommonCostBreakdown
        heading="Portfolio Website Design Cost Breakdown"
        description="Select the best portfolio website design and Development package based on the features, performance, and growth level you need."
      />
      <IndustryGrid />

      
      <CommonWhyWebsiteDevelopment
        heding={
          "Portfolio and Personal Branding Websites We Deliver"
        }
        subheding={
          "We create portfolio and personal branding websites that reflect your professional identity and showcase your expertise. Each site is designed to highlight your skills, achievements, and personal style, helping you stand out in a competitive digital landscape."
        }
        lefttext={`<p><b>Creative Professional Portfolios:</b> From artists and designers to photographers and illustrators, we craft visually stunning portfolios that bring your work to life. Interactive galleries, case studies, and project showcases ensure visitors engage with your creations and remember your brand.</p>
                                <p><b>For Entrepreneurs & Consultants:</b> For consultants, coaches, and entrepreneurs, we build websites that convey credibility and authority. These platforms feature service overviews, client testimonials, and thought-leadership content that position you as a trusted expert in your field.</p>
                                <p><b>Digital Presence Solutions:</b> Our personal branding websites also include responsive design, SEO optimisation, multimedia integration, and contact systems. Whether you’re a speaker, author, or professional looking to elevate your online presence, we deliver a website that strengthens your brand, attracts the right audience, and supports your growth.</p>
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
      <LocationService activeLocation="dubai" />

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
