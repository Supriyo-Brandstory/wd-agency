"use client";
import React from 'react'
import styles from '@/app/(frontend)/assets/style/home/ourJourney.module.css'
import designrush from '@/app/(frontend)/assets/images/designrush.png'
import goodfirms from '@/app/(frontend)/assets/images/goodfirms.png'
import clutch from '@/app/(frontend)/assets/images/clutch.png'
import Image from 'next/image'
import { motion } from "framer-motion";

const ourJourneyData = [
  {
    id: 1,
    img: designrush,
    title: 'DesignRush',
    desc: 'DesignRush is a leading platform for designers and developers to showcase their work and connect with potential clients. We have been recognized by DesignRush for our exceptional work in web design and development, and we are proud to be a part of their community.',
    height: '75px'
  },
  {
    id: 2,
    img: goodfirms,
    title: 'GoodFirms',
    desc: 'GoodFirms is a leading platform for designers and developers to showcase their work and connect with potential clients. We have been recognized by GoodFirms for our exceptional work in web design and development, and we are proud to be a part of their community.',
    height: '49px'
  },
  {
    id: 3,
    img: clutch,
    title: 'Clutch',
    desc: 'Clutch is a leading platform for designers and developers to showcase their work and connect with potential clients. We have been recognized by Clutch for our exceptional work in web design and development, and we are proud to be a part of their community.',
    height: '55px'
  }
];

// Animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.2 }
  }),
};

const OurJourney = () => {
  return (
    <div className='frame-1200 py-100 sm-pt-0 sm-pb-50 sm-px-20'>
      <motion.h2
        className='text-center mb-20 sm-text-start sm-mb-20'
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Recognitions That Reflect Our Journey
      </motion.h2>

      <motion.p
        className='text-center mb-40 frame-1100 sm-text-start sm-mb-20'
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        We’re proud to have been recognised by platforms like DesignRush, GoodFirms, and Clutch for our outstanding work in web design and development. Our success in Dubai’s digital space has made us a top choice for businesses looking to make an impact online.
      </motion.p>

      <div className={styles.ourJourneyContainer}>
        {ourJourneyData.map((item, index) => (
          <motion.div
            key={index}
            className={styles.ourJourneyCard}
            custom={index}
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            viewport={{ once: true, amount: 0.2 }}
          >
            <Image src={item.img} alt={item.title} style={{ '--img-height': item.height }} />
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default OurJourney
