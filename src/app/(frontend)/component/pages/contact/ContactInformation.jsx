'use client'
import React from 'react'
import { motion } from 'framer-motion'
import styles from '@/app/(frontend)/assets/style/contact/contactInformation.module.css'
import Image from 'next/image'
import pinkmailbox from '@/app/(frontend)/assets/images/icons/mailbox-2.svg'

const ContactInformation = () => {
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
      <h2 className='mb-20 text-center'>Contact Information</h2>
      <p className='mb-40 sm-mb-30 text-center'>
        Get in touch with us through any of these channels.
      </p>
      <div className={styles.contactInformation}>
        <div className={styles.contactInformationBox}>
          <div className='flex items-start gap-20'>
            <Image src={pinkmailbox} alt='mailbox' width={40} height={40} />
            <h4>info@websitedevelopmentagency.ae <br />
              <span>Send us an email anytime</span>
            </h4>
          </div>
          <div className='flex items-start gap-20'>
            <Image src={pinkmailbox} alt='mailbox' width={40} height={40} />
            <h4>+971 52 283 165 <br />
              <span>Call us during business hours</span>
            </h4>
          </div>
        </div>

        <div className={styles.contactInformationBox}>
          <div className='flex items-start gap-20'>
            <Image src={pinkmailbox} alt='mailbox' width={40} height={40} />
            <h4>Dubai, United Arab Emirates <br />
              <span>Visit our office</span>
            </h4>
          </div>
          <div className='flex items-start gap-20'>
            <Image src={pinkmailbox} alt='mailbox' width={40} height={40} />
            <h4>Response Time<br />
              <span className='fs-black'>Within 24 Hours</span><br/>
              <span>We respond to all inquiries quickly</span>
            </h4>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default ContactInformation
