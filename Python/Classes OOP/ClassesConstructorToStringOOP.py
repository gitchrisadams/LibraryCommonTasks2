# Person class:
class Person:
    # Constructor:
    # self is always required as first def in Constructor.
    # Rest of params are our data params to accept.
    def __init__(self, first, middle, last, age):
        self.first = first
        self.middle = middle
        self.last = last
        self.age = age

    # toString method to convert something to a String.
    # \ Character is line continuation character so we can split
    # the line into multiple lines
    # self.age must be converte to a string.
    def __str__(self):
        return self.first + ' ' + self.middle + ' ' + self.last + \
            ' Age: ' + str(self.age)

    # Function to Return the initials of an object:
    def initials(self):
        return self.first[0] + self.middle[0] + self.last[0]

    # Function to change the age to the age passed in:
    def changeAge(self, amount):
        self.age += amount

# Create a person object:
# Passing in first name, middle name, last name, and age.
aPerson = Person('Jane', 'Q', 'Public', 27)

# Print out the Person object:
print(aPerson)

# Change the person's age:
aPerson.changeAge(2)
print(aPerson)

# Display the Person's initials:
print("The person's initials are " + aPerson.initials())

