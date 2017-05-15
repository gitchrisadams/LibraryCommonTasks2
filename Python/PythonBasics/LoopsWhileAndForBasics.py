# Loop Examples:
number = 1

# While Loop:
while number < 11:
    print(number)
    number += 1

balance = 1000
rate = 1.02
years = 0

# Another While Loop example:
while balance < 5000:
    balance *= rate
    years += 1

print("It takes " + str(years) + " years to reach $5000.")

# For Loop using a range:
for i in range(1,11):
    print(i)

# More For Loop examples:
sum = 0

numbers = range(1, 11)

for i in numbers:
    sum += i

print(sum)

# For Loop w/ Step, Step is 5:
for i in range(0, 100, 5):
    print("i is {} ".format(i))

# Continue Example:
# Create a list of shopping items:
shopping_list = ["milk", "pasta", "eggs", "spam", "bread", "rice"]

for item in shopping_list:
    # If the item is spam then continue loop and don't buy it below:
    if item == 'spam':
        continue

    # Display item to buy:
    print("Buy " + item)


# Break Example:
# Create a list of meal items:
meals = {"egg", "bacon", "spam", "sausages"}

# Keep track of nasty food items, initialize as empty string:
nasty_food_item = ''

# Loop through the meals and break if item is spam:
for meal in meals:
    if meal == 'spam':
        nasty_food_item = meal
        break

# If nasty_food_item is set, then display it:
if nasty_food_item:
    print("Why must I have a nasty food item!")

# Iterator Example:
myString = "12345676890"

# Create Iterator variable:
my_interator = iter(myString)

# Display each number in the String:
print(next(my_interator))
print(next(my_interator))
print(next(my_interator))
print(next(my_interator))
print(next(my_interator))
print(next(my_interator))
print(next(my_interator))
print(next(my_interator))
print(next(my_interator))
print(next(my_interator))
print(next(my_interator))