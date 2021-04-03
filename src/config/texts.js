import mastermind from "../images/mastermind.jpg";
import movieSuggestion from "../images/movies-suggestion.jpg";
import salvador from "../images/salvador.jpg";
import fastQuiz from "../images/fast-quiz.jpg";
import restaurant from "../images/restaurant.jpg";

import cardOne from "../images/card-1.svg";
import cardTwo from "../images/card-2.svg";
import cardThree from "../images/logo.svg";

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
