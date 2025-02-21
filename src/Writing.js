import linkedinlogo from "./img/LinkedIn-Logos/In/Digital/Blue/2x/In-Blue-128-Γö¼┬½@2x.png";
import githublogo from "./img/GitHub Logos/SVG/GitHub_Invertocat_Dark.svg";
import paperemoji from "./img/page_facing_up.svg";

import papertex from "./img/paper-texture_1194-5999.jpg";
import "./App.css";
import Navbar from "./navbar";
import PDFViewer from "./pdfViewer";
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

function Writing() {
  return (
    <div>
      <div className="App">
        <header>
          An archive for student papers created as a part of my education at
          MIT.
        </header>
        Physics
        <PDFViewer pdfUrl="/docs/cosmic-watch.pdf" />
        <PDFViewer pdfUrl="/docs/optical-tweezers.pdf" />
        Materials Science
        <PDFViewer pdfUrl="/docs/bandgap_paper.pdf" />
        <PDFViewer pdfUrl="/docs/lead-acid.pdf" />
      </div>
    </div>
  );
}

export default Writing;
