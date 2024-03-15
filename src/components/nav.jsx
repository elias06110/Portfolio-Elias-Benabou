import { useState } from "react";
import { useTranslation } from "react-i18next";

const lngs = {
  en: { nativeName: "English" },
  fr: { nativeName: "Français" },
};

function Navbar() {
  const { t, i18n } = useTranslation();

  const [showLinks, setShowLinks] = useState(false);

  const handleShowLinks = () => {
    setShowLinks(!showLinks);
  };

  const handleLinkClick = () => {
    setShowLinks(false);
  };

  return (
    <header id="header">
      <nav className={`${showLinks ? "show-nav" : "hide-nav"}`}>
      <h1 className="elias">Portfolio</h1>
      <ul className="nav-links flex">
          <li>
            <a href="#profil" onClick={handleLinkClick}>
              {t("description.home")}
            </a>
          </li>
          <li className="li">
            <a href="#about" onClick={handleLinkClick}>
              {t("description.about")}
            </a>
          </li>
          <li>
            <a href="#skills" onClick={handleLinkClick}>
              {t("description.skills")}
            </a>
          </li>
          <li>
            <a href="#projects" onClick={handleLinkClick}>
              {t("description.projets")}
            </a>
          </li>
          <li>
            <a href="#contact" onClick={handleLinkClick}>
             Contact
            </a>
          </li>
        </ul>
        <div className="trad-container">
          
          {Object.keys(lngs).map((lng) => (
            <button className="trad"
              key={lng}
              style={{
                fontWeight: i18n.resolvedLanguage === lng ? "bold" : "normal",
              }}
              type="submit"
              onClick={() => i18n.changeLanguage(lng)}
            >
              {lngs[lng].nativeName}
            </button>
          ))}
        </div>
        

        
        <div className="burger">
        <button className="navbar-burger" onClick={handleShowLinks}>
          <span className="burger-bar"></span>
        </button>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
