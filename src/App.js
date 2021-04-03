import React, { useState, useEffect, useRef } from "react";
import "./App.css";

import Preloader from "./components/Preloader";
import Navbar from "./components/Navbar";
import MainContainer from "./components/MainContainer";
import Scroll from "react-scroll";

import { checkLoad } from "./config/effects";

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
    const { offsetTop: offsetAbout } = aboutRef.current;
    const { offsetTop: offsetWork } = workRef.current;
    const { offsetTop: offsetContact } = contactRef.current;
    setAboutTop(offsetAbout);
    setWorkTop(offsetWork);
    setContactTop(offsetContact);
    if (
      aboutTop &&
      !cardsMoved &&
      window.screen.height - window.pageYOffset < aboutTop + 50
    ) {
      setCardsMoved(true);
      setOneTransition(oneTransition + " transit-top");
      setTwoTransition(twoTransition + " transit-top");
      setThreeTransition(threeTransition + " transit-top");
    }
    function handleScroll() {
      if (
        aboutTop &&
        !cardsMoved &&
        window.screen.height - window.pageYOffset > aboutTop + 200
      ) {
        setCardsMoved(true);
        setOneTransition(oneTransition + " transit-top");
        setTwoTransition(twoTransition + " transit-top");
        setThreeTransition(threeTransition + " transit-top");
      }
    }

    window.addEventListener("scroll", handleScroll);
    // https://stackoverflow.com/questions/53158796/get-scroll-position-with-reactjs
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [
    aboutRef,
    aboutTop,
    workTop,
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
      <footer>
        <p className="footer-text">Nikola Golubovic, Web Developer, Serbia</p>
      </footer>
    </div>
  );
}

export default App;
