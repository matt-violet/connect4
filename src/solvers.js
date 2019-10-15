export function checkForWinner(grid, currentCell, movePlacement, redIsNext) {
  let horizontalStreak = 1;
  let verticalStreak = 1;
  let minorDiagonalStreak = 1;
  let majorDiagonalStreak = 1;

  // check to the right
  for (let i = 1; i < 4; i++) {
    if (grid[movePlacement[0] + i]) {
      if (currentCell.color === grid[movePlacement[0] + i][movePlacement[1]].color) {
        horizontalStreak++;
      }
    } 
    // check to the left
    if (grid[movePlacement[0] - i]) {
      if (currentCell.color === grid[movePlacement[0] - i][movePlacement[1]].color) {
        horizontalStreak++;
      }
    }
    // check down
    if (grid[movePlacement[1] - i]) {
      if (currentCell.color === grid[movePlacement[0]][movePlacement[1] - 1].color) {
        verticalStreak++;
      }
    }
    // check minor diagonal
    if (grid[movePlacement[1] - i] && grid[movePlacement[1] - i][movePlacement[1] + i]) {
      if (currentCell.color === grid[movePlacement[0] + 1][movePlacement[1] - 1].color) {
        minorDiagonalStreak++;
      }
    }
    // check major diagonal
    if (grid[movePlacement[1] - i] && grid[movePlacement[1] - i][movePlacement[1] - i]) {
      if (currentCell.color === grid[movePlacement[0] - 1][movePlacement[1] - 1].color) {
        majorDiagonalStreak++;
      }
    }
  }
  if (horizontalStreak === 4 || verticalStreak === 4 || minorDiagonalStreak === 4 || majorDiagonalStreak === 4) {
    let message = redIsNext ? 'Yellow wins!!!' : 'Red wins!!!';
    alert(message);
  }
}