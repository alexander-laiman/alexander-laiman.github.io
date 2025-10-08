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
const ros = require.context("./projects/ros", false);
const roslist = ros.keys().map((image) => ros(image));
const museum = require.context("./projects/museum", false);
const museumlist = museum.keys().map((image) => museum(image));
const ul = require.context("./projects/ul", false);
const ullist = ul.keys().map((image) => ul(image));
const web = require.context("./projects/web", false);
const weblist = web.keys().map((image) => web(image));
const vap = require.context("./projects/vap", false);
const vaplist = vap.keys().map((image) => vap(image));
const wap = require.context("./projects/wap", false);
const waplist = wap.keys().map((image) => wap(image));
const pr = require.context("./projects/pr", false);
const prlist = pr.keys().map((image) => pr(image));
const aviad = require.context("./projects/aviad", false);
const aviadlist = aviad.keys().map((image) => aviad(image));
function Projects() {
  return (
    <div
      className="projects-grid"
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(600px, 1fr))",
        gap: "40px",
        alignItems: "start",
        justifyContent: "center",
        width: "100%",
        maxWidth: "1400px",
        margin: "0 auto",
        padding: "20px",
      }}
    >
      <ProjectItem
        title="Web Projects"
        desc="Currently looking at different data vis techniques using graphs and hypergraphx to explore relationships/common properties between projects and images. Future versions will use VLMs and autotagging to help photographers explore possible narratives over a body of work."
        im1={weblist[0]}
        linkDesc="Public repo here"
        link="https://github.com/alexander-laiman/web-data-experiments"
      />
            <ProjectItem
        title="ROS Unity Experiments"
        desc="I've recently been learning ROS2 and different integrations. Most recently I did the Unity course simulating pick and place tasks."
        im1={roslist[0]}
      />
            <ProjectItem
        title="RAG Enabled Museum Search "
        desc="I created a website that preprocessed the British Museum Public API to allow searching with emotions through a subset of the Chinese artifact collection using simple tokenization and RAG vector search."
        im1={museumlist[0]}
        linkDesc="Site no longer live due to running costs."
        link="https://www.britishmuseum.org/"
      />
      <ProjectItem
        title="Aviad AI - Engine Native SLM Tooling"
        desc="Created local inference tooling for running AI in engine for Unreal and Unity. Created and polished game demos for outreach, and created in editor tooling for Unity AI character dialogue systems."
        im1={aviadlist[0]}
        im2={aviadlist[1]}
        im3={aviadlist[2]}
      />
      <ProjectItem
        title="Exploring RAG/LLM Enabled NPCs"
        desc="Sony Interactive Entertainment Prize Winner: Using FAISS and all-MiniLM-L6-v2 for vector embeddings, I implemented a version of the Simulacra paper memory system for rich NPC interactions and more complex concierge AI."
        im1={stardewimageList[0]}
        im2={stardewimageList[1]}
        im3={stardewimageList[2]}
      />
            <ProjectItem
        title="Ultraleap Gemini v5"
        desc="During my time as Senior Simuilation Engineer at Ultraleap, I trained the model that became the foundation model for a new Gemini release. This model was trained off of new simulation data that I had created over several months, and on improved architectures provided by the ML team. Improved tracking substantially and allowed for new Kiosk tracking modes. Images from left to right by Roli, kioskmarketplace.com, and Ultraleap."
        im2={ullist[1]}
        im1={ullist[2]}
        im3={ullist[4]}
        link="https://www.youtube.com/watch?time_continue=1&v=JEjXetjbMU8&embeds_referring_euri=https%3A%2F%2Fwww.bing.com%2F&embeds_referring_origin=https%3A%2F%2Fwww.bing.com&source_ve_path=Mjg2NjY"
        linkDesc="See the Kiosk tracking in action."
      />
      <ProjectItem
        title="Roli Airwave"
        desc="While at Ultraleap I helped lead contract negotiations and spec sheet creation for a new product being designed by Roli. I then led the research and engineering for the model to be used for their product. It was released finally in 2024."
        link="https://roli.com/us/experience/airwave-create"
        linkDesc="Experience Airwave"
        im1={ullist[0]}
        im2={ullist[3]}
        
      />
      <ProjectItem
        title="Vapourbounce VR Game"
        desc="Designed the architecture, networking and physics for VR game Vapourbounce which was shipped to the Oculus sideload store."
        link="https://www.youtube.com/watch?v=zGS64Xtr4uU"
        linkDesc="Early alpha footage tested by channel 'VR Bytes'"
        im1={vaplist[0]}
        
      />
      <ProjectItem
        title="Wayports - Virtual Collaboration"
        desc="Created Wayports application in collaboration with Tycho Reality. Desktop 'metaverse' style application in 2021 with virtual spaces and conferencing. Added support for web streaming, office tools, AI powered avatars and more."
        link="https://gg.deals/application/wayports/"
        linkDesc="See more details here"
        im1={waplist[0]}
        
      />
            <ProjectItem
        title="PR-in-VR : Concepthealth Technologies"
        desc="Refactored and maintained PR-in-VR, a physiotherapy VR tool used across England. Implemented software for live service support, animation, and designed and implemented UI for patients."
        link="https://pmc.ncbi.nlm.nih.gov/articles/PMC7381058/"
        linkDesc="This work led to a paper by CEO Farhan Amin."
        im1={prlist[0]}
        im2={prlist[1]}
        
      />

      <ProjectItem
        title="VQ Space Innovation Challenge : Grand Prize Winners $20,000"
        desc="Written in Unity with C#, we create a VR visual suite and control system for tracking sattelite orbits around the planet. Winners were invited to the Colorado SpaceForce base for a further design sprint. "
        link="https://news.mit.edu/2019/mit-team-places-first-air-force-virtual-reality-visionary-q-prize-competition-0409"
        linkDesc="Link to article"
        im1={vqimageList[0]}
        im2={vqimageList[1]}
        im3={vqimageList[2]}
      />
      <ProjectItem
        title="Particle Manipulation by Acoustics"
        desc="Short term project in CSAIL using Gymnasium Reinforcement Learning (RL) to train networks to manipulate particles with acoustic pressure. Increased sim particle limit by 1000x using vectorization."
        im1={pilist[0]}
        im2={pilist[1]}
      />
      <ProjectItem
        title="Diffusion to 3D Texture"
        desc="Using diffusion networks and segmentation, generating textures in realtime for 3D environments using prompts."
        im1={citylist[0]}
        im2={citylist[1]}
        im3={citylist[2]}
      />
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
