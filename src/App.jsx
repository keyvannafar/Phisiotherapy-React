import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "bootstrap-icons/font/bootstrap-icons.css";
import "animate.css";
import Navbar from "./layout/Navbar/Navbar";
import Footer from "./layout/Footer";
function App() {
  return (
    <>
      <Navbar />
      <Footer />
    </>
  );
}
export default App;
