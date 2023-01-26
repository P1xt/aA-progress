/***********************************************************************
Write a recursive function called `addToTwelve` that will return true if there
are two adjacent numbers in the input array that can sum up to 12. Otherwise,
return false.

Examples:

addToTwelve([1, 3, 4, 7, 5]); // true
addToTwelve([1, 3, 4, 7, 6]); // false
addToTwelve([1, 11, 4, 7, 6]); // true
addToTwelve([1, 12, 4, 7, 6]); // false
addToTwelve([1]); // false
***********************************************************************/

const addToTwelve = arr => {
  // base case, 1 or fewer elements left, no longer possible to add two
  if (arr.length <= 1) {
    return false;
  }

  // recursive case, try adding the last two elements in the array
  // return true if they add to 12, remove one and call function again
  // to try the next two if they don't add to 12;
  const result = arr[arr.length - 1] + arr[arr.length - 2];
  if (result === 12) {
    return true;
  } else {
    arr.pop();
    return addToTwelve(arr);
  }
}

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = addToTwelve;
} catch (e) {
  module.exports = null;
}
