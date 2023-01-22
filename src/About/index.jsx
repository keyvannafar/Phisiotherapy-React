import { useSelector } from "react-redux";
import "./Introduce.css";
import AboutPhoto from "../images/about/home_clinic_staff_bg1.jpg"
import shape from "../images/shape/shape.png";
function AboutSection() {
  const Language = useSelector((state) => state.LanChange.Language);
  return (
    <div className="parallex-1 introduce" id="about">
      <div className="container int">
        {Language == false ? (
          <>
            <div className="mainTitle">
              <h2 className="aboutTitle">درباره ما</h2>
              <div className="borderTwo"></div>
              <div className="borderOne"></div>
              <div className="borderTwo"></div>
            </div>
            <br />
            <img className="aboutPhoto" src={AboutPhoto} />
            <p>
              پردیس نفرزاده هستم فیزیوتراپیست تیم ملی فوتبال بانوان و عضو هیات
              مدیره شاخه ورزشی انجمن فیزیوتراپی ایران. تیم من در موسسه
              فیزیوتراپی پردیس نفرزاده با امکانات و تجهیزات مدرن فیزیوتراپی و
              فضای ورزشی مجهز در خدمت بیماران و ورزشکاران عزیز است.
              <br />
              <br /> هدف من در کار درمانی، ارائه بروزترین و علمی ترین روشهای
              درمان بهمراه جدیدترین و کارآمدترین تمرینات ورزشی بمنظور کاهش هرچه
              سریعتر درد و آسیبهای بیماران و بازگشت سریع آنان به زندگی روزمره
              است.
            </p>
          </>
        ) : (
          <>
            <h2>About us</h2>
            <br />
            <p>
              I am Pardis Neferzadeh, a physiotherapist of the women's national
              football team and a member of the team Directorate of Sports
              Branch of Iran Physiotherapy Association. My team at the institute
              Neferzadeh Campus Physiotherapy with modern facilities and
              physiotherapy equipment The well-equipped sports space serves dear
              patients and athletes.
              <br />
              <br /> My goal in occupational therapy is to provide the most
              up-to-date and scientific methods Treatment with the latest and
              most effective exercise to reduce as much as possible Faster pain
              and injuries of patients and their quick return to daily life Is.
            </p>
          </>
        )}
      </div>
    </div>
  );
}

export default AboutSection;
