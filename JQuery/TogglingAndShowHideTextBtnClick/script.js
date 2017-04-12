// Testing that JQuery is installed/working:
if(typeof jQuery == "undefined"){
    console.log("JQuery is not installed.");
}else{
    console.log("JQuery is installed correctly.");
}

// Perform action when a <div> is clicked:
$("div").click(function(){
    // Causes item to fade out and disappear.
    $(this).fadeOut("slow", function(){
        // Code here happens when fade completes:
        alert("Fadeout has finished.");
    });
});

// Fade out text when button is clicked:
$("#HideText").click(function(){
    $("#initialText").fadeOut("slow");
});

// Show text when button is clicked:
$("#ShowText").click(function(){
    $("#hiddenText").css("visibility", "visible")
});

// Toggle the text on/off based on if it's displayed or not:
$("#toggleButton").click(function(){
    if($("#toggleText").css("display") == "none"){
        $("#toggleText").fadeIn("slow");
    }else{
        $("#toggleText").fadeOut("slow");
    }
});


