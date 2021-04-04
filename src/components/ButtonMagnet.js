import React, { useRef, useState, useEffect } from "react";
import useMouse from "@react-hook/mouse-position";
import Scroll from "react-scroll";
import { magnetBtnStartPos } from "../config/effects";
import { magnetButton, leaveCanvas } from "../config/functions";

function ButtonMagnet({ contactTop }) {
  const [baseLeftPos, setBaseLeftPos] = useState(0);
  const [baseTopPos, setBaseTopPos] = useState(0);
  const [transX, setTransX] = useState(0);
  const [transY, setTransY] = useState(0);
  const refMouse = React.useRef(null);
  const refButton = useRef();
  const scroll = Scroll.animateScroll;
  const mouse = useMouse(refMouse, {
    enterDelay: 100,
    leaveDelay: 100,
  });
  useEffect(() => {
    magnetBtnStartPos(
      refButton,
      setBaseLeftPos,
      setBaseTopPos,
      setTransX,
      setTransY
    );
  }, []);
  return (
    <div
      className="canvas-for-button"
      ref={refMouse}
      onMouseMove={() => magnetButton(mouse, setTransX, setTransY)}
      onMouseLeave={() =>
        leaveCanvas(
          refButton,
          setBaseLeftPos,
          setBaseTopPos,
          setTransX,
          setTransY
        )
      }
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
  );
}

export default ButtonMagnet;
