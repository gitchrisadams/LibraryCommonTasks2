// Regular Expressions:
var blogText = "Sam I AM";

// Store the pattern to search for.
// Search for global (the 'g' flag) and a case insensitive instance of 'am' in the String:
//var pattern = new RegExp('am', 'g');

// Shortcut to the above, works exactly the same:
var pattern = /am/g;
var pattern2 = /bam/g;

// Prove it is an instance of a regular expression:
console.log(("Is " + blogText + " a Regex?: ") + (pattern instanceof RegExp));

// Call the test function on pattern passing in our blog text.
// If 'am' is found it will display true:
console.log(("Is " + pattern + " found in " + blogText + ": ") + pattern.test(blogText));

// Is 'bam' found:
console.log(("Is " + pattern2 + "found in " + blogText + ": ") + pattern2.test(blogText));


// Create new variable to search through:
var dog = "My dog is a Jack Russell Terrier";

// Create  a RegEx pattern searching for an 'e' globally w/ g flag.
patternDogSearch = /e/g;

// Output each time e is found, Note: We could use a loop for this:
// Call test on the patternDogSearch pattern passing in dog variable.
// These should return true:
console.log("Is 'e' found?: " + patternDogSearch.test(dog));
console.log("Is 'e' found?: " + patternDogSearch.test(dog));
console.log("Is 'e' found?: " + patternDogSearch.test(dog));

// This one should return false because there are only 3 e's in the dog String:
console.log("Is 'e' found?: " + patternDogSearch.test(dog));

// Create a new String:
var book = "My book is awesome dude!";

// Create new pattern to search for:
// Search for 'o' globally.
patternBookSearch = /o/g;

// The .exec method:
// We can use .exec to show the found results as an array.
// The results will show what was searched for, index found, and the input searched for.
var result = patternBookSearch.exec(book);
console.log("\nThe book result: ");
console.log(result);

// Access the first element in the result array: (The 'o' char)
console.log("\nArray element 0 of the book result: ");
console.log(result[0]);

// Console.log the index of the array element where item was found:
console.log("\nThe 'o' char was found at index: ");
console.log(result.index);
console.log("\n");

var myLoopyString = "Loop the loop rollercoaster at six flags."

// Loop through a String and display indexes where char is found:
// Define a pattern:
loopyPattern = /o/g;

// Define result var and store the firt char found:
var loopyResult = loopyPattern.exec(myLoopyString);

console.log("The char 'o' was found a the following indexes:");

// Loop through rest of String and store result and display index where char found:
while(loopyResult){
	console.log(loopyResult.index);
	loopyResult = loopyPattern.exec(myLoopyString);
}

// The .match() function:
// This function is case sensitive.
// You pass in the pattern not the String.
// It returns the characters that that match as an Array.
var myStringToMatch = "Green Eggs and Ham";
var patternGreenEggs = /e/g;
var greenEggsResult = myStringToMatch.match(patternGreenEggs);
console.log("\nResults of 'finding 'e' in " + myStringToMatch);
console.log(greenEggsResult);

// Create an pattern with case insensitive flag:
// You can also use brackets like this: /[aA]m/g
// and is the same thing as below.
var patternGreenEggsCaseI = /e/gi;
greenEggsResultI = myStringToMatch.match(patternGreenEggsCaseI);
console.log("\nCase insensitive search for 'e': ");
console.log(greenEggsResultI);

// Using /.m/g to match any char before the with the dot notation:
// So this will match 'am' and 'Am'
var blogTextDotString = "Sam I Am";
var patternDotString = /.m/g;
var resultDotSring = blogTextDotString.match(patternDotString);
console.log("\nMatch blogDotString using dot notation to match any letter: ");
console.log(resultDotSring);