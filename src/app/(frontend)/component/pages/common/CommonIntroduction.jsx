import React from 'react'
import styles from '@/app/(frontend)/assets/style/common/commonIntroduction.module.css'

import Image from 'next/image'
const CommonIntroduction = ({imageintro1,imageintro2,text1,text2}) => {
  return (
    <div className='frame-1200 py-100 sm-pt-0 sm-pb-50 sm-px-20'>
        <h2>Introduction</h2>
        <div className={styles.flex}>
            <div className={styles.box}>
            <div className={styles.gapcontent} dangerouslySetInnerHTML={{__html:text1}}></div>
               
            <Image src={imageintro1} alt="introimg-1" />
            </div>
             <div className={styles.box}>
              <Image src={imageintro2} alt="introimg-1" />
            <div className={styles.gapcontent} dangerouslySetInnerHTML={{__html:text2}}></div>

             </div>
        </div>
        </div>
  )
}

export default CommonIntroduction