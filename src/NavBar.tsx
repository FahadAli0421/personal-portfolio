import React, { useState } from "react";
import "./NavStyles.css";
import hamburgerIcon from "./assets/hamburgerIcon.png";

const NavBar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav className="navBar">
      <div className="navLogo">
        <button onClick={scrollToTop} className="button">
          Fahad Ali
        </button>
      </div>
      <div className="navHamBurger">
        <button onClick={toggleMenu} className="hamburgerButton">
          <img src={hamburgerIcon} alt="Menu" />
        </button>
      </div>
      <ul className={`navLists ${isMenuOpen ? "open" : ""}`}>
        <li>
          <button className="button" onClick={() => scrollToSection("about")}>
            About
          </button>
        </li>
        <li>
          <button className="button">Projects</button>
        </li>
        <li>
          <button className="button">Services</button>
        </li>
        <li>
          <button className="button">Contact</button>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
