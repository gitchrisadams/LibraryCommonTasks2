// Wrap it in an IIFE:
(() => {
  // Union types:
  let result;
  function combine(input1: number | string, input2: number | string) {
    if (typeof input1 === "number" && typeof input2 === "number") {
      result = input1 + input2;
    } else {
      result = input1.toString() + input2.toString();
    }
    return result;
  }

  console.log(`Number combine: ${combine(30, 25)}`);
  console.log(`String combine: ${combine("25", "25")}`);
})();
