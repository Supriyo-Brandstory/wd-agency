"use client";
import React from 'react'
import styles from '@/app/(frontend)/assets/style/home/developmentServices.module.css'
import uiux from '../../../assets/images/uiux.webp'
import webdev from '../../../assets/images/webdev.webp'
import frontend from '../../../assets/images/frontend.webp'
import fullstack from '../../../assets/images/fullstack.webp'
import Image from 'next/image'
import { motion } from 'framer-motion'
import CommonIndustries from '../common/CommonIndustries';

const services = [
  {
    title: "UI/UX Design",
    desc: "User-centered design approaches that create intuitive and engaging digital experiences.",
    img: uiux,
    btnname: "Learn More",
    link: "#"
  },
  {
    title: "Web Development",
    desc: "Custom web applications built with modern technologies to deliver exceptional user experiences.",
    img: webdev,
    btnname: "Learn More",
    link: "#"
  },
  {
    title: "Frontend Development",
    desc: "Modern, responsive user interfaces built with cutting-edge frontend technologies.",
    img: frontend,
    btnname: "Learn More",
    link: "#"
  },
  {
    title: "Full Stack Development",
    desc: "End-to-end web solutions covering both frontend and backend development needs.",
    img: fullstack,
    btnname: "Learn More",
    link: "#"
  }
]



const DevelopmentServices = () => {
  return (
   <CommonIndustries
   btnname="View All Services"
   btnlink="#"
   heding="Our Website Design & Development Services"
   services={services}
    />
  )
}

export default DevelopmentServices
