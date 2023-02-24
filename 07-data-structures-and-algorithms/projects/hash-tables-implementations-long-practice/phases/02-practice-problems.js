/**
 * We split the strings into arrays, sort the arrays, and then join the arrays back into strings. 
 * 
 * If the two strings are anagrams, the sorted strings will be the same
 * @param str1 - "cinema"
 * @param str2 - "cinema"
 * @returns a boolean value.
 */
function anagrams(str1, str2) {
  return str1.split('').sort().join('') === str2.split('').sort().join('')
}


/**
 * We're using the filter method to return an array of elements that are common to both arrays
 * 
 * Be sure to filter the bigger array, to reduce the length that includes will
 * need to traverse in the other array
 * @param arr1 - [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
 * @param arr2 - [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
 * @returns [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
 */
function commonElements(arr1, arr2) {
  if (arr1.length > arr2.length) {
    return arr1.filter(ele => arr2.includes(ele));
  } else {
    return arr2.filter(ele => arr1.includes(ele));
  }
}


/**
 * We loop through the array, and for each element we check if we've seen it before. If we have, we
 * return it. If we haven't, we add it to the object
 * @param arr - the array to search
 * @returns The first duplicate number in the array.
 */
function duplicate(arr) {
  for (let i = 0, found = {}; i < arr.length; i++) {
    let num = arr[i];
    if (found[num]) return num;
    found[num] = 1;
  }
  return false
}


/**
 * For each element in the array, check if the remainder of the target minus the element is in the
 * object. If it is, return true. If not, add the element to the object.
 * @param nums - the array of numbers
 * @param target - the target number we're trying to reach
 * @returns true if the target is found in the array, and false if it is not.
 */
function twoSum(nums, target) {
  for (let i = 0, found = {}; i < arr.length; i++) {
    let remainder = target - nums[i];
    if (remainder in found) {
      return true;
    } else {
      found[nums[i]] = remainder;
    }
  }
  return false;
}


/**
 * "If the pattern and string are already hashed, then check if they match, otherwise hash them."
 * 
 * @param pattern - a string of characters
 * @param strings - ["cat", "dog", "dog"]
 * @returns A boolean value.
 */
function wordPattern(pattern, strings) {

  // loop through the pattern
  for (let i = 0, patternMap = {}, stringMap = {}; i < pattern.length; i++) {

    // bail if string doesn't match
    if (patternMap.hasOwnProperty(pattern[i])) {
      if (strings[i] !== patternMap[pattern[i]]) {
        return false;
      }
    }

    // bail if pattern doesn't match
    if (stringMap.hasOwnProperty(strings[i])) {
      if (stringMap[strings[i]] !== pattern[i]) {
        return false;
      }
    }

    // hash pattern and string
    patternMap[pattern[i]] = strings[i];
    stringMap[strings[i]] = pattern[i];
  }

  // if we never bailed, they matched
  return true;
}


module.exports = [anagrams, commonElements, duplicate, twoSum, wordPattern];