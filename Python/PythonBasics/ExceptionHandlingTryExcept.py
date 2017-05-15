# Try dividing by zero:
try:
    num = 3/0
    print(num)
# If theres an error, display error message:
except:
    print('Cannot divide by zero')

# Another example of error handing:
# Get a number from the user and display it:
try:
    number = int(raw_input('Enter a number: '))
    print(number)

    # Attempt to open file that does not exist:
    bFile = open('NonExistFile.py')
    print(bFile.readline())
# If there is an error, get number from the user again:
# ValueError is used for this type of error.
except ValueError:
    print('Not a number, please re-enter: ')
    number = int(raw_input('Enter a number: '))

# Exception if a File cannot be opened:
except IOError:
    print('Cannot open file.')

# Try to open a file:
try:
    bFile = open('NonExistFile2.py')
    print(bFile.readline())

# Exception if a File cannot be opened:
except IOError:
    print('Cannot open file.')

# To prove the program did not crash, display finished message:
print('Program finished')













