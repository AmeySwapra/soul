import React from 'react'
import Topbar from '../components/common/Topbar'
import Header from '../components/common/Header'
import PageHeader from '../components/common/PageHeader'
import FooterSection from '../components/common/Footer'
import BookingSection from '../components/common/BookingSection'
import BeforeAfterSlider from '../components/BeforeAfterSlider'
import AboutSection from '../components/AboutSection'
import SpaIntroduction from '../components/SpaIntroduction'
import HowItWorks from '../components/HowItWorks'

function AboutPage() {
  return (
    <>
      <Topbar/>
      <Header/>
      <PageHeader title={'ABOUT'} />
      <SpaIntroduction/>
      <HowItWorks/>
      <AboutSection/>
      <BeforeAfterSlider/>
      <BookingSection/>
      <FooterSection/>
    </>
  )
}

export default AboutPage