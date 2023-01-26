/***********************************************************************
Write a recursive function, `range`, that takes a start and an end and returns
an array of all numbers in that range, exclusive. If the end number is less than
the start, return an empty array.

Examples:

range(1, 5); // [1, 2, 3, 4]
range(3, 4); // [3]
range(7, 6); // []
***********************************************************************/


const range = (start, end) => {
  // base case, return empty array if start < end or if start === end
  // as we'll have completed traversing the list when we get to that point
  if (end <= start) {
    return [];
  }

  // recursive case, use concat to construct an array of numbers by
  // joining the start number to the result of a recursive call to range
  // with start incremented by 1
  return [start].concat(range(start + 1, end));
}


/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = range;
} catch (e) {
  module.exports = null;
}
