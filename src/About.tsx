import React, { useState, useEffect } from "react";
import "./About.css";

const About: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const sections = [
    {
      title: "Game Development",
      content: (
        <ul>
          <li>
            Specialized in <span className="highlight">interactive games</span>{" "}
            using Unity and C#. My Top Games are:
          </li>
          <ul className="sub-list">
            <li>
              <span className="project-name">Bazooka Blast</span> - I
              participated in MLabs Game Jam and created Bazooka Blast game and
              i got in top 11 teams out of 180 and got Best Game Physics Award.
            </li>
          </ul>
          <li>
            <span className="highlight">Tools:</span> Unity, Blender, C#.
          </li>
        </ul>
      ),
    },
    {
      title: "Web Development",
      content: (
        <ul>
          <li>
            Develop <span className="highlight">web-based games</span> and apps.
            My projects are:
          </li>
          <ul className="sub-list">
            <li>
              <span className="project-name">Ball Runner</span> - Web game using
              JavaScript.
            </li>
            <li>
              <span className="project-name">Portfolio</span> - This portfolio
              Website using React.
            </li>
          </ul>
          <li>
            <span className="highlight">Tools:</span> HTML, CSS, JavaScript,
            React.
          </li>
        </ul>
      ),
    },
    {
      title: "Experience",
      content: (
        <ul>
          <li>
            Participated in <span className="highlight">MLabs Game Jam</span> (3
            Months).
          </li>
          <li>
            Competed in{" "}
            <span className="highlight">Devsinc Coding Competition</span>.
          </li>
          <li>
            Joined multiple{" "}
            <span className="highlight">coding competitions</span>.
          </li>
        </ul>
      ),
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 605);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === sections.length - 1 ? 0 : prev + 1));
    }, 10 * 1000); // 10 seconds delay

    return () => clearInterval(interval);
  }, [sections.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === sections.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? sections.length - 1 : prev - 1));
  };

  const rotation = (360 / sections.length) * currentSlide;

  return (
    <div id="about" className="about-container">
      <div className="about-content">
        <h2>About Me</h2>

        {!isMobile && (
          <div className="carousel-container">
            <button className="nav-button left" onClick={prevSlide}>
              &lt;
            </button>

            <div
              className="carousel"
              style={{ transform: `rotateY(${-rotation}deg)` }}
            >
              {sections.map((section, index) => (
                <div
                  key={index}
                  className="carousel__cell"
                  style={{
                    transform: `rotateY(${
                      (360 / sections.length) * index
                    }deg) translateZ(200px)`, // Reduced translateZ
                  }}
                >
                  <div className="card">
                    <h3>{section.title}</h3>
                    <div>{section.content}</div>
                  </div>
                </div>
              ))}
            </div>

            <button className="nav-button right" onClick={nextSlide}>
              &gt;
            </button>
          </div>
        )}

        {isMobile && (
          <div className="mobile-sections">
            {sections.map((section, index) => (
              <div key={index} className="about-section mobile">
                <h3>{section.title}</h3>
                {section.content}
              </div>
            ))}
          </div>
        )}

        {!isMobile && (
          <div className="slide-indicators">
            {sections.map((_, index) => (
              <span
                key={index}
                className={`indicator ${
                  index === currentSlide ? "active" : ""
                }`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default About;
