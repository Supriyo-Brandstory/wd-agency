import React from 'react'
import Banner from '../../component/pages/home/Banner'
import Trusted from '../../component/pages/home/Trusted'
import BestAgency from '../../component/pages/home/BestAgency'
import WhatSetsUs from '../../component/pages/home/WhatSetsUs'
import OurCoreStrengths from '../../component/pages/home/OurCoreStrengths'
import TechnologyStack from '../../component/pages/home/TechnologyStack'
import DevelopmentServices from '../../component/pages/home/DevelopmentServices'
import DevelopmentProcess from '../../component/pages/home/ DevelopmentProcess'
import Portfolio from '../../component/pages/home/Portfolio'
import Webexperiences from '../../component/pages/home/WebExperiences'
import WebDesignApproach from '../../component/pages/home/WebDesignApproach'
import OurJourney from '../../component/pages/home/OurJourney'
import FaqSection from '../../component/pages/home/FaqSection'
import CtaSection from '../../component/pages/home/CtaSection'
import CommonProtfolio from '../../component/pages/common/CommonProtfolio'



import protfolio1 from '@/app/(frontend)/assets/images/protfolio/1.webp'
import protfoliologo1 from '@/app/(frontend)/assets/images/protfolio/varsha-logistics-pvt-ltd.webp'
import protfolio2 from '@/app/(frontend)/assets/images/protfolio/2.webp'
import protfoliologo2 from '@/app/(frontend)/assets/images/protfolio/ferns.webp'
import protfolio3 from '@/app/(frontend)/assets/images/protfolio/3.webp'
import protfoliologo3 from '@/app/(frontend)/assets/images/protfolio/kshemavan.webp'
import protfolio4 from '@/app/(frontend)/assets/images/protfolio/4.webp'
import protfoliologo4 from '@/app/(frontend)/assets/images/protfolio/equence.webp'
const page = () => {
  return (
    <div>
        <Banner 
        text1={'Are you searching for'} 
        text2={"Well Experienced <br/>Web Development Company In UAE?"}
        text3={" We are WD Agency, the best website development agency in Dubai, UAE. Let’s create your website beyond the ordinary."}
          
          />
        <Trusted/>
        <BestAgency/>
        <WhatSetsUs/>
        <OurCoreStrengths/>
        <TechnologyStack/>
        <DevelopmentServices/>
        <DevelopmentProcess/>
        {/* <Portfolio/> */}
         <CommonProtfolio
        heding={"Our Website Design Portfolio"}
        desc={'We have worked with 500+ clients across Dubai and the United Arab Emirates. See our extensive website design and development portfolio here'}
          protfoliodata ={[
            {
              id: "01",
              image: protfolio1,
              logo: protfoliologo1,
            },
            {
              id: "02",
              image: protfolio2,
              logo: protfoliologo2,
            },
            {
              id: "03",
              image: protfolio3,
              logo: protfoliologo3,
            },
            {
              id: "04",
              image: protfolio4,
              logo: protfoliologo4,
            },
        ]}
        />
        <Webexperiences/>
        <WebDesignApproach/>
        <OurJourney/>
       
        <FaqSection/>
        <CtaSection/>
    </div>
  )
}

export default page

export const metadata = {
  title: "Premier Web Design & Development Agency in Dubai | WD Agency",
  description: "Transform your online presence with our top-rated web design and development services in Dubai. With 12+ years of experience, 50+ expert developers, and over 750 successful projects, we deliver scalable, responsive, and SEO-friendly websites that drive business growth. Get a custom quote today!",
};