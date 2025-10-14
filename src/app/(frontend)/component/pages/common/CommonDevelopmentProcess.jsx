"use client";

import React from 'react'
import { motion } from 'framer-motion'
import styles from '@/app/(frontend)/assets/style/home/developmentProcess.module.css'

const CommonDevelopmentProcess = ({heding,subheding,processData}) => {


  return (
    <div className='frame-1200 py-100 sm-pt-0 sm-pb-50 sm-px-20'>
      <div className={styles.container}>
        {/* Left Side */}
        <motion.div
          className={styles.leftInnerContainer}
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>{heding}</h2>
          {subheding && <p className='my-20'>{subheding}</p>}
        </motion.div>

        {/* Right Side Scrollable Content */}
        <div className={styles.rightInnerContainer}>
          <div className={styles.scrollWrapper}>
            {processData.map((process, index) => (
              <motion.div
                key={index}
                className={styles.card}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
              >
                <h3 className='mb-20'><span>{process.id}</span> {process.title}</h3>
                <p>{process.description}</p>
                {process.pointsheding && <h4 className='fs-22 fw-700 mt-20'>{process.pointsheding}</h4>}
                {process.points && 
                <ul className='ml-40 mt-20'>
                  {process.points.map((point, i) => (
                    <li className='mb-10' key={i}>{point}</li>
                  ))}
                </ul>}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CommonDevelopmentProcess
