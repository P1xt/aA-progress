class Character {

  constructor(name, description, currentRoom) {
    this.name = name;
    this.description = description;
    this.currentRoom = currentRoom;
    this.items = [];
    this.strength = 10;
    this.health = 100;
  }

  /**
   * Apply damage to the character, and if the character's health is zero, call the die() function.
   * 
   * Args:
   *   amount: The amount of damage to apply to the entity.
   */
  applyDamage(amount = this.strength) {
    this.health -= amount;
    console.log(`${this.name}'s health is now ${this.health}`);
    if (this.health == 0) {
      this.die();
    }
  }


  /**
   * If the player's health drops to 0, the player dies and all of their items are dropped in the room
   * they died in
   */
  die() {
    console.log("Your health dropped to 0 - You've died!")
    this.currentRoom.items = [...this.items];
    this.currentRoom = null
  }

}

module.exports = {
  Character,
};