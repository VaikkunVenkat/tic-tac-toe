const winningCombinations = [
  [
    [0, 0],
    [0, 1],
    [0, 2],
  ],
  [
    [1, 0],
    [1, 1],
    [1, 2],
  ],
  [
    [2, 0],
    [2, 1],
    [2, 2],
  ],
  [
    [0, 0],
    [1, 0],
    [2, 0],
  ],
  [
    [0, 1],
    [1, 1],
    [2, 1],
  ],
  [
    [0, 2],
    [1, 2],
    [2, 2],
  ],
  [
    [0, 0],
    [1, 1],
    [2, 2],
  ],
  [
    [0, 2],
    [1, 1],
    [2, 0],
  ],
];

const filterTurnsOnPlayer = (board, symbol) => {
  const filteredPlayers = board.filter(({ player }) => player === symbol);
  return filteredPlayers.map(({ rowIdx, colIdx }) => [rowIdx, colIdx]);
};

const checkCombination = (playerTurns, combination) =>
  combination.every(
    ([rowComb, colComb]) =>
      playerTurns.findIndex(
        ([row, col]) => row === rowComb && col === colComb
      ) > -1
  );


const checkForWinner = (gameState) => {
  const playerXTurns = filterTurnsOnPlayer(gameState, "X");
  const playerOTurns = filterTurnsOnPlayer(gameState, "O");
  let winnerSymbol = null;
  for (const combination of winningCombinations) {
    const possibleXWinner = checkCombination(playerXTurns, combination);
    const possibleOWinner = checkCombination(playerOTurns, combination);

    if (possibleXWinner) {
      winnerSymbol = "X";
      break;
    }

    if (possibleOWinner) {
      winnerSymbol = "O";
      break;
    }
  }
  return winnerSymbol;
};

export default checkForWinner;
