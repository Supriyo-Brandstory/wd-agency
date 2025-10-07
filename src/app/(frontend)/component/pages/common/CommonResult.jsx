import React from 'react'
import styles from '@/app/(frontend)/assets/style/common/commonResult.module.css'
import customdesign from '@/app/(frontend)/assets/images/website-development/custom-design.png'
import SEOCentric from '@/app/(frontend)/assets/images/website-development/SEO-Centric.webp'
import MobileFirst from '@/app/(frontend)/assets/images/website-development/Mobile-First.webp'
import Optimized from '@/app/(frontend)/assets/images/website-development/Optimized.webp'
import Image from 'next/image'

const CommonResult = () => {
    return (
        <div className='frame-1200 py-100 sm-pt-0 sm-pb-50 sm-px-20'>
            <h2 className='text-center'>Best Web Design Services that Drive Measurable Results</h2>
            <p className='my-20 text-center'>Great website design connects a visitor’s journey from initial impact to conversation. We are the best expert web design agency creating websites that don’t just look good and functional, but also work across all devices. From intuitive UX design to high end visuals, we outline websites attract, engage, and keep users engaged.</p>
            <h3 className='text-center mb-40'>Our Core Strengths</h3>
            <div className={styles.cardbox}>
            <div className={styles.card}>
                <Image
                    src={customdesign} // 🔁 replace with your image
                    alt="Custom Design"
                    className={styles.image}
                />
                <div className={styles.overlay}>
                    <h4 className='mb-10'>Custom Design</h4>
                    <p>
                        Fully responsive for smartphones, tablets, and desktops.
                    </p>
                </div>
            </div>
            <div className={styles.card}>
                <Image
                    src={SEOCentric} // 🔁 replace with your image
                    alt="Custom Design"
                    className={styles.image}
                />
                <div className={styles.overlay}>
                    <h4 className='mb-10'>SEO-Centric</h4>
                    <p>
                       Organized with on-page SEO basics in mind.
                    </p>
                </div>
            </div>
            <div className={styles.card}>
                <Image
                    src={MobileFirst} // 🔁 replace with your image
                    alt="Custom Design"
                    className={styles.image}
                />
                <div className={styles.overlay}>
                    <h4 className='mb-10'>Mobile-First Approach</h4>
                    <p>
                        Fully responsive for smartphones, tablets, and desktops.
                    </p>
                </div>
            </div>
            <div className={styles.card}>
                <Image
                    src={Optimized} // 🔁 replace with your image
                    alt="Custom Design"
                    className={styles.image}
                />
                <div className={styles.overlay}>
                    <h4 className='mb-10'>Optimized for Performance</h4>
                    <p>
                     Fast, safe, and leveraged for conversions.
                    </p>
                </div>
            </div>
            </div>
            <div className='text-center'>
            <p className='my-20'>We have worked with top-level businesses in Sharjah and USE across retail, real estate, healthcare, education, e-commerce, etc. We know what it takes to build a digital platform that works for every niche.  </p>
            <button className='white-btn'>Contact Us</button>
            </div>
        </div>
    )
}

export default CommonResult