import React, { useState } from "react";

import smileImg from "../images/profil-vazi.jpg";
import seriousImg from "../images/profil.jpg";

import { mySummary } from "../config/texts";
import ButtonMagnet from "./ButtonMagnet";

function AboutBioComponent({ contactTop }) {
  const [seriousFront, setSeriousFront] = useState("serious front");

  return (
    <div className="about" id="about">
      <h1 className="title-about">{mySummary.title}</h1>
      <div className="card-about">
        <div className="card-about-left">
          <div className="my-image-container">
            <img
              src={seriousImg}
              alt="Serious Img"
              style={{ zIndex: seriousFront && 10 }}
              className="my-image displayed"
            />
            <img
              src={smileImg}
              alt="Hello :)"
              style={{ zIndex: !seriousFront && 10 }}
              className="my-image"
            />
          </div>
        </div>
        <div className="my-bio">
          <p className="bio-name">{mySummary.name}</p>
          <p dangerouslySetInnerHTML={{ __html: mySummary.text }}></p>
          <ButtonMagnet contactTop={contactTop} />
        </div>
      </div>
    </div>
  );
}

export default AboutBioComponent;
