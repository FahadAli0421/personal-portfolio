import React, { useState, useEffect } from "react";
import "./Projects.css";
import BazookaBlast1 from "./assets/MyGames/BazookaBlast/level1.jpg";
import BazookaBlast2 from "./assets/MyGames/BazookaBlast/level2.jpg";
import BazookaBlast3 from "./assets/MyGames/BazookaBlast/level5.png";

import EndlessWheels1 from "./assets/MyGames/EndlessWheels/EndlessWheels1.jpg";
import EndlessWheels2 from "./assets/MyGames/EndlessWheels/EndlessWheels2.jpg";
import EndlessWheels3 from "./assets/MyGames/EndlessWheels/EndlessWheels3.jpg";

import EOV1 from "./assets/MyGames/EOV/EOV1.jpg";
import EOV2 from "./assets/MyGames/EOV/EOV2.jpg";
import EOV3 from "./assets/MyGames/EOV/EOV3.jpg";
import EOV4 from "./assets/MyGames/EOV/EOV4.jpg";
import EOV5 from "./assets/MyGames/EOV/EOV5.jpg";
import EOV6 from "./assets/MyGames/EOV/EOV6.jpg";

import SpaceShooter1 from "./assets/MyGames/spaceShooter/spaceShooter1.png";
import SpaceShooter2 from "./assets/MyGames/spaceShooter/spaceShooter2.png";
import SpaceShooter3 from "./assets/MyGames/spaceShooter/spaceShooter3.png";
import SpaceShooter4 from "./assets/MyGames/spaceShooter/spaceShooter4.png";
import SpaceShooter5 from "./assets/MyGames/spaceShooter/spaceShooter5.png";

import BallRunner1 from "./assets/MyGames/BallRunner/BallRunner1.png";
import BallRunner2 from "./assets/MyGames/BallRunner/BallRunner2.png";
import BallRunner3 from "./assets/MyGames/BallRunner/BallRunner3.png";
import BallRunner4 from "./assets/MyGames/BallRunner/BallRunner4.png";
import BallRunner5 from "./assets/MyGames/BallRunner/BallRunner5.png";

import PVZ1 from "./assets/MyGames/PVZ/PVZ1.png";
import PVZ2 from "./assets/MyGames/PVZ/PVZ2.png";
import PVZ3 from "./assets/MyGames/PVZ/PVZ3.png";
import PVZ4 from "./assets/MyGames/PVZ/PVZ4.png";

interface Project {
  id: number;
  title: string;
  description: string;
  images: string[];
  downloadLink: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Bazooka Blast",
    description:
      "A hyper-casual 3D shooter game developed in Unity for Android, featuring a slingshot mechanic using a cannon. Players must destroy structures and enemies across 12 levels, with destructible environments and gravity-based physics.",
    images: [BazookaBlast1, BazookaBlast2, BazookaBlast3],
    downloadLink:
      "https://drive.google.com/file/d/1BT4P5XoJoLBJVhlHyu8KT7tscqGE5LqT/view?usp=sharing",
  },
  {
    id: 2,
    title: "Echoes Of Vengeance",
    description:
      "A 2D side-scrolling game developed in Unity for PC, set in a medieval fantasy world with a deep narrative. The player, a Lunari survivor, must navigate obstacles, solve puzzles, and sneak past enemies while uncovering the fate of their clan.",
    images: [EOV1, EOV2, EOV3, EOV4, EOV5, EOV6],
    downloadLink:
      "https://drive.google.com/file/d/1eGu7U75y2hybX-sWxFj-ryd03NBYXYIZ/view?usp=sharing",
  },
  {
    id: 3,
    title: "Space Shooter",
    description:
      "A PC space shooter game developed in Unity, where players must dodge bullets from dynamically generated enemy spaceships while firing back to destroy them. The game includes a proper scoring system and fast-paced action.",
    images: [
      SpaceShooter1,
      SpaceShooter2,
      SpaceShooter3,
      SpaceShooter4,
      SpaceShooter5,
    ],
    downloadLink:
      "https://drive.google.com/file/d/1fTYh7XoS4rLtsII6H95dV6V8yZeztZYo/view?usp=sharing",
  },
  {
    id: 4,
    title: "Endless Wheels",
    description:
      "An endless car game for Android, built in Unity, where players must avoid dynamically moving vehicles while scoring points. The game features increasing difficulty and smooth gameplay mechanics.",
    images: [EndlessWheels1, EndlessWheels2, EndlessWheels3],
    downloadLink:
      "https://drive.google.com/file/d/1K1vjEzOYyEE2NBS7v3p3s7cKa-yXI82W/view?usp=sharing",
  },
  {
    id: 5,
    title: "Ball Runner",
    description:
      "A simple web-based game inspired by the Chrome Dino Runner, built with HTML, CSS, and JavaScript. Players control a ball, avoiding obstacles with jump and double-jump mechanics while aiming for a high score.",
    images: [BallRunner1, BallRunner2, BallRunner3, BallRunner4, BallRunner5],
    downloadLink:
      "https://drive.google.com/file/d/1ARhnaYeM2fkqhkHvXkE5eHm9oSSOCmVP/view?usp=sharing",
  },
  {
    id: 6,
    title: "Player VS Zombies",
    description:
      "A console-based C++ game where players must defend a wall from waves of zombies. By moving up and down and shooting bullets, players prevent enemies from reaching their base while maintaining a high score.",
    images: [PVZ1, PVZ2, PVZ3, PVZ4],
    downloadLink:
      "https://drive.google.com/file/d/14X9vpY_ASB-mUJKTvD7QZBrJAyv_T9wk/view?usp=sharing",
  },
];

const Projects: React.FC = () => {
  const [imageIndexes, setImageIndexes] = useState<{ [key: number]: number }>(
    () =>
      projects.reduce((acc, project) => {
        acc[project.id] = 0;
        return acc;
      }, {} as { [key: number]: number })
  );

  useEffect(() => {
    const intervals = projects.map((project) =>
      setInterval(() => {
        setImageIndexes((prevIndexes) => ({
          ...prevIndexes,
          [project.id]: (prevIndexes[project.id] + 1) % project.images.length,
        }));
      }, 3000)
    );

    return () => intervals.forEach(clearInterval);
  }, []);

  return (
    <div className="projects-container">
      <h1 className="projects-heading" id="Projects_Section">
        Projects
      </h1>{" "}
      {/* Added Heading */}
      {projects.map((project) => (
        <div key={project.id} className="project-card">
          <div className="carousel">
            {project.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`${project.title} ${index + 1}`}
                className={index === imageIndexes[project.id] ? "active" : ""}
              />
            ))}
          </div>
          <div className="dots">
            {project.images.map((_, index) => (
              <span
                key={index}
                className={
                  index === imageIndexes[project.id] ? "dot active" : "dot"
                }
                onClick={() =>
                  setImageIndexes((prevIndexes) => ({
                    ...prevIndexes,
                    [project.id]: index,
                  }))
                }
              ></span>
            ))}
          </div>
          <h2>{project.title}</h2>
          <p>{project.description}</p>
          <a href={project.downloadLink} className="download-link">
            Download
          </a>
        </div>
      ))}
    </div>
  );
};

export default Projects;
