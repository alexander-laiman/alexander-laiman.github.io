import linkedinlogo from "./img/LinkedIn-Logos/In/Digital/Blue/2x/In-Blue-128-Γö¼┬½@2x.png";
import githublogo from "./img/GitHub Logos/SVG/GitHub_Invertocat_Dark.svg";
import paperemoji from "./img/page_facing_up.svg";

import papertex from "./img/paper-texture_1194-5999.jpg";
import "./App.css";

const images = require.context("./img/gallery/optim", false);
const imageList = images.keys().map((image) => images(image));

function ImageGallery() {
  return (
    <div>
      {imageList.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`image-${index}`}
          className="Project-Preview fade-in"
        />
      ))}
    </div>
  );
}

function App() {
  return (
    <div>
      <div className="App">
        <header className="App-header">
          <div className="spanSpace" />
          {/* <img src={portrait} className="App-logo" alt="logo" /> */}
          <header>Alexander Laiman</header>
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
          <div style={{ height: "40px" }}></div>

          <div className="projectTiles">
            <header className="projectHeaders"></header>
            <ImageGallery />
          </div>
          <header>Thank you.</header>
          <div className="spanSpace" />
        </header>
      </div>
    </div>
  );
}

export default App;
