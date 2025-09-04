"use client";
import React from "react";
import { motion } from "framer-motion";
import style from "@/app/(frontend)/assets/style/home/bestAgency.module.css";
import highEndAbility from "@/app/(frontend)/assets/images/icons/high-end-ability.svg";
import bestPractices from "@/app/(frontend)/assets/images/icons/best-practices.svg";
import spectacular from "@/app/(frontend)/assets/images/icons/spectacular.svg";
import brandIdentity from "@/app/(frontend)/assets/images/icons/brand-identity.svg";
import deliverTheBestResults from "@/app/(frontend)/assets/images/icons/deliver-the-best-results.svg";
import webSolutionBanner2 from "@/app/(frontend)/assets/images/web-solution-banner-2.webp";
import webSolutionBanner from "@/app/(frontend)/assets/images/web-solution-banner.webp";
import Image from "next/image";

const BestAgency = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <div className="frame-1200 py-100 sm-py-50 ">
      {/* Heading */}
      <motion.h2
        className="text-center mb-20 sm-mb-10 frame-900 sm-text-start"
        initial="hidden"
        whileInView="show"
        variants={fadeUp}
        viewport={{ once: true }}
      >
        We are The Best Website Design & Development Agency in Dubai, UAE
      </motion.h2>
      <motion.p
        className="text-center mb-50 sm-mb-20 sm-text-start"
        initial="hidden"
        whileInView="show"
        variants={fadeUp}
        transition={{ delay: 0.2 }}
        viewport={{ once: true }}
      >
        Web Design Company in Dubai for Scalable & Responsive Websites
      </motion.p>

      {/* Icon Boxes */}
      <div className={style.bestAgencyContainerBox}>
        {[
          { img: highEndAbility, text: "Among the leading website design companies in Dubai, Website Development Agency holds high-end ability in stunning website design." },
          { img: bestPractices, text: "We adapt the best practices, latest frameworks, and technologies to align with the trends and deliver more than client expectations." },
          { img: spectacular, text: "We are the best web design company in Dubai, recognized and endorsed by trusted platforms for our spectacular work portfolio." },
          { img: brandIdentity, text: "We put our extra efforts to meet your needs and mirror your brand identity with qualified top-level experts" },
          { img: deliverTheBestResults, text: "We are the best web design experts to undertake complex challenges, deliver the best results, and break the barrier of success for our beloved clients." },

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
            <Image src={item.img} alt="Icon" />
            <p className="fw-500">{item.text}</p>
          </motion.div>
        ))}
        <div className=''>
        </div>
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
            We are the most trusted and experienced Dubai-based web design
            agency delivering cross-platform web solutions and enhancing your
            digital presence with our core expertise in web design and
            development. At Website Development Agency, we strive to deliver
            personalized web design solutions considering your business strength
            and brand identity. With high-end coding expertise and
            industry-specific knowledge, we deliver what we promise to our
            clients. We excel in complete web design and development services
            that ensure a smooth user experience, easy navigation, and
            cutting-edge functionality.
          </li>
          <li>
            We don't only create websites, we help businesses generate higher
            revenue across search engines. We employ smooth navigation,
            user-centric interface, and latest design technologies for fast
            loading speed, intuitive user experience, and SEO-friendliness. We
            know the most important components of a website are usability and
            visibility, which make your digital storefront apart from others.
            Our approach to website development combines modern design standards
            along with robust functionality that brings your digital presence to
            life.
          </li>
        </ul>
        <Image src={webSolutionBanner} alt="Web Solution Banner" />
      </motion.div>

      {/* Second Banner Section */}
      <motion.div
        className={style.bestAgencynextContainer}
        initial="hidden"
        whileInView="show"
        variants={fadeUp}
        transition={{ delay: 0.3 }}
        viewport={{ once: true }}
      >
        <Image src={webSolutionBanner2} alt="Web Solution Banner" />
        <ul>
          <li>
            We blend the power of branding with cutting-edge technology to
            develop performance-driven websites. As a leading website design
            company, our creative professionals design feature-rich websites
            that go beyond normal and connect your customers to you directly.
            Our commitment is to deliver beyond your expectations, and we are
            meant to be the best web development agency in Dubai. We are
            well-renowned around the industry for our premium services and
            guarantee your business growth with websites that speak for your
            brand.
          </li>
          <li>
            Our website development services in Dubai are designed with
            collective industry-specific experts, best design professionals, and
            experienced tech geeks who do not fail to deliver the best
            solutions. All aspects of your project are future-proof with us as
            we put a strong focus on efficiency of a website, user experience,
            features, and functionalities. Website Development Agency is a
            professional website development agency where we provide customized
            solutions for every project with fast, reliable, and efficient
            coding practices.
          </li>
        </ul>
      </motion.div>
    </div>
  );
};

export default BestAgency;
