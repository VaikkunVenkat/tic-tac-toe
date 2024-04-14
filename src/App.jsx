import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import { useState } from "react";
import Log from "./components/Log";

const winningCombinations = [
  [(0, 0), (0, 1), (0, 2)],
  [(1, 0), (1, 1), (1, 2)],
  [(2, 0), (2, 1), (2, 2)],
  [(0, 0), (1, 0), (2, 0)],
  [(0, 1), (1, 1), (2, 1)],
  [(0, 2), (1, 2), (2, 2)],
  [(0, 0), (1, 1), (2, 2)],
  [(0, 2), (1, 1), (2, 0)]
]

function App() {
  const [gameState, setGameState] = useState([]);

  let currentPlayerActive = "X";
  const lastTurn = gameState[gameState.length - 1]
  if (!!lastTurn) {
    currentPlayerActive = lastTurn.player === "X" ? "O" : "X"
  }

  const handleCellClick = (rowIdx, colIdx) => {
    setGameState((prevGameState) => [
      ...prevGameState,
      { player: currentPlayerActive, rowIdx, colIdx },
    ]);
  };

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialName="Player 1"
            symbol="X"
            playerActive={currentPlayerActive}
          />
          <Player
            initialName="Player 2"
            symbol="O"
            playerActive={currentPlayerActive}
          />
        </ol>
        <GameBoard onCellClick={handleCellClick} gameState={gameState} />
      </div>
      <Log gameState={gameState} />
    </main>
  );
}

export default App;
