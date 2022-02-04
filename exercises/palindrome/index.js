// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

/* 
Best Solution
function palindrome(str) {
  return str.split("").every((char, i) => {
    return char === str[str.length - i - 1];
  });
}
*/

// My solution
function palindrome(str) {
  let reverseStr = "";
  for (let character of str) {
    reverseStr = character + reverseStr;
  }
  if (reverseStr === str) {
    return true;
  } else {
    return false;
  }
}

module.exports = palindrome;
