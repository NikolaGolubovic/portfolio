import React from "react";

import calendarDesktop from "../images/calendar-desktop.jpg";
import calendarPhone from "../images/calendar-phone.jpg";
import quizDesktop from "../images/quiz-desktop.jpg";
import quizPhone from "../images/quiz-phone.jpg";
import surveyDesktop from "../images/survey-desktop.jpg";
import surveyPhone from "../images/survey-phone.jpg";

function MainProjects({ mainProjectsClassName }) {
  return (
    <div className={mainProjectsClassName}>
      <div className="project">
        <div className="project-info">
          <h3 className="project-title">Calendar App</h3>

          <p className="project-description">
            Fullstack Calendar App for making and tracking events. You can use
            user as username and password as password for credentials.
          </p>

          <p className="project-info-tech">
            <span>
              <b>Tech Stack:</b>
            </span>{" "}
            React, CssFlex, NodeJs/Express, Postgresql
          </p>

          <div className="project-info-presentation">
            <a
              href="https://sweetcalendar.herokuapp.com/"
              className="project-btn"
            >
              See Project
            </a>
            <a
              href="https://github.com/NikolaGolubovic/fullstack-calendar"
              className="project-btn"
            >
              Github
            </a>
          </div>
        </div>
        <div className="project-image">
          <div className="desktop">
            <img src={calendarDesktop} alt="" className="desktop-img" />
          </div>
          <div className="phone">
            <img src={calendarPhone} alt="" className="phone-img" />
          </div>
        </div>
      </div>
      <div className="project">
        <div className="project-info">
          <h3 className="project-title">Quiz App</h3>

          <p className="project-description">
            Trivia app which use Open Trivia Database as main source. Game can
            be made from different categories. You can use user as username and
            password as password for credentials.
          </p>

          <p className="project-info-tech">
            <span>Tech Stack:</span> React, Express, Open Trivia Database, CSS
            grid
          </p>

          <div className="project-info-presentation">
            <a
              href="https://quizitj.herokuapp.com/quiz"
              className="project-btn"
            >
              See Project
            </a>
            <a
              href="https://github.com/NikolaGolubovic/full-quiz-server-and-build"
              className="project-btn"
            >
              Github
            </a>
          </div>
        </div>
        <div className="project-image">
          <div className="desktop">
            <img src={quizDesktop} alt="" className="desktop-img" />
          </div>
          <div className="phone">
            <img src={quizPhone} alt="" className="phone-img" />
          </div>
        </div>
      </div>
      <div className="project">
        <div className="project-info">
          <h3 className="project-title">Survey App</h3>

          <p className="project-description">
            Survey app with options to create surveys and vote. You can use user
            as username and password as password for credentials.
          </p>

          <p className="project-info-tech">
            <span>Tech Stack:</span> React Router, Express, Postgresql,
            SurveyJs, ChartJs
          </p>

          <div className="project-info-presentation">
            <a
              href="https://veryhappysurvey.herokuapp.com/"
              className="project-btn"
            >
              See Project
            </a>
            <a
              href="https://github.com/NikolaGolubovic/happysurvey"
              className="project-btn"
            >
              Github
            </a>
          </div>
        </div>
        <div className="project-image">
          <div className="desktop">
            <img src={surveyDesktop} alt="" className="desktop-img" />
          </div>
          <div className="phone">
            <img src={surveyPhone} alt="" className="phone-img" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainProjects;
