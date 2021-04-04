import mastermind from "../images/mastermind.jpg";
import movieSuggestion from "../images/movies-suggestion.jpg";
import salvador from "../images/salvador.jpg";
import fastQuiz from "../images/fast-quiz.jpg";
import restaurant from "../images/restaurant.jpg";

import cardOne from "../images/card-1.svg";
import cardTwo from "../images/card-2.svg";
import cardThree from "../images/logo.svg";

import calendarDesktop from "../images/calendar-desktop.jpg";
import calendarPhone from "../images/calendar-phone.jpg";
import quizDesktop from "../images/quiz-desktop.jpg";
import quizPhone from "../images/quiz-phone.jpg";
import surveyDesktop from "../images/survey-desktop.jpg";
import surveyPhone from "../images/survey-phone.jpg";

export function makeNavLinks(aboutTop, workTop, contactTop = "Contact") {
  const arrParams = [{ aboutTop }, { workTop }, { contactTop }];
  const hrefNames = ["#about", "#work", "#contact"];
  const linkNames = ["About", "Projects", "Contact"];
  return arrParams.map((elem, index) => {
    return {
      ...elem,
      className: "nav-about",
      href: hrefNames[index],
      title: linkNames[index],
    };
  });
}

export function makeCards(oneTransition, twoTransition, threeTransition) {
  const cards = [
    {
      transition: oneTransition,
      imgSrc: cardOne,
      title: "Web Design",
      text: `I will help you to visualize your idea about personal or bussines site. Together we will
      create essence of the product.`,
    },
    {
      transition: twoTransition,
      imgSrc: cardTwo,
      title: "FrontEnd",
      text: `Using full potential of Javascript, React, modern CSS is my way to create visually and functionally acceptable sites.`,
    },
    {
      transition: threeTransition,
      imgSrc: cardThree,
      title: "Server-Side",
      text: `With frameworks like Express and databases like SQL I can controll what happens behind eye of costumer.`,
    },
  ];
  return cards;
}

export const projectsArr = [
  {
    projectTitle: `Calendar App`,
    projectDescription: `Fullstack Calendar App for making and tracking events. You can use
  user as username and password as password for credentials.`,
    projectTech: `React, CssFlex, NodeJs/Express, Postgresql`,
    projectAppLink: "https://sweetcalendar.herokuapp.com/",
    projectGithubLink: "https://github.com/NikolaGolubovic/fullstack-calendar",
    altDesktop: "Desktop presentation of Application",
    altPhone: "Phone Presentation of Application",
    desktopImg: calendarDesktop,
    phoneImg: calendarPhone,
  },
  {
    projectTitle: `Quiz App`,
    projectDescription: `Trivia app which use Open Trivia Database as main source. Game can be made from different categories. You can use user as username and password as password for credentials.`,
    projectTech: `React, Express, Open Trivia Database, CSS grid`,
    projectAppLink: "https://quizitj.herokuapp.com/quiz",
    projectGithubLink:
      "https://github.com/NikolaGolubovic/full-quiz-server-and-build",
    altDesktop: "Desktop presentation of Application",
    altPhone: "Phone Presentation of Application",
    desktopImg: quizDesktop,
    phoneImg: quizPhone,
  },
  {
    projectTitle: `Survey App`,
    projectDescription: `Survey app with options to create surveys and vote. You can use user as username and password as password for credentials.`,
    projectTech: `React Router, Express, Postgresql, SurveyJs, ChartJs`,
    projectAppLink: "https://veryhappysurvey.herokuapp.com/",
    projectGithubLink: "https://github.com/NikolaGolubovic/happysurvey",
    altDesktop: "Desktop presentation of Application",
    altPhone: "Phone Presentation of Application",
    desktopImg: surveyDesktop,
    phoneImg: surveyPhone,
  },
];

export const smallerProjectsArr = [
  {
    src: mastermind,
    description: "Try to find correct combination, for Serbian players",
    link: "https://github.com/NikolaGolubovic/mastermind",
  },
  {
    src: movieSuggestion,
    description:
      "Search between various movies recommended by Reddit MovieSuggestions ",
    link: "https://github.com/NikolaGolubovic/movies-suggestion",
  },
  {
    src: salvador,
    description: "Small quick made galeries",
    link: "https://github.com/NikolaGolubovic/salvador",
  },
  {
    src: fastQuiz,
    description: "Quiz with few questions",
    link: "https://github.com/NikolaGolubovic/fast-quiz",
  },
  {
    src: restaurant,
    description:
      "Restaurant simulator, with orders and trackers - focused on OOP",
    link: "https://github.com/NikolaGolubovic/restaurant-sim",
  },
];

export const mySummary = {
  title: "About",
  name: "My name is Nikola Golubovic",
  text: `<span class="emp-bio">I</span> am <span class="emp-bio"> web developer</span> from
  <span class="emp-bio"> Serbia</span> who makes
  <span class="emp-bio"> fullstack</span> sites. My primary tools
  are <span class="tech-mark"> Javascript</span> as a programming language,
  <span class="tech-mark"> React</span> as a frontend framework
  and
  <span class="tech-mark"> NodeJs/Express</span> as a tool for backend. But generally
  <span class="emp-bio"> I am not afraid</span> of any technology.`,
};

export const billboardNotes = {
  mystery:
    "You can find code for highlysubliminal function at my github portfolio",
  msgToUser: `You want to conquer world but you need a sidekick who will implement
  your ideas into projects?`,
  email: "nikolagolubovic985@gmail.com",
  phone: "+381 (63) 72 63 54 6",
};
