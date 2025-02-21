import React from "react";

function PDFViewer({ pdfUrl }) {
  return (
    <div style={{ alignContent: "center", padding: "40px" }}>
      <div
        style={{
          height: "90vh",
          alignSelf: "center",
          alignContent: "center",
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
        }}
      >
        <iframe
          title="PDF Viewer"
          src={pdfUrl}
          width="70%"
          height="100%"
          style={{ border: "none" }}
        >
          <p>
            Your browser does not support iframes. Please download the PDF to
            view it:
            <a href={pdfUrl}>Download PDF</a>
          </p>
        </iframe>
      </div>
    </div>
  );
}

export default PDFViewer;
