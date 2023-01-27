/***********************************************************************
Write a function named: coinCollector(numCoins). The coinCollector function will
accept a number of coins (greater that 0) to collect when it is first invoked
and will return a function. The function returned by coinCollector can then be
invoked numCoins number of times passing in one coin (represented by an int) to
be added to the collection.

Once the function returned by coinCollector has the numCoins required it will
return an array of the coins it has gathered.

Example 1:
  let oneCoin = coinCollector(1); // returns a function
  console.log(oneCoin(10)); // prints [10]

Example 2:
  let twoCoins = coinCollector(2); // returns a function
  twoCoins(25); // returns a function
  console.log(twoCoins(10)); // prints [25, 10]

Example 3:
  let threeCoins = coinCollector(3); // returns a function
  threeCoins(25); // returns a function
  threeCoins(5); // returns a function
  console.log(threeCoins(10)); // prints [ 25, 5, 10 ]

***********************************************************************/

/**
 * It returns a function that takes a coin and adds it to a collection until the collection has a
 * certain number of coins.
 *
 * Returns:
 *   A function that takes in a number and returns an array of numbers.
 */
const coinCollector = numCoins => {
  const collection = [];

/* Returning a function that takes in a number and returns an array of numbers. */
  return getNextCoin = next => {
    // only want to add another coin if we don't have enough
    if (collection.length < numCoins) {
      collection.push(next);
    }

    // once we have enough, return the collection
    if (collection.length >= numCoins) {
      return collection;
    }
  }
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = coinCollector;
} catch (e) {
  // catch the ref err
  module.exports = null;
}
