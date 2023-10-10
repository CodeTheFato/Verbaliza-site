/* eslint-disable prettier/prettier */
'use client'
import Navbar from './components/navbar/Navbar'
import HomePage from './components/home/HomePage'
import { SectionHome } from './components/sectionHome/SectionHome'

export default function Home() {
  return (
    <>
      <Navbar />
      <HomePage />
      <SectionHome />
    </>
  )
}
