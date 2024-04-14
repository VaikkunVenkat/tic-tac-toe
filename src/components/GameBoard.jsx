const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ];

export default function GameBoard({ gameState, onCellClick }) {  
  let gameBoard = initialGameBoard;
  for (const turn of gameState) {
    gameBoard[turn.rowIdx][turn.colIdx] = turn.player;
  }
  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIdx) => (
        <li key={rowIdx}>
          <ol>
            {row.map((playerSymbol, colIdx) => (
              <li key={colIdx}>
                <button disabled={!!playerSymbol} onClick={() => onCellClick(rowIdx, colIdx)}>{playerSymbol}</button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
