import React from "react";
import jsImage from "../images/js-cover-compressed.jpg";

function CoverImage() {
  return (
    <div className="js-image-container">
      <img src={jsImage} alt="Javascript" className="js-image" />
    </div>
  );
}

export default CoverImage;
