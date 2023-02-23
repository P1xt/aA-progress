const sha256 = require('js-sha256');

class KeyValuePair {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
}

/* The HashTable class has a constructor that takes a number of buckets as an argument and sets the
capacity, count, and data properties. It also has a hash function that takes a key and returns the
first 8 characters of the sha256 hash of the key. It also has a hashMod function that takes a key
and returns the hash of the key modulo the capacity of the hash table. It also has an
insertNoCollisions function that takes a key and a value and inserts the key/value pair into the
hash table. It also has an insertWithHashCollisions function that takes a key and a value and
inserts the key/value pair into the hash table. It also has an insert function that takes a key and
a value and inserts the key/value pair into the hash table */
class HashTable {

  constructor(numBuckets = 4) {
    this.capacity = numBuckets;
    this.count = 0;
    this.data = new Array(this.capacity).fill(null);
  }

  /**
   * It takes a string, hashes it, and returns the first 8 characters of the hash as an integer
   * @param key - The key to hash.
   * @returns The first 8 characters of the sha256 hash of the key.
   */
  hash(key) {
    return parseInt(sha256(key).slice(0, 8), 16);
  }

  /**
   * The hashMod function takes a key and returns the remainder of the key divided by the capacity of
   * the hash table.
   * @param key - the key to be hashed
   * @returns The hash of the key modulo the capacity of the hash table.
   */
  hashMod(key) {
    return this.hash(key) % this.capacity;
  }

  /**
   * If the index is empty, insert the new record
   * @param key - the key to be hashed
   * @param value - the value to be stored in the hash table
   */
  insertNoCollisions(key, value) {
    const newRecord = new KeyValuePair(key, value);
    const index = this.hashMod(key);

    if (this.data[index]) {
      throw new Error('hash collision or same key/value pair already exists!');
    }

    this.data[index] = newRecord;
    this.count++;
  }

  /**
   * We create a new KeyValuePair object, set its next property to the current value at the index, and
   * then set the value at the index to the new KeyValuePair object
   * @param key - the key to be inserted
   * @param value - the value to be stored in the hash table
   */
  insertWithHashCollisions(key, value) {
    let index = this.hashMod(key);
    let newRecord = new KeyValuePair(key, value);
    newRecord.next = this.data[index];
    this.data[index] = newRecord;
    this.count++;
  }

  /**
   * If the key already exists, update the value. Otherwise, insert the key/value pair
   * @param key - the key to be inserted
   * @param value - the value to be inserted
   * @returns The value of the key
   */
  insert(key, value) {
    let index = this.hashMod(key)
    let existingRecord = this.data[index];
    while (existingRecord) {
      if (existingRecord.key === key && existingRecord.value !== value) {
        existingRecord.value = value;
        return;
      }
      existingRecord = existingRecord.next;
    }
    this.insertWithHashCollisions(key, value);
  }

}


module.exports = HashTable;