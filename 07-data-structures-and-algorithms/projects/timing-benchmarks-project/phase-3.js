const [addNums, addManyNums] = require("./phase-1");


function addNums10Timing(increment) {
  let result = [];
  for (let i = 1, j = increment; i <= 10; i++, j += increment) {
    // console.time(`addNums timer ${i}`);
    // console.timeLog(`addNums timer ${i}`);
    const startTime = Date.now();
    result.push(addNums(j));
    const endTime = Date.now();
    console.log(endTime - startTime);
    // console.timeEnd(`addNums timer ${i}`);
  }
  return result;


}


function addManyNums10Timing(increment) {
  let result = [];
  for (let i = 1, j = increment; i <= 10; i++, j += increment) {
    // console.time(`addManyNums timer ${i}`);
    // console.timeLog(`addManyNums timer ${i}`);
    const startTime = Date.now();
    result.push(addManyNums(j));
    const endTime = Date.now();
    console.log(endTime - startTime);
    // console.timeEnd(`addManyNums timer ${i}`);
  }
  return result;
}


n = 1000000
console.log(`addNums(${n}): `);
addNums10Timing(1000000);

console.log("\n***********\n");

n = 5000
console.log(`addManyNums(${n}): `);
addManyNums10Timing(5000);