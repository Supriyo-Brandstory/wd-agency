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
    title: "UI/UX & Prototyping",
    desc: "User-centered design approaches that create intuitive and engaging digital experiences.",
    img: uiux,
    alt:"UI/UX and Prototyping Services",
    btnname: "Learn More",
    link: "/services/wireframing-prototyping"
  },
  {
    title: "Dynamic Web Development",
    desc: "Custom web applications built with modern technologies to deliver exceptional user experiences.",
    img: webdev,
    alt:"Dynamic Web Development Services",
    btnname: "Learn More",
    link: "/services/dynamic-website-development"
  },
  {
    title: "Frontend Development",
    desc: "Modern, responsive user interfaces built with cutting-edge frontend technologies.",
    img: frontend,
    alt:"Frontend Development Services",
    btnname: "Learn More",
    link: "/services/frontend-development"
  },
  {
    title: "Full Stack Development",
    desc: "End-to-end web solutions covering both frontend and backend development needs.",
    img: fullstack,
    alt:"Full Stack Development Services",
    btnname: "Learn More",
    link: "/services/full-stack-development"
  }
]



const DevelopmentServices = () => {
  return (
   <CommonIndustries
   btnname="Contact for Quote"
   btnlink="/contact-us"
   heding="Our Website Design & Development Types"
   services={services}
    />
  )
}

export default DevelopmentServices
