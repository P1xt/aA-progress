/***********************************************************************
Write a recursive function called `flatten` that takes a single array with
any number of nested arrays and returns and array with all the nested
contents on one level.

Examples:

flatten([]); // []
flatten([1, 2]); // [1, 2]
flatten([1, [2, [3]]]); // [1, 2, 3]
***********************************************************************/

const flatten = arr => {
  // base case, return empty array when we get an empty array
  if (arr.length === 0) {
    return [];
  }
  // recursive case, flatten each element in the array

  // work with the input in two parts
  // the start, which is the first element of the input
  // if the start is an array, flatten it
  // else just use it to start our result array
  let start = Array.isArray(arr[0]) ? [...flatten(arr[0])] : [arr[0]];

  // and the rest, which is every element past the first
  let rest = arr.slice(1);

  // return the computed start of the array with the
  // recursively computed rest of the array
  return start.concat(flatten(rest));
}
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = flatten;
} catch (e) {
  module.exports = null;
}
