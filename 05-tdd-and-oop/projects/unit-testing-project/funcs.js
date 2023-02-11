/**
 * Return true if the number passed in is 5, otherwise return false.
 * 
 * Args:
 *   num: The number to be checked.
 * 
 * Returns:
 *   true
 */
function isFive(num) {
  return num === 5;
}

/**
 * "If the input is not a number, throw an error. Otherwise, return true if the number is odd, false if
 * it's even."
 * 
 * The first line of the function is a guard clause. It checks if the input is a number, and if it
 * isn't, it throws an error. If the input is a number, the function continues to the next line
 * 
 * Args:
 *   number: The number to check if it's odd.
 * 
 * Returns:
 *   The remainder of the number divided by 2.
 */
function isOdd(number) {
  if (typeof number !== 'number') {
    throw Error('Input must be a number');
  }
  return Math.abs(number % 2) === 1;
}

/**
 * "Return an array of numbers from min to max, incrementing by step."
 * 
 * The function takes three arguments: min, max, and step. The step argument is optional, and if it's
 * not provided, the function will default to a step of 1
 * 
 * Args:
 *   min: The minimum value of the range.
 *   max: the maximum number in the range (inclusive)
 *   step: The step value. Default is 1. Defaults to 1
 * 
 * Returns:
 *   [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
 */
function myRange(min, max, step = 1) {
  const result = [];

  for (let i = min; i <= max; i += step) {
    result.push(i);
  }

  return result;
}


module.exports = { isFive, isOdd, myRange };