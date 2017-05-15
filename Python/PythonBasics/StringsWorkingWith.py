# String concatenation:
s = "New"

s+= "found"

s+= "land"

print(s)

# Join:
# The strings are joined at the semicolon
colors = ';'.join(['red', 'blue', 'yellow', 'green', 'orange', 'purple'])

# Join at the - dash
phones = '-'.join(['iphone', 's7', 's8', 'flipphone'])

# Join at an empty string:
highwayman = ''.join(['high', 'way', 'man'])

print("\nThe colors joined are " + colors)
print("The phones joined are " + phones)
print("The highwayman joined: " + highwayman)

# Partition:
# The string passed into partition gets broke up into three parts
# based on the string passed in, 'forget' in this case.
unforgetablePartitioned = "unforgetable".partition("forget")

print("\nThe word unforgetable partitioned: ")
print(unforgetablePartitioned)

# Storing the three parts separately:
departure, separator, arrival = "London:Edinburgh".partition(':')

print("\nDeparture:")
print(departure)
print("\nSeparator:")
print(separator)
print("\nArrival:")
print(arrival)

# Storing three parts separately but ignoring the 2nd part:
# Convention is to use underscore as an ignored part.
origin, _, destination = "Seatle-Boston".partition('-')

print("\nOrigin")
print(origin)
print("\nDestination")
print(destination)
