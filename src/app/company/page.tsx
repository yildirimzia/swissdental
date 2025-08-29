import React from 'react'
import ServiceHero from './Hero'
import TeamBehind from './TeamBehind'
import HighlightsItems from './HighlightsItems'
import PioneeringWork from './PioneeringWork'
import TrainingCompany from './TrainingCompany'
import Contact from '../components/Contact'
import TrainingCountry from './TrainingCountry'

function page() {
  return (
   <>
     <ServiceHero />
     <TeamBehind/>
     <HighlightsItems />
     <PioneeringWork />
     <TrainingCompany />
     <Contact />
     <TrainingCountry />
   </>
  )
}

export default page