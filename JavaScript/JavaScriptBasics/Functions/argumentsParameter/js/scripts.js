/* Testing function 
 *
 */
function assert(value, desc) {
  var li = document.createElement("li");
  li.className = value ? "pass" : "fail";
  li.appendChild(document.createTextNode(desc));
  document.getElementById("results").appendChild(li);
}
  window.onload = function() {
  assert(true, "Default Tests:");
  assert(true, "The test suite is running.");
  assert(false, "Fail!");
};

// Arguments Aliasing example.
function infiltrate(person) {
  // Is the value passed in and the first element of arguments equal to 'gardener' ?
  assert(person === 'gardener', 'The person is a gardener');
  assert(arguments[0] === 'gardener', 'The first arg is a gardener');

  // Re-assign the first element of variable length arguments to 'ninja'
  arguments[0] = 'ninja';

  // Since we re-assigned arguments element, now person is also 'ninja'
  assert(person === 'ninja', 'The person is now ninja');
  assert(arguments[0] === 'ninja', "The first arg is a ninja");

  // Re-assign person back to gardener.
  person = 'gardener';

  // Notice even arguments[0] is also back to 'gardener'
  assert(person === 'gardener', 'The person is a gardener again.');
  assert(arguments[0] === 'gardener', "The first arg is a gardener again.");
}

// Call the function passing in 'gardener':
infiltrate('gardener');

// Opting out of aliasing using strict mode:
// Arguments example.
function infiltrateNoAlias(person) {
  "use strict";
  // Is the value passed in and the first element of arguments equal to 'gardener' ?
  assert(person === 'chef', 'The person is a chef');
  assert(arguments[0] === 'chef', 'The first arg is a chef');

  // Re-assign the first element of variable length arguments to 'ninja'
  arguments[0] = 'cook';

  // Since we re-assigned arguments element, now person is also 'ninja'
  assert(person === 'cook', 'The person is now a cook, should fail because no aliasing');
  assert(arguments[0] === 'cook', "The first arg is a cook");
  assert(arguments[0] === 'chef', "The first arg is a chef.");
}

infiltrateNoAlias('chef');


