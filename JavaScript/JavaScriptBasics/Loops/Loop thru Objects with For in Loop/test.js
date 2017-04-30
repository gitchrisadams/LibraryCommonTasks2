// Create objects:
var player = { name: 'Thomas', rank: 'Midshpman', age: 25 };

// Loop through the objects displaying key and value:
for(var prop in player){
	if(!player.hasOwnProperty(prop)) continue;

	console.log(prop + ": " + player[prop]);
}