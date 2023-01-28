import React from "react";
import "../Slider/Slider.css";
import "./VisitSection.css";
import { useSelector } from "react-redux";
import slide1 from "../images/slides/slide1.jpg";
import slide2 from "../images/slides/slide2.jpg";
import slide3 from "../images/slides/slide3.jpg";
import slide4 from "../images/slides/slide4.jpg";
import slide5 from "../images/other/visitCard.jpg";
import Slide from "../images/portfolio/pardis-clinic-2.jpg";
import Slider from "../Slider/Slider";
export default function VisitSection() {
  const Language = useSelector((state) => state.LanChange.Language);
  return (
    <div className="d-flex w-100 justify-content-around visitMain">
      <div className="w-50 pt-5 pb-5 d-flex justify-content-around">
        <div className="d-flex justify-content-center align-items-center">
          <div>
            {" "}
            {Language == false ? (
              <>
                <div className="mainTitle d-flex justify-content-center">
                  <span className="">همه روزه با تعیین وقت قبلی</span>
                  <div className="borderOne mt-2"></div>
                  <div className="borderTwo mt-2"></div>
                  <div className="borderOne mt-2"></div>
                  <a href="#contact">
                    <button className="btn btn-primary mb-2 contactbtn mt-3">
                      راه های تماس <i class="bi bi-person-lines-fill"></i>
                    </button>
                  </a>
                </div>
              </>
            ) : (
              <>
                <div className="mainTitle d-flex justify-content-center">
                  <span className="">Every day by appointment</span>
                  <div className="borderOne mt-2"></div>
                  <div className="borderTwo mt-2"></div>
                  <div className="borderOne mt-2"></div>
                  <a href="#contact">
                    <button className="btn btn-primary mb-2 contactbtn mt-3">
                      Contact us <i class="bi bi-person-lines-fill"></i>
                    </button>
                  </a>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      <div className="w-50 d-flex justify-content-around pt-2 pb-2 position-relative">
        <img className="coverImg" src={slide5} />
      </div>
    </div>
  );
}
