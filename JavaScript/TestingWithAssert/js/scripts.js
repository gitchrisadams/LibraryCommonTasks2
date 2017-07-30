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
    assert(true, "");
  assert(true, "The test suite is running, default pass message...");
  assert(false, "The test suite has finished, default Fail!...");
};

function infiltrate(person) {
  assert(person === 'gardener', 'The person is a gardener');

  assert(arguments[0] === 'gardener', 'The first arg is a gardener');

  arguments[0] = 'ninja';

  assert(person === 'ninja', 'The person is now ninja');

  assert(arguments[0] === 'ninja', "The first arg is a ninja");

  person = 'gardener';

  assert(person === 'gardener', 'The person is a gardener again.');

  assert(arguments[0] === 'gardener', "The first arg is a gardener again.");
}

// Call the function passing in 'gardener':
infiltrate('gardener');


