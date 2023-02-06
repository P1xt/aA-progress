/* A Car has a speed, and can be driven to a new speed. */
class Car {
  constructor() {
    this.speed = 0;
  }

  /* A function that takes a newSpeed as an argument and sets the speed of the car to that newSpeed. */
  drive = newSpeed => this.speed = newSpeed;
}

/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

try {
  module.exports = Car;
} catch {
  module.exports = null;
}