import "./ProjectItems.css";
const ProjectItem = ({ title, desc, link, linkDesc, im1, im2, im3 }) => {
  return (
    <div
      style={{
        justifyContent: "center",
        alignItems: "center",
        paddingLeft: "20%",
        paddingRight: "20%",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifySelf: "center",
          alignSelf: "center",
          border: "groove",
        }}
      >
        <div className="Main-Image-Box">
          <img
            src={im1}
            alt="Primary Image"
            style={{ maxHeight: "40vh", justifySelf: "right" }}
          />
          <header className="Header">{title}</header>
          <p className="Description">{desc}</p>
          {link && <a href={link}> {linkDesc} </a>}
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "40%",
            maxHeight: "80vh",
          }}
        >
          <img
            src={im2}
            style={{
              overflow: "clip",
              boxSizing: "border-box",
              maxWidth: "100%",
              maxHeight: "100%",
            }}
          />
          <img src={im3} style={{ overflow: "clip" }} />
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
