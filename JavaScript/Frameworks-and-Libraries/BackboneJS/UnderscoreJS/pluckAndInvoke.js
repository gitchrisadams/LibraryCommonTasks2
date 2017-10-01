/***** Pluck *****/
// The pluck method allows you to extract a single property value from each member of an array.
var fakeBooks = [
    {title: 'Become English Better At', pages: 50, author: 'Bob'},
    {title: 'You Is Become Even Better at English', pages: 100, author: 'Bob'},
    {title: 'Bob is a Terrible Author', pages: 200, author: 'Fred the Critic'}
];

var fakeTitles = _.pluck(fakeBooks, 'title'); // fakeTitles == ['Become English Better At', ...]


/***** Invoke *****/
// The invoke method works in a similar way as pluck method, except that it assumes
// that the the provided property is a method and runs it and then adds the result to the
// returned array.
var Book = Backbone.Model.extend({
    getAuthor: function() {
        // the "get" method returns an attribute of a Model;
        // we'll learn more about it in the following chapter
        return this.get('author');
    }
});
var books = [new Book(fakeBooks[0]),
new Book(fakeBooks[1]),
new Book(fakeBooks[2])];

// Goes through each array of books and adds the get author attributes and puts in var authors:
var authors = _.invoke(books, 'getAuthor'); // == ['Bob', 'Bob', 'Fred the Critic']

