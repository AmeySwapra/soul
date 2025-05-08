import React from 'react'
import Topbar from '../components/common/Topbar'
import Header from '../components/common/Header'
import PageHeader from '../components/common/PageHeader'
import BookingSection from '../components/common/BookingSection'
import FooterSection from '../components/common/Footer'
import Wishlist from '../components/Wishlist'


function WishListPage() {
  return (
    <>
      <Topbar/>
      <Header/>
      <PageHeader title={'WISHLIST'} />
      <Wishlist/>
      <BookingSection/>
      <FooterSection/>
    </>
  )
}

export default WishListPage