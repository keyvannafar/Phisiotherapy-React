import React, { useState } from "react";
import LazyLoad from "react-lazyload";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
function ImageData({ image, animTime, id }) {
  const [zoom, setZoom] = useState(true);
    
  const setLightBox = useDispatch();
  const lightBox = () => {
    window.location.replace(`#${id}`);
    setZoom(!zoom);
    zoom == true 
      ? setLightBox({ type: "lightBoxOn" })
      : setLightBox({ type: "lightBoxOff" });
    
  };
  return (
    <div className="d-flex galleryImage" id={id}>
      <LazyLoad offset={-100}>
        <div className="zoomImages d-flex animate__animated animate__zoomIn animate__delay-1s ">
          <i class="bi bi-zoom-in text-white" onClick={lightBox}></i>
        </div>
        <div
          className={`${
            zoom == true ? "" : "imagesPortfolioLightBoxBackground"
          }`}
        >
          <img
            className={`${
              zoom == true ? "imagesPortfolio" : "imagesPortfolioLightBox"
            }  animate__animated animate__slideInUp justify-content-center ${animTime}`}
            src={image}
          />
        </div>
      </LazyLoad>
    </div>
  );
}

export default ImageData;
