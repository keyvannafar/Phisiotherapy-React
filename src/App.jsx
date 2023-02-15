import { BrowserRouter } from "react-router-dom";
import React from "react";
import { useState } from "react";
import "./App.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "bootstrap-icons/font/bootstrap-icons.css";
import "animate.css";
import Procontext from "./Context/Procontext";

import store from "./redux/store";

import { Provider } from "react-redux";

import Home from "./Home";
function App() {
  const [Pro, setPro] = useState(1);
  return (
    <>
      <BrowserRouter>
        <Procontext.Provider value={[Pro, setPro]}>
          <Provider store={store}>
            <Home />
           
            {/* <Navbar />
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
            <Footer /> */}
          </Provider>
        </Procontext.Provider>
      </BrowserRouter>
    </>
  );
}
export default App;
