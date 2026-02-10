"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import styles from "@/app/(frontend)/assets/style/home/technologyStack.module.css";
import { useRouter } from "next/navigation";

// Import icons
import reactIcon from "@/app/(frontend)/assets/images/reacticon.svg";
import nodejsIcon from "@/app/(frontend)/assets/images/nodejsicon.svg";
import laravelIcon from "@/app/(frontend)/assets/images/laravelicon.svg";
import wordpressIcon from "@/app/(frontend)/assets/images/wordpressicon.svg";
import magentoIcon from "@/app/(frontend)/assets/images/magentoicon.svg";
import shopifyIcon from "@/app/(frontend)/assets/images/shopifyicon.svg";
import flutterIcon from "@/app/(frontend)/assets/images/fluttericon.svg";
import reactnativeIcon from "@/app/(frontend)/assets/images/reactnativeicon.svg";
import phpIcon from "@/app/(frontend)/assets/images/phpicon.svg";
import pythonIcon from "@/app/(frontend)/assets/images/pythonicon.svg";
import awsIcon from "@/app/(frontend)/assets/images/awsicon.svg";
import mongoIcon from "@/app/(frontend)/assets/images/mongodbicon.svg";

const techCategories = [
  {
    category: "Full Stack & Frameworks",
    description:
      "Modern frameworks for building scalable and high-performance applications.",
    techs: [
      {
        name: "React JS",
        image: reactIcon,
        gradient: "linear-gradient(180deg, #61DAFB 0%, #03C9FF 118.42%)",
        link: "/platforms/react-js-website-development",
      },
      {
        name: "Node.js",
        image: nodejsIcon,
        gradient: "linear-gradient(180deg, #6CC04A 16.44%, #539E43 60.27%)",
        link: "/platforms/nodejs-website-development",
      },
      {
        name: "Laravel",
        image: laravelIcon,
        gradient: "linear-gradient(180deg, #FF6960 16.44%, #FF2D20 60.27%)",
        link: "/platforms/laravel-website-development",
      },
      {
        name: "PHP",
        image: phpIcon,
        gradient: "linear-gradient(180deg, #697EBA 17.27%, #6E81B6 73.33%)",
        link: "/platforms/php-website-development",
      },
      {
        name: "Python",
        image: pythonIcon,
        gradient: "linear-gradient(180deg, #387EB8 -73.67%, #FFC331 27.62%)",
        link: "/platforms/python-website-development",
      },
    ],
  },
  {
    category: "CMS & E-commerce",
    description:
      "Powerful platforms for managing content and driving online sales.",
    techs: [
      {
        name: "WordPress",
        image: wordpressIcon,
        gradient: "linear-gradient(180deg, #4A87A3 16.44%, #21759B 60.27%)",
        link: "/platforms/wordpress-website-development",
      },
      {
        name: "Shopify",
        image: shopifyIcon,
        gradient: "linear-gradient(180deg, #CEF682 16.44%, #95BF46 60.27%)",
        link: "/platforms/shopify-website-development",
      },
      {
        name: "Magento",
        image: magentoIcon,
        gradient: "linear-gradient(180deg, #FF7949 0%, #EC6737 118.42%)",
        link: "/platforms/magento-website-development",
      },
      {
        name: "WooCommerce",
        image: wordpressIcon,
        gradient: "linear-gradient(180deg, #96588A 16.44%, #713B63 60.27%)",
        link: "/platforms/woo-commerce-website-development",
      },
    ],
  },
  {
    category: "Mobile App Technologies",
    description: "Cross-platform solutions for a seamless mobile experience.",
    techs: [
      {
        name: "Flutter",
        image: flutterIcon,
        gradient: "linear-gradient(180deg, #45D1FD 16.44%, #02539A 100%)",
        link: "/platforms/flutter-website-development",
      },
      {
        name: "React Native",
        image: reactnativeIcon,
        gradient: "linear-gradient(180deg, #61DAFB 0%, #03C9FF 118.42%)",
        link: "/platforms/react-native-website-development",
      },
    ],
  },
  {
    category: "Cloud & Databases",
    description: "Secure and scalable infrastructure for modern web apps.",
    techs: [
      {
        name: "AWS",
        image: awsIcon,
        gradient: "linear-gradient(180deg, #F7DCB4 17.91%, #FF9900 65.66%)",
        link: "/platforms/aws-website-development",
      },
      {
        name: "MongoDB",
        image: mongoIcon,
        gradient: "linear-gradient(180deg, #6CAC48 17.91%, #599636 65.66%)",
        link: "/platforms/mongodb-website-development",
      },
    ],
  },
];

const TechListing = () => {
  const router = useRouter();

  const handleLink = (link) => {
    if (link) router.push(link);
  };

  return (
    <section className="py-100 sm-py-50">
      <div className="frame-1200 sm-px-20">
        {techCategories.map((cat, catIndex) => (
          <div key={catIndex} className="mb-80 sm-mb-50 last:mb-0">
            <motion.div
              className="mb-40 sm-mb-30"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="mb-10">{cat.category}</h2>
              <p className="opacity-80">{cat.description}</p>
            </motion.div>

            <div className={styles.grid}>
              {cat.techs.map((tech, index) => (
                <motion.div
                  key={index}
                  className={styles.card}
                  style={{ "--hover-gradient": tech.gradient }}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  onClick={() => handleLink(tech.link)}
                >
                  <div className={styles.imageWrapper}>
                    <Image
                      src={tech.image}
                      alt={tech.name}
                      width={60}
                      height={60}
                    />
                  </div>
                  <h3>{tech.name}</h3>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechListing;
