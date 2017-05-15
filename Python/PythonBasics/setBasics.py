# Create a new set:
p = {6, 28, 496, 8128}

print("The type of p is a ")
print(type(p))
print("The set:")
print(p)

# Sets do not have duplicates, so you can use a set
# to remove duplicates from a list
listToRemoveDupes = [1, 4, 2, 1, 7, 9, 9]

setWithDupesRemoved = set(listToRemoveDupes)

print("\nThe list as a set w/ no dupes:")
print(setWithDupesRemoved)

# Adding a single element to a set:
setWithDupesRemoved.add(22)

print("\nNow set has 22 since we added it:")
print(setWithDupesRemoved)

# If you try to add a dupe, it has not effectd and no error:
setWithDupesRemoved.add(4)
print("\nEven though added 4, 4 already in set, so no dupe added:")
print(setWithDupesRemoved)

# Removing and Discarding from a set:
# .remove() will throw error if item is not in set,
# .discard() will just ignore it if not in set so no error.
setWithDupesRemoved.discard(4)
setWithDupesRemoved.discard(1000)
print("\nSet w/ 4 removed:")
print(setWithDupesRemoved)