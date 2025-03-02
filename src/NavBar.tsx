import React, { useState } from "react";
import "./NavStyles.css";
import hamburgerIcon from "./assets/hamburgerIcon.png";

const NavBar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (id: string, offset: number = 100) => {
    const section = document.getElementById(id);
    if (section) {
      const yOffset =
        section.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: yOffset, behavior: "smooth" });
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
          <button
            className="button"
            onClick={() => scrollToSection("Projects_Section", 100)} // Offset applied
          >
            Projects
          </button>
        </li>
        <li>
          <button
            className="button"
            onClick={() => scrollToSection("services-section")}
          >
            Services
          </button>
        </li>
        <li>
          <button
            className="button"
            onClick={() => scrollToSection("Contact-Portion")}
          >
            Contact
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
