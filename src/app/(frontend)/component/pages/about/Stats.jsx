'use client';
import { motion } from "framer-motion";
import css from '../../../assets/style/about/stats.module.css';

const Stats = () => {
  const data = [
    { id: 1, title: "12+", subtitle: "Years in Business" },
    { id: 2, title: "750+", subtitle: "Projects Delivered" },
    { id: 3, title: "500+", subtitle: "Satisfied Clients" },
    { id: 4, title: "50+", subtitle: "Team Members" },
  ];

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <div className="frame-1200 pb-100 sm-pb-50 sm-px-20 sm-pt-0">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-30">
        {data.map((item, index) => (
          <motion.div
            key={item.id}
            className={css.statBox}
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: index * 0.2 }}
          >
            <h1 className="fs-64">{item.title}</h1>
            <p className={css.subtitle}>{item.subtitle}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Stats;
