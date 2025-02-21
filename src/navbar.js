import { Link } from "react-router-dom";
import linkedinlogo from "./img/LinkedIn-Logos/In/Digital/Blue/2x/In-Blue-128-Γö¼┬½@2x.png";
import githublogo from "./img/GitHub Logos/SVG/GitHub_Invertocat_Dark.svg";
import paperemoji from "./img/page_facing_up.svg";
import "./Nav.css";
const Navbar = () => {
  return (
    <nav className="Nav">
      <div
        style={{
          display: "flex",
          flex: "1",
          justifyContent: "space-between",
          padding: "40px",
          textTransform: "uppercase",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Link to="/" className="NavLinks">
          Gallery
        </Link>

        <Link to="/projects" className="NavLinks">
          Projects
        </Link>

        <Link to="/writing" className="NavLinks">
          Writing
        </Link>
      </div>
      <hr />
      <div className="spanSpace" />
      <header style={{ textAlign: "center", fontSize: "32px" }}>
        Alexander Laiman
      </header>
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
    </nav>
  );
};

export default Navbar;
