"use client";
import { useState, useRef, useEffect } from "react";
import styles from "@/app/(frontend)/assets/style/partials/header.module.css";
import Link from "next/link";
import Image from "next/image";
import logo from "@/app/(frontend)/assets/images/logo.png";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [showMegaMenu, setShowMegaMenu] = useState(false);
  const [megaTop, setMegaTop] = useState(null); // initially null (SSR safe)
  const [isClient, setIsClient] = useState(false);
  const headerRef = useRef(null);
  const hoverTimeoutRef = useRef(null);

  const servicesData = {
    design: [
      { title: "UI/UX Design", href: "#" },
      { title: "Wireframing", href: "#" },
      { title: "Prototyping", href: "#" },
      { title: "Branding", href: "#" }
    ],
    development: [
      { title: "Web Development", href: "#" },
      { title: "Frontend Development", href: "#" },
      { title: "Full Stack Development", href: "#" },
      { title: "PHP Web Development", href: "#" }
    ],
    software: [
      { title: "CRM Software", href: "#" },
      { title: "Enterprise Software", href: "#" },
      { title: "Cloud Applications", href: "#" },
      { title: "Legacy Modernization", href: "#" }
    ]
  };

  useEffect(() => {
    setIsClient(true); // mark that we are on client
    const updateTop = () => {
      if (headerRef.current) {
        const rect = headerRef.current.getBoundingClientRect();
        setMegaTop(rect.bottom);
      }
    };
    updateTop();
    window.addEventListener("resize", updateTop);
    window.addEventListener("scroll", updateTop, { passive: true });
    return () => {
      window.removeEventListener("resize", updateTop);
      window.removeEventListener("scroll", updateTop);
    };
  }, []);

  useEffect(() => {
    return () => {
      if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    };
  }, []);

  const handleServicesClick = () => {
    if (isClient && window.innerWidth <= 768) setShowMegaMenu((s) => !s);
  };

  const handleMouseEnter = () => {
    if (isClient && window.innerWidth > 768) {
      if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
      setShowMegaMenu(true);
    }
  };

  const handleMouseLeave = () => {
    if (isClient && window.innerWidth > 768) {
      hoverTimeoutRef.current = setTimeout(() => setShowMegaMenu(false), 300);
    }
  };

  const closeMegaMenu = () => setShowMegaMenu(false);

  return (
    <>
      <header ref={headerRef} className={`frame-1200 ${styles.header}`}>
        <div className={styles.logo}>
          <Link href="/">
                      <Image src={logo} alt="Logo" width={211} height={50} priority />

          </Link>
        </div>

        <nav className={`${styles.nav} ${isOpen ? styles.open : ""}`}>
          <Link href="/">Home</Link>
          <Link href="/about-us">About Us</Link>

          <div
            className={styles.dropdown}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button
              className={showMegaMenu ? styles.activeBtn : ""}
              onClick={handleServicesClick}
              aria-haspopup="true"
              aria-expanded={showMegaMenu}
            >
              Services ▾
            </button>
          </div>

          <div className={styles.dropdown}>
            <button>Resources ▾</button>
            <div className={styles.dropdownMenu}>
              <Link href="#">Blog</Link>
              <Link href="#">Case Studies</Link>
            </div>
          </div>

          <Link href="#">Portfolio</Link>
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

      {isClient && (
        <div
          className={styles.megaDropdown}
          style={{
            top: window.innerWidth > 768 && megaTop !== null ? `${megaTop}px` : "65px",
            display: showMegaMenu ? "block" : "none",
            position: window.innerWidth > 768 ? "absolute" : "fixed",
            zIndex: window.innerWidth > 768 ? 999 : 1001,
          }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <button className={styles.megaCloseBtn} onClick={closeMegaMenu} aria-label="Close menu">
            ✕
          </button>

          <div className={styles.megaDropdownContent}>
            <div className={styles.column}>
              <h3>Design & UX</h3>
              {servicesData.design.map((item, idx) => (
                <Link key={idx} href={item.href}>{item.title}</Link>
              ))}
            </div>

            <div className={styles.column}>
              <h3>Development</h3>
              {servicesData.development.map((item, idx) => (
                <Link key={idx} href={item.href}>{item.title}</Link>
              ))}
            </div>

            <div className={styles.column}>
              <h3>Software & Cloud</h3>
              {servicesData.software.map((item, idx) => (
                <Link key={idx} href={item.href}>{item.title}</Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
