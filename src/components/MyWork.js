import React, { useState } from "react";

import MainProjects from "./MainProjects";
import SmallerProjects from "./SmallerProjects";

import { biggerPanoControl, smallerPanoControl } from "../config/functions";

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

  return (
    <section className="my-work" ref={workRef}>
      <div className="my-work-header">
        <h1 className="title-about">Projects</h1>
        <div className="switch-table">
          <button
            className={biggerPanoBtn ? "change-pano active" : "change-pano"}
            onClick={() =>
              biggerPanoControl(
                biggerPano,
                setBiggerPano,
                setBiggerPanoBtn,
                setSmallerProjectsClassName,
                setMainProjectsClassName,
                setPanoOpacity
              )
            }
          >
            Projects
          </button>
          <button
            className={!biggerPanoBtn ? "change-pano active" : "change-pano"}
            onClick={() =>
              smallerPanoControl(
                biggerPano,
                setBiggerPano,
                setBiggerPanoBtn,
                setMainProjectsClassName,
                setSmallerProjectsClassName,
                setPanoOpacity
              )
            }
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
