/***********************************************************************
Write a function named `hiddenCounter()`. This function will do two things - first
it will define a count variable, then it will return a function.
When invoked the function returned by hiddenCounter will increment the counter by 1.

Look below to see how this function is invoked:

let hidden1 = hiddenCounter(); //returns a function
hidden1(); // returns 1
hidden1(); // returns 2

let hidden2 = hiddenCounter(); // returns a function
hidden2(); // returns 1


***********************************************************************/


/**
 * It returns a function that returns a number that increments by one each time it's called.
 *
 * @return A function that increments a counter.
 */
const hiddenCounter = _ => {
  let count = 0;
  /* It's returning a function that increments the count variable by one each time it's called. */
  return next = _ => {
    count++;
    return count;
  }
}
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = hiddenCounter;
} catch (e) {
  // catch the ref err
  module.exports = null;
}
