export default function Log({ gameState, playerNames }) {
  return (
    <ol id="log">
      {gameState.reverse().map(({ player, rowIdx, colIdx }, logIdx) => (
        <li key={logIdx} className={`${logIdx === 0 && "highlighted"}`}>
          {playerNames[player]} selected {rowIdx},{colIdx}
        </li>
      ))}
    </ol>
  );
}
