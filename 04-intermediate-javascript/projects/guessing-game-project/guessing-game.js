const readline = require("readline");

/* Creating a readline interface that takes input from the user and outputs to the console. */
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

/**
 * Return a random integer between min and max, inclusive.
 *
 * Args:
 *   min: The minimum number in the range.
 *   max: The maximum number in the range.
 *
 * Returns:
 *   A random number between the min and max values.
 */
const randomInRange = (min, max) => {
  return Math.floor(Math.random() * (Number(max) - Number(min)) + Number(min));
};

let secretNumber = null;
let numAttempts = null;

/**
 * If the guess is too high, print 'Too high.', if the guess is too low, print 'Too low.', otherwise
 * print 'Correct!' and return true.
 *
 * Args:
 *   guess: The number the user guessed.
 *
 * Returns:
 *   The return value of the function checkGuess.
 */
const checkGuess = (guess) => {
  if (guess > secretNumber) {
    console.log("Too high.");
    return false;
  }
  if (guess < secretNumber) {
    console.log("Too low.");
    return false;
  }
  console.log("Correct!");
  return true;
};

/**
 * It asks the user for a guess, checks if the guess is correct, and if it's not, it asks the user for
 * another guess
 *
 * Returns:
 *   the result of the checkGuess function.
 */
const askGuess = () => {
  /* It checks if the number of attempts is equal to 0, if it is, it prints "You lose." and closes the
readline interface. */
  if (numAttempts === 0) {
    console.log("You lose.");
    rl.close();
    return false;
  }

  rl.question("Enter a guess: ", (answer) => {
    if (checkGuess(Number(answer))) {
      console.log("You win!");
      rl.close();
    } else {
      numAttempts--;
      askGuess();
    }
  });
};

/**
 * It asks the user for a min and max number, then calls the askGuess function
 */
const askRange = () => {
  rl.question("Enter a min number: ", (min) => {
    rl.question("Enter a max number: ", (max) => {
      secretNumber = randomInRange(min, max);
      askGuess();
    });
  });
};

/**
 * It asks the user for the number of attempts, and then calls the askRange function
 */
const askLimit = () => {
  rl.question("Enter the number of attempts: ", (attempts) => {
    numAttempts = attempts;
    askRange();
  });
};

/* Calling the askLimit function. */
askLimit();
