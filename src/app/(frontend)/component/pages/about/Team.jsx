'use client'
import { motion } from "framer-motion";
import SquareBox from "./SquareBox";
import img1 from "@/app/(frontend)/assets/images/about/team/1.jpg";
import img2 from "@/app/(frontend)/assets/images/about/team/2.jpg";
import img3 from "@/app/(frontend)/assets/images/about/team/3.jpg";
import img4 from "@/app/(frontend)/assets/images/about/team/4.jpg";
import css from "../../../assets/style/about/team.module.css";

const Team = () => {
  const teamData = [
    { image: img1.src },
    { number: "15+", title: "Senior Developers", tags: ["React", "Node.Js", "Laravel", "Python"] },
    { image: img2.src },
    { number: "10+", title: "UI/UX Designers", tags: ["Figma", "Adobe Creative Suite", "Prototyping"] },
    { number: "8+", title: "Project Managers", tags: ["Agile", "Scrum", "Client Communication"] },
    { image: img4.src },
    { number: "6+", title: "Quality Assurance", tags: ["Automated Testing", "Manual Testing", "Performance"] },
    { image: img3.src },
  ];

  // Parent container variant for staggered animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, // delay between child animations
      },
    },
  };

  // Each card animation
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div className={`pb-60 ${css.container}`}>
      <h1 className="text-center pt-50 pb-20">Our Expert Team</h1>
      <p className="text-center mb-30">
        A Diverse Group Of Talented Professionals Dedicated To Delivering Exceptional Results
      </p>

      {/* Animated Grid */}
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
    </div>
  );
};

export default Team;
