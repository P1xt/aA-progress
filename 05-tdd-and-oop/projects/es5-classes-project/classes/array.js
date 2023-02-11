
/* Adding a new method to the Array prototype. */
Array.prototype.isEqual = function (array) {
  // cant be deep equal if not the same length
  if (this.length !== array.length) {
    return false;
  }
  // not equal the first time we get a non-match
  for (let i = 0; i < this.length; i++) {
    if (this[i] !== array[i]) {
      return false;
    }
  }

  // must be equal if it didn't fail above
  return true;
}