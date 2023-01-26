/***********************************************************************
Write a recursive function called `sort` that takes an array of integers, `nums`
and returns an array containing those integers sorted from least to greatest.

Your function should accept a default argument called `sorted` which
holds the currently sorted elements. Each recursive step should add
the smallest number in the `nums` array to the end of `sorted`.

There are many ways to accomplish this task but here's a simple algorithm:

1. Check the base case: If `nums` is empty, then return `sorted`
2. Otherwise, find the smallest element in `nums`
3. Add the smallest element to the end of `sorted`
4. Remove the smallest element from `nums`
5. Recursively call `sort()` with updated `sorted` and `nums`

Examples:

sort([4,1,6,3,1,7]); // [1, 1, 3, 4, 6, 7]
sort([0, 1, -3]); // [-3, 0, 1]
sort([]); // []
***********************************************************************/
debugger
function sort(nums, sorted = []) {

  // base case, when there is nothing left in nums, everything is sorted
  if (nums.length === 0) {
    return sorted;
  }

  // locate the smallest element in nums
  const smallest = Math.min(...nums);
  const indexOfSmallest = nums.indexOf(smallest);

  // capture the smallest element
  sorted.push(smallest);

  // remove the first instance of the smallest element from nums
  // store in shrunkNums
  let shrunkNums = null;
  if (indexOfSmallest === 0) { // handle if smallest is at start of array
    shrunkNums = nums.slice(1);
  } else {
    shrunkNums = nums.slice(0, indexOfSmallest); // grab everything before the smallest
    if (indexOfSmallest !== nums.length - 1) { // make sure we don't slice beyond end
      // add everything after the smallest
      shrunkNums = shrunkNums.concat(nums.slice(indexOfSmallest + 1));
    }
  }

  // recursive case, call sort again after the smallest from this time
  // through has been moved to sorted
  return sort(shrunkNums, sorted);
}
sort([4,1,6,3,1,7]);
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = sort;
} catch (e) {
  module.exports = null;
}
