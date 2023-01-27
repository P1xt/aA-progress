/***********************************************************************
Let's practice writing closures by creating a function named `sandwichMaker()`.
This function will return another function that will accept a string to add
to the sandwich order (which will start off with a default "tomato" ingredient),
separating each incoming ingredient with "and".

Look below to see how this function is invoked:

let sandwich = sandwichMaker(); // => returns a function
sandwich("spinach") // => "One sandwich with tomato and spinach"
sandwich("jelly") // => "One sandwich with tomato and spinach and jelly"
sandwich("bread") // => "One sandwich with tomato and spinach and jelly and bread"

Another Sandwich:
let sandwich2 = sandwichMaker(); // => returns a function
sandwich2("pb") // => "One sandwich with tomato and pb"

***********************************************************************/


/**
 * SandwichMaker returns a function that takes an ingredient and adds it to the sandwich
 *
 * @return A function
 */
function sandwichMaker() {
  let ingredients = "One sandwich with tomato";

  return function nextIngredient(ingredient) {
    ingredients += ' and ' + ingredient;
    return ingredients;
  }
}
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
let sandwich = sandwichMaker();
console.log(sandwich("spinach"));
console.log(sandwich("jelly"));
try {
  module.exports = sandwichMaker;
} catch (e) {
  // catch the ref err
  module.exports = null;
}
