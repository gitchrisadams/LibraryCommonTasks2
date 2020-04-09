"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
/********* Generic string type *********/
var names = []; // sames as string[]
/********* Generic Functions *********/
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
var mergedObj = merge({ name: 'Max' }, { age: 43 });
console.log("MergedObj.name: " + mergedObj.age);
/********* Generic Functions w/ constraings to specific type *********/
function merge2(objA, objB) {
    return Object.assign(objA, objB);
}
var mergedObj2 = merge2({ name: 'Max' }, { age: 43 }); // This works.
// Since we extend object we need an object like above,
// we couldn't do this:
// const mergedObj2 = merge2(30, { age: 43 })
// since 30 is not an object but a number.
console.log("MergedObjs.name: " + mergedObj2.age);
/********* More Generic Functions *********/
function countAndPrint(element) {
    var descriptionText = 'Got no value';
    if (element.length === 1) {
        descriptionText = 'Got one element.';
    }
    else {
        descriptionText = "Got " + element.length + " elements.";
    }
    return [element, descriptionText];
}
console.log(countAndPrint(['sports', 'cooking']));
/********* keyof Generics *********/
// We are saying first param must be an object and the
// second param must be a key of that object.
function extractAndConvert(obj, key) {
    return "Value " + obj[key];
}
// We pass in the object and name is a key of that object
// As shown above.
extractAndConvert({ name: 'Max' }, 'name');
/********* Generic Classes *********/
var DataStorage = /** @class */ (function () {
    function DataStorage() {
        this.data = [];
    }
    DataStorage.prototype.addItem = function (item) {
        this.data.push(item);
    };
    DataStorage.prototype.removeItem = function (item) {
        this.data.splice(this.data.indexOf(item), 1);
    };
    DataStorage.prototype.getItems = function () {
        return __spreadArrays(this.data);
    };
    return DataStorage;
}());
// Use the Generic class:
// Store text:
var textStorage = new DataStorage();
textStorage.addItem('Chris');
textStorage.addItem('Bob');
textStorage.removeItem('Chris');
console.log(textStorage.getItems());
// Store numbers w/ same class:
var numStorage = new DataStorage();
numStorage.addItem(10);
numStorage.addItem(20);
numStorage.removeItem(10);
console.log(numStorage.getItems());
function createCourseGoal(title, description, date) {
    var courseGoal = {};
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = date;
    return courseGoal;
}
/********* Readonly Utility type *********/
// We can't push or pop to this array.
var names2 = ['Max', 'Anna'];
