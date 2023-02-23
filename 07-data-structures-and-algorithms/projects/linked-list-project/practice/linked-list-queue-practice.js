// Basic implementation of Nodes and Linked List for you to use

class SinglyLinkedNode {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor(head = null) {
    this.head = head;
  }

  /**
   * We create a new node, and if the head is null, we set the head to the new node. Otherwise, we
   * traverse the list until we find the last node, and set the last node's next to the new node
   * @param val - the value of the node to be added
   * @returns The head of the linked list.
   */
  addToTail(val) {
    let currentNode = new SinglyLinkedNode(val);

    if (!this.head) {
      this.head = currentNode;
      return this.head;
    }

    let curr = this.head;
    while (curr.next) {
      curr = curr.next;
    }

    curr.next = currentNode;
    return this.head;
  }

  /**
   * We start at the head and traverse the list until we reach the end, incrementing a counter each
   * time we move to the next node
   * @returns The length of the list
   */
  listLength() {
    if (this.head === null) return 0;
    let length = 1;
    let currentNode = this.head;
    while (currentNode.next !== null) {
      currentNode = currentNode.next;
      length++;
    }
    return length;
    // Returns the length of the list
    // Implement in O(n) and in O(1) time complexity
  }

  /**
   * We start at the head, add the head's value to a sum variable, and then iterate through the list,
   * adding each node's value to the sum variable
   * @returns The sum of all the nodes in the linked list.
   */
  sumOfNodes() {
    if (this.head === null) return 0;
    let sum = this.head.value;
    let currentNode = this.head;
    while (currentNode.next !== null) {
      currentNode = currentNode.next;
      sum += currentNode.value;
    }
    return sum;

    // O(n) 
  }

  /**
   * We start at the head, add the value to a sum variable, increment a length variable, and then
   * traverse the list until we reach the tail, adding each value to the sum and incrementing the
   * length, and then we return the sum divided by the length
   * @returns The average value of the linked list
   */
  averageValue() {
    if (this.head === null) return 0;
    let sum = this.head.value;
    let length = 1;
    let currentNode = this.head;
    while (currentNode.next !== null) {
      currentNode = currentNode.next;
      sum += currentNode.value;
      length++;
    }
    return sum / length;

    // O(n) 
  }

  /**
   * We start at the head and traverse the list until we reach the nth node
   * @param n - the nth node to find
   * @returns The value of the nth node from the end of the linked list.
   */
  findNthNode(n) {
    if (this.head === null) return 0;
    let length = 1;
    let currentNode = this.head;
    while (length <= n) {
      currentNode = currentNode.next;
      length++;
    }
    console.log(currentNode.value)
    return currentNode;

    // O(n) 
  }

  /**
   * It finds the middle node of the linked list.
   * @returns The middle node
   */
  findMid() {
    // Returns the middle node
    const length = this.listLength();
    const mid = length % 2 === 0 ? (length / 2) - 1 : Math.floor(length / 2);

    return this.findNthNode(mid);

    // Write your hypothesis on the time complexity of this method here
    // O(n)
  }

  /**
   * We create a new list, then iterate through the original list, adding each node to the new list in
   * reverse order
   * @returns A new reversed version of the linked list
   */
  reverse() {
    // Returns a new reversed version of the linked list
    const result = new SinglyLinkedList();
    const length = this.listLength();

    for (let i = length - 1, currentNode; i >= 0; i--) {
      currentNode = this.findNthNode(i);
      result.addToTail(currentNode.value);
    }

    return result;

    // Write your hypothesis on the time complexity of this method here
    // O(n^2) - addToTail loops through whole list inside loop
  }

  reverseInPlace() {
    // Reverses the linked list in-place
    let revList = this.reverse();

    this.head = null // make empty
    this.length = 0
    // copy     

    let currR = revList.head
    let curr = this.addToTail(currR.value)
    while (currR.next) {
      currR = currR.next;
      curr = this.addToTail(currR.value);
    }

    // Write your hypothesis on the time complexity of this method here
    // O(n^2) - addToTail loops through whole list, inside while
  }
}

class DoublyLinkedNode {
  constructor(val) {
    this.value = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  /**
   * We create a new node, and if there is no head, we set the head and tail to be the new node.
   * Otherwise, we set the next property of the tail to be the new node, and the previous property of
   * the new node to be the tail. Then we set the tail to be the new node
   * @param val - the value of the node to be added
   * @returns The head of the list.
   */
  addToTail(val) {
    let currentNode = new DoublyLinkedNode(val);

    if (!this.head) {
      this.head = currentNode;
      this.tail = currentNode;
      return this.head;
    }

    this.tail.next = currentNode;
    currentNode.prev = this.tail;
    this.tail = currentNode;

    return this.head;
    // O(1)
  }

  /**
   * It finds the middle node of a linked list.
   * @returns The middle node of the linked list.
   */
  findMid() {
    let length = 0;
    let currentNode = this.head;

    while (currentNode) {
      length++;
      currentNode = currentNode.next;
    }

    const mid = length % 2 === 0 ? (length / 2) - 1 : Math.floor(length / 2);
    currentNode = this.head;

    for (let i = 1; i <= mid; i++) {
      currentNode = currentNode.next;
    }

    return currentNode;
    // Write your hypothesis on the time complexity of this method here
    // O(n)
  }

  /**
   * It reverses the order of the linked list.
   * @returns A new DoublyLinkedList with the values in reverse order.
   */
  reverse() {
    const result = new DoublyLinkedList();

    let current = this.tail;

    while (current) {
      result.addToTail(current.value)
      current = current.prev;
    }

    return result;
    // Write your hypothesis on the time complexity of this method here
    // O(n)
  }

  /**
   * We iterate through the list, adding each node to the tail, then we iterate through the list again,
   * removing each node from the head
   */
  reverseInPlace() {
    // Reverses the linked list in-place
    let length = 0;
    let lastNode = this.tail

    while (lastNode) {
      this.addToTail(lastNode.value);
      lastNode = lastNode.prev;
      length++;
    }

    let firstNode = this.head;

    for (let i = 0; i < length; i++) {
      const next = firstNode.next;
      firstNode.prev = null;
      firstNode.next = null;
      this.head = next;
      firstNode = next;
    }

    this.head.prev = null;
    // Write your hypothesis on the time complexity of this method here
    // O(n)
  }
}

module.exports = {
  SinglyLinkedNode,
  SinglyLinkedList,
  DoublyLinkedNode,
  DoublyLinkedList
}
