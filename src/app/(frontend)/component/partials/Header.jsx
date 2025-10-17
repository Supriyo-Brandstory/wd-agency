"use client";
import { useState, useRef } from "react";
import styles from "@/app/(frontend)/assets/style/partials/header.module.css";
import Link from "next/link";
import Image from "next/image";
import logo from "@/app/(frontend)/assets/images/logo.png";

const servicesData = [
  { category: "Design", items: [{ title: "UI/UX Design", href: "#" }, { title: "Wireframing & Pro.", href: "#" }, { title: "Branding", href: "#" }] },
  { category: "Development", items: [{ title: "Frontend Development", href: "#" }, { title: "Full-Stack Development", href: "#" }, { title: "Static Website", href: "#" }, { title: "Dynamic Websites", href: "#" }, { title: "Website Migration", href: "#" }, { title: "Performance Optimization", href: "#" }] },
  { category: "Software", items: [{ title: "CRM Software", href: "#" }, { title: "Enterprise Software", href: "#" }, { title: "Cloud Applications", href: "#" }, { title: "Legacy Modernization", href: "#" }, { title: "Software Maintenance", href: "#" }, { title: "Software Consulting", href: "#" }] }
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [mobileDropdownActive, setMobileDropdownActive] = useState(false);
  const headerRef = useRef(null);

  // Toggle mobile dropdown on click
  const handleMobileDropdown = () => {
    setMobileDropdownActive((prev) => !prev);
  };

  return (
    <header ref={headerRef} className={`frame-1200 ${styles.header}`}>
      <div className={styles.logo}>
        <Link href="/">
          <Image src={logo} alt="Logo" width={211} height={50} priority />
        </Link>
      </div>

      <nav className={`${styles.nav} ${isOpen ? styles.open : ""}`}>
        <Link href="/">Home</Link>
        <Link href="/about-us">About Us</Link>

        <div className={styles.dropdown}>
          <button onClick={handleMobileDropdown}>Services ▾</button>
          <div className={`${styles.dropdownMenu2} ${mobileDropdownActive ? styles.mobiledropdown2active : ""}`}>
            {servicesData.map((service, idx) => (
              <div key={idx} className={styles.dropdownCategory}>
                <h4>{service.category}</h4>
                {service.items.map((item, i) => (
                  <Link key={i} href={item.href}>
                    {item.title}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>

        <Link href="/blog">Blog</Link>
        <Link href="/case-studies">Portfolio</Link>
        <Link href="/contact-us">Contact</Link>
        <Link href="/contact-us" className={styles.quoteBtn}>Get Quote</Link>
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
