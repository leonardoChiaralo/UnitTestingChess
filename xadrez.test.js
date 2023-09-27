const { contadorMovimentos } = require("./xadrez");
const { expect, it } = require("@jest/globals");

it("calcula movimentos do cavalo", () => {
  const cavaloX = 4;
  const cavaloY = "c";
  const peoes = [
    [2, "b"],
    [2, "c"],
    [3, "d"],
    [4, "f"],
    [5, "d"],
    [7, "a"],
    [7, "d"],
    [7, "g"],
  ];

  let numeroMovimentos = contadorMovimentos(cavaloX, cavaloY, peoes);

  expect(numeroMovimentos).toBe(6);
});
