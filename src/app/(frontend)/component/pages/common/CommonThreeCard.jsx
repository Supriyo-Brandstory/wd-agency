import React from "react";
import styles from "@/app/(frontend)/assets/style/common/commonThreeCard.module.css";
import Image from "next/image";
import Link from "next/link";

const CommonThreeCard = ({ text1, text2, boxdata }) => {
  return (
    <div className="frame-1200 pt-100 sm-pt-0 sm-pb-50 sm-px-20">
      <h2
        className="text-center sm-text-start mb-20"
        dangerouslySetInnerHTML={{ __html: text1 }}
      ></h2>
      <p className="text-center mb-40 sm-text-start">{text2}</p>
      <div className={styles.grid}>
        {boxdata.map((item, index) => (
          <div className={styles.card} key={index}>
            <div className={styles.imgbox}>
              {item.img ? (
                <Image src={item.img} alt="Icon" />
              ) : (
                <div className={styles.iconWrapper}>{item.icon}</div>
              )}
            </div>
            <h4 className="my-15">{item.title}</h4>
            <p>{item.desc}</p>
            {item.link && (
              <div className={styles.linkBox}>
                <Link href={item.link} className={styles.link}>
                  {item.linkText}
                </Link>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommonThreeCard;
