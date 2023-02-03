const { Item } = require("./item");

/* Food is an Item that is also food */
class Food extends Item {
  constructor(name, description) {
    super(name, description);
    this.isFood = true;
  }

}

module.exports = {
  Food,
};
