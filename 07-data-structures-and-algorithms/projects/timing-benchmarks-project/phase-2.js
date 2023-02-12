const [addNums, addManyNums] = require("./phase-1");

// Runs `addNums` in 10 increasing increments
function addNums10(inc) {
  let result = [];
  for (let i = 1, j = inc; i <= 10; i++, j += inc) {
    result.push(addNums(j));
  }
  return result;
}

// Runs `addManyNums` in 10 increasing increments
function addManyNums10(inc) {
  let result = [];
  for (let i = 1, j = inc; i <= 10; i++, j += inc) {
    result.push(addManyNums(j));
  }
  return result;
}
module.exports = [addNums10, addManyNums10];