/*
 * oceansmap/static/js/util/prettify.js
 * Javascript functions for formatting strings.
 */

var prettifyIt = (function() {
  return {
    tidyUpTest: function () {
      console.log('Inside Prettify');
    },

    tidyUpTest2: function() {
      console.log("Tidy Test 2");
    }
  }
})();

    // Testing:
    // Put this in separate file and import file in some way.
    prettifyIt.tidyUpTest();
    prettifyIt.tidyUpTest2();

/// A close is an inner function that has access to variable in the outer enclosing functions 
// scope.
console.log("");
console.log("***********************************");
console.log("********** Closure Example 2 ******")
console.log("***********************************")
var globalVar = "xyz";

(function outerFunc(outerArg) {  
  var outerVar = 'a';

  (function innerFunc(innerArg) {
    var innerVar = 'b';
    
    console.log('from inner func');
    console.log(outerArg);
    console.log(innerArg);
    console.log(outerVar);
    console.log(innerVar);
    console.log(globalVar);
  })(456);
})(123);
