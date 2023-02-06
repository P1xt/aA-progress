const Calculator = require("./02-calculator");

/* FancyCalculator is a subclass of Calculator that has a setTotal method, a squared method, and a
modulo method. */
class FancyCalculator extends Calculator {
  constructor() {
    super();
  }

  /**
   * The setTotal function takes in a newTotal parameter and sets the total property to the newTotal
   * parameter
   * 
   * Args:
   *   newTotal: The new total to set the total to.
   * 
   * Returns:
   *   The total is being returned.
   */
  setTotal(newTotal) {
    this.total = newTotal;
    return this.total;
  }

  /**
   * The squared function takes the total property of the object and multiplies it by itself
   * 
   * Returns:
   *   The total is being returned.
   */
  squared() {
    this.total *= this.total;
    return this.total;
  }

  /**
   * This function takes a number as an argument and assigns the remainder of this.total divided by the
   * given number to this.total.
   * 
   * Args:
   *   num: The number to divide the total by.
   * 
   * Returns:
   *   The remainder of the total divided by the number.
   */
  modulo(num) {
    this.total %= num;
    return this.total;
  }
}
/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

try {
  module.exports = FancyCalculator;
} catch {
  module.exports = null;
}