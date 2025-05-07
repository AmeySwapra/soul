import React from "react";
import Topbar from "../components/common/Topbar";
import Header from "../components/common/Header";
import Carsosel from "../components/Carsosel";
import FooterSection from "../components/common/Footer";
import BookingSection from "../components/common/BookingSection";
import HomeAbout from "../components/HomeAbout";
import HomeService from "../components/HomeService";
import Offers from "../components/Offers";
import Stats from "../components/Stats";
import Promotion from "../components/promotion";
import Testimonials from "../components/Testimonials";

function HomePage() {
  return (
    <>
      <Topbar />
      <Header />
      <Carsosel />
      <HomeAbout />
      <HomeService />
      <Offers />
      <Stats />
      <Promotion />
      <Testimonials />
      <BookingSection />
      <FooterSection />
    </>
  );
}

export default HomePage;
