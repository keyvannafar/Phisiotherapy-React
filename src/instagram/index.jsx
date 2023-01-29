import React from "react";
import { useSelector } from "react-redux";
import "./phisiophotos.css";
import insta from "../images/instagram/instagramShadow1.png";
export default function Phisiophotos() {
  const Language = useSelector((state) => state.LanChange.Language);
  return (
    <div className="position-relative">
      <div className="phisioimg ">
        <div>
          <img src={insta} />
          {Language == false ? (
            <>
              <p>پاسخ به سوالات رایج شما در اینستاگرام ما</p>
              <a href="https://instagram.com/pardisnafarzadehclinic_?igshid=YmMyMTA2M2Y=">
                <button className="btn btn-primary mb-2 contactbtn">
                  <i class="bi bi-instagram"></i> مارا در ایستاگرام دنبال کنید
                </button>
              </a>
            </>
          ) : (
            <>
              <p>Answers to your common questions on our Instagram</p>
              <a href="https://instagram.com/pardisnafarzadehclinic_?igshid=YmMyMTA2M2Y=">
                <button className="btn btn-primary mb-2 contactbtn">
                  Follow us on Instagram <i class="bi bi-instagram"></i>
                </button>
              </a>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
