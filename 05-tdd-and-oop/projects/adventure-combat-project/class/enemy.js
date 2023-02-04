const { Character } = require('./character');
const { Player } = require('./player')


/* The Enemy class is a subclass of the Character class. It has a cooldown, items, and an attackTarget.
It has a setPlayer method, a randomRoom method, a randomMove method, a takeSandwich method, an alert
method, a rest method, an attack method, an applyDamage method, and an act method */
class Enemy extends Character {
  constructor(name, description, currentRoom) {
    super(name, description, currentRoom);
    this.cooldown = 3000;
    this.items = [];
    this.attackTarget = null;
  }

  /**
   * This function sets the player to the player that is passed in
   * 
   * Args:
   *   player: The player object that is currently playing the video.
   */
  setPlayer(player) {
    this.player = player;
  }

  /**
   * It takes a key (which is an array of strings) and returns a random room from the current room's
   * exits
   * 
   * Args:
   *   key: The key of the exits object.
   * 
   * Returns:
   *   A random room from the current room's exits.
   */
  randomRoom(key) {
    return this.currentRoom.exits[key[key.length * Math.random() << 0]];
  };

  /**
   * The randomMove function takes the current room's exits and chooses one at random. It then sets the
   * current room to the random room and adds 3 seconds to the cooldown
   */
  randomMove() {
    const key = Object.keys(this.currentRoom.exits);
    this.currentRoom = this.randomRoom(key);
    this.cooldown += 3000;
    this.act()
  }

  /**
   * Take a sandwich from the sandwich maker.
   */
  takeSandwich() {
    let sandwichIdx = this.currentRoom.items.indexOf(sandwich);
    const sandwich = this.currentRoom.items.splice(sandwichIdx, 1);
    if (sandwich) {
      this.items.push(sandwich);
      this.cooldown += 3000;
      console.log("The enemy took your sandwich!");
    }
  }

  // Print the alert only if player is standing in the same room
  alert(message) {
    if (this.player && this.player.currentRoom === this.currentRoom) {
      console.log(message);
    }
  }


  /**
   * It sets a timeout to reset the cooldown after the cooldown time has passed
   */
  rest() {
    const resetCooldown = function () {
      this.cooldown = 0;
      this.act();
    };
    setTimeout(resetCooldown.bind(this), this.cooldown);
  }

  /**
   * If the attackTarget is null, return null. Otherwise, apply damage to the attackTarget and log a
   * message to the console
   * 
   * Returns:
   *   The attack method is being returned.
   */
  attack() {
    if (this.attackTarget === null) return null;

    this.attackTarget.applyDamage(this.strength);
    console.log(`The ${this.name} hits you for ${this.strength} damage.`);
    this.cooldown += 3000;
    this.act();
  }

  /**
   * If the player's health is less than or equal to zero, the player dies. Otherwise, the player's
   * attack target is set to the player and the player acts
   * 
   * Args:
   *   amount: The amount of damage to apply to the enemy.
   */
  applyDamage(amount) {
    this.health -= amount;
    if (this.health <= 0) {
      this.die();
    } else {
      this.attackTarget = this.player;
      this.act();
    }
  }

  /**
   * If the monster is dead, do nothing. If the monster is on cooldown, rest. If the monster has a
   * target, attack. Otherwise, if the monster is bored, scratch its nose. If the monster is hungry,
   * take a sandwich. If the monster is angry, attack the player. Otherwise, move randomly
   */
  act() {
    const rand = Math.floor(Math.random() * 5);

    if (this.health <= 0 || (this.player && this.player.currentRoom != this.currentRoom)) {
      // Do nothing
    } else if (this.cooldown > 0) {
      this.rest();
    }
    else if (this.attackTarget) {
      this.attack();
    }
    else {
      if (rand > 2) {
        this.scratchNose();
      } else if (this.currentRoom.items.length > 0) {
        this.takeSandwich();
      } else if (rand === 1) {
        this.attackTarget = this.player;
        this.act();
      } else {
        this.randomMove();
      }
    }
  }


  /**
   * The scratchNose function alerts the name of the enemy and the fact that it is scratching its nose.
   */
  scratchNose() {
    this.alert(`${this.name} scratches its nose`);
  }


}

module.exports = {
  Enemy,
};