/***********************************************************************
Write a function named `arrowRestSum` that accepts all incoming parameters
and sums them. Assign the below function to a variable using the const keyword.

**Hint**: Use rest parameter syntax!

Examples:
arrowRestSum(3,5,6); // => 14
arrowRestSum(1, 2, 3, 4, 5, 6, 7, 8, 9); // => 14
arrowRestSum(0); // => 0
***********************************************************************/

/**
 * The arrowRestSum function takes in an arbitrary number of parameters, and returns the sum of all of
 * them.
 *
 * @param params The parameters passed to the function.
 */
const arrowRestSum = (...params) => params.reduce((total, next) => total + next);

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/


try {
  module.exports = arrowRestSum;
} catch (e) {
  return undefined;
}
