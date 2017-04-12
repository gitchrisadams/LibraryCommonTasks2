// Testing that JQuery is installed/working:
if(typeof jQuery == "undefined"){
    console.log("JQuery is not installed.");
}else{
    console.log("JQuery is installed correctly.");
}

// Define the regular expression var / regex:
var regex = /is/;

// Regex searching for case insensitive string:
// The /i makes this case insensitive.
var regex2 = /Great/i;

// Global flag returns every instance of e in string:
var regex3 = /e/g;

// Create String to use w/ regex:
var string = "Regex is great!";

// Use match to match the string according
// to the regex we defined.
var result = string.match(regex);

// Match based on regex2:
var result2 = string.match(regex2);

var result3 = string.match(regex3);

// Output:
console.log("Regex match 1: " + result);

console.log("Regex 2 match(Case insensitive): " + result2);

console.log("All e's in String: " + result3);