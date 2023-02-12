class DynamicArray {

  constructor(defaultSize = 4) {
    this.data = new Array(defaultSize);
    this.capacity = defaultSize;
    this.length = 0
  }

  /**
   * It returns the value of the data property at the index passed in as an argument
   * @param index - The index of the element you want to read from the array.
   * @returns The value of the data at the index.
   */
  read(index) {
    return this.data[index];
  }

  /**
   * Add a new value to the beginning of the array
   * @param val - the value to be added to the beginning of the array
   */
  unshift(val) {
    // if the array isn't big enough to add another
    // member without overflowing
    // double the size, then shift every existing
    // value to the right and add the new value
    // to the start
    if (this.length === this.capacity) {
      this.capacity *= 2;
      const newArray = newArray(this.capacity);
      newArray[0] = val;
      for (let i = 0; i < this.data.length; i++) {
        newArray[i + 1] = data[i];
      }
      this.data = newArray;
      // if there IS enough space, just shift everything
      // to the right and add the new value to the start
    } else {
      for (let i = this.length; i > 0; i--) {
        this.data[i] = this.data[i - 1];
      }
      this.data[0] = val;
    }
    // be sure to increment length because not all
    // memory locations in our allocated array
    // necessarily have data in them, we need to 
    // know when the data ends
    this.length++;
  }

}


module.exports = DynamicArray;