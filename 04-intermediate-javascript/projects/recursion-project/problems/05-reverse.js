/***********************************************************************
Write a recursive function reverse(string) that takes in a string and returns
it reversed.

Examples:

reverse("house"); // "esuoh"
reverse("dog"); // "god"
reverse("atom"); // "mota"
reverse("q"); // "q"
reverse("id"); // "di"
reverse(""); // ""
***********************************************************************/

const reverse = string => {
  // base case, we have 1 or fewer characters left, just return it
  if (string.length <= 1) {
    return string;
  }

  // recursive case, find the position of the last character in the
  // string, then add it to the result of reversing the rest of the string
  const last = string.length - 1;
  return string[last] + reverse(string.slice(0, last));
}

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = reverse;
} catch (e) {
  module.exports = null;
}
