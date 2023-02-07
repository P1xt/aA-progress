// 1.
/**
 * It takes an array of numbers and returns the sum of those numbers
 * 
 * Args:
 *   array: an array of numbers
 * 
 * Returns:
 *   The sum of the array
 */
function sum(array) {
  let sum = 0;
  try {
    for (let i = 0; i < array.length; i++) {
      sum += array[i];
    }
  } catch (error) {
    throw new TypeError("Invalid array")
  }
  return sum;
}

try {
  let res = sum(null);
  console.log(res);
} catch (error) {
  console.log(error.name + ": " + error.message);
}


/**
 * SayName takes a string and logs it to the console.
 * 
 * Args:
 *   name: The name of the person to say hello to.
 */
const sayName = (name) => {
  if (typeof name !== 'string') {
    throw new TypeError("Invalid name! Must be a string!");
  }
  console.log(name);
}
// 2.
// tests
sayName("Alex");
try {
  sayName(1);
} catch (error) {
  console.log(error.name + ": " + error.message);
}

// Your code here

// 3.
/**
 * "If there is no greeting, throw an error."
 * 
 * The function is expecting a greeting to be passed in. If it's not, it throws an error
 * 
 * Args:
 *   greeting: The greeting to be displayed.
 */
function greet(greeting) {
  if (!greeting) {
    throw new Error("There was no greeting given.");
  }

  console.log(greeting);
}

try {
  greet();
} catch (error) {
  console.log(error.name + ": " + error.message);
}