

import React, { useState } from "react";
import LazyLoad from "react-lazyload";
function ImageData({image}){
   return (
     <div>
       <LazyLoad offset={-100}>
         <img
           className="imagesPortfolio animate__animated animate__flipInY"
           src={image}
         />
       </LazyLoad>
     </div>
   );
}

export default ImageData