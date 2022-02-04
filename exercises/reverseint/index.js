// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

/* 
Best Solution
function reverseInt(n) {
  const reversed = n
    .toString()
    .split('')
    .reverse()
    .join('');

  return parseInt(reversed) * Math.sign(n);
}
*/

// my solution
function reverseInt(n) {
  let isNegative;
  if (n < 0) {
    isNegative = true;
  } else {
    isNegative = false;
  }
  n = Math.abs(n);
  const str = String(n);
  let reverseResult = "";
  for (let character of str) {
    reverseResult = character + reverseResult;
  }
  reverseResult = Number(reverseResult);
  if (isNegative === true) {
    return -reverseResult;
  } else {
    return reverseResult;
  }
}

module.exports = reverseInt;
