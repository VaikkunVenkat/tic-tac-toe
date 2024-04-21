import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import { useState } from "react";
import Log from "./components/Log";
import checkForWinner from "./utils/calculateGameState";
import getCurrentPlayer from "./utils/getCurrentPlayer";
import GameOverOverlay from "./components/GameOverOverlay";

function App() {
  const [gameState, setGameState] = useState([]);
  
  const currentPlayerActive = getCurrentPlayer(gameState)
  const winnerSymbol = checkForWinner(gameState);
  const gameDrawn = gameState.length === 9 && winnerSymbol === null;

  const handleCellClick = (rowIdx, colIdx) => {
    setGameState((prevGameState) => [
      ...prevGameState,
      { player: currentPlayerActive, rowIdx, colIdx },
    ]);
  };

  const handleResetGame = () => {
    setGameState([]);
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
        {(!!winnerSymbol || gameDrawn) && (
          <GameOverOverlay winner={winnerSymbol} onResetGame={handleResetGame} />
        )}
        <GameBoard onCellClick={handleCellClick} gameState={gameState} />
      </div>
      <Log gameState={gameState} />
    </main>
  );
}

export default App;
