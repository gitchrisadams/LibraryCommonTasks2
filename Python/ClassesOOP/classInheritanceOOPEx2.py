#!/usr/bin/python3
# Christopher Adams
# date here.
# Code description here.

# Imports
import sys

# Create base/super/parent class:
class Animal:
	def talk(self): print("I have something to say")
	def walk(self): print("Hey! I'm walking here!")
	def clothes(self): print("I have nice clothes.")

# Inherits from Animal class:
class Duck(Animal):
	def quack(self):
		print("Quaaaack!")

	# Call the super classes walk function. (The Animals walk function)
	# After that is output, Walks like a duck still displays.
	def walk(self):
		super().walk()
		print("Walks like a duck.")

class Snuffalupokus(Animal):
	def walk(self): print("Snuffy be walking!")


def main():
	donald = Duck()
	donald.quack()
	donald.walk()

	snuffy = Snuffalupokus();
	snuffy.walk()
	print("Snuffy:")
	snuffy.talk()


if __name__ == '__main__':
	sys.exit(main())
