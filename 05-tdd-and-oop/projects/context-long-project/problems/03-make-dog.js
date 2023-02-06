
/* A Dog has a name, can speak, can change its name, and can be made into a Jet. */
class Dog {
  constructor(name) {
    this.name = name;
  }

  /**
   * The function speak() is a method of the object person. It takes one parameter, word, and returns a
   * string that is the name of the person, followed by the word they are saying
   * 
   * Args:
   *   word: A string representing the sound the animal makes
   * 
   * Returns:
   *   the string `${this.name} says `
   */
  speak(word) {
    return `${this.name} says ${word}`;
  }

  /**
   * The function changeName takes in a parameter called name and sets the name property of the object
   * to the value of the name parameter
   * 
   * Args:
   *   name: The name of the function.
   */
  changeName(name) {
    this.name = name;
  }

  /**
   * MakeJet() returns a new Dog object with the name "Jet"
   * 
   * Returns:
   *   A new instance of Dog with the name "Jet"
   */
  static makeJet() {
    return new Dog("Jet");
  }
}

/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

try {
  module.exports = Dog;
} catch {
  module.exports = null;
}