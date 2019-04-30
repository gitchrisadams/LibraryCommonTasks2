/*
 * Check for permutation.
 * For example, array A such that:
 *
 *   A[0] = 4
 *   A[1] = 1
 *   A[2] = 3
 *   A[3] = 2
 * is a permutation, but array A such that:

 *   A[0] = 4
 *   A[1] = 1
 *   A[2] = 3
 * is not a permutation, because value 2 is missing.
 */

/*
 * My initial try at it. Misses some cases
 */
// let permCheck = (arrayToCheck) => {
//   let arraySorted = arrayToCheck.sort();
//   counter = arraySorted[0];

//   if (counter !== 1) {
//     return 0;
//   }

//   for (num of arraySorted) {
//     if (counter !== (num)) {
//       return 0;
//     }
//     counter++;
//   }
//   return 1;
// };


function solution(A) {
  let set = new Set(); // holds a unique set of values
  let max = 1; // largest number in set
  let min = 1; // smallest number in set
  let n = A.length

  for (let i = 0; i < n; i++) {
      let num = A[i];
      if (num > max) {
          max = num; // determine max
      } else if (num < min) {
          min = num; // determine min
      }
      set.add(num) // only permits unique values
  }
  
  let m = set.size // size of set
  let range = (max - min) + 1 // size of a sequential permutation, given range

  // conditions required to solve puzzle
  return n === m && range === m ? 1 : 0 
}

console.log(solution([3, 5, 8]));
console.log(solution([3, 2, 1]));

// console.log(permCheck([4, 1, 3]));
// console.log(permCheck([1, 3, 2, 4]));
// console.log(permCheck([3, 2, 4]));

// console.log(permCheck([3, 5]));

 
