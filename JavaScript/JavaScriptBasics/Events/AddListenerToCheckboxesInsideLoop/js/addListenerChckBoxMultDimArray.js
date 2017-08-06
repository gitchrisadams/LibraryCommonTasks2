/**
 * Populates checkboxes with a multi dim array and demos the use
 * of es5 modules using reveal pattern.
 */
var populateCheckBoxesFromMultDimArrayObjects = (function() {
  /**
   * Gets the checked or unchecked status.
   * @param {Object[]} checkboxesArray - The array to use for populating checkboxes.
   * @param {string} stringToLookFor - The string to look for. 
   */
  var getCheckedUncheckedStatus = function(checkboxesArray, stringToLookFor) {
    // Loop through stationParameters array of arrays and find station that matches stationId:
    for (var i = 0; i < checkboxesArray.length; i++) {
      for (var j = 0; j < checkboxesArray[i].length; j++) {
        if (checkboxesArray[i][j].stationID === stringToLookFor) {
          var paramID = checkboxesArray[i][j].paramID;
          var paramName = checkboxesArray[i][j].paramName;

          // Create Checkboxes using iife so event is bound to this parameter.
          $('#checkboxes').append("<input type='checkbox' name='" + paramID + 
            "' value='" + paramID + "'>" + 
            paramName + "</input><br>");

          (function(paramID){ 
            var checkBoxItem = document.querySelector("input[name='" + paramID + "']");
            checkBoxItem.addEventListener('click', function() {
              if ($(checkBoxItem).is(':checked')) {
                console.log('checked');
              } else {
                console.log('unchecked');
              }
            });
          })(paramID);
        }
      }
    }
  };

  /**
   * Test function to show we can add more functions to this module.
   * @param {string} testparam1 - The string to display.
   */
  var stupidFunctionTest = function(testparam1) {
    return 'From stupid function test and testparam1 val: ' + testparam1;
  };

  // Anything returned here is public.
  return {
    getCheckedUncheckedStatus: getCheckedUncheckedStatus,
    stupidFunctionTest: stupidFunctionTest
  }
})();