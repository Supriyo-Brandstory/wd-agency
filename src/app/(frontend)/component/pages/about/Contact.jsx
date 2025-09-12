import React from "react";
import Image from "next/image";
import ContactImg from "@/app/(frontend)/assets/images/about/contact.png";
import css from "../../../assets/style/about/contact.module.css";

const Contact = () => {
  return (
    <div className="relative frame-1200 mb-50">
      {/* gradient overlay */}
      <div className={`absolute bottom-0 left-0 w-full h-18/20 bg-gradient-to-r from-[#5C405C] to-[#292929] rounded-2xl ${css.contactbg}`} />
      
      <div className="relative flex flex-col md:flex-row items-center gap-8">
        {/* data section */}
        <div className="pl-20 w-full z-10 py-30">
          <h1 className="fs-38">
            Ready to work with us?
          </h1>
          <p className="fs-20 py-10">
            Let's discuss your project and see how our expertise can help you achieve your digital goals.
          </p>
          {/* Buttons */}
          <div className={css.buttonGroup}>
            <button className={css.primaryButton}>Contact Us Today</button>
            <button className={css.secondaryButton}>View Our Work</button>
          </div>
        </div>

        {/* image section */}
        <Image
          src={ContactImg}
          alt="Contact"
          className={`rounded-lg h-full z-10 ${css.image}`}
        />
      </div>
    </div>
  );
};

export default Contact;
