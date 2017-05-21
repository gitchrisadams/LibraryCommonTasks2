# Writing to file w/ Pickle Python Library:

# Import Pickle Python Library:
import pickle

# Create a Tuple w/ nested tuples:
imelda = ('More Mayhem',
          'Imelda May',
          '2011',
          ((1, 'Pulling the Rug'),
           (2, 'Pysycho'),
           (3, 'Mayhem'),
           (4, 'Kentish Town Walze')
           )
          )

# Use Pickle Library to write to a Pickle file:
# Uncomment to write file:
# with open("imelda.pickle", "wb") as pickle_file:
#     pickle.dump(imelda, pickle_file)

# Use Pickle library to read the above Pickle file we created.
with open("imelda.pickle", "rb") as imelda_pickled:
    imelda2 = pickle.load(imelda_pickled)

# Output the whole tuple:
print("The entire imelda tuple: ")
print(imelda2)
print()

# separator:
print("-" * 60)

# Store the individual items:
album, artist, year, track_list = imelda2

# Print individual items:
print("The Imelda individual items:")
print(album)
print(artist)
print(year)
print()
print("Tracks:")
for track in track_list:
    track_number, track_title = track
    print(track_number, track_title)

# separator:
print("-" * 60)

# Create a Tuple w/ nested tuples:
rocky_movie = ('Rocky',
          'Sylvester Stallone',
          '1976',
          ((1, 'Adrian'),
           (2, 'Paulie'),
           (3, 'Apollo'),
           (4, 'Budkus')
           )
          )

# Use Pickle Library to write to a Pickle file:
# Uncomment to write file:
# with open("rocky.pickle", "wb") as rocky_file:
#     pickle.dump(rocky_movie, rocky_file)

# Use Pickle library to read the above Pickle file we created.
with open("rocky.pickle", "rb") as rocky_pickled:
    rocky2 = pickle.load(rocky_pickled)

# Output the whole tuple:
print("The entire Rocky movie tuple: ")
print(rocky2)
print()

# separator:
print("-" * 60)

# Store the individual items:
movie, actor, year, characters = rocky2

# Print individual items:
print("The Rocy Movie individual items:")
print(movie)
print(actor)
print(year)

print()

# Print each characters by looping through all the characters.
# The char_number and char_name are pulled out of the tuple.
print("Characters in the Rocky movie:")
for charName in characters:
    char_number, char_name = charName
    print(char_number, char_name)





































