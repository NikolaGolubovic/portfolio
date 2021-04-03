import React from "react";
import BilboardComponent from "./ContactBilboardComponent";
import FormComponent from "./ContactFormComponent";
import ButtonTop from "./ButtonTop";

function ContactComponent({ contactRef }) {
  return (
    <section className="contact-container" ref={contactRef}>
      <h1 className="title-about">Contact</h1>
      <div className="container-bilboard-form">
        <BilboardComponent />
        <FormComponent />
        <ButtonTop />
      </div>
    </section>
  );
}

export default ContactComponent;
