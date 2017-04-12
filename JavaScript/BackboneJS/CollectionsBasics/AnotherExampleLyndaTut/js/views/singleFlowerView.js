// Namespace our app
var app = app || {};

// Assign Model that has properties like color: pink
// to Namespaced variable app.singleFlower.
// default: properties are set when none are specifically set.
app.singleFlower = Backbone.Model.extend({
  defaults: {
    color: "pink",
    img: "images/placeholder.png"
  },

    // Intitialize runs anytime a model instance is created.
    // This gets the name and price using the .get() method.
    initialize: function() {
        console.log("A model instance named " + this.get("name") +  
            " has been created and it costs " + this.get("price"));

        // on() runs anytime the model changes.
        this.on('change', function(){
          console.log("Something in our model has changed");
        });

        // Listening for changes to the price, not everything like above.
        // This console.logs the name and price that changed. 
        this.on('change:price', function(){
            console.log("The price for the " + this.get("name") + 
            " model just changed to $" + this.get("price") + " dollars");
    });
    }

});