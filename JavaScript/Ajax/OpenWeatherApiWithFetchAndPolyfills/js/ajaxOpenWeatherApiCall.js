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
      fetch(url + '&appid=' + apiKey).then(function(response) {
        if (!response.ok) {
          throw Error(response.status);
        }
        return response.json();
      }).then(function(response) {
        updateWeatherApiUI.uiUpdateSuccess(response);
      }).catch(function(error) {
        updateUIError(error);
      });
    }

    // Return only makeRequest, reponseMethod is a private method.
    return {
      makeRequest: makeRequest,

    }
})();