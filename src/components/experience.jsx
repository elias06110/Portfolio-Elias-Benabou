import Check from "../images/checkmark.png";

import { useTranslation } from "react-i18next";

export default function Experience() {

  const { t} = useTranslation();
  return (
    <section id="skills">
      <div className="flex column ">
        <h1>{t("description.skills")}</h1>
        <div className="exp">
          <div className="experience-details border experience-container" data-aos="fade-right">
            <div>
              <h2>{t("description.front")} </h2>
            </div>
            <div className="experience-skills">
              <img src={Check} className="icon"></img>
              <div>
                <h3>HTML</h3>
                <p>{t("description.exp")}</p>
              </div>
            </div>
            <div className="experience-skills">
              <img src={Check} className="icon"></img>
              <div>
                <h3>Css</h3>
                <p>{t("description.exp")}</p>
              </div>
            </div>
            <div className="experience-skills">
              <img src={Check} className="icon"></img>
              <div>
                <h3>Javascript</h3>
                <p>{t("description.int")}</p>
              </div>
            </div>
            <div className="experience-skills">
              <img src={Check} className="icon"></img>
              <div>
                <h3>React</h3>
                <p>{t("description.int")}</p>
              </div>
            </div>

          </div>
          <div className=" border experience-container" data-aos="fade-left">
          <div>
              <h2>{t("description.back")} </h2>
            </div>
            <div className="experience-skills">
              <img src={Check} className="icon"></img>
              <div>
                <h3>Node Js</h3>
                <p>{t("description.int")}</p>
              </div>
            </div>
            <div className="experience-skills">
              <img src={Check} className="icon"></img>
              <div>
                <h3>Mongo Db</h3>
                <p>{t("description.basic")}</p>
              </div>
            </div>
            <div className="experience-skills">
              <img src={Check} className="icon"></img>
              <div>
                <h3>Express Js</h3>
                <p>{t("description.int")}</p>
              </div>
            </div>
            <div className="experience-skills">
              <img src={Check} className="icon"></img>
              <div>
                <h3>Php</h3>
                <p>{t("description.basic")}</p>
              </div>
            </div>

          </div>
          </div>
        </div>
      
    </section>
  );
}
