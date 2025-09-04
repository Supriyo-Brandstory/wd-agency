"use client";

import React from 'react'
import styles from '../../../assets/style/home/portfolio.module.css'
import imgfood from '@/app/(frontend)/assets/images/food-delivery.webp'
import Image from 'next/image'
import { motion } from 'framer-motion'

const projects = [
    {
        id: 1,
        img: imgfood,
        title: 'Food Delivery Mobile App',
        desc: 'A modern, scalable food delivery platform for restaurants and customers in Dubai.',
        link: '#'
    },
    {
        id: 2,
        img: imgfood,
        title: 'Healthcare Management System',
        desc: 'A comprehensive healthcare management solution for clinics and hospitals across the UAE.',
        link: '#'
    }
]

const Portfolio = () => {
    return (
        <div className='frame-1200 py-100 sm-pt-0 sm-pb-50'>
            {/* Section Heading */}
            <motion.div
                className='frame-700 text-center sm-text-start'
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                <h2 className="mb-20 sm-mb-10">Our Portfolio</h2>
                <p className="mb-40 sm-mb-20">
                    We have worked with 500+ clients across Dubai and the United Arab Emirates. 
                    See our extensive website design and development portfolio here
                </p>
            </motion.div>

            {/* Portfolio Grid */}
            <div className={styles.grid}>
                {projects.map((project, index) => (
                    <motion.div
                        key={project.id}
                        className={styles.gridbox}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                        viewport={{ once: true }}
                    >
                        <Image src={project.img} alt={project.title} />
                        <h3 className='my-20 sm-mb-10'>{project.title}</h3>
                        <p>{project.desc}</p>
                        <a href={project.link}>View Project</a>
                    </motion.div>
                ))}
            </div>

            {/* View All Button */}
            <motion.div
                className='text-center mt-50 sm-mt-40'
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
            >
                <a href='#' className='white-btn'>View Full Portfolio</a>
            </motion.div>
        </div>
    )
}

export default Portfolio
