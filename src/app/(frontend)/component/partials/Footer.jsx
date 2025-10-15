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
             Established in 2014, WD Agency is a leading web design and development agency in Dubai, UAE, delivering innovative and custom web design solutions for startups, SMEs, and Large-scale enterprises.

            </p>
            
          </div>
          <div>
            <h4>INDUSTRIES</h4>
            <ul>
              <li><Link href="/healthcare-web-development">Healthcare Websites</Link></li>
              <li><Link href="/travel-web-development">Travel Websites</Link></li>
              <li><Link href="/real-estate-web-development">Real Estate Websites</Link></li>
              <li><Link href="/e-commerce-web-development">E-commerce Websites</Link></li>
              <li><Link href="/corporate-web-development">Corporate Websites</Link></li>
              <li><Link href="/portfolio-web-development">Portfolio Websites</Link></li>
              <li><Link href="/technology-web-development">Tech Startup Websites</Link></li>
            </ul>
          </div>

          <div>
            <h4>ABOUT</h4>
            <ul>
              <li><Link href="/about-us">About Us</Link></li>
              <li><Link href="#">Portfolio</Link></li>
              <li><Link href="#">Case Studies</Link></li>
              <li><Link href="#">Testimonials</Link></li>
              <li><Link href="/contact-us">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4>SOLUTIONS</h4>
            <ul>
              <li> <Link href="#">Website Performance Optimization</Link></li>
              <li><Link href="#">Website Migration Service</Link></li>
              <li><Link href="#">Startup Solutions</Link></li>
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
               <Image src={location} alt="location"  width={30} height={30}/> G6, Al Meheri Plaza, opp DBC Building, Al Khabaisi Area, Deira Dubai - 81577
              </Link>
            </div>
          <div className={styles.cities}>
            <div>
               <h4>CITIES WE SERVE</h4>
            <ul>
              <li><Link href="/">Dubai</Link></li>
              <li><Link href="/website-development-in-abu-dhabi">Abu Dhabi</Link></li>
              <li><Link href="/website-development-in-sharjah">Sharjah</Link></li>
              <li><Link href="/website-development-in-ajman">Ajman</Link></li>
              <li><Link href="/website-development-in-ras-al-khaimah">Ras Al Khaimah</Link></li>
              </ul>
            </div>
           
              <ul>
              <li><Link href="/website-development-in-fujairah">Fujairah</Link></li>
              <li><Link href="/website-development-in-umm-al-quwain">Umm Al Quwain</Link></li>
              <li><Link href="/website-development-in-al-ain">Al Ain</Link></li>
              <li><Link href="#">Khor Fakkan</Link></li>
              <li><Link href="#">Dibba Al-Fujairah</Link></li>
            </ul>
          </div>

          <div className={styles.legal}>
            <h4>LEGAL</h4>
            <ul>
              <li><Link href="#">Privacy Policy</Link></li>
              <li><Link href="#">Terms & Conditions</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className={styles.bottom}>
        <p>© 2014-2025 WD Agency. All rights reserved.</p>
      </div>
      </div>
    </footer>
  );
};

export default Footer;

