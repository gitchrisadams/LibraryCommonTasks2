// Testing that JQuery is installed/working:
if(typeof jQuery == "undefined"){
    console.log("JQuery is not installed.");
}else{
    console.log("JQuery is installed correctly.");
}

// Perform action when circle is clicked.
$("#circle").click(function(){
    // Change width of circle via css w/ JQuery.
    $("#circle").css("width", "400px");

    // Change background color to red via css w/ JQuery.
    $("#circle").css("background-color", "red");

    // Finding out what color the cirlce is:
    // If we have the css property and the value like above.
    // It changes the property but if we don't specify
    // a value, it gives us the property. Like this.
    console.log($("#circle").css("background-color"));
});

// Display the width of the body when body is clicked:
$("body").click(function(){
    console.log("The body is width: " + $("body").css("width"));
});

// Make items disappear when clicked.
// this refers to the item that was clicked. 
$("div").click(function(){
    $(this).css("visibility", "hidden");
    // Could also do like this: $(this).css("display", "none");

    if($(this).attr("id") == "circle"){
        // Get the id of element clicked on:
        // Could also just say "Clicked on a circle", left for reference.
        alert("You clicked on a " + $(this).attr("id"));
    }else{
        alert("You clicked on a square.");
    }

});


