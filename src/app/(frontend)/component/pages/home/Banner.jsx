import styles from "@/app/(frontend)/assets/style/home/banner.module.css";

export default function Banner() {
  return (
    <section className={`sm-text-start ${styles.banner}`}>
      <div className={styles.content}>
        <p className="fw-600 fs-24 mb-20 sm-mb-10">Are you searching for</p>
        <h1 className="mb-20 sm-mb-10">
          Well Experienced <br />
          Web Development Company In UAE?
        </h1>
        <p className="frame-800 mb-40 sm-mb-10">
          Website Development Agency is a widely recommended web development
          company in Dubai, UAE.
        </p>
        <div className={`mb-20 sm-mb-10 ${styles.buttons}`}>
          <button className={`fw-600 fs-22 ${styles.primary}`}>Enquiry Now</button>
          <button className={`fw-600 fs-22 ${styles.secondary}`}>Our Portfolio</button>
        </div>
      {/* <div className={styles.glowLineWrapper}></div> */}

      </div>
    </section>
  );
}
