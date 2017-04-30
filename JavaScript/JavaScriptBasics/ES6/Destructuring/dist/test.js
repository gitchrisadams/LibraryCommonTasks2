"use strict";

/* Basic Destructuring Example */
// Create a normal object:

const obj = { b: 2, c: 3, d: 4 };

// Destructure the object into individual parts:
const { a, b, c } = obj;

// Output:
console.log("\n\nDestructuring Object Basic Example: \n");
console.log(a); // Undefined, there is no a.
console.log(b); // 2
console.log(c); // 3
//console.log(d); // ref error: "d" is not destructered


/* Destructuring Example w/ assignment done separately */
// Create a normal object:
const obj2 = { e: 5, f: 6, g: 7 };

// Declate variables w/ let:
let e, f, g;

// If we try to do this like before, it will produce an error:
//{e, f, g} = obj;

// When assigning separately we need to surround w/ parens:
({ e, f, g } = obj2);

// Output:
console.log("\n\nDestructuring Assignment Separate Example: \n");
console.log(e);
console.log(f);
console.log(g);

/* Array Destructuring */
// Create a normal array:
const arr = [1, 2, 3];

// Destructure the array:
let [x, y] = arr;

// Output:
console.log("\n\nDestructuring Array Example: \n");
console.log("x: %d y: %d", x, y);

// z never destructured so would produce error:
// console.log(z);

/* Using spread ... operator w/ destructuring */
// Create a normal array of numbers:
const array1 = [1, 2, 3, 4, 5];

// Destructure array:
// The ...rest is a spread operator and takes the remaining
// numbers 3, 4, and 5.
let [j, k, ...rest] = array1;

// Output:
console.log("\n\nDestructuring w/ Spread operator Example: \n");
console.log("j: %d k: %d", j, k);

console.log("\nThe Rest:");
console.log(rest);