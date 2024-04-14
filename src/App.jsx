import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import { useState } from "react";
import Log from "./components/Log";

function App() {
  const [playerActive, setPlayerActive] = useState("X");
  const [gameState, setGameState] = useState([]);

  const handleCellClick = (rowIdx, colIdx) => {
    setGameState((prevGameState) => [
      ...prevGameState,
      { player: playerActive, rowIdx, colIdx },
    ]);
    setPlayerActive((currentPlayer) => (currentPlayer === "X" ? "O" : "X"));
  };

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialName="Player 1"
            symbol="X"
            active={playerActive === "X"}
          />
          <Player
            initialName="Player 2"
            symbol="O"
            active={playerActive === "O"}
          />
        </ol>
        <GameBoard onCellClick={handleCellClick} gameState={gameState} />
      </div>
      <Log gameState={gameState} />
    </main>
  );
}

export default App;
