"use client";
import React, { useState } from "react";
import Image from "next/image";
import styles from "@/app/(frontend)/assets/style/casestudies/caseStudies.module.css";
import bannerbg from "@/app/(frontend)/assets/images/blog-bg.webp";
import arrowleft from '@/app/(frontend)/assets/images/icons/left-icon.svg'
import arrowright from '@/app/(frontend)/assets/images/icons/right-icon.svg'
// import { ChevronLeft, ChevronRight, X } from "lucide-react";
import protfolio1 from '@/app/(frontend)/assets/images/protfolio/1.webp'
import protfolio2 from '@/app/(frontend)/assets/images/protfolio/2.webp'
import protfolio3 from '@/app/(frontend)/assets/images/protfolio/3.webp'
import protfolio4 from '@/app/(frontend)/assets/images/protfolio/4.webp'
const caseStudiesData = [ 
  {
    id: 1,
    title: "E-commerce Website Redesign",
    category: "E-commerce",
    image: protfolio1,
    modelimage: [
      { img: protfolio1 },
    ],
  },
  {
    id: 2,
    title: "E-commerce Website Redesign",
    category: "E-commerce",
    image: protfolio2,
    modelimage: [
      { img: protfolio2 },
    ],
  },
  {
    id: 3,
    title: "E-commerce Website Redesign",
    category: "E-commerce",
    image: protfolio3,
    modelimage: [
      { img: protfolio3 },
    ],
  },  
  {
    id: 4,
    title: "E-commerce Website Redesign",
    category: "E-commerce",
    image: protfolio4,
    modelimage: [
      { img: protfolio4 },
    ],
  },
  
 

];

export default function CaseStudiesPage() {
  const bgurl = typeof bannerbg === "string" ? bannerbg : bannerbg?.src;

  const [selectedProject, setSelectedProject] = useState(null);
  const [imageIndex, setImageIndex] = useState(0);

  const handleOpen = (project) => {
    setSelectedProject(project);
    setImageIndex(0);
  };

  const handleClose = () => {
    setSelectedProject(null);
    setImageIndex(0);
  };

  const handlePrev = () => {
    if (!selectedProject) return;
    setImageIndex((prev) =>
      prev === 0 ? selectedProject.modelimage.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    if (!selectedProject) return;
    setImageIndex((prev) =>
      prev === selectedProject.modelimage.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <>
      {/* BANNER */}
      <div
        className={styles.banner}
        style={{ "--bg": `url(${bgurl}) no-repeat center center / cover` }}
      >
        <h1 className={styles.heading}>Case Studies</h1>
        <p>Insights, trends, and tips from the WD Agency team.</p>
      </div>

      {/* GRID SECTION */}
      <section className={styles.gridSection}>
        <div className={styles.grid}>
          {caseStudiesData.map((item) => (
            <div
              key={item.id}
              className={styles.card}
              onClick={() => handleOpen(item)}
            >
              <div className={styles.imageWrapper}>
                <Image
                  src={item.image}
                  alt={item.title}
                  width={500}
                  height={300}
                />
              </div>
              <div className={styles.cardContent}>
                <h3>{item.title}</h3>
                <p>{item.category}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* MODAL */}
      {selectedProject && (
        <div className={styles.modalOverlay} onClick={handleClose}>
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <button className={styles.closeBtn} onClick={handleClose}>
              {/* <X size={24} /> */}
              {'x'}
            </button>

            <button className={styles.prevBtn} onClick={handlePrev}>
              {/* <ChevronLeft size={32} /> */}
              <Image src={arrowleft} alt="arrowleft" />
            </button>

            <div className={styles.modalImage}>
              <Image
                src={selectedProject.modelimage[imageIndex].img}
                alt={`${selectedProject.title} image ${imageIndex + 1}`}
                width={800}
                height={500}
              />
              <h3>{selectedProject.title}</h3>
              <p>{selectedProject.category}</p>
              <p className={styles.counter}>
                {imageIndex + 1} / {selectedProject.modelimage.length}
              </p>
            </div>

            <button className={styles.nextBtn} onClick={handleNext}>
              {/* <ChevronRight size={32} /> */}
              <Image src={arrowright} alt="arrowright" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
