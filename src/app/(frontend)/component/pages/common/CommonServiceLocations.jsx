"use client";
import styles from "@/app/(frontend)/assets/style/common/commonServiceLocations.module.css";
import Image from "next/image";
import { useRouter } from "next/navigation";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import imageservice1 from "@/app/(frontend)/assets/images/location/dubai.webp";
import imageservice2 from "@/app/(frontend)/assets/images/location/AbuDhabi.webp";
import imageservice3 from "@/app/(frontend)/assets/images/location/Sharjah.webp";
import imageservice4 from "@/app/(frontend)/assets/images/location/Ajman.webp";
import imageservice5 from "@/app/(frontend)/assets/images/location/RasAlKhaimah.webp";
import imageservice6 from "@/app/(frontend)/assets/images/location/Fujairah.webp";
import imageservice7 from "@/app/(frontend)/assets/images/location/UmmAlQuwain.webp";
import imageservice8 from "@/app/(frontend)/assets/images/location/AlAin.webp";

const locations = [
  { name: "Web Development Dubai", image: imageservice1, link: "/" },
  { name: "Web Dev. Abu Dhabi", image: imageservice2, link: "/website-development-in-abu-dhabi" },
  { name: "Web Development Sharjah", image: imageservice3, link: "/website-development-in-sharjah" },
  { name: "Web Development Ajman", image: imageservice4, link: "/website-development-in-ajman" },
  { name: "Web Dev. Ras Al Khaimah", image: imageservice5, link: "/website-development-in-ras-al-khaimah" },
  { name: "Web Development Fujairah", image: imageservice6, link: "/website-development-in-fujairah" },
  { name: "Web Dev. Umm Al Quwain", image: imageservice7, link: "/website-development-in-umm-al-quwain" },
  { name: "Web Development Al Ain", image: imageservice8, link: "/website-development-in-al-ain" },


];

export default function CommonServiceLocations() {
  const router = useRouter();

  const [emblaRef] = useEmblaCarousel(
    {
      loop: false,
      align: "start",
      dragFree: true, // free swipe
    },
    [
      AutoScroll({
        speed: 1.2,             // scroll speed
        stopOnInteraction: true, // pause on swipe/drag
        stopOnMouseEnter: true,  // pause on hover
      }),
    ]
  );

  return (
    <section className={`frame-1200 py-100 sm-pt-50 sm-pb-50 sm-px-20 ${styles.container}`}>
      <h2 className="text-center sm-text-start mb-30">Our Service Locations</h2>

      <div className={styles.embla} ref={emblaRef}>
        <div className={styles.emblaContainer}>
          {locations.map((loc, index) => (
            <div
              key={index}
              className={styles.emblaSlide}
              onClick={() => router.push(loc.link)}
            >
              <Image
                src={loc.image}
                alt={loc.name}
                width={300}
                height={400}
                className={styles.image}
              />
              <div className={styles.overlay}>
                <p className={styles.city}>{loc.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
