// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

/* 
Best Solution
function maxChar(str) {
  const charMap = {};
  let max = 0;
  let maxChar = '';

  for (let char of str) {
    if (charMap[char]) {
      charMap[char]++;
    } else {
      charMap[char] = 1;
    }
  }

  for (let char in charMap) {
    if (charMap[char] > max) {
      max = charMap[char];
      maxChar = char;
    }
  }

  return maxChar;
}
*/

// My solution
function maxChar(str) {
  const chars = str.split("");
  const characters = {};
  console.log({ chars });
  chars.forEach((char) => {
    if (characters[char]) {
      characters[char]++;
    } else {
      characters[char] = 1;
    }
  });
  let max = 0;
  let maxChar = 0;
  console.log({ characters });
  Object.keys(characters).forEach((character) => {
    if (max < characters[character]) {
      max = characters[character];
      maxChar = character;
    }
  });
  console.log({ max, maxChar });
  return maxChar;
}

module.exports = maxChar;
