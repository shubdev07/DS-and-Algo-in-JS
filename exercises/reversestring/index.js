// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// My solution
function reverse(str) {
  const arr = str.split("");
  let reverseStr = "";
  for (let i = arr.length - 1; i >= 0; i--) {
    reverseStr += arr[i];
  }
  return reverseStr;
}

/* Best Solution */
/*  
function reverse(str) {
  return str.split("").reduce((rev, char) => char + rev, "");
}
*/

module.exports = reverse;
