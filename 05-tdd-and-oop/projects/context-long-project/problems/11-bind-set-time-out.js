/**
 * BoundFuncTimer() is a function that returns a setTimeout() function that calls a function bound to
 * an object after a delay.
 * 
 * Args:
 *   obj: The object to bind the function to.
 *   func: The function to be called.
 *   delay: The time in milliseconds to wait before calling the function.
 * 
 * Returns:
 *   A function that will be called after a delay.
 */
function boundFuncTimer(obj, func, delay) {
  return setTimeout(func.bind(obj), delay);
}

/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

module.exports = boundFuncTimer;