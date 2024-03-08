import Photo from "../images/photo.jpg";
import githubLogo from "../images/github.png";
import linkedIn from "../images/linkedin.png";
import html from "../images/html.PNG";
import Css from "../images/css.png";
import Js from "../images/js.png";
import reactI from "../images/react.png";
import sass from "../images/sass.png";

import { useTranslation } from "react-i18next";

export default function Profil() {

  const { t} = useTranslation();

  return (
    <section id="profil" data-aos="fade-in">
      <div className="description flex">
        <div className="profile-details">
          <h1>{t("description.hi")}</h1>
          <h2>{t("description.dev")}</h2>
          <div className="socials flex">
            <a href="https://github.com/elias06110" target="_blank"   rel="noreferrer"> 
              <img className="logo" src={githubLogo} alt=""></img>
            </a>
            <a
              href="https://www.linkedin.com/in/elias-benabou-3782502b7/"
              target="_blank"   rel="noreferrer"
            >
              <img className="logo" src={linkedIn} alt=""></img>
            </a>
          </div>
        </div>
        <img className="photo" src={Photo} alt="Elias Benabou profil"></img>
      </div>
      <div className="tech">
        <h3>Tech Stack</h3>
       
        <div className="bar"></div>
        <div className="tech_grid">
        <img className="icon" alt=""src={html}></img>
        <img className="icon"  alt=""src={Css}></img>
        <img className="icon" alt="" src={Js}></img>
        <img className="icon" alt=""  src={reactI}></img>
        <img className="icon" alt="" src={sass}></img>
        </div>
      </div>
    </section>
  );
}
