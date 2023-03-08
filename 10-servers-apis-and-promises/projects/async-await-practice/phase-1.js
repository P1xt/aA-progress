function stretch() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("done stretching");
      resolve();
    }, 1000);
  });
}

function runOnTreadmill() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("done running on treadmill");
      resolve();
    }, 500);
  });
}

function liftWeights() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("done lifting weights");
      resolve();
    }, 2000);
  });
}

// refactor this function to handle Promises using async/await instead of
// .then and .catch
/**
 * Workout() will wait for stretch() to finish, then it will wait for runOnTreadmill() to finish, then
 * it will wait for liftWeights() to finish, then it will log 'done working out' to the console.
 */
async function workout() {
  await stretch();
  await runOnTreadmill();
  await liftWeights();
  console.log("done working out");
}

/* ============================ TEST YOUR CODE ============================

Run the file (`node phase-1.js`) and check your output against the expected
output.
*/


workout();
  // should print out the following:
    // done stretching
    // done running on treadmill
    // done lifting weights
    // done working out