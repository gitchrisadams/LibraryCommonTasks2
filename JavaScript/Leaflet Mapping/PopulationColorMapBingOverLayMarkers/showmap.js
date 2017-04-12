/**
    Christopher Adams
    4/1/17
    Leaflet Map testing.
*/

// Variable to store Countries layer:
var countriesLayer;

// Will set a new style for polygon we want to hightlight.
function highlightFeature(e){
    // Variable to store the layer:
    var layer = e.target;

    // Set the layer style:
    layer.setStyle(
        {
            weight: 5,
            color:'black',
            fillColor:'white',
            fillOpacity:0.2
        }
    );

    // Only bring layer to the front if browser is not 
    // ie or operat since they have issues doing that.
    if(!L.Browser.ie && !L.Browser.opera){
        layer.bringToFront();
    }
}

// Restore previous style when the mouse leaves
// the country polygon.
function resetHighlight(e){
    countriesLayer.resetStyle(e.target);
}

// Zoom to click feature:
function zoomToFeature(e){
    map.fitBounds(e.target.getBounds());
}

// Will be called on each created feature layer.
// Useful for attaching events and popups to features.
function countriesOnEachFeature(feature, layer){
    layer.on(
        {
            // Attach features to the events:
            mouseover: highlightFeature,
            mouseout: resetHighlight,
            click: zoomToFeature
        }
    );
}

// Function to change color of map based on
// the population of the country.
function getCountryColor(popEst){
    // Pop larger than 100 millions, change map to red color:
    if(popEst > 100000000){
        return 'red';
    // Pop larger than 50 million, change to blue.
    }else if(popEst > 50000000){
        return 'blue';
    } else{
        // Pop less than 50 million.
        return 'green';
    }
}

// Styles for the map:
// Set fill color based on population.
function countriesStyle(feature){
    return{
        fillColor: getCountryColor(feature.properties.pop_est),
        weight:2,
        opacity:1,
        color:'white',
        dashArray:3,
        fillOpacity:0.7
    }
}

// Set the map view, this is area the map will display:
// Location set to Westerly, RI:
var map = L.map('map').setView([41.377599, -71.827287], 8);

// Bing Layer:
var BING_KEY = 'Atjpz5q32Tr2RN806rCfK7TrFwUWbVMOG_wd72BE52eK7yTpeEiqa6_JsIf34Yc-';
var bingLayer = L.tileLayer.bing(BING_KEY).addTo(map);

// Create a new map layer and add it to the map,
// passing in the countries data variable.
// Pass in style to style the map.
countriesLayer = L.geoJson(
    countries,
    {
        style: countriesStyle,
        onEachFeature: countriesOnEachFeature
    }
).addTo(map);

// Fit the bounds of the map:
map.fitBounds(countriesLayer.getBounds());

// Create a Legend for the map:
var legend = L.control({position:'bottomright'});
legend.onAdd = function(map){
    var div = L.DomUtil.create('div', 'legend');

    // The Legend labels:
    var labels = [
        "Population greater than 100,000,000",
        "Population greater than 50,000,000",
        "Population equal or less than 50,000,000"
    ];

    // Define the legend grades:
    var grades = [100000001, 50000001, 50000000];

    // Legend title:
    div.innerHTML = '<div><b>Legend</b></div>';

    // Loop through grades and append a label for each grade:
    for(var i = 0; i < grades.length; i++){
        div.innerHTML += '<i style="background:' 
        + getCountryColor(grades[i]) + '">&nbsp;&nbsp;</i>&nbsp;&nbsp;'
        + labels[i] + '<br />';
    }

    // Return the div:
    return div;
}

// Add the legend to the map:
legend.addTo(map);

// Create a marker and add it to the map:
var point = [41.377599, -71.827287];
var marker = L.marker(point).addTo(map);

// Create another Marker w/ diff location:
// Location New London, CT
var point2 = [41.3556539, -72.09952090000002];
//var marker2 = L.marker(point2).addTo(map);

// Create another Maker for Killingly, CT:
var pointKillingly = [41.81224, -71.833415];
var markerKillingly = L.marker(pointKillingly).addTo(map);

// Create a Circle marker and add to map:
// Must define the circle location, radius, and style.
// Location is at the point and radius is 10000 around it.
var circle = L.circle(
    point,
    10000,
    {
        color:'purple',
        fillColor:'red',
        fillOpacity:0.8
    }
).addTo(map);

// Create a blue arrow icon for New London, CT location:
var blueArrowIcon = L.icon(
    {
        iconUrl:'https://upload.wikimedia.org/wikipedia/en/f/f1/Down_Arrow_Icon.png',
        //shadowUrl:'http://leafletjs.com/docs/images/logo.png',
        iconSize:[38, 95],
        shadowSize:[50, 64],
        iconAnchor:[22, 94],
        shadowAnchor:[4, 62],
        popupAnchor:[-3, -76]
    }
);

// Add the greenIcon to the New London marker:
var marker2 = L.marker(point2, {icon: blueArrowIcon}).addTo(map);

marker.bindPopup(
    '<b>Westerly, RI</b><div><img style="width:100%" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Downtown_Westerly%2C_RI.jpg/1920px-Downtown_Westerly%2C_RI.jpg" alt="image" /></div>',
    {minWidth : 256}
);
