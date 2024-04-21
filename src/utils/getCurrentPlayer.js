import { PLAYER_O_SYMBOL, PLAYER_X_SYMBOL } from "../constants";

export default (gameState) => {
    let currentPlayerActive = PLAYER_X_SYMBOL;
    const lastTurn = gameState[gameState.length - 1];
    if (!!lastTurn) {
      currentPlayerActive = lastTurn.player === PLAYER_X_SYMBOL ? PLAYER_O_SYMBOL : PLAYER_X_SYMBOL;
    }
    return currentPlayerActive
}