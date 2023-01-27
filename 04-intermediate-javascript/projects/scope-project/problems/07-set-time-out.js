/***********************************************************************
Write a function named `funcTimer(time, func)` that will allow you to hand
in a function and a number representing milliseconds. The `funcTimer` should use
the global.setTimeout function to invoke the passed in function in `time` amount
of seconds.

There are no specs for this problem - try it in the console yourself to
test your answer!

Examples:

function partyFunc () {
  console.log("Party time!")
}

funcTimer(5000, partyFunc); // in 5 seconds prints: "Party time!"


***********************************************************************/


/**
 * It takes a time in milliseconds and a callback function as arguments, and returns a timer that will
 * call the callback function after the specified time.
 *
 * @param time The time in milliseconds that you want to wait before executing the callback function.
 * @param callback The function to be executed after the specified time.
 */
const funcTimer = (time, callback) => setTimeout(callback, time);

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = funcTimer;
} catch (e) {
  // catch the ref err
  module.exports = null;
}
