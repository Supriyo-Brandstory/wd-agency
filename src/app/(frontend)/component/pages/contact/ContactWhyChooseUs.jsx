import React from 'react'
import styles from '@/app/(frontend)/assets/style/contact/contactWhyChooseUs.module.css'
import whybox from '@/app/(frontend)/assets/images/contact/whybox.webp'
import Image from 'next/image'

const ContactWhyChooseUs = () => {
  return (
    <div className='frame-1200 pb-100 sm-pt-0 sm-pb-50 sm-px-20'>
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
            <Image  src={whybox} alt='whybox'/>
        </div>
      </div>
      </div>
  )
}

export default ContactWhyChooseUs