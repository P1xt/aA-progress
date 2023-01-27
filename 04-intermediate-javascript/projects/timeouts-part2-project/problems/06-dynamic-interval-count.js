/***********************************************************************
Write a function, `dynamicIntervalCount`, that accepts a callback, a delay
in milliseconds, and an optional amount as arguments. The function should
set an interval with the given callback and delay. If an amount argument
is passed, the interval should be cleared after the callback has been
called 'amount' number of times. If an amount argument is not passed,
the interval should not be cleared and `dynamicIntervalCount` should instead
return the Timeout object for the interval.

In addition to Mocha, we recommend that you test your code manually using
node with the examples below.

Examples:

dynamicIntervalCount(function() {
    console.log('hi');
}, 500, 3); // prints 'hi' at 500ms intervals a total of 3 times


const timeoutObject = dynamicIntervalCount(function() {
    console.log('hi');
}, 500); // prints 'hi' at 500ms intervals indefinitely

console.log(timeoutObject); // Timeout { ... }
***********************************************************************/

/**
 * It takes a callback function, a delay, and an amount, and returns an interval that will call the
 * callback function after the delay, and will stop after the amount of times the callback function has
 * been called
 *
 * Args:
 *   cb: the callback function
 *   delay: the amount of time in milliseconds between each call to the callback function
 *   amount: the number of times the callback will be called.
 *
 * Returns:
 *   The interval ID.
 */
function dynamicIntervalCount(cb, delay, amount) {
  let count = 0;
  const interval = setInterval(
  /* An anonymous function that is being passed to the setInterval function. */
  () => {
      cb();
      /* If the amount is undefined, then the function will return the interval ID. */
      if (amount === undefined) {
        return interval;
      }
      /* Incrementing the count by 1, and then checking if the count is equal to the amount. If it is, then
      it clears the interval. */
      if(++count === amount){
          clearInterval(interval);
      }
  }, delay);
  return interval;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
  module.exports = dynamicIntervalCount;
} catch {
  module.exports = null;
}
