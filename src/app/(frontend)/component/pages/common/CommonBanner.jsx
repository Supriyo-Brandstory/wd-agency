import React from 'react'
import styles from '@/app/(frontend)/assets/style/common/commonBanner.module.css'


const CommonBanner = ({bannerImage, title, subtitle}) => {
  return (
    <div className={styles.commonBanner} style={{'--banner-image': bannerImage}}>
        <div className='frame-1200 py-100 sm-pt-0 sm-pb-50 sm-px-20 text-center'>
            <h1>{title}</h1>
            <p className='frame-800 mb-40 sm-mb-30'>{subtitle}</p>
         </div>
         

    </div>
  )
}

export default CommonBanner