// Node class is implemented for you, no need to look for bugs here!
/* A DoublyLinkedNode is a node that has a value, a next pointer, and a prev pointer. */
class DoublyLinkedNode {
  constructor(val) {
    this.value = val;
    this.next = null;
    this.prev = null;
  }
}

/* The above class creates a doubly linked list. */
class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  /**
   * Adds a new node to the head of the linked list
   * @param value - the value of the node to be added
   */
  addToHead(value) {
    // There are bugs in this method! Fix them!!!
    // Write your hypothesis on the time complexity of this method here

    // Add node of val to head of linked list
    const newNode = new DoublyLinkedNode(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }

    this.length++;

    // Write your hypothesis on the time complexity of this method here
    // O(1) - no traversal necessary
  }

  /**
   * Adds a new node to the end of the list
   * @param value - the value to add to the end of the list
   */
  addToTail(value) {
    const newNode = new DoublyLinkedNode(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;

    // Write your hypothesis on the time complexity of this method here
    // O(1) - no traversal necessary
  }

  /**
   * Removes the first node from the list.
   * @returns The value of the removed node.
   */
  removeFromHead() {
    if (this.head === null) {
      return undefined;
    }

    const removedNode = this.head;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else if (this.length === 2) {
      this.head = this.tail;
    } else if (this.length > 2) {
      this.head = this.head.next;
      this.head.prev.next = null;
      this.head.prev = null;
    }

    this.length--;
    return removedNode.value;

    // Write your hypothesis on the time complexity of this method here
    // O(1) - no traversal necessary  
  }

  /**
   * Removes the last node from the list.
   * @returns The value of the removed node.
   */
  removeFromTail() {
    if (this.tail === null) {
      return undefined;
    }

    const removedNode = this.tail;

    if (this.length === 1) {
      this.tail = null;
      this.head = null;
    } else if (this.length === 2) {
      this.tail = this.head;
    } else if (this.length > 2) {
      this.tail = this.tail.prev;
      this.tail.next.prev = null;
      this.tail.next = null;
    }

    this.length--;
    return removedNode.value;

    // Write your hypothesis on the time complexity of this method here
    // O(1) - no traversal necessary
  }

  /**
   * It returns the value of the head node.
   * @returns The value of the head node.
   */
  peekAtHead() {
    if (this.head === null) return undefined;
    return this.head.value;
    // Write your hypothesis on the time complexity of this method here
    // O(1) - no traversal necessary
  }

  /**
   * Returns the value of the last node in the list
   * @returns The value of the tail node
   */
  peekAtTail() {
    if (this.tail === null) return undefined;
    return this.tail.value;

    // Write your hypothesis on the time complexity of this method here
    // O(1) - no traversal necessary
  }
}

module.exports = {
  DoublyLinkedList,
  DoublyLinkedNode
}
