import React from 'react'
import Topbar from '../components/common/Topbar'
import Header from '../components/common/Header'
import PageHeader from '../components/common/PageHeader'
import BookingSection from '../components/common/BookingSection'
import FooterSection from '../components/common/Footer'
import MembershipPlans from '../components/MembershipPlans'

function MemberShipPage() {
  return (
    <>
      <Topbar/>
      <Header/>
      <PageHeader title={'MEMBERSHIP PLAN'} />
      <MembershipPlans/>
      <BookingSection/>
      <FooterSection/>
    </>
  )
}

export default MemberShipPage