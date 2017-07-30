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

// Define function for which we can create new ninja objects.
function Ninja() {
  this.skulk = function() {
    return this;
  };
}

// Create two new ninjas:
var ninja1 = new Ninja();
var ninja2 = new Ninja();

// Prove ninja1 and ninja2 are two sep instances:
assert(ninja1.skulk() === ninja1, "The 1st ninja is skulking");
assert(ninja2.skulk() === ninja2, "The 2nd ninja is skulking");

// Add a property to only ninja2.
ninja2.weapon = "sword";

console.log(ninja2.weapon);
console.log(ninja1.weapon);

