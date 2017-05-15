# Python Time/DateTime

# import libraries:
import time

import datetime

# perf_counter counts elapsed time.
# Can't go negative so Operating system clock changes
# won't affect this.
from time import perf_counter as my_timer

# Same as above, calculates elapsed time.
# from time import monotonic as my_timer

import random

# Print the gmt time or epoch time:
print("The GMT time: ")
print(time.gmtime(0))
print()

# Print the local time:
print("The Local time:")
print(time.localtime(time.time()))
print()

# Print the time in number of seconds since the epoch:
print("The time:")
print(time.time())
print()

# Store the current time in a variable:
time_here = time.localtime()
print("Displaying time_here variable:")
print(time_here)
print()

print("Year/Month/Day display:")
# Print out the year, month, and day:
# So we can either display array element or use time_here.tm_year as example
# to display the date/time.
print("Year: ", time_here[0], time_here.tm_year)
print("Month: ", time_here[1], time_here.tm_mon)
print("Day: " , time_here[2], time_here.tm_mday)

# Reaction time example:
# Ask user to press enter:
input("Press enter to start")

# Store random time btween 1 and 6 seconds in variable:
wait_time = random.randint(1, 6)

# Sleep for random time:
time.sleep(wait_time)

# Start the timer:
start_time = my_timer()

# Prompt user to enter stop to stop timer:
input("Press enter to stop")

# Record the time stop was pressed:
end_time = my_timer()

# Display start and stop times:
print("Started at " + time.strftime("%X", time.localtime(start_time)))
print("Ended at " + time.strftime("%X", time.localtime(end_time)))

# Display user's reaction time:
print("Your reaction time was {} seconds".format(end_time - start_time))


print("-" * 40)
print()

# Print the current Epoch time:
# The %c represents the Locale's date/time representation, see python docs.
print("The epoch on this system starts at " + time.strftime('%c', time.gmtime(0)))
print()

# Print the current time zone:
# tzname[0] is the time and first element:
print("The current timezone is {0} with an offset of {1}".format(time.tzname[0], time.timezone))
print()

# Determine if daylightsavings is in effect:
# time.tzname[1] is the timezone and the 2nd element:
if time.daylight != 0:
    print("\tDaylight Saving Time is in effect for this location.")
    print("\tThe DST timezone is " + time.tzname[1])
print()

# Print out the local time:
# The %Y-%m etc... formats the year month day hour min sec. See Python docs.
print("Local time is " + time.strftime('%Y-%m-%d %H:%M:%S', time.localtime()))
print()

# Print out the UTC time:
print("UTC time is " + time.strftime('%Y-%m-%d %H:%M:%S', time.gmtime()))

# Separator:
print("-" * 40)
print()

# Display the date/time:
print("Today:")
print(datetime.datetime.today())
print()

print("Now:")
print(datetime.datetime.now())
print()

# Display the date/time in UTC:
print("UTC:")
print(datetime.datetime.utcnow())
print()





