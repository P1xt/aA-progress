const Dragon = require("./dragon");

/* The EvilDragon class extends the Dragon class and adds the properties evilDoings and nemesis. It
also adds the methods dontInviteThemOverForDinner() and burnsNemesis() */
class EvilDragon extends Dragon {
  constructor(name, color, evilDoings, nemesis) {
    super(name, color);
    this.evilDoings = evilDoings;
    this.nemesis = nemesis;
  }

  /**
   * For each item in the array, log the name of the person and the evil doing.
   */
  dontInviteThemOverForDinner() {
    this.evilDoings.forEach(next => console.log(`${this.name} will ${next}`));
  }

  /**
   * The function burnsNemesis() returns a string that uses the name and nemesis properties of the
   * object
   * 
   * Returns:
   *   The string `${this.name} destroys ${this.nemesis} with fire! WHOOOSH!!!`
   */
  burnsNemesis() {
    return `${this.name} destroys ${this.nemesis} with fire! WHOOOSH!!!`;
  }
}

try {
  module.exports = EvilDragon;
} catch {
  module.exports = null;
}