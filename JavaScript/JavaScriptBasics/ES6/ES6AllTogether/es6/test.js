"use strict";

const sentences=[
	{subject:"JavaScript",verb:"is",object:"great"},
	{subject:"Elephants",verb:"are",object:"large"},
];

/***** es6 feature: object destructuring *****/
console.log("***************** Destructuring and Template Strings Example *****************");
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
console.log("");
console.log("***************** Loop through array w/ for of Example *****************");
// Create an array:
const hand = ["A", "K", "J", "Q", "10"];

// Loop through the hand:
console.log("Looping through the hand:");
for(let face of hand){
	console.log(`Your cards is ${face}.`);
}

/***** ES6 Feature Template Strings, another example ******/
/* Template Strings */
// Define var w/ let:
let currentTemp = 19.5;

// Create a template String and assign to message:
// The \u00b0C is the degrees esc char.
console.log("");
console.log("***************** Template Strings Example *****************");
const message = `The current temperature is ${currentTemp}\u00b0C`;

// Output:
console.log(message);

/***** ES6 Feature Symbols *****/
console.log("");
console.log("***************** Symbols Example *****************");
// Create a new symbol:
// The string passed in is a description.
// Every Symbol is unique so comparison will be false.
const RED = Symbol("The color of a sunset!");
const ORANGE = Symbol("The color of a sunset!");
console.log("Is RED === ORANGE");
console.log(RED === ORANGE);

/***** ES6 Feature Destructuring Arguments *****/
console.log("");
console.log("***************** Destructuring Arguments Example *****************");
function getSentence({ subject, verb, object }) {
  return `${subject} ${verb} ${object}`;
}

const o = {
  subject: "I",
  verb: "love",
  object: "JavaScript",
};

console.log(getSentence(o)); // "I love JavaScript"

/***** ES6 Feature Default Arguments *****/
console.log("");
console.log("***************** Default Arguments Example *****************");
function f(a, b="default", c=3) {
  return `${a} - ${b} - ${c}`;
}

console.log("Passing in 3 args so no defaults used:");
console.log(f(5, 6, 7));
console.log("");

console.log("Passing in 2 args so 1 default used:");
console.log(f(5, 6));
console.log("");

console.log("Passing in 1 arg so 2 defaults used:");
console.log(f(5));
console.log("");

console.log("Passing no args so first is undef and use 2 defaults:");
console.log(f());
console.log("");

