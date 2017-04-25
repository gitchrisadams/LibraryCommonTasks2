// Create a new Model:
var SongModel = Backbone.Model.extend();

// Create a new Collection:
var SongsCollection = Backbone.Collection.extend({
	// Store the model as an object in the collection:
	model: SongModel
});

// Create a new songs Collection by passing in
// an array of Song models:
var songs = new SongsCollection([
	new SongModel({title: "Song 1"}),
	new SongModel({title: "Song 2"}),
	new SongModel({title: "Song 3"})
]);

// We can also add songs individually like this:
songs.add(new SongModel({title: "Song 4"}));

console.log("songs object info:");
console.log(songs);

console.log("\nSong at element 0:");
console.log(songs.at(0));

console.log("\nGetting Song at element 0 using c id, same as above:");
console.log(songs.get("c1"));

// Removing a song from the collection:
console.log("\nRemoving song at element 0:");
songs.remove(songs.at(0));
console.log("songs object info after remove:");
console.log(songs);