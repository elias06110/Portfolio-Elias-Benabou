import Kasa from "../images/Kasa.PNG";
import Booki from "../images/Booki.PNG";
import Sophie from "../images/Sophie.PNG";
import LogoKasa from "../images/logo-kasa.png";
import LogoSophie from "../images/Logo-Sophie.png";
import LogoBooki from "../images/Logo-Booki.png";
import LogoGrimoire from "../images/Logo-grimoire.png";
import Grimoire from "../images/grimoire.PNG";
import github from "../images/github.png";

import { useTranslation } from "react-i18next";

export default function Projects() {
  
  const { t} = useTranslation();
  return (
    <section id="projects">
      <div className="portfolio-section flex">
        <h1>{t("description.portfolio")}</h1>
        <div className="project-container border column" data-aos="fade-right">
        <img className="kasa" src={LogoKasa} alt=""></img>
          <img src={Kasa} alt="" className="project-img"></img>
          <div className="project-details flex">
           
            <p>
            {t("description.kasa")}
             
            </p>
            <h3>React, Scss</h3>
            <div className="project-links flex">
           

              <a
                href="https://github.com/elias06110/Projet-react"
                target="_blank"   rel="noreferrer"
              >
                <img className="icon" alt="" src={github}></img>
              </a>
            </div>
          </div>
        </div>
        <div className="project-container border column" data-aos="fade-right">
        <img className="logo-grimoire" src={LogoGrimoire} alt=""></img>
          <img src={Grimoire}  alt="" className="project-img"></img>
          <div className="project-details">
            
            <p>
            {t("description.grim")}
              
            </p>
            <h3>Javascript, Node.js, MongoDb, Express</h3>
            <div className="project-links flex">
            
              
              <a
                href="https://github.com/elias06110/P7-Elias/tree/main/P7-elias"
                target="_blank"   rel="noreferrer"
              >
                <img className="icon" alt="" src={github}></img>
              </a>
            </div>
          </div>
        </div>

        <div className="project-container border column" data-aos="fade-right">
        <img src={LogoSophie} alt=""></img>
          <img src={Sophie}  alt="" className="project-img"></img>
          <div className="project-details">
           
            <p>
            {t("description.sophie")}
              
            </p>
            <h3> Javascript, Css</h3>
            <div className="project-links flex">
            
              <a
                href="https://github.com/elias06110/Projet-3"
                target="_blank"   rel="noreferrer"
              >
                <img className="icon" alt="" src={github}></img>
              </a>
            </div>
          </div>
        </div>
        <div className="project-container border column" data-aos="fade-right">
        <img src={LogoBooki} alt=""></img>
          <img src={Booki} alt="" className="project-img"></img>
          <div className="project-details">
            
            <p>
            {t("description.booki")}
              
            </p>
            <h3>Html, Css</h3>
            <div className="project-links flex">
              <a href="https://elias06110.github.io/Projet_2_Benabou_Elias/" target="_blank"   rel="noreferrer">{t("description.live")}</a>
              <div className="bar"></div>
              <a
                href="https://github.com/elias06110/Projet_2_Benabou_Elias"
                target="_blank"
                rel="noreferrer"
              >
                <img className="icon" alt="" src={github}></img>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
