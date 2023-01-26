/***********************************************************************
Write a recursive method permutations(array) that calculates all the
permutations of the given array. For an array of length n there are n! different
permutations. So for an array with three elements we will have 3 * 2 * 1 = 6
different permutations.

Examples:

permutations([1, 2]) // [[1, 2], [2, 1]]
permutations([1, 2, 3]) // [[1, 2, 3], [1, 3, 2],
                        // [2, 1, 3], [2, 3, 1],
                        // [3, 1, 2], [3, 2, 1]]
***********************************************************************/

// your code here
const permutations = array => {
  let result = [];

  // base case, if array length is 1 or less
  if (array.length === 0) return [];
  if (array.length === 1) return [array];

  // recursive case, if array length > 1
  // for each member of the array, concat it to the permutations
  // of the rest of the array
  for (let i = 0; i < array.length; i++) {
    const thisElement = array[i];
    const rest = permutations(array.slice(0, i).concat(array.slice(i + 1)));
    for (let j = 0; j < rest.length; j++) {
      result.push([thisElement].concat(rest[j]));
    }
  }
  return result;
}
console.log(permutations([1, 2, 3]))
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = permutations;
} catch (e) {
  module.exports = null;
}
