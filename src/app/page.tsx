/* eslint-disable prettier/prettier */
'use client'
import Navbar from './components/navbar/Navbar'
import HomePage from './components/home/HomePage'
import { SectionHome } from './components/sectionHome/SectionHome'
import { SectionFlow } from './components/sectionFlow/SectionFlow'
import { SectionJourney } from './components/sectionJourney/SectionJourney'
import { SectionBusiness } from './components/sectionBusiness/SectionBusiness'

export default function Home() {
  return (
    <>
      <Navbar />
      <HomePage />
      <SectionHome />
      <SectionFlow />
      <SectionJourney />
      <SectionBusiness />
    </>
  )
}
