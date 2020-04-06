module Objects {
  // Objects:
  var points1 = {
    x: 10,
    y: 20
  };
  
  var x = points1.x;

  // Set points to to an Object type:
  var points2: {};
  points2 = {x: 30, y: 40};

  // points3 is of type Object and we init it.
  var points3: Object = {
    x: 1
  };

  // calcArea param typed as a number.
  // w? is optional, if w is not provided
  // multiplye the height times 5.
  var rectangle = {
    h: 10,
    w: 20,
    calcArea: function(h: number, w?: number) {
      return h * w || h * 5;
    }
  };

  // Typescript flags as error if try to pass in string.
  //rectangle.calcArea('2');
  console.log(rectangle.calcArea(2, 3));

}