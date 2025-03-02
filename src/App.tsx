import React from "react";
import NavBar from "./NavBar.tsx";
import Intro from "./Introduction.tsx";
import About from "./About.tsx";
import Projects from "./Projects.tsx";

const App: React.FC = () => {
  return (
    <div style={styles.container}>
      <NavBar />
      <div style={styles.otherBody}>
        <div style={styles.sections}>
          <Intro />
          <About />
          <Projects />
        </div>
      </div>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    margin: 0,
    padding: 0,
    minHeight: "100vh",
  },
  sections: {
    display: "flex",
    flexDirection: "column",
  },
  otherBody: {
    paddingTop: "10vh",
    width: "100vw",
  },
};

export default App;
