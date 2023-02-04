import { BrowserRouter } from "react-router-dom";
import React from "react";
import { useState } from "react";
import "./App.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "bootstrap-icons/font/bootstrap-icons.css";
import "animate.css";
import Procontext from "./Context/Procontext";
import ServicesData from "./ServicesSection/OurServices/ServicesData";
import store from "./redux/store";
import Navbar from "./layout/Navbar/Navbar";
import Slidersection from "./Slidersection/Slidersection";
import OurServices from "./ServicesSection";
import Contact from "./Contact/Contact";
import AboutSection from "./About";
import Sectionthree from "./Sectionthree";
import Footer from "./layout/Footer";
import { Provider } from "react-redux";
import ReserveSystem from "./ReserveSystem";
import ClinicInt from "./clinicInt";
import Quality from "./ourQuality";
import VisitSection from "./VisitSection";
import Phisiophotos from "./instagram";
function App() {
  const [Pro, setPro] = useState(1);
  return (
    <>
      <main className="main ">
        <BrowserRouter>
          <Procontext.Provider value={[Pro, setPro]}>
            <Provider store={store}>
              <section className="has-parallax"> </section>
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
            </Provider>
          </Procontext.Provider>
        </BrowserRouter>
      </main>
    </>
  );
}
export default App;
