import slide1 from "../images/slides/slide1.jpg";
import slide2 from "../images/slides/slide2.jpg";
import slide3 from "../images/slides/slide3.jpg";
import slide4 from "../images/slides/slide4.jpg";
import Video from "../images/slider/InShot_20220330_140506822 (2) (1).mp4";
import "./Slider.css";
function Slider() {
  return (
    <div className="videoBox">
      <video className="videoSlider" autoPlay muted loop src={Video} />
    </div>
  );
}

export default Slider;
