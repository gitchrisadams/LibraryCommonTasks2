/*
 * Finds the largest binary gap of zeros.
 * Example: 10001001 would find a gap of 3
 */
function solution(N) {
  console.log(N);

  binaryStr = N.toString(2);

  console.log(binaryStr);

  // split the string:
  let binarySplit = binaryStr.split("");

  let zeroHitCounter = 0;
  let maxZero = 0;

  for (num of binarySplit) {
    console.log(num);

    if (num === '0') {
      zeroHitCounter++;
      if (zeroHitCounter > maxZero) {
        // New max value.
        maxZero = zeroHitCounter;
      }
    } else {
      // rest the zero counter.
      zeroHitCounter = 0;
    }
  }

  // Get the number of times 1 appears in the string:
  console.log(binaryStr.replace(/[^1]/g, "").length > 1)
  if (binaryStr.replace(/[^1]/g, "").length > 1) {
    return maxZero;
  } else {
    return 0;
  }
}

let mySol = solution(1041);

console.log(mySol);