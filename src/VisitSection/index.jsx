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
            <span className="d-flex justify-content-center">
              همه روزه با تعیین وقت قبلی
            </span>

            <p className="d-flex justify-content-center animate_animated animate__shakeY">
              راه های تماس
            </p>
          </div>
        </div>
      </div>
      <div className="w-50 d-flex justify-content-around pt-2 pb-2 position-relative">
        {/* <img className="coverImg" src={slide5} /> */}
        <div
          id="carouselExampleCaptions"
          class="carousel slide slider-main"
          data-bs-ride="carousel"
        >
          <div class="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div class="carousel-inner ">
            <div class="carousel-item active">
              <img
                src={slide1}
                class="d-block w-75 slider-image"
                alt="slider-image"
              />
            </div>

            <div class="carousel-item ">
              <img
                src={slide2}
                class="d-block w-75 slider-image"
                alt="slider-image"
              />
            </div>
            <div class="carousel-item ">
              <img
                src={slide4}
                class="d-block w-75 slider-image"
                alt="slider-image"
              />
            </div>
          </div>

          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
}
