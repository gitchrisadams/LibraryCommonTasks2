/*
 * Rotate the array to the right by one.
 * Use K for number of rotations to make. 
 * Given A = [3, 8, 9, 7, 6] and K passed in is 1
 * New array would be [6, 3, 8, 9, 7]
 * 
 * Given A = [3, 8, 9, 7, 6] and K = 3
 * [3, 8, 9, 7, 6] -> [6, 3, 8, 9, 7]
 * [6, 3, 8, 9, 7] -> [7, 6, 3, 8, 9]
 * [7, 6, 3, 8, 9] -> [9, 7, 6, 3, 8]
 */

let rotateArray = (numArray, rotations) => {
  console.log('numArray before', numArray);
  console.log('rotations', rotations);

  // Handle case where empty array is passed in.
  if (numArray.length < 1) {
    return [];
  }

  for (let i = 0; i < rotations; i++) {
    let tempLastEl = numArray.slice(-1)[0];
    numArray = numArray.slice(0, -1);
    numArray.unshift(tempLastEl);
  }

  return numArray;
}

// console.log(rotateArray([3, 8, 9, 7, 6], 3));
  console.log(rotateArray([], 1));