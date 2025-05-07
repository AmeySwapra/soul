import React from 'react'
import Topbar from '../components/common/Topbar'
import Header from '../components/common/Header'
import PageHeader from '../components/common/PageHeader'
import BookingSection from '../components/common/BookingSection'
import FooterSection from '../components/common/Footer'
import SpaGallery from '../components/SpaGallery'

function GalleryPage() {
  return (
    <>
      <Topbar/>
      <Header/>
      <PageHeader title={'GALLERY'} />
      <SpaGallery/>
      <BookingSection/>
      <FooterSection/>
    </>
  )
}

export default GalleryPage