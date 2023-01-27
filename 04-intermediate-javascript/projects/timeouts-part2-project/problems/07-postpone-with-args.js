/***********************************************************************
Write a function, `postponeWithArgs`, that accepts a callback and a delay in
milliseconds as arguments. `postponeWithArgs` should return a new function that
accepts any number of arguments. When the returned function is called, it should
invoke the callback after the given delay, passing any arguments it receives to
the callback.

In addition to Mocha, we recommend that you test your code manually using
node with the examples below.

Examples

const greet = (person) => console.log('Hello ' + person + '!');
const slowGreet = postponeWithArgs(greet, 1000);
slowGreet('Rose'); // prints 'Hello Rose!' after 1000 ms
slowGreet('Alex'); // prints 'Hello Alex!' after 1000 ms

const printSum = (num1, num2) => console.log(num1 + num2);
const slowPrintSum = postponeWithArgs(printSum, 500);
slowPrintSum(4, 3); // prints '7' after 500 ms
slowPrintSum(2, 8); // prints '10' after 500 ms

***********************************************************************/

/**
 * It returns a function that, when called, will call the original function after a delay, passing it
 * the arguments it was called with.
 *
 * Args:
 *   cb: The callback function to be executed after the delay.
 *   delay: The number of milliseconds to wait before calling the callback.
 *
 * Returns:
 *   A function that takes in a callback and a delay and returns a function that takes in any number of
 * arguments and sets a timeout to call the callback with those arguments after the delay.
 */
function postponeWithArgs(cb, delay) {
  /* Returning a function that takes in any number of arguments and sets a timeout to call the callback
  with those arguments after the delay. */
  return (...args) => setTimeout(cb, delay, ...args);
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
  module.exports = postponeWithArgs;
} catch {
  module.exports = null;
}
