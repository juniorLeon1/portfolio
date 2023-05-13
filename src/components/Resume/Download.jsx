import React from "react";
import "./Download.css"

const Download = () => {
  const DownloadHandler = () => {
    
  };

  return (
    <div>
      <button className="download-button" onClick={() => DownloadHandler()}>
        <i class="fa-solid fa-download"></i> Download CV
      </button>
    </div>
  );
};

export default Download;
