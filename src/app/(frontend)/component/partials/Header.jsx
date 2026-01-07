"use client";
import { useState, useRef } from "react";
import styles from "@/app/(frontend)/assets/style/partials/header.module.css";
import Link from "next/link";
import Image from "next/image";
import logo from "@/app/(frontend)/assets/images/logo.png";

const servicesData = [
  {
    category: "Web Design",
    items: [
      { title: "UI/UX Design", href: "/services/ui-ux-design" },
      {
        title: "Wireframing & Pro.",
        href: "/services/wireframing-prototyping",
      },
      { title: "Branding", href: "/services/branding" },
    ],
  },
  {
    category: "Web Development",
    items: [
      { title: "Frontend Development", href: "/services/frontend-development" },
      {
        title: "Full-Stack Development",
        href: "/services/full-stack-development",
      },
      { title: "Static Website", href: "/services/static-website-development" },
      {
        title: "Dynamic Websites",
        href: "/services/dynamic-website-development",
      },
      {
        title: "Website Migration",
        href: "/services/website-migration-service",
      },
    ],
  },
  {
    category: "Software",
    items: [
      { title: "CRM Software", href: "/services/crm-software" },
      { title: "Enterprise Software", href: "#" },
      { title: "Cloud Applications", href: "/services/cloud-applications" },
      { title: "Legacy Modernization", href: "/services/legacy-modernization" },
      { title: "Software Maintenance", href: "/services/software-maintenance" },
    ],
  },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleMobileDropdown = (menu) => {
    setActiveDropdown((prev) => (prev === menu ? null : menu));
  };

  return (
    <header className={`frame-1200 ${styles.header}`}>
      <div className={styles.logo}>
        <Link href="/">
          <Image
            src={logo}
            alt="Logo"
            width={211}
            height={50}
            priority
            style={{ width: "auto", height: "auto" }}
          />
        </Link>
      </div>

      <nav className={`${styles.nav} ${isOpen ? styles.open : ""}`}>
        <Link href="/">Home</Link>
        <Link href="/about-us">About Us</Link>

        {/* Services Mega Menu */}
        <div className={styles.dropdown}>
          <button onClick={() => toggleMobileDropdown("services")}>
            Services ▾
          </button>
          <div
            className={`${styles.dropdownMenu2} ${
              activeDropdown === "services" ? styles.mobiledropdownActive : ""
            }`}
          >
            {servicesData.map((service, idx) => (
              <div key={idx} className={styles.dropdownCategory}>
                <h4>{service.category}</h4>
                {service.items.map((item, i) => (
                  <Link key={i} href={item.href}>
                    <span className={styles.iconhiden}>➤</span> {item.title}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Technology Dropdown */}
        <div className={styles.dropdown}>
          <button onClick={() => toggleMobileDropdown("tech")}>
            Technology ▾
          </button>
          <div
            className={`${styles.dropdownMenu} ${
              activeDropdown === "tech" ? styles.mobiledropdownActive : ""
            }`}
          >
            <Link href="/platforms/php-website-development">
              <span className={styles.iconhiden}>➤</span> PHP
            </Link>
            <Link href="/platforms/woo-commerce-website-development">
              <span className={styles.iconhiden}>➤</span> W-commerce
            </Link>
            <Link href="/platforms/wordpress-website-development">
              <span className={styles.iconhiden}>➤</span> WordPress
            </Link>
            <Link href="/platforms/react-js-website-development">
              <span className={styles.iconhiden}>➤</span> ReactJS
            </Link>
            <Link href="/platforms/shopify-website-development">
              <span className={styles.iconhiden}>➤</span> Shopify
            </Link>
            <Link href="/platforms/nodejs-website-development">
              <span className={styles.iconhiden}>➤</span> NodeJS
            </Link>
            <Link href="/platforms/laravel-website-development">
              <span className={styles.iconhiden}>➤</span> Laravel
            </Link>
            <Link href="/platforms/angular-website-development">
              <span className={styles.iconhiden}>➤</span> Angular
            </Link>
            <Link href="/platforms/drupal-website-development">
              <span className={styles.iconhiden}>➤</span> Drupal
            </Link>
          </div>
        </div>

        <Link href="/blog">Blog</Link>
        <Link href="/case-studies">Portfolio</Link>
        <Link href="/cost-calculator">Cost Calculator</Link>

        <Link href="/contact-us" className={styles.quoteBtn}>
          Get Quote
        </Link>
      </nav>

      <button
        className={styles.mobileToggle}
        onClick={() => setIsOpen((s) => !s)}
        aria-label="Toggle menu"
      >
        ☰
      </button>
    </header>
  );
}
