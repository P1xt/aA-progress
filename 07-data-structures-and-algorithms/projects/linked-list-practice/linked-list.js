class LinkedListNode {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    // Default to empty
    this.head = null;
    this.length = 0;
  }

  addToHead(value) {
    const newNode = new LinkedListNode(value, null);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
  }

  addToTail(value) {
    const newNode = new LinkedListNode(value, null);
    this.length++;

    if (this.head === null) {
      this.head = newNode;
      return;
    }

    let currentNode = this.head;

    while (currentNode.next !== null) {
      currentNode = currentNode.next;
    }

    currentNode.next = newNode;
  }

  // You can use this function to help debug
  print() {
    let current = this.head;

    while (current) {
      process.stdout.write(`${current.value} -> `);
      current = current.next;
    }

    console.log("NULL");
  }
}

module.exports = LinkedList;