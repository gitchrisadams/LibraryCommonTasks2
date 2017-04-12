# Writing Data to a file:

# Create list of cities:
cities = ["Adelaide", "Alice Springs", "Darwin", "Melbourne", "Sydney"]

# Open a cities text file in 'w' write mode:
# Uncomment to write a new text file:
# with open("cities.txt", 'w') as city_file:
#     # Loop through the cities text file and write the list to the file:
#     for city in cities:
#         print(city, file=city_file)

# Reading in text file we wrote above:
# Create empty list:
cities_from_txt = []

# Open the cities.text file in read mode:
# Loop through the file and append each city to the new list.
with open("cities.txt", 'r') as city_file:
    for city in city_file:
        cities_from_txt.append(city)

# Output the whole list:
print(cities)
print()

# Loop through list and display each on a new line:
for city in cities:
    print(city)






