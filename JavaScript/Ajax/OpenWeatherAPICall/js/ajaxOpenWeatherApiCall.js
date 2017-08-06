"use strict";
/**
 * Returns the json data from openweathermap.org.
 * This file is modularized using reveal pattern.
 */
var openWeatherApiCall = (function() {
	var url = "http://api.openweathermap.org/data/2.5/weather?q=London,England";
    var httpRequest;

    /**
     * Makes the request to openweathermap.org using api key.
     * @param {string} The api key to use for openweathermap.org
     */
    function makeRequest(apiKey) {

      httpRequest = new XMLHttpRequest();
      httpRequest.onreadystatechange = responseMethod;   // When http request is ready, call responseMethod.
      httpRequest.open('GET', url + '&appid=' + apiKey);
      httpRequest.send();
    }

    // Handle XHR response.
    function responseMethod() {
      if (httpRequest.readyState === 4) {
        if (httpRequest.status === 200) {
          updateWeatherApiUI.uiUpdateSuccess(httpRequest.responseText);
        } else {
          updateWeatherApiUI.uiUpdateFail();
        }
        return httpRequest.responseText;
      }
    };

    // Return only makeRequest, reponseMethod is a private method.
    return {
      makeRequest: makeRequest,
      
    }
})();