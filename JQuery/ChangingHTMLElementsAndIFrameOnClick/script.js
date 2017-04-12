// Testing that JQuery is installed/working:
if(typeof jQuery == "undefined"){
    console.log("JQuery is not installed.");
}else{
    console.log("JQuery is installed correctly.");
}

// Change html in the <p> tag when circle clicked
// using JQuery.
$("#circle").click(function(){
    // Equivalent to javascript innerhtml.
    // Changes text in the <p> tag.
    $("p").html("This text has changed.");

    // Alert box w/ the contents of the <p> tag:
    alert($("p").html());

    // Change the iframe content using JQuery:
    $("iframe").attr("src", "http://ChristopherAdams.com");
});

// Perform action on hover over circle:
$("#circle").hover(function(){
    console.log("You are hovering!");
});

// Action when square is clicked:
$(".square").click(function(){
    alert("Square was clicked!");
});

