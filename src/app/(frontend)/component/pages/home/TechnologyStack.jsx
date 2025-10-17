"use client";
import React from "react";
import { motion } from "framer-motion";
import styles from "../../../assets/style/home/technologyStack.module.css";
import react from "@/app/(frontend)/assets/images/reacticon.svg";
import nodejs from "@/app/(frontend)/assets/images/nodejsicon.svg";
import laravel from "@/app/(frontend)/assets/images/laravelicon.svg";
import wordpress from "@/app/(frontend)/assets/images/wordpressicon.svg";
import magento from "@/app/(frontend)/assets/images/magentoicon.svg";
import shopify from "@/app/(frontend)/assets/images/shopifyicon.svg";
import flutter from "@/app/(frontend)/assets/images/fluttericon.svg";
import reactnative from "@/app/(frontend)/assets/images/reactnativeicon.svg";
import php from "@/app/(frontend)/assets/images/phpicon.svg";
import python from "@/app/(frontend)/assets/images/pythonicon.svg";
import aws from "@/app/(frontend)/assets/images/awsicon.svg";
import mongo from "@/app/(frontend)/assets/images/mongodbicon.svg";
import Image from "next/image";
import CommonTechnologyStack from "../common/CommonTechnologyStack";


const TechnologyStack = () => {
  return (
  <CommonTechnologyStack 
  heding={"Our Website Development Technology Stack"}
  subheding={"We possess deep expertise in all frontend and backend website development technologies."}
  techData={[
  { name: "React", image: react, gradient: "linear-gradient(180deg, #61DAFB 0%, #03C9FF 118.42%)" },
  { name: "Node.js", image: nodejs, gradient: "linear-gradient(180deg, #6CC04A 16.44%, #539E43 60.27%)" },
  { name: "Laravel", image: laravel, gradient: "linear-gradient(180deg, #FF6960 16.44%, #FF2D20 60.27%)" },
  { name: "WordPress", image: wordpress, gradient: "linear-gradient(180deg, #4A87A3 16.44%, #21759B 60.27%)" },
  { name: "Magento", image: magento, gradient: "linear-gradient(180deg, #FF7949 0%, #EC6737 118.42%)" },
  { name: "Shopify", image: shopify, gradient: "linear-gradient(180deg, #CEF682 16.44%, #95BF46 60.27%)" },
  { name: "Flutter", image: flutter, gradient: "linear-gradient(180deg, #45D1FD 16.44%, #02539A 100%)" },
  { name: "React Native", image: reactnative, gradient: "linear-gradient(180deg, #61DAFB 0%, #03C9FF 118.42%)" },
  { name: "PHP", image: php, gradient: "linear-gradient(180deg, #697EBA 17.27%, #6E81B6 73.33%)" },
  { name: "Python", image: python, gradient: "linear-gradient(180deg, #387EB8 -73.67%, #FFC331 27.62%)" },
  { name: "AWS", image: aws, gradient: "linear-gradient(180deg, #F7DCB4 17.91%, #FF9900 65.66%)" },
  { name: "MongoDB", image: mongo, gradient: "linear-gradient(180deg, #6CAC48 17.91%, #599636 65.66%)" },
]}
  />
  );
};

export default TechnologyStack;
