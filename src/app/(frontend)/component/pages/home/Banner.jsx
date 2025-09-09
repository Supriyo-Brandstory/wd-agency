import styles from "@/app/(frontend)/assets/style/home/banner.module.css";

export default function Banner() {
  return (
    <section className={`sm-text-start ${styles.banner}`}>
      <div className={styles.content}>
        <p className="fw-600 fs-24 mb-20 sm-mb-20">Are you searching for</p>
        <h1 className="mb-20 sm-mb-20">
          Well Experienced <br />
          Web Development Company In UAE?
        </h1>
        <p className="frame-800 mb-40 sm-mb-30">
          We are WD Agency, the best website development agency in Dubai, UAE. Let’s create your website beyond the ordinary. 

        </p>
        <div className={`mb-20 sm-mb-20 ${styles.buttons}`}>
          <button className={`fw-600 fs-22 ${styles.primary}`}>Enquiry Now</button>
          <button className={`fw-600 fs-22 ${styles.secondary}`}>See Portfolio</button>
        </div>
      {/* <div className={styles.glowLineWrapper}></div> */}

      </div>
    </section>
  );
}
