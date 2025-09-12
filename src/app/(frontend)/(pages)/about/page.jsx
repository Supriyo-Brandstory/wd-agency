import React from 'react'
import CommonBanner from '../../component/pages/common/CommonBanner';
import Stats from '../../component/pages/about/Stats.jsx';
import OurStory from '../../component/pages/about/OurStory';
import MissionAndVission from '../../component/pages/about/MissionAndVision.jsx';
import CoreValues from '../../component/pages/about/CoreValues';
import Team from '../../component/pages/about/Team';
import Contact from '../../component/pages/about/Contact';

import bannerimages from '@/app/(frontend)/assets/images/about/about-banner.jpg';

const page = () => {
  return (
    <div>
        <CommonBanner
            bannerImage={`url(${bannerimages.src})`}
            title={`About\nWebsiteDevelopmentAgency.Ae`}
            subtitle={"We are a leading web development agency based in the UAE, specializing in creating innovative digital solutions that drive business growth and success."}
        />
        <OurStory />
        <Stats />
        <MissionAndVission />
        <CoreValues />
        <Team />
        <Contact />
    </div>
  )
}

export default page

export const metadata = {
  title: "Premier Web Design & Development Agency in Dubai | WD Agency",
  description: "Transform your online presence with our top-rated web design and development services in Dubai. With 12+ years of experience, 50+ expert developers, and over 750 successful projects, we deliver scalable, responsive, and SEO-friendly websites that drive business growth. Get a custom quote today!",
};