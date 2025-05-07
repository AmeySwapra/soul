import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import PackagePage from './pages/PackagePage'
import GalleryPage from './pages/GalleryPage'
import ContactPage from './pages/ContactPage'
import MemberShipPage from './pages/MemberShipPage'
import GiftPage from './pages/GiftPage'
import CorporatePage from './pages/CorporatePage'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/about-us' element={<AboutPage/>} />
          <Route path='/packages' element={<PackagePage/>} />
          <Route path='/gallery' element={<GalleryPage/>} />
          <Route path='/contact' element={<ContactPage/>} />
          <Route path='/gift' element={<GiftPage/>} />
          <Route path='/membership-plan' element={<MemberShipPage/>} />
          <Route path='/corporate-packages' element={<CorporatePage/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App