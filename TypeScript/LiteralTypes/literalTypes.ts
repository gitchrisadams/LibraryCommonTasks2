// Wrap it in an IIFE:
(() => {
  // Literal types:
  // resultConversion is a string literal
  // and our code can use a string or number
  // based on the string passed in.
  let result;
  function combine(
    input1: number | string,
    input2: number | string,
    resultConversion: "as-number" | "as-text" // could also just make a string instead of union.
  ) {
    // Adds or concats option:
    // if (typeof input1 === "number" && typeof input2 === "number") {
    //   result = input1 + input2;
    // } else {
    //   result = input1.toString() + input2.toString();
    // }

    // Adds or concats based in result Conversion:
    if (
      (typeof input1 === "number" && typeof input2 === "number") ||
      resultConversion === "as-number"
    ) {
      // +input1 and +input2 parse to an int.
      result = +input1 + +input2;
    } else {
      result = input1.toString() + input2.toString();
    }

    return result;

    // Converts the end result to a number after it
    // concats it if its a string.
    // if (resultConversion === "as-number") {
    //   // plus casts to integer, similar to parseInt()
    //   return +result;
    // } else {
    //   return result.toString();
    // }
  }

  console.log(`Number combine: ${combine(30, 25, "as-number")}`);
  console.log(`String combine: ${combine("25", "25", "as-text")}`);
  console.log(`String combine: ${combine("25", "25", "as-number")}`);
})();
