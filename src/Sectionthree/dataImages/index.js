import React, { useState } from "react";
import LazyLoad from "react-lazyload";
function ImageData({ image, animTime }) {
  const [zoom, setZoom] = useState(true);
  const lightBox = () => {
    zoom == true ? setZoom(false) : setZoom(true);
  };
  return (
    <div className="d-flex galleryImage">
      <LazyLoad offset={-100}>
        <div className="zoomImages d-flex animate__animated animate__zoomIn animate__delay-1s ">
          <i class="bi bi-zoom-in text-white"></i>
        </div>
        <img
          className={`${
            zoom == true ? "imagesPortfolio" : "imagesPortfolioLightBox"
          }  animate__animated animate__slideInUp justify-content-center ${animTime}`}
          src={image}
          onClick={lightBox}
        />
      </LazyLoad>
    </div>
  );
}

export default ImageData;
