import education from "../images/education.png";

export default function About() {
  return (
    <section id="about">
      <div className="about-section flex column">
        <h1>About me</h1>
        <h2>
          Hello there! 👋 I'm Elias Benabou, a passionate and creative web
          developer dedicated to crafting clean and functional websites.
        </h2>
        <div className="about-container">
          <div className="about">
            <div className="flex">
            <h2>Education</h2>
            <img className="icon" src={education}></img>
            </div> 
            <h3>OpenClassrooms Web Developer Program</h3>
            <h3>Self-taught, constantly learning...</h3>
          </div>
        </div>
  
      </div>
    </section>
  );
}
