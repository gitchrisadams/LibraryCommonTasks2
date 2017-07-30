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

function whatsMyContext() {
  return this;
}

// Regular function call where this is equal to window.
assert(whatsMyContext() === window, "this is equal to window. Function call on window.");

// Assign variable to the whatMyContext function, so this context is still 'window'.
var getMyThis = whatsMyContext;
assert(getMyThis() === window, "Since getMyThis equals whatsMyContext, it also equals window.");

// Create object with property assigned to the whatsMyContext function.
var ninja1 = {
  getMyThat: whatsMyContext
};

// Since getMyThis is a property of ninja1, context of getMyThat function
// should be equal to ninja1 not window.
assert(ninja1.getMyThat() === ninja1, "Yes, ninja1.getMyThat is equal to ninja1");

// Create another object:
var ninja2 = {
  getMyThat: whatsMyContext
};

// Should be equal to its object, ninja2.
assert(ninja2.getMyThat() === ninja2, "Yes, ninja2.getMyThat is equal to ninja2");

