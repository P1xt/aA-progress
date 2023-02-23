// Insertion Sort out-of-place
// Do not modify the original array
function insertionSort(arr) {
  /*
  Pseudocode:

  Copy the original array
  Create an array to store the sortedArray values
  While the array is not empty:
  - make sure you have a console.log(sorted.join(',')) as your first line in the while loop
  - Pop a value from the array
  - Create a new spot at the end of the array with null to help with comparisons
  - Walk through the sortedArray array in reverse order
  - Check if the value to the leftValue is smaller than the new value
  - If so, you've reached the insertion point so exit the loop
  - If not shift the value to the right by 1 and continue
  - Insert the unsorted value at the break point
  Return the sortedArray array
  */

  const originalArray = arr.slice(); //[4, 6, 1, 5, 3, 5];
  const sortedArray = [];
  while (originalArray.length) {
    console.log(sortedArray.join(','));
    const currentElement = originalArray.pop();
    sortedArray.unshift(null);
    for (let i = 0; i < sortedArray.length; i++) {
      if (i === sortedArray.length - 1 || sortedArray[i + 1] > currentElement) {
        sortedArray[i] = currentElement;
        break;
      }
      [sortedArray[i + 1], sortedArray[i]] = [sortedArray[i], sortedArray[i + 1]];
    }
  }
  return sortedArray;
}

// In-place Insertion Sort
// Mutates the original array
function insertionSortInPlace(arr) {
  /*
  Pseudocode:

  Set a pointer dividing the array into sortedArray and unsorted halves
  Repeat while the unsorted half is not empty:
  - make sure you have a console.log(sorted.join(',')) as your first line in the while loop
  - Grab the first value from the unsorted half
  - For each value starting from the divider,
  - Check if the value to the leftValue is smaller than the unsorted value
  - If so, you've reached the insertion point so exit the loop
  - If not shift the value to the right by 1 and continue
  - Insert the unsorted value at the break point
  - Increment the dividing pointer and repeat
  Return the mutated array
  */

  let dividerIndex = 0;
  while (dividerIndex < arr.length) {
    let currentValue = arr[dividerIndex];
    let breakPoint = 0;
    for (let i = dividerIndex; i >= 0; i--) {
      let leftValue = arr[i - 1];
      if (leftValue < currentValue) {
        breakPoint = i;
        break;
      } else {
        arr[i] = leftValue;
      }
    }
    arr[breakPoint] = currentValue;
    console.log(arr.join(','));
    dividerIndex++
  }
  return arr;
}

module.exports = [insertionSort, insertionSortInPlace];