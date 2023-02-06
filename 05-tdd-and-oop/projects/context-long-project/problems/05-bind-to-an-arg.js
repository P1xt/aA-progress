/**
 * BindToAnArg returns a function that calls func with arg as the first argument.
 * 
 * Args:
 *   func: the function to bind to
 *   arg: the argument to bind to the function
 * 
 * Returns:
 *   A function that takes a single argument and returns the result of calling the original function
 * with the bound argument and the new argument.
 */
function bindToAnArg(func, arg) {
  // need to add null as first arg
  // to handle if an arg isn't sent
  return func.bind(null, arg);
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = bindToAnArg;