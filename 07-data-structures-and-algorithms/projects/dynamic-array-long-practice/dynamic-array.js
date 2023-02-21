/* We have an array that we can add and remove elements from the beginning and end of, and we can read
from and write to any index in the array */
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
   * If the length of the array is equal to the capacity, then we resize the array. Then we add the
   * value to the end of the array and increment the length
   * @param val - the value to be added to the end of the array
   */
  push(val) {
    if (this.length === this.capacity) {
      this.resize();
    }
    this.data[this.length] = val;
    this.length++;
  }


  /**
   * We're going to return the last element of the array, and then decrement the length of the array by
   * 1
   * @returns The last element in the array.
   */
  pop() {
    // make sure to not pop off an empty array
    if (this.length < 1) return undefined;
    this.length--;
    return this.data[this.length];
  }

  /**
   * We're going to take the first element of the array and store it in a variable called result. Then
   * we're going to loop through the array and shift all the elements to the left by one. Then we're
   * going to return the result
   * @returns The first element of the array.
   */
  shift() {
    // make sure to not shift off an empty array
    if (this.length < 1) return undefined;

    const result = this.data[0];

    for (let i = 1; i <= this.length - 1; i++) {
      this.data[i - 1] = this.data[i];
    }
    this.data[this.length] = undefined;
    this.length--;

    return result;
  }

  /**
   * We're going to loop through the array starting at the end and move each element one index to the
   * right. Then we're going to set the first element to the value we want to add
   * @param val - the value to be added to the beginning of the array
   */
  unshift(val) {
    if (this.length === this.capacity) {
      this.resize();
    }

    for (let i = this.length - 1; i >= 0; i--) {
      this.data[i + 1] = this.data[i];
    }
    this.data[0] = val;
    this.length++;
  }

  /**
   * We loop through the array and check if the current element is equal to the value we are looking
   * for. If it is, we return the index at which the element is found. If the element is never found,
   * we return -1
   * @param val - The value to search for
   * @returns The index of the value in the array.
   */
  indexOf(val) {
    for (let i = 0; i < this.length; i++) {
      if (this.data[i] === val) {
        return i;
      }
    }
    return -1;
  }

  /**
   * We create a new array with double the capacity of the old array, copy all the elements from the
   * old array to the new array, and then set the data property of the queue to the new array
   */
  resize() {
    this.capacity *= 2;
    const newArray = new Array(this.capacity);
    for (let i = 0; i < this.data.length; i++) {
      newArray[i] = this.data[i]
    }
    this.data = newArray;
  }

}


module.exports = DynamicArray;