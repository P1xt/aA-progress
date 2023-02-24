/**
 * Return the index of the target value in the array, or -1 if the target value is not in the array.
 * @param arr - The array to search through
 * @param target - the value we're looking for
 * @returns The index of the target value.
 */
function linearSearch(arr, target) {
  return arr.indexOf(target);
};

/**
 * We start with a low and high index, and a middle index that is the average of the two. We then
 * compare the target value to the value at the middle index. If the target is less than the value at
 * the middle index, we move the high index to the middle index - 1. If the target is greater than the
 * value at the middle index, we move the low index to the middle index + 1. We then recalculate the
 * middle index and repeat the process until the target is found or the low and high indices overlap
 * @param arr - The array to search through
 * @param target - The value we're searching for
 * @returns The index of the target value in the array, or -1 if the target value is not in the array.
 */
function binarySearch(arr, target) {
  // Set integers pointing to the high and low range of possible indices
  let low = 0;
  let high = arr.length - 1;
  let middle = Math.floor((high - low) / 2);

  // While high and low indices do not overlap...
  while (low <= high) {
    const next = arr[middle];

    // Compare the target value to the midpoint value
    // If the target equals the midpoint...
    if (next === target) {
      // Return the midpoint index
      return middle;
    } else if (next > target) {
      // If the target is less than the midpoint...
      // Move the high pointer to midpoint - 1
      high = middle - 1;
    } else {
      // If the target is higher than the midpoint...
      // Move the low pointer to midpoint + 1
      low = middle + 1;
    }

    middle = Math.floor((high - low) / 2) + low;
  }

  // Return -1 if the loop exits with overlapping pointers
  return -1;

}


module.exports = [linearSearch, binarySearch]