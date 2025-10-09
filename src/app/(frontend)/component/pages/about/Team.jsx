'use client'
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import SquareBox from "./SquareBox";
import img1 from "@/app/(frontend)/assets/images/about/team/1.webp";
import img2 from "@/app/(frontend)/assets/images/about/team/2.webp";
import img3 from "@/app/(frontend)/assets/images/about/team/3.webp";
import img4 from "@/app/(frontend)/assets/images/about/team/4.webp";
import css from "../../../assets/style/about/team.module.css";

const Team = () => {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkDesktop = () => setIsDesktop(window.innerWidth >= 1024);
    checkDesktop();
    window.addEventListener("resize", checkDesktop);
    return () => window.removeEventListener("resize", checkDesktop);
  }, []);

  const desktopData = [
    { image: img1.src },
    { number: "15+", title: "Web Developers", tags: ["React", "Node.Js", "Laravel", "Python"] },
    { image: img2.src },
    { number: "10+", title: "UI/UX Designers", tags: ["Figma", "Adobe Creative Suite", "Prototyping"] },
    { number: "8+", title: "Project Managers", tags: ["Agile", "Scrum", "Client Communication"] },
    { image: img4.src },
    { number: "6+", title: "QA Engineers", tags: ["Automated Testing", "Manual Testing", "Performance"] },
    { image: img3.src },
  ];

  const mobileData = [
    { image: img1.src },
    { number: "15+", title: "Web Developers", tags: ["React", "Node.Js", "Laravel", "Python"] },
    { image: img2.src },
    { number: "10+", title: "UI/UX Designers", tags: ["Figma", "Adobe Creative Suite", "Prototyping"] },
    { image: img4.src },
    { number: "8+", title: "Project Managers", tags: ["Agile", "Scrum", "Client Communication"] },
    { image: img3.src },
    { number: "6+", title: "QA Engineers", tags: ["Automated Testing", "Manual Testing", "Performance"] },
  ];

  const teamData = isDesktop ? desktopData : mobileData;

  // Variants for desktop animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <div className={`pb-60 ${css.container}`}>
      <h1 className="text-center pt-50 pb-20">Our Expert Team</h1>
      <p className="text-center mb-30">
        A Diverse Group Of Talented Professionals Dedicated To Delivering Exceptional Results
      </p>

      {isDesktop ? (
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {teamData.map((item, idx) => (
            <motion.div key={idx} variants={itemVariants}>
              <SquareBox
                number={item.number}
                title={item.title}
                tags={item.tags}
                image={item.image}
              />
            </motion.div>
          ))}
        </motion.div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0">
          {teamData.map((item, idx) => (
            <div key={idx}>
              <SquareBox
                number={item.number}
                title={item.title}
                tags={item.tags}
                image={item.image}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};


export default Team;
