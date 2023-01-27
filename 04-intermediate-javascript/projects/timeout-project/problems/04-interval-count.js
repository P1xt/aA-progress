/***********************************************************************
Write a function, `intervalCount`, that accepts a callback, a delay in
milliseconds, and an amount. The function should set an interval with
the given callback and delay, but clear the interval after the callback
has been executed 'amount' number of times.

Hint: utilize a 'closure' to your advantage

In addition to Mocha, we recommend that you test your code manually using
node with the examples below.

Example

intervalCount(function() {
    console.log('hi');
}, 500, 3); // prints 'hi' at 500ms intervals a total of 3 times
***********************************************************************/

/**
 * Call the callback function every delay milliseconds, amount times.
 *
 * Args:
 *   cb: the callback function
 *   delay: the time between each call of the callback function
 *   amount: the number of times the callback will be called
 */
function intervalCount(cb, delay, amount) {
  let count = 0;
  const interval = setInterval(/* A callback function that is called every delay milliseconds. It calls
  the callback function passed in as an argument, and then checks if
  the count is equal to the amount. If it is, it clears the interval. */
  () => {
      cb();
      if(++count === amount){
          clearInterval(interval);
      }
  }, delay);
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
  module.exports = intervalCount;
} catch {
  module.exports = null;
}
