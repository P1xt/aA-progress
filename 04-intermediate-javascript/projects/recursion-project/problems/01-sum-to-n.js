/***********************************************************************
Write a recursive function called `sumToN` that takes in a number and returns
the sum of all the numbers from 0 to that number. Return null for any input
number below 0.

Examples:

sumToN(5) // returns 15
sumToN(1)  // returns 1
sumToN(9)  // returns 45
sumToN(-8)  // returns null
***********************************************************************/

// your code here
const sumToN = num => {
  // base case, return zero when we get down to zero
  if (num === 0) {
    return num;
  }

  // exception case, bail if input is a negative number
  if (num < 0) {
    return null;
  }

  // recursive case, add num to the result of a recursive call
  // using num - 1 as the input
  // note: the instructions say to add all numbers from 0 to num
  //       but I'm doing the reverse because it's less code and
  //       1 + 2 + 3 equals 3 + 2 + 1, so order doesn't matter
  return num + sumToN(num - 1);
}


/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = sumToN;
} catch (e) {
  module.exports = null;
}
