var redRoses = new app.singleFlower({
  name: "Red Roses",
  price: 39.95,
  color: "Red",
  img: "images/redRoses.jpg",
  link: "redRose"
});

var rainbowRoses = new app.singleFlower({
  name: "Rainbow Roses",
  price: 29.95,
  color: "orange",
  link: "rainbowRose"
});

// Notice this doesn't have a color set, so
// the default pink color will be set from
// the defaults.
var heirloomRoses = new app.singleFlower({
  name: "Heirloom roses",
  price: 19.95,
  img: "images/heirloomRoses.jpg",
  link: "heirloomRose"
});

// Create an instance of our Flower Collection.
// Pass in array of flowers instances as params.
// Notice we left off heirloomRoses.
// To show how to add we left that off here.
var flowerGroup = new app.FlowersCollection([
  redRoses, rainbowRoses
]);

// Manuall add heirloom roses via add() just for reference.
// We could have just added w/ others above.
flowerGroup.add(heirloomRoses);

// Removing a collection:
flowerGroup.remove(redRoses);

// Output the flower Collection as JSON:
// This gives us access to output all the properties
// of the flowers since it is in a Collection.
console.log(flowerGroup.toJSON());

