import React from 'react'
import styles from '@/app/(frontend)/assets/style/common/commonProtfolio.module.css'

import Image from 'next/image'

import protfolio1 from '@/app/(frontend)/assets/images/protfolio/1.webp'
import protfoliologo1 from '@/app/(frontend)/assets/images/protfolio/varsha-logistics-pvt-ltd.webp'
import protfolio2 from '@/app/(frontend)/assets/images/protfolio/2.webp'
import protfoliologo2 from '@/app/(frontend)/assets/images/protfolio/ferns.webp'
import protfolio3 from '@/app/(frontend)/assets/images/protfolio/3.webp'
import protfoliologo3 from '@/app/(frontend)/assets/images/protfolio/kshemavan.webp'
import protfolio4 from '@/app/(frontend)/assets/images/protfolio/4.webp'
import protfoliologo4 from '@/app/(frontend)/assets/images/protfolio/equence.webp'
const CommonProtfolio = ({
heding = "Our Website Design Portfolio",
  desc = "We have worked with 500+ clients across Dubai and the United Arab Emirates. See our extensive website design and development portfolio here.",
  protfoliodata = [
    {
      id: "01",
      image: protfolio1,
      logo: protfoliologo1,
    },
    {
      id: "02",
      image: protfolio2,
      logo: protfoliologo2,
    },
    {
      id: "03",
      image: protfolio3,
      logo: protfoliologo3,
    },
    {
      id: "04",
      image: protfolio4,
      logo: protfoliologo4,
    },
  ],
}) => {
    return (
        <div className={styles.CommonProtfolio}>
            <div className='frame-900 mb-40'>
            <h2 className='text-center sm-text-left mb-20'>{heding}</h2>
            <p className='text-center sm-text-left'>{desc}</p>
            </div>
           
            <div className={styles.Protfolio}>
                {protfoliodata.map((protfolio, index) => (
                    <div className={styles.ProtfolioBox} key={index}>
                        <Image src={protfolio.image} alt="protfolio1" />
                        <div className={styles.ctabox}>
                            <Image src={protfolio.logo} alt="protfolio1" />
                            <button className='white-btn'>Request Case Study</button>
                            
                        </div>
                    </div>
                ))}      
            </div>
        </div>
    )
}

export default CommonProtfolio