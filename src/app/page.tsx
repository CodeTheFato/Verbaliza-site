/* eslint-disable prettier/prettier */
'use client'
import Navbar from './components/navbar/Navbar'
import HomePage from './components/home/HomePage'
import { SectionHome } from './components/sectionHome/SectionHome'
import { SectionFlow } from './components/sectionFlow/SectionFlow'
import { SectionJourney } from './components/sectionJourney/SectionJourney'
import { SectionBusiness } from './components/sectionBusiness/SectionBusiness'
import { SectionQuestion } from './components/sectionQuestion/SectionQuestion'
import { SectionFooter } from './components/sectionFooter/SectionFooter'
import { SectionClient } from './components/sectionClient/SectionClient'
import { SectionContact } from './components/sectionContact/SectionContact'
import { SectionPrices } from './components/sectionPrices/SectionPrices'
import { SectionGoogle } from './components/sectionGoogle/SectionGoogle'
import { SectionStatistics } from './components/sectionStatistics/sectionStatistics'

export default function Home() {
  return (
    <>
      <Navbar />
      <HomePage />
      <SectionHome />
      <SectionFlow />
      <SectionJourney />
      <SectionGoogle/>
      <SectionStatistics/>
      <SectionBusiness />
      <SectionClient />
      <SectionPrices />
      <SectionQuestion />
      <SectionContact />
      <SectionFooter />
    </>
  )
}
