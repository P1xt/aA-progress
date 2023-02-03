/* The Item class is a blueprint for creating objects that have a name and a description. */
class Item {

  constructor(name, description) {
    this.name = name;
    this.description = description;
  }

}

module.exports = {
  Item,
};
