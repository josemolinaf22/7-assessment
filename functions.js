// PART 2 
/*
Sum Zero 
Write a function that takes in an array of numbers. The function should return True if any two numberss in list sum to 0, and false otherwise.
*/

const addToZero = num => {
    let result = "False"
    for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < array.length; j++) {
        if (i !== j) {
          if (array[i] + array[j] === 0) {
            result = "True"
          } 
        }
      }
    }
}

// run time is O(n^2)
//space: O(n)
/*Unique Characters
Write a function that takes in a single word, as a string. It should return True if that word contains only unique characters. Return False otherwise.

For example:*/

  const hasUniqueChars = word => {
   let uniChar = new Set([])
        for (let i = 0; i < word.length; i++) {
            uniChar.add(word[i])
        }
        return uniChar.size === word.length
  }

  //O(n)
//space: O(n)

/*Pangram Sentence
A pangram is a sentence that contains all the letters of the English alphabet at least once, like “The quick brown fox jumps over the lazy dog.”

Write a function to check a sentence to see if it is a pangram or not.

For example:*/

const isPangram = str => {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'
    const lowStr = str.toLowerCase()

    for(let i = 0; i < alphabet.length-1; i +=1){
        if(lowStr.indexOf(alphabet[i]) ===-1){
            return false;
        }
    }
    return true;
}

//O(n)
//space: O(n)
/* Longest Word
Write a function, find_longest_word, that takes a list of words and returns the length of the longest one.

For example: */

const findLongestWord = string => {
    let str = string.toString().split(",");
    let longest = 0;
    let word = null;
    str.forEach(function(str){
        if(longest < str.length){
            longest = str.length;
            word = str;
        }
    })
    return longest;
}

//O(1)
//space: O(n)

