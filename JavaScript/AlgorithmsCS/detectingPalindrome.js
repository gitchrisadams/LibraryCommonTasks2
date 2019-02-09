function isPalindrome(pal) {
  console.log(pal);
  return pal.split('').reverse().join('') === pal;
}

console.log("Is Chris a pal?");
console.log(isPalindrome("chris"));
console.log("********************");
console.log("Is racecar a pal?");
console.log(isPalindrome("racecar"));