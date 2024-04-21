export default (gameState) => {
    let currentPlayerActive = "X";
    const lastTurn = gameState[gameState.length - 1];
    if (!!lastTurn) {
      currentPlayerActive = lastTurn.player === "X" ? "O" : "X";
    }
    return currentPlayerActive
}