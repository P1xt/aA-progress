/**
 * If there's enough time left, wait one second and then return a promise that resolves with the time
 * left minus one second. Otherwise, return a promise that rejects with the string 'not enough time to
 * stretch'.
 * @param timeLeft - the amount of time left in the workout
 * @returns A promise object
 */
function stretch(timeLeft) {
  return new Promise((resolve, reject) => {
    if (timeLeft >= 1000) {

      setTimeout(
        () => {
          console.log("done stretching");
          resolve(timeLeft - 1000);
        }, 1000)

    } else {
      reject("not enough time to stretch");
    }
  });
}


/**
 * RunOnTreadmill returns a promise that resolves to the time left after running on the treadmill for
 * 500 milliseconds, or rejects with an error if there isn't enough time left.
 * @param timeLeft - the amount of time left in the day
 * @returns A promise object
 */
function runOnTreadmill(timeLeft) {
  return new Promise((resolve, reject) => {
    if (timeLeft >= 500) {
      setTimeout(() => {
        console.log("done running on the treadmill")
        resolve(timeLeft - 500);
      }, 500)
    } else {
      reject("not enough time to run on the treadmill");
    }
  });
}


/**
 * LiftWeights returns a promise that resolves to the timeLeft minus 2000 if timeLeft is greater than
 * or equal to 2000, and rejects with the string 'not enough time to lift weights' otherwise.
 * @param timeLeft - the amount of time left in the day
 * @returns A promise object
 */
function liftWeights(timeLeft) {
  return new Promise((resolve, reject) => {
    if (timeLeft >= 2000) {
      setTimeout(() => {
        resolve(timeLeft - 2000);
        console.log("done lifting weights")
      })
    } else {
      reject("not enough time to lift weights");
    }
  });
}


/**
 * "stretch for the total time, then run on the treadmill for the total time, then lift weights for the
 * total time, then log a message saying how much time is left."
 * 
 * The function is written in a way that makes it easy to read and understand. It's also easy to see
 * that the function is doing three things in a row
 * @param totalTime - the total amount of time you have to workout
 */
function workout(totalTime) {
  stretch(totalTime)
    .then(runOnTreadmill)
    .then(liftWeights)
    .then((timeLeft) => console.log(`done working out with ${timeLeft / 1000} seconds left`))
    .catch(reason => console.log(reason))
}

/* ============================ TEST YOUR CODE ============================

Comment in each invocation of your workout function below and run the file
(node phase-2.js) to see if you get the expected output.
*/


workout(500);
// should print out the following:
// Error:  you dont have enough time to stretch


workout(1000);
// should print out the following:
// done stretching
// Error:  you dont have enough time to run on treadmill


workout(2000);
// should print out the following:
// done stretching
// done running on treadmill
// Error:  you dont have enough time to lift weights


workout(4000);
  // should print out the following:
  //   done stretching
  //   done running on treadmill
  //   done lifting weights
  //   done working out with 0.5 seconds left