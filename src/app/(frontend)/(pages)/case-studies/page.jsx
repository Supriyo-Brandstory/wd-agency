"use client";
import React, { useState } from "react";
import Image from "next/image";
import styles from "@/app/(frontend)/assets/style/casestudies/caseStudies.module.css";
import bannerbg from "@/app/(frontend)/assets/images/blog-bg.webp";
import arrowleft from '@/app/(frontend)/assets/images/icons/left-icon.svg'
import arrowright from '@/app/(frontend)/assets/images/icons/right-icon.svg'
// import { ChevronLeft, ChevronRight, X } from "lucide-react";
import imageservice1 from "@/app/(frontend)/assets/images/location/dubai.webp";
import imageservice2 from "@/app/(frontend)/assets/images/location/AbuDhabi.webp";
import imageservice3 from "@/app/(frontend)/assets/images/location/Sharjah.webp";
import imageservice4 from "@/app/(frontend)/assets/images/location/Ajman.webp";
import imageservice5 from "@/app/(frontend)/assets/images/location/RasAlKhaimah.webp";
import imageservice6 from "@/app/(frontend)/assets/images/location/Fujairah.webp";
import imageservice7 from "@/app/(frontend)/assets/images/location/UmmAlQuwain.webp";
import imageservice8 from "@/app/(frontend)/assets/images/location/AlAin.webp";
const caseStudiesData = [
  {
    id: 1,
    title: "E-commerce Website Redesign",
    category: "E-commerce",
    image: imageservice1,
    modelimage: [
      { img: imageservice2 },
      { img: imageservice3 },
      { img: imageservice4 },
    ],
  },
  {
    id: 2,
    title: "Healthcare Portal UI/UX",
    category: "Healthcare",
    image: imageservice5,
    modelimage: [
      { img: imageservice6 },
      { img: imageservice7 },
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
