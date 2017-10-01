/*********_.each() **********/
var mythicalAnimals = ['Unicorn', 'Dragon', 'Honest Politician'];

_.each(mythicalAnimals, function(animalName, index) {
    alert('Animal #' + index + ' is ' + animalName);
});

/******* Map() *********/
var stringNumbers = ["5", "10", "15"];

// when we parse strings in to numbers in
// JavaScript we have to specify which base to use
var BASE = 10;

var actualNumbers = _.map(stringNumbers, function(numberString,
index) {
    return parseInt(numberString, BASE);
}); // actualNumbers == [5, 10, 15]

/******** reduce **********/
// the }, 0 is a memo argument and the starting argument that reduce will eventually return.
var total = _.reduce(actualNumbers, function(total, actualNumber) {
    return total + actualNumber;
}, 0); // total == 30

/***** Underscore extend ******/
// The extend method takes the first argument given to it and copies the properties.
from each successive argument onto it.
var commonConfiguration = {foo: true, bar: true};
var specificConfiguration = {foo: false, baz: 7};

var combined = _.extend({}, commonConfiguration, specificConfiguration);
// combined == {foo: false, bar: true, baz: 7}

/***** Defaults *****/
// The defaults method works in a similar manner, except that it only copies over values that the object doesn't already have.
var combined2 = _.defaults({}, specificConfiguration , commonConfiguration);
// combined2 == {foo: false, bar: true, baz: 7}

