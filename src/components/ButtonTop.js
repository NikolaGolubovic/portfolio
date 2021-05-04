import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import Scroll from "react-scroll";

function ButtonTop() {
  const scroll = Scroll.animateScroll;
  return (
    <button
      className="btn-icon"
      onClick={() => scroll.scrollToTop()}
      aria-label="Back To Top"
    >
      <FontAwesomeIcon icon={faChevronUp} className="icon" />
    </button>
  );
}

export default ButtonTop;
