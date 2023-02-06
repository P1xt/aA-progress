/**
 * Call the function func on the object obj1, passing in obj2 as the argument.
 * 
 * Args:
 *   func: The function to be called
 *   obj1: The object to be used as the current object.
 *   obj2: The object that will be passed as the first parameter to the function.
 * 
 * Returns:
 *   The function callOnTarget is being returned.
 */
function callOnTarget(func, obj1, obj2) {
  return func.call(obj1, obj2)
}


/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

module.exports = callOnTarget;