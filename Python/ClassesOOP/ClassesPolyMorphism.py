#!/usr/bin/python3
# Christopher Adams
# date here.
# Code description here.

# Imports
import sys

# Inherits from Animal class:
class Duck:
	def noise(self): print('Quaaaaaak!')
	def bodyCovering(self): print('Duck has feathers')
	def birdSeed(self): print("Yum, yes please! Got have more birdseed...")
	def chasesCats(self): print("Chase cats?!? No way, gets chased!")
	def walk(self): print("Walks like a duck.")

class Dog:
	def noise(self): print('Woof!')
	def bodyCovering(self): print('The dog has brown and white fur')
	def birdSeed(self): print("Birdseed?!? No way!, Dog food please.")
	def chasesCats(self): print("Chase cats? Cats! It's what's for dinner!")
	def walk(self): print("Walks like a dog.")


# Accepts a dog but can also pass it a duck due to
# plolymorphism, same w/ passing dog to a duck below.
def in_the_forest(dog):
	dog.noise()
	dog.bodyCovering()


def in_the_pond(duck):
	duck.noise()
	duck.birdSeed()

def main():
	donald = Duck()
	fido = Dog()

	for animal in (donald, fido):
		animal.noise()
		animal.bodyCovering()
		animal.birdSeed()
		animal.chasesCats()
		animal.walk()
		print("")
	print("")

	# Passing duck to dog and dog to duck to illustrate
	# how polymorphism works.
	in_the_forest(donald)
	print("")
	in_the_pond(fido)


if __name__ == '__main__':
	sys.exit(main())
