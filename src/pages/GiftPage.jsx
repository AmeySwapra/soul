import React from 'react'
import Topbar from '../components/common/Topbar'
import Header from '../components/common/Header'
import PageHeader from '../components/common/PageHeader'
import BookingSection from '../components/common/BookingSection'
import FooterSection from '../components/common/Footer'
import GiftCardGrid from '../components/GiftCardGrid'

function GiftPage() {
  return (
    <>
       <Topbar/>
       <Header/>
       <PageHeader title={'GIFT'}/>
       <GiftCardGrid/>
       <BookingSection/>
       <FooterSection/>
    </>
  )
}

export default GiftPage