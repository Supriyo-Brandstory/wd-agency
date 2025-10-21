"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import style from "@/app/(frontend)/assets/style/home/bestAgency.module.css";
import highEndAbility from "@/app/(frontend)/assets/images/icons/high-end-ability.svg";
import bestPractices from "@/app/(frontend)/assets/images/icons/best-practices.svg";
import spectacular from "@/app/(frontend)/assets/images/icons/spectacular.svg";
import brandIdentity from "@/app/(frontend)/assets/images/icons/brand-identity.svg";
import deliverTheBestResults from "@/app/(frontend)/assets/images/icons/deliver-the-best-results.svg";
import webSolutionBanner from "@/app/(frontend)/assets/images/web-solution-banner.webp";
import Image from "next/image";

const BestAgency = () => {
  const [isOpen, setIsOpen] = useState({ "1": false, "2": false });
  const [isMobile, setIsMobile] = useState(false);

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  // Detect screen size
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      if (!mobile) {
        setIsOpen({ "1": true, "2": true }); // Both sections open on desktop
      } else {
        setIsOpen({ "1": false, "2": false }); // Closed by default on mobile
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleClickOpen = (section) => {
    if (!isMobile) return; // Disable toggle on desktop
    setIsOpen((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  return (
    <div className="frame-1200 py-100 sm-pb-50 sm-px-20 sm-pt-0">
      {/* Heading */}
      <motion.h2
        className="text-center mb-20 sm-mb-20 frame-900 sm-text-start"
        initial="hidden"
        whileInView="show"
        variants={fadeUp}
        viewport={{ once: true }}
      >
        We are The Best Website Design & Development Agency in Dubai
      </motion.h2>
      <motion.p
        className="text-center mb-50 sm-mb-20 sm-text-start"
        initial="hidden"
        whileInView="show"
        variants={fadeUp}
        transition={{ delay: 0.2 }}
        viewport={{ once: true }}
      >
        Creating Digital Experiences That Stand Out- Web Design Company Dubai
      </motion.p>

      {/* Icon Boxes */}
      <div className={style.bestAgencyContainerBox}>
        {[
          {
            img: highEndAbility,
            alt:"High End Ability in Website Design and Development",
            text: "Among the best website design companies in Dubai, WD Agency holds high-end ability in creating stunning, functional, and user-friendly websites.",
          },
          {
            img: bestPractices,
            alt:"We Follow Website Design and Development Best Practices",
            text: "We adapt the best practices, latest web design frameworks, and technologies to align with the trends and deliver more than your expectations.",
          },
          {
            img: spectacular,
            alt:"High End Ability in Website Design and Development",
            text: "We are the best web design company in Dubai, recognized and endorsed by trusted platforms for our spectacular work portfolio.",
          },
          {
            img: brandIdentity,
            alt:"Top-level expertise in Website Design and Development",
            text: "We put our extra efforts to meet your needs and mirror your brand identity with qualified top-level expert web designers.",
          },
          {
            img: deliverTheBestResults,
            alt:"We Deliver The Best Website Design and Development Services",
            text: "We are the best website development experts to undertake complex challenges, deliver the best website, and break the barrier of success for our beloved clients.",
          },
        ].map((item, index) => (
          <motion.div
            key={index}
            className={style.innerBestAgencyBox}
            initial="hidden"
            whileInView="show"
            variants={fadeUp}
            transition={{ delay: index * 0.15 }}
            viewport={{ once: true }}
          >
            <Image src={item.img} alt={item.alt} />
            <p className="fw-500">{item.text}</p>
          </motion.div>
        ))}
        <div></div>
      </div>

      {/* First Banner Section */}
      <motion.div
        className={`${style.bestAgencynextContainer} col-reverse`}
        initial="hidden"
        whileInView="show"
        variants={fadeUp}
        transition={{ delay: 0.3 }}
        viewport={{ once: true }}
      >
        <ul>
          <li>
            We are the most affordable and probably the best Dubai-based web
            design agency delivering cross-platform web solutions for enhancing
            the digital presence of your business. With our core expertise in
            web design and development, we strive to deliver personalized web
            design solutions considering your business that highlight your
            strengths and unique identity. With high-end coding expertise and
            industry-specific knowledge, WD Agency excels in complete web design
            and development services.
          </li>

          {isOpen["1"] && (
            <>
              <li>
                We don't only create websites, we help businesses generate
                higher revenue with a strong digital presence. Our experts
                employ smooth navigation, a user-centric interface, and the
                latest design technologies for fast loading speed, intuitive
                user experience, and SEO-friendliness. We know the most
                important component of a website is user experience, which makes
                your digital storefront stand out from others.
              </li>
            
            </>
          )}
          {isMobile && (
            <>
            <button
              className="blue-btn mr-10 mb-10"
              onClick={() => handleClickOpen("1")}
            >
              {isOpen["1"] ? "Read Less" : "Read More"}
            </button>
          <button className="white-btn mb-10">Contact Us</button>
</>
          )}
        </ul>
        <Image src={webSolutionBanner} alt="Web Design agency in Dubai, UAE - WD Agency" />
      </motion.div>

      
    </div>
  );
};

export default BestAgency;
