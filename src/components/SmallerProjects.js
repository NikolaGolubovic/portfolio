import React from "react";
import { smallerProjectsArr } from "../config/texts.js";

function SmallerProjects({ smallerProjectsClassName }) {
  return (
    <div className={smallerProjectsClassName}>
      {smallerProjectsArr.map((project, index) => {
        return (
          <div className="small-project" key={index}>
            <a className="small-project-link" href={project.link}>
              <img src={project.src} alt="Project" />
              <div className="small-project-description">
                <p>{project.description}</p>
              </div>
            </a>
          </div>
        );
      })}
    </div>
  );
}

export default SmallerProjects;
