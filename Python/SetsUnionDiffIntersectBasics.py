# Sets:
# Create list of farm animals and display them:
farm_animals = {"sheep", "cow", "hen"}
print("The farm animals:")
print(farm_animals)
print()

# Print a separator:
print("=" * 40)
print()

# Create a set of wild animals:
wild_animals = set(["lion", "tiger", "panther", "elephant", "hare"])
print("The wild animals as a set: ")
print(wild_animals)
print()

print("Looping through the set:")
for animal in wild_animals:
    print(animal)
print()

# Print a separator:
print("=" * 40)
print()

# Add a horse to the farm animals and the wild animals:
farm_animals.add("horse")
wild_animals.add("horse")

#Output again, this time both a horse:
print("The wild animals as a set w/ a horse: ")
print(wild_animals)
print()

# Print a separator:
print("=" * 40)
print()

# Print out the farm animals w/ the horse added:
print("The farm animals w/ a horse:")
print(farm_animals)
print()

# Print a separator:
print("=" * 40)
print()

# Unions:
# Combine all the farm and wild animals:
print("Union of all the animals: ")
print(farm_animals.union(wild_animals))

# Print a separator:
print("=" * 40)
print()

# Intersection:
# Prints out items that match in each set.
print("Intersection of all the animals: ")
print(farm_animals.intersection(wild_animals))

# Print a separator:
print("=" * 40)
print()

# Difference:
# Prints items in first set that are not in the second set:
# In this case horse is a duplicate so this is not displayed.
print("Difference of all the animals: ")
print(farm_animals.difference(wild_animals))

# Print a separator:
print("=" * 40)
print()

# Symmetric difference:
# Symmetric difference is opposite of Intersection:
# So in this case, prints everything except horse.
print("Symetric Difference of all the animals: ")
print(farm_animals.symmetric_difference(wild_animals))
print()

# Print a separator:
print("=" * 40)
print()

# Removing items from set:
# If use discard instead of remove() if the item is not there
# you won't get an error but would w/ remove()
wild_animals.discard('panther')
print("Panther is now gone:")
print(wild_animals)








