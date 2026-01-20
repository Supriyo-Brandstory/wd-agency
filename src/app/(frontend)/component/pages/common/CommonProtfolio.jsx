import React from "react";
import styles from "@/app/(frontend)/assets/style/common/commonProtfolio.module.css";

import Image from "next/image";

import protfolio1 from "@/app/(frontend)/assets/images/protfolio/1.webp";
import protfoliologo1 from "@/app/(frontend)/assets/images/protfolio/varsha-logistics-pvt-ltd.webp";
import protfolio2 from "@/app/(frontend)/assets/images/protfolio/2.webp";
import protfoliologo2 from "@/app/(frontend)/assets/images/protfolio/ferns.webp";
import protfolio3 from "@/app/(frontend)/assets/images/protfolio/3.webp";
import protfoliologo3 from "@/app/(frontend)/assets/images/protfolio/kshemavan.webp";
import protfolio4 from "@/app/(frontend)/assets/images/protfolio/4.webp";
import protfoliologo4 from "@/app/(frontend)/assets/images/protfolio/equence.webp";
import Link from "next/link";
const CommonProtfolio = ({
  heding = "Our Website Design Portfolio",
  desc = "We have worked with 500+ clients across Dubai and the United Arab Emirates. See our extensive website design and development portfolio here.",
  protfoliodata = [
    {
      id: "01",
      image: protfolio1,
      alt: "Our Website Design Portfolio - Varsha Logistics Pvt Ltd",
      logo: protfoliologo1,
      alt: "Varsha Logistics Pvt Ltd Logo",
      slug: "varsha-logistics",
    },
    {
      id: "02",
      image: protfolio2,
      alt: "Our Website Design Portfolio - Ferns Real Estate",
      logo: protfoliologo2,
      alt: "Ferns Real Estate Logo",
      slug: "ferns-estates",
    },
    {
      id: "03",
      image: protfolio3,
      alt: "Our Website Design Portfolio - Kshema Vanitha",
      logo: protfoliologo3,
      alt: "Kshema Vanitha Logo",
      slug: "kshemavana",
    },
    {
      id: "04",
      image: protfolio4,
      alt: "Our Website Design Portfolio - Equence",
      logo: protfoliologo4,
      alt: "Equence Logo",
      slug: "equence",
    },
  ],
}) => {
  return (
    <div className={styles.CommonProtfolio}>
      <div className="frame-900 mb-40 sm-px-20">
        <h2 className="text-center sm-text-left mb-20">{heding}</h2>
        <p className="text-center sm-text-left">{desc}</p>
      </div>

      <div className={styles.Protfolio}>
        {protfoliodata.map((protfolio, index) => (
          <div className={styles.ProtfolioBox} key={index}>
            <Image src={protfolio.image} alt="protfolio1" />
            <div className={styles.ctabox}>
              <Image src={protfolio.logo} alt="protfolio1" />
              <Link
                href={
                  protfolio.slug
                    ? `/case-studies/${protfolio.slug}`
                    : "/case-studies"
                }
                className="white-btn"
              >
                See Case Study
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommonProtfolio;
