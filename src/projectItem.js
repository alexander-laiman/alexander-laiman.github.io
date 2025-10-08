import "./ProjectItems.css";
const ProjectItem = ({ title, desc, link, linkDesc, im1, im2, im3 }) => {
  return (
    <div
      className="project-item-container"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        margin: "20px 0",
      }}
    >
      <div
        className="project-card"
        style={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          maxWidth: "1000px",
          overflow: "hidden",
          backgroundColor: "#fff",
          marginBottom: "48px",
          boxShadow: "8px 8px 0px rgba(0, 0, 0, 0.3)",
          borderRadius: "0px",
          border: "1px solid ivory",
        }}
      >
        <div className="Main-Image-Box">
          <img
            src={im1}
            alt="Primary Image"
            className="paper-frame"
            style={{ 
              width: "100%", 
              height: "auto", 
              maxHeight: "300px", 
              objectFit: "cover",
              display: "block"
            }}
          />
          <header className="Header">{title}</header>
          <p className="Description">{desc}</p>
          {link && <a href={link} style={{ color: "#007bff", textDecoration: "underline" }}> {linkDesc} </a>}
        </div>
        {im2 && (
          <div className="Secondary-Image-Column">
            <img
              src={im2}
              alt="Secondary Image 1"
              className="paper-frame"
              style={{
                width: "100%",
                height: "auto",
                maxHeight: "200px",
                objectFit: "cover",
                display: "block"
              }}
            />
            {im3 && (
              <img 
                src={im3} 
                alt="Secondary Image 2"
                className="paper-frame"
                style={{
                  width: "100%",
                  height: "auto",
                  maxHeight: "200px",
                  objectFit: "cover",
                  display: "block"
                }}
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectItem;
