// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

//Pass1          3                  ''   
//Pass2          3                  '*'
//Pass3          3                  '**'
//Pass4 on, see previous...
function pyramid(n, row = 0, level = '') {
  //  Pass: 1 -> 0 ===   3 ? No
  //  Pass: 2 -> 0 ===   3 ? No
  //  Pass: 3 -> 0 ===   3 ? No
  if (row === n) {
    return;
  }

  // Pass: 1 -> 0 === (2 * 3 - 1 = 5) ? No
  // Pass: 2 -> 1 === (2 * 3 - 1 = 5) ? No
  // Pass: 3 -> 2 === (2 * 3 - 1 = 5) ? No
  if (level.length === 2 * n - 1) {
    console.log(level);
    return pyramid(n, row + 1);
  }

  // midpoint always = 2 when n = 3
  const midpoint = Math.floor((2 * n - 1) / 2);
  let add;

//Pass: 1 -> 2 - 0   <= 0            and   2      + 0  >=   0  ? No
//Pass: 2 -> 2 - 0   <= 1            and   2      + 0  >=   1  ? No
//Pass: 3 -> 2 - 0   <= 2            and   2      + 0  >=   2  ? Yes
  if (midpoint - row <= level.length && midpoint + row >= level.length) {
    // Pass: 3 -> Add a pound sign
    add = '#';
  } else {
    // Pass: 1 -> Add a space
    // Pass: 2 -> Add a space
    add = ' ';
  }

  //Pass1: 3  0    ''   + '*'
  //Pass2: 3  0    '*'   + '*'
  //Pass3: 3  0    '**'   + '#'
  pyramid(n, row, level + add);
}

module.exports = pyramid;
//
// function pyramid(n) {
//   const midpoint = Math.floor((2 * n - 1) / 2);
//
//   for (let row = 0; row < n; row++) {
//     let level = '';
//
//     for (let column = 0; column < 2 * n - 1; column++) {
//       if (midpoint - row <= column && midpoint + row >= column) {
//         level += '#';
//       } else {
//         level += ' ';
//       }
//     }
//
//     console.log(level);
//   }
// }

pyramid(3);