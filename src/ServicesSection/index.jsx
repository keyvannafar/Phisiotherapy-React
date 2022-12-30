import "./ourServices.css";
import { useSelector } from "react-redux/es/exports";
import ServicesData from "./OurServices/ServicesData";
import { servicesDataPersisch } from "./OurServices/ServicesData/dataServices";
import { servicesDataEnglisch } from "./OurServices/ServicesData/dataServices";
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

      <div className="container  d-flex sectiontwo text-center">
        <div className="twoleft row row-cols-lg-3 g-4">
          {Language == false
            ? servicesDataPersisch.map((item) => (
                <ServicesData key={item.id} {...item} />
              ))
            : servicesDataEnglisch.map((item) => (
                <ServicesData key={item.id} {...item} />
              ))}
        </div>
      </div>
    </div>
  );
}

export default OurServices;
