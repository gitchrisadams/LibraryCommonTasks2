/***** Add Items to start and end of list, get the <ul> element. ******/
var list = document.getElementsByTagName('ul')[0];

/****** Add item to end of list: ******/
// Create the li element.
var listItemEnd = document.createElement('li');

// Create text node:
var textContentEnd = document.createTextNode('cream');

// Add text node to the element.
listItemEnd.appendChild(textContentEnd);

// Add element to the end of the List:
list.appendChild(listItemEnd);

/****** Add item to start of list ******/
// Create the li element:
var listItemStart = document.createElement('li');

// Create text node:
var textContentStart = document.createTextNode('kale');

// Add text node to the element:
listItemStart.appendChild(textContentStart);

// Add element to the start of the List:
list.insertBefore(listItemStart, list.firstChild);

/* Update the class of all list items to class 'cool' */
// Get all list items.
var listItems = document.querySelectorAll('li');

// Loop through all list items and set class to 'cool'.
for(var i = 0; i < listItems.length; i++) {
  listItems[i].className = 'cool';
}

/***** Change the Heading 1 to display number of items in list ******/
// Get all h1 elements:
var heading1 = document.querySelector('h1');

// Get text in h1.
var headingText = heading1.firstChild.nodeValue;

// No. of <li> elements.
var totalItems = listItems.length;

// Create the heading w/ the total items to display text.
var newHeading = headingText + '<span>' + totalItems + '</span>';

// Update the h1 text:
heading1.innerHTML = newHeading;

