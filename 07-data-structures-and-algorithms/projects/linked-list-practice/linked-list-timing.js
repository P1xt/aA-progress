const LinkedList = require('./linked-list.js');
const DoublyLinkedList = require('./doubly-linked-list.js');

/*
Construct a timing test to verify the time complexities of `addToHead` and
`addToTail` for both singly and doubly linked lists.
*/

const count = 100000;
let doublyLinkedList, linkedList, start, stop;
let DLLHead = [];
let DLLTail = [];
let LLHead = [];
let LLTail = [];
for (let idx = 0; idx < 5; idx++) {

  // Doubly linked list
  // Head
  doublyLinkedList = new DoublyLinkedList();
  start = Date.now();
  for (i = 0; i < count; i++) {
    doublyLinkedList.addToHead(i);
  }
  stop = Date.now();
  DLLHead[idx] = stop - start;
  console.log(`DLL addToHead: ${DLLHead[idx]}  ms`);

  // TAIL
  doublyLinkedList = new DoublyLinkedList();
  start = Date.now();
  for (i = 0; i < count; i++) {
    doublyLinkedList.addToTail(i);
  }
  stop = Date.now();
  DLLTail[idx] = stop - start;
  console.log(`DLL addToTail: ${DLLTail[idx]}  ms`);

  // Linked List
  // HEAD
  linkedList = new LinkedList();
  start = Date.now();
  for (i = 0; i < count; i++) {
    linkedList.addToHead(i)
  }
  end = Date.now()
  LLHead[idx] = end - start;
  console.log(`LL addToHead: ${LLHead[idx]}  ms`);

  // TAIL
  linkedList = new LinkedList();
  start = Date.now();
  for (i = 0; i < count; i++) {
    linkedList.addToTail(i)
  }
  end = Date.now()
  LLTail[idx] = end - start;
  console.log(`LL addToTail: ${LLTail[idx]}  ms`);
}

console.log(`DLLHeadTotal: ${DLLHead.reduce((a, b) => a + b, 0)}`);
console.log(`DLLTailTotal: ${DLLTail.reduce((a, b) => a + b, 0)}`);
console.log(`LLHeadTotal: ${LLHead.reduce((a, b) => a + b, 0)}`);
console.log(`LLTailTotal: ${LLTail.reduce((a, b) => a + b, 0)}`);

/**
General result - adding to head or tail of doubly linked list
and adding to head of linked list are relatively inexpensive operations
but for any volume, adding to the tail of a singly linked list
is prohibitve.

DLL addToHead: 14  ms
DLL addToTail: 11  ms
LL addToHead: 6  ms  
LL addToTail: 8807  ms
DLL addToHead: 31  ms
DLL addToTail: 31  ms
LL addToHead: 0  ms
LL addToTail: 8723  ms
DLL addToHead: 5  ms
DLL addToTail: 2  ms
LL addToHead: 6  ms 
LL addToTail: 8737  ms
DLL addToHead: 1  ms
DLL addToTail: 1  ms
LL addToHead: 0  ms 
LL addToTail: 8591  ms
DLL addToHead: 6  ms
DLL addToTail: 1  ms
LL addToHead: 1  ms 
LL addToTail: 8585  ms
DLLHeadTotal: 57  
DLLTailTotal: 46  
LLHeadTotal: 13   
LLTailTotal: 43443
 */