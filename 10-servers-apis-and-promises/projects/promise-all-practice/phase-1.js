/**
 * Stretch() returns a promise that resolves after 1 second.
 * @returns A promise object
 */
function stretch() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("done stretching");
      resolve();
    }, 1000);
  });
}

/**
 * RunOnTreadmill() returns a promise that resolves after 500ms.
 * @returns A promise object
 */
function runOnTreadmill() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("done running on treadmill");
      resolve();
    }, 500);
  });
}

/**
 * LiftWeights is a function that returns a promise that resolves after 2 seconds.
 * @returns A promise object
 */
function liftWeights() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("done lifting weights");
      resolve();
    }, 2000);
  });
}

/**
 * Workout() returns a promise that resolves when all of the promises returned by stretch(),
 * runOnTreadmill(), and liftWeights() resolve
 */
function workout() {
  // refactor this code to use Promise.all
  // stretch()
  //   .then(runOnTreadmill)
  //   .then(liftWeights)
  //   .then(() => console.log("done working out"))
  //   .catch((err) => console.log(err));
  const workouts = [stretch(), runOnTreadmill(), liftWeights()];
  return Promise.all(workouts)
    .then(() => console.log("done working out"))
    .catch(err => console.log(err));
}


/* ============================ TEST YOUR CODE ============================

Run the file (`node phase-1.js`) and check your output against the expected
output.
*/


workout();
  // should print out the following:
    // done running on treadmill
    // done stretching
    // done lifting weights
    // done working out