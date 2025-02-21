import linkedinlogo from "./img/LinkedIn-Logos/In/Digital/Blue/2x/In-Blue-128-Γö¼┬½@2x.png";
import githublogo from "./img/GitHub Logos/SVG/GitHub_Invertocat_Dark.svg";
import paperemoji from "./img/page_facing_up.svg";

import papertex from "./img/paper-texture_1194-5999.jpg";
import "./App.css";
import Navbar from "./navbar";
import ImageGallery from "./imageGallery.js";
const images = require.context("./img/gallery/optim", false);
const imageList = images.keys().map((image) => images(image));

function Home() {
  return (
    <div>
      <div className="App">
        <header className="App-header">
          <div className="projectTiles">
            <header className="projectHeaders"></header>
            <ImageGallery imageList={imageList} />
          </div>
          <header>Thank you.</header>
          <div className="spanSpace" />
        </header>
      </div>
    </div>
  );
}

export default Home;
