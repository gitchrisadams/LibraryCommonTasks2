// Create new Array:
var entries = new Array('Trains', 'Plains', 'automobiles');

// Don't need the new Key word:(Same as above)
var entries2 = Array('Boats', 'Goats', 'Totes');

// Bracket Notation to create array:
var entries3 = ['Cars', 'Bars', 'Jars'];

// Can also pass an array the number of elements we want:
var entries4 = new Array(5);

// Creating an empty array:
var entries5 = [];

// Reassigning an array element:
entries3[2] = 'Mars';

// Output whether entries is an instance of an Array: (true)
console.log(entries instanceof Array);
console.log(entries2 instanceof Array);
console.log(entries3 instanceof Array);

// Access member of an Array:
console.log("Item 0 in entries Array: " + entries[0]);

// Output the size of entries4 Array:
console.log("Size of entries 4 array: " + entries4.length);

// Output new values in array element 2 of entries 3: (Mars)
console.log("New value of element 2 in Entries 3: " + entries3[2]);

// Using ToString to output Array:
console.log("Array entries2: " + entries2.toString());

// Console log the value of an Array:
console.log("The values of entries3 Array: " + entries3.valueOf());

// Pushing onto an Array:
var ratings = [];
ratings.push(5);
ratings.push(2, 4);
console.log("Ratings has had values pushed onto it: " + ratings);

// Popping off of an array:
ratings.pop();
console.log("Ratings now has last value popped off: " + ratings);
// Console log the value popped off, while popping off:
console.log("Popping off another one, val popped off:" + ratings.pop());

// Shifting an Array:
var ratings2 = [];
ratings2.push(5, 2, 4);
// Store the value taking off the beginning:
var firstRating = ratings2.shift();
console.log("The first rating taken off w/ shift is: " + firstRating);

// Unshift to add to the beginning of Array:
ratings2.unshift(3);
console.log("3 has been added to beginning w/ Unshift: " + ratings2);

// Concatenating two Arrays together:
var newRatings = ratings.concat(ratings2);
console.log("Ratings and Ratings2 concatenated: " + newRatings);