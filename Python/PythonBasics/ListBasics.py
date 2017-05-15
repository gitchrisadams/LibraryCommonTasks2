# Create a list of numbers:
numbers = [1,2,3,4,5]

# Other way to create a list:
# list2 = list()

# Display the list of numbers:
print(numbers)
print()

# Add the numbers in the list and display:
print(numbers[0] + numbers[1])
print()

# Loop through the list:
for i in numbers:
    print(i)
print()

# Create a List of Beatles members:
beatles = ['John', 'Paul', 'George', 'Ringo']

# Display beatles list to start:
print("Beatles to start: " + str(beatles) + '\n')

# Determine number of items in a list:
# Convert to string and pass to len function.
print("Number of Beatles " + str(len(beatles)) + '\n')

# Display all beatles except the first one:
print("Beatles members except first: " + str(beatles[1:]) + '\n')

# Display the first two beatles:
print("The first two beatles: " + str(beatles[0:2]) + '\n')

# Display the last two beatles:
print("Last two beatles: " + str(beatles[2:4]) + '\n')

# Sort a list without changing the list:
print("Beatles temp sorted: " + str(sorted(beatles)) + '\n')

# Display Beatles List before sort:
print("Beatles before perm sort: " + str(beatles) + '\n')

# Sort the beatles permanently
beatles.sort();

# Permanently sort a list:
print("Beatles after perm sorted: " + str(beatles) + '\n')

# Reverse the order of beatles:
beatles.reverse()
print("Beatles permanently reversed: " + str(beatles) + '\n')

# Adding a name to end of the list:
beatles.append('Pete')
print("Beatles w/ Pete added: " + str(beatles) + '\n')

# Remove last element of list w/ pop:
beatles.pop();
print("Beatles after popping off Pete: " + str(beatles) + '\n')

# Using del to delete from a list:
stringToDel = "jackdaws love my big sphinx of quartz".split()

# Delete the second element 'love':
del stringToDel[1]

print("\nLove deleted:")
print(stringToDel)

# Remove the word 'big' w/ remove()
stringToDel.remove('big')
print("big is now removed")
print(stringToDel)

# Inserting a world into a list:
stringToDel.insert(0, "toe")
print("Toe added")
print(stringToDel)

# Find the index value of a specific beatle:
indx = beatles.index('George')
print("\nThe index of George is at: " + str(indx) + '\n')

# Delete a beatle at specific index, in this case George:
del beatles[indx]
print("George deleted: " + str(beatles) + '\n')

# Joining Strings from a List:
# Create a list:
myList = ["a", "b", "c", "d"]

# Join the each element to String adding a comma:
newString = ", ".join(myList)

# Output:
print("\nThe new String is:")
print(newString)
print()

# Using split to split a string:
stringSplit = "show how to index into sequences".split()
print("\nThe string split")
print(stringSplit)

# Display the third element in the split string:
print("The third element in the string is:")
print(stringSplit[2])

# Accessing elements at the end w/ negative indexes:
print("The last element is:")
print(stringSplit[-1])
print("The 5th from the last element is:")
print(stringSplit[-5])

# Joining Strings from a String:
letters = "abcdefghijklmnopqrstuvwxyz"

# Join the each element to String adding a comma:
newString = ", ".join(letters)

# Output:
print("\nThe new String is:")
print(newString)
print()

# List Concatenation:
m = [2, 1, 3]
n = [4, 7, 11]
k = m + n
print("\nm and n are unchanged, but k is a new list w/ m and n combined:")
print(k)

# List Comprehensions:
# Create a normal String and split it into a list:
myPlainOldList = """Why sometimes I have believed as many as six impossible
                    things before breakfast""".split()

print("My plain old list:")
print(myPlainOldList)

# Create a List comprehension from the list:
# This prints out the number of chars in each word.
print("\nList comprehension:")
print([len(word) for word in myPlainOldList])

































