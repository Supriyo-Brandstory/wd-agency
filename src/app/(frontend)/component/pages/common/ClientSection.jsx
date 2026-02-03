"use client";

import React from "react";
import LogoScroller from "./LogoScroller";
import "./ClientSection.css";

const ClientSection = () => {
  // First row of logos
  const logosRow1 = [
    {
      src: "/assets/images/clients/logo-1.png",
      alt: "Our beloved client - HashedIn",
    },
    {
      src: "/assets/images/clients/logo-2.png",
      alt: "Our beloved client - Amazon Flex",
    },
    {
      src: "/assets/images/clients/logo-3.png",
      alt: "Our beloved client - Unicare Services",
    },
    {
      src: "/assets/images/clients/logo-4.png",
      alt: "Our beloved client - ALP Consulting",
    },
    {
      src: "/assets/images/clients/logo-5.png",
      alt: "Our beloved client - International Centre for Culinary Arts Dubai",
    },
    {
      src: "/assets/images/clients/logo-6.png",
      alt: "Our beloved client - MySyara",
    },
    {
      src: "/assets/images/clients/logo-7.png",
      alt: "Our beloved client - TAKELEAP",
    },
  ];

  // Second row of logos
  const logosRow2 = [
    {
      src: "/assets/images/clients/logo-8.png",
      alt: "Our beloved client - Sherpa Communications",
    },
    {
      src: "/assets/images/clients/logo-9.png",
      alt: "Our beloved client - FourNext",
    },
    {
      src: "/assets/images/clients/logo-10.png",
      alt: "Our beloved client - Spectrum Accounts",
    },
    {
      src: "/assets/images/clients/logo-11.png",
      alt: "Our beloved client - CoverB",
    },
    {
      src: "/assets/images/clients/logo-12.png",
      alt: "Our beloved client - The Electronics Group",
    },
    {
      src: "/assets/images/clients/logo-13.png",
      alt: "Our beloved client - Uno Capital",
    },
  ];

  return (
    <section className="client-section">
      <div className="container-fluid">
        <h2 className="section-title text-center mb-5">Our Valuable Clients</h2>

        {/* Row 1 - Scrolling Left */}
        <div className="mb-5">
          <LogoScroller logos={logosRow1} direction="left" speed={40} />
        </div>

        {/* Row 2 - Scrolling Right */}
        <div>
          <LogoScroller logos={logosRow2} direction="right" speed={35} />
        </div>
      </div>
    </section>
  );
};

export default ClientSection;
