"use strict";

const sentences=[
	{subject:"JavaScript",verb:"is",object:"great"},
	{subject:"Elephants",verb:"are",object:"large"},
];

/***** es6 feature: object destructuring *****/
function say({subject,verb,object })
{
	// es6 feature: template strings
	console.log(`${subject} ${verb} ${object}`);
}
// es6 feature: for..of
for(let s of sentences){
	say(s);
}

/***** Looping through an array with for of: *****/
// Create an array:
const hand = ["A", "K", "J", "Q", "10"];

// Loop through the hand:
console.log("\nLooping through the hand:");
for(let face of hand){
	console.log(`Your cards is ${face}.`);
}

/***** ES6 Feature Template Strings, another example ******/
/* Template Strings */
// Define var w/ let:
let currentTemp = 19.5;

// Create a template String and assign to message:
// The \u00b0C is the degrees esc char.
const message = `\nThe current temperature is ${currentTemp}\u00b0C`;

// Output:
console.log(message);

/***** ES6 Feature Symbols *****/
// Create a new symbol:
// The string passed in is a description.
// Every Symbol is unique so comparison will be false.
const RED = Symbol("The color of a sunset!");
const ORANGE = Symbol("The color of a sunset!");
console.log("\nIs RED === ORANGE");
console.log(RED === ORANGE);




