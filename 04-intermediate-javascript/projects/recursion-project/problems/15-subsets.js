/***********************************************************************
Write a function called `subsets` that will return all subsets of an array.

Examples:

subsets([]) // [[]]
subsets([1]) // [[], [1]]
subsets([1, 2]) // [[], [1], [2], [1, 2]]
subsets([1, 2, 3]) // [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]

Hint: For subsets([1, 2, 3]), there are two kinds of subsets:
  1. Those that do not contain 3 (all of these are subsets of [1, 2]).
  2. For every subset that does not contain 3, there is also a corresponding
     subset that is the same, except it also does contain 3.
***********************************************************************/
const subsets = arr => {
  const last = arr.length - 1; // for convenience, need the last index a lot

  // base case, return empty if our array is empty
  if(arr.length === 0) {
    return [[]];

  // base case, return an array containing an empty array and the one element
  // we received when we get a one element array
  } else if(arr.length === 1) {
    return [[], arr];

  // recursive case, only two elements in the array
  } else if(arr.length === 2) {
    const eachElement = subsets(arr.slice(0, last));
    const lastElement = [arr[last]];
    return [...eachElement, lastElement, arr];

  // recursive case, more than two elements in the array
  } else {
    // find subsets for the array except the last member
    const eachElement = subsets(arr.slice(0, last));
    const firstPass = [...eachElement];

    // add the last member of the array to each of the subsets
    // found among the other members
    const secondPass = [];
    firstPass.forEach(next => secondPass.push([...next, arr[last]]));
    return [...firstPass, ...secondPass];
  }
};

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = subsets;
} catch (e) {
  module.exports = null;
}
