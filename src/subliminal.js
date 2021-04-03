const highlySubliminal = () => {
  const cypherOne = "6f3ltag";
  const cypherTwo = "6gc20v3";
  const cypherThree = "7vuvrc4";
  const cypherFour = "804kqcp";
  const cypherFive = "oqq4";
  const decoded = (
    String(parseInt(cypherOne, 32)) +
    String(parseInt(cypherTwo, 32)) +
    String(parseInt(cypherThree, 32)) +
    String(parseInt(cypherFour, 32)) +
    String(parseInt(cypherFive, 32))
  )
    .match(/.{1,2}/g)
    .map((elem) => Number(elem) + 20);
  const message = String.fromCharCode(...decoded);
  return message;
};
highlySubliminal("Hello");
