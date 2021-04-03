import React from "react";

import myCodeImage from "../images/my-code.png";

function BilboardComponent() {
  return (
    <div className="contact-bilboard">
      <img
        src={myCodeImage}
        alt="My Code"
        mystery="You can find code for highlysubliminal function at my github portfolio"
      />
      <p>
        You want to conquer world but you need a sidekick who will implement
        your ideas into projects?
      </p>
      <h4>Contact me</h4>
      <p className="direct-contact">nikolagolubovic985@gmail.com</p>
      <p className="direct-contact">+381 (63) 72 63 54 6</p>
    </div>
  );
}

export default BilboardComponent;
