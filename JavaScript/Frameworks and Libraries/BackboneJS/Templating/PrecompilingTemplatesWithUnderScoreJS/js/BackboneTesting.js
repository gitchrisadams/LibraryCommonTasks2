// Create a template string:
var template = '<%= lat %> <%=lon %>';

// Compile template using UnderscoreJS function:
// Compiling converts the String template into a function
// that we can call to render the result.
var compiled = _.template(template);

// Log the type of the copiled template, should display "function"
console.log(typeof compiled);

// Log the actual compiled function to console:
console.log(compiled);

// Loop 100 times and render our template:
for(var i = 0; i < 100; i++){
	console.log(compiled({lat: -27, lon: 153}));
}