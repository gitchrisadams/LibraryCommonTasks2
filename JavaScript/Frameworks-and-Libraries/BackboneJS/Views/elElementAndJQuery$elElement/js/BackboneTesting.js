// Create a new View and set the
// el property to the body content Dom element.
var v = new Backbone.View({
	el:'body'
});

// Console log the body tag and its contents:
console.log(v.el);

// Can also console log using Jquery $el
// Instead of the Dom element you get a JQuery wrapper
// of the Dom elemend body. (Different output than above.)
// You actually get it as an array.
console.log(v.$el);

// Finding a selecting using Jquery with this.$
// It is scoped to the current view.
// This console logs the h1 selector.
console.log(this.$('h1'));
