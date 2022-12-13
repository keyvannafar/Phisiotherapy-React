import { NavData } from "../Navbar/dataNavbar/DataNav";
import SetFooterMenu from "./Footer";
import "./Footer.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavDataEnglisch } from "../Navbar/dataNavbar/DataNav";
import logoFooter from "../../images/other/logo-pardismin.jpg";

function Footer() {
  const Language = useSelector((state) => state.LanChange.Language);
  return (
    <footer class={`footer text-white ${Language == false ? "rtlClass" : ""}`}>
      <div class="container p-4">
        <div class="row">
          <div class="col-lg-3 col-md-6 mb-4 mb-md-0 p-5 footer-text">
            <h5 class="text-uppercase mb-3">
              {Language == true ? <span>Links</span> : <span>لینک ها</span>}
            </h5>

            <ul class="list-unstyled mb-0 text-white p-0">
              <li className="text-white footer-links">
                {Language == false
                  ? NavData.map((item) => (
                      <SetFooterMenu key={item.id} {...item} />
                    ))
                  : NavDataEnglisch.map((item) => (
                      <SetFooterMenu key={item.id} {...item} />
                    ))}
              </li>
            </ul>
          </div>
          <div class="col-lg-3 col-md-6 mb-4 mb-md-0 footer-text p-5">
            {Language == true ? (
              <>
                <h5 class="text-uppercase mb-3">Contact</h5>

                <ul class="list-unstyled p-0">
                  <li>
                    <a href="#!">
                      <i class="bi bi-geo-alt"></i> <span>Tehran - Iran</span>
                    </a>
                  </li>
                  <li>
                    <a href="#!">
                      <i class="bi bi-telephone"></i>
                      <span> +98 913 104 2684</span>
                    </a>
                  </li>
                  <li>
                    <a href="#!">
                      <i class="bi bi-telephone"></i>{" "}
                      <span>+98 913 104 2684</span>
                    </a>
                  </li>
                  <li>
                    <a href="#!">
                      <i class="bi bi-envelope"></i>{" "}
                      <span>info@pardisnafarzadehclinic.com</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://instagram.com/pardisnafarzadehclinic_?igshid=YmMyMTA2M2Y=">
                      <i class="bi bi-instagram"></i> <span>instagram</span>
                    </a>
                  </li>
                </ul>
              </>
            ) : (
              <>
                <h5 class="text-uppercase mb-3">تماس با ما</h5>

                <ul class="list-unstyled p-0">
                  <li>
                    <a href="#!">
                      <i class="bi bi-geo-alt"></i> <span>تهران، ایران</span>
                    </a>
                  </li>
                  <li>
                    <a href="#!">
                      <i class="bi bi-geo-alt"></i>{" "}
                      <span>
                        میدان آرژانتین - خیابان قصیر - خیابان احمدیان - پلاک 6
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="#!">
                      <i class="bi bi-telephone"></i>
                      <span> + 98 21 8870 9828</span>
                    </a>
                  </li>
                  <li>
                    <a href="#!">
                      <i class="bi bi-telephone"></i>{" "}
                      <span>+ 98 21 8870 9829</span>
                    </a>
                  </li>
                  <li>
                    <a href="#!">
                      <i class="bi bi-envelope"></i>{" "}
                      <span>info@pardisnafarzadehclinic.com</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://instagram.com/pardisnafarzadehclinic_?igshid=YmMyMTA2M2Y=">
                      <i class="bi bi-instagram"></i> <span>اینستاگرام</span>
                    </a>
                  </li>
                </ul>
              </>
            )}
          </div>
          <div class="col-lg-6 col-md-12 mb-4 mb-md-0 p-5 footerLogo">
            {/* <h5 class=" footer-title-about-h5">
              H<span className="footer-title-about">i</span>vad
            </h5> */}
            <img src={logoFooter} />
          </div>
        </div>
      </div>
      {Language == true ? (
        <div class="text-center p-3 copyright-box text-secondary">
          © 2022 Copyright: pardinNafarzadehClinic
          <p className="text-center text-secondary">
            Design & developed by:{" "}
            <a href="https://keyvannafarzadeh.com" className="designer">
              <b> M.M.Nafarzadeh</b>
            </a>
          </p>
        </div>
      ) : (
        <div class="text-center p-3 copyright-box text-secondary rtlClass">
          تمامی حقوق برای فیزیوتراپی پردیس نفرزاده محفوظ است.
          <p className="text-center text-secondary">
            طراحی و توسعه:{" "}
            <a href="https://keyvannafarzadeh.com" className="designer">
              <b> M.M.Nafarzadeh</b>
            </a>
          </p>
        </div>
      )}
    </footer>
  );
}

export default Footer;
