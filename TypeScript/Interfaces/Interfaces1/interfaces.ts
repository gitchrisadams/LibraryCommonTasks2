module FunctionsAndInterfaces {
  // Provide an interface for the squareItBasic
  // function. It must accept a number and return
  // a number.
  interface SquareFunction {
    (x: number): number;
  }
  var squareItBasic: SquareFunction = (num) => num * num;

  // Another example:
  // Interface rect:
  interface Rectangle {
    h: number,
    w?: number
  }

  //var squareIt: (rect: {h: number, w?: number;}) => number;
  // instead of this above, we use this to use interface:
  var squareIt: (rect: Rectangle) => number;

  // The actual function:
  squareIt = function(rect) {
    if (rect.w !== undefined) {
      return rect.h * rect.w;
    }
    return rect.h * rect.h;
  }

  // Create some rects:
  var rectA = {h: 7};
  var rectB = {h: 7, w: 12};

  // Call function passing in rects:
  console.log(squareIt(rectA));
  console.log(squareIt(rectB));

  // Another example, person interface:
  interface Person {
    name: string,
    age?: number,
    kids: number,
    calcPets: () => number;
    makeYounger: (years: number) => void;
    greet: (msg: string) => string;
  }

  // We have to implement the interface according to
  // the rules set above in the interface def.
  var p: Person = {
    name: 'Colleen',
    age: 40,
    kids: 4,
    calcPets: function() {
      return this.kids * 2;
    },
    makeYounger: function(years: number) {
      this.age = years;
    },
    greet: function(msg: string) {
      return `${msg}, ${this.name}`;
    }
  }
}