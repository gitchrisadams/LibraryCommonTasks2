if(typeof jQuery == "undefined"){
    console.log("JQuery is not installed.");
}else{
    console.log("JQuery is installed correctly.");
}

$("document").ready(function(){
	/***** Create some new content *****/
	// Create a <p> taga and append some content to it:
	var newP = $("<p>");
	newP.append("<em>Hello There</em>");

	// Add the content to the page:
	$("#example").html(newP);

	// Prepend puts the item before the item that is already there:
	$("#creation").prepend("Holy Cow! ");

	// Add some new html inside a div w/ id example2:
	$("#example2").html("<h2>This is a new H2</h2>");

	// Text will escape html content and just render the text:
	$("#example3").text("<h2>This is text but the h2 tag is escaped</h2>");

	
});