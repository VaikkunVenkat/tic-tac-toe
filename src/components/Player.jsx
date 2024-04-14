import { useState } from "react";

export default function Player({ initialName, symbol, active }) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(initialName);

  return (
    <li className={active ? 'active': ''}>
      <span className="player">
        {isEditing ? (
          <input
            id="player-input"
            type="text"
            required
            value={playerName}
            onChange={({ target: { value } }) => setPlayerName(value)}
            onKeyDown={({ key }) => {
                if (key === 'Enter') {
                    setIsEditing(false)
                }
            }}
          />
        ) : (
          <span className="player-name">{playerName}</span>
        )}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={() => setIsEditing((prev) => !prev)}>
        {isEditing ? "Save" : "Edit"}
      </button>
    </li>
  );
}
