/* The Player class represents the player in the game. It has a name, a current room, and a list of
items. It has methods for moving, taking items, dropping items, and eating items */
class Player {

  constructor(name, startingRoom) {
    this.name = name;
    this.currentRoom = startingRoom;
    this.items = [];
  }

  move(direction) {

    const nextRoom = this.currentRoom.getRoomInDirection(direction);

    // If the next room is valid, set the player to be in that room
    if (nextRoom) {
      this.currentRoom = nextRoom;

      nextRoom.printRoom(this);
    } else {
      console.log("You cannot move in that direction");
    }
  }

  printInventory() {
    if (this.items.length === 0) {
      console.log(`${this.name} is not carrying anything.`);
    } else {
      console.log(`${this.name} is carrying:`);
      for (let i = 0; i < this.items.length; i++) {
        console.log(`  ${this.items[i].name}`);
      }
    }
  }

  takeItem(itemName) {
    const item = this.currentRoom.getItemByName(itemName);
    this.items.push(item);
  }

  dropItem(itemName) {
    const item = this.items.filter(next => next.name === itemName)[0];
    this.items = this.items.filter(next => next.name !== itemName);

    if (item) {
      this.currentRoom.catchDroppedItem(item);
    }
  }

  eatItem(itemName) {
    const item = this.getItemByName(itemName);
    if (item.isFood) {
      this.items = this.items.filter(next => next.name !== itemName);
    }

  }

  getItemByName(name) {
    return this.items.filter(item => name === item.name)[0];
  }
}

module.exports = {
  Player,
};
