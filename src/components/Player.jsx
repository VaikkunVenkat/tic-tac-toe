import { useState } from "react";

export default function Player({ initialName, symbol, playerActive, onApplyName }) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(initialName);

  const handleEdit = () => {
    if (isEditing) {
      onApplyName(playerName, symbol)
    }
    setIsEditing(prev => !prev);
  }

  return (
    <li className={playerActive === symbol ? 'active': ''}>
      <span className="player">
        {isEditing ? (
          <input
            id="player-input"
            type="text"
            required
            value={playerName}
            onChange={({ target: { value } }) => setPlayerName(value)}
            onKeyDown={({ key }) => {
              onApplyName(playerName, symbol);
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
      <button onClick={handleEdit}>
        {isEditing ? "Save" : "Edit"}
      </button>
    </li>
  );
}
