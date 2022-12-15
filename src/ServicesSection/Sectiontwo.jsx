import "./Sectiontwo.css";
import OurServicesData from "../ServiceData";
import { useSelector } from "react-redux/es/exports";
import shape from "../images/shape/shape.png"
function OurServices() {
  const Language = useSelector((state) => state.LanChange.Language);
  return (
    <div className="topsectwo" id="services">
      {/* <img className="spacer-img" src={spacer} /> */}
      <h2 className="text-center">
        {Language == false ? (
          <span className="text-white">خدمات ما</span>
        ) : (
          <span className="text-white">our services</span>
        )}
      </h2>

      <div className="container d-flex sectiontwo">
        <div className="twoleft">
          <OurServicesData />
        </div>
      </div>
    </div>
  );
}

export default OurServices;
