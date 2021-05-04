import React from "react";

import myCodeImage from "../images/my-code.jpg";
import { billboardNotes } from "../config/texts";

function BilboardComponent() {
  return (
    <div className="contact-bilboard">
      <img src={myCodeImage} alt="My Code" mystery={billboardNotes.mystery} />
      <p>{billboardNotes.msgToUser}</p>
      <p className="contact-me">Contact me</p>
      <p className="direct-contact">{billboardNotes.email}</p>
      <p className="direct-contact">{billboardNotes.phone}</p>
    </div>
  );
}

export default BilboardComponent;
