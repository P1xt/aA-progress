/**
 * ChangeContext takes a function and an object as arguments and returns the function called with the
 * object as its context.
 * 
 * Args:
 *   func: The function that we want to change the context of.
 *   obj: The object that will be the context of the function.
 * 
 * Returns:
 *   The function is being called with the object as the context.
 */
function changeContext(func, obj) {
  return func.call(obj);
}

/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

module.exports = changeContext;