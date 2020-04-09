"use strict";
// Use the function interface:
var add;
add = function (n1, n2) {
    return n1 + n2;
};
/********* Use extended Interface *********/
// This must use everything in Person interface but
// also include everything defined in Chris interface.
var chris1;
chris1 = {
    name: 'Christopher',
    age: 44,
    greet: function (phrase) { return console.log(phrase + " " + chris1.name); },
    burp: function (sound) { return console.log(sound + " " + chris1.name); }
};
console.log('chris1: ', chris1);
chris1.burp('Burrrrrrrrrp');
/********* Use Interface *********/
var user1;
user1 = {
    name: 'Chris',
    age: 43,
    greet: function (phrase) { return console.log(phrase + " " + user1.name); }
};
user1.greet('Hi there - I am ');
/********* Class that implements Interface *********/
var People = /** @class */ (function () {
    function People(n) {
        // Could also just provide default val n: string = "foo"
        if (n) {
            this.name = n;
        }
    }
    People.prototype.greet = function (phrase) {
        if (phrase) {
            console.log(phrase + " " + this.name);
        }
        else {
            console.log('Hi');
        }
    };
    return People;
}());
/********* Class w/ interface use example *********/
var user2; // Could also do let user2: Person; since it implements Greetable.
user2 = new People('Christopher');
user2.greet('Hi there - ');
var user3;
user3 = new People();
user3.greet();
console.log('user2', user2);
