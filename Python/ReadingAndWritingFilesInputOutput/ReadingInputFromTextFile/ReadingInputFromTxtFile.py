# Reading data from a file:
# Open the file. This is the path to where file is located.
# Open in read mode for 'r'
jabber = open("sample.txt", 'r')

# To Loop through entire file uncomment this:
# for line in jabber:
#     print(line)

# Loop through the file:
# If the line has text "jabberwock", print out the line.
for line in jabber:
    if "jabberwock" in line.lower():
        print(line, end='')

# Close the file:
jabber.close()

# Separator:
print("-" * 50)

# Open file w/ 'with' but not need to close file after
# because 'with' takes care of that for us.
with open("sample.txt", 'r') as jabber2:
    for line in jabber2:
        if "JAB" in line.upper():
            print(line, end='')



