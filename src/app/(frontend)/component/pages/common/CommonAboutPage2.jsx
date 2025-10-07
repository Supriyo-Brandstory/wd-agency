import React from 'react'
import styles from '@/app/(frontend)/assets/style/common/commonAboutPage.module.css'
import Image from 'next/image'
const CommonAboutPage2 = ({text1,text2,img}) => {
  return (
    <div className='frame-1200 py-100 sm-pt-0 sm-pb-50 sm-px-20'>
        <h2 className='text-center mb-40' dangerouslySetInnerHTML={{__html:text1}}></h2>
        <div className={styles.flex}>
            <div className={styles.left} style={{'--width': '45%'}}>
                <Image src={img} alt="sharjah" style={{'--height': '556px', '--width': '628px'}} />
                </div>
                <div className={styles.right} style={{'--width': '55%'}}>
                    <div dangerouslySetInnerHTML={{__html:text2}}/>
                </div>
        </div>

    </div>
  )
}

export default CommonAboutPage2