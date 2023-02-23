
/**
 * We iterate through the array, swapping any two adjacent values that are out of order, and then we
 * repeat the process until no swaps occur
 * @param arr - The array to be sorted
 * @returns The sorted array
 */
function bubbleSort(arr) {
  let swaps = 0
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
      swaps++;
      // Do not move this console.log
      console.log(arr.join(","));
    }
  }
  if (swaps === 0) return arr;
  return bubbleSort(arr);
}

module.exports = bubbleSort;