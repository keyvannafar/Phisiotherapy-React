import "../../../ServicesSection/ourServices.css";
import React from "react";
import { useContext } from "react";
import Procontext from "../../../Context/Procontext";
import { useState } from "react";

function ServicesData({ id, text, image, getId, relatedtext }) {
  const [show, setShow] = useState(false);
  const [Pro] = useContext(Procontext);
  function ShowDes() {
    if (show == false) {
      setShow(true);
    } else {
      setShow(false);
    }
  }
  return (
    <>
      <a href="#sectionTwo">
        <button
          className={`btn btn-primary prog-btn  sidebar-button  ${
            id == Pro ? "focusButton" : ""
          }`}
          onClick={() => getId(id)}
        >
          <h4 className="">
            <i className="bi bi-check-lg"></i> {text}
          </h4>{" "}
          {show == false ? (
            <div className="plusMinusDes" onClick={ShowDes}>
              <span>+</span>
            </div>
          ) : (
            <div className="plusMinusDes" onClick={ShowDes}>
              <span>-</span>
            </div>
          )}
        </button>
        {show == true ? (
          <div className="servicesDes ">
            <div className="animate__animated animate__fadeInDown">
              <span>{relatedtext}</span>
            </div>
          </div>
        ) : (
          ""
        )}
      </a>
    </>
  );
}

export default ServicesData;
