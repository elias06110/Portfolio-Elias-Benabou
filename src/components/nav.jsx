import { useState } from "react";

function Navbar() {

const [showLinks,setShowLinks]=useState(false)

const handleShowLinks=()=>{
    setShowLinks(!showLinks)
}

const handleLinkClick = () => {
  setShowLinks(false);
};

  
return (
  <header id="header">
    <nav className={`${showLinks ? "show-nav" : "hide-nav"}`}>
      <p>Elias Benabou</p>

      <ul className="nav-links flex">
        <li>
          <a href="#profil" onClick={handleLinkClick}>
            Home
          </a>
        </li>
        <li>
          <a href="#about" onClick={handleLinkClick}>
            About
          </a>
        </li>
        <li>
          <a href="#skills" onClick={handleLinkClick}>
            Skills
          </a>
        </li>
        <li>
          <a href="#projects" onClick={handleLinkClick}>
            Projects
          </a>
        </li>
        <li>
          <a href="#contact" onClick={handleLinkClick}>
            Contact
          </a>
        </li>
      </ul>
      <button className="navbar-burger" onClick={handleShowLinks}>
        <span className="burger-bar"></span>
      </button>
    </nav>
  </header>
);
}

export default Navbar;