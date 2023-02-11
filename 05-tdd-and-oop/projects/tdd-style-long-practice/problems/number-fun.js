/**
 * ReturnsThree returns the number 3.
 * @returns 3
 */
function returnsThree() {
  return 3;
}

/**
 * "If the input is a number between 1 and 1,000,000, return the reciprocal of the input."
 * 
 * The first line of the function is a guard clause. It checks if the input is a number. If it isn't,
 * it throws an error
 * @param n - The number to find the reciprocal of.
 * @returns The reciprocal of the input number.
 */
function reciprocal(n) {
  /* It's checking if the input is a number. If it isn't, it throws an error. */
  if (typeof n !== 'number') {
    throw new TypeError("Input must be a number");
  }
  /* It's checking if the input is between 1 and 1,000,000. If it isn't, it throws an error. */
  if (n < 1 || n > 1000000) {
    throw new TypeError("Input must be between 1 and 1,000,000");
  }
  return 1 / n;
}

module.exports = {
  returnsThree,
  reciprocal
};