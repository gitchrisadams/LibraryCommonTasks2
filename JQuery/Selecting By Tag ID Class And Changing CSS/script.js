if(typeof jQuery == "undefined"){
    console.log("JQuery is not installed.");
}else{
    console.log("JQuery is installed correctly.");
}

$("document").ready(function(){
	// Select all elements w/ a <p> tag and surrount w/ red border:
	$("p").css("border", "3px solid red");

	// Add a border to the css selector w/ class of "selectors":
	$(".selectors").css("border", "3px solid blue");

	// Add border to css of selector w/ id of #intro:
	$("#intro").css("border", "3px dashed green");

	// Select only the first paragraph of p tags and add an orange border:
	$("p:first").css("border", "3px solid orange");

	// Select all h2 tags that do not have the .selectors class and add yellow border:
	$("h2:not(.selectors)").css("border", "3px dashed yellow");
});