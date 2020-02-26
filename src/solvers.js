export function checkForWinner(grid, currentCell, movePlacement, declareWinner) {
  let horizontalStreak = 1;
  let verticalStreak = 1;
  let minorDiagonalStreak = 1;
  let majorDiagonalStreak = 1;

  // check to the right
  for (let i = 1; i < 4; i++) {
    if (grid[movePlacement[0] + i]) {
      let cellToRight = grid[movePlacement[0] + i][movePlacement[1]];
      if (currentCell.color === cellToRight.color) {
        horizontalStreak++;
      }
    } 
    // check to the left
    if (grid[movePlacement[0] - i]) {
      let cellToLeft = grid[movePlacement[0] - i][movePlacement[1]];
      if (currentCell.color === cellToLeft.color) {
        horizontalStreak++;
      }
    }
    // check down
    if (grid[movePlacement[1] - i]) {
      let cellBelow = grid[movePlacement[0]][movePlacement[1] - 1];
      if (currentCell.color === cellBelow.color) {
        verticalStreak++;
      }
    }
    // check minor diagonal
    if (grid[movePlacement[1] - i] && grid[movePlacement[1] - i][movePlacement[1] + i]) {
      let cellToMinorDiagonal = grid[movePlacement[0] + 1][movePlacement[1] - 1];
      if (currentCell.color === cellToMinorDiagonal.color) {
        minorDiagonalStreak++;
      }
    }
    // check major diagonal
    if (grid[movePlacement[1] - i] && grid[movePlacement[1] - i][movePlacement[1] - i]) {
      let cellToMajorDiagonal = grid[movePlacement[0] - 1][movePlacement[1] - 1];
      if (currentCell.color === cellToMajorDiagonal.color) {
        majorDiagonalStreak++;
      }
    }
  }

  if (horizontalStreak === 4 || verticalStreak === 4 || minorDiagonalStreak === 4 || majorDiagonalStreak === 4) {
    declareWinner();
  }
}
