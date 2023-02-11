/* A Person has a name and age, can say hello, visit another person, switch visits with another person,
update their name and age, and try to update their name and age */
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  /**
   * The function sayHello() is a method of the class Person. It takes no arguments and returns a
   * string
   * @returns The result of the function is the string "Hi, I'm ${this.name}"
   */
  sayHello() {
    const result = `Hi, I'm ${this.name}`;
    console.log(result);
    return result;
  }

  /**
   * The visit function takes in an object and returns a string that says the name of the person who
   * called the function visited the name of the person passed in as an argument.
   * @param other - The object that this object is going to visit.
   * @returns The string `${this.name} visited ${other.name}`
   */
  visit(other) {
    return `${this.name} visited ${other.name}`;
  }

  /**
   * "If the other object is a subclass of this class, then call the visit function of the other object
   * with this object as the argument."
   * 
   * The above function is a bit confusing, so let's break it down
   * @param other - The other object to visit.
   * @returns The other.visit(this) is returning the result of the visit method of the other object.
   */
  switchVisit(other) {
    return other.visit(this);
  }

  /**
   * The function takes an object as an argument, and if the object has a name and age property, it
   * updates the name and age properties of the Person object
   * @param newPerson - This is the object that will be used to update the person.
   */
  update(newPerson) {
    if (typeof newPerson !== 'object') {
      throw TypeError("Type must be an object");
    }
    if (!newPerson.hasOwnProperty("name")) {
      throw TypeError("Input must include a name property");
    }
    if (!newPerson.hasOwnProperty("age")) {
      throw TypeError("Input must include a age property");
    }
    this.name = newPerson.name;
    this.age = newPerson.age;
  }

  /**
   * If the update function throws an error, return false, otherwise return true
   * @param newPerson - The new person object to be updated.
   * @returns The return value is a boolean.
   */
  tryUpdate(newPerson) {
    try {
      this.update(newPerson);
    } catch (error) {
      return false;
    }
    return true;
  }

  /**
   * Given an array of people, return an array of greetings.
   * @param people - an array of Person objects
   * @returns An array of strings.
   */
  static greetAll(people) {
    const result = [];
    for (let i = 0; i < people.length; i++) {
      result.push(people[i].sayHello());
    }
    return result;
  }
}
const person = new Person("Mai", 38);
const person2 = new Person("Erin", 42);
Person.greetAll([person, person2]);
module.exports = Person;