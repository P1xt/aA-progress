
/* The PartyPlanner class has a guestList property that is an array of strings. It has a throwParty
method that returns a string that says "Welcome to the party" and lists the guests. It also has an
addToGuestList method that adds a guest to the guestList */
class PartyPlanner {
  constructor(guestList = []) {
    this.guestList = guestList;
  }

  /**
   * If the guest list is empty, return a string saying that you need to add people to the guest list,
   * otherwise return a string saying welcome to the party and list the guests
   * 
   * Returns:
   *   a string that says "Welcome to the party" and the names of the guests in the guest list.
   */
  throwParty() {
    if (this.guestList.length === 0) {
      return `Gotta add people to the guest list`;
    } else {
      return `Welcome to the party ${this.guestList.join(' and ')}`;
    }
  }

  /**
   * Add a guest to the guest list.
   * 
   * Args:
   *   guest: The name of the guest to add to the guest list.
   */
  addToGuestList(guest) {
    this.guestList.push(guest);
  }
}

/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

try {
  module.exports = PartyPlanner;
} catch {
  module.exports = null;
}