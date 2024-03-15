import education from "../images/education.png";
import open from "../images/open.png";
import { useTranslation } from "react-i18next";
import abouticon from "../images/abouticon.jpg";
import coding from "../images/coding.png";

export default function About() {
  const { t } = useTranslation();

  return (
    <section id="about">
      <div className="about-section flex column">
        <h1>{t("description.about")}</h1>
        <div className="about-container">
          <div className="about-img-container">
            <img className="aboutimg" alt="" src={abouticon} />
            <div className="circle">
              <img className="coding" alt="" src={coding} />
            </div>
          </div>
          <div className="text">
          <h3>
            {t("description.abouttext1")}
            <br></br>
            <br></br>
            {t("description.abouttext2")}
          </h3>
          </div>
        </div>
        <div className="about-container">
          <div className="about">
            <div className="flex">
              <h2>{t("description.education")}</h2>
              <img alt="icon" className="icon" src={education} />
            </div>
            <div className="flex gap">
              <h3>{t("description.program")}</h3>
              <img alt="" className="icon" src={open} />
            </div>
            <h3>{t("description.self")}</h3>
          </div>
        </div>
      </div>
    </section>
  );
}
