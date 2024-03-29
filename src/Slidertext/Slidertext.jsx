import { useSelector } from "react-redux";
import "./Slidertext.css";
function Slidertext() {
  const Language = useSelector((state) => state.LanChange.Language)
  return (
    <>
      <div className="slidertext ">
        {Language == false ? (
          <div>
            <h1 className="fade_h1">فیزیوتراپی پردیس نفرزاده</h1> <br />
            <br />
            <p className="fade_text_slider">
              فیزیوتراپ تیم ملی فوتبال بانوان ایران{" "}
              <i class="bi bi-check-lg"></i>
            </p>
            <p className="fade_text_slider">
              میدان آرژانتین، خیابان قصیر، خیابان احمدیان، پلاک 6
              <i class="bi bi-check-lg"></i>
            </p>
            <p className="fade_text_slider"></p>
            <a className="nav-link" aria-current="page" href="#contact">
              <button className="btn btn-primary mb-2 contactbtn animate__animated animate__bounce animate__repeat-3">
                تماس با ما
              </button>
            </a>
          </div>
        ) : (
          <div>
            <h1 className="fade_h1">Pardis Nafarzadeh Physiotherapy </h1> <br />
            <br />
            <p className="fade_text_slider">
              <i class="bi bi-check-lg"></i> Physiotherapist of Iran women's
              national football team
            </p>
            <p className="fade_text_slider">
              <i class="bi bi-check-lg"></i> Argentinian Square, Qusayr St., St
              Ahmadian, no 6
            </p>
            <p className="fade_text_slider"></p>
            <a className="nav-link" aria-current="page" href="#contact">
              <button className="btn btn-primary mb-2 contactbtn">
                Contact
              </button>
            </a>
          </div>
        )}
      </div>
    </>
  );
}

export default Slidertext;
