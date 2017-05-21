""" Christopher Adams
    3/31/17 
    Function Basics 
"""

# Define a function to square a number:
def square(num):
    return num * num


# Define function to convert a temperature:
def convertTemp(temp, scale):
    if scale == "c":
        return (temp - 32.0) * (5.0/9.0)
    elif scale == "f":
        return temp * 9.0/5.0 + 32


# Define function to display a string:
def onePerLine(str):
    for i in str:
        print(i)
    print()


# Accept a variable length of arguments:
def acceptMultArgs(*multArgs):
    for arg in multArgs:
        print(arg)
    print()


# Create variables:
number = 12

# Call function and display to screen:
print(square(number))

# Prompt user for input:
# Must convert input to int since getting initially as a String.
# NOTE: Python 3 uses input, Python 2 uses raw_input
temp = int(input("Enter a temperature: "))
scale = input("Enter the scale to convert to: ")

# Store the converted temp by calling function and passing in our variables:
converted = convertTemp(temp, scale)

# Output the converted temp:
print("The converted temp is " + str(converted))
print()

# Input of a word from the user:
# NOTE: Python 3 uses input, Python 2 uses raw_input
word = input("Enter a word: " )

# Call the function that displays value passed in:
# Passing in the word from the user.
onePerLine(word)

# Call method that will accept a variable amount of args we pass it:
# Also can be numbers and Strings.
acceptMultArgs("Chris", "John", 1, 3, "Mary")
acceptMultArgs("Tom")











