import React from 'react'
import styles from '@/app/(frontend)/assets/style/common/commonProtfolio.module.css'

import Image from 'next/image'

const CommonProtfolio = ({
    heding,
    desc,
    protfoliodata
}) => {
    return (
        <div className={styles.CommonProtfolio}>
            <h2 className='text-center sm-text-left mb-20'>{heding}</h2>
            <p className='text-center sm-text-left frame-900'>{desc}</p>
            <div className={styles.Protfolio}>
                {protfoliodata.map((protfolio, index) => (
                    <div className={styles.ProtfolioBox} key={index}>
                        <Image src={protfolio.image} alt="protfolio1" />
                        <div className={styles.ctabox}>
                            <Image src={protfolio.logo} alt="protfolio1" />
                            <button className='white-btn'>View full case study</button>
                            
                        </div>
                    </div>
                ))}      
            </div>
        </div>
    )
}

export default CommonProtfolio