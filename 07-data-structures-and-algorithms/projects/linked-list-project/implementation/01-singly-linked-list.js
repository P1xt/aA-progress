// Node class is implemented for you, no need to look for bugs here!
class SinglyLinkedNode {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

/* The above class creates a singly linked list. */
class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  /**
   * Adds a node to the head of the linked list
   * @param value - the value of the node to be added
   * @returns The linked list
   */
  addToHead(value) {
    // Add node of val to head of linked list
    const newNode = new SinglyLinkedNode(value, null);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;

    // Write your hypothesis on the time complexity of this method here
    // O(1) - nothing needs to be traversed to add the node
  }

  /**
   * Adds a new node to the end of the list
   * @param value - the value to be added to the end of the list
   * @returns The linked list
   */
  addToTail(value) {

    let newNode = new SinglyLinkedNode(value);
    this.length++;
    if (!this.head) {
      this.head = newNode;
      return this;
    }

    let curr = this.head;
    while (curr.next !== null) {
      curr = curr.next;
    }
    curr.next = newNode;

    return this;
    // Write your hypothesis on the time complexity of this method here
    // O(n) - each element in the list must be traversed to add to end
  }

  /**
   * It removes the first node in the linked list.
   * @returns The removed node
   */
  removeFromHead() {
    if (this.head === null) {
      return undefined;
    }

    const removedNode = this.head;
    this.head = this.head.next;
    this.length--;
    return removedNode;
    // Write your hypothesis on the time complexity of this method here
    // O(1) - no traversal necessary  
  }

  /**
   * It removes the last node from the linked list.
   * @returns The removed node
   */
  removeFromTail() {
    if (this.length === 0) {
      return undefined;
    }

    let currentNode = this.head;
    for (let i = 1; i < this.length - 1; i++) {
      currentNode = currentNode.next;
      console.log(currentNode.value, currentNode.next);
    }
    const removedNode = currentNode.next;
    currentNode.next = null;
    this.length--;

    if (this.length === 0) {
      this.head = null;
    }
    return removedNode;

    // Write your hypothesis on the time complexity of this method here
    // O(n) - has to traverse the entire list to get to the end
  }

  /**
   * Returns the value of the head node
   * @returns The value of the head node
   */
  peekAtHead() {
    if (this.head === null) return undefined;
    return this.head.value;

    // Write your hypothesis on the time complexity of this method here
    // O(1) - no traversal necessary
  }

  /**
   * Prints out the values of the linked list
   */
  print() {
    let currentNode = this.head;
    for (let i = 1; i <= this.length; i++) {
      console.log(currentNode.value);
      currentNode = currentNode.next;
    }

    // Write your hypothesis on the time complexity of this method here
    // O(n) - has to traverse the entire list to get to the end
  }
}

module.exports = {
  SinglyLinkedList,
  SinglyLinkedNode
}
