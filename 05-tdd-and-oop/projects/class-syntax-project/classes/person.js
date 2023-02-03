/* "A Person class that has a constructor, an instance method, and a static method."

The constructor is a method that is called when a new instance of the class is created. It takes
three arguments: firstName, lastName, and age. It sets the values of the instance's firstName,
lastName, and age properties to the values of the arguments */
class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  /**
   * The function introduce() is a method of the object person. It prints a message to the console
   */
  introduce() {
    console.log(`Hi, I'm ${this.firstName} ${this.lastName}, and I'm ${this.age} years old.`);
  }

  /**
   * IntroducePeople takes an array of Person class instances as an argument and calls the introduce
   * method on each of them.
   * 
   * Args:
   *   people: An array of Person class instances.
   */
  static introducePeople(people) {
    if (!Array.isArray(people)) throw Error("introducePeople only takes an array as an argument.");
    
    people.forEach(person => {
      if (person instanceof Person) {
        person.introduce();
      } else {
        throw Error("All items in array must be Person class instances.");
      }
    });
  }
}

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Person;
} catch {
  module.exports = null;
}