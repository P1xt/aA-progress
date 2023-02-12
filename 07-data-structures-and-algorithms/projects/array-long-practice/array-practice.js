/**
 * We start with the first element of the array as the minimum, and then we loop through the array,
 * comparing each element to the minimum. If the element is less than the minimum, we set the minimum
 * to that element
 * @returns The minimum value in the array.
 */
const findMinimum = arr => {
  if (arr.length === 0) return undefined;
  let min = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
};

/**
 * We iterate through the array, adding the current element to the sum, and then pushing the sum to the
 * result array
 * @returns [1, 3, 6, 10, 15]
 */
const runningSum = arr => {
  let sum = 0;
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(arr[i] + sum);
    sum += arr[i];
  }
  return result;
};

/**
 * Filter the array to only include strings with an even number of characters, then return the length
 * of the resulting array.
 * @returns The number of strings in the array that have an even number of characters.
 */
const evenNumOfChars = arr => {
  return arr.filter(next => next.length % 2 === 0).length;
};

/**
 * We iterate through the array, and for each element, we iterate through the array again, and if the
 * element is smaller than the current element, we increment a counter
 * @returns [2, 1, 0, 1, 0]
 */
const smallerThanCurr = arr => {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    let smaller = 0;
    for (let j = 0; j < arr.length; j++) {
      if (i !== j && arr[j] < arr[i]) {
        smaller++;
      }
    }
    result.push(smaller);
  }
  return result;


};

/**
 * "Loop through the array, and for each element, loop through the array again and check if the element
 * plus any other element is equal to the target."
 * 
 * The time complexity of this solution is O(n^2)O(n
 * ​2
 * ​​ ) because we loop through the array twice for each element
 * @param arr - an array of integers
 * @param target - the target number we're trying to reach
 * @returns true
 */
const twoSum = (arr, target) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        return true;
      }
    }
  }
  return false;
};

/**
 * Sort the array in descending order, then return the second element
 * @returns The second largest number in the array.
 */
const secondLargest = arr => {
  if (arr.length < 2) return undefined;
  return arr.sort((a, b) => b - a)[1];
};

/**
 * We loop through the array backwards, and for each element, we swap it with a random element in the
 * array
 * @param arr - the array to be shuffled
 * @returns A new array with the same elements as the original array, but in a random order.
 */
const shuffle = (arr) => {
  const arrCopy = [...arr];
  for (let i = arrCopy.length - 1; i > 0; i--) {
    var rand = Math.floor(Math.random() * (i + 1));
    [arrCopy[i], arrCopy[rand]] = [arrCopy[rand], arrCopy[i]];
  }
  return arrCopy;
};


module.exports = [findMinimum, runningSum, evenNumOfChars, smallerThanCurr, twoSum, secondLargest, shuffle];