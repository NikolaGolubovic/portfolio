import React, { useState, useEffect, useRef } from "react";
import useMouse from "@react-hook/mouse-position";
import Scroll from "react-scroll";

import smileImg from "../images/smile.png";
import seriousImg from "../images/serious.png";

import { mySummary } from "../config/texts";

function AboutBioComponent({ contactTop }) {
  const [myImg, setMyImg] = useState(seriousImg);
  const [baseLeftPos, setBaseLeftPos] = useState(0);
  const [baseTopPos, setBaseTopPos] = useState(0);
  const [transX, setTransX] = useState(0);
  const [transY, setTransY] = useState(0);
  const refMouse = React.useRef(null);
  const refButton = useRef();
  const scroll = Scroll.animateScroll;
  useEffect(() => {
    setBaseLeftPos(refButton.current.offsetLeft);
    setBaseTopPos(refButton.current.offsetTop);
    setTransX(refButton.current.offsetLeft);
    setTransY(refButton.current.offsetTop);
  }, []);
  const mouse = useMouse(refMouse, {
    enterDelay: 100,
    leaveDelay: 100,
  });
  function magnetButton() {
    if (!mouse.x && !mouse.y) return;
    let x = -30;
    let y = -15;
    setTransX(mouse.x + x);
    setTransY(mouse.y + y);
  }
  function leaveCanvas() {
    setBaseLeftPos(refButton.current.offsetLeft);
    setBaseTopPos(refButton.current.offsetTop);
    setTransX(refButton.current.offsetLeft);
    setTransY(refButton.current.offsetTop);
  }
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
          <div
            className="canvas-for-button"
            ref={refMouse}
            // onMouseMove={() => console.log(baseLeftPos, baseTopPos)}
            onMouseMove={magnetButton}
            onMouseLeave={leaveCanvas}
          >
            <button
              ref={refButton}
              className="btn-moved"
              style={{
                transform: `translate(${transX - baseLeftPos}px, ${
                  transY - baseTopPos
                }px)`,
              }}
              onClick={() => scroll.scrollTo(contactTop)}
            >
              Say Hello
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutBioComponent;
