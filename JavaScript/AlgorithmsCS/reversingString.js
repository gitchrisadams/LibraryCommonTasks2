module.exports = reverse;

// Option 1:
/*
function reverse(str) {
  return str
    .split('')
    .reverse()
    .join('');
}
*/

// Option 2:
function reverse(str) {
  let reversed = '';

  for (let character of str) {
    reversed = character + reversed;
  }

  return reversed;
}
