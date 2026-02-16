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
      src: "/assets/images/clients/leru-partners.png",
      alt: "Our beloved client - Leru Partners",
    },
    {
      src: "/assets/images/clients/leru-remote.png",
      alt: "Our beloved client - Leru Remotelabs",
    },
    {
      src: "/assets/images/clients/mercedes-benz.png",
      alt: "Our beloved client - Mercedes-Benz",
    },
  ];

  // Second row of logos
  const logosRow2 = [
    {
      src: "/assets/images/clients/nestle.png",
      alt: "Our beloved client - Nestle",
    },
    {
      src: "/assets/images/clients/travelx.png",
      alt: "Our beloved client - TravelX",
    },
    {
      src: "/assets/images/clients/wipro.png",
      alt: "Our beloved client - Wipro",
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
        <h2 className="section-title text-center mb-5">Powered 300+ Brands with Future-Ready Tech.</h2>

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
