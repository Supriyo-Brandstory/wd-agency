'use client'
import React from 'react'
import { motion } from 'framer-motion'
import styles from '@/app/(frontend)/assets/style/common/commonBanner.module.css'

const CommonBanner = ({ bannerImage, title, subtitle }) => {
  const containerVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  }

  return (
    <motion.div
      className={styles.commonBanner}
      style={{ '--banner-image': bannerImage }}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="frame-1200 py-100 sm-pt-0 sm-pb-50 sm-px-20 text-center">
        <h1>{title}</h1>
        <p className="frame-800 mb-40 sm-mb-30">{subtitle}</p>
      </div>
    </motion.div>
  )
}

export default CommonBanner
