// Testing that JQuery is installed/working:
if(typeof jQuery == "undefined"){
    console.log("JQuery is not installed.");
}else{
    console.log("JQuery is installed correctly.");
}

// Use .get to get the contents of a file:
// The data param will contain contents of info.txt file.
$.get("info.txt", function(data){
    alert(data);
});

// Use ajax to get data from file and display in a <p> tag.
// If it fails it will display error to log:
$.ajax("info.txt")
    .done(function(data){
        $("p").html(data);
})
    .fail(function(){
        console.log("Could not get data.");
});