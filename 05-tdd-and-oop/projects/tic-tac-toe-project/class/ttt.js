const Screen = require("./screen");
const Cursor = require("./cursor");

class TTT {

  constructor() {

    this.playerTurn = "O";

    this.grid = [[' ', ' ', ' '],
    [' ', ' ', ' '],
    [' ', ' ', ' ']];

    this.cursor = new Cursor(3, 3);

    // Initialize a 3x3 tic-tac-toe grid
    Screen.initialize(3, 3);
    Screen.setGridlines(true);

    // Replace this with real commands
    Screen.addCommand('t', 'test command (remove)', TTT.testCommand);

    Screen.render();
  }

  /**
   * It checks if the game is over, and if so, returns the winner
   * 
   * Args:
   *   grid: a 2D array of strings representing the game board.
   * 
   * Returns:
   *   the winner of the game.
   */
  static checkWin(grid) {


    /**
     * We first create a copy of the input matrix, then we transpose the matrix by swapping the rows
     * and columns, then we reverse each row
     * 
     * Used for ease of computing vertical match.
     * 
     * Returns:
     *   A new matrix with the rows reversed.
     */
    const rotate = input => {
      const matrix = JSON.parse(JSON.stringify(input));
      for (let row = 0; row < matrix.length; row++) {
        for (let column = 0; column < row; column++) {
          let temp = matrix[row][column]
          matrix[row][column] = matrix[column][row]
          matrix[column][row] = temp
        }
      }
      return matrix.map(row => row.reverse());
    }

    // blank grid
    if (grid.every(row => row.every(el => el === " ") === true)) return false;

    // horizontal match
    const match = row => row.every(col => col === row[0] && row[0] !== " ");
    const horizontalMatch = grid.find(match);
    if (Array.isArray(horizontalMatch) && horizontalMatch.length > 0) return horizontalMatch[0];

    // vertical match
    // note the grid rotate so we can use the same calculation as horizontal
    const rotatedGrid = rotate(grid);
    const verticalMatch = rotatedGrid.find(match);
    if (Array.isArray(verticalMatch) && verticalMatch.length > 0) return verticalMatch[0];

    // diagonal match
    // check both left and right diagonal
    const leftDiagonalMatch = () =>
      (grid[0][0] === grid[1][1] && grid[0][0] === grid[2][2])
        ? grid[0][0]
        : false;
    const rightDiagonalMatch = () =>
      (grid[0][2] === grid[1][1] && grid[0][2] === grid[2][0])
        ? grid[0][2]
        : false;
    const left = leftDiagonalMatch();
    if (left !== false) return left;
    const right = rightDiagonalMatch();
    if (right !== false) return right;

    // Tie
    if (grid.every(row => row.every(el => el !== " ") === true)) return 'T';

    // No one has won, yet
    return false;

    // Return 'X' if player X wins
    // Return 'O' if player O wins
    // Return 'T' if the game is a tie
    // Return false if the game has not ended

  }

  static endGame(winner) {
    if (winner === 'O' || winner === 'X') {
      Screen.setMessage(`Player ${winner} wins!`);
    } else if (winner === 'T') {
      Screen.setMessage(`Tie game!`);
    } else {
      Screen.setMessage(`Game Over`);
    }
    Screen.render();
    Screen.quit();
  }

}

module.exports = TTT;
