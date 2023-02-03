const readline = require('readline');

/********************************* CONSTANTS *********************************/
const VALID_MOVES = {
  r: {
    name: 'Rock',
    winsAgainst: 's'
  },
  p: {
    name: 'Paper',
    winsAgainst: 'r'
  },
  s: {
    name: 'Scissors',
    winsAgainst: 'p'
  }
};

/********************************* GAME DATA *********************************/
let wins = 0;
let losses = 0;
let ties = 0;

/* DO NOT CHANGE THE CODE ABOVE */

/***************************** HELPER FUNCTIONS ******************************/
/**
 * It prints out a list of valid commands
 */
function printHelp() {
  console.log("  Type 'r' for Rock");
  console.log("  Type 'p' for Paper");
  console.log("  Type 's' for Scissors");
  console.log("  Type 'q' to quit");
  console.log("  Type 'h' for a list of valid commands\n");
}

/**
 * If the first move wins against the second move, return 1. If the second move wins against the first
 * move, return -1. Otherwise, return 0
 * 
 * Args:
 *   move1: The first move
 *   move2: The move that the computer has chosen.
 * 
 * Returns:
 *   The winner of the game.
 */
function getWinner(move1, move2) {
  if (move2 === VALID_MOVES[move1].winsAgainst) {
    return 1;
  }

  if (move1 === VALID_MOVES[move2].winsAgainst) {
    return -1;
  }

  return 0;
}

/**
 * It generates a random number between 0 and 2, then uses that number to get a key from the
 * VALID_MOVES object
 * 
 * Returns:
 *   A random number between 0 and 2.
 */
function getCPUMove() {
  const move = Math.floor(Math.random() * 3);
  const keys = Object.keys(VALID_MOVES).sort((a, b) => a - b);

  return keys[move]
}

/**
 * It takes in a command and a computer move, prints out the result of the game, and returns the result
 * of the game
 * 
 * Args:
 *   cmd: The command line argument that the user entered.
 *   cpu: The computer's move.
 */
function processMove(cmd, cpu) {
  console.log(`You pick ${cmd}, computer picks ${cpu}.`);
  const result = getWinner(cmd, cpu);
  if (result === 1) {
    console.log("You win!\n");
  }
  if (result === -1) {
    console.log("You lose...\n");
  }
  if (result === 0) {
    console.log("You tie.\n");
  }
}

/******************************* MAIN FUNCTION *******************************/
function promptInput(rl) {
  console.log(`${wins} wins - ${losses} losses - ${ties} ties`);
  rl.question('> ', (cmd) => {
    cmd = cmd.toLowerCase();

    if (cmd === 'h') {
      console.log("\nHelp:\n");
      console.log("  Type 'r' for Rock");
      console.log("  Type 'p' for Paper");
      console.log("  Type 's' for Scissors");
      console.log("  Type 'q' to quit");
      console.log("  Type 'h' for a list of valid commands\n");
    } else if (cmd === 'q') {
      rl.close();
      return;
    } else if (VALID_MOVES[cmd]) {
      const validMoveKeys = Object.keys(VALID_MOVES);
      const randomIndex = Math.floor(Math.random() * validMoveKeys.length);
      const cpu = validMoveKeys[randomIndex];

      console.log(`You pick ${cmd}, computer picks ${cpu}.`);

      if (cmd === cpu) { // tie
        console.log("You tie.\n");
        ties++;
      }
      else if (VALID_MOVES[cmd].winsAgainst === cpu) { // win
        console.log("You win!\n");
        wins++;
      } else { // loss
        console.log("You lose...\n");
        losses++;
      }
    } else {
      console.log("\nInvalid command.\n");
      console.log("  Type 'r' for Rock");
      console.log("  Type 'p' for Paper");
      console.log("  Type 's' for Scissors");
      console.log("  Type 'q' to quit");
      console.log("  Type 'h' for a list of valid commands\n");
    }

    promptInput(rl);
  });
}

/****************************** INITIALIZE GAME ******************************/
function initializeGame() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  console.log("Welcome to Rock/Paper/Scissors\n");
  console.log("  Type 'r' for Rock");
  console.log("  Type 'p' for Paper");
  console.log("  Type 's' for Scissors");
  console.log("  Type 'q' to quit");
  console.log("  Type 'h' for a list of valid commands\n");

  promptInput(rl);
}

// start the game if running this file directly, `node game.js`
// do not start the game if running test specs
if (typeof require !== 'undefined' && require.main === module) {
  initializeGame();
}

/**************************************************************************/
/* DO NOT CHANGE THE CODE BELOW */
module.exports = {
  printHelp,
  getWinner,
  getCPUMove,
  processMove,
  promptInput
};