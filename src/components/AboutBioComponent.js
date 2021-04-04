import React, { useState } from "react";

import smileImg from "../images/smile.png";
import seriousImg from "../images/serious.png";

import { mySummary } from "../config/texts";
import ButtonMagnet from "./ButtonMagnet";

function AboutBioComponent({ contactTop }) {
  const [myImg, setMyImg] = useState(seriousImg);

  return (
    <div className="about" id="about">
      <h1 className="title-about">{mySummary.title}</h1>
      <div className="card-about">
        <div className="my-image">
          <img
            src={myImg}
            alt="Hello"
            onMouseEnter={() => setMyImg(smileImg)}
            onMouseLeave={() => setMyImg(seriousImg)}
          />
        </div>
        <div className="my-bio">
          <h6>{mySummary.name}</h6>
          <p dangerouslySetInnerHTML={{ __html: mySummary.text }}></p>
          <ButtonMagnet contactTop={contactTop} />
        </div>
      </div>
    </div>
  );
}

export default AboutBioComponent;
