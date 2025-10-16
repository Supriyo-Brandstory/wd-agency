"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import styles from "@/app/(frontend)/assets/style/common/commonClientTestimonials.module.css";
import arrowleft from '@/app/(frontend)/assets/images/icons/left-icon.svg'
import arrowright from '@/app/(frontend)/assets/images/icons/right-icon.svg'
import quoteicon from '@/app/(frontend)/assets/images/icons/quote-icon.svg'
import imagetestimonial1 from '@/app/(frontend)/assets/images/testimonial/testimonial-1.webp'
import imagetestimonial2 from '@/app/(frontend)/assets/images/testimonial/testimonial-2.webp'
import imagetestimonial3 from '@/app/(frontend)/assets/images/testimonial/testimonial-3.webp'


export default function CommonClientTestimonials({
    testimonials = [
        {
            id: 1,
            name: "Daniel R",
            text: "WD Agency transformed our online presence. Within 3 months, our sales doubled thanks to their Shopify development expertise.",
            image: imagetestimonial1,
        },
        {
            id: 2,
            name: "Sophia K",
            text: "Professional, efficient, and creative—the best ecommerce development agency in UAE we’ve worked with.",
            image: imagetestimonial2,
        },
        {
                                    id: 3,
                                    name: "James P",
                                    text: "From design to launch, everything was seamless. Their team handled even complex Magento integrations with ease.",
                                    image: imagetestimonial3,
                                }
    ]
}) {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0); // 1 for next, -1 for prev
  const testimonial = testimonials[index];

  const handlePrev = () => {
    setDirection(-1);
    setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection(1);
    setIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  // Motion variants for sliding
  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 10 : -10,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction < 0 ? 10 : -10,
      opacity: 0,
    }),
  };

  return (
    <div className={`${styles.testimonialsSection}`}>
      <div className="frame-1200 py-100 sm-pt-0 sm-pb-50 sm-px-20">
        <div className={styles.container}>
          {/* Left Side */}
          <div className={styles.left}>
            <h2>Client Testimonials</h2>
            <div className={styles.buttons}>
              <button onClick={handlePrev} className={styles.navButton}>
                <Image src={arrowleft} alt="arrowleft" />
              </button>
              <button onClick={handleNext} className={styles.navButton}>
                <Image src={arrowright} alt="arrowright" />
              </button>
            </div>
          </div>

          {/* Right Side - Testimonial */}
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={testimonial.id}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5 }}
              className={styles.card}
            >
              <div className={styles.imageContainer}>
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={400}
                  height={400}
                  className={styles.image}
                />
              </div>
              <div className={styles.textContainer}>
                <Image src={quoteicon} alt="quoteicon" />
                <p className="mt-10">{testimonial.text}</p>
                <p className={styles.name}>{testimonial.name}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
