// Merge Sort out-of-place
// Do not modify the original array
/**
 * We recursively divide the array in half until we have arrays of length 1, then we merge them back
 * together in sorted order
 * @param arr - the array to sort
 * @returns The sorted array
 */
function mergeSort(arr) {

  // Check if the input is length 1 or less
  if (arr.length <= 1) {
    // If so, it's already sorted: return
    return arr;
  }
  // Divide the array in half
  const midPoint = Math.ceil(arr.length / 2);
  const firstHalf = arr.slice(0, midPoint);
  const secondHalf = arr.slice(midPoint);

  // Recursively sort the left half
  const firstHalfSorted = mergeSort(firstHalf);
  // Recursively sort the right half
  const secondHalfSorted = mergeSort(secondHalf);

  // Merge the halves together and return
  return merge(firstHalfSorted, secondHalfSorted);

}


// Takes in two sorted arrays and returns them merged into one
/**
 * "While there are still values in each array, compare the first values of each array and push the
 * smaller value into the return array."
 * 
 * The above function is a good example of a divide and conquer algorithm. We're dividing the problem
 * into smaller and smaller pieces until we can't divide any further
 * @param arrA - [1, 3, 6, 8, 11]
 * @param arrB - [1, 3, 5, 7, 9]
 * @returns The merged array
 */
function merge(arrA, arrB) {
  // Create an empty return array
  let merged = [];

  // While there are still values in each array...
  while (arrA.length > 0 && arrB.length > 0) {
    // Compare the first values of each array
    if (arrA[0] > arrB[0]) {
      merged.push(arrB.shift());
    } else {
      merged.push(arrA.shift());
    }
  }

  // get any leftovers from either input array
  merged = merged.concat(arrA).concat(arrB);

  // Return the return array
  return merged;
}


module.exports = [merge, mergeSort];

