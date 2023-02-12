// Adds up positive integers from 1-n
function addNums(n) {
  let result = 0;
  for (let i = 1; i <= n; i++) {
    result += i;
  }
  return result;
}


// Adds up values of addNums(1) through addNums(n)
function addManyNums(n) {
  let result = 0;
  for (let i = 1; i <= n; i++) {
    result += addNums(i);
  }
  return result;

}



module.exports = [addNums, addManyNums];