"use client";
import React, { useState } from "react";
import styles from "@/app/(frontend)/assets/style/home/faqSection.module.css";
import uparrow from "@/app/(frontend)/assets/images/icons/faquparrow.svg";
import downarrow from "@/app/(frontend)/assets/images/icons/faqdownarrow.svg";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const FaqSection = () => {
  const faqs = [
    {
      q: "Which is the best web development company in Dubai, UAE?",
      a: "Choosing the best web development company in Dubai, UAE depends on finding a partner that is reliable and tech-savvy. At WD Agency, we are recognizes as one of the leading web development companies because of our commitment to delivering innovative, user-focused, and performance-driven websites. We believe that any agency that works with transparency, dedication, and a future-focused approach can earn the trust of businesses and that’s exactly what we strive for in every project.",
    },
    {
      q: "Why does WD Agency prioritize on custom website design?",
      a: "Because no two businesses are the same, their websites shouldn’t be either. At WD Agency, we focus on creating custom designs that reflect your brand personality, meet your functional needs, and connect with your audience. A tailored website not only enhances credibility but also gives you the freedom to scale and evolve as your business grows, something a ready-made template can never truly achieve.",
    },
    {
      q: "Which content management system (CMS) is right for my website?",
      a: "At WD Agency, we understand that the right CMS can make managing your website simple and effective. The choice depends on your business goals, scalability needs, and technical flexibility. Whether it’s a user-friendly option like WordPress, a robust platform like Drupal, or a fully custom-built CMS, our team guides you in selecting and implementing the solution that ensures long-term efficiency, security, and ease of use.  ",
    },
    {
      q: "Why is WD Agency the right web design partner for my business in the UAE?",
      a: "At WD Agency, we combine creativity, technology, and strategy to deliver websites that truly drive business growth. With expertise in custom development, responsive design, and scalable solutions, we focus on aligning every project with your brand goals and customer expectations. Our collaborative approach, transparent process, and strong client relationships make us a trusted choice for businesses across the UAE.",
    },
    {
      q: "What types of businesses benefit from WD Agency’s web design expertise?",
      a: "From startups looking for a strong digital launch to established enterprises aiming to modernize their online presence, we have worked with a diverse range of industries in the UAE. Our experience spans corporates, travel and hospitality, healthcare, retail, real estate, education, e-commerce, and lifestyle brands. No matter the sector, we tailor each website to reflect the brand’s identity while ensuring performance, customer engagement, and scalability.",
    },
    {
      q: "How much time does WD Agency take to design and deliver a website?",
      a: "The timeframe for website development depends on its complexity, features, and scale. A simple business website can be completed in a few weeks, while a fully customized platform with advanced functionalities may take longer. At WD Agency, we set clear timelines at the start of every project and ensure they are met without compromising on quality. Our goal is to deliver your website on schedule, fully tested, and ready to perform.",
    },
    {
      q: "Do You Develop Mobile-Responsive Websites?",
      a: "Yes, every website we develop is fully responsive and optimized for all screen sizes, ensuring a seamless user experience.",
    },
    {
      q: "How does WD Agency ensure the best quality of web design services?",
      a: "At WD Agency, quality is built into every stage of our design and development process. We follow international best practices and conduct rigorous checks on functionality, performance, security, and user experience before launch. Every website is thoroughly tested across devices and browsers to ensure it runs seamlessly.",
    },
    {
      q: "Does WD Agency provide annual website maintenance and support in Dubai?",
      a: "Yes. We offer comprehensive annual maintenance packages designed to keep your website secure, updated, and performing at its best. Our services cover regular updates, security monitoring, bug fixes, performance optimization, and content changes as needed. Each plan is tailored to match your website’s features and scale, ensuring transparent pricing. ",
    },
    {
      q: "Is it better to upgrade my current website or build a new one from scratch?",
      a:"The answer depends on how well your existing website supports your business goals. Sometimes, a refreshed design and added functionality are enough to boost performance. In other cases, outdated platforms, slow speed, or limited scalability make a brand-new website the smarter choice. Consult with our experts to have a detailed audit of your website."
    },
    {
      q:"Why should I choose WD Agency for web development services in Dubai?",
      a:"Businesses trust WD Agency because we combine technical expertise, creative design, and industry best practices to deliver scalable and high-performance websites. Our team focuses on building solutions tailored to your goals, from sleek corporate sites to robust eCommerce platforms. With a future-ready approach and a strong track record in the UAE, we ensure every website not only looks great but also drives business growth."
    },
    {
      q:"How can a responsive website contribute to business growth?",
      a:"A responsive website adapts seamlessly to any device inlcuding mobile, tablet, or desktop, ensuring every visitor enjoys a smooth experience. In a market like the UAE, where mobile usage is extremely high, this directly translates into higher engagement, stronger customer trust, and improved conversion rates."
    },
    {
      q:"How many web development projects has WD Agency successfully delivered in Dubai?",
      a:"WD Agency has successfully completed 500+ web development projects across Dubai and the wider UAE. Our reputation as a trusted agency comes from consistently meeting deadlines, maintaining reliability, and delivering solutions that align with client goals. Each project reflects our commitment to digital excellence, innovation, and long-term value for businesses of every size."
    },
    {
      q:"Can WD Agency set up secure payment options for my online store?",
      a:"Absolutely. We integrate trusted and fully secure payment gateways into your eCommerce platform, allowing your customers to shop confidently. Our focus is on smooth, safe, and reliable transactions, helping your store increase sales while protecting sensitive information."
    },
    {
      q:"Can WD Agency help migrate my existing website to a new platform?",
      a:"We specialize in seamless website migrations that move your site to a more robust platform with minimal downtime. Whether your goal is improved performance, enhanced scalability, or a modernized user experience, we ensure the transition is smooth, secure, and optimized for long-term growth."
    },
  ];

  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="frame-1200 py-100 sm-pt-0 sm-pb-50 sm-px-20">
      <motion.h2
        className="text-center mb-50 frame-900 sm-text-start sm-mb-20"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Frequently Asked Questions
      </motion.h2>

      <div className={styles.faqContainer}>
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            className={`${styles.faqCard} ${
              openIndex === index ? styles.active : ""
            }`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <button
              className={styles.faqHeader}
              onClick={() => toggleFAQ(index)}
            >
              <span>{faq.q}</span>
              {openIndex === index ? (
                <Image src={uparrow} alt="Up Arrow" />
              ) : (
                <Image src={downarrow} alt="Down Arrow" />
              )}
            </button>

            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  className={styles.faqContent}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0, ease: "easeOut" }}
                >
                  <p>{faq.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FaqSection;
