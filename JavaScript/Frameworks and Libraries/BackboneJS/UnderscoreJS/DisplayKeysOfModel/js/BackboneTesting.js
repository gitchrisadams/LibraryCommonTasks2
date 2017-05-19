// Create book model:
var book = new Backbone.Model({pages: 20, title: 'Short Title'}, {pages:50, title: 'Long Title'});

var attributeKeys = book.keys();

// Could also do it this way ->> var attributeKeys = _.keys(book.attributes);

console.log(attributeKeys); // alerts ['pages', 'title']


















