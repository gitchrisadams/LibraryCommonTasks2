# Shelve Python Library Basics Part 2:
# Import the shelve library:
import shelve

# Create recipe lists:
blt = ["bacon", "lettuce", "tomato", "bread"]
beans_on_toast = ["beans", "bread"]
scrambled_eggs = ["eggs", "butter", "milk"]
soup = ["tin of soup"]
pasta = ["pasta", "cheese"]

# Write data to the file:
with shelve.open('recipes') as recipes:
    recipes["blt"] = blt
    recipes["beans_on_toast"] = beans_on_toast
    recipes["scrambled_eggs"] = scrambled_eggs
    recipes["soup"] = soup
    recipes["pasta"] = pasta

    # Loop through file and display:
    print("Recipe before adding items:")
    for snack in recipes:
        print(snack, recipes[snack])
    print()

    # Print separator:
    print("-" * 40)

    # Append items to the recipes:
    # Note: We must make a temp list to append to first:
    temp_list = recipes["blt"]
    temp_list.append("butter")
    recipes["blt"] = temp_list

    temp_list = recipes["pasta"]
    temp_list.append("tomato")
    recipes["pasta"] = temp_list

    # Loop through file and display:
    print("Recipe w/ added items: ")
    for snack in recipes:
        print(snack, recipes[snack])
    print()

    # Print separator:
    print("-" * 40)

# A way to add items without having to add to a temp list first:
# Notice we use writeback=True
with shelve.open('recipes', writeback=True) as recipes:
    # Don't have to add to temp list first:
    recipes["soup"].append("croutons")

    # Loop through file and display:
    print("Recipe w/ croutons added: ")
    for snack in recipes:
        print(snack, recipes[snack])
    print()















