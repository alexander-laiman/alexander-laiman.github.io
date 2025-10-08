import "./App.css";
import ProjectItem from "./projectItem.js";

// Projects data structure - CRM-like approach
const projectsData = [
  {
    id: "web-projects",
    title: "Web Projects",
    description: "Currently looking at different data vis techniques using graphs and hypergraphx to explore relationships/common properties between projects and images. Future versions will use VLMs and autotagging to help photographers explore possible narratives over a body of work.",
    images: {
      primary: null, // Will be set below
      secondary: null,
      tertiary: null
    },
    link: {
      url: "https://github.com/alexander-laiman/web-data-experiments",
      description: "Public repo here"
    }
  },
  {
    id: "ros-unity-experiments",
    title: "ROS Unity Experiments",
    description: "I've recently been learning ROS2 and different integrations. Most recently I did the Unity course simulating pick and place tasks.",
    images: {
      primary: null
    }
  },
  {
    id: "museum-rag-search",
    title: "RAG Enabled Museum Search",
    description: "I created a website that preprocessed the British Museum Public API to allow searching with emotions through a subset of the Chinese artifact collection using simple tokenization and RAG vector search.",
    images: {
      primary: null
    },
    link: {
      url: "https://www.britishmuseum.org/",
      description: "Site no longer live due to running costs."
    }
  },
  {
    id: "aviad-ai-engine",
    title: "Aviad AI - Engine Native SLM Tooling",
    description: "Created local inference tooling for running AI in engine for Unreal and Unity. Created and polished game demos for outreach, and created in editor tooling for Unity AI character dialogue systems.",
    images: {
      primary: null,
      secondary: null,
      tertiary: null
    }
  },
  {
    id: "rag-llm-npcs",
    title: "Exploring RAG/LLM Enabled NPCs",
    description: "Sony Interactive Entertainment Prize Winner: Using FAISS and all-MiniLM-L6-v2 for vector embeddings, I implemented a version of the Simulacra paper memory system for rich NPC interactions and more complex concierge AI.",
    images: {
      primary: null,
      secondary: null,
      tertiary: null
    }
  },
  {
    id: "ultraleap-gemini",
    title: "Ultraleap Gemini v5",
    description: "During my time as Senior Simuilation Engineer at Ultraleap, I trained the model that became the foundation model for a new Gemini release. This model was trained off of new simulation data that I had created over several months, and on improved architectures provided by the ML team. Improved tracking substantially and allowed for new Kiosk tracking modes. Images from left to right by Roli, kioskmarketplace.com, and Ultraleap.",
    images: {
      primary: null,
      secondary: null,
      tertiary: null
    },
    link: {
      url: "https://www.youtube.com/watch?time_continue=1&v=JEjXetjbMU8&embeds_referring_euri=https%3A%2F%2Fwww.bing.com%2F&embeds_referring_origin=https%3A%2F%2Fwww.bing.com&source_ve_path=Mjg2NjY",
      description: "See the Kiosk tracking in action."
    }
  },
  {
    id: "roli-airwave",
    title: "Roli Airwave",
    description: "While at Ultraleap I helped lead contract negotiations and spec sheet creation for a new product being designed by Roli. I then led the research and engineering for the model to be used for their product. It was released finally in 2024.",
    images: {
      primary: null,
      secondary: null
    },
    link: {
      url: "https://roli.com/us/experience/airwave-create",
      description: "Experience Airwave"
    }
  },
  {
    id: "vapourbounce-vr",
    title: "Vapourbounce VR Game",
    description: "Designed the architecture, networking and physics for VR game Vapourbounce which was shipped to the Oculus sideload store.",
    images: {
      primary: null
    },
    link: {
      url: "https://www.youtube.com/watch?v=zGS64Xtr4uU",
      description: "Early alpha footage tested by channel 'VR Bytes'"
    }
  },
  {
    id: "wayports-collaboration",
    title: "Wayports - Virtual Collaboration",
    description: "Created Wayports application in collaboration with Tycho Reality. Desktop 'metaverse' style application in 2021 with virtual spaces and conferencing. Added support for web streaming, office tools, AI powered avatars and more.",
    images: {
      primary: null
    },
    link: {
      url: "https://store.steampowered.com/app/1548970/Wayports/",
      description: "See more details here"
    }
  },
  {
    id: "pr-in-vr",
    title: "PR-in-VR : Concepthealth Technologies",
    description: "Refactored and maintained PR-in-VR, a physiotherapy VR tool used across England. Implemented software for live service support, animation, and designed and implemented UI for patients.",
    images: {
      primary: null,
      secondary: null
    },
    link: {
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7381058/",
      description: "This work led to a paper by CEO Farhan Amin."
    }
  },
  {
    id: "vq-space-challenge",
    title: "VQ Space Innovation Challenge : Grand Prize Winners $20,000",
    description: "Written in Unity with C#, we create a VR visual suite and control system for tracking sattelite orbits around the planet. Winners were invited to the Colorado SpaceForce base for a further design sprint.",
    images: {
      primary: null,
      secondary: null,
      tertiary: null
    },
    link: {
      url: "https://news.mit.edu/2019/mit-team-places-first-air-force-virtual-reality-visionary-q-prize-competition-0409",
      description: "Link to article"
    }
  },
  {
    id: "particle-manipulation",
    title: "Particle Manipulation by Acoustics",
    description: "Short term project in CSAIL using Gymnasium Reinforcement Learning (RL) to train networks to manipulate particles with acoustic pressure. Increased sim particle limit by 1000x using vectorization.",
    images: {
      primary: null,
      secondary: null
    }
  },
  {
    id: "diffusion-3d-texture",
    title: "Diffusion to 3D Texture",
    description: "Using diffusion networks and segmentation, generating textures in realtime for 3D environments using prompts.",
    images: {
      primary: null,
      secondary: null,
      tertiary: null
    }
  },
  {
    id: "jvc-remote",
    title: "JVC Network remove + Audio Calibration",
    description: "Quick weekend project where I made an android remote for TCP control of my projector as the remote never came with it. Also used the weekend to calibrate room audio with REW.",
    images: {
      primary: null,
      secondary: null
    },
    link: {
      url: "https://www.github.com/alexander-laiman/JVCRemote/",
      description: "Link to open source github project."
    }
  }
];

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

// Function to populate project data with images
const populateProjectData = () => {
  const populatedData = [...projectsData];
  
  // Map images to projects by ID
  populatedData.forEach(project => {
    switch(project.id) {
      case "web-projects":
        project.images.primary = weblist[0];
        project.images.secondary = weblist[1];
        project.images.tertiary = weblist[2];
        break;
      case "ros-unity-experiments":
        project.images.primary = roslist[0];
        break;
      case "museum-rag-search":
        project.images.primary = museumlist[0];
        break;
      case "aviad-ai-engine":
        project.images.primary = aviadlist[0];
        project.images.secondary = aviadlist[1];
        project.images.tertiary = aviadlist[2];
        break;
      case "rag-llm-npcs":
        project.images.primary = stardewimageList[0];
        project.images.secondary = stardewimageList[1];
        project.images.tertiary = stardewimageList[2];
        break;
      case "ultraleap-gemini":
        project.images.primary = ullist[2];
        project.images.secondary = ullist[1];
        project.images.tertiary = ullist[4];
        break;
      case "roli-airwave":
        project.images.primary = ullist[0];
        project.images.secondary = ullist[3];
        break;
      case "vapourbounce-vr":
        project.images.primary = vaplist[0];
        break;
      case "wayports-collaboration":
        project.images.primary = waplist[0];
        break;
      case "pr-in-vr":
        project.images.primary = prlist[0];
        project.images.secondary = prlist[1];
        break;
      case "vq-space-challenge":
        project.images.primary = vqimageList[0];
        project.images.secondary = vqimageList[1];
        project.images.tertiary = vqimageList[2];
        break;
      case "particle-manipulation":
        project.images.primary = pilist[0];
        project.images.secondary = pilist[1];
        break;
      case "diffusion-3d-texture":
        project.images.primary = citylist[0];
        project.images.secondary = citylist[1];
        project.images.tertiary = citylist[2];
        break;
      case "jvc-remote":
        project.images.primary = jvclist[0];
        project.images.secondary = jvclist[1];
        break;
    }
  });
  
  return populatedData;
};

function Projects() {
  const populatedProjects = populateProjectData();
  
  // Split projects into two columns (alternating)
  const leftColumnProjects = populatedProjects.filter((_, index) => index % 2 === 0);
  const rightColumnProjects = populatedProjects.filter((_, index) => index % 2 === 1);
  
  return (
    <div
      className="projects-container"
      style={{
        display: "flex",
        gap: "40px",
        width: "100%",
        maxWidth: "1400px",
        margin: "0 auto",
        padding: "20px",
      }}
    >
      {/* Left Column */}
      <div
        className="projects-column"
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        {leftColumnProjects.map((project) => (
          <ProjectItem
            key={project.id}
            title={project.title}
            desc={project.description}
            im1={project.images.primary}
            im2={project.images.secondary}
            im3={project.images.tertiary}
            link={project.link?.url}
            linkDesc={project.link?.description}
          />
        ))}
      </div>
      
      {/* Right Column */}
      <div
        className="projects-column"
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        {rightColumnProjects.map((project) => (
          <ProjectItem
            key={project.id}
            title={project.title}
            desc={project.description}
            im1={project.images.primary}
            im2={project.images.secondary}
            im3={project.images.tertiary}
            link={project.link?.url}
            linkDesc={project.link?.description}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
