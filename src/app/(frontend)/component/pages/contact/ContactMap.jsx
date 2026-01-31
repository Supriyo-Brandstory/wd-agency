import React from "react";
import styles from "@/app/(frontend)/assets/style/contact/contactMap.module.css";

const ContactMap = () => {
  return (
    <section className={styles.mapSection}>
      <div className="frame-1200 sm-px-20 mt-20">
        <div className={styles.mapContainer}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d925966.4118362484!2d55.317707049999996!3d24.9641992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c997bd477857655%3A0xec325ddfc56901a6!2sWD%20Agency-%20Website%20Development%20Agency!5e0!3m2!1sen!2sin!4v1769863616415!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="WD Agency Location Map"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default ContactMap;
