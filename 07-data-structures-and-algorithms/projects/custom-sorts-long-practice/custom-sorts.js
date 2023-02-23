/**
 * Sort the users by age, in ascending order.
 * @param users - an array of objects. Each object has an age property.
 * @returns a sorted array of users by age.
 */
function ageSort(users) {
  return users.sort((a, b) => a.age - b.age);
}

/**
 * We filter the array into two arrays, one with odd numbers and one with even numbers, then we sort
 * each array and concatenate them together
 * @param arr - an array of integers
 * @returns [1, 3, 5, 2, 4, 6]
 */
function oddEvenSort(arr) {
  const odds = arr.filter(a => a % 2 !== 0).sort((a, b) => a - b);
  const evens = arr.filter(a => a % 2 === 0).sort((a, b) => a - b);
  return odds.concat(evens);
}

/**
 * We take the two strings, convert them to lowercase, split them into arrays, sort them, and then join
 * them back together. 
 * 
 * @param s - string
 * @param t - string
 * @returns a boolean value.
 */
function validAnagrams(s, t) {
  return s.toLowerCase().split('').sort().join('') === t.toLowerCase().split('').sort().join('');
}

/**
 * "Sort the array by the length of the number's base, and if the bases are equal, sort by the number
 * itself."
 * 
 * The function takes an array of numbers as an argument. The first thing we do is define a function
 * called base that takes a number as an argument and returns the length of the number's base
 * @param arr - an array of numbers
 * @returns [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25,
 * 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40
 */
function reverseBaseSort(arr) {
  const base = input => input.toString().length;

  return arr.sort((a, b) => {
    if (base(a) > base(b)) return -1;
    return (base(a) < base(b)) ? 1 : a - b;
  });
}

/**
 * Sort the array by the frequency of each element, and if the frequencies are equal, sort by the value
 * of the element
 * @param arr - The array to sort.
 * @returns The sorted array.
 */
function frequencySort(arr) {
  const frequencies = new Object();
  arr.forEach(value => frequencies[value] = (frequencies[value]) ? frequencies[value] + 1 : 1);
  return arr.sort((a, b) => frequencies[a] - frequencies[b] || b - a);
}

module.exports = [
  oddEvenSort,
  validAnagrams,
  reverseBaseSort,
  frequencySort,
  ageSort,
];