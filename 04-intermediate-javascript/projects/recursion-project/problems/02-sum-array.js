/***********************************************************************
Write a recursive function called `sumArray` that takes an array of integers
and returns the value of all the integers added together. Your array may
include a mix of positive and negative integers!

Examples:

sumArray([1, 2, 3]); //  6
sumArray([0, 1, -3]); //  -2
sumArray([1, 2, 3, 4, 5]); // 15
***********************************************************************/

const sumArray = arr => {
  // base case, when we only have one number left, just return it
  if (arr.length === 1) {
    return arr[0];
  }

  // recursive case, remove one number from the array
  // then add it to the result of running sumArray on the shorter array
  const next = arr.pop();
  return next + sumArray(arr);
}

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = sumArray;
} catch (e) {
  module.exports = null;
}
