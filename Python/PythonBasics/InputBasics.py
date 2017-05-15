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

# Create variables:
number = 12

# Call function and display to screen:
print(square(number))

# Prompt user for input:
# Must convert input to int since getting initially as a String.
# NOTE: Python 3 uses input, Python 2 uses raw_input
temp = int(input("Enter a temperature: "))
scale = raw_input("Enter the scale to convert to: ")

# Store the converted temp by calling function and passing in our variables:
converted = convertTemp(temp, scale)

# Output the converted temp:
print("The converted temp is " + str(converted))

# Input of a word from the user:
# NOTE: Python 3 uses input, Python 2 uses raw_input
word = raw_input("Enter a word: " )

# Call the function that displays value passed in:
# Passing in the word from the user.
onePerLine(word)












