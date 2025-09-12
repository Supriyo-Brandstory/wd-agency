'use client'
import Image from "next/image";
import { motion } from "framer-motion";
import styles from "@/app/(frontend)/assets/style/about/corevalue.module.css";

const CoreValueBox = ({ icon, title, description }) => {
    return (
        <motion.div
            className={styles.coreValueWrapper}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.4 }}
        >
            <div className={styles.coreValueCard}>
                <div className={styles.iconBadge}>
                    {icon && (
                        <Image
                            src={icon}
                            alt={title || "core value icon"}
                            className={styles.iconImage}
                        />
                    )}
                </div>
                {title && <h3>{title}</h3>}
                {description && <p>{description}</p>}
            </div>
        </motion.div>
    );
};

export default CoreValueBox;
