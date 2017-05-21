# Create a Dictionary w/ Key/Value pairs:
numbers = {'Bob':'322', 'Mary':'110', 'Joe':'222'}

# Loop through the dictionary:
for i in numbers:
    print(i)
print()

# Display the value associated w/ first element 'Bob':
print(numbers['Bob'] + '\n')

# Create Beatles members w/ their instruments:
beatles = {'John':'Guitar', 'Paul':'Bass', 'George':'Guitar', 'Ringo':'Drums'}

# Display our beatles dictionary:
print("Beatles members: " + str(beatles) + '\n')

# Display the instrument John plays:
print("John plays the " + str(beatles['John']) + '\n')

# Display how many items are in the Dictionary:
print("There are " + str(len(beatles)) + " items in the Dictionary." + '\n')

# List the keys in a Dictionary:
print("The keys in the Dictionary: " + str(list(beatles.keys())) + '\n')

# List the values in a Dictionary:
print("The values in the Dictionary: " + str(list(beatles.values())) + '\n')

# Loop through Dictionary displaying name and instrument the person plays:
for name in beatles.keys():
    print(name + ' plays the ' + beatles[name])
print()

# Using the get function to get a specific value
# out of a Dictionary.
print('Paul plays the ' + str(beatles.get('Paul')) + '\n')

# Change the instruments that Paul plays:
beatles['Paul'] = ['Bass', 'Guitar', 'Keyboard']
print('Paul now plays all these: ' + str(beatles.get('Paul')) + '\n')

# Add Pete to the Dictionary:
beatles['Pete'] = 'Drums'
print("New Beatles member Dictionary: " + str(beatles) + '\n')

# Pop Pete off the Dictionary:
beatles.pop('Pete')
print("Pop Pop Pop goes the Pete : " + str(beatles))

# Use the items() method to display the beatles dictionary:
print(beatles.items())
print()

# Store a Dictionary as a Tuple:
f_tuple = tuple(beatles.items())
print()

print("The tuple is: ")
print(f_tuple)
print()

# Combining two dictionaries:
# We pass in to update the dictionary to combine.
numbers.update(beatles)
print("The combined Dictionary:")
print(numbers)
print()

# Making a copy of a Dictionary:
bugs = beatles.copy()
print("The bugs(Beatles Copy):")
print(bugs)
print()

# Clear the Beatles Dictionary:
beatles.clear()
print("Beatles now cleared: " + str(beatles) + "\n")


# Copying Dictionaries using copy()
dictToCopy = dict(red=12345, blue=23456, white=7777, orange=99999)

newDictFromDictToCopy = dictToCopy.copy()
print("The newly copied dict is: ")
print(newDictFromDictToCopy)

# Copying dictionaries using the dict contructor:
newDictUsingContructor = dict(dictToCopy)
print("\nThe newly copied dict using dict contructor")
print(newDictUsingContructor)


# Update a dictionary w/ contents of another dictionary:
newDictToMergeIn = dict(yellow=7654, blue=9876)

dictToCopy.update(newDictToMergeIn)
print("\nThe dictToCopy dictionary w/ new dict merged in:")
print(dictToCopy)


# Another way to add one dict to another:
print("")
dict1 = {'one': 1, 'two': 2, 'three': 3, 'four': 4, 'five': 5}
dict2 = {'six': 6, 'seven': 7, 'eight': 8}
dict3 = {**dict1, **dict2, 'nine': 9}

print('dict3:')
print(dict3)

# Print the keys in dict:
print("\nKeys:")
for k in dict3: print(k)

# Print keys and values:
print('\nKeys and values:')
for k, v in dict3.items(): print(k, v)

# Finding a value otherwise just printing 'not found'
print("\nIs three in there?")
print(dict3.get('three', 'not_found'))

print("\nIs there a one_hundred in there?")
print(dict3.get('one_hundred', 'not_found'))


















