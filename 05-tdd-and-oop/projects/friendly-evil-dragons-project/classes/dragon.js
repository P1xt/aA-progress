
/* A class is a blueprint for creating objects */
class Dragon {
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }

  /**
   * The function breathesFire() returns a string that says the name of the dragon and that it breathes
   * fire everywhere
   * 
   * Returns:
   *   The string `${this.name} breathes fire everywhere! BURN!!!!`
   */
  breathesFire() {
    return `${this.name} breathes fire everywhere! BURN!!!!`
  }

  /**
   * It takes in an array of dragons, and returns an array of their names
   * 
   * Args:
   *   dragons: ...dragons
   * 
   * Returns:
   *   ['Smaug', 'Trogdor', 'Bubba']
   */
  static getDragons(...dragons) {
    return [...dragons].map(dragon => dragon.name);
  }
}
/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Dragon;
} catch {
  module.exports = null;
}