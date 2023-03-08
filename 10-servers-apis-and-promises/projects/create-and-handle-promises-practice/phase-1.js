
/**
 * Stretch() returns a promise that resolves after one second.
 * @returns A promise that will resolve after 1 second.
 */
function stretch() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(), 1000)
  }).then(console.log("done stretching"));
}

/**
 * RunOnTreadmill() returns a promise that resolves after 500ms.
 * @returns A promise that will resolve after 500ms.
 */
function runOnTreadmill() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(), 500)
  }).then(console.log("done running on treadmill"));
}

/**
 * LiftWeights is a function that returns a promise that resolves after 2 seconds.
 * @returns A promise that will resolve after 2 seconds.
 */
function liftWeights() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(), 2000)
  }).then(console.log("done lifting weights"));
}

/**
 * "stretch, then run on the treadmill, then lift weights, then log that you're done working out."
 * 
 * The function is written in a way that makes it easy to understand what it does
 */
function workout() {
  stretch()
    .then(() => runOnTreadmill())
    .then(() => liftWeights())
    .then(() => { console.log("done working out") });
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