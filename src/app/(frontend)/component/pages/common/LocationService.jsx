"use client";
import React, { useState } from "react";
import styles from "@/app/(frontend)/assets/style/common/locationService.module.css";
import Link from "next/link";
import Image from "next/image";
import dubailocationimg from "@/app/(frontend)/assets/images/locationservice/dubai.png";
import abudhabiLocationimg from "@/app/(frontend)/assets/images/locationservice/abudhabi.png";
import sharjahLocationimg from "@/app/(frontend)/assets/images/locationservice/sharjah.png";
import ajmanLocationimg from "@/app/(frontend)/assets/images/locationservice/ajman.png";
import rasalkhaimahLocationimg from "@/app/(frontend)/assets/images/locationservice/rasalkhaimah.png";
import fujairahLocationimg from "@/app/(frontend)/assets/images/locationservice/fujairah.png";
import alainLocationimg from "@/app/(frontend)/assets/images/locationservice/alain.png";
import ummalquwainLocationimg from "@/app/(frontend)/assets/images/locationservice/ummalquwain.png";

const defaultLocationsList = [
  {
    label: "Dubai",
    officeTitle: "Website Development in Dubai",
    address:
      "Location: G6, Al Meheri Plaza, opp DBC Building, <br /> Al Khabaisi Area, Deira Dubai - 81577",
    phone: "+971 52 283 1655",
    email: "info@websitedevelopmentagency.ae",
    image: dubailocationimg,
  },
  {
    label: "Abu Dhabi",
    officeTitle: "Website Development in Abu Dhabi",
    address:
      "Location: G6, Al Meheri Plaza, opp DBC Building, <br /> Al Khabaisi Area, Deira Dubai - 81577",
    phone: "+971 52 283 1655",
    email: "info@websitedevelopmentagency.ae",
    image: abudhabiLocationimg,
  },
  {
    label: "Sharjah",
    officeTitle: "Website Development in Sharjah",
    address:
      "Location: G6, Al Meheri Plaza, opp DBC Building, <br /> Al Khabaisi Area, Deira Dubai - 81577",
    phone: "+971 52 283 1655",
    email: "info@websitedevelopmentagency.ae",
    image: sharjahLocationimg,
  },
  {
    label: "Ajman",
    officeTitle: "Website Development in Ajman",
    address:
      "Location: G6, Al Meheri Plaza, opp DBC Building, <br /> Al Khabaisi Area, Deira Dubai - 81577",
    phone: "+971 52 283 1655",
    email: "info@websitedevelopmentagency.ae",
    image: ajmanLocationimg,
  },
  {
    label: "Ras Al Khaimah",
    officeTitle: "Web Development in Ras Al Khaimah",
    address:
      "Location: G6, Al Meheri Plaza, opp DBC Building, <br /> Al Khabaisi Area, Deira Dubai - 81577",
    phone: "+971 52 283 1655",
    email: "info@websitedevelopmentagency.ae",
    image: rasalkhaimahLocationimg,
  },
  {
    label: "Fujairah",
    officeTitle: "Website Development in Fujairah",
    address:
      "Location: G6, Al Meheri Plaza, opp DBC Building, <br /> Al Khabaisi Area, Deira Dubai - 81577",
    phone: "+971 52 283 1655",
    email: "info@websitedevelopmentagency.ae",
    image: fujairahLocationimg,
  },
  {
    label: "Al Ain",
    officeTitle: "Website Development in Al Ain",
    address:
      "Location: G6, Al Meheri Plaza, opp DBC Building, <br /> Al Khabaisi Area, Deira Dubai - 81577",
    phone: "+971 52 283 1655",
    email: "info@websitedevelopmentagency.ae",
    image: alainLocationimg,
  },
  {
    label: "Umm Al Quwain",
    officeTitle: "Website Development in Umm Al Quwain",
    address:
      "Location: G6, Al Meheri Plaza, opp DBC Building, <br /> Al Khabaisi Area, Deira Dubai - 81577",
    phone: "+971 52 283 1655",
    email: "info@websitedevelopmentagency.ae",
    image: ummalquwainLocationimg,
  },
];

const LocationService = ({
  title = "Our Service Locations Across UAE",
  description = "Looking for the best web development agency in UAE? WD Agency offers expert web design and development services across all locations. We create websites that drive results.",
  locations = defaultLocationsList,
  activeLocation = "Dubai",
}) => {
  const initialIndex = locations.findIndex(
    (loc) => loc.label.toLowerCase() === activeLocation?.toLowerCase()
  );
  const [activeIndex, setActiveIndex] = useState(
    initialIndex !== -1 ? initialIndex : 0
  );

  const activeData = locations[activeIndex];

  const handleLocationClick = (e, index) => {
    e.preventDefault();
    setActiveIndex(index);
  };

  return (
    <div
      className={`frame-1200 py-50 sm-pt-0 sm-pb-30 sm-px-20 ${styles.locationService}`}
    >
      <h2>{title}</h2>
      <p className="pt-20 pb-40">{description}</p>
      <div className={styles.grid}>
        <div>
          <h3 className="pb-10">{activeData.officeTitle}</h3>
          <p
            className="pb-20"
            dangerouslySetInnerHTML={{ __html: activeData.address }}
          />
          <a
            href={`tel:${activeData.phone}`}
            className="flex items-center gap-10 pb-5"
          >
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M24.4443 20.0053L21.4075 17.8836C21.0104 17.6066 20.5462 17.4606 20.0649 17.4606C19.2995 17.4606 18.5811 17.836 18.1434 18.464L17.4385 19.4743C16.257 18.6819 14.9386 17.5755 13.6818 16.3189C12.4253 15.0624 11.3191 13.744 10.5269 12.5625L11.5368 11.8576C12.0515 11.4991 12.3953 10.9622 12.5045 10.346C12.6134 9.73035 12.4761 9.10825 12.1172 8.59326L9.99593 5.55646C9.55236 4.922 8.83664 4.54297 8.0811 4.54297C7.81926 4.54297 7.56246 4.5892 7.31801 4.67938C7.04038 4.78192 6.78174 4.90781 6.52814 5.06711L6.10883 5.36237C6.004 5.44385 5.9065 5.53311 5.81311 5.6265C5.30156 6.13782 4.93856 6.7851 4.73371 7.55048C3.85961 10.8271 6.02506 15.782 10.122 19.879C13.5626 23.3195 17.696 25.4568 20.9088 25.4573C21.459 25.4573 21.9779 25.3932 22.4508 25.2668C23.2161 25.0622 23.8634 24.6992 24.3752 24.1874C24.4681 24.0945 24.5569 23.997 24.6521 23.8739L24.9476 23.4523C25.0921 23.2216 25.2177 22.9629 25.3216 22.6832C25.6789 21.7173 25.3182 20.616 24.4443 20.0053Z"
                fill="#787878"
              />
            </svg>
            {activeData.phone}
          </a>
          <a
            href={`mailto:${activeData.email}`}
            className="flex items-center gap-10 pb-30"
          >
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.5072 18.3803C16.7608 18.8779 15.8938 19.1409 15 19.1409C14.1062 19.1409 13.2393 18.8779 12.4929 18.3803L0.199746 10.1846C0.131543 10.1392 0.0650977 10.0918 0 10.043V23.4725C0 25.0123 1.24951 26.2342 2.7617 26.2342H27.2382C28.778 26.2342 29.9999 24.9847 29.9999 23.4725V10.043C29.9347 10.0918 29.8682 10.1394 29.7998 10.1849L17.5072 18.3803Z"
                fill="#787878"
              />
              <path
                d="M1.1748 8.72219L13.4679 16.9179C13.9333 17.2282 14.4666 17.3833 14.9999 17.3833C15.5333 17.3833 16.0667 17.2281 16.5321 16.9179L28.8252 8.72219C29.5608 8.23205 30 7.41174 30 6.52639C30 5.00406 28.7615 3.76562 27.2392 3.76562H2.76076C1.2385 3.76568 0 5.00412 0 6.52785C0 7.41174 0.439219 8.23205 1.1748 8.72219Z"
                fill="#787878"
              />
            </svg>
            {activeData.email}
          </a>
          <div className={`${styles.footerbox}`}>
            {locations.map((item, index) => (
              <Link
                key={index}
                href={item.url || "#"}
                className={activeIndex === index ? styles.active : ""}
                onClick={(e) => handleLocationClick(e, index)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <div className={styles.locationimg}>
            <Image
              src={activeData.image || activeData.locationImage}
              alt={activeData.label}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationService;
