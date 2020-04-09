// Wrap it in an IIFE:
(() => {
  var squareItSimple = function (h, w) {
    return h * w;
  };

  var squareItSimplest = (h: number, w: number) => h * w;

  // Just define hello world func type w/ optional
  // param and retuns nothing/void.
  var helloWorld: (name?: string) => void;

  // Actually define the hello world functionality:
  helloWorld = (name?: string) => {
    console.log(`Hello ${name || "unknown person"}`);
  };

  // Call with and without arg:
  helloWorld();
  helloWorld("chris");

  // squareIt takes a rect param that must be an object
  // That object must have an h as a number and optionally
  // can have a w param, it returns a number.
  // The Def of the function:
  var squareIt: (rect: { h: number; w?: number }) => number;

  // The actual function:
  squareIt = function (rect) {
    if (rect.w !== undefined) {
      return rect.h * rect.w;
    }
    return rect.h * rect.h;
  };

  // Create some rects:
  var rectA = { h: 7 };
  var rectB = { h: 7, w: 12 };

  // Call function passing in rects:
  console.log(squareIt(rectA));
  console.log(squareIt(rectB));

  // Defining a variable as type Function:
  let combinedValue = Function;

  // Can't do this:
  //combinedValue = 5;

  // Passing a call back into a function:
  // cb: call back accepts a number and returns void.
  function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
    const result = n1 + n2;
    cb(result);
  }

  addAndHandle(5, 5, (result) => {
    console.log(result);
  });
})();
