import React from 'react'
import styles from '@/app/(frontend)/assets/style/common/CommonWhyWebsiteDevelopment.module.css'
import Image from 'next/image'
const CommonWhyWebsiteDevelopment = ({heding,subheding,lefttext,rightimage}) => {
  return (
    <>
    <div className='frame-1200 py-100 sm-pt-0 sm-pb-50 sm-px-20'>
        <div className={styles.flex}>
            <div className={styles.left}>
                <h2>{heding}</h2>
            </div>
            <div className={styles.right}>
                <p>{subheding}</p>
            </div>
        </div>
        <div className={`${styles.flex} ${styles.bottom}`}>
            <div className={styles.left} dangerouslySetInnerHTML={{__html:lefttext}}>
            </div>
            <div className={styles.right}>
               <Image src={rightimage} alt="Why Website Development" />
            </div>
        </div>
    </div>
    </>
  )
}

export default CommonWhyWebsiteDevelopment