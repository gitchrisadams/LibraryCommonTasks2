# Tuples:
# Tuples are immutable.
# Tuples can hold different item types like Strings and numbers etc..
# unlike lists that hold the same data type and lists are mutable.

# Creating a tuple: Can use w/ parens or not.
myTuple = "a", "b", "c"
myTuple2 = ("d", "e", "f")

# Creating a tuple w/ only one item:
# Notice we need a common after item when only one.
myTupleSingle = (3,)

# Swapping values w/ Tuples, no need for a temp variable:
a, b = 1, 2
print("The value of tuples: " + str(a) + ", " + str(b))
print()

# swap:
a, b = b, a
print("The value of tuples after swap: " + str(a) + ", " + str(b))
print()

# Output the tuple:
print("MyTuple " + str(myTuple))
print("MyTuple2 " + str(myTuple2))

# Create more Tuples:
welcome = "Welcome to my Nightmare", "Alice Cooper", 1975
bad = "Bad Company", "Bad Company", 1974
budgie = "Nightflight", "Budgie", 1981
metallica = "Ride the Lightning", "Metallica", 1984

# Create tuple within a tuple for the tracks (1, "Pulling the....) etc...
imelda = "My Mayhem", "Imelda May", 2011, (
    (1, "Pulling the Rug"), (2, "Psycho"), (3, "Mayhem"), (4, "Kentish Town Walz"))

# Create Tuple so tracks can be pulled off separately:
noSong = "No Song No Song", "My Cool band!", 2017, (1, "Pulling the Trigga"), (2, "Shovels and Hoes"), (3, "Nuts in da air"), (4, "Walkin on Sunshine")

# Is the word "Ride" in the tuple?
print("Is 'Ride the Lightning' in metallica?")
print("Ride the Lightning" in metallica[0])
print()

# Is marshmallows in the tuple?
print("Is 'Marshmallow' in metallica?")
print("Marshmallow" in metallica[0])
print()

# Print entire Metallica tuple:
print(metallica)

# Print one item of a tuple:
print(metallica[0])
print(metallica[1])
print(metallica[2])

# We can't change the tuple due to tuples being immutable:
# Below would cause error:
# metallica[0] = "Master of puppets"

# Updating a tuple entry:
# But we can get around it by updating a variable in a Tuple:
metallica = metallica[0], "metal all eeeka", metallica[2]
print(metallica)

# Extracting individual values from a Tuple:
title, artist, year, tracks = imelda
print(title)
print(artist)
print(year)
print(tracks)

# Could also extract individual tracks:
title, artist, year, track1, track2, track3, track4 = noSong
print(title)
print(artist)
print(year)
print(track1)
print(track2)
print(track3)
print(track4)

# Loop through tracks in Imelda:
for song in tracks:
    print("\t", song)













