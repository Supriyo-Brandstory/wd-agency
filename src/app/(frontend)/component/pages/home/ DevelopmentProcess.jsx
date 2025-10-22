"use client";

import React from 'react'
import CommonDevelopmentProcess from '../common/CommonDevelopmentProcess';

const DevelopmentProcess = () => {
  const processData = [
    {
      id: "01",
      title: "Discovery",
      description: `As a top-level web development company in Dubai, we strongly consider the fact that each business idea has its unique principles and visions and hence requires the creation of out-of-the-box concepts. We offer web development services with a deep understanding of client’s needs and vision in detail. This is the most crucial stage that includes innovative strategies to design state-of-the-art websites that outperforms in the marketing. `,
      pointsheding: "We invest our resources in:",
      points: [
        "Understanding the business strengths and weaknesses.",
        "Demands of the service/products in the market.",
        "Awareness and demands among potential clients."
      ]
    },
    {
      id: "02",
      title: "UX Design",
      description: `UX designed website makes sure that the website is ready to rise, shine, and grow as a brand. A strategic UI design increases conversions up to 400%. Thus, UI designing is an important factor to build a stronger online presence in this digital age. We ensure our UI designs encompass every element needed to transform ideas into a reality, drive customer retention, and success. We use all latest technologies and tools to build high-end UI design for websites.`,
      points: [
        "Grabbing customer attention and delivering a better user experience.",
        "Designing visually appealing interfaces that reflect brand identity.",
        "Device centric design that our true reflects professionalism."
      ],
      pointsheding: "We invest our resources in:",

    },
    {
      id: "03",
      title: "Front-End Design",
      description: `Our front-end design approach goes beyond aesthetics- we ensure that websites are responsive, functional, and technically sound. We use all modern frameworks to create intuitive interfaces that are visually appealing and deliver a flawless experience across all devices. Each element of a website is coded with precision to improve usability, loading, and overall performance. Starting from a <a href ="/blog/mobile-first-web-design-for-businesses-key-elements--benefits"> mobile responsive</a> layout to each interactive component, we build websites that truly represent your brand value.`,
      points: [
        "Designing intuitive interfaces that align with user behavior.",
        "Applying strategic use of color, typography, and spacing.",
        "Ensuring responsiveness and consistency across all devices and screen sizes."
      ],
      pointsheding: "We invest our resources in:",
    },
    {
      id: "04",
      title: "Development",
      description: `As the best website development agency in Dubai, we create innovative web solutions to help clients achieve their digital goals. Our experts combine cutting-edge technology frameworks, clean code, and stable architecture to build fast, secure, and scalable websites. We are committed to delivering the best web development services in the UAE on time and every time.`,
      points: [
        "Building scalable, secure, and high-performance websites.",
        "Implementing secure, scalable back-end systems for long-term growth.",
        "Maintaining clean, modular code for easier future updates and scalability."
      ],
      pointsheding: "We invest our resources in:",
    },
    {
      id: "05",
      title: "Launch & Support",
      description: `After successful development and thorough testing, we ensure a seamless launch of your website, making it live without any glitches. We also provide reliable hosting solutions to guarantee your website is fast, secure, and always accessible. But we don’t stop here, we provide ongoing support and maintenance to keep your digital presence running optimally.`,
      points: [
        "Complete website deployment and hosting setup.",
        "Post-launch support for 24*7 and performance optimization.",
        "Regular updates and security maintenance."
      ],
      pointsheding: "We invest our resources in:",
    }
  ]

  return (
  <CommonDevelopmentProcess processData={processData} heding={"Our Website Development Process Flow"}/>
  )
}

export default DevelopmentProcess
