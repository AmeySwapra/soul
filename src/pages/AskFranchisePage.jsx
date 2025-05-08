import React from 'react'
import Topbar from '../components/common/Topbar'
import Header from '../components/common/Header'
import PageHeader from '../components/common/PageHeader'
import BookingSection from '../components/common/BookingSection'
import FooterSection from '../components/common/Footer'
import SoulEssenceSection from '../components/SoulEssenceSection'

function AskFranchisePage() {
  return (
   <>
     <Topbar/>
     <Header/>
     <PageHeader title={'FRANCHISIES'} />
     <SoulEssenceSection/>
     <BookingSection/>
     <FooterSection/>
   </>
  )
}

export default AskFranchisePage