import React from "react";
import { useSelector } from "react-redux";
import "../Slider/Slider.css";
import "./quality.css";
import slide1 from "../images/portfolio/pardis-clinic-2.jpg";
import slide2 from "../images/portfolio/pardis-clinic-3.jpg";
import slide4 from "../images/portfolio/pardis-clinic-6.jpg";
export default function Quality() {
  const Language = useSelector((state) => state.LanChange.Language);
  return (
    <div className="d-flex w-100 justify-content-around qualityMain">
      <div className="w-50 d-flex justify-content-around pt-2 pb-2 position-relative">
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
      <div className="w-50 pt-5 pb-5 d-flex justify-content-around">
        <div className="d-flex justify-content-center align-items-center">
          <div>
            {Language == false ? (
              <div>
                <h5 className="p-2"> !به صدای بدن خود توجه کنید</h5>
                <br />
                <h6 className="d-flex justify-content-center">
                  ...و با ما دردهایتان را مدیریت کنید
                </h6>
                <br />
              </div>
            ) : (
              <div>
                <h5 className="p-2">
                  {" "}
                  Pay attention to the sound of your 
                  body!
                </h5>
                <br />
                <h6 className="d-flex justify-content-center">
                  And manage your pain with us...
                </h6>
                <br />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
