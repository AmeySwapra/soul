import React from 'react'
import Topbar from '../components/common/Topbar'
import Header from '../components/common/Header'
import PageHeader from '../components/common/PageHeader'
import BookingSection from '../components/common/BookingSection'
import FooterSection from '../components/common/Footer'
import PricingPackages from '../components/PricingPackages'

function PackagePage() {
  return (
    <>
      <Topbar/>
      <Header/>
      <PageHeader title={'SPECIAL PACKAGES'} />
      <PricingPackages/>
      <BookingSection/>
      <FooterSection/>
    </>
  )
}

export default PackagePage