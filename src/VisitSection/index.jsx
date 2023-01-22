import React from "react";
import "../Slider/Slider.css";
import "./VisitSection.css";
import slide1 from "../images/slides/slide1.jpg";
import slide2 from "../images/slides/slide2.jpg";
import slide3 from "../images/slides/slide3.jpg";
import slide4 from "../images/slides/slide4.jpg";
import slide5 from "../images/other/visitCard.jpg";
import Slide from "../images/portfolio/pardis-clinic-2.jpg";
import Slider from "../Slider/Slider";
export default function VisitSection() {
  return (
    <div className="d-flex w-100 justify-content-around visitMain">
      <div className="w-50 pt-5 pb-5 d-flex justify-content-around">
        <div className="d-flex justify-content-center align-items-center">
          <div>
            <div className="mainTitle">
              <span className="d-flex justify-content-center">
                همه روزه با تعیین وقت قبلی
              </span>
              <div className="borderOne"></div>
              <div className="borderTwo"></div>
              <div className="borderOne"></div>
            </div>

            <p className="d-flex justify-content-center animate_animated animate__shakeY">
              راه های تماس
            </p>
          </div>
        </div>
      </div>
      <div className="w-50 d-flex justify-content-around pt-2 pb-2 position-relative">
        <img className="coverImg" src={slide5} />
      </div>
    </div>
  );
}
