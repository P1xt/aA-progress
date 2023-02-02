/**
 * IsFive returns true if the input is 5, otherwise it returns false.
 *
 * Args:
 *   input: The value that is passed into the function.
 */
const isFive = (input) => input === 5;

/**
 * If the input is not a number, throw an error. Otherwise, return true if the input is odd, and false
 * if it is even.
 *
 * Args:
 *   input: The input to the function.
 *
 * Returns:
 *   The function isOdd is being returned.
 */
const isOdd = (input) => {
  if (typeof input !== "number") throw Error("Not a number");

  return input % 2 !== 0;
};

/**
 * Return an array of numbers from min to max, incrementing by step.
 *
 * Args:
 *   min: The minimum number in the range.
 *   max: The maximum number in the range.
 *   step: The step value. Default is 1. Defaults to 1
 *
 * Returns:
 *   [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
 */
const myRange = (min, max, step = 1) => {
  const result = [];
  for (let i = min; i <= max; i += step) {
    result.push(i);
  }
  return result;
};
module.exports = { isFive, isOdd, myRange };
