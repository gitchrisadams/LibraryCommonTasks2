#!/usr/bin/python3
# Christopher Adams
# date here.
# Code description here.

# Imports
import sys


def main():
    print("This is the functions.py file.")
    for i in inclusive_range(0, 25, 1):
        print(i, end = ' ')

def inclusive_range(start, stop, step):
	"""Loops through and displays numbers.

	Loop till stop using step but similar to return, yield.
	Yield will return i but then go right back to the next statement
	of i+=step after it return/yields i. 

	Args:
		start (int): The start value.
		stop (int): The stop value.
		step (int): The step value.

	Yields:
		int: The next value in the loop.

	"""
	i = start
	while i <= stop:
		yield i
		i += step

if __name__ == '__main__':
	sys.exit(main())
