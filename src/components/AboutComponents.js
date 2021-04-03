import React from "react";
import AboutBioComponent from "./AboutBioComponent";
import AboutCardsComponent from "./AboutCardsComponent";

function AboutComponents({
  aboutRef,
  oneTransition,
  twoTransition,
  threeTransition,
  contactTop,
}) {
  return (
    <section className="about-container" ref={aboutRef} id="about">
      <AboutBioComponent contactTop={contactTop} />
      <AboutCardsComponent
        oneTransition={oneTransition}
        twoTransition={twoTransition}
        threeTransition={threeTransition}
      />
    </section>
  );
}

export default AboutComponents;
