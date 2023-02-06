/* The Calculator class has four methods, each of which takes a number as an argument and modifies the
total property of the class. */
class Calculator {
  constructor() {
    this.total = 0;
  }

  /* A method that takes a number as an argument and modifies the total property of the class. */
  add = num => this.total += num;

  /* A method that takes a number as an argument and modifies the total property of the class. */
  subtract = num => this.total -= num;

  /* A method that takes a number as an argument and modifies the total property of the class. */
  divide = num => this.total /= num;

  /* A method that takes a number as an argument and modifies the total property of the class. */
  multiply = num => this.total *= num;
}


/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

try {
  module.exports = Calculator;
} catch {
  module.exports = null;
}