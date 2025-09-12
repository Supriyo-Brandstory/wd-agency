import Image from "next/image";
import styles from "@/app/(frontend)/assets/style/about/corevalue.module.css";

const CoreValueBox = ({ icon, title, description }) =>{
    return (
        <div className={styles.coreValueWrapper}>
            <div className={styles.coreValueCard}>
                <div className={styles.iconBadge}>
                    {icon && (
                        <Image src={icon} alt={title || "core value icon"} className={styles.iconImage} />
                    )}
                </div>
                {title && <h3>{title}</h3>}
                {description && (
                    <p className="">
                        {description}
                    </p>
                )}
            </div>
        </div>
    );
}

export default CoreValueBox;