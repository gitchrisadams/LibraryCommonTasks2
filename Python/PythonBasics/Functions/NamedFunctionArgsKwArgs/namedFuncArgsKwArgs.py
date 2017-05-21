#!/usr/bin/python3
# Christopher Adams
# date here.
# Code description here.

# Imports
import sys


def main():
	# Pass in the kwargs.
	your_function_here(one = 1, two = 2, four = 42)

	# Pass in regular args, var len args, and keyword args:
	kwargsVarLenArgsAndRegArgs(1, 2, 3, 4, 5, 6, 7, eight=8, nine=9)


def your_function_here(**kwargs):
	"""Takes in kwargs and prints them.

	Args:
		**kwargs: Arbitrary number of keyword arguments.

	Returns:
		bool: The return value. True for success.
	"""
	print("Test function:", kwargs['one'], kwargs['two'], kwargs['four'])

	return True;


def kwargsVarLenArgsAndRegArgs(one, two, three, *args, **kwargs):
	"""Takes in kwargs and prints them.

	Note:
		Regular args, *args, and **kwargs must be passed in that order.

	Args:
		one (int): A number.
		two (int): A number.
		three (int): A number.
		*args: Variable number of arguments.
		**kwargs: Arbitrary number of keyword arguments.

	Returns:
		bool: The return value. True for success.
	"""
	print(one, two, three, args, kwargs)


if __name__ == '__main__':
	sys.exit(main())
