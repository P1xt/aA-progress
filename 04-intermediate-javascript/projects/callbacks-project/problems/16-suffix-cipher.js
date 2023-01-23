/*******************************************************************************
Write a function `suffixCipher` that accepts a sentence and object as arguments.
The object contains suffixes as keys and callbacks as values. The `suffixCipher`
function should return a new sentence where words of the original sentence are
modified according to the callback that corresponds with the suffix that the word
ends with. If the word does not end in any of the suffix keys, then it should not
be modified. You can assume that only one suffix of the object will match a word.

Examples:

let cipher1 = {
    ly: function(word) {
        return word.slice(0, -1) + 'ee';
    },
    ize: function(word) {
        return word + 'r';
    }
};
console.log(suffixCipher('quietly and gently visualize', cipher1));
// quietlee and gentlee visualizer

let cipher2 = {
    tal: function(word) {
        return word.toUpperCase();
    },
    s: function(word) {
        return word + 'th';
    }
};
console.log(suffixCipher('incremental progress is very instrumental', cipher2));
// INCREMENTAL progressth isth very INSTRUMENTAL
*******************************************************************************/

let suffixCipher = function(sentence, cipher) {
    const result = [];
    const words = sentence.split(' ');
    for (let i = 0; i < words.length; i++) {
        let found = false;
        for (let key of Object.keys(cipher)) {
            if (words[i].endsWith(key)) {
                result.push(cipher[key](words[i]));
                found = true;
                break;
            }
        }
        if (!found) {
            result.push(words[i]);
        }

    }
    return result.join(' ');
};

let cipher1 = {
    ly: function(word) {
      return word.slice(0, -1) + "ee";
    },
    ize: function(word) {
      return word + "r";
    }
  };
  let actual1 = suffixCipher("quietly and gently visualize", cipher1);
  let expected1 = 'quietlee and gentlee visualizer';
  console.log(actual1);






/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
module.exports = suffixCipher;
