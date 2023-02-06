/**
 * AllTheArgs() returns a function that calls func() with all the arguments passed to allTheArgs().
 * 
 * Args:
 *   func: the function to be bound
 *   args: The rest parameter is an array of all the arguments passed to the function.
 * 
 * Returns:
 *   A function that is bound to the arguments passed in.
 */
function allTheArgs(func, ...args) {
  return func.bind(null, ...args);
}

/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

module.exports = allTheArgs;