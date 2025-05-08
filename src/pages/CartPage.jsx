import React from 'react'
import Topbar from '../components/common/Topbar'
import Header from '../components/common/Header'
import PageHeader from '../components/common/PageHeader'
import FooterSection from '../components/common/Footer'
import BookingSection from '../components/common/BookingSection'
import EmptyCart from '../components/EmptyCart'

function CartPage() {
  return (
    <>
      <Topbar/>
      <Header/>
      <PageHeader title={'CART'} />
      <EmptyCart/>
      <BookingSection/>
      <FooterSection/>
    </>
  )
}

export default CartPage