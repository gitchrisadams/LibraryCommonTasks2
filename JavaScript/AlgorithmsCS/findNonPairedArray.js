/* Solution from https://medium.com/javascript-everyday/codility-lessons-c723733b5252 
   This solution is O(N) or O(N*log(N))
*/

/*
 * Returns the array element that does NOT have a pair.
 * Example [0, 0, 4, 3, 4, 3, 5] Would return 5 since it has no pair.
 * 
 */
function solution(A) {
  const makeIntegerOccurrencesMap = (map, nextInteger) => {
      const isMissingKey = key => map[key] === undefined;
      
      if(isMissingKey(nextInteger)) {
          map[nextInteger] = 0;
      }
      
      ++map[nextInteger];
      
      return map;
  }
  
  const isOdd = number => (number % 2) !== 0;
  const integerOccurrencesMap = A.reduce(makeIntegerOccurrencesMap, {});
  
  return +Object.keys(integerOccurrencesMap)
      .find(integer => isOdd(integerOccurrencesMap[integer]));
}

/* This is O(N**2) and not very performant: */
// function solution(A) {
//   let numObj = {};
  
//   for (item of A) {
//       if (numObj[item]) {
//         if (A.includes(item)) {
//           numObj[item] = numObj[item] + 1;
//         }
//       } else {
//         numObj[item] = 1;
//       }
//   }

//   for (num in numObj) {
//     if (numObj[num] % 2 !== 0) {
//       return parseInt(num);
//     }
//   }
// }

/* More compact solution but also O(n**2) */
// solution = (A) => {
//   for (item of A) {
//     // console.log('item', item);
//     // console.log('times in array', A.filter(hitCount => hitCount === item).length % 2 !== 0);
//     if (A.filter(hitCount => hitCount === item).length % 2 !== 0) {
//       return item;
//     }
//   }
// }

/* Other option but still O(N**2) */
// solution = (A) => {
//   let numObj = {};

//   for (item of A) {
//       if (numObj[item]) {
//         if (A.includes(item)) {
//           numObj[item] = numObj[item] + 1;
//         }
//       } else {
//         numObj[item] = 1;
//       }
//   }

//   return +Object.keys(numObj).find(integer => numObj[integer] % 2 !== 0);
// }

console.log(solution([9, 3, 9, 3, 9, 2001, 9]));