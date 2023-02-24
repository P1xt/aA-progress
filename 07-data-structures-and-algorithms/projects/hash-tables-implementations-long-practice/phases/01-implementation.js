class KeyValuePair {
  constructor(key, value, next = null) {
    this.key = key;
    this.value = value;
    this.next = next;
  }
}

/* "The HashTable class is a hash table that uses a
linked list to handle collisions."

The HashTable class is a hash table that uses a linked list to handle collisions */
class HashTable { // get O(1), set O(1), deleteKey O(1)

  constructor(numBuckets = 8) {
    this.capacity = numBuckets;
    this.count = 0;
    this.data = new Array(this.capacity).fill(null);
  }

  /**
   * It takes a string and returns a number
   * @param key - The key to be hashed.
   * @returns The hash value of the key.
   */
  hash(key) {
    let hashValue = 0;

    for (let i = 0; i < key.length; i++) {
      hashValue += key.charCodeAt(i);
    }

    return hashValue;
  }


  /**
   * "The hashMod function takes a key and returns the remainder of the key divided by the capacity of
   * the hash table."
   * 
   * The hashMod function is used to determine the index of the array where the key-value pair will be
   * stored
   * @param key - the key to be hashed
   * @returns The hash of the key modulo the capacity of the hash table.
   */
  hashMod(key) {
    return this.hash(key) % this.capacity;
  }


  /**
   * If there's no existing record at the index, create a new one. If there is, iterate through the
   * linked list until you find the record with the matching key, and update its value
   * @param key - the key to be hashed
   * @param value - the value to be inserted
   */
  insert(key, value) {
    const index = this.hashMod(key);

    // check to make sure there's not an existing record at the index
    // if there is, iterate through it to the end
    let existing = this.data[index];
    while (existing && existing.key !== key) {
      existing = existing.next
    }

    if (existing) {
      existing.value = value
    } else {
      this.data[index] = new KeyValuePair(key, value, this.data[index]);
      this.count++;
    }

  }


  /**
   * If the key exists, return the value, otherwise return undefined.
   * @param key - The key to be searched for
   * @returns The value of the key.
   */
  read(key) {
    let next = this.data[this.hashMod(key)];

    while (next) {
      if (next.key === key) {
        return next.value
      }
      next = next.next;
    }

    return undefined;
  }



  /**
   * We create a new array with double the capacity of the old array, and then we re-insert all of the
   * old array's elements into the new array
   */
  resize() {
    let data = [...this.data];
    let count = this.count;

    this.capacity = this.capacity * 2;
    this.data = new Array(this.capacity).fill(null);
    for (let i = 0; i < data.length; i++) {
      let next = data[i];
      while (next) {
        this.insert(next.key, next.value);
        next = next.next;
      }
      this.count = count;
    }
  }


  /**
   * If the key exists, we find the index of the key, then we loop through the linked list at that
   * index until we find the key, then we remove the node from the linked list
   * @param key - the key to be deleted
   * @returns The value of the key that was deleted.
   */
  delete(key) {
    let index = this.hashMod(key);
    let node = this.data[index];
    let prev;

    // bail if the key doesn't exist
    if (!this.read(key)) {
      return 'Key not found';
    }

    // loop through the node till we find the key
    while (node !== null && !(key === node.key)) {
      prev = node;
      node = node.next
    }

    if (prev) {
      prev.next = node.next;
    } else {
      this.data[index] = node.next
    }
    this.count--;
  }
}



module.exports = HashTable;