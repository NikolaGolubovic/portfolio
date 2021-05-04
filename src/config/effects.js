export function checkLoad(setPreloaderClass) {
  window.addEventListener("load", function () {
    setTimeout(() => {
      setPreloaderClass("preloader loaded");
    }, 500);
  });
}

export function mainPageScrol(
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
) {
  const { offsetTop: offsetAbout } = aboutRef.current;
  const { offsetTop: offsetWork } = workRef.current;
  const { offsetTop: offsetContact } = contactRef.current;
  setAboutTop(offsetAbout);
  setWorkTop(offsetWork);
  setContactTop(offsetContact);
  if (aboutTop && !cardsMoved && window.pageYOffset > aboutTop + 20) {
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
}

export function updateCards(setCards, cards, cardsArr) {
  setCards(
    cards.map((card, index) => {
      return { ...card, ...cardsArr[index] };
    })
  );
}

export function magnetBtnStartPos(
  refButton,
  setBaseLeftPos,
  setBaseTopPos,
  setTransX,
  setTransY
) {
  setBaseLeftPos(refButton.current.offsetLeft);
  setBaseTopPos(refButton.current.offsetTop);
  setTransX(refButton.current.offsetLeft);
  setTransY(refButton.current.offsetTop);
}
