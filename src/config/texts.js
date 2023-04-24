import memeGenerator from "../images/meme-generator.jpg";
import mastermind from "../images/mastermind.jpg";
import movieSuggestion from "../images/movies-suggestion-compressed.jpg";
import tips from "../images/tips.jpg";
import slagalica from "../images/slagalica.jpg";

import cardOne from "../images/card-1.svg";
import cardTwo from "../images/card-2.svg";
import cardThree from "../images/logo.svg";

import calendarDesktop from "../images/calendar-compresed.jpg";
import calendarPhone from "../images/calendar-phone.jpg";
import quizDesktop from "../images/quiz-desktop.jpg";
import surveyDesktop from "../images/survey-desktop.jpg";
import surveyPhone from "../images/survey-phone.jpg";
import itBookStoreDesktop from "../images/it-book-store-desktop.jpg";
import itBookStorePhone from "../images/it-book-store-mobile.jpg";
import ecommerce from "../images/e-commerc.jpg";
import invoices from "../images/invoices-min.jpg";
import pomodoro from "../images/pomodoro-min.jpg";
import rps from "../images/rps.jpg";
import crowdfund from "../images/crowdfund-min.jpg";
import githubFinder from "../images/github-min.jpg";
import bookmark from "../images/bookmark-min.jpg";

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
      text: `I am not a web designer, but I can assist with visualizing ideas for a personal or business website.`,
    },
    {
      transition: twoTransition,
      imgSrc: cardTwo,
      title: "FrontEnd",
      text: `My approach to creating visually and functionally appealing websites is by utilizing the full potential of JavaScript, React, and modern CSS.`,
    },
    {
      transition: threeTransition,
      imgSrc: cardThree,
      title: "Server-Side",
      text: `I utilize Node.js (have experience with Express and NestJs), relational databases and ORMs to control the backend processes that occur behind the customer's view.`,
    },
  ];
  return cards;
}

export const projectsArr = [
  {
    projectTitle: `Calendar App`,
    projectDescription: `This is a full-stack calendar app designed for creating and tracking events. For your credentials, you can use 'user' as the username and 'password' as the password.`,
    projectTech: `React, CssFlex, NodeJs/Express, Postgresql`,
    projectAppLink: "https://necrkveni-kalendar.onrender.com/",
    projectGithubLink: "https://github.com/NikolaGolubovic/it-books-storage",
    altDesktop: "Desktop presentation of Application",
    altPhone: "Phone Presentation of Application",
    desktopImg: calendarDesktop,
    phoneImg: calendarPhone,
  },
  {
    projectTitle: `It Book Store`,
    projectDescription: `Buy books with various programming languages and frameworks. For your credentials, you can use 'user' as the username and 'password' as the password.`,
    projectTech: `React, Firebase`,
    projectAppLink: "https://it-book-store.vercel.app/",
    projectGithubLink: "https://github.com/NikolaGolubovic/it-books-storage",
    altDesktop: "Desktop presentation of Application",
    altPhone: "Phone Presentation of Application",
    desktopImg: itBookStoreDesktop,
    phoneImg: itBookStorePhone,
  },
  {
    projectTitle: `Survey App`,
    projectDescription: `Fullstack survey app with options to create surveys. For your credentials, you can use 'user' as the username and 'password' as the password.`,
    projectTech: `React Router, Express, Postgresql, SurveyJs, ChartJs`,
    projectAppLink: "https://happy-survey.onrender.com/",
    projectGithubLink: "https://github.com/NikolaGolubovic/happysurvey",
    altDesktop: "Desktop presentation of Application",
    altPhone: "Phone Presentation of Application",
    desktopImg: surveyDesktop,
    phoneImg: surveyPhone,
  },
];

export const smallerProjectsArr = [
  {
    src: slagalica,
    description:
      "Improve and verify your general knowledge with thousand questions made by quizzes experts.",
    link: "https://quiz-improver.vercel.app/",
  },
  {
    src: ecommerce,
    description: "Front-End for e-commerce app",
    link: "https://little-e-commerce-ab0r1bilf-nikolagolubovic985.vercel.app/",
  },
  {
    src: invoices,
    description:
      "Front-end for invoices app, top challange from frontend mentor",
    link: "https://invoices-app-sooty.vercel.app/",
  },
  {
    src: pomodoro,
    description: "Pomodoro",
    link: "https://pomodoro-timer-lovat.vercel.app/",
  },
  {
    src: quizDesktop,
    description:
      "Trivia app which use Open Trivia Database as main source. Game can be made from different categories.",
    link: "https://trivia-ko-voli.onrender.com/",
  },
  {
    src: githubFinder,
    description: "Simple github finder app",
    link: "https://github-finder-hazel.vercel.app/",
  },
  {
    src: crowdfund,
    description: "Front-End Crowdfund",
    link: "https://crowdfund-page-rl4swwjty-nikolagolubovic985.vercel.app/",
  },
  {
    src: bookmark,
    description: "Front-End Bookmark Page",
    link: "https://bookmark-app-front.vercel.app/",
  },
  {
    src: memeGenerator,
    description: "Make your MEME with favorite template",
    link: "https://github.com/NikolaGolubovic/meme-generator",
  },
  {
    src: mastermind,
    description: "Try to find correct combination; for Serbian players",
    link: "https://github.com/NikolaGolubovic/mastermind",
  },
  {
    src: movieSuggestion,
    description:
      "Search between various movies recommended by Reddit MovieSuggestions ",
    link: "https://github.com/NikolaGolubovic/movies-suggestion",
  },
  {
    src: rps,
    description:
      "Rock Paper Scissors. Its simple, maybe stupid, but looks nice :)",
    link: "https://rps-avzwd0nwt-nikolagolubovic985.vercel.app/",
  },
  {
    src: tips,
    description:
      "Interesting web dev resources from twitter, reddit, various blogs...",
    link: "https://github.com/NikolaGolubovic/restaurant-sim",
  },
];

export const mySummary = {
  title: "About",
  name: "My name is Nikola Golubovic",
  text: `<span class="emp-bio">I</span> am <span class="emp-bio"> someone </span> who makes sites. 
  So far, I have more experience with <span class="emp-bio">frontend technologies</span>, but I am also familiar with <span class="emp-bio">backend development</span>.
  My primary tools are <span class="tech-mark"> Javascript</span> as a programming language,
  <span class="tech-mark"> React</span> as frontend framework and
  <span class="tech-mark"> NodeJs</span> as a tool for backend. But generally
  <span class="emp-bio"> I am not afraid</span> of any technology, as I believe that the core principles behind all technologies remain the same.`,
};

export const billboardNotes = {
  mystery:
    "You can find code for highlysubliminal function at my github portfolio",
  msgToUser: `Do you have grand ambitions of conquering the world, but need a reliable sidekick to turn your ideas into successful projects?`,
  email: "nikolagolubovic985@gmail.com",
  phone: "+381 (63) 72 63 54 6",
};
