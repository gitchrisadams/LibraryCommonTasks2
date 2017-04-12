// Testing that JQuery is installed/working:
if(typeof jQuery == "undefined"){
    console.log("JQuery is not installed.");
}else{
    console.log("JQuery is installed correctly.");
}

$( function() {
    // The axis: "y" constrains axis to move vertical only.
    $( "#draggable" ).draggable({axis: "y"});
  } );

$( function() {
    $( "#resizable" ).resizable({
      maxHeight: 250,
      maxWidth: 350,
      minHeight: 150,
      minWidth: 200
    });
  } );