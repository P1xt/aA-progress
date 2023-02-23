const { SinglyLinkedNode } = require("./01-singly-linked-list");

class Queue {

  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  enqueue(value) {
    let newNode = new SinglyLinkedNode(value);
    this.length++;
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      return this.length;
    }

    this.tail.next = newNode;
    this.tail = newNode;

    return this.length;
    // Write your hypothesis on the time complexity of this method here
    // O(1) - no traversal necessary
  }

  dequeue() {
    if (this.length === 0) return null;
    if (this.length === 1) {
      const curNode = this.head;
      this.head = null;
      this.tail = null;
      this.length--;
      return curNode.value;
    }
    const curNode = this.head;
    this.head = this.head.next;
    this.length--;
    return curNode.value;
    // Write your hypothesis on the time complexity of this method here
    // O(1) - no traversal necessary
  }

}

module.exports = {
  Queue,
  SinglyLinkedNode
}
