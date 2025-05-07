import React from 'react'
import Topbar from '../components/common/Topbar'
import Header from '../components/common/Header'
import PageHeader from '../components/common/PageHeader'
import ContactSection from '../components/ContactSection'
import BookingSection from '../components/common/BookingSection'
import FooterSection from '../components/common/Footer'
import Map from '../components/Map'

function ContactPage() {
  return (
    <>
      <Topbar/>
      <Header/>
      <PageHeader title={'CONTACT US'} />
      <ContactSection/>
      <Map/>
      <BookingSection/>
      <FooterSection/>
    </>
  )
}

export default ContactPage