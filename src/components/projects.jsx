import Kasa from "../images/Kasa.PNG";
import Booki from "../images/Booki.PNG";
import Sophie from "../images/Sophie.PNG";
import LogoKasa from "../images/logo-kasa.png";
import LogoSophie from "../images/Logo-Sophie.png";
import LogoBooki from "../images/Logo-Booki.png";
import LogoGrimoire from "../images/Logo-grimoire.png";
import Grimoire from "../images/grimoire.PNG";
import github from "../images/github.png";

export default function Projects() {
  return (
    <section id="projects">
      <div className="portfolio-section flex">
        <h1>My portfolio</h1>
        <div className="project-container border column" data-aos="fade-right">
        <img className="kasa" src={LogoKasa} alt=""></img>
          <img src={Kasa} alt="" className="project-img"></img>
          <div className="project-details flex">
           
            <p>
              Kasa is a dynamic web platform designed to facilitate peer-to-peer
              apartment rentals between individuals. As a developer, my role in
              this project included front-end development, ensuring a responsive
              design and providing users with a reliable solution for finding
              and renting apartments from the comfort of their homes.
            </p>
            <h3>React, Scss</h3>
            <div className="project-links flex">
            <a href="https://elias06110.github.io/Projet_2_Benabou_Elias/" target="_blank"   rel="noreferrer">Live Demo</a>
              <div className="bar"></div>
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
              Leveraging my backend development skills, I created the backbone
              of this platform, enabling users to rate and review books while
              establishing a robust reference system. The backend infrastructure
              seamlessly manages data, user accounts, and interactions, ensuring
              a reliable and scalable solution. My contributions to this project
              include implementing the backend architecture and optimizing
              database functionality.
            </p>
            <h3>Javascript, Node.js, MongoDb, Express</h3>
            <div className="project-links flex">
            <a href="https://elias06110.github.io/Projet_2_Benabou_Elias/" target="_blank"   rel="noreferrer">Live Demo</a>
              <div className="bar"></div>
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
              Developed an immersive website showcasing the exceptional work of
              an interior architect. The site features a dynamic gallery
              highlighting a diverse portfolio of interior design projects.
              Users can seamlessly navigate through the architect's creations,
              exploring each project with high-resolution images and detailed
              descriptions.
            </p>
            <h3> Javascript, Css</h3>
            <div className="project-links flex">
            <a href="https://elias06110.github.io/Projet_2_Benabou_Elias/" target="_blank"   rel="noreferrer">Live Demo</a>
              <div className="bar"></div>
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
              Booki, a project where I handled the HTML and CSS development, is
              a user-friendly website that simplifies the process of finding
              accommodations and activities in any chosen city. I developed an
              intuitive interface that enhances the user experience, allowing
              seamless exploration of lodging options and local experiences.
            </p>
            <h3>Html, Css</h3>
            <div className="project-links flex">
              <a href="https://elias06110.github.io/Projet_2_Benabou_Elias/" target="_blank"   rel="noreferrer">Live Demo</a>
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
