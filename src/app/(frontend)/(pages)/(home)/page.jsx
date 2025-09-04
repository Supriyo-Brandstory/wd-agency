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

const page = () => {
  return (
    <div>
        <Banner/>
        <Trusted/>
        <BestAgency/>
        <WhatSetsUs/>
        <OurCoreStrengths/>
        <TechnologyStack/>
        <DevelopmentServices/>
        <DevelopmentProcess/>
        <Portfolio/>
        <Webexperiences/>
        <WebDesignApproach/>
        <OurJourney/>
        <FaqSection/>
        <CtaSection/>
    </div>
  )
}

export default page