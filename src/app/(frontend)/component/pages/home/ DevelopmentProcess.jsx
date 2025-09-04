"use client";

import React from 'react'
import { motion } from 'framer-motion'
import styles from '@/app/(frontend)/assets/style/home/developmentProcess.module.css'

const DevelopmentProcess = () => {
  const processData = [
    {
      id: "01",
      title: "Discovery",
      description: `As a top-level web development company in UAE, we strongly consider the fact that each business idea has its unique principles and visions and hence requires the creation of out-of-the-box concepts. Thus, we offer our services that include understanding and knowing the client’s vision and needs in detail. Our experts conduct in-depth research of an industry with an aim of discovering a vision for building an engaging and eye catchy business website for success. This is a crucial stage that unlocks unique ideas and innovative strategies to craft compelling websites that outperform market competition.`,
      points: [
        "Understanding the business strengths and weaknesses.",
        "Demands of the service/products in the market.",
        "Awareness and demands among potential clients."
      ]
    },
    {
      id: "02",
      title: "UX Design",
      description: `UX designed website makes sure that the website is ready to rise and shine and become a brand. A strategic UI design increases conversions up to 400%. Thus, UI designing is an important factor to build a stronger online presence in this digital age. We ensure our UI designs encompass every element needed to transform ideas into reality, drive customer retention, and business success. We use several latest technologies and tools to build high-end UI designs.`,
      points: [
        "Grabbing customer attention and delivering a better user experience.",
        "Increase the number of returning customers and support SEO strategies.",
        "Improves credibility and better ranking in SERP."
      ]
    },
    {
      id: "03",
      title: "Prototyping",
      description: `Building trust, promising efficiency takes efforts at every step of developing and designing the website. Prototyping is one way to raise the bar and create a link between an idea in the air to reality by promoting constant enhancement in designs. Hence, as a leading web design agency, we follow the motto of 'journey at ease', which includes the most important step of prototyping. It allows us to welcome more creative ways of smooth functioning of the website by gaining access to valuable feedback.`,
      points: [
        "Crafting interactive wireframes that visualize user journeys.",
        "Refining designs through iterative feedback and testing.",
        "Ensuring seamless transitions from concept to final interface."
      ]
    },
    {
      id: "04",
      title: "UI Design",
      description: `Our UI designs ensure the fulfillment of website purpose and make it user-friendly and responsive, which is the key to potential customer retention. We believe eye-catching designs significantly increase customer engagement, retention, and keep users engaged for a longer period. Thus, we offer purposeful page layouts with strategic colors and texture that represent your brand effectively.`,
      points: [
        "Designing intuitive interfaces that align with user behavior.",
        "Applying strategic use of color, typography, and spacing.",
        "Responsiveness and consistency across all devices and screen sizes."
      ]
    },
    {
      id: "04",
      title: "Development",
      description: `We are an expert website development agency creating innovative web solutions to help our clients stay ahead of the curve. Our development service includes the crucial and extensive steps of brainstorming, planning, designing, coding, content writing, testing, and final launch with 100% assistance. We are committed to delivering services on time and every time.`,
      points: [
        "Building scalable, secure, and high-performance websites.",
        "Integrating modern technologies and clean code for seamless functionality.",
        "Conducting rigorous testing to ensure flawless user experience."
      ]
    },
    {
      id: "05",
      title: "Launch & Support",
      description: `After successful development and testing, we ensure a smooth launch of your website with ongoing support and maintenance to keep your digital presence running optimally.`,
      points: [
        "Complete website deployment and hosting setup.",
        "Post-launch support for 24*7 and performance optimization.",
        "Regular updates and security maintenance."
      ]
    }
  ]

  return (
    <div className='frame-1200 py-100 sm-pt-0 sm-pb-50'>
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
