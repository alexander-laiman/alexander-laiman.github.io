import portrait from "./img/1718258605229.jpg";
import linkedinlogo from "./img/LinkedIn-Logos/In/Digital/Blue/2x/In-Blue-128-Γö¼┬½@2x.png";
import githublogo from "./img/GitHub Logos/SVG/GitHub_Invertocat_Dark.svg";
import paperemoji from "./img/page_facing_up.svg";
import imgtest from "./img/DSF4084.JPG";
import imgtest2 from "./img/DSF4079.JPG";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="spanSpace" />
        {/* <img src={portrait} className="App-logo" alt="logo" /> */}
        <h>Alexander Laiman</h>
        <div className="socialLinks">
          <a
            className="App-link"
            href="https://www.linkedin.com/in/alexander-laiman-a698b0103/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedinlogo} className="LinkLogos" alt="Linkedin" />
          </a>
          <a
            className="App-link"
            href="https://drive.google.com/file/d/1ii2J-1499_3pgfik1tTDMnEks5dGLZHq/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={paperemoji} className="LinkLogos1" alt="resume" />
          </a>
          <a
            className="App-link"
            href="https://github.com/alexander-laiman"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={githublogo} className="LinkLogos" alt="Github" />
          </a>
        </div>
        <div className="projectTiles">
          <header className="projectHeaders">Street</header>
          <img src={imgtest} className="Project-Preview fade-in" />
          <img src={imgtest2} className="Project-Preview fade-in" />
          <img src={imgtest} className="Project-Preview fade-in" />
          <img src={imgtest2} className="Project-Preview fade-in" />
        </div>
      </header>
    </div>
  );
}

export default App;
