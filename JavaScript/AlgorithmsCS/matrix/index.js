// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[undefined, undefined],
//     [undefined, undefined]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

//Passed in: n =    2
function matrix(n) {
  const results = [];

  // Create empty arrays
  for (let i = 0; i < n; i++) {
    results.push([]); // n=2 results = [[], []]
  }

  // To keep track of where we are in matrix
  let counter = 1;
  let startColumn = 0;
  let endColumn = n - 1;
  let startRow = 0;
  let endRow = n - 1;

  while (startColumn <= endColumn && startRow <= endRow) {
    // Top row
    for (let i = startColumn; i <= endColumn; i++) {
      results[startRow][i] = counter;
      counter++;  // Counter is 3 when done with looping for n=2
    }
    console.log(counter);
    // Move to next row
    startRow++;

    // Right column
    // Pass1:   1            <= 1-1   Yes
    // Pass2:   2            <= 1-1   No so break out of loop
    for (let i = startRow; i <= endRow; i++) {
      //Pass1: results[1][0] = 3
      results[i][endColumn] = counter;

      // Pass1: counter = 4 
      counter++;
    }

    // passed in n=2 then endColumn 1 - 1 = 0
    endColumn--;

    // Bottom row
    for (let i = endColumn; i >= startColumn; i--) {
      results[endRow][i] = counter;
      counter++;
    }
    endRow--;

    // start column
    for (let i = endRow; i >= startRow; i--) {
      results[i][startColumn] = counter;
      counter++;
    }
    startColumn++;
  }

  return results;
}

module.exports = matrix;

matrix(2);