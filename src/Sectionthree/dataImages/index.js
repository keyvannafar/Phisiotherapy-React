

import React, { useState } from "react";
function ImageData({image}){
   return (
     <div>
         <img
           className="imagesPortfolio animate__animated animate__flipInY"
           src={image}
         />
     </div>
   );
}

export default ImageData