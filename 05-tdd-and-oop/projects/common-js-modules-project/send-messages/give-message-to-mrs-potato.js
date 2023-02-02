/* Importing the say-hello-to.js file. */
const classes = require("./say-hello-to");
const sayHelloTo = classes.sayHelloTo;

/**
 * GiveMessageToMrsPotato is a function that takes in a message and says hello to Mrs. Potato, then
 * logs the message.
 *
 * Args:
 *   message: a string
 */
function giveMessageToMrsPotato(message) {
  sayHelloTo("Mrs. Potato");
  console.log(`(Psst... ${message})`)
}

/* Calling the function giveMessageToMrsPotato and passing in the string "Hi Buzz" as the argument. */
giveMessageToMrsPotato("Hi Buzz");

/* Exporting the function giveMessageToMrsPotato so that it can be used in other files. */
module.exports = { giveMessageToMrsPotato };
