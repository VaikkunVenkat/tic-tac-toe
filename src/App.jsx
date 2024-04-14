import { createPortal } from "react-dom";
import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import { useEffect, useState } from "react";
import Log from "./components/Log";
import checkForWinner from "./utils/calculateGameState";

function App() {
  const [gameState, setGameState] = useState([]);
  const [winner, setWinner] = useState(null);

  let currentPlayerActive = "X";
  const lastTurn = gameState[gameState.length - 1];
  if (!!lastTurn) {
    currentPlayerActive = lastTurn.player === "X" ? "O" : "X";
  }

  const handleCellClick = (rowIdx, colIdx) => {
    setGameState((prevGameState) => [
      ...prevGameState,
      { player: currentPlayerActive, rowIdx, colIdx },
    ]);
  };

  const handleResetGame = () => {
    setWinner(null);
    setGameState([]);
  };

  useEffect(() => {
    const winningPlayer = checkForWinner(gameState);
    if (winningPlayer !== null) {
      setWinner(winningPlayer);
    }
    if (gameState.length === 9) {
      setWinner("Draw");
    }
  }, [gameState]);

  return (
    <main>
      {winner !== null &&
        createPortal(
          <div id="game-over">
            <h2>Game Over!</h2>
            <p>{winner === "Draw" ? "Game Drawn!" : `${winner} won!`}</p>
            <button onClick={handleResetGame}>Start again?</button>
          </div>,
          document.body
        )}
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
