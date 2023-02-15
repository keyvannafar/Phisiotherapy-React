import React from 'react'
import "./Home.css"
import Navbar from "../layout/Navbar/Navbar";
import Slidersection from "../Slidersection/Slidersection";
import OurServices from "../ServicesSection";
import Contact from "../Contact/Contact";
import AboutSection from "../About";
import Sectionthree from "../Sectionthree";
import Footer from "../layout/Footer";
import ReserveSystem from "../ReserveSystem";
import ClinicInt from "../clinicInt";
import Quality from "../ourQuality";
import VisitSection from "../VisitSection";
import Phisiophotos from "../instagram";
import ServicesData from "../ServicesSection/OurServices/ServicesData";
export default function Home() {
  return (
    <>
      <div>
        <Navbar />
        <div className="bg-image">
          <Slidersection />
          <AboutSection />
          <OurServices />
          <ClinicInt />
          <Quality />
          <Phisiophotos />
          <VisitSection />
          <Sectionthree />
          <Contact />
        </div>
        <Footer />
      </div>
    </>
  );
}
