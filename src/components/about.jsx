import education from "../images/education.png";

import { useTranslation } from "react-i18next";

export default function About() {


  const { t} = useTranslation();
  return (
    <section id="about">
      <div className="about-section flex column">
        <h1>{t("description.about")}</h1>
        <h2>
          Hello there! 👋 I'm Elias Benabou, a passionate and creative web
          developer dedicated to crafting clean and functional websites.
        </h2>
        <div className="about-container">
          <div className="about">
            <div className="flex">
            <h2>{t("description.education")}</h2>
            <img className="icon" src={education}></img>
            </div> 
            <h3>{t("description.program")}</h3>
            <h3>{t("description.self")}</h3>
          </div>
        </div>
  
      </div>
    </section>
  );
}
