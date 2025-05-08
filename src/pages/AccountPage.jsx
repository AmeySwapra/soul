import React from 'react'
import Topbar from '../components/common/Topbar'
import Header from '../components/common/Header'
import PageHeader from '../components/common/PageHeader'
import FooterSection from '../components/common/Footer'
import BookingSection from '../components/common/BookingSection'
import LoginRegister from '../components/LoginRegister'


function AccountPage() {
  return (
    <>
      <Topbar/>
      <Header/>
      <PageHeader title={'ACCOUNT'} />
      <LoginRegister/>
      <BookingSection/>
      <FooterSection/>
    </>
  )
}

export default AccountPage