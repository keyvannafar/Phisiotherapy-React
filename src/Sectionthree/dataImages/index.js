

import React, { useState } from "react";

function ImageData({ image}) {
  return (
    <div className="position-relative">
        <div className="galleryCover"></div>
      <img className="imagesPortfolio" src={image} />
    </div>
  );
}

export default ImageData