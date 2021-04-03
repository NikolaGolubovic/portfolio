export function updateCards(setCards, cards, cardsArr) {
  setCards(
    cards.map((card, index) => {
      return { ...card, ...cardsArr[index] };
    })
  );
}

export function checkLoad(setPreloaderClass) {
  window.addEventListener("load", function () {
    setTimeout(() => {
      setPreloaderClass("preloader loaded");
    }, 500);
  });
}
