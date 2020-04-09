// Wrap it in an IIFE:
(() => {
  // type aliases:
  type Combinable = number | string;
  type ConversionDescriptor = "as-number" | "as-text";
  // Literal types:
  // Combinable type is used instead of number | string
  // It uses the alias above.
  let result;
  function combine(
    input1: Combinable,
    input2: Combinable,
    resultConversion: ConversionDescriptor
  ) {
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
  }

  console.log(`Number combine: ${combine(30, 25, "as-number")}`);
  console.log(`String combine: ${combine("25", "25", "as-text")}`);
  console.log(`String combine: ${combine("25", "25", "as-number")}`);
})();
