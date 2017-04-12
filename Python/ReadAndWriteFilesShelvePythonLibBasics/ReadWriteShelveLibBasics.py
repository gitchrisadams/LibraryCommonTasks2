# Shelve Library

# Import the library:
import shelve

# Store the fruit list in a file using shelve library:
# We can use the 'with' or other option below:
# with shelve.open('ShelfTest') as fruit:
#     # Create dictionaries of fruits:
#     fruit['orange'] = "A sweet, orange, citrus fruit"
#     fruit['apple'] = "Good for making cider."
#     fruit['lemon'] = "A sour, yellow citrus fruit."
#     fruit['grape'] = "A small, sweet fruit growing in bunches."
#     fruit['lime'] = "A sour, green citrus fruit."
#
#     # Print out some fruits:
#     print(fruit["lemon"])
#     print(fruit["grape"])

# Other option shelve.open we need to close
# the file ourselves when done w/ it.
# with shelve.open('ShelfTest') as fruit:
# Create dictionaries of fruits:
fruit = shelve.open('ShelfTest')
fruit['orange'] = "A sweet, orange, citrus fruit"
fruit['apple'] = "Good for making cider."
fruit['lemon'] = "A sour, yellow citrus fruit."
fruit['grape'] = "A small, sweet fruit growing in bunches."
fruit['lime'] = "A sour, green citrus fruit."

# Print out some fruits:
print(fruit["lemon"])
print(fruit["grape"])

# While true keep prompting user to enter a fruit:
while True:
    shelf_key = input("Please enter a fruit: ")
    if shelf_key == "quit":
        break

    # Use fruit entered to get the fruits description and display.
    # Second arg to fruit.get() displays if we don't have that fruit.
    description = fruit.get(shelf_key, "We don't have a " + shelf_key)
    print("The description: ")
    print(description)
    print()
print()

# Printing out the key/value ordered by key:
# Store the fruit keys as a list:
ordered_keys = list(fruit.keys())

# Sort the list:
ordered_keys.sort()

# Loop through the ordered keys and display:
print("The fruits ordered by fruit name:")
for f in ordered_keys:
    print(f + " - " + fruit[f])


# Done w/ file so close it:
fruit.close()

print(fruit)
print()

# Separator:
print("-" * 50)
print()

# Motorcycle shelve example:
with shelve.open("bike") as bike:
    bike["make"] = "Honda"
    bike["model"] = "250 dream"
    bike["color"] = "red"
    bike["engine_size"] = 250

    print("The bike engine size:")
    print(bike["engine_size"])
    print()

    print("Bike color:")
    print(bike["color"])
    print()

    # Deleting an item:
    # Uncomment to delete item:
    # del bike["engine_size"]

    # Updating a value:
    bike["color"] = "Racer Red"

    print("New color:")
    print(bike["color"])
    print()

    # Print all the keys:
    print("They bike keys:")
    for key in bike:
        print(key)






















