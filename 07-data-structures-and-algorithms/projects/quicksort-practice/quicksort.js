/**
 * "Sort the left, pivot and right, then return the left, pivot and right in sorted order."
 * 
 * The above function is a recursive function. It calls itself
 * @param arr - The array to be sorted
 * @returns The left, pivot and right in sorted order
 */
function quicksort(arr) {

  // Check if the input is length 1 or less
  if (arr.length <= 1) {
    return arr;
  }

  // Pick the first value as the pivot
  let pivot = arr[0];
  let left = [];
  let right = [];

  // Orient the pivot so that...
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      // every number smaller than the pivot is to the left
      left.push(arr[i]);
    } else {
      // every number larger (or equal) than the pivot is to the right
      right.push(arr[i]);
    }
  }

  // Recursively sort the left
  left = quicksort(left);
  // Recursively sort the right
  right = quicksort(right);

  // Return the left, pivot and right in sorted order
  return left.concat(pivot).concat(right);
}


module.exports = [quicksort];
