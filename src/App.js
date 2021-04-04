import React, { useState, useEffect, useRef } from "react";
import "./App.css";

import Preloader from "./components/Preloader";
import Navbar from "./components/Navbar";
import MainContainer from "./components/MainContainer";
import Scroll from "react-scroll";

import { checkLoad, mainPageScrol } from "./config/effects";
import Footer from "./components/Footer";

function App() {
  const scroll = Scroll.animateScroll;
  const [preloaderClass, setPreloaderClass] = useState("preloader");
  const [oneTransition, setOneTransition] = useState("card-1 one-transition");
  const [twoTransition, setTwoTransition] = useState("card-2 two-transition");
  const [threeTransition, setThreeTransition] = useState(
    "card-3 three-transition"
  );
  const [aboutTop, setAboutTop] = useState(0);
  const [workTop, setWorkTop] = useState(0);
  const [contactTop, setContactTop] = useState(0);
  const [cardsMoved, setCardsMoved] = useState(false);

  const aboutRef = useRef();
  const workRef = useRef();
  const contactRef = useRef();

  useEffect(() => {
    checkLoad(setPreloaderClass);
  }, []);

  useEffect(() => {
    mainPageScrol(
      aboutRef,
      workRef,
      contactRef,
      aboutTop,
      workTop,
      contactTop,
      setAboutTop,
      setWorkTop,
      setContactTop,
      cardsMoved,
      setCardsMoved,
      oneTransition,
      twoTransition,
      threeTransition,
      setOneTransition,
      setTwoTransition,
      setThreeTransition
    );
  }, [
    aboutRef,
    aboutTop,
    workTop,
    contactTop,
    cardsMoved,
    oneTransition,
    twoTransition,
    threeTransition,
  ]);
  return (
    <div>
      <Preloader preloaderClass={preloaderClass} />
      <Navbar
        scroll={scroll}
        aboutTop={aboutTop}
        workTop={workTop}
        contactTop={contactTop}
      />
      <MainContainer
        aboutRef={aboutRef}
        workRef={workRef}
        contactRef={contactRef}
        oneTransition={oneTransition}
        twoTransition={twoTransition}
        threeTransition={threeTransition}
        contactTop={contactTop}
      ></MainContainer>
      <Footer />
    </div>
  );
}

export default App;
