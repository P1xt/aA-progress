/* It's importing the `sayMessage` function from the `say-message.js` file. */
const classes = require("./../messages/say-message");
const sayMessage = classes.sayMessage;

/**
 * This function takes a name as an argument and says hello to that name.
 *
 * Args:
 *   name: The name of the person we're saying hello to.
 */
function sayHelloTo(name) {
  sayMessage(`Hello ${name}!`)
}

/* It's calling the function `sayHelloTo` and passing in the string "Woody" as the argument. */
sayHelloTo("Woody");
/* It's exporting the function `sayHelloTo` so that it can be used in other files. */
module.exports = { sayHelloTo };
