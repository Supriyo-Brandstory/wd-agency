import React from "react";
import styles from "@/app/(frontend)/assets/style/common/commonAboutPage.module.css";
import Image from "next/image";

const CommonAboutPage = ({ text1, text2, text3, img }) => {
  return (
    <div className="frame-1200 py-100 sm-pt-50 sm-pb-50 sm-px-20">
      <div className={styles.flex}>
        <div className={styles.left} style={{ "--width": "55%" }}>
          <h2>{text1}</h2>
          <Image
            src={img}
            alt="sharjah"
            style={{ "--height": "391px", "--width": "628px" }}
            className="d-none m-block mt-20"
          />
          <p className="my-20" dangerouslySetInnerHTML={{ __html: text2 }}></p>
          <p dangerouslySetInnerHTML={{ __html: text3 }}></p>
        </div>
        <div className={styles.right} style={{ "--width": "45%" }}>
          <Image
            src={img}
            alt="sharjah"
            style={{ "--height": "391px", "--width": "628px" }}
            className="d-block m-none"
          />
        </div>
      </div>
    </div>
  );
};

export default CommonAboutPage;
