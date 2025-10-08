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
          border: "2px solid #ccc",
          borderRadius: "8px",
          overflow: "hidden",
          backgroundColor: "#fff",
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        }}
      >
        <div className="Main-Image-Box">
          <img
            src={im1}
            alt="Primary Image"
            style={{ 
              width: "100%", 
              height: "auto", 
              maxHeight: "300px", 
              objectFit: "cover",
              borderRadius: "4px"
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
              style={{
                width: "100%",
                height: "auto",
                maxHeight: "200px",
                objectFit: "cover",
                borderRadius: "4px"
              }}
            />
            {im3 && (
              <img 
                src={im3} 
                alt="Secondary Image 2"
                style={{
                  width: "100%",
                  height: "auto",
                  maxHeight: "200px",
                  objectFit: "cover",
                  borderRadius: "4px"
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
