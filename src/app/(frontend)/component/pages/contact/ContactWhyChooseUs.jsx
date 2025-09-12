'use client'
import React from 'react'
import { motion } from 'framer-motion'
import styles from '@/app/(frontend)/assets/style/contact/contactWhyChooseUs.module.css'
import whybox from '@/app/(frontend)/assets/images/contact/whybox.webp'
import Image from 'next/image'

const ContactWhyChooseUs = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: -40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  }

  return (
    <motion.div
      className='frame-1200 pb-100 sm-pt-0 sm-pb-50 sm-px-20'
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
    >
      <h2 className='mb-50 text-center'>Why Choose Us?</h2>
      <div className={styles.whyChooseUs}>
        <div className={styles.whyChooseUsBox}>
          <div className={styles.innerBox}>
            <h4>Expert Team</h4>
            <p className={styles.number}>50+</p>
            <p className={styles.footertext}>experienced developers and designers</p>
          </div>
          <div className={styles.innerBox}>
            <h4>Proven Track Record</h4>
            <p className={styles.number}>750+</p>
            <p className={styles.footertext}>successful projects delivered</p>
          </div>
          <div className={styles.innerBox}>
            <h4>Fast Response</h4>
            <p className={styles.number}>24 hrs</p>
            <p className={styles.footertext}>We respond within 24 hours</p>
          </div>
          <div className={styles.innerBox}>
            <h4>Quality Guarantee</h4>
            <p className={styles.number}>100%</p>
            <p className={styles.footertext}>satisfaction guaranteed</p>
          </div>
        </div>
        <div className={styles.whyChooseUsBox2}>
          <Image src={whybox} alt='whybox' />
        </div>
      </div>
    </motion.div>
  )
}

export default ContactWhyChooseUs
