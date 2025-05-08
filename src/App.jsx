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
import CartPage from './pages/CartPage'
import AccountPage from './pages/AccountPage'
import WishListPage from './pages/WishListPage'
import AskFranchisePage from './pages/AskFranchisePage'

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
          <Route path='/cart' element={<CartPage/>} />
          <Route path='/checkout' element={<CartPage/>} />
          <Route path='/account' element={<AccountPage/>} />
          <Route path='/wishlist' element={<WishListPage/>} />
          <Route path='/franchise' element={<AskFranchisePage/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App