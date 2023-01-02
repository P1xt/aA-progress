# JavaScript Fundamentals

## For Loop Translation
>The following function is named aCounter(word). The function takes in a word and returns the number of a's within that word. The function counts both lowercase (a) and uppercase (A). Your job is to translate the following function to use a for loop instead of the while loop it is currently using. If you forget the syntax for a for loop go back and check out the reading.

```javascript
function aCounter(word) {
  let count = 0;
  for (let index = 0; index < word.length; index++) {
    let char = word[index];
    if (char === "a" || char === "A") {
      count += 1;
    }
  }
  return count;
};

console.log(aCounter("apple")); // => 1
console.log(aCounter("appleapple")); // => 2
console.log(aCounter("aAapple")); // => 3
```

## Vowel Counter
Write a function, countVowels(word), that takes in a string word and returns the number of vowels in the word.

Vowels are the letters "a", "e", "i", "o", "u".

```javascript
const countVowels = word => word.match(/[aeiou]/gi).length;
```

## Pig Latin Slice Research
> Pig Latin is a fun take on the English language where you move any consonant cluster from the start of the word to the end of the word; when words begin on a vowel, you simply add "-yay". Vowels are "aeiou".

Write a function pigLatinWord that takes in a word string and translates the word into Pig Latin. For this problem use the String.slice() method. The slice() method extracts a section of a string and returns it as a new string, without modifying the original string.

Hint: Remember the String.includes method!

```javascript
// So the two rules for our version of Pig Latin are:

// 1. For words that start with a vowel, add 'yay' to the end of the word.
// 2. For words that start with a non-vowel, move all letters that come
// **before the first vowel** to the **end of the word** then add 'ay'
const vowels = "aeiouAEIOU";
const isVowel = letter => vowels.includes(letter);

const pigLatinWord = word => {
    if (isVowel(word[0])) {
        return word + "yay";
    }

    let i = 0;
    while (i < word.length && !isVowel(word[i])) {
        i++;
    }
    return word.slice(i) + word.slice(0, i) + "ay";
}

console.log(pigLatinWord("apple")); //=> "appleyay"
console.log(pigLatinWord("eat")); //=> "eatyay"
console.log(pigLatinWord("banana")); //=> "ananabay"
console.log(pigLatinWord("trash")); //=> "ashtray"
```

## Has Three Vowels
> Write a function hasThreeVowels that accepts a string as an argument. The function should return a boolean indicating whether or not the string contains at least three different vowels.

```javascript
const vowels = "aeiouAEIOU";

const hasThreeVowels = word =>
    vowels.split('').filter(n => word.includes(n)).length >= 3;

console.log(hasThreeVowels('delicious'));       //  true
console.log(hasThreeVowels('bootcamp prep'));   //  true
console.log(hasThreeVowels('bootcamp'));        //  false
console.log(hasThreeVowels('dog'));             //  false
console.log(hasThreeVowels('go home'));         //  false
```


## Longest Name - Debugging
> The function `longestName()` takes an array of names and returns the longest. If there's a tie, it returns the first name of the longest length. However, this implementation is full of bugs! Use your debugging skills to find and fix those bugs.

```javascript
function longestName(names) {
    // Set the first name to be the longest
    let currentLongest = names[0];

    // Check each other name in the array starting from the second
    for (let i = 1; i < names.length; i++) {

        // If the name we're checking is longer than our
        // current longest, set that name to be the new longest
        if (names[i].length > currentLongest.length) {
            currentLongest = names[i];
        }

    }

    return currentLongest;
}

testNames = ["James", "Patricia", "Michael", "Elizabeth", "Christopher",
             "Sarah", "Margaret", "Kenneth", "Stephanie", "Jonathan",
             "Jeremy", "Samantha", "Alexander", "Catherine", "Benjamin"]

console.log(longestName(testNames)); // "Christopher"
```

## Array Index Of
> So far you've learned how to write your own loops but there are some methods that will iterate for you. One such method is the Array.indexOf() method. The indexOf() method returns the first index that it finds for the element given, or -1 if the element is not found.
>
> Write a function named wordWithinArray(array,word) using Array.indexOf. The function takes in both a word and an array of words as arguments and returns a boolean that returns true if that string is located inside of the array, or false if it does not.

```javascript
const wordWithinArray = (array, word) => array.indexOf(word) >= 0;

console.log(
  wordWithinArray(["apple", "banana", "caramel", "chocolate"], "apple")
); //=> true

console.log(wordWithinArray(
  ["dog", "cat", "camel", "bird"], "camel")
); //=> true

console.log(
  wordWithinArray(["apple", "banana", "caramel", "chocolate"], "pineapple")
); //=> false

console.log(wordWithinArray(
  ["dog", "cat", "camel", "bird"], "panther")
); //=> false
```
