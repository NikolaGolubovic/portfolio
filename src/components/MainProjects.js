import React from "react";

import { projectsArr } from "../config/texts";

function MainProjects({ mainProjectsClassName }) {
  return (
    <div className={mainProjectsClassName}>
      {projectsArr.map((project) => {
        return (
          <div className="project" key={project.projectTitle}>
            <div className="project-info">
              <h1 className="project-title">{project.projectTitle}</h1>

              <p className="project-description">
                {project.projectDescription}
              </p>

              <p className="project-info-tech">
                <span>
                  <b>Tech Stack:</b>
                </span>{" "}
                {project.projectTech}
              </p>

              <div className="project-info-presentation">
                <a href={project.projectAppLink} className="project-btn">
                  See Project
                </a>
                <a href={project.projectGithubLink} className="project-btn">
                  Github
                </a>
              </div>
            </div>
            <div className="project-image">
              <div className="desktop">
                <img
                  src={project.desktopImg}
                  alt={project.altDesktop}
                  className="desktop-img"
                />
              </div>
              <div className="phone">
                <img
                  src={project.phoneImg}
                  alt={project.altPhone}
                  className="phone-img"
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default MainProjects;
