export default function Log({ gameState }) {
  return (
    <ol id="log">
      {gameState.reverse().map(({ player, rowIdx, colIdx }, logIdx) => (
        <li key={logIdx} className={`${logIdx === 0 && "highlighted"}`}>
          Player {player} selected {rowIdx},{colIdx}
        </li>
      ))}
    </ol>
  );
}
