// Ideas for functions below came from this site:
// https://www.i-programmer.info/programming/javascript/967-javascript-jems-active-logic-truthy-and-falsy.html

/******************************************************************************/

// Returns value based on the 'OR' Truth Table
const or = (A, B) => {
  if (A) return A;
  else return B;
};

// Returns value based on the 'AND' Truth Table
const and = (A, B) => {
  if (A) return B;
  else return A;
};

// negates what's passed
// added this function to handle !
const not = A => A === 0 ? 1 : 0;

// 'cb' parameter should be either 'OR' or 'AND' functions from above
// modified this method to return rather than console.log the result
const calculateTruthTable = (A, cb, B,) => {
  return cb(A, B) ? 1 : 0;
};

module.exports = {
  or,
  and,
  not,
  calculateTruthTable,
};