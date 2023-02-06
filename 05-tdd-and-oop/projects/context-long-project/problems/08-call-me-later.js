
/* The CallCenter class has a name property and two methods, sayHello and callMeLater. */
class CallCenter {
  constructor(name) {
    this.name = name;
  }

  /**
   * The sayHello function is a method of the Person class. It is a function that is called on an
   * instance of the Person class
   */
  sayHello() {
    console.log(`Hello this is ${this.name}`);
  }

  /**
   * "Call the sayHello function after a delay."
   * 
   * The setTimeout function is a built-in JavaScript function that calls a function after a delay
   * 
   * Args:
   *   delay: The number of milliseconds to wait before calling the function.
   */
  callMeLater(delay) {
    setTimeout(this.sayHello.bind(this), delay);
  }
}

/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

try {
  module.exports = CallCenter;
} catch {
  module.exports = null;
}