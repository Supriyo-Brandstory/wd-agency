"use client";

import React from 'react'
import { motion } from 'framer-motion'
import styles from '@/app/(frontend)/assets/style/home/developmentProcess.module.css'

const DevelopmentProcess = () => {
  const processData = [
    {
      id: "01",
      title: "Discovery",
      description: `As a top-level web development company in Dubai, we strongly consider the fact that each business idea has its unique principles and visions and hence requires the creation of out-of-the-box concepts. We offer web development services with a deep understanding of client’s needs and vision in detail. This is the most crucial stage that includes innovative strategies to design state-of-the-art websites that outperforms in the marketing. `,
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
      ]
    },
    {
      id: "03",
      title: "Front-End Design",
      description: `Our front-end design approach goes beyond aesthetics- we ensure that websites are responsive, functional, and technically sound. We use all modern frameworks to create intuitive interfaces that are visually appealing and deliver a flawless experience across all devices. Each element of a website is coded with precision to improve usability, loading, and overall performance. Starting from a responsive layout to each interactive component, we build websites that truly represent your brand value.`,
      points: [
        "Designing intuitive interfaces that align with user behavior.",
        "Applying strategic use of color, typography, and spacing.",
        "Ensuring responsiveness and consistency across all devices and screen sizes."
      ]
    },
    {
      id: "04",
      title: "Development",
      description: `As the best website development agency in Dubai, we create innovative web solutions to help clients achieve their digital goals. Our experts combine cutting-edge technology frameworks, clean code, and stable architecture to build fast, secure, and scalable websites. We are committed to delivering the best web development services in the UAE on time and every time.`,
      points: [
        "Building scalable, secure, and high-performance websites.",
        "Implementing secure, scalable back-end systems for long-term growth.",
        "Maintaining clean, modular code for easier future updates and scalability."
      ]
    },
    {
      id: "05",
      title: "Launch & Support",
      description: `After successful development and thorough testing, we ensure a seamless launch of your website, making it live without any glitches. We also provide reliable hosting solutions to guarantee your website is fast, secure, and always accessible. But we don’t stop here, we provide ongoing support and maintenance to keep your digital presence running optimally.`,
      points: [
        "Complete website deployment and hosting setup.",
        "Post-launch support for 24*7 and performance optimization.",
        "Regular updates and security maintenance."
      ]
    }
  ]

  return (
    <div className='frame-1200 py-100 sm-pt-0 sm-pb-50 sm-px-20'>
      <div className={styles.container}>
        {/* Left Side */}
        <motion.div
          className={styles.leftInnerContainer}
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>Our Website Development Process Flow</h2>
        </motion.div>

        {/* Right Side Scrollable Content */}
        <div className={styles.rightInnerContainer}>
          <div className={styles.scrollWrapper}>
            {processData.map((process, index) => (
              <motion.div
                key={index}
                className={styles.card}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
              >
                <h3 className='mb-20'><span>{process.id}</span> {process.title}</h3>
                <p>{process.description}</p>
                <h4 className='fs-22 fw-700 my-20'>We invest our resources in:</h4>
                <ul className='ml-40'>
                  {process.points.map((point, i) => (
                    <li className='mb-10' key={i}>{point}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default DevelopmentProcess
