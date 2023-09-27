function contadorMovimentos(cavaloX, cavaloY, peoes) {
  const movimentosCavalo = [
    [-2, -1],
    [-2, 1],
    [-1, -2],
    [-1, 2],
    [1, -2],
    [1, 2],
    [2, -1],
    [2, 1],
  ];

  function tabuleiro(x, y) {
    return x >= 1 && x <= 8 && y >= "a" && y <= "h";
  }

  const cavaloYNum = cavaloY.charCodeAt(0) - "a".charCodeAt(0) + 1;

  let contagemMovimentos = 0;

  for (const [dx, dy] of movimentosCavalo) {
    const moveX = cavaloX + dx;
    const moveYNum = cavaloYNum + dy;
    const moveY = String.fromCharCode("a".charCodeAt(0) + moveYNum - 1);

    if (tabuleiro(moveX, moveY)) {
      const captura = peoes.some(([px, py]) => px === moveX && py === moveY);

      if (!captura) {
        contagemMovimentos++;
      } else {
        cavaloCapturado = true;
      }
    }
  }

  if (cavaloCapturado) {
    contagemMovimentos--;
  }

  return contagemMovimentos;
}

/*
let numeroMovimentos = contadorMovimentos(cavaloX, cavaloY, peoes);

console.log(`Caso de Teste #1: ${numeroMovimentos} movimento (s).`);
*/

module.exports = { contadorMovimentos };
