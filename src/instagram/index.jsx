import React from 'react'
import "./phisiophotos.css"
import photo1 from "../images/phisioPhotos/phisio1.jpg"
import photo2 from "../images/phisioPhotos/phisio2.jpg"
import photo3 from "../images/phisioPhotos/phisio3.jpg"
import insta from "../images/instagram/instagramShadow1.png"
export default function Phisiophotos() {
  return (
    <div className="position-relative">
      {/* <div className="cover"></div> */}

      <div className="phisioimg ">
        <div>
          <img src={insta} />
          <p>پاسخ به سوالات رایج شما در اینستاگرام ما</p>
        </div>
      </div>
    </div>
  );
}
