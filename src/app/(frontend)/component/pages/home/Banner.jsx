import styles from "@/app/(frontend)/assets/style/home/banner.module.css";
import Link from "next/link";

export default function Banner({
  text1,
  text2,
  text3
}) {
  return (
    <section className={`sm-text-start ${styles.banner}`}>
      <div className={styles.content}>
        <p className="fw-600 fs-24 mb-20 sm-mb-20">{text1 || ''}</p>
        <h1
          className="mb-20 sm-mb-20"
          dangerouslySetInnerHTML={{ __html: text2 || '' }}
        ></h1>


        <p className="frame-800 mb-40 sm-mb-30">
        {text3 || ''}
        </p>
        <div className={`mb-20 sm-mb-20 ${styles.buttons}`}>
          <Link  href="/contact-us" className={`fw-600 fs-22 ${styles.primary}`}>Enquiry Now</Link>
          <Link href="/case-studies" className={`fw-600 fs-22 ${styles.secondary}`}>See Portfolio</Link>
        </div>
        {/* <div className={styles.glowLineWrapper}></div> */}

      </div>
    </section>
  );
}
