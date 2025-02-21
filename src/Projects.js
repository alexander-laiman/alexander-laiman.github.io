import "./App.css";
import ProjectItem from "./projectItem.js";

// List of project names
const projects = ["stardew", "amplitude", "british-museum"];

const stardewimages = require.context("./projects/stardew", false);
const stardewimageList = stardewimages
  .keys()
  .map((image) => stardewimages(image));

const vqimages = require.context("./projects/vq", false);
const vqimageList = vqimages.keys().map((image) => vqimages(image));

const pi = require.context("./projects/particle", false);
const pilist = pi.keys().map((image) => pi(image));
const jvc = require.context("./projects/jvc", false);
const jvclist = jvc.keys().map((image) => jvc(image));
const city = require.context("./projects/city", false);
const citylist = city.keys().map((image) => city(image));

function Projects() {
  return (
    <div
      style={{
        alignItems: "center",
        alignContent: "center",
        alignSelf: "center",
        justifyContent: "center",
        justifyItems: "center",
      }}
    >
      <ProjectItem
        title="Exploring RAG/LLM Enabled NPCs"
        desc="Sony Interactive Entertainment Prize Winner: Using FAISS and all-MiniLM-L6-v2 for vector embeddings, I implemented a version of the Simulacra paper memory system for rich NPC interactions and more complex concierge AI."
        im1={stardewimageList[0]}
        im2={stardewimageList[1]}
        im3={stardewimageList[2]}
      />
      <div className="spanSpace" />

      <ProjectItem
        title="VQ Space Innovation Challenge : Grand Prize Winners $20,000"
        desc="Written in Unity with C#, we create a VR visual suite and control system for tracking sattelite orbits around the planet. Winners were invited to the Colorado SpaceForce base for a further design sprint. "
        link="https://news.mit.edu/2019/mit-team-places-first-air-force-virtual-reality-visionary-q-prize-competition-0409"
        linkDesc="Link to article"
        im1={vqimageList[0]}
        im2={vqimageList[1]}
        im3={vqimageList[2]}
      />
      <div className="spanSpace" />
      <ProjectItem
        title="Particle Manipulation by Acoustics"
        desc="Short term project in CSAIL using Gymnasium Reinforcement Learning (RL) to train networks to manipulate particles with acoustic pressure. Increased sim particle limit by 1000x using vectorization."
        im1={pilist[0]}
        im2={pilist[1]}
      />
      <div className="spanSpace" />
      <ProjectItem
        title="Diffusion to 3D Texture"
        desc="Using diffusion networks and segmentation, generating textures in realtime for 3D environments using prompts."
        im1={citylist[0]}
        im2={citylist[1]}
        im3={citylist[2]}
      />
      <div className="spanSpace" />
      <ProjectItem
        title="JVC Network remove + Audio Calibration"
        desc="Quick weekend project where I made an android remote for TCP control of my projector as the remote never came with it. Also used the weekend to calibrate room audio with REW."
        link="https://www.github.com/alexander-laiman/JVCRemote/"
        linkDesc="Link to open source github project."
        im1={jvclist[0]}
        im2={jvclist[1]}
      />
    </div>
  );
}

export default Projects;
