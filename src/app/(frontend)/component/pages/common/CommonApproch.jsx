import React from 'react'
import styles from '@/app/(frontend)/assets/style/common/commonApproch.module.css'

const CommonApproch = (
    {
        text1,
        text2,
        bannerimage
    }
) => {
    const bgUrl = typeof bannerimage === "string" ? bannerimage : bannerimage?.src;
  return (
    <div style={{background:`url(${bgUrl}) no-repeat bottom center / cover`}}  className={styles.container}>
    <div className='frame-1200 py-100 sm-pt-0 sm-pb-50 sm-px-20' >
        <h2>{text1}</h2>
        <div dangerouslySetInnerHTML={{__html:text2}}></div>
               
        <button className='white-btn'>Contact Us</button>

    </div>
    </div>
  )
}

export default CommonApproch