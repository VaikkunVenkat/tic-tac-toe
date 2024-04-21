const GameOverOverlay = ({ winner, onResetGame }) => {
  const gameOverText = winner === null ? "Game Drawn!" : `${winner} won!`;
  return (
    <div id="game-over">
      <h2>Game Over!</h2>
      <p>{gameOverText}</p>
      <button onClick={onResetGame}>Start again?</button>
    </div>
  );
};

export default GameOverOverlay;
