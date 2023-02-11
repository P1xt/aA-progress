/**
 * MyMap takes an array and a callback function, and returns a new array with the results of calling
 * the callback function on each element of the original array.
 * @param inputArray - an array of any type
 * @param callback - A function that is called on each element of the inputArray.
 * @returns [1, 2, 3, 4, 5]
 */
function myMap(inputArray, callback) {
  const result = [];
  for (let input of inputArray) {
    result.push(callback(input));
  }
  return result;
}

module.exports = myMap;