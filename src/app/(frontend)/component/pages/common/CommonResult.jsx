import React from 'react'
import styles from '@/app/(frontend)/assets/style/common/commonResult.module.css'
import Image from 'next/image'
import Link from 'next/link'

const CommonResult = ({
    heding,
    desc,
    subheding,
    resultdata,
    footertext
}) => {
    return (
        <div className='frame-1200 py-100 sm-pt-0 sm-pb-50 sm-px-20'>
            <h2 className='text-center sm-text-start'>{heding}</h2>
            <p className='my-20 text-center sm-text-start'>{desc}</p>
            <h3 className='text-center mb-40 sm-text-start'>{subheding}</h3>
            <div className={styles.cardbox}>
                {resultdata.map((item, index) => (
            <div className={styles.card} key={index}>
                <Image
                    src={item.img} // 🔁 replace with your image
                    alt="Custom Design"
                    className={styles.image}
                />
                <div className={styles.overlay}>
                    <h4 className='mb-10'>{item.title}</h4>
                    <p>
                        {item.desc}
                    </p>
                </div>
            </div>
                ))}
           
            </div>
            <div className='text-center sm-text-start'>
            <p className='my-20'> {footertext}</p>
            <Link href="/about-us" className="blue-btn">
                About Us
            </Link>
            </div>
        </div>
    )
}

export default CommonResult