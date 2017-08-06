var updateWeatherApiUI = (function() {
  /**
   * Update the ui when request is successful.
   * @param {Object} responseText - The json response text.
   */
  var uiUpdateSuccess = function (responseText) {
    var response = JSON.parse(responseText);
    var condition = response.weather[0].main;

    // Temp from api comes in as Kelvin, so convert to degrees C.
    var degC = response.main.temp - 273.15;
    var degCInt = Math.floor(degC);
    var degF = degC * 1.8 + 32;
    var degFInt = Math.floor(degF);
    var weatherBox = document.getElementById("weather");
    weatherBox.innerHTML = "<p>" + 
      degCInt + "&#176; C / " +
      degFInt + "&#176; F </p>" +
      "<p>" + condition + "</p>";
  };

  /**
   * Update the ui when request is not successful.
   */
  var uiUpdateFail = function() {
    var weatherBox = document.getElementById("weather");
    weatherBox.className = "hidden";
  };

  return {
    uiUpdateSuccess: uiUpdateSuccess,
    uiUpdateFail: uiUpdateFail
  }

})();