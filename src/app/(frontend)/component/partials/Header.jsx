"use client";
import { useState } from "react";
import styles from "@/app/(frontend)/assets/style/partials/header.module.css";
import Link from "next/link";
import Image from "next/image";
import logo from "@/app/(frontend)/assets/images/logo.png"; 
export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={`frame-1200 ${styles.header}`}>
      <div className={styles.logo}>
      <Image src={logo} alt="Logo" width={211} height={50} priority />
      </div>

      {/* Desktop Nav */}
      <nav className={`${styles.nav} ${isOpen ? styles.open : ""}`}>
        <Link href="/">Home</Link>
        <Link href="/about">About Us</Link>
        <div className={styles.dropdown}>
          <button>Services ▾</button>
          <div className={styles.dropdownMenu}>
            <Link href="/services/web">Web Development</Link>
            <Link href="/services/seo">SEO</Link>
          </div>
        </div>
        <div className={styles.dropdown}>
          <button>Resources ▾</button>
          <div className={styles.dropdownMenu}>
            <Link href="/resources/blog">Blog</Link>
            <Link href="/resources/case-studies">Case Studies</Link>
          </div>
        </div>
        <Link href="/portfolio">Portfolio</Link>
        <Link href="/contact-us">Contact</Link>
        <Link href="/quote" className={styles.quoteBtn}>
          Get Quote
        </Link>
      </nav>

      {/* Mobile Menu Toggle */}
      <button
        className={styles.mobileToggle}
        onClick={() => setIsOpen(!isOpen)}
      >
        ☰
      </button>
    </header>
  );
}
