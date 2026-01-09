import React from "react";
import imagebanner from "@/app/(frontend)/assets/images/software-maintenance/main-banner.webp";
import CommonBanner2 from "@/app/(frontend)/component/pages/common/CommonBanner2";
import CommonIntroduction from "@/app/(frontend)/component/pages/common/CommonIntroduction";
import imageintro1 from "@/app/(frontend)/assets/images/software-maintenance/intro-2.webp";
import imageintro2 from "@/app/(frontend)/assets/images/software-maintenance/intro-1.webp";
import ContactImage from "@/app/(frontend)/assets/images/about/contact.png";
import CommonCtaSection from "@/app/(frontend)/component/pages/common/CommonCtaSection";
import LocationService from "@/app/(frontend)/component/pages/common/LocationService";
import CommonWhyChoose from "@/app/(frontend)/component/pages/common/CommonWhyChoose";
import CloudPlatformSection from "@/app/(frontend)/component/pages/services/CloudPlatformSection";
import CloudServiceGrid from "@/app/(frontend)/component/pages/services/CloudServiceGrid";
import CloudPartnerSection from "@/app/(frontend)/component/pages/services/CloudPartnerSection";
import CommonFaqSection from "@/app/(frontend)/component/pages/common/CommonFaqSection";
import CommonFinancialImpact from "@/app/(frontend)/component/pages/common/CommonFinancialImpact";

const page = () => {
  return (
    <>
      <CommonBanner2
        bg={imagebanner}
        heding={
          "Software Maintenance Services in Dubai"
        }
        subtitle={
          "Our Software Maintenance Services in Dubai provide expert support to ensure your<br> applications remain secure, high-performing, and up to date. WD Agency delivers <br>proactive application upkeep, issue resolution, and continuous optimization to <br>support business continuity across the UAE."
        }
      />

      <CommonIntroduction
        heding="Ensuring Optimal Application Performance"
        imageintro1={imageintro1}
        imageintro2={imageintro2}
        text1={`<p>

          <p>Software maintenance is a critical process that ensures applications remain reliable, secure, and efficient after deployment. It involves regular updates, performance optimization, bug fixes, security patches, and compatibility enhancements to keep software functioning smoothly as business needs and technologies evolve.</p>
          <p>Effective software maintenance helps organizations minimize downtime, extend the lifespan of their applications, and protect systems from emerging security threats. By proactively monitoring and improving software, businesses can maintain optimal performance, adapt to changing user requirements, and ensure long-term operational stability.</p>`}
        text2={`
          <p><a href="/">Website Development Agency</a> provides reliable software maintenance services to ensure applications remain secure, stable, and high-performing throughout their lifecycle. We handle regular updates, bug fixes, performance optimization, and security enhancements, helping businesses keep their software running smoothly while adapting to evolving technologies and user expectations.</p>
          <p>Website Development Agency’s software maintenance services help organizations extend the lifespan of their applications, maintain compliance, and achieve consistent performance that supports long-term business continuity and growth.</p>
          `}
      />

      <CloudServiceGrid
        title="Types of Software Maintenance We Offer"
        description="Website Development Agency delivers end-to-end software maintenance services in Dubai, covering proactive and reactive support to keep applications secure, stable, and high-performing across changing business and technology environments."
        services={[
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
                <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
              </svg>
            ),
            title: "Corrective Maintenance",
            desc: "Rapid identification and resolution of bugs, errors, and system failures, minimizing downtime and restoring application functionality with minimal business disruption.",
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
                <path d="M16 3h5v5" />
                <path d="M8 3H3v5" />
                <path d="M21 16v5h-5" />
                <path d="M3 16v5h5" />
                <path d="M4 8V4h4" />
                <path d="M16 4h4v4" />
                <path d="M20 16v4h-4" />
                <path d="M8 20H4v-4" />
              </svg>
            ),
            title: "Adaptive Maintenance",
            desc: "Ensuring compatibility with new operating systems, cloud platforms, and hardware upgrades, supporting technology evolution.",
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
                <path d="m16 12-4-4-4 4" />
                <path d="M12 16V8" />
              </svg>
            ),
            title: "Perfective Maintenance",
            desc: "Improving performance and efficiency while adding enhancements and features driven by user feedback.",
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
            title: "Preventive Maintenance",
            desc: "Continuous monitoring and proactive optimization to detect potential issues early and ensure long-term stability.",
          },
        ]}
      />

      <CloudPlatformSection
        title="Our Expert Software Maintenance Solutions"
        description="Website Development Agency provides expert software maintenance solutions in Dubai designed to support mission-critical systems, enhance security, and ensure uninterrupted business operations across the UAE."
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
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                <line x1="8" y1="21" x2="16" y2="21" />
                <line x1="12" y1="17" x2="12" y2="21" />
              </svg>
            ),
            title: "Specialized Business Application Maintenance",
            desc: "Expert maintenance for ERP, CRM, Tally TSS, and Document Management Systems (DMS), ensuring smooth performance and continuous availability.",
            benefits: [
              "ERP Excellence",
              "CRM Optimization",
              "Tally TSS Support",
              "DMS Maintenance",
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
                <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
              </svg>
            ),
            title: "Cloud Application & Infrastructure Maintenance",
            desc: "Support for Azure, Office 365, AWS, and hybrid environments, delivering proactive maintenance and performance optimization.",
            benefits: [
              "Azure Monitoring",
              "AWS Management",
              "SaaS Optimization",
              "Infrastructure Health",
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
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <circle cx="12" cy="11" r="3" />
                <path d="M7 11h2l2 2 4-4" />
              </svg>
            ),
            title: "Software Security & Vulnerability Management",
            desc: "Regular security audits, patch management, and compliance checks to protect applications from cyber threats and meet UAE standards.",
            benefits: [
              "Security Audits",
              "Patch Governance",
              "Threat Protection",
              "Compliance Checks",
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
                <polyline points="12 6 12 12 16 14" />
              </svg>
            ),
            title: "24/7 Monitoring & Emergency Software Support",
            desc: "Rapid incident response and emergency support with defined SLAs to minimize downtime and ensure business continuity.",
            benefits: [
              "Round-the-clock Monitoring",
              "Service Level Guarantees",
              "Incident Response",
              "Stability Assurance",
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
                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
              </svg>
            ),
            title: "Strategic Software Upgrades & Migrations",
            desc: "Management of planned upgrades and migrations with seamless execution and post-migration support for a risk-free transition.",
            benefits: [
              "Version Control",
              "Data Integrity",
              "Seamless Migrations",
              "Stability Upgrades",
            ],
          },
        ]}
      />

      <CommonWhyChoose
        heading="Benefits of Our Software Maintenance for Businesses"
        subheading="Website Development Agency’s software maintenance services in Dubai deliver measurable business value by improving system reliability, reducing costs, and protecting critical applications across the UAE."
        reasons={[
          {
            title: "Enhanced Performance & Reliability",
            description:
              "Regular maintenance ensures smooth operations, consistent uptime, faster response times, and optimized system performance for business-critical applications.",
            icon: (
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m12 14 4-4" />
                <path d="M3.34 19a10 10 0 1 1 17.32 0" />
              </svg>
            ),
          },
          {
            title: "Reduced Downtime & Operational Costs",
            description:
              "Proactive monitoring and timely fixes minimize unexpected disruptions, extend software lifespan, and significantly reduce maintenance and recovery expenses.",
            icon: (
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m19 21-7-7-7 7" />
                <rect x="3" y="3" width="18" height="13" rx="2" />
              </svg>
            ),
          },
          {
            title: "Improved Security & Compliance",
            description:
              "Our security-focused maintenance strengthens threat protection, applies timely patches, and supports compliance with UAE regulations and data protection standards.",
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
            title: "Extended Software Lifespan & Maximized ROI",
            description:
              "Ongoing optimization and upgrades increase software longevity, protect technology investments, and maximize return on investment (ROI) over time.",
            icon: (
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 2v20" />
                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
              </svg>
            ),
          },
        ]}
      />

      <CloudPartnerSection
        title="Why Choose Us for Software Maintenance in Dubai"
        description="Website Development Agency is a trusted partner for software maintenance in Dubai, combining technical expertise, transparent processes, and local market knowledge to deliver reliable, long-term application support."
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
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            ),
            title: "Our Expertise & Certified Professionals",
            desc: "Our team consists of certified software engineers and IT specialists with extensive experience maintaining enterprise and cloud-based applications across multiple industries.",
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
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
            ),
            title:
              "Transparent Service Level Agreements (SLAs) & Dedicated Support",
            desc: "We offer clear SLAs, defined response times, and dedicated support teams, ensuring reliable communication, accountability, and consistent service delivery.",
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
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            ),
            title:
              "Local Presence & Understanding of Dubai's Business Landscape",
            desc: "With a strong presence in Dubai, we understand regional business practices, compliance requirements, and regulatory standards, enabling tailored, locally aligned software maintenance solutions.",
          },
        ]}
      />

      <CommonFinancialImpact
        heading="Software Maintenance Costs in Dubai"
        subheading="Website Development Agency offers transparent, scalable software maintenance pricing in Dubai, designed to align with your business size, application complexity, and long-term technology goals."
        costFactors={{
          title: "Factors Influencing Software Maintenance Costs",
          description:
            "Several technical and operational components determine the final maintenance cost for your applications in the UAE.",
          factors: [
            "Application Complexity",
            "Technology Stack Used",
            "Total Number of Systems",
            "Security Requirements",
            "SLA Requirements",
          ],
        }}
        roiData={{
          title: "Maximizing ROI with Affordable Software Maintenance",
          description:
            "Professional maintenance reduces unexpected costs and maximizes your long-term technology investment.",
          metrics: [
            { label: "Downtime reduction", value: "Up to 90%" },
            { label: "Security incidents", value: "Minimization" },
            { label: "Maintenance efficiency", value: "Improvement" },
            { label: "Longevity", value: "Extended" },
          ],
        }}
        pricingModels={[
          {
            name: "Custom AMCs",
            description:
              "Flexible Annual Maintenance Contracts tailored to your specific service scope and support levels.",
          },
          {
            name: "SLA-Based Support",
            description:
              "Pricing tiers matching your required response times and business criticality.",
          },
          {
            name: "Scalable Plans",
            description:
              "Cost-effective maintenance for startups and enterprises, scaling with your growth.",
          },
        ]}
      />

      <LocationService activeLocation="dubai" />
      <CommonFaqSection
        title="Frequently Asked Questions (FAQ)"
        subtitle="Find answers to common questions about our software maintenance services and how we help businesses in Dubai maintain stable, secure applications."
        faqs={[
          {
            q: "What is software maintenance?",
            a: "It involves updating, fixing, and enhancing software to ensure efficient performance, security, and compatibility with evolving technologies.",
          },
          {
            q: "What are the main types of software maintenance?",
            a: "The main types are corrective, adaptive, perfective, and preventive maintenance, covering fixes, upgrades, improvements, and proactive system care.",
          },
          {
            q: "Do you offer specialized support for applications like ERP or cloud software?",
            a: "Yes, we support ERP, CRM, Tally TSS, DMS, Microsoft Azure, Office 365, and other cloud-based applications.",
          },
          {
            q: "How can software maintenance reduce my operational costs?",
            a: "Regular maintenance prevents system failures, reduces downtime, extends software lifespan, and avoids expensive emergency repairs.",
          },
          {
            q: "What should I look for when choosing a software maintenance provider in Dubai?",
            a: "Look for experienced professionals, clear SLAs, dedicated support, security expertise, and strong local market knowledge.",
          },
          {
            q: "What factors influence the cost of an IT annual maintenance contract in Dubai?",
            a: "Costs depend on software complexity, service scope, SLA requirements, and the number of systems or users supported.",
          },
        ]}
      />

      <CommonCtaSection
        imageUrl={ContactImage}
        title="Need Expert Software Maintenance?"
        subtitle="Ensure your applications are always performing at their best with our professional support services."
      />
    </>
  );
};

export default page;
