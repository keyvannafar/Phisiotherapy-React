

import React, { useState } from "react";
import LazyLoad from "react-lazyload";
function ImageData({ image, animTime }) {
  return (
    <div className="d-flex galleryImage">
      <LazyLoad offset={-100}>
        <div className="zoomImages d-flex animate__animated animate__zoomIn animate__delay-1s">
          <i class="bi bi-zoom-in text-white"></i>
        </div>
        <img
          className={`imagesPortfolio animate__animated animate__slideInUp justify-content-center ${animTime}`}
          src={image}
        />
      </LazyLoad>
    </div>
  );
}

export default ImageData