import React from "react";

import CoverImage from "./CoverImage";
import AboutComponents from "./AboutComponents";
import MyWork from "./MyWork";
import ContactComponent from "./ContactComponent";

function MainContainer({
  aboutRef,
  workRef,
  contactRef,
  oneTransition,
  twoTransition,
  threeTransition,
  contactTop,
}) {
  return (
    <div className="container">
      <CoverImage />
      <AboutComponents
        aboutRef={aboutRef}
        oneTransition={oneTransition}
        twoTransition={twoTransition}
        threeTransition={threeTransition}
        contactTop={contactTop}
      />
      <MyWork workRef={workRef} />
      <ContactComponent contactRef={contactRef} />
    </div>
  );
}

export default MainContainer;
