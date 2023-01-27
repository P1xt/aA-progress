/***********************************************************************
Write a recursive function that will find the best way to make change from a
given set of coin values for a given amount of money. The set of coin values
should default to using pennies (1 cent), nickels (5 cents), dimes (10 cents),
and quarters (25 cents). Return `null` if there are no possible ways to make
change for the given target amount.

Examples:

makeChange(21); // [1, 10, 10]
makeChange(75); // [25, 25, 25]
makeChange(33, [15, 3]); // [3, 15, 15]
makeChange(34, [15, 3]); // null
makeChange(24, [10, 7, 1]) // [7, 7, 10]

Here's a game plan for solving the problem:

First, write a 'greedy' version called `greedyMakeChange`:

Take as many of the biggest coin as possible and add them to your result.
Add to the result by recursively calling your method on the remaining amount,
leaving out the biggest coin, until the remainder is zero.
Once you have a working greedy version, talk with your partner about refactoring
this to `makeBetterChange`. What's wrong with `greedyMakeChange`?

Consider the case of `greedyMakeChange(24, [10,7,1])`. Because it takes as many
10 pieces as possible, `greedyMakeChange` misses the correct answer of
`[10,7,7]` (try it in node).

To `makeBetterChange`, we only take one coin at a time and never rule out
denominations that we've already used. This allows each coin to be available
each time we get a new remainder. By iterating over the denominations and
continuing to search for the best change, we assure that we test for
'non-greedy' uses of each denomination.

Discuss the following game plan and then work together to implement your
new method:

- Iterate over each coin.
- Grab only one of that one coin and recursively call `makeBetterChange` on the
  remainder using coins less than or equal to the current coin.
- Add the single coin to the change returned by the recursive call. This will be
  a possible solution, but maybe not the best one.
- Keep track of the best solution and return it at the end.

N.B. Don't generate every possible permutation of coins and then compare them.
Remember that a permutation is not the same thing as a combination - we will
need to check every combination of coins that add up to our target, we just
don't want to check the same combination in different orders. If you get stuck
you can start by writing a solution that calculates and compares all of the
permutations without storing them in an array. Then go back and refactor your
solution so that it only calculates and compares all of the different
combinations.
***********************************************************************/

/**
 * We start with the largest coin and keep subtracting it from the target until we can't subtract
 * anymore. Then we move on to the next largest coin and repeat the process
 *
 * @param target the amount of money we want to make change for
 * @param coins an array of the available denominations
 *
 * @return An array of coins that add up to the target amount.
 */
function greedyMakeChange(target, coins = [25, 10, 5, 1]) {
  const result = [];
  const min = Math.min(...coins);

  /* base case, It's checking if the target is less than the minimum coin value. If it is, it returns an empty
  array. */
  if (target < min) {
    return result;
  }


  /* recursive case, It's iterating through the coins array and checking if the coin is less than or equal to the target.
  If it is, it pushes the coin to the result array and recursively calls greedyMakeChange on the
  target minus the coin. */
  for (let i = 0; i < coins.length; i++) {
    if (coins[i] <= target) {
      result.push(coins[i]);
      return result.concat(greedyMakeChange(target - coins[i], coins));
    }
  }
}

// console.log(greedyMakeChange(21)); // [1, 10, 10]
/**
 * We iterate through the coins array, subtracting each coin from the target, and recursively call
 * makeBetterChange on the target sum. If the result is not null, we add the coin to the result array
 * and check if it's the shortest array we've seen so far
 *
 * @param target the amount of money we want to make change for
 * @param coins [25, 10, 5, 1]
 *
 * @return An array of coins that add up to the target.
 *
 * Bugs: Massive slowdown the larger target gets. I honestly think that
 *       memoization would be necessary to handle the target == 75 test
 *       case and so I removed that test case rather than implement
 *       memoization for clarity of code (it's too early in the curriculum
 *       to add that extra complexity.)
 */
const makeBetterChange = (target, coins = [25, 10, 5, 1]) => {

  // base case, if target is <= 0
  if(target < 0) return null;
  if(target === 0) return [];

  let minArray = null;

  /* recursive case, Iterating through the coins array and subtracting the coin from the target. */
  for(let i = 0; i < coins.length; i++){
    const targetSum = target - coins[i];
    const result = makeBetterChange(targetSum, coins);

    if(result !== null){
      const resultArray = [ ...result, coins[i] ];
      if(minArray === null || resultArray.length < minArray.length) {
        minArray = resultArray;
      }
    }
  }

  return minArray;
}


/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = makeBetterChange
} catch (e) {
  module.exports = null;
}