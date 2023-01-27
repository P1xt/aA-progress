/***********************************************************************
Write a function named `smoothieMachine` that accepts any number of params and
a function.

The return function will also accept any number of params and will return a
string including all of the parameters of smoothieMachine and the return
function.

See below for examples:

let smoothie1 = smoothieMachine();

console.log(smoothie1("milk"));
// prints "I'm having a smoothie with milk"
console.log(smoothie1("kale", "spinach"));
// prints "I'm having a smoothie with milk and kale and spinach"
console.log(smoothie1("honey", "pears", "berries"));
// prints "I'm having a smoothie with milk and kale and spinach and honey and pears and berries"

let smoothie2 = smoothieMachine("apples", "bananas", "berries");
console.log(smoothie2("pineapple"));
// prints "I'm having a smoothie with apples and bananas and berries and pineapple"
***********************************************************************/

/**
 * It returns a function that returns a string
 * @returns A function that takes in a list of ingredients and returns a string with the ingredients.
 */
const smoothieMachine = _ => {
  /* Creating an empty array that will be used to store the ingredients. */
  const ingredients = [];

  /* Returning a function that takes in a list of ingredients and returns a string with the ingredients. */
  return getIngredient = (...more) => {
    ingredients.push(...more);

    return `I'm having a smoothie with ${ingredients.join(' and ')}`;
  }
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
  module.exports = smoothieMachine;
} catch (e) {
  // catch the ref err
  module.exports = null;
}
