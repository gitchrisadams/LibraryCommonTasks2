// Given a string, return the character that is most
// commonly used in the string.
function maxChar(str) {
  const charMap = {};
  let max = 0;
  let maxChar = '';

  // Build chart object that keeps track of # of chars
  // If we have a char increment its counter, otherwise just set it.
  for (let char of str) {
    if (charMap[char]) {
      charMap[char]++;
    } else {
      charMap[char] = 1;
    }
  }

  // If char is greater, we have a new max int value, so set it.
  // Store the actual char we will return as having most chars.
  for (let char in charMap) {
    if (charMap[char] > max) {
      max = charMap[char];
      maxChar = char;
    }
  }

  return maxChar;
}

module.exports = maxChar;
