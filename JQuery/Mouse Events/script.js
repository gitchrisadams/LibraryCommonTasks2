if(typeof jQuery == "undefined"){
    console.log("JQuery is not installed.");
}else{
    console.log("JQuery is installed correctly.");
}

$("document").ready(function(){
	// Moving mouse over the div:
	$("#mouseMoveArea").on("mousemove", onMouseOver);

	// When mouse is clicked on the div:
	$("#mouseMoveArea").on("click", onMouseClick);

	// When mouse leaves area:
	$("#mouseMoveArea").on("mouseleave", onMouseLeave);
});

// Display the event type, the x/y coordinates.
// The evt.which is whether a button is held down.
function onMouseOver(evt){
	$("#mouseMoveArea").text(evt.type + ": " + evt.pageX + ", " + evt.pageY + "\n" +
		"Button: " + evt.which + "Key: " + evt.metaKey
	);
}

// Display location of where mouse is clicked:
function onMouseClick(evt){
	$("#mouseMoveArea").text(evt.type + ": " + evt.pageX + ", " + evt.pageY);

	// Turn mouse tracking off when leaving area:
	$("mouseMoveArea").off("mousemove", onMouseOver);
}

// Display message when the mouse leaves the div:
function onMouseLeave(evt){
	$("#mouseMoveArea").text("mouseleave");
}