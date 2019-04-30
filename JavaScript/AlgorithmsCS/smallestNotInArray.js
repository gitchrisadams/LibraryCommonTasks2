/*
 * Find the smallest number that is not in the array
 */
function solution(A) {
  let max = Math.max(...A);
  let smallestInt;

  for (let i = 1; i < max; i++) {
    if (!A.includes(i)) {
      smallestInt = i;
      return smallestInt;
    }
  }

  if (Math.sign(max) === -1) {
    return 1;
  } else {
    return max + 1;
  }
}

let numArray = [1, 2, 3];

let sol = solution(numArray);

console.log('sol', sol);