/***********************************************************************
Write a recursive solution called `isSorted` to determine if the input array
is sorted in ascending order.

Examples:

isSorted([1, 2, 3, 4, 5]); // true
isSorted([1, 2, 4, 3, 5]); // false
isSorted([2, 4, 6, 7, 8]); // true
isSorted([5, 4, 3, 2, 1]); // false
***********************************************************************/

const isSorted = arr => {


  // base case
  if (arr.length === 1) {
    return true;
  }
  // helper function to check if the last two numbers are sorted
  const lastTwoSorted = arr[arr.length - 2] <= arr[arr.length - 1];

  // additional base case, we can stop if there's only two left
  if (arr.length === 2) {
    return lastTwoSorted;
  }

  // recursive case, return whether the final two are sorted AND the
  // result of a recursive call to isSorted with the last member of
  // arr is true
  arr.pop();
  return lastTwoSorted && isSorted(arr);

}
console.log(isSorted([1, 2, 3, 4, 5]));
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = isSorted;
} catch (e) {
  module.exports = null;
}
