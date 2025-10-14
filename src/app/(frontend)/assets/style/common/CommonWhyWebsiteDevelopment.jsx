import React from 'react'
import styles from '@/app/(frontend)/assets/style/common/CommonWhyWebsiteDevelopment.module.css'
import Image from 'next/image'
import imagewhydevelopment from '@/app/(frontend)/assets/images/e-commerce-web-development/Why-Website-Development.webp'
const CommonWhyWebsiteDevelopment = () => {
  return (
    <>
    <div className='frame-1200 py-100 sm-pt-0 sm-pb-50 sm-px-20'>
        <div className={styles.flex}>
            <div className={styles.left}>
                <h2>Why Choose WD Agency for Ecommerce Website Development</h2>
            </div>
            <div className={styles.right}>
                <p>The right partner in ecommerce website development in UAE can be the difference between a basic online store and a powerful, income-generating digital experience. WD Agency combines technical expertise, knowledge of the UAE market, and a results-oriented approach that ensures your ecommerce business will launch effectively and develop long-term.</p>
            </div>
        </div>
        <div className={`${styles.flex} ${styles.bottom}`}>
            <div className={styles.left}>
                <p>Our company has years of demonstrated experience developing ecommerce solutions to businesses regardless of size, from startups to multinational corporations, and across an array of industries from fashion and electronics, to food and real estate. Our knowledge and understanding of UAE-specific consumer behavior (mobile-first shopping, multilingual preferences, and confidence in secure payments methods) enable us to build ecommerce websites with customer needs and expectations in mind.</p>
                <p>We have in-depth experience on numerous platforms such as Shopify, Magento, WooCommerce, and bespoke ecommerce solutions to recommend and deliver the ideal platform for your company’s needs. We are different from an agency that may solely focus on design; Our priority is maximizing conversion rates. Each and every detail, click or feature, from navigation through checkout, is created to increase sales conversion and minimize sales drop off. </p>
                <p>Transparency is a key component of our process. We will share straightforward pricing, clear timelines and assign you a project manager to provide ongoing communication. This way, you will always be updated on the work on your website, and you can focus on scaling your business while we take care of the technical side.</p>
            </div>
            <div className={styles.right}>
               <Image src={imagewhydevelopment} alt="Why Website Development" />
            </div>
        </div>
    </div>
    </>
  )
}

export default CommonWhyWebsiteDevelopment