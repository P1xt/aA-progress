/***********************************************************************
We've done most of the work for you below, but something's not quite
right. Refactor the problem below to avoid a stack overflow and save
the day!

When fixed, this function should behave similarly to JavaScript's '.map()'
function.

Examples:

doForAll([], (x) => x * 2); // => []
doForAll([1, 2, 3], (x) => x + 1); // => [2, 3, 4]
doForAll(["a", "b", "c"]), (x) => x.toUpperCase()); // => ["A", "B", "C"]
***********************************************************************/

/**
 * DoForAll takes an array and a function, and returns a new array with the function applied to each
 * element of the original array.
 *
 * @param arr an array
 * @param action a function that takes in a single parameter and returns a value
 *
 * @return [1, 2, 3, 4, 5]
 */
function doForAll(arr, action) {

  /* Checking to see if the array is empty. If it is, it returns an empty array. */
  if (arr.length === 0) {
    return [];
  }

  /* Taking the first element of the array and applying the action to it. Then it is taking the rest of
  the array and applying the action to it. */
  return [action(arr[0]), ...doForAll(arr.slice(1), action)];
}

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
module.exports = doForAll;
