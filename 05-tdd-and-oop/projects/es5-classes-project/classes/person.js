const Dog = require('./dog');

/**
 * The Person function takes in a name, age, and an array of dogs, and returns an object with the name,
 * age, and dogs properties.
 * 
 * Args:
 *   name: a string
 *   age: a number
 *   dogs: This is the default parameter. If no value is passed in for the dogs parameter, then the
 * default value of an empty array will be used.
 */
function Person(name, age, dogs = []) {
  this.name = name;
  this.age = age;
  this.dogs = dogs;
}

/* Adding a method to the Person prototype. */
Person.prototype.addDog = function (dog) {
  if (!(dog instanceof Dog)) {
    throw new TypeError("Can only add dogs!");
  }
  this.dogs.push(dog);
}

/* Adding a method to the Person prototype. */
Person.prototype.walkDogs = function () {
  this.dogs.forEach((dog) => {
    console.log(`walking ${dog.name}`);
  });
}


/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

module.exports = Person;