import { BrowserRouter,  } from "react-router-dom";
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
import AboutSection from "./About";
import Footer from "./layout/Footer";
import { Provider } from "react-redux";
function App() {
  const [Pro, setPro] = useState(1);
  return (
    <>
      <BrowserRouter>
        <Procontext.Provider value={[Pro, setPro]}>
          <Provider store={store}>
            <Navbar />
            <Slidersection />
            <AboutSection />
            <OurServices />
            <Footer />
          </Provider>
        </Procontext.Provider>
      </BrowserRouter>
    </>
  );
}
export default App;
