# Create variables:
number = 12
denom = 0

# Prevent dividing by zero:
if denom != 0:
    print(number/denom)
else:
    print('Division by zero is not allowed')

# Grade if/elif example:
grade = 100

# Letter graded based on number grade:
# Example of using 'and' and 'or'
if grade >= 90 and grade < 100:
    letterGrade = 'A'
elif grade == 100:
    letterGrade = 'A+'
elif grade >= 80 and grade < 100:
    letterGrade = 'B'
elif grade >= 70 and grade < 100:
    letterGrade = 'C'
elif grade >= 60 and grade < 100:
    letterGrade = 'D'
elif grade > 100 or grade == 0:
    letterGrade = "You either didn't try or cheated!"
else:
    letterGrade = 'F'

# Display the letter grade:
print(letterGrade)

# If based on a range:
age = int(input("How old are you?"))

if 15 < age < 66:
    print("You are within range.")
else:
    print("Out of range Will Robinson!")

# Not to negate expression:
if not(age < 18):
    print("You are old enough to vote.")
else:
    print("Please come back in {0} years.".format(18 - age))

