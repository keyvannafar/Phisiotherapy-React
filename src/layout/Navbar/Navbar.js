//import './App.css';
import "./Navbar.css";
import De from "../../images/languageIcon/de.jpg";
import En from "../../images/languageIcon/en.jpg";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavData } from "./dataNavbar/DataNav";
import { NavDataEnglisch } from "./dataNavbar/DataNav";
import NavbarText from "./dataNavbar";
import logo from "../../images/other/logo-pardish-larg1.png"
function Navbar() {
  const setLanguage = useDispatch();
  const setId = useDispatch();
  const [Lan, setLan] = useState(false);
  const Language = useSelector((state) => state.LanChange.Language);
  function toggleLan() {
    setLan(!Lan);
    Lan == false
      ? setLanguage({ type: "Englisch" })
      : setLanguage({ type: "Deutsch" });
  }
  return (
    <>
      <div id="home"></div>
      <nav
        className={`navbar ${
          Language == true ? "mainnav" : "mainnavPer"
        } navbar-expand-lg navbar-light`}
      >
        <div className="container-fluid container">
          <a
            className="text-white mob-logo"
            href="https://github.com/keyvannafar"
          >
            <img className="mobLogo" src={logo} />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon bg-white"></span>
          </button>
          <div class="dropdown">
            <button class="dropbtn">
              {Lan == true ? (
                <div className="lanMenuIcon">
                  <img src={En} />
                </div>
              ) : (
                <div className="lanMenuIcon">
                  <img src={De} />
                </div>
              )}
            </button>
            <div
              className={` ${
                Language == true ? "rtlClass" : "dropdownDirection"
              }`}
            >
              <div class="dropdown-content">
                <a href="#">
                  {Lan == true ? (
                    <Link class="dropdown-item" to="#" onClick={toggleLan}>
                      <div className="lanRow">
                        <span className="lanText">فا </span>
                        <div className="lanIcon">
                          <img src={De} />
                        </div>
                      </div>
                    </Link>
                  ) : (
                    <Link class="dropdown-item" to="#" onClick={toggleLan}>
                      <div className="lanRow">
                        <span className="lanText">En </span>
                        <div className="lanIcon">
                          <img src={En} />
                        </div>
                      </div>
                    </Link>
                  )}
                </a>
              </div>
            </div>
          </div>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              {Language == false
                ? NavData.map((item) => <NavbarText key={item.id} {...item} />)
                : NavDataEnglisch.map((item) => (
                    <NavbarText key={item.id} {...item} />
                  ))}
            </div>
          </div>

          {/* <a
            className="text-white"
            href="https://www.linkedin.com/in/mohammad-mehdi-nafarzadeh-028917240/"
          >
            <i class="bi bi-linkedin nav-link px-2 text-muted"></i>
          </a> */}
          <a className="text-white logo" href="https://github.com/keyvannafar">
            <img src={logo} />
          </a>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
