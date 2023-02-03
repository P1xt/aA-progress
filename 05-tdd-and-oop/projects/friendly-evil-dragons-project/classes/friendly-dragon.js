const Dragon = require("./dragon");

/* FriendlyDragon is a subclass of Dragon. It has a constructor that takes in a name, color, lifeGoals,
and friend. It also has two methods: hasLifeGoals and helpsPeople */
class FriendlyDragon extends Dragon {
  constructor(name, color, lifeGoals, friend) {
    super(name, color);
    this.lifeGoals = lifeGoals;
    this.friend = friend;
  }

  /**
   * The function hasLifeGoals() is a method of the class Person. It takes no arguments. It iterates
   * through the array lifeGoals and prints out each element of the array
   */
  hasLifeGoals() {
    this.lifeGoals.forEach(next => console.log(`${this.name} likes to ${next}`));
  }
  /**
   * It returns a string that says the name of the person and that they help their friend.
   * 
   * Returns:
   *   `${this.name} helps their friend ${this.friend}`
   */
  helpsPeople() {
    return `${this.name} helps their friend ${this.friend}`;
  }
}

try {
  module.exports = FriendlyDragon;
} catch {
  module.exports = null;
}