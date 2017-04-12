# PYTZ Python Library:

# Note: You must sudo apt-get install python3-pip
# or confirm pip installed w/ pip3 -V and
# Install pytz library w/ sudo pip3 install pytz

# import libraries:
# Timezone library:
import pytz

import datetime

# Create country variable:
country = "Europe/Moscow"

# Store the timezone passing in the country Europe/Moscow:
tz_to_display = pytz.timezone(country)

# Get the local time for Europe/Moscow:
local_time = datetime.datetime.now(tz=tz_to_display)

# Display the time in Europe/Moscow:
print("The time in {} is {}".format(country, local_time))
print()

# Display the UTC time:
print("The UTC time is {}".format(datetime.datetime.utcnow()))
print()

# List all timezone country names in the pytz library:
# for x in pytz.all_timezones:
#     print(x)
# print()

# List all timezone country names in pytz library along w/ 2-letter country code:
# for x in sorted(pytz.country_names):
#     print(x + ": " + pytz.country_names[x])
# print()

# List timezone names w/ 2-letter country code and times zones in each country:
# for x in sorted(pytz.country_names):
#     print("{}: {}: {}".format(x, pytz.country_names[x], pytz.country_timezones.get(x)))

# Loop through all the country names:
# Print out the country name two letter name and country name:
for x in sorted(pytz.country_names):
    print("{}: {}".format(x, pytz.country_names[x]), end=': ')

    # If there is a time zone then print it, otherwise display error message:
    if x in pytz.country_timezones:
        # Loop through all the country codes:
        # Store current time zone.
        # Store local time passing in tz_to_display.
        # Print the timezone w/ local time for that time zone.
        for zone in sorted(pytz.country_timezones[x]):
            tz_to_display = pytz.timezone(zone)
            local_time = datetime.datetime.now(tz=tz_to_display)
            print("\t\t{}: {}".format(zone, local_time))
    else:
        print("************************************** No time zone defined. **********************************************")














