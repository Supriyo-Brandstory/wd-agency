"use client";
import React from 'react'
import styles from '@/app/(frontend)/assets/style/home/developmentServices.module.css'
import uiux from '../../../assets/images/uiux.webp'
import webdev from '../../../assets/images/webdev.webp'
import frontend from '../../../assets/images/frontend.webp'
import fullstack from '../../../assets/images/fullstack.webp'
import Image from 'next/image'
import { motion } from 'framer-motion'

const services = [
  {
    title: "UI/UX Design",
    desc: "User-centered design approaches that create intuitive and engaging digital experiences.",
    img: uiux,
    link: "#"
  },
  {
    title: "Web Development",
    desc: "Custom web applications built with modern technologies to deliver exceptional user experiences.",
    img: webdev,
    link: "#"
  },
  {
    title: "Frontend Development",
    desc: "Modern, responsive user interfaces built with cutting-edge frontend technologies.",
    img: frontend,
    link: "#"
  },
  {
    title: "Full Stack Development",
    desc: "End-to-end web solutions covering both frontend and backend development needs.",
    img: fullstack,
    link: "#"
  }
]

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut"
    }
  })
}

const DevelopmentServices = () => {
  return (
    <div className="frame-1200 py-100 sm-pb-50 sm-pt-0 ">
      <motion.h2 
        className="text-center mb-50 sm-mb-20 sm-text-start"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        Our Website Design & Development Services
      </motion.h2>
      
      <div className={styles.grid}>
        {services.map((service, i) => (
          <motion.div 
            key={i} 
            className={styles.card}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={i}
          >
            <Image src={service.img} alt={service.title} className={styles.image} />
            <div className={styles.content}>
              <h3 className='mb-20'>{service.title}</h3>
              <p className='mb-10'>{service.desc}</p>
              <a href={service.link} className={styles.learnMore}>Learn more</a>
            </div>
          </motion.div>
        ))}
      </div>
      
      <motion.div 
        className='text-center mt-30 sm-mt-10'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        viewport={{ once: true }}
      >
        <button className="white-btn">View All Services</button>
      </motion.div>
    </div>
  )
}

export default DevelopmentServices
