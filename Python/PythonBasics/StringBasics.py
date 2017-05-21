# Store as string:
myStr = 'string'

# Store string across multiple lines w/ triple quotes:
myStr2 = '''My string
across multiple lines
.....'''

myStr3 = """My String again, 
across multiple lines."""

print(myStr2)
print()
print(myStr3)
print()

# String length:
print("The length of myStr3 is {0}".format(len(myStr3)))
print()

# Store a number:
number = 20

# Display full String:
print(myStr)

# Print the first letter of a String using array:
print(myStr[0])

# Print everything except the first char of the String:
print(myStr[1:])

# String concat example w/ converting number to a String:
print("It takes " + str(number) + " years to reach...")

# Create Variables:
a = 12
b = 3
age = 40

# Divide and display as whole number, no decimal:
print(a // b)

# Divide and display w/ decimal place:
print(a / b)

# Printing Hello 5 times:
print("Hello" * 5)

# Boolean tells if a string is inside anther string:
# true
print("day" in "today")

# false
print("no" in "today")

# Using String placeholders:(Old way of doing it, Python 2)
print("My age is %d %s, %d %s" % (age, "years", 6, "months"))

# Displaying certain number of decimal places:
# 50 decimal places.
print("Pi is approximately %1.50f" % (22/7))

# Replacement field Syntax(Python 3 way)
# Allocate two spaces {0:2}
print("I am {0:2} years old.".format(age))

# Pi example using replacement fields.(Python 3 way)
# Allocate 1 for the 3 and 50 decimal places.
print("Pi is approximately {0:1.50f}".format(22/7))

# Replacement fields:(Python 3 way)
# Benefit is you can reuse the replacement field in multiple places
# You can't do this w/ the old python 2 way.
# Notice we have four months and 3 replacements, we use month 2 twice.
print("January: {2}, February: {0}, March: {2}, June: {1}".format(28, 30, 31))

# If you don't use a number like {2} and leave blank, 
# the .format values are put in order they occur:
print("\nThe number is {} and the other number is {}.".format(50, 60))

# Named formats can also be used:
print("\nThe location is {latitude} and {longitude}".format(latitude="60N",
                                                            longitude="5E"))

# Example of a raw String:
# String displayed w/ the esc chars:
a_string = "This is\na string split\t\tand tabbed"
print("String split and tabbed:")
print(a_string)
print()

# String displayed as raw String without esc chars:
raw_string = r"This is\na string split\t\tand tabbed"
print("The raw String using the r\"\"")
print(raw_string)
print()

# Splitting and Joining strings:
# Splits on whitespace by default:
stringToSplit1 = 'This is a string of words'
print("\nString split:")
print(stringToSplit1.split())

# Join string with colons:
stringAfterSplit1 = stringToSplit1.split()
stringJoinedWithColon = ':'.join(stringAfterSplit1)
print("\nThe String now separated w/ colons:")
print(stringJoinedWithColon)

# String methods:
s_to_mess_with = "My String to mess around with dude!"

print("\nString methods:")
print("Uppercase:")
print(s_to_mess_with.upper())

print("\nlowercase")
print(s_to_mess_with.lower())

print("\nCap first letter")
print(s_to_mess_with.capitalize())

print("\nSwap Case")
print(s_to_mess_with.swapcase())

# Find index of where string is located:
print("\nIndex where 'MESS' is located:")
print(s_to_mess_with.find('mess'))

# Replace:
print("\nReplace 'to mess' with 'for messing'")
print(s_to_mess_with.replace('to mess', 'for messing'))

# Proof that string hasn't changed:
print("\nThe original string is still intact:")
print(s_to_mess_with)

# Strip whitespace:
s_with_white_space = '       What up ganster!      '
s_no_white_space = s_with_white_space.strip();
print("\nString with no whitespace:")
print(s_no_white_space)

# Remove whitespace from only end of string:
print("\nMy String rstripped:")
print('    MyString With whitespace     '.rstrip())

# Removing a /n new line without removing beginning white space.
# If you just use strip it will remove new line but also the 
# beginning white space which you may or may not want.
s1 = 'This is a string\n'
print("\nThe new line is gone:")
print(s1.rstrip('\n'))

# Checking if a string is alphanumberic a.k.a no spaces:
print("\nIs the string all numbers")
print(s1.isalnum())

s2 = '5312356ABC'
print('\nIs s2 all numbers?')
print(s2.isalnum())

# Is string all alpha:
s3 = 'thisisastring'
print("\nIs string alpha?")
print(s3.isalpha())

s4 = 'thisisastring99'
print("\nIs string alpha?")
print(s4.isalpha())

# Is a digit:
s5 = '12345'
print('\nIs s5 a digit?')
print(s5.isdigit())

print("\nIs s4 a digit?")
print(s4.isdigit())