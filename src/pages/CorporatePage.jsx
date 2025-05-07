import React from 'react'
import Topbar from '../components/common/Topbar'
import Header from '../components/common/Header'
import PageHeader from '../components/common/PageHeader'
import CorporateSpaPackages from '../components/CorporateSpaPackages'
import BookingSection from '../components/common/BookingSection'
import FooterSection from '../components/common/Footer'

function CorporatePage() {
  return (
   <>
     <Topbar/>
     <Header/>
     <PageHeader title={'CORPORATE PACKAGE'} />
     <CorporateSpaPackages/>
     <BookingSection/>
     <FooterSection/>
   </>
  )
}

export default CorporatePage