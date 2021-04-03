import React, { useState } from "react";

import MainProjects from "./MainProjects";
import SmallerProjects from "./SmallerProjects";

function MyWork({ workRef }) {
  const [biggerPano, setBiggerPano] = useState(true);
  const [biggerPanoBtn, setBiggerPanoBtn] = useState(true);
  const [mainProjectsClassName, setMainProjectsClassName] = useState(
    "main-projects up show"
  );
  const [smallerProjectsClassName, setSmallerProjectsClassName] = useState(
    "smaller-projects down hide"
  );
  const [panoOpacity, setPanoOpacity] = useState(1);
  function biggerPanoControl() {
    if (biggerPano) {
      return;
    }
    setBiggerPanoBtn(true);
    setSmallerProjectsClassName("smaller-projects down");
    setTimeout(() => {
      setMainProjectsClassName("main-projects down");
      setPanoOpacity(0);
    }, 300);
    setTimeout(() => {
      setBiggerPano(true);
      setPanoOpacity(1);
      setSmallerProjectsClassName("smaller-projects down hide");
      setMainProjectsClassName("main-projects up show");
    }, 400);
  }
  function smallerPanoControl() {
    if (!biggerPano) {
      return;
    }
    setBiggerPanoBtn(false);
    setMainProjectsClassName("main-projects down");
    setTimeout(() => {
      setSmallerProjectsClassName("smaller-projects down");
      setPanoOpacity(0);
    }, 300);
    setTimeout(() => {
      setBiggerPano(false);
      setPanoOpacity(1);
      setMainProjectsClassName("main-projects down hide");
      setSmallerProjectsClassName("smaller-projects up show");
    }, 400);
  }

  return (
    <section className="my-work" ref={workRef}>
      <div className="my-work-header">
        <h1 className="title-about">Projects</h1>
        <div className="switch-table">
          <button
            className={biggerPanoBtn ? "change-pano active" : "change-pano"}
            onClick={biggerPanoControl}
          >
            Projects
          </button>
          <button
            className={!biggerPanoBtn ? "change-pano active" : "change-pano"}
            onClick={smallerPanoControl}
          >
            Little Projects
          </button>
        </div>
      </div>
      <div className="work-panos">
        <div className="pano-projects" style={{ opacity: panoOpacity }}>
          <MainProjects mainProjectsClassName={mainProjectsClassName} />
          <SmallerProjects
            smallerProjectsClassName={smallerProjectsClassName}
          />
        </div>
      </div>
    </section>
  );
}

export default MyWork;
