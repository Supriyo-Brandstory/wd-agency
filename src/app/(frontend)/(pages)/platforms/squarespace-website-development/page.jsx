import React from "react";
import CommonBanner2 from "../../../component/pages/common/CommonBanner2";
import imagebanner from "@/app/(frontend)/assets/images/wordpress-development/wordpress-banner.webp";
import CommonIntroduction from "../../../component/pages/common/CommonIntroduction";
import imageintro1 from "@/app/(frontend)/assets/images/wordpress-development/wordpress-web-1.webp";
import imageintro2 from "@/app/(frontend)/assets/images/wordpress-development/wordpress-web-2.webp";
import CommonSetsUs from "../../../component/pages/common/CommonSetsUs";
import setusimagesabudhabi from "@/app/(frontend)/assets/images/wordpress-development/wordpress-main.webp";
import StrategicProblemSolvingimage from "@/app/(frontend)/assets/images/website-development/Strategic-Problem-Solving.png";
import FocusedApproachimage from "@/app/(frontend)/assets/images/website-development/FocusedApproach.png";
import PartnershipCommitmentimage from "@/app/(frontend)/assets/images/website-development/Partnership-Commitment.png";
import Transparencyimage from "@/app/(frontend)/assets/images/website-development/Transparency.png";
import TechnologyAdoptionimage from "@/app/(frontend)/assets/images/website-development/Technology-Adoption.png";
import ValueforMoneyServicesimage from "@/app/(frontend)/assets/images/website-development/Value-for-Money-Services.png";
import CommonDevelopmentProcess from "../../../component/pages/common/CommonDevelopmentProcess";
import CommonIndustries from "../../../component/pages/common/CommonIndustries";
import imageService1 from "@/app/(frontend)/assets/images/wordpress-development/custom-wordpress.webp";
import imageService2 from "@/app/(frontend)/assets/images/wordpress-development/theme-design.webp";
import imageService3 from "@/app/(frontend)/assets/images/wordpress-development/plug-in.webp";
import imageService4 from "@/app/(frontend)/assets/images/wordpress-development/wordpress-e-com.webp";
import imageService5 from "@/app/(frontend)/assets/images/wordpress-development/wordpress-migration.webp";
import imageService8 from "@/app/(frontend)/assets/images/wordpress-development/maintenance.webp";
import CommonWhyWebsiteDevelopment from "../../../assets/style/common/CommonWhyWebsiteDevelopment";
import imagewhydevelopment from "@/app/(frontend)/assets/images/wordpress-development/why-wd-agency.webp";
import CommonFaqSection from "../../../component/pages/common/CommonFaqSection";
import CommonServiceLocations from "../../../component/pages/common/CommonServiceLocations";
import CommonClientTestimonials from "../../../component/pages/common/CommonClientTestimonials";
import CommonThreeCard from "@/app/(frontend)/component/pages/common/CommonThreeCard";
import SubNav from "@/app/(frontend)/component/pages/common/SubNav";

const page = () => {
  return (
    <>
      <CommonBanner2
        bg={imagebanner}
        heding={"Squarespace Website <br>Development Company in UAE"}
        subtitle={
          "We design and develop stunning, professional, and secure <br>Squarespace websites that elevate your brand in Dubai, <br>Abu Dhabi, and across the UAE."
        }
      />

      <SubNav
        title="Dev. Services"
        items={[
          { name: "UI/UX", link: "/services/ui-ux-design" },
          { name: "Frontend Dev.", link: "/services/frontend-development" },
          { name: "Full-stack Dev.", link: "/services/full-stack-development" },
          {
            name: "Static Web Dev.",
            link: "/services/static-website-development",
          },
          {
            name: "Dynamic Web Dev.",
            link: "/services/dynamic-website-development",
          },
          {
            name: "Website Migration",
            link: "/services/website-migration-service",
          },
        ]}
      />
      <CommonIntroduction
        heding={"Squarespace Website Development"}
        text1={` <p>Your online presence should be as unique and professional as your business. <a href="/">Website Development Agency</a> is an expert Squarespace website development company in the UAE. We help businesses create aesthetically pleasing, highly functional, and easy-to-manage websites using the powerful Squarespace platform.</p>
                    <p>Whether you need a sleek portfolio, a corporate website, or a fully integrated e-commerce store, our team of designers and developers can customize Squarespace to meet your exact needs. We focus on creating websites that not only look incredible but also drive results for UAE businesses.</p>
                    `}
        text2={`  <p>Squarespace offers an all-in-one solution with robust hosting, security, and design flexibility. We take it further by providing custom CSS, advanced integrations, and SEO optimization to ensure your site stands out from the competition.</p>
                <p>At Website Development Agency, we ensure your Squarespace site is fast, mobile-responsive, and optimized for your target audience. Partner with us to build a website that truly represents your brand in the digital world.</p>
                    `}
        imageintro1={imageintro1}
        imageintro2={imageintro2}
      />
      <CommonSetsUs
        text1={"Stunning Design on a Reliable Platform"}
        text2={`Squarespace is renowned for its clean, modern aesthetics and user-friendly interface. It's the perfect platform for businesses that want a high-quality online presence without the complexity of traditional development. At Website Development Agency, we combine professional design with technical expertise to build Squarespace sites that excel.
                    <br><br>
                    We handle everything from initial setup and template customization to advanced integrations and SEO. Our goal is to provide you with a website that is easy for you to manage while providing a premium experience for your visitors.
                       `}
        bg={setusimagesabudhabi}
      />
      <CommonIndustries
        heding={"Full-Service Squarespace Solutions for UAE Brands"}
        subheding="At Website Development Agency, we provide end-to-end Squarespace development services tailored for the UAE market. From creative design to strategic optimization, we help your business grow online."
        services={[
          {
            title: "Custom Squarespace Design",
            desc: "We create bespoke Squarespace websites that reflect your brand identity and provide a unique user experience.",
            img: imageService1,
            btnname: "Contact Us",
            link: "/contact-us",
          },
          {
            title: "Squarespace Template Customization",
            desc: `We take a standard Squarespace template and transform it into a one-of-a-kind website using custom CSS and design elements.`,
            img: imageService2,
            btnname: "Contact Us",
            link: "/contact-us",
          },
          {
            title: "Squarespace E-commerce Setup",
            desc: "Leverage Squarespace's powerful commerce features to build a secure and beautiful online store with seamless payment integrations.",
            img: imageService3,
            btnname: "Contact Us",
            link: "/contact-us",
          },
          {
            title: "Third-Party Integrations",
            desc: "We connect your Squarespace site with essential tools like CRMs, marketing platforms, and local UAE payment gateways.",
            img: imageService4,
            btnname: "Contact Us",
            link: "/contact-us",
          },
          {
            title: "Squarespace SEO & Migration",
            desc: "Optimize your site for search engines or migrate your existing website to Squarespace with ease and professional care.",
            img: imageService5,
            btnname: "Contact Us",
            link: "/contact-us",
          },
          {
            title: "Maintenance & Support",
            desc: "We provide ongoing support to help you keep your Squarespace site updated, secure, and performing at its best.",
            img: imageService8,
            btnname: "Contact Us",
            link: "/contact-us",
          },
        ]}
      />

      <CommonDevelopmentProcess
        heding={"Our Squarespace Development Flow"}
        subheding={"Beautiful Designs & Robust Functionality, Built to Succeed"}
        processData={[
          {
            id: "01",
            title: "Goals & Content Strategy",
            description: `We start by understanding what you want to achieve and planning the structure and content for your new site.`,
          },
          {
            id: "02",
            title: "Creative Design & Direction",
            description: `Our designers select the best starting point and create a visual direction that aligns with your brand.`,
          },
          {
            id: "03",
            title: "Platform Setup & Configuration",
            description: `We handle the technical setup of your Squarespace account, including domain connection and core settings.`,
          },
          {
            id: "04",
            title: "Custom Development & Styling",
            description: `We apply custom CSS, integrate features, and build out your pages to create a unique and functional digital product.`,
          },
          {
            id: "05",
            title: "Testing & Launch Preparation",
            description: `We test your site on multiple devices and browsers to ensure everything is perfect before we go live.`,
          },
          {
            id: "06",
            title: "Launch & Ongoing Client Training",
            description: `After launch, we provide training so you can easily manage your site, along with ongoing support from our team.`,
          },
        ]}
      />
      <CommonThreeCard
        text1={"Premium Features of Our Squarespace Services"}
        text2={
          "We use the best features of Squarespace to create high-performing websites for businesses across the UAE."
        }
        boxdata={[
          {
            id: 1,
            img: StrategicProblemSolvingimage,
            title: "Visual Excellence",
            desc: "Squarespace is known for its beautiful designs, and we ensure your site is a visual masterpiece.",
          },
          {
            id: 2,
            img: FocusedApproachimage,
            title: "All-in-One Reliability",
            desc: "Enjoy built-in hosting, security, and updates, making your website easy to maintain.",
          },
          {
            id: 3,
            img: PartnershipCommitmentimage,
            title: "Mobile Responsive by Default",
            desc: "Your site will look and perform flawlessly on smartphones, tablets, and desktops.",
          },
          {
            id: 4,
            img: Transparencyimage,
            title: "Custom Code Capabilities",
            desc: "We use custom CSS and JavaScript to add features and styles beyond the standard templates.",
          },
          {
            id: 5,
            img: TechnologyAdoptionimage,
            title: "Integrated Marketing Tools",
            desc: "Easily manage email campaigns, social media integrations, and analytics from your dashboard.",
          },
          {
            id: 6,
            img: ValueforMoneyServicesimage,
            title: "Built-in SEO Tools",
            desc: "We leverage Squarespace's SEO features to help your site get discovered by customers in the UAE.",
          },
          {
            id: 7,
            img: ValueforMoneyServicesimage,
            title: "Secure Checkouts",
            desc: "Build trust with your customers through secure, SSL-certified payment processes.",
          },
          {
            id: 8,
            img: ValueforMoneyServicesimage,
            title: "Easy Content Management",
            desc: "The intuitive drag-and-drop editor makes it simple for you to update your site any time.",
          },
        ]}
      />
      <CommonWhyWebsiteDevelopment
        heding={"Why Choose Web Development Agency for Squarespace"}
        subheding={
          "Build a premium online presence with the experts. Here is why UAE businesses trust us for Squarespace:"
        }
        lefttext={`<ul>
                                <li><strong>Professional Design Expertise</strong> – We have a keen eye for aesthetics and build sites that capture your brand's essence.</li>
                                
                                <li><strong>Technical Customization</strong> – We go beyond templates to provide unique features and styles tailored to your business.</li>
                                
                                <li><strong>Local Market Focus</strong> – We build websites that resonate with audience expectations in Dubai and throughout the UAE.</li>
                                
                                <li><strong>Transparent Communication</strong> – We keep you involved throughout the development process for a seamless experience.</li>

                                <li><strong>Empowering our Clients</strong> – We provide the training you need to manage your site with confidence.</li>
                                </ul>
                                <p>Partner with Website Development Agency to create a stunning Squarespace website that drives your business forward.</p>
                            `}
        rightimage={imagewhydevelopment}
      />
      <CommonIndustries />
      <CommonClientTestimonials />
      <CommonServiceLocations />

      <CommonFaqSection
        faqs={[
          {
            q: "Is Squarespace a good choice for my business?",
            a: "Yes, Squarespace is excellent for brands that value design and ease of use. It's ideal for professional services, portfolios, and stylish e-commerce boutiques.",
          },
          {
            q: "How much does Squarespace development cost in UAE?",
            a: "Squarespace project costs typically start from AED 4,500 for a professional site, while more complex e-commerce builds can range between AED 10,000 and AED 25,000.",
          },
          {
            q: "Can I use my own domain with Squarespace?",
            a: "Absolutely, we can connect your existing domain or help you purchase a new one directly through the platform.",
          },
          {
            q: "How long does it take to launch a Squarespace site?",
            a: "Depending on the complexity and content, most Squarespace sites can be launched within 2 to 4 weeks.",
          },
          {
            q: "Do you provide training on how to use Squarespace?",
            a: "Yes, we provide personal training sessions to ensure you are comfortable updating text, images, and products on your new website.",
          },
        ]}
      />
    </>
  );
};

export default page;
