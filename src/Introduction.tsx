import React, { CSSProperties, useEffect, useState } from "react";
import ProfilePic from "./assets/ProfilePicture.png";
import bgImg from "./assets/fahadWithBackGround2.jpg";
import bgImg2 from "./assets/OnlyBackGround2.png";
import gitHub from "./assets/gitbhub.png";
import linkedin from "./assets/linkedin.png";

const Intro: React.FC = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 605);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 605);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      style={{
        ...styles.intro,
        flexDirection: isMobile ? "column" : "row",
        backgroundImage: `url(${isMobile ? bgImg2 : bgImg})`,
        backgroundColor: "#007fbc",
      }}
      className="intro-container"
    >
      <div
        className="profile-section"
        style={{ display: isMobile ? "block" : "none" }}
      >
        <img
          src={ProfilePic}
          alt="Fahad Ali"
          style={styles.profileImage}
          className="profile-image"
        />
      </div>
      <div className="content-section" style={styles.contentSection}>
        <h1 style={styles.headings} className="headings">
          I'm a Game Developer | Web Developer
        </h1>
        <h1 style={styles.headings} className="headings">
          Fahad Ali
        </h1>
        <p style={styles.para}>
          I specialize in building interactive and engaging games and web
          applications, focusing on creativity, mechanics, and storytelling.
        </p>
        <div className="social-links">
          <a
            style={styles.btn}
            href="http://github.com/FahadAli0421"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              style={styles.github}
              src={gitHub}
              alt="Github"
              className="social-icon"
            />
          </a>
          <a
            style={styles.btn}
            href="http://www.linkedin.com/in/fahadali0421"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              style={styles.linkedin}
              src={linkedin}
              alt="Linkedin"
              className="social-icon"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

const styles: { [key: string]: CSSProperties } = {
  intro: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    width: "100vw",
    height: "100vh",
    color: "white",
    padding: "0",
    margin: "0",
    boxSizing: "border-box",
    transition: "all 0.3s ease-in-out",
  },

  // contentSection: {
  //   backgroundColor: "red",
  //   marginRight: "50%",
  // },

  headings: {
    color: "#ffffff",
    fontSize: "40px",
    margin: "10px 0",
    fontFamily: "'Poppins', sans-serif",
    fontWeight: "bold",
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
  },
  profileImage: {
    width: "200px",
    height: "200px",
    border: "5px solid white",
    borderRadius: "50%",
    objectFit: "cover",
    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.3)",
    transition: "transform 0.3s ease",
    marginTop: "180px",
  },
  para: {
    fontWeight: "400",
    color: "#e5e7eb",
    textAlign: "center",
    width: "80%",
    maxWidth: "600px",
    margin: "20px auto",
    fontSize: "18px",
    lineHeight: "1.6",
    textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)",
  },
  github: {
    height: "50px",
    width: "50px",
    transition: "transform 0.3s ease",
  },
  linkedin: {
    height: "50px",
    width: "50px",
    transition: "transform 0.3s ease",
  },
  btn: {
    margin: "10px",
    borderRadius: "50%",
    display: "inline-block",
  },
};

export default Intro;
