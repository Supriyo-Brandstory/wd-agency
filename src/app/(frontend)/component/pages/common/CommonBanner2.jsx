import React from 'react'
import styles from '@/app/(frontend)/assets/style/common/commonBanner2.module.css'
import Link from 'next/link'


const CommonBanner2 = ({bg,heding,subtitle}) => {
    const bgUrl = typeof bg === "string" ? bg : bg?.src;
  return (
    <div className={styles.commonbanner2} style={{'--bg':`url(${bgUrl}) no-repeat center center / cover`}}>
        <div className={`frame-1200 py-100 sm-pt-0 sm-pb-50 sm-px-20 ${styles.content}`}>
            <h2 dangerouslySetInnerHTML={{__html:heding}}></h2>
            <p className='my-30'>{subtitle}</p>
            <Link href="/contact-us" className="blue-btn">Get a Free Consultation</Link>
        </div>
    </div>
  )
}

export default CommonBanner2