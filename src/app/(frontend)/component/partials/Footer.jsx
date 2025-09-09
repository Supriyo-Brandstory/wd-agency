import React from "react";
import styles from '@/app/(frontend)/assets/style/partials/footer.module.css';
import logo from '@/app/(frontend)/assets/images/logo.png';
import Image from "next/image";
import mailbox from '@/app/(frontend)/assets/images/icons/mailbox.svg';
import location from '@/app/(frontend)/assets/images/icons/location.svg';
import call from '@/app/(frontend)/assets/images/icons/call.svg';
import Link from "next/link";

// import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className={` ${styles.footer}`}>
      <div className="frame-1200">
      <div className={styles.container}>
        {/* Left Section */}


        {/* Links Section */}
        <div className={styles.linksWrapper}>
          <div className={styles.about}>
            <Image src={logo} alt="logo" />
            <p>
             Established in 2013, WD Agency is a leading web design and development agency in the UAE, delivering innovative and custom web solutions that drive business growth.

            </p>
            
          </div>
          <div>
            <h4>SERVICES</h4>
            <ul>
              <li><Link href="/web-development">Web Development</Link></li>
              <li><Link href="/frontend-development">Frontend Development</Link></li>
              <li><Link href="/full-stack-development">Full Stack Development</Link></li>
              <li><Link href="/e-commerce-web-development">E-commerce Web Development</Link></li>
              <li><Link href="/php-web-development">PHP Web Development</Link></li>
            </ul>
          </div>

          <div>
            <h4>COMPANY</h4>
            <ul>
              <li><Link href="/about-us">About Us</Link></li>
              <li><Link href="/portfolio">Portfolio</Link></li>
              <li><Link href="/case-studies">Case Studies</Link></li>
              <li><Link href="/testimonials">Testimonials</Link></li>
              <li><Link href="/contact-us">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4>SOLUTIONS</h4>
            <ul>
              <li> <Link href="/website-performance-optimization">Website Performance Optimization</Link></li>
              <li><Link href="/website-migration-service">Website Migration Service</Link></li>
              <li><Link href="/startup-solutions">Startup Solutions</Link></li>
            </ul>
          </div>


        </div>
        <div className={styles.linksWrapper2}>
          <div className={`${styles.contact} mt-20`}>
              <Link href={"mailto:info@websitedevelopmentagency.ae"} className="flex gap-x-10 items-center">
                <Image src={mailbox} alt="mailbox" width={30} height={30}/> info@websitedevelopmentagency.ae
              </Link>
              <Link href={"tel:+971 52 283 1655"} className="flex gap-x-10 items-center">
                <Image src={call} alt="call"  width={30} height={30}/> +971 52 283 165
              </Link>
              <Link href='#' className="flex gap-x-10 items-start">
               <Image src={location} alt="location"  width={30} height={30}/> G5, Al Meheri Plaza, opp DBC Building, Al Khabaisi Area, Deira Dubai - 81577
              </Link>
            </div>
          <div className={styles.cities}>
            <div>
               <h4>CITIES WE SERVE</h4>
            <ul>
              <li><Link href="/dubai">Dubai</Link></li>
              <li><Link href="/abu-dhabi">Abu Dhabi</Link></li>
              <li><Link href="/sharjah">Sharjah</Link></li>
              <li><Link href="/ajman">Ajman</Link></li>
              <li><Link href="/ras-al-khaimah">Ras Al Khaimah</Link></li>
              </ul>
            </div>
           
              <ul>
              <li><Link href="/fujairah">Fujairah</Link></li>
              <li><Link href="/umm-al-quwain">Umm Al Quwain</Link></li>
              <li><Link href="/al-ain">Al Ain</Link></li>
              <li><Link href="/khor-fakkan">Khor Fakkan</Link></li>
              <li><Link href="/dibba-al-fujairah">Dibba Al-Fujairah</Link></li>
            </ul>
          </div>

          <div className={styles.legal}>
            <h4>LEGAL</h4>
            <ul>
              <li><Link href="/privacy-policy">Privacy Policy</Link></li>
              <li><Link href="/terms-conditions">Terms & Conditions</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className={styles.bottom}>
        <p>© 2025 WebsiteDevelopmentAgency.ae. All rights reserved.</p>
      </div>
      </div>
    </footer>
  );
};

export default Footer;

