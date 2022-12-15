import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "bootstrap-icons/font/bootstrap-icons.css";
import "animate.css";
import store from "./redux/store";
import Navbar from "./layout/Navbar/Navbar";
import Slidersection from "./Slidersection/Slidersection";
import AboutSection from "./About";
import Footer from "./layout/Footer";
import { Provider } from "react-redux";
function App() {
  return (
    <>
      <BrowserRouter>
        <Provider store={store}>
          <Navbar />
          <Slidersection />
          <AboutSection />
          <Footer />
        </Provider>
      </BrowserRouter>
    </>
  );
}
export default App;
