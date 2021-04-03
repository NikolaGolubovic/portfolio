import React from "react";
import { makeNavLinks } from "../config/texts";

function Navbar({ scroll, aboutTop, workTop, contactTop }) {
  const arrParams = [aboutTop, workTop, contactTop];
  let arrLinks = makeNavLinks(aboutTop, workTop, contactTop);
  return (
    <nav>
      {arrLinks.map((elem, index) => {
        return (
          <a
            className={elem.className}
            href={elem.href}
            onClick={() => scroll.scrollTo(arrParams[index])}
            key={elem.title}
          >
            {elem.title}
          </a>
        );
      })}
    </nav>
  );
}

export default Navbar;
