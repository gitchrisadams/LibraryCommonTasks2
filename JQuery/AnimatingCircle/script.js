// Testing that JQuery is installed/working:
if(typeof jQuery == "undefined"){
    console.log("JQuery is not installed.");
}else{
    console.log("JQuery is installed correctly.");
}

// Animating a Circle:
$("#circle").click(function(){
    // width: needs to be in {} since it is an array.
    // 2000 is the time to increase width/height, 2 seconds in this case.
    $(this).animate({
        width:"400px", 
        height:"400px",
        marginLeft:"100px",
        marginTop:"100px"
    }, 2000, function(){
        // This is a call back function that will happens
        // once the animation completes: (Set bg to red)
        $(this).css("background-color", "red");
    });
});


