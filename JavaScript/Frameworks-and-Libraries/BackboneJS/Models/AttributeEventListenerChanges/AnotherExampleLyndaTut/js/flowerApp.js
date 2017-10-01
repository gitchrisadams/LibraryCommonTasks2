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

// Change the price, this should fire off
// a message where the on() listens for
// model changes.
// set() takes 2 params, first the attribute to change
// the 2nd param the value to change to. 
rainbowRoses.set('price', 20);