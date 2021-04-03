import React from "react";

import { makeCards } from "../config/texts";

function AboutCardsComponent({
  oneTransition,
  twoTransition,
  threeTransition,
}) {
  const cards = makeCards(oneTransition, twoTransition, threeTransition);
  return (
    <div className="about-cards">
      <h1 className="title-about">Skills</h1>
      <div className="info-cards">
        {cards.map((card, index) => {
          return (
            <div className={card.transition} key={index}>
              <div className="svg-image-container">
                <img
                  src={card.imgSrc}
                  alt="computer svg"
                  className={
                    index === 1 ? "svg-image card-two-fix" : "svg-image"
                  }
                />
              </div>
              <div className="card-text-container">
                <h4 className="card-title">{card.title}</h4>
                <p>{card.text}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default AboutCardsComponent;
