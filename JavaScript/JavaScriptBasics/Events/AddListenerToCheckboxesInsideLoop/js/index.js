// Test data:
// Multi dim array:
var array1 = [[{stationID: 'station1', paramID: 'paramID1', paramName: 'paramname1'}], [{stationID: 'station2', paramID: 'paramID2', paramName: 'paramname2'}], [{stationID: 'station3', paramID: 'paramID3', paramName: 'paramname3'}]];
var stationIDToFind = 'station1';

// Call function:
populateCheckBoxesFromMultDimArrayObjects.getCheckedUncheckedStatus(array1, stationIDToFind);
var stupidTest = populateCheckBoxesFromMultDimArrayObjects.stupidFunctionTest("test param passed in...");
console.log(stupidTest);