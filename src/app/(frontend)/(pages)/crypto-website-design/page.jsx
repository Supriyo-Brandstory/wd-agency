import React from "react";
import CommonBanner2 from "../../component/pages/common/CommonBanner2";
import imagebanner from "@/app/(frontend)/assets/images/crypto-website-design/banner.webp";
import CommonIntroduction from "../../component/pages/common/CommonIntroduction";
import imageintro1 from "@/app/(frontend)/assets/images/crypto-website-design/intro-1.webp";
import imageintro2 from "@/app/(frontend)/assets/images/crypto-website-design/intro-2.webp";
import CommonWhyMetter from "../../component/pages/common/CommonWhyMetter";
import imagewhymetter from "@/app/(frontend)/assets/images/crypto-website-design/why.webp";
import CommonIndustries from "../../component/pages/common/CommonIndustries";
import imageService1 from "@/app/(frontend)/assets/images/crypto-website-design/service-1.webp";
import imageService2 from "@/app/(frontend)/assets/images/crypto-website-design/service-2.webp";
import imageService3 from "@/app/(frontend)/assets/images/crypto-website-design/service-3.webp";
import imageService4 from "@/app/(frontend)/assets/images/crypto-website-design/service-4.webp";
import imageService5 from "@/app/(frontend)/assets/images/crypto-website-design/service-5.webp";
import imageService6 from "@/app/(frontend)/assets/images/crypto-website-design/service-6.webp";
import CommonWhyWebsiteDevelopment from "../../assets/style/common/CommonWhyWebsiteDevelopment";
import imagewhydevelopment from "@/app/(frontend)/assets/images/crypto-website-design/why-choose.webp";
import CommonClientTestimonials from "../../component/pages/common/CommonClientTestimonials";
import imagetestimonial1 from "@/app/(frontend)/assets/images/testimonial/testimonial-1.webp";
import imagetestimonial2 from "@/app/(frontend)/assets/images/testimonial/testimonial-2.webp";
import imagetestimonial3 from "@/app/(frontend)/assets/images/testimonial/testimonial-3.webp";
import CommonFaqSection from "../../component/pages/common/CommonFaqSection";
import DevelopmentServices from "../../component/pages/home/DevelopmentServices";
import Team from "../../component/pages/about/Team";
import LocationService from "../../component/pages/common/LocationService";
import CommonCostBreakdown from "../../component/pages/common/CommonCostBreakdown";
import CommonProtfolio from "../../component/pages/common/CommonProtfolio";
import DemoTemplate from "../../component/pages/home/DemoTemplate";
import IndustryGrid from "../../component/pages/common/IndustryGrid";

const page = () => {
  return (
    <>
      <CommonBanner2
        bg={imagebanner}
        alt={"Crypto & Blockchain Web Design Agency in Dubai, UAE"}
        heding={"Crypto Web Design Agency in Dubai, UAE"}
        subtitle={
          "We develop cutting-edge websites for crypto exchanges, NFT marketplaces, and blockchain projects <br>that demand high security, real-time data integration, and future-forward design in Dubai."
        }
      />

      <CommonIntroduction
        heding={"Crypto & Blockchain Website Design Services"}
        text1={` <p>In Dubai's journey toward becoming a global capital for digital assets, a world-class web presence is the price of entry for any serious crypto or blockchain project. Whether you are launching a Decentralized Exchange (DEX), a new token, or a blockchain consultancy, your website must communicate technical innovation, uncompromising security, and market authority.</p>
                 <p>The crypto audience is tech-savvy and highly discerning. They expect fast-loading, visually stunning, and data-rich platforms that provide immediate transparency and ease of interaction. A specialized blockchain website helps you navigate the UAE's competitive Web3 landscape and convert community interest into project participation.</p>
                    `}
        text2={`  <p>Modern crypto websites go beyond static pages—they incorporate real-time price feeds, wallet connectivity (Web3 integration), dynamic roadmaps, and secure tokenomics displays. We focus on building digital foundations that support the complex requirements of the decentralized economy while maintaining a premium, high-tech aesthetic.</p>
                <p><a href='/'>Website Development Agency</a> specializes in engineering high-impact Web3 and blockchain websites for Dubai-based innovators. We design responsive, decentralized-ready platforms that highlight your project’s unique value proposition and bolster brand credibility in a rapidly evolving market.</p>
                    `}
        imageintro1={imageintro1}
        alt1={
          "Specialized Crypto Website Design in Dubai - Website Development Agency"
        }
        imageintro2={imageintro2}
        alt2={
          "Blockchain Web Development Company UAE - Website Development Agency"
        }
      />

      <DemoTemplate
        title="Crypto & Tech Website Designs- Explore Templates"
        description="Innovation-led crypto and blockchain website designs in Dubai, starting at AED 1,500. Launch your <br>Web3 project quickly with high-performance, future-ready designs. Get fast delivery today."
        activetaburl={"technology"}
      />

      <CommonIndustries
        heding={
          "Crypto & Blockchain Website Design- Our Services"
        }
        subheding="We offer specialized digital solutions designed to help Web3 and blockchain projects succeed in the UAE."
        services={[
          {
            title: "Web3 & Wallet Integration",
            desc: "We build secure bridges between your website and the decentralized world. From seamless MetaMask and WalletConnect integrations to custom smart contract interactions, we ensure your users can connect their digital identities and assets safely and intuitively.",
            img: imageService1,
            alt: "Web3 & Wallet Integration Dubai",
            btnname: "Contact Us",
            link: "/contact-us",
          },
          {
            title: "Real-Time Market Data Dashboards",
            desc: "Integrate live price feeds, liquidity charts, and trading volume data directly from major exchanges via secure APIs. Our dynamic dashboards give your users the up-to-the-minute information they need to engage with your ecosystem effectively.",
            img: imageService2,
            alt: "Crypto Market Data Dashboards",
            btnname: "Contact Us",
            link: "/contact-us",
          },
          {
            title: "NFT Marketplace & Minting Portals",
            desc: "Launch your NFT collection or marketplace with high-performance minting pages and search-optimized galleries. We focus on low-latency interactions and beautiful visual storytelling to showcase your digital collectibles to the Dubai art and tech community.",
            img: imageService3,
            alt: "NFT Marketplace Development Dubai",
            btnname: "Contact Us",
            link: "/contact-us",
          },
          {
            title: "Tokenomics & Roadmap Visuals",
            desc: "Present complex project data through beautiful, interactive infographics. We design dynamic token distribution charts and project roadmaps that evolve with your progress, helping to build community trust and professional project positioning.",
            img: imageService4,
            alt: "Interactive Crypto Visuals",
            btnname: "Contact Us",
            link: "/contact-us",
          },
          {
            title: "Enterprise-Grade Security & DDoS Protection",
            desc: "Safety is paramount in the crypto sector. Our websites are built with robust security architectures, including advanced protection against DDoS attacks, SQL injection, and XSS, ensuring your project's digital front-door remains open and secure 24/7.",
            img: imageService5,
            alt: "Secure Crypto Web Infrastructure",
            btnname: "Contact Us",
            link: "/contact-us",
          },
          {
            title: "High-Tech Futurist Custom Design",
            desc: "Stand out with a design that reflects the future. We utilize glassmorphism, 3D elements, and smooth micro-animations to create a premium brand environment that resonates with the global crypto and AI community in Dubai.",
            img: imageService6,
            alt: "Premium Web3 Design Agency Dubai",
            btnname: "Contact Us",
            link: "/contact-us",
          },
        ]}
      />

      <CommonWhyMetter
        imagewhymetter={imagewhymetter}
        alt={
          "Trusted Crypto Website Design for UAE Innovators - Website Development Agency"
        }
        heding={"Trusted Crypto Website Design for UAE-based Innovators"}
        subheding={
          "We design blockchain websites with a deep understanding of Web3 culture and technical requirements. From decentralized architecture to community trust, every element is engineered for the future."
        }
        lefttext={`  <p><b>Forward-Thinking Architecture:</b> Every website is engineered to be as innovative as the blockchain technology it supports. We focus on scalability, performance, and seamless decentralized integration to ensure your project remains at the cutting edge.</p>
                        <p><b>Global Authority Building:</b> We help Dubai-based crypto projects project a world-class, professional image. Our designs combine high-tech prestige with technical clarity, positioning your project as a leader in the international digital assets market.</p>
                        `}
        righttext={`<p><b>Ongoing Web3 Support:</b> The blockchain space moves fast. We build flexible platforms that can easily integrate new protocols, network updates, and community features as your project evolves through its roadmap milestones.</p>
                            `}
      />
      <CommonProtfolio />

      <DevelopmentServices />

      <CommonCostBreakdown
        heading="Crypto Website Design Dubai- Cost Breakdown"
        description="Choose advanced crypto and blockchain website development solutions designed to showcase your innovation and secure your project’s digital presence in the UAE."
      />
      <IndustryGrid />

      <CommonWhyWebsiteDevelopment
        heding={"Web3 Website Solutions for Every Type of Project"}
        subheding={
          "We design blockchain websites that adapt to the unique requirements of the decentralized ecosystem. Every platform is planned around community engagement, data security, and project goals."
        }
        lefttext={`<p><b>Exchanges & Trading Platforms:</b> For centralized and decentralized exchanges, we focus on high-performance interfaces, real-time data accuracy, and user-friendly trading dashboards that simplify complex financial interactions.</p>
                                <p><b>ICO & Token Launchpads:</b> Our launchpad designs emphasize project credibility, secure contribution portals, and transparent tokenomics, helping you build investor confidence during critical funding stages. </p>
                                <p><b>NFT & Metaverse Projects:</b> We create immersive, visual-first platforms for digital collectibles and virtual environments, utilizing high-quality graphics and interactive galleries to drive community engagement.</p>
                                <p><b>Blockchain Infrastructure & B2B:</b> For firms building core protocols or layer-2 solutions, we focus on technical documentation, ecosystem growth tools, and developer-friendly interfaces that support institutional adoption.</p>
                            `}
        rightimage={imagewhydevelopment}
        alt={
          "Why Choose Website Development Agency for Crypto Website Development"
        }
      />

      <Team />

      <CommonClientTestimonials
        testimonials={[
          {
            id: 1,
            name: "Alexander Volkov",
            text: "Website Development Agency built our DEX interface with incredible speed and technical precision. Their understanding of Web3 integration is top-notch in the Dubai market.",
            image: imagetestimonial1,
          },
          {
            id: 2,
            name: "Li Jing",
            text: "Professional, innovative, and security-conscious. They delivered an NFT marketplace that is both a work of art and a high-performing technical platform. Five stars!",
            image: imagetestimonial2,
          },
          {
            id: 3,
            name: "Sarah Al-Kamali",
            text: "Exceptional design that captured our project's vision perfectly. Their ongoing support with Web3 updates has been invaluable as we scale across the UAE and beyond.",
            image: imagetestimonial3,
          },
        ]}
      />

      <LocationService activeLocation="dubai" />

      <CommonFaqSection
        faqs={[
          {
            q: "How long does it take to develop a Web3/Crypto website?",
            a: "A professional crypto website typically takes 6 to 12 weeks, depending on the number of Web3 integrations, smart contract interactions, and the complexity of the data dashboards.",
          },
          {
            q: "Can you integrate my website with MetaMask and other wallets?",
            a: "Yes, we specialize in Web3 browser wallet integrations (MetaMask, WalletConnect, etc.), allowing users to interact directly with blockchain features from your website.",
          },
          {
            q: "Do you offer smart contract development alongside the website?",
            a: "While our primary focus is frontend and backend web development, we work with strategic partners to provide end-to-end blockchain and smart contract solutions for our clients.",
          },
          {
            q: "How secure are your crypto websites against hacking?",
            a: "We implement industry-leading security practices, including multi-layer encryption, secure server architectures, global CDNs with DDoS protection, and regular code audits.",
          },
          {
            q: "Will my website display real-time price feeds?",
            a: "Yes, we can integrate APIs from major data providers like CoinGecko or CoinMarketCap, or direct feeds from exchanges, to ensure your site displays 1:1 real-time asset pricing.",
          },
          {
            q: "Do you help with global SEO for blockchain projects?",
            a: "Absolutely. We specialize in international SEO to ensure your crypto project ranks for competitive global keywords, attracting users and investors from every major tech hub.",
          },
        ]}
      />
    </>
  );
};

export default page;
