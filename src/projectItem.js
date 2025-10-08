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
          flexDirection: "column",
          width: "100%",
          maxWidth: "1000px",
          overflow: "hidden",
          backgroundColor: "#fff",
          boxShadow: "2px 2px 0px rgba(0, 0, 0, 0.2)",
          borderRadius: "1px",
          border: "0.5px solid lightgray",
        }}
      >
        {/* Hero Image */}
        {im1 && (
          <img
            src={im1}
            alt="Hero Image"
            className="paper-frame hero-image"
            style={{ 
              width: "100%", 
              height: "auto", 
              objectFit: "contain",
              display: "block"
            }}
          />
        )}
        
        {/* Content Section */}
        <div className="project-content">
          <header className="Header">{title}</header>
          <p className="Description">{desc}</p>
          {link && <a href={link} style={{ color: "#007bff", textDecoration: "underline" }}> {linkDesc} </a>}
        </div>
        
        {/* Additional Images Row */}
        {(im2 || im3) && (
          <div className="additional-images-row">
            {im2 && (
              <img
                src={im2}
                alt="Additional Image 1"
                className="paper-frame additional-image"
                style={{
                  width: "100%",
                  height: "auto",
                  maxHeight: "200px",
                  objectFit: "cover",
                  display: "block"
                }}
              />
            )}
            {im3 && (
              <img 
                src={im3} 
                alt="Additional Image 2"
                className="paper-frame additional-image"
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
