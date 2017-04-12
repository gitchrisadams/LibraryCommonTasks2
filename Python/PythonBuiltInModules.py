# Python built-in modules:

# Imports:
import shelve

# Display all module names in Python namespace:
print("The Python modules in Python namespace: ")
print(dir())
print()

# Display all the built-in Python modules:
print("The built-in Python modules")
for m in dir(__builtins__):
    print(m)
print()

# Display all the shelve modules:
print("The Shelve modules:")
for s in dir(shelve):
    print(s)
print()

# Display all the shelve modules in shelf Class:
print("The Shelve class Modules:")
for shelveClasses in dir(shelve.Shelf):
    if shelveClasses[0] != '_':
        print(shelveClasses)
print()






