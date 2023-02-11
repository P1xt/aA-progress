/**
 * The Dog function is a constructor function that creates new objects with properties name and age.
 * 
 * Args:
 *   name: The name of the dog.
 *   age: The age of the dog.
 */
function Dog(name, age) {
  this.name = name;
  this.age = age;
}

/* Adding a method to the Dog prototype. */
Dog.prototype.bark = function () {
  console.log("Bark");
}

/* Adding a static method to the Dog constructor function. */
Dog.diet = function () {
  return "carnivore";
}


/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

module.exports = Dog;