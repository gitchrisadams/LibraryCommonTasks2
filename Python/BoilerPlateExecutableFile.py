#!/usr/bin/python3
# Christopher Adams
# date here.
# Code description here.

# Imports
import sys


def main():
	your_function_here("http://www.google.com")


def your_function_here(url):
	"""Displays Hello world

	A more detailed explaination of the code. This fake
	explaination is just used for demonstration purposes
	and doesn't actually represent the actual values and params
	below. Use as boilerplate docstring. See this site
	http://sphinxcontrib-napoleon.readthedocs.io/en/latest/example_google.html
	for a good example of docstring comments.

	Args:
		"Hello world" (str): The string.

	Returns:
		bool: The return value. True for success, False otherwise.
	"""
	print("Hello world", url)
	return True;


if __name__ == '__main__':
	sys.exit(main())
