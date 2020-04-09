module applyingTypes {
  // string arrays:
  // Function with string array param:
  function getArrayLength(x: string[]) {
    var len = x.length;
    return len;
  }

  // Create string array:
  var names: string[] = ['John', 'Dan'];
  var firstPerson: string = names[0];
  console.log("names: ", getArrayLength(names));

  // Null values:
  var guitarSales: any = null;

  // Undefined:
  var quantity: number;
  var company = undefined;

  // Array type is inferred as string for hobbies.
  const person = {
    name: "Chris",
    age: 43,
    hobbies: ['Sports', 'Cooking']
  };

  // Create empty array and assign and specifically type as string Array.
  let favoriteActivities: string[];
favoriteActivities = ['sports'];
}