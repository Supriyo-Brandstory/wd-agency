"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "@/app/(frontend)/assets/style/common/subNav.module.css";

const SubNav = ({
  items = [
    { name: "PHP", link: "/platforms/php-website-development" },
    { name: "W-commerce", link: "/platforms/woo-commerce-website-development" },
    { name: "WordPress", link: "/platforms/wordpress-website-development" },
    { name: "ReactJS", link: "/platforms/react-js-website-development" },
    { name: "Shopify", link: "/platforms/shopify-website-development" },
    { name: "NodeJS", link: "/platforms/nodejs-website-development" },
    { name: "Laravel", link: "/platforms/laravel-website-development" },
    { name: "Angular", link: "/platforms/angular-website-development" },
    { name: "Drupal", link: "/platforms/drupal-website-development" },
  ],
  title = "E-Commerce",
}) => {
  const pathname = usePathname();

  return (
    <section className={styles.ecommerceSubNav}>
      <div className={`frame-1200 sm-px-20 ${styles.container}`}>
        <div className={styles.breadcrumb}>
          <Link href="/">
            <svg
              className={styles.homeIcon}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
          </Link>
          <span className={styles.slash}>/ {title}</span>
        </div>
        <div className={styles.separator} />
        <div className={styles.navLinks}>
          {items.map((item, index) => {
            const isActive = pathname === item.link;
            return (
              <Link
                key={index}
                href={item.link}
                className={`${styles.navItem} ${isActive ? styles.active : ""}`}
              >
                <span className={styles.iconhiden}>➤</span> {item.name}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SubNav;
