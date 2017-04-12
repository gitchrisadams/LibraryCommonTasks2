// Testing that JQuery is installed/working:
if(typeof jQuery == "undefined"){
    console.log("JQuery is not installed.");
}else{
    console.log("JQuery is installed correctly.");
}

// Alert when circle is clicked using JQuery syntax:
$("#circle").click(function(){
    alert("Circle was clicked!");
});

$(".square").click(function(){
    alert("Square was clicked!");
});