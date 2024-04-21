import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import { useState } from "react";
import Log from "./components/Log";
import checkForWinner from "./utils/calculateGameState";
import getCurrentPlayer from "./utils/getCurrentPlayer";
import GameOverOverlay from "./components/GameOverOverlay";
import { PLAYER_X_INITIAL_NAME, PLAYER_O_INITIAL_NAME, PLAYER_X_SYMBOL, PLAYER_O_SYMBOL } from "./constants";

function App() {
  const [gameState, setGameState] = useState([]);
  const [playerNames, setPlayerNames] = useState({
    [PLAYER_X_SYMBOL]: PLAYER_X_INITIAL_NAME,
    [PLAYER_O_SYMBOL]: PLAYER_O_INITIAL_NAME
  });

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

  const handleApplyName = (playerName, symbol) => {
    setPlayerNames(prevPlayerNames => ({
      ...prevPlayerNames,
      [symbol]: playerName
    }));
  } 

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialName={PLAYER_X_INITIAL_NAME}
            symbol={PLAYER_X_SYMBOL}
            playerActive={currentPlayerActive}
            onApplyName={handleApplyName}
          />
          <Player
            initialName={PLAYER_O_INITIAL_NAME}
            symbol={PLAYER_O_SYMBOL}
            playerActive={currentPlayerActive}
            onApplyName={handleApplyName}
          />
        </ol>
        {(!!winnerSymbol || gameDrawn) && (
          <GameOverOverlay winner={playerNames[winnerSymbol]} onResetGame={handleResetGame} />
        )}
        <GameBoard onCellClick={handleCellClick} gameState={gameState} />
      </div>
      <Log gameState={gameState} playerNames={playerNames} />
    </main>
  );
}

export default App;
