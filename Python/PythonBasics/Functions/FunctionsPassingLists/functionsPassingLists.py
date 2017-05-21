#!/usr/bin/python3
# Christopher Adams
# date here.
# Code description here.

# Imports
import sys


def main():
	your_function_here("Hello world", "http://www.google.com")


def your_function_here(helloWorld, *args):
	"""Displays args passed in.

	Args:
		helloWorld (str): The string passed in.
		*args: An arbitrary number of arguments.
	"""
	print(helloWorld, args)


if __name__ == '__main__':
	sys.exit(main())
