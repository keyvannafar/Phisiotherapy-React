import "./Sectionthree.css";
import dataImage from "./dataImages/data";
import { useSelector } from "react-redux/es/exports";
import ImageData from "./dataImages";
function Sectionthree() {
  const Language = useSelector((state) => state.LanChange.Language);
  return (
    <div className="full-width" id="gallery">
      <h2 className="text-center about-header">
        {Language == false ? (
          <span>گالری تصاویر</span>
        ) : (
          <span>Photo Gallery</span>
        )}
      </h2>{" "}
      <div className="container d-flex sectionthree"> 
          <div className="row row-cols-1  row-cols-md-3 row-cols-lg-3 g-4 mt-2 ">
            {dataImage.map((item) => (
              <ImageData key={item.id} {...item} />
            ))}
          </div>
      </div>
    </div>
  );
}

export default Sectionthree;
