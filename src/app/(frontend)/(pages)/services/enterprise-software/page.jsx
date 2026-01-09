import React from "react";
import imagebanner from "@/app/(frontend)/assets/images/enterprise-software/main-banner.png";
import CommonBanner2 from "@/app/(frontend)/component/pages/common/CommonBanner2";
import CommonIntroduction from "@/app/(frontend)/component/pages/common/CommonIntroduction";
import imageintro1 from "@/app/(frontend)/assets/images/cloud-applications/intro-1.webp";
import imageintro2 from "@/app/(frontend)/assets/images/cloud-applications/intro-2.webp";
import CommonWhyChoose from "@/app/(frontend)/component/pages/common/CommonWhyChoose";
import CloudPlatformSection from "@/app/(frontend)/component/pages/services/CloudPlatformSection";
import CloudProcessSection from "@/app/(frontend)/component/pages/services/CloudProcessSection";
import AdvancedTechSection from "@/app/(frontend)/component/pages/services/AdvancedTechSection";
import CloudPartnerSection from "@/app/(frontend)/component/pages/services/CloudPartnerSection";
import CloudSecuritySection from "@/app/(frontend)/component/pages/services/CloudSecuritySection";
import LocationService from "@/app/(frontend)/component/pages/common/LocationService";
import CommonCtaSection from "@/app/(frontend)/component/pages/common/CommonCtaSection";
import CommonFaqSection from "@/app/(frontend)/component/pages/common/CommonFaqSection";
import CommonThreeCard from "@/app/(frontend)/component/pages/common/CommonThreeCard";
import ContactImage from "@/app/(frontend)/assets/images/about/contact.png";

const page = () => {
  return (
    <>
      <CommonBanner2
        bg={imagebanner}
        heding={
          "Enterprise Software Company in Dubai"
        }
        subtitle={
          "WD Agency is a leading enterprise software development company in Dubai, delivering<br> tailor-made digital solutions that drive business efficiency, innovation, and transformation. <br>Our expert team crafts scalable, secure, and cutting-edge software designed to meet<br> the unique needs of UAE enterprises, empowering them to stay competitive."
        }
      />

      <CommonIntroduction
        heding="Enterprise Software for Your Dubai Business"
        imageintro1={imageintro1}
        imageintro2={imageintro2}
        text1={`
          <p>Enterprise software development focuses on building large-scale, secure, and scalable software solutions designed to meet the complex needs of organizations rather than individual users. These solutions support operations across departments, improve decision-making, and enable long-term business growth for enterprises, government bodies, and institutions.</p>
          <p>Such solutions help streamline operations across departments, enhance data-driven decision-making, and ensure compliance and security. By enabling efficiency, flexibility, and long-term scalability, enterprise software supports sustainable business growth for enterprises, government bodies, and large institutions o adapt quickly to evolving business demands and drive sustainable growth.</p>
        `}
        text2={`
          <h3>Defining Enterprise Software Solutions</h3>
          <p>WD Agency specializes in enterprise software development, delivering robust, secure, and scalable solutions tailored to the unique requirements of large organizations. With a deep understanding of complex business ecosystems, we build custom enterprise systems that seamlessly integrate with existing infrastructure, support high-volume operations, and ensure long-term reliability.</p>
          <p>By combining strategic planning, modern technologies, and a user-centric approach, WD Agency helps enterprises streamline workflows, enhance operational efficiency, and gain actionable insights from data. </p>
        `}
      />

      <CommonWhyChoose
        heading="Benefits of Custom Enterprise Software for Dubai Businesses"
        subheading="Custom enterprise software gives Dubai-based organizations a strategic edge by aligning technology with local regulations, industry standards, and business goals."
        reasons={[
          {
            title: "Tailored Functionality",
            description:
              "Specific to your workflows, ensuring that every feature serves a business purpose and eliminates unnecessary complexity.",
            icon: (
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <path d="m9 12 2 2 4-4" />
              </svg>
            ),
          },
          {
            title: "Improved Operational Efficiency",
            description:
              "Automation of repetitive tasks reduces manual errors and allows your team to focus on high-value strategic initiatives.",
            icon: (
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
              </svg>
            ),
          },
          {
            title: "High Scalability",
            description:
              "Designed to support rapid business growth, allowing your software to evolve alongside your expanding organizational needs.",
            icon: (
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M3 7V5a2 2 0 0 1 2-2h2" />
                <path d="M17 3h2a2 2 0 0 1 2 2v2" />
                <path d="M21 17v2a2 2 0 0 1-2 2h-2" />
                <path d="M7 21H5a2 2 0 0 1-2-2v-2" />
                <path d="M9 12l2 2 4-4" />
              </svg>
            ),
          },
          {
            title: "Enhanced Data Security",
            description:
              "Built-in compliance with UAE regulations, ensuring that sensitive organizational data remains protected against modern cyber threats.",
            icon: (
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
            ),
          },
        ]}
      />

      <CloudPlatformSection
        title="Our Comprehensive Enterprise Software Development Services in Dubai"
        description="At WD Agency, we provide a full spectrum of enterprise software solutions designed to streamline operations, enhance productivity, and foster innovation."
        platforms={[
          {
            icon: (
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <path d="m9 12 2 2 4-4" />
              </svg>
            ),
            title: "Custom Software Development & Application Modernization",
            desc: "We build secure, scalable enterprise applications and modernize legacy systems to improve performance, usability, and integration.",
            benefits: [
              "Scalable Architecture",
              "Legacy Modernization",
              "High-Level Security",
              "Seamless Integration",
            ],
          },
          {
            icon: (
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                <line x1="3" y1="9" x2="21" y2="9" />
                <line x1="9" y1="21" x2="9" y2="9" />
              </svg>
            ),
            title:
              "Enterprise Resource Planning (ERP) Solutions & Implementation",
            desc: "We deliver ERP solutions tailored for SMEs and enterprises, including Odoo ERP implementation, customization, and support.",
            benefits: [
              "Workflow Automation",
              "Centralized Data",
              "Odoo Implementation",
              "Real-time Reporting",
            ],
          },
          {
            icon: (
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M17.5 19a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7zM6.5 19a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7zM12 12a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7z" />
                <path d="M12 12L6.5 15.5M12 12l5.5 3.5M12 5v7" />
              </svg>
            ),
            title: "Cloud Computing & Infrastructure Services",
            desc: "Our cloud solutions enable flexibility, cost efficiency, and high availability using modern cloud architectures.",
            benefits: [
              "Hybrid Cloud Solutions",
              "Auto-scaling Support",
              "High Availability",
              "Cost Optimization",
            ],
          },
          {
            icon: (
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M12 8v8" />
                <path d="M8 12h8" />
              </svg>
            ),
            title: "AI Product Engineering & Automation Solutions",
            desc: "We integrate AI-driven automation, intelligent workflows, and predictive systems to optimize enterprise operations.",
            benefits: [
              "Machine Learning Models",
              "Process Automation",
              "Predictive Analytics",
              "NLP Solutions",
            ],
          },
          {
            icon: (
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M3 3v18h18" />
                <path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3" />
              </svg>
            ),
            title: "Data Analytics & Business Intelligence",
            desc: "Transform enterprise data into actionable insights with dashboards, reporting systems, and advanced analytics.",
            benefits: [
              "Custom BI Dashboards",
              "Data Visualization",
              "Actionable Insights",
              "Better Decision Making",
            ],
          },
        ]}
      />

      <CloudProcessSection
        title="The Enterprise Software Development Process"
        description="Our structured development lifecycle ensures that every enterprise solution we build is robust, scalable, and perfectly aligned with your business objectives."
        steps={[
          {
            label: "Discovery",
            icon: (
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
              </svg>
            ),
            title: "Discovery & Strategy Phase",
            desc: "We analyze your business goals, challenges, and technical requirements to create a clear software roadmap.",
          },
          {
            label: "Design",
            icon: (
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 19l7-7 3 3-7 7-3-3z" />
                <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
                <path d="M2 2l7.586 7.586" />
                <circle cx="11" cy="11" r="2" />
              </svg>
            ),
            title: "Design & Prototyping",
            desc: "User-centric UI/UX design and interactive prototypes ensure alignment before development begins.",
          },
          {
            label: "Development",
            icon: (
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M16 18l6-6-6-6" />
                <path d="M8 6l-6 6 6 6" />
              </svg>
            ),
            title: "Development & Iteration",
            desc: "Agile-driven development ensures faster delivery, flexibility, and continuous improvement.",
          },
          {
            label: "QA",
            icon: (
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <path d="m9 12 2 2 4-4" />
              </svg>
            ),
            title: "Quality Assurance & Testing",
            desc: "Rigorous testing guarantees security, performance, and reliability across all systems.",
          },
          {
            label: "Support",
            icon: (
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" />
              </svg>
            ),
            title: "Deployment, Training & Ongoing Support",
            desc: "We ensure smooth deployment, team training, and long-term support for sustained success.",
          },
        ]}
      />

      <AdvancedTechSection
        title="Driving Digital Transformation & Systems Adoption in the UAE"
        description="At WD Agency, we help Dubai organizations navigate the complexities of digital change, ensuring that new systems are not just implemented, but fully adopted and optimized for long-term growth."
        technologies={[
          {
            tag: "Roadmap",
            icon: (
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
            ),
            title: "Your Digital Transformation Roadmap",
            desc: "We help organizations transition from legacy systems to intelligent, future-ready digital ecosystems.",
          },
          {
            tag: "Adoption",
            icon: (
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            ),
            title: "Ensuring Successful Digital Systems Adoption",
            desc: "Change management, user training, and stakeholder alignment ensure high adoption rates.",
          },
          {
            tag: "Challenges",
            icon: (
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <path d="m9 12 2 2 4-4" />
              </svg>
            ),
            title: "Overcoming Challenges in Digital Transformation",
            desc: "We address resistance, integration issues, and scalability challenges through proven frameworks.",
          },
        ]}
      />

      <CloudPartnerSection
        title="Why Choose Us as Your Leading Dubai Enterprise Software Partner?"
        description="Selecting the right development partner is crucial for the success of your digital initiatives. WD Agency brings a unique blend of local expertise and global technical standards to every project."
        reasons={[
          {
            icon: (
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <line x1="2" y1="12" x2="22" y2="12" />
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              </svg>
            ),
            title: "Deep Local Expertise & Market Understanding",
            desc: "We understand Dubai's business environment, regulations, and digital ecosystem. Our solutions are tailored to meet the specific cultural and operational needs of the UAE market.",
          },
          {
            icon: (
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            ),
            title: "Expert Enterprise Software Developers in Dubai",
            desc: "Our team consists of experienced architects, developers, and consultants who specialize in building complex, high-performance systems for large-scale organizations.",
          },
          {
            icon: (
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <path d="m9 12 2 2 4-4" />
              </svg>
            ),
            title: "Commitment to Quality & Client Success",
            desc: "We focus on long-term partnerships, not just project delivery. Our goal is to ensure your software continues to deliver value long after the initial launch.",
          },
          {
            icon: (
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
              </svg>
            ),
            title: "Agile Methodologies & Flexible Engagement Models",
            desc: "Faster delivery, adaptability, and complete transparency throughout the project lifecycle. We use iterative processes to ensure your requirements are met with precision.",
          },
        ]}
      />

      <CommonThreeCard
        text1="Dubai's Tech Hub & the Future of Enterprise Software"
        text2="Navigate the rapidly evolving technological landscape of the Middle East with a partner that stays ahead of the curve."
        boxdata={[
          {
            icon: (
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
              </svg>
            ),
            title: "Navigating the Dubai Tech Hub Ecosystem",
            desc: "We help businesses leverage Dubai's innovation-driven digital infrastructure to gain a competitive edge in the global market.",
          },
          {
            icon: (
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 2v20M17 17l-5 5-5-5M12 2l-7 7M12 2l7 7" />
              </svg>
            ),
            title: "Key Enterprise Software Trends in the Middle East",
            desc: "Stay ahead with AI-driven systems, cloud-native platforms, data intelligence, and automation tailored for the regional market.",
          },
          {
            icon: (
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M2 12h5l3 9 4-18 3 9h5" />
              </svg>
            ),
            title: "Our Vision for Enterprise Innovation in the UAE",
            desc: "To build intelligent, scalable, and secure enterprise solutions that power the UAE's digital future and support its vision for excellence.",
          },
        ]}
      />

      <LocationService activeLocation="dubai" />

      <CommonFaqSection
        title="Frequently Asked Questions (FAQs) – Enterprise Software Development in Dubai"
        subtitle="Find answers to common questions about our enterprise development services, technical expertise, and how we help Dubai organizations achieve digital excellence."
        faqs={[
          {
            q: "What is enterprise software development and why is it crucial for businesses in Dubai?",
            a: "Enterprise software development involves creating custom applications designed to support large-scale business operations, enhance efficiency, and integrate multiple departments. In Dubai’s competitive market, tailored enterprise solutions enable organizations to streamline workflows, improve productivity, and drive digital transformation.",
          },
          {
            q: "How do you ensure the security and scalability of enterprise software developed for the Dubai market?",
            a: "WD Agency implements industry-standard security protocols, encrypted data storage, and role-based access controls, while designing scalable architectures that grow with your business, ensuring reliable performance as operations expand.",
          },
          {
            q: "What industries in Dubai benefit most from custom enterprise software solutions?",
            a: "Our solutions serve industries including finance, healthcare, retail, logistics, real estate, hospitality, education, and government sectors, delivering tailored systems that meet each industry’s operational and regulatory requirements.",
          },
          {
            q: "What are the unique regulatory challenges for enterprise software in Dubai?",
            a: "Dubai enterprises must comply with data privacy laws, cybersecurity standards, and sector-specific regulations. WD Agency ensures all software solutions adhere to local compliance requirements while maintaining operational efficiency.",
          },
          {
            q: "Can you develop custom software for the logistics and supply chain sector in Dubai?",
            a: "Yes. We create solutions for inventory management, fleet tracking, warehouse automation, and supply chain optimization, helping Dubai logistics companies improve efficiency, transparency, and cost-effectiveness.",
          },
          {
            q: "What types of ERP solutions do you offer for businesses in Dubai?",
            a: "WD Agency provides full-suite ERP systems, including finance, HR, inventory, CRM, procurement, and operations management modules, all customized to the specific needs of Dubai enterprises.",
          },
          {
            q: "Why is legacy system modernization important for Dubai enterprises?",
            a: "Modernizing outdated software reduces maintenance costs, improves system performance, enhances security, and enables integration with modern digital tools-ensuring Dubai businesses remain agile and competitive.",
          },
          {
            q: "What is involved in your digital transformation consulting services for Dubai businesses?",
            a: "Our consulting includes process assessment, system design, technology roadmap creation, ERP/CRM implementation, AI/IoT integration, and ongoing support to drive operational efficiency and innovation.",
          },
          {
            q: "What are the benefits of outsourcing software development to Dubai?",
            a: "Outsourcing provides access to skilled local developers, cost-effective solutions, faster project delivery, and alignment with Dubai’s regulatory and business ecosystem.",
          },
          {
            q: "How can AI development benefit my enterprise operations in Dubai?",
            a: "AI solutions improve predictive analytics, process automation, customer service, and decision-making, helping Dubai enterprises optimize operations and enhance competitiveness.",
          },
          {
            q: "What are the advantages of cloud migration for businesses in Dubai?",
            a: "Cloud migration enables scalable storage, remote accessibility, cost savings, and improved disaster recovery, ensuring Dubai businesses can operate efficiently in a modern, digital-first environment.",
          },
          {
            q: "How can blockchain improve supply chain transparency in Dubai?",
            a: "Blockchain provides immutable transaction records, secure data sharing, and traceability, enhancing supply chain transparency, efficiency, and trust for Dubai enterprises.",
          },
          {
            q: "What are examples of IoT integration for smart cities in Dubai?",
            a: "IoT can enable smart traffic management, energy monitoring, facility automation, and connected public services, supporting Dubai’s vision for sustainable, intelligent urban environments.",
          },
          {
            q: "Do you specialize in enterprise mobile app development for the banking sector in Dubai?",
            a: "Yes. WD Agency develops secure, compliant mobile banking applications for Dubai’s financial institutions, with features such as mobile payments, account management, and real-time analytics.",
          },
          {
            q: "What is the average cost of enterprise software development in Dubai?",
            a: "Costs vary based on project complexity, features, integrations, and support requirements. WD Agency provides transparent pricing with detailed proposals after thorough requirement analysis.",
          },
          {
            q: "How do Smart Dubai initiatives influence enterprise software demand?",
            a: "Smart Dubai initiatives drive the need for digital transformation, cloud adoption, AI, IoT, and smart city solutions, increasing demand for custom enterprise software that aligns with government-led innovation programs.",
          },
          {
            q: "What opportunities does the Dubai 10X program create for businesses?",
            a: "The Dubai 10X program encourages enterprises to adopt innovative technologies, advanced automation, and futuristic solutions, enabling businesses to achieve exponential growth and competitive advantage in Dubai’s rapidly evolving market.",
          },
        ]}
      />

      <CommonCtaSection
        imageUrl={ContactImage}
        title="Elevate Your Enterprise with Custom Software Solutions"
        subtitle="Ready to transform your business operations with scalable, secure, and cutting-edge enterprise software? Contact WD Agency today for a free consultation and let's build the future of your organization together in Dubai."
      />
    </>
  );
};

export default page;
