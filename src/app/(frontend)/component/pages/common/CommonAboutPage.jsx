import React from 'react'
import styles from '@/app/(frontend)/assets/style/common/commonAboutPage.module.css'
import Image from 'next/image'

const CommonAboutPage = ({text1,text2,text3,img}) => {
  return (
        <div className='frame-1200 py-100 sm-pt-0 sm-pb-50 sm-px-20'>
            <div className={styles.flex} style={{'--width': '55%'}}>
                <div className={styles.left}>
                    <h2>{text1}</h2>
                    <p className='my-20'>{text2}</p>
                    <p>{text3}</p>
                </div>
                <div className={styles.right} style={{'--width': '45%'}}>
                    <Image src={img} alt="sharjah" style={{'--height': '391px', '--width': '628px'}} />

                </div>

            </div>
        </div>
  )
}

export default CommonAboutPage