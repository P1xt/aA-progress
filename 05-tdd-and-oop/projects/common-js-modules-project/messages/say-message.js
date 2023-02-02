/* Assigning the value of the `helloMessage` variable in the `hello-message.js` file to the
`helloMessage` variable in the `hello-world.js` file. */
const classes = require("./hello-message");
const helloMessage = classes.helloMessage;

/**
 * The function sayMessage takes a message as an argument and prints it to the console.
 *
 * Args:
 *   message: The message to be printed.
 */
function sayMessage(message) {
  console.log(`"${message}"`)
}

/* Calling the function `sayMessage` and passing in the value of `helloMessage` as the argument. */
sayMessage(helloMessage);

/* Exporting the function `sayMessage` so that it can be used in other files. */
module.exports = { sayMessage };
