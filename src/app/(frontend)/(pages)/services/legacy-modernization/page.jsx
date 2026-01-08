import React from "react";
import imagebanner from "@/app/(frontend)/assets/images/legacy-modernization/main-banner.webp";
import CommonBanner2 from "@/app/(frontend)/component/pages/common/CommonBanner2";
import CommonIntroduction from "@/app/(frontend)/component/pages/common/CommonIntroduction";
import imageintro1 from "@/app/(frontend)/assets/images/legacy-modernization/intro-2.webp";
import imageintro2 from "@/app/(frontend)/assets/images/legacy-modernization/intro-1.webp";
import ContactImage from "@/app/(frontend)/assets/images/about/contact.png";
import CommonCtaSection from "@/app/(frontend)/component/pages/common/CommonCtaSection";
import LocationService from "@/app/(frontend)/component/pages/common/LocationService";
import CommonWhyChoose from "@/app/(frontend)/component/pages/common/CommonWhyChoose";
import CloudMigrationSection from "@/app/(frontend)/component/pages/services/CloudMigrationSection";
import CloudPlatformSection from "@/app/(frontend)/component/pages/services/CloudPlatformSection";
import CommonFaqSection from "@/app/(frontend)/component/pages/common/CommonFaqSection";

const page = () => {
  return (
    <>
      <CommonBanner2
        bg={imagebanner}
        heding={
          "Legacy Modernization Services Dubai: Transform Your Business with Future-Proof IT"
        }
        subtitle={
          "Our Legacy Modernization Services in Dubai help businesses upgrade outdated systems into scalable, secure, and high-performance digital platforms. We enable future-ready IT transformation by integrating modern technologies that improve agility, efficiency, and long-term growth."
        }
      />

      <CommonIntroduction
        heding="Unlocking Business Potential: What is Legacy Modernization in Dubai?"
        imageintro1={imageintro1}
        imageintro2={imageintro2}
        text1={`<p>Legacy modernization in Dubai refers to the process of upgrading outdated IT systems, applications, and infrastructure to align with modern business demands. It enables organizations to improve system performance, enhance security compliance, reduce operational costs, and support digital transformation initiatives. In Dubai’s fast-evolving digital economy, modernization helps businesses stay competitive, scalable, and future-ready while ensuring seamless integration with cloud technologies, APIs, and advanced platforms.</p>`}
        text2={`
          <h3>What Exactly is Legacy System Modernization?</h3>
          <p>Legacy system modernization involves transforming old software, databases, and infrastructure into modern, efficient, and flexible systems without disrupting business operations. This includes application re-architecture, cloud migration, code refactoring, and technology upgrades that improve performance, maintainability, and user experience, ensuring long-term business continuity and IT agility.</p>
          `}
      />

      <CommonWhyChoose
        heading="Why Modernize Your Legacy Systems? Addressing Key Challenges in Dubai"
        subheading="Modernizing legacy systems helps Dubai businesses overcome technology limitations, strengthen cybersecurity, and support regulatory compliance. It improves operational efficiency, reduces maintenance costs, and enables seamless adoption of cloud, automation, and digital-first solutions, ensuring long-term business scalability and competitiveness."
        reasons={[
          {
            title: "Overcoming Outdated Technology Limitations",
            description:
              "Outdated systems restrict performance, integration, and innovation. Legacy modernization replaces rigid architectures with flexible, scalable platforms, enabling faster development, smoother integrations, and improved user experiences aligned with modern business needs.",
            icon: (
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
              </svg>
            ),
          },
          {
            title: "Enhancing Security and Compliance",
            description:
              "Modernized systems strengthen data security, minimize cyber risks, and ensure compliance with UAE regulatory standards. Upgraded architectures support advanced encryption, real-time monitoring, and secure cloud environments to protect critical business data.",
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
          {
            title: "Driving Efficiency and Reducing Operational Costs",
            description:
              "Legacy modernization streamlines workflows, reduces manual processes, and lowers infrastructure and maintenance costs. By adopting automation and cloud-based solutions, businesses achieve higher operational efficiency and improved ROI.",
            icon: (
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="12" y1="1" x2="12" y2="23" />
                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
              </svg>
            ),
          },
        ]}
      />

      <CloudPlatformSection
        title="Our Tailored Legacy Modernization Services & Solutions in Dubai"
        description="WD Agency delivers custom legacy modernization services in Dubai designed to transform outdated systems into secure, scalable, and high-performance digital platforms. Our solutions support cloud adoption, improve system agility, and ensure seamless integration while aligning technology with your business growth goals."
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
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="12" y1="18" x2="12" y2="12" />
                <line x1="9" y1="15" x2="15" y2="15" />
              </svg>
            ),
            title: "Application Modernization Services",
            desc: "Our application modernization services upgrade legacy applications through re-architecture, refactoring, and cloud enablement. We enhance performance and scalability while minimizing downtime.",
            benefits: [
              "Cloud-Native Refactoring",
              "Microservices Adoption",
              "API Integration",
              "UI/UX Enhancement",
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
                <ellipse cx="12" cy="5" rx="9" ry="3" />
                <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
                <path d="M3 5v14c0 1.66 4 3 9 3s 9-1.34 9-3V5" />
              </svg>
            ),
            title: "Data & Database Modernization",
            desc: "We modernize legacy data systems by migrating to cloud-ready, high-availability databases. Our approach improves data security, accessibility, and analytics capability.",
            benefits: [
              "Seamless Data Migration",
              "NoSQL & SQL Upgrades",
              "Real-time Analytics",
              "Enhanced Security",
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
                <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
                <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
                <line x1="6" y1="6" x2="6.01" y2="6" />
                <line x1="6" y1="18" x2="6.01" y2="18" />
              </svg>
            ),
            title: "Infrastructure Modernization",
            desc: "Our infrastructure modernization solutions replace aging hardware with cloud and hybrid environments. This improves system reliability and boosts operational efficiency.",
            benefits: [
              "Cloud & Hybrid Setup",
              "Serverless Computing",
              "DevOps Automation",
              "Reduced IT Costs",
            ],
          },
        ]}
      />

      <LocationService activeLocation="dubai" />

      <CommonFaqSection
        title="Frequently Asked Questions (FAQs) About Legacy Modernization"
        subtitle="Below are answers to the most common questions businesses ask about legacy modernization services in Dubai. This section is designed to address concerns around the modernization process, costs, security, timelines, and post-modernization support, helping decision-makers make informed choices."
        faqs={[
          {
            q: "What are legacy modernization services in Dubai?",
            a: "Legacy modernization services upgrade outdated applications, infrastructure, and data systems into secure, scalable, cloud-ready platforms aligned with modern business needs.",
          },
          {
            q: "Why should my Dubai-based business consider legacy system modernization?",
            a: "Modernization improves performance, security, compliance, reduces costs, and enables digital transformation essential for Dubai’s competitive, tech-driven market.",
          },
          {
            q: "What are the primary challenges when modernizing outdated systems in the UAE?",
            a: "Common challenges include data migration risks, system downtime, integration complexity, security concerns, and ensuring regulatory compliance across UAE standards.",
          },
          {
            q: "How do you determine the best legacy system transformation strategy for my applications?",
            a: "We conduct system assessments, business impact analysis, and technology audits to select optimal rehosting, replatforming, or refactoring strategies.",
          },
          {
            q: "What is the estimated cost of legacy system modernization in Dubai?",
            a: "Costs depend on system complexity, data volume, modernization approach, and integration needs, with ROI-driven planning to maximize long-term value.",
          },
          {
            q: "How can I calculate the Return on Investment (ROI) for legacy modernization?",
            a: "ROI is measured through reduced maintenance costs, improved productivity, enhanced security, faster deployments, and long-term operational savings.",
          },
          {
            q: "What are the key risks associated with legacy application modernization, and how are they mitigated?",
            a: "Risks include data loss, downtime, security gaps, mitigated through phased migration, backups, testing, and proven risk management frameworks.",
          },
          {
            q: "Do you offer industry-specific legacy modernization solutions for sectors like finance in Dubai?",
            a: "Yes, we deliver industry-specific modernization solutions for finance, healthcare, retail, and enterprises, ensuring compliance, scalability, and performance.",
          },
          {
            q: "What kind of support do you provide after a legacy system modernization project is complete?",
            a: "We offer post-modernization support, monitoring, optimization, updates, and continuous improvement to ensure system stability and scalability.",
          },
          {
            q: "How long does a typical legacy modernization project take in Dubai?",
            a: "Project timelines vary from weeks to several months, depending on system size, complexity, data migration, and chosen modernization strategy.",
          },
          {
            q: "What is the difference between rehosting, replatforming, and refactoring in modernization?",
            a: "Rehosting lifts systems to cloud, replatforming optimizes platforms, while refactoring redesigns applications for maximum performance and scalability.",
          },
          {
            q: "Which companies offering legacy modernization in UAE are best suited for large enterprises?",
            a: "The best providers offer enterprise-grade expertise, security compliance, scalable architectures, proven case studies, and comprehensive post-project support.",
          },
        ]}
      />
      <CommonCtaSection
        imageUrl={ContactImage}
        title="Ready to Modernize Your IT Infrastructure?"
        subtitle="Contact WD Agency today to discuss your legacy modernization strategy and future-proof your business."
      />
    </>
  );
};

export default page;
